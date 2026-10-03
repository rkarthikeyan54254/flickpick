import fs from 'node:fs';

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

if (queue.branch !== 'certification-next-150-hi-ta-te-20261003') {
  failures.push(`unexpected branch marker: ${queue.branch}`);
}

if (queue.methodology?.editorialLens !== 'bharatiya-hindu-civilizational') {
  failures.push('editorial lens must remain bharatiya-hindu-civilizational');
}

if (queue.methodology?.publicationMode !== 'hold-until-complete') {
  failures.push('research queue must stay held from publication');
}

if (!Array.isArray(queue.cohorts) || queue.cohorts.length !== 3) {
  failures.push(`expected 3 cohorts, found ${queue.cohorts?.length ?? 0}`);
}

for (const cohort of queue.cohorts || []) {
  const expectedLanguage = expected.get(cohort.id);
  if (!expectedLanguage) {
    failures.push(`unexpected cohort ${cohort.id}`);
    continue;
  }
  if (cohort.language !== expectedLanguage) {
    failures.push(`${cohort.id}: expected ${expectedLanguage}, found ${cohort.language}`);
  }
  if (cohort.targetCount !== 50 || cohort.records?.length !== 50) {
    failures.push(`${cohort.id}: expected exactly 50 records, found ${cohort.records?.length ?? 0}`);
  }

  const localKeys = new Set();
  for (const record of cohort.records || []) {
    const key = `${normalizeTitle(record.title)}::${record.year}`;
    if (localKeys.has(key)) failures.push(`${cohort.id}: duplicate ${key}`);
    localKeys.add(key);
    allKeys.push(key);

    if (record.year !== 2025) failures.push(`${cohort.id}: ${record.title} has unexpected year ${record.year}`);
    if (record.language !== expectedLanguage) failures.push(`${cohort.id}: ${record.title} has language ${record.language}`);
    if (record.stage !== 'queued' || record.verdict !== 'pending') {
      failures.push(`${cohort.id}: ${record.title} must remain queued/pending until evidence work is complete`);
    }
  }
}

if (allKeys.length !== 150) failures.push(`expected 150 total records, found ${allKeys.length}`);
if (new Set(allKeys).size !== allKeys.length) failures.push('duplicate title/year key exists across language queues');

if (failures.length) {
  console.error('Next-150 queue validation FAILED');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('Next-150 queue validation PASS');
console.log('- 50 Hindi queued');
console.log('- 50 Tamil queued');
console.log('- 50 Telugu queued');
console.log('- 150 unique title/year candidate keys');
console.log('- publication hold preserved');
