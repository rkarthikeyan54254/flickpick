import type { IntegrityFlag, SanghiProfile } from '../types/sanghi';

export type PublicationLane = 'auto-publish' | 'provisional-hold' | 'human-review';

export interface EditorialGateResult {
  eligible: boolean;
  failures: string[];
  lane: PublicationLane;
  escalationReasons: string[];
}

const HIGH_RISK_INTEGRITY_TYPES = new Set([
  'identity-asymmetry',
  'identity-substitution',
  'ideological-substitution',
  'source-fidelity',
  'adaptation-delta',
  'quantitative-claim',
  'biographical-credit',
  'historical-claim',
]);

function isHighRiskIntegrityFlag(flag: IntegrityFlag) {
  return (
    HIGH_RISK_INTEGRITY_TYPES.has(flag.type) &&
    ['verified', 'supported', 'disputed'].includes(flag.status)
  );
}

export function evaluateEditorialGate(profile: SanghiProfile): EditorialGateResult {
  const failures: string[] = [];
  const escalationReasons: string[] = [];

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

  const unverifiedIntegrity = profile.integrityFlags.filter((flag) => flag.status === 'unverified');
  if (unverifiedIntegrity.length > 0) {
    failures.push('unverified-integrity-finding');
  }

  const eligible = failures.length === 0;

  if (!eligible) {
    return {
      eligible,
      failures,
      lane: 'provisional-hold',
      escalationReasons,
    };
  }

  const highRiskFindings = profile.integrityFlags.filter(isHighRiskIntegrityFlag);
  if (highRiskFindings.length > 0) {
    escalationReasons.push(
      ...highRiskFindings.map((flag) => `high-risk-integrity:${flag.type}:${flag.status}`),
    );
  }

  if (profile.confidence !== 'high') {
    escalationReasons.push(`confidence:${profile.confidence}`);
  }

  if (escalationReasons.length > 0) {
    return {
      eligible,
      failures,
      lane: 'human-review',
      escalationReasons,
    };
  }

  return {
    eligible,
    failures,
    lane: 'auto-publish',
    escalationReasons,
  };
}

export function isPublicationEligible(profile: SanghiProfile) {
  return evaluateEditorialGate(profile).eligible;
}

export function publicationLane(profile: SanghiProfile) {
  return evaluateEditorialGate(profile).lane;
}
