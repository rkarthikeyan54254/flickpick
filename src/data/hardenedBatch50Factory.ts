import type {
  CertificationStatus,
  Confidence,
  EvidenceItem,
  IntegrityFlag,
  ResearchProbeId,
  ResearchSourceBasis,
  SanghiDimensions,
  SanghiProfile,
} from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

export interface BatchRiskFinding {
  id: ResearchProbeId;
  summary: string;
  evidenceIndexes: number[];
  status?: 'finding' | 'ambiguous';
  materiality?: 'medium' | 'high';
}

export interface HardenedFilmSpec {
  title: string;
  year: number;
  language: string;
  status: CertificationStatus;
  confidence?: Confidence;
  sourceBasis: ResearchSourceBasis;
  dimensions: SanghiDimensions;
  tags: string[];
  reasons: [string, string, ...string[]];
  evidence: [EvidenceItem, EvidenceItem, ...EvidenceItem[]];
  filmUnderstanding: string;
  researchFocus: string;
  redTeamChallenge: string;
  fact: string;
  interpretation: string;
  intent: string;
  risks?: BatchRiskFinding[];
  integrityFlags?: IntegrityFlag[];
  humanReview?: boolean;
}

function discoveryQueries(spec: HardenedFilmSpec) {
  return [
    `${spec.title} ${spec.researchFocus} source adaptation based on true story biopic`,
    `${spec.title} religion caste community identity substitution representation`,
    `${spec.title} Brahmin Dalit Adivasi Hindu Muslim Sikh Christian Jain Buddhist caste regional linguistic community insult slur stereotype ridicule contempt bashing representation controversy`,
    `${spec.title} Hindu deity goddess temple puja priest Veda Ramayana Mahabharata sacred symbol ritual ridicule desecration inversion mockery anti-Hindu`,
    `${spec.title} Hindutva politics versus Hindu religion distinction sacred figure allegory symbolism`,
    `${spec.title} criticism of individual practice institution versus generalized community contempt stereotype`,
    `${spec.title} history accuracy factual dispute controversy criticism`,
    `${spec.title} director writer actor interview ${spec.researchFocus}`,
    `${spec.title} regional context audience criticism social media controversy`,
    `${spec.title} strongest counterargument to cultural interpretation`,
  ];
}

export function makeHardenedBatchFilm(spec: HardenedFilmSpec): SanghiProfile {
  const probeOverrides = Object.fromEntries(
    (spec.risks || []).map((risk) => [
      risk.id,
      {
        status: risk.status || 'finding',
        materiality: risk.materiality || 'high',
        summary: risk.summary,
        evidenceUrls: risk.evidenceIndexes
          .map((index) => spec.evidence[index]?.url)
          .filter((url): url is string => Boolean(url)),
      },
    ]),
  );

  const highRiskEvidence = (spec.risks || [])
    .flatMap((risk) => risk.evidenceIndexes)
    .map((index) => spec.evidence[index])
    .filter((item): item is EvidenceItem => Boolean(item));

  const counterEvidence = highRiskEvidence.length > 0
    ? Array.from(new Map(highRiskEvidence.map((item) => [item.url || `${item.source}:${item.claim}`, item])).values()).slice(0, 2)
    : [];

  const redTeamEvidenceUrls = counterEvidence
    .map((item) => item.url)
    .filter((url): url is string => Boolean(url));

  return hardenedProfile({
    title: spec.title,
    year: spec.year,
    language: spec.language,
    status: spec.status,
    confidence: spec.confidence || 'high',
    dimensions: spec.dimensions,
    tags: spec.tags,
    reasons: spec.reasons,
    integrityFlags: spec.integrityFlags || [],
    evidence: spec.evidence,
    researchDossier: buildDossier({
      sourceBasis: spec.sourceBasis,
      filmUnderstanding: spec.filmUnderstanding,
      discoveryQueries: discoveryQueries(spec),
      probeOverrides,
      strongestCounterEvidence: counterEvidence,
      redTeam: {
        completed: true,
        strongestChallenge: spec.redTeamChallenge,
        outcome: spec.humanReview ? 'unresolved' : (counterEvidence.length > 0 ? 'qualified' : 'cleared'),
        evidenceUrls: spec.humanReview || counterEvidence.length > 0 ? redTeamEvidenceUrls : [],
        verdictImpact: spec.humanReview
          ? 'The research is complete, but the material conflict remains unresolved and requires editorial adjudication before publication.'
          : 'The strongest counter-reading was retained in the record; it does not overturn the proposed Culture Check verdict.',
      },
      factInterpretationIntent: {
        fact: spec.fact,
        interpretation: spec.interpretation,
        intent: spec.intent,
      },
    }),
  });
}
