import { corpus50FAudit } from '../.corpus50f-audit/corpus50FAudit.js';

const failures = [];
if (corpus50FAudit.total !== 50) failures.push(`expected 50 profiles, got ${corpus50FAudit.total}`);
if (corpus50FAudit.unique !== 50) failures.push(`expected 50 unique title/year records, got ${corpus50FAudit.unique}`);
if (corpus50FAudit.duplicateWithin.length) failures.push(`internal duplicates: ${corpus50FAudit.duplicateWithin.join(', ')}`);
if (corpus50FAudit.overlaps.length) failures.push(`already-existing title/year records: ${corpus50FAudit.overlaps.join(', ')}`);
if (corpus50FAudit.overlapsWithPreviousV2.length) failures.push(`already-existing v2 title/year records: ${corpus50FAudit.overlapsWithPreviousV2.join(', ')}`);
if (corpus50FAudit.notPublicationEligible.length) failures.push(`publication-gate failures: ${corpus50FAudit.notPublicationEligible.join(', ')}`);
if (corpus50FAudit.gateFailures.length) failures.push(`research-gate failures: ${corpus50FAudit.gateFailures.join(', ')}`);
if (corpus50FAudit.wrongLens.length) failures.push(`wrong editorial lens: ${corpus50FAudit.wrongLens.join(', ')}`);
if (corpus50FAudit.incompleteDossiers.length) failures.push(`incomplete v2 dossiers: ${corpus50FAudit.incompleteDossiers.join(', ')}`);
if (corpus50FAudit.wrongLanguage.length) failures.push(`non-Tamil records: ${corpus50FAudit.wrongLanguage.join(', ')}`);

if (failures.length) {
  console.error('Corpus 50F Tamil-only validation FAILED');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Corpus 50F Tamil-only validation PASS');
console.log(JSON.stringify({ total: corpus50FAudit.total, verdictCounts: corpus50FAudit.verdictCounts }, null, 2));
