import type { IntegrityFlag, SanghiProfile } from '../types/sanghi';
import { editorialEscalations } from '../data/editorialEscalations';
import { editorialApprovals } from '../data/editorialApprovals';
import { evaluateResearchReadiness } from './researchDossier';

export type PublicationLane = 'auto-publish' | 'provisional-hold' | 'human-review';

export interface EditorialGateResult {
  /** True only when this record may publish without a pending human exception review. */
  eligible: boolean;
  /** True when research/process is complete even if a genuine ambiguity requires adjudication. */
  gatePassed: boolean;
  failures: string[];
  lane: PublicationLane;
  escalationReasons: string[];
  approvalApplied: boolean;
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

function escalationKey(profile: SanghiProfile) {
  return `${profile.title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim()}::${profile.year}`;
}

function baseFailures(profile: SanghiProfile) {
  const failures: string[] = [];
  if (!profile.auditStatus || !['reviewed', 'hardened'].includes(profile.auditStatus)) failures.push('audit-status');
  if (!profile.reviewDepth || profile.reviewDepth === 'desk') failures.push('review-depth');
  if (profile.reasons.length < 2) failures.push('reasons');
  if (profile.evidence.length < 1) failures.push('evidence');
  if (profile.integrityFlags.some((flag) => flag.status === 'unverified')) failures.push('unverified-integrity-finding');
  return failures;
}

function evaluateLegacyV1(profile: SanghiProfile): EditorialGateResult {
  const failures = baseFailures(profile);
  const escalationReasons: string[] = [];
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

  if (failures.length > 0) {
    return { eligible: false, gatePassed: false, failures, lane: 'provisional-hold', escalationReasons, approvalApplied: false };
  }

  const highRiskFindings = profile.integrityFlags.filter(isHighRiskIntegrityFlag);
  escalationReasons.push(...highRiskFindings.map((flag) => `high-risk-integrity:${flag.type}:${flag.status}`));

  const key = escalationKey(profile);
  escalationReasons.push(...(editorialEscalations[key] || []).map((reason) => `calibration:${reason}`));
  if (profile.confidence !== 'high') escalationReasons.push(`confidence:${profile.confidence}`);

  const approvalApplied = Boolean(editorialApprovals[key]);
  if (escalationReasons.length > 0 && !approvalApplied) {
    return { eligible: false, gatePassed: true, failures, lane: 'human-review', escalationReasons, approvalApplied: false };
  }

  return { eligible: true, gatePassed: true, failures, lane: 'auto-publish', escalationReasons, approvalApplied };
}

function evaluateEvidenceDerivedV2(profile: SanghiProfile): EditorialGateResult {
  const failures = baseFailures(profile);
  const readiness = evaluateResearchReadiness(profile);
  failures.push(...readiness.failures);
  const escalationReasons: string[] = [];

  // Research incomplete means provisional hold. Human review is never used as a substitute for unfinished research.
  if (failures.length > 0) {
    return { eligible: false, gatePassed: false, failures, lane: 'provisional-hold', escalationReasons, approvalApplied: false };
  }

  escalationReasons.push(...readiness.ambiguousHighRisk.map((id) => `research-ambiguity:${id}`));

  const highRiskFindings = profile.integrityFlags.filter(isHighRiskIntegrityFlag);
  escalationReasons.push(...highRiskFindings.map((flag) => `high-risk-integrity:${flag.type}:${flag.status}`));

  const key = escalationKey(profile);
  escalationReasons.push(...(editorialEscalations[key] || []).map((reason) => `calibration:${reason}`));

  const approvalApplied = Boolean(editorialApprovals[key]);
  if (escalationReasons.length > 0 && !approvalApplied) {
    return { eligible: false, gatePassed: true, failures, lane: 'human-review', escalationReasons, approvalApplied: false };
  }

  return { eligible: true, gatePassed: true, failures, lane: 'auto-publish', escalationReasons, approvalApplied };
}

export function evaluateEditorialGate(profile: SanghiProfile): EditorialGateResult {
  if (profile.researchDossier || profile.methodologyVersion.startsWith('2.0')) {
    return evaluateEvidenceDerivedV2(profile);
  }
  return evaluateLegacyV1(profile);
}

export function isPublicationEligible(profile: SanghiProfile) {
  return evaluateEditorialGate(profile).eligible;
}

export function publicationLane(profile: SanghiProfile) {
  return evaluateEditorialGate(profile).lane;
}
