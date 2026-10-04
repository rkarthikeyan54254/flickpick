import { readdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

async function findEntry(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await findEntry(path);
      if (nested) return nested;
    } else if (/^fullRecertificationAudit(?:-[A-Za-z0-9_-]+)?\.(?:m?js)$/.test(entry.name)) {
      return path;
    }
  }
  return undefined;
}

const auditDir = resolve('.recert-audit');
const entry = await findEntry(auditDir);
if (!entry) {
  throw new Error('Unable to locate the SSR-built full re-certification audit entry.');
}

const { getFullRecertificationAudit } = await import(pathToFileURL(entry).href);
const audit = getFullRecertificationAudit();

console.log(
  `Full re-certification audit: total=${audit.totalProfiles}, published=${audit.publishedProfiles}, migrated-v2=${audit.migratedV2Profiles}, legacy-held=${audit.legacyProfilesHeld}`
);

if (!audit.originalTitleResolutionRegression) {
  throw new Error('Certification lookup regression: TMDb localized title did not resolve through original_title to Do Bigha Zamin (1953).');
}
console.log('Certification lookup regression: localized display title -> original_title resolution PASS');

if (audit.legacyHeld.length) {
  console.error('Current legacy profiles still held:');
  for (const profile of audit.legacyHeld) {
    console.error(`- ${profile.title} (${profile.year}, ${profile.language}) — ${profile.methodologyVersion}`);
  }
}

if (audit.legacyPublished.length) {
  console.error('ERROR: legacy profiles are publication eligible:');
  for (const profile of audit.legacyPublished) {
    console.error(`- ${profile.title} (${profile.year}, ${profile.language}) — ${profile.methodologyVersion}`);
  }
}

if (audit.legacyHeld.length !== 0 || audit.legacyPublished.length !== 0) {
  throw new Error(
    `Full re-certification is incomplete: ${audit.legacyHeld.length} legacy held and ${audit.legacyPublished.length} legacy published profile(s) remain.`
  );
}
