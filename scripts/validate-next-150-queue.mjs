import fs from 'node:fs';
import { next150QueueAudit } from '../.next150queue-audit/next150QueueAudit.js';

const queue = JSON.parse(
  fs.readFileSync(new URL('../research/certification-next-150-2026-10-03.json', import.meta.url), 'utf8'),
);

const expected = new Map([
  ['50G', 'Hindi'],
  ['50H', 'Tamil'],
  ['50I', 'Telugu'],
]);

function normalizeTitle(value) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
}

const failures = [];
const allKeys = [];

if (queue.branch !== 'certification-next-150-hi-ta-te-20261003') failures.push(`unexpected branch marker: ${queue.branch}`);
if (queue.methodology?.editorialLens !== 'bharatiya-hindu-civilizational') failures.push('editorial lens must remain bharatiya-hindu-civilizational');
if (queue.methodology?.publicationMode !== 'hold-until-complete') failures.push('research queue must stay held from publication');
if (!Array.isArray(queue.cohorts) || queue.cohorts.length !== 3) failures.push(`expected 3 cohorts, found ${queue.cohorts?.length ?? 0}`);

for (const cohort of queue.cohorts || []) {
  const expectedLanguage = expected.get(cohort.id);
  if (!expectedLanguage) {
    failures.push(`unexpected cohort ${cohort.id}`);
    continue;
  }
  if (cohort.language !== expectedLanguage) failures.push(`${cohort.id}: expected ${expectedLanguage}, found ${cohort.language}`);
  if (cohort.targetCount !== 50 || cohort.records?.length !== 50) failures.push(`${cohort.id}: expected exactly 50 records, found ${cohort.records?.length ?? 0}`);

  const localKeys = new Set();
  for (const record of cohort.records || []) {
    const key = `${normalizeTitle(record.title)}::${record.year}`;
    if (localKeys.has(key)) failures.push(`${cohort.id}: duplicate ${key}`);
    localKeys.add(key);
    allKeys.push(key);

    if (record.year !== 2025) failures.push(`${cohort.id}: ${record.title} has unexpected year ${record.year}`);
    if (record.language !== expectedLanguage) failures.push(`${cohort.id}: ${record.title} has language ${record.language}`);
    if (record.stage !== 'queued' || record.verdict !== 'pending') failures.push(`${cohort.id}: ${record.title} must remain queued/pending until evidence work is complete`);
  }
}

if (allKeys.length !== 150) failures.push(`expected 150 total records, found ${allKeys.length}`);
if (new Set(allKeys).size !== allKeys.length) failures.push('duplicate title/year key exists across language queues');

if (next150QueueAudit.total !== 150) failures.push(`typed queue expected 150 records, found ${next150QueueAudit.total}`);
if (next150QueueAudit.unique !== 150) failures.push(`typed queue expected 150 unique records, found ${next150QueueAudit.unique}`);
if (next150QueueAudit.counts.Hindi !== 50 || next150QueueAudit.counts.Tamil !== 50 || next150QueueAudit.counts.Telugu !== 50) {
  failures.push(`typed cohort counts wrong: ${JSON.stringify(next150QueueAudit.counts)}`);
}
if (next150QueueAudit.duplicateWithinQueue.length) failures.push(`typed queue duplicates: ${next150QueueAudit.duplicateWithinQueue.join(', ')}`);
if (next150QueueAudit.wrongCohortLanguage.length) failures.push(`typed queue language/cohort mismatches: ${next150QueueAudit.wrongCohortLanguage.map((item) => item.title).join(', ')}`);
if (next150QueueAudit.overlapsWithExistingCorpus.length) {
  failures.push(`already-existing title/year candidates: ${next150QueueAudit.overlapsWithExistingCorpus.map((item) => `${item.cohort}:${item.title} (${item.year})`).join(', ')}`);
}

if (failures.length) {
  console.error('Next-150 queue validation FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Next-150 queue validation PASS');
console.log(JSON.stringify({
  total: next150QueueAudit.total,
  counts: next150QueueAudit.counts,
  unique: next150QueueAudit.unique,
  overlapsWithExistingCorpus: next150QueueAudit.overlapsWithExistingCorpus.length,
  publicationHold: queue.methodology.publicationMode,
}, null, 2));
