import { corpus50DAudit } from '../.corpus50d-audit/corpus50DAudit.js';

const failures = [];
if (corpus50DAudit.total !== 50) failures.push(`expected 50 profiles, got ${corpus50DAudit.total}`);
if (corpus50DAudit.unique !== 50) failures.push(`expected 50 unique title/year records, got ${corpus50DAudit.unique}`);
if (corpus50DAudit.duplicateWithin.length) failures.push(`internal duplicates: ${corpus50DAudit.duplicateWithin.join(', ')}`);
if (corpus50DAudit.overlaps.length) failures.push(`already-existing v2 title/year records: ${corpus50DAudit.overlaps.join(', ')}`);
if (corpus50DAudit.notPublicationEligible.length) failures.push(`publication-gate failures: ${corpus50DAudit.notPublicationEligible.join(', ')}`);
if (corpus50DAudit.wrongLens.length) failures.push(`wrong editorial lens: ${corpus50DAudit.wrongLens.join(', ')}`);
if (corpus50DAudit.incompleteDossiers.length) failures.push(`incomplete v2 dossiers: ${corpus50DAudit.incompleteDossiers.join(', ')}`);
if (corpus50DAudit.missingMandatory.length) failures.push(`missing mandatory records: ${corpus50DAudit.missingMandatory.join(', ')}`);

if (failures.length) {
  console.error('Corpus 50D validation FAILED');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Corpus 50D validation PASS');
console.log(JSON.stringify({ total: corpus50DAudit.total, verdictCounts: corpus50DAudit.verdictCounts }, null, 2));
