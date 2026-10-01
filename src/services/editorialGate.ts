import type { SanghiProfile } from '../types/sanghi';

export interface EditorialGateResult {
  eligible: boolean;
  failures: string[];
}

export function evaluateEditorialGate(profile: SanghiProfile): EditorialGateResult {
  const failures: string[] = [];

  if (!profile.auditStatus || !['reviewed', 'hardened'].includes(profile.auditStatus)) {
    failures.push('audit-status');
  }

  if (!profile.reviewDepth || profile.reviewDepth === 'desk') {
    failures.push('review-depth');
  }

  if (profile.reasons.length < 2) failures.push('reasons');
  if (profile.evidence.length < 1) failures.push('evidence');

  const gate = profile.publicationGate;
  if (!gate) {
    failures.push('publication-gate');
  } else {
    if (!gate.adversarialPass) failures.push('adversarial-pass');
    if (!gate.regionalContextPass) failures.push('regional-context-pass');
    if (!gate.socialRadarPass) failures.push('social-radar-pass');
    if (!gate.narrativeIntegrityPass) failures.push('narrative-integrity-pass');
    if (!gate.factInterpretationIntentPass) failures.push('fact-interpretation-intent-pass');
    if (!gate.evidenceSufficiencyPass) failures.push('evidence-sufficiency-pass');
    if (!gate.explanationPass) failures.push('explanation-pass');
    if (!gate.selfFalsificationPass) failures.push('self-falsification-pass');
  }

  return { eligible: failures.length === 0, failures };
}

export function isPublicationEligible(profile: SanghiProfile) {
  return evaluateEditorialGate(profile).eligible;
}
