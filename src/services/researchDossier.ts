import type { ResearchDossier, ResearchProbeId, SanghiProfile } from '../types/sanghi';

export const REQUIRED_RESEARCH_PROBES: ResearchProbeId[] = [
  'source-adaptation',
  'identity-substitution',
  'historical-claims',
  'quantitative-claims',
  'real-person-attribution',
  'sacred-religious-valence',
  'regional-context',
  'creator-source-conflict',
  'social-radar',
  'self-falsification',
];

export interface ResearchReadiness {
  complete: boolean;
  failures: string[];
  ambiguousHighRisk: string[];
  materialFindings: string[];
}

function hasText(value: string | undefined) {
  return Boolean(value && value.trim().length >= 12);
}

function evidenceUrls(profile: SanghiProfile) {
  return new Set(profile.evidence.map((item) => item.url).filter((url): url is string => Boolean(url)));
}

function validateDossier(profile: SanghiProfile, dossier: ResearchDossier): ResearchReadiness {
  const failures: string[] = [];
  const ambiguousHighRisk: string[] = [];
  const materialFindings: string[] = [];
  const urls = evidenceUrls(profile);

  if (!dossier.complete) failures.push('dossier-incomplete');
  if (!hasText(dossier.filmUnderstanding)) failures.push('film-understanding');
  if (!dossier.completedAt) failures.push('dossier-completed-at');

  const byId = new Map(dossier.riskProbes.map((probe) => [probe.id, probe]));
  for (const id of REQUIRED_RESEARCH_PROBES) {
    const probe = byId.get(id);
    if (!probe) {
      failures.push(`probe-missing:${id}`);
      continue;
    }
    if (!hasText(probe.summary)) failures.push(`probe-summary:${id}`);
    if (probe.status !== 'not-applicable' && probe.evidenceUrls.length === 0) {
      failures.push(`probe-evidence:${id}`);
    }
    for (const url of probe.evidenceUrls) {
      if (!urls.has(url)) failures.push(`probe-evidence-not-in-profile:${id}`);
    }
    if (probe.status === 'ambiguous' && probe.materiality === 'high') {
      ambiguousHighRisk.push(id);
    }
    if (probe.status === 'finding' && probe.materiality === 'high') {
      materialFindings.push(id);
    }
  }

  if (!dossier.redTeam.completed) failures.push('red-team-incomplete');
  if (!hasText(dossier.redTeam.strongestChallenge)) failures.push('red-team-challenge');
  if (!hasText(dossier.redTeam.verdictImpact)) failures.push('red-team-impact');
  for (const url of dossier.redTeam.evidenceUrls) {
    if (!urls.has(url)) failures.push('red-team-evidence-not-in-profile');
  }
  if (dossier.redTeam.outcome === 'unresolved') ambiguousHighRisk.push('red-team-unresolved');

  const fii = dossier.factInterpretationIntent;
  if (!hasText(fii.fact)) failures.push('fact-record');
  if (!hasText(fii.interpretation)) failures.push('interpretation-record');
  if (!hasText(fii.intent)) failures.push('intent-record');

  if (profile.evidence.length < 2) failures.push('evidence-count');
  if (!profile.evidence.some((item) => item.kind !== 'social')) failures.push('non-social-evidence');

  const hasHighRiskProbe = dossier.riskProbes.some(
    (probe) => probe.materiality === 'high' && ['finding', 'ambiguous'].includes(probe.status),
  );
  if (hasHighRiskProbe && dossier.strongestCounterEvidence.length === 0) {
    failures.push('counter-evidence-required');
  }

  return {
    complete: failures.length === 0,
    failures,
    ambiguousHighRisk,
    materialFindings,
  };
}

export function evaluateResearchReadiness(profile: SanghiProfile): ResearchReadiness {
  if (!profile.researchDossier) {
    return { complete: false, failures: ['research-dossier'], ambiguousHighRisk: [], materialFindings: [] };
  }
  return validateDossier(profile, profile.researchDossier);
}
