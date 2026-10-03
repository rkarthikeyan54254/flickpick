import { pakistanTerrorPerspectiveAudit as audit } from '../.perspective-audit/pakistanTerrorPerspectiveAudit.js';

const failures = [];
if (audit.expected !== 9) failures.push(`expected 9 revisions, got ${audit.expected}`);
if (audit.resolved !== 9) failures.push(`expected 9 resolved live profiles, got ${audit.resolved}`);
if (audit.missing.length) failures.push(`missing live revisions: ${audit.missing.join(', ')}`);
if (audit.wrongStatus.length) failures.push(`wrong live verdicts: ${audit.wrongStatus.join(', ')}`);
if (audit.wrongGate.length) failures.push(`wrong perspective gates: ${audit.wrongGate.join(', ')}`);
if (audit.notPublicationEligible.length) failures.push(`publication failures: ${audit.notPublicationEligible.join(', ')}`);
if (audit.certifiedHardStopConflicts.length) failures.push(`certified hard-stop conflicts: ${audit.certifiedHardStopConflicts.join(', ')}`);

if (failures.length) {
  console.error('Pakistan/terror perspective hard-gate validation FAILED');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Pakistan/terror perspective hard-gate validation PASS');
console.log(JSON.stringify({ expected: audit.expected, resolved: audit.resolved }, null, 2));
