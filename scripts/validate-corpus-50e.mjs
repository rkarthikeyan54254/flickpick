import { corpus50EAudit } from '../.corpus50e-audit/corpus50EAudit.js';

const failures = [];
if (corpus50EAudit.total !== 50) failures.push(`expected 50 profiles, got ${corpus50EAudit.total}`);
if (corpus50EAudit.unique !== 50) failures.push(`expected 50 unique title/year records, got ${corpus50EAudit.unique}`);
if (corpus50EAudit.duplicateWithin.length) failures.push(`internal duplicates: ${corpus50EAudit.duplicateWithin.join(', ')}`);
if (corpus50EAudit.overlaps.length) failures.push(`already-existing title/year records: ${corpus50EAudit.overlaps.join(', ')}`);
if (corpus50EAudit.overlapsWithPreviousV2.length) failures.push(`already-existing v2 title/year records: ${corpus50EAudit.overlapsWithPreviousV2.join(', ')}`);
if (corpus50EAudit.notPublicationEligible.length) failures.push(`publication-gate failures: ${corpus50EAudit.notPublicationEligible.join(', ')}`);
if (corpus50EAudit.gateFailures.length) failures.push(`research-gate failures: ${corpus50EAudit.gateFailures.join(', ')}`);
if (corpus50EAudit.wrongLens.length) failures.push(`wrong editorial lens: ${corpus50EAudit.wrongLens.join(', ')}`);
if (corpus50EAudit.incompleteDossiers.length) failures.push(`incomplete v2 dossiers: ${corpus50EAudit.incompleteDossiers.join(', ')}`);
if (corpus50EAudit.wrongLanguage.length) failures.push(`non-Hindi records: ${corpus50EAudit.wrongLanguage.join(', ')}`);

if (failures.length) {
  console.error('Corpus 50E Hindi-only validation FAILED');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Corpus 50E Hindi-only validation PASS');
console.log(JSON.stringify({ total: corpus50EAudit.total, verdictCounts: corpus50EAudit.verdictCounts }, null, 2));
