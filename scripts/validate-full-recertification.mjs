import { readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

async function findEntry(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await findEntry(path);
      if (nested) return nested;
    } else if (/^sanghi(?:-[A-Za-z0-9_-]+)?\.(?:m?js)$/.test(entry.name)) {
      return path;
    }
  }
  return undefined;
}

const auditDir = resolve('.recert-audit');
const entry = await findEntry(auditDir);
if (!entry) {
  throw new Error('Unable to locate the SSR-built sanghi audit entry.');
}

const { getCorpusStats } = await import(pathToFileURL(entry).href);
const stats = getCorpusStats();

console.log(
  `Full re-certification audit: total=${stats.totalProfiles}, published=${stats.publishedProfiles}, migrated-v2=${stats.migratedV2Profiles}, legacy-held=${stats.legacyProfilesHeld}`
);

if (stats.legacyProfilesHeld !== 0) {
  throw new Error(
    `Full re-certification is incomplete: ${stats.legacyProfilesHeld} current legacy profile(s) still require evidence-derived v2 replacement or an explicit v2 evidence hold.`
  );
}
