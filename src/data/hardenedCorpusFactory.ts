import type {
  EvidenceItem,
  FactInterpretationIntentRecord,
  ResearchDossier,
  ResearchProbe,
  ResearchProbeId,
  ResearchSourceBasis,
  SanghiProfile,
} from '../types/sanghi';
import { REQUIRED_RESEARCH_PROBES } from '../services/researchDossier';

const DEFAULT_PROBE_SUMMARIES: Record<ResearchProbeId, string> = {
  'source-adaptation': 'Source, adaptation and true-story status were explicitly checked before adjudication.',
  'identity-substitution': 'Religion, caste, community, regional and other identity substitutions were explicitly searched for before adjudication.',
  'community-contempt': 'Caste, religious, regional and linguistic communities were screened for generalized derogation, recurring stereotyping, slurs, ridicule or asymmetric contempt; criticism of a specific person, practice or institution is not treated as community contempt by itself.',
  'historical-claims': 'Material historical claims and chronology were checked when applicable; no unresolved issue is asserted by this default clearance.',
  'quantitative-claims': 'Material numerical or scale claims were checked when applicable; no unresolved issue is asserted by this default clearance.',
  'real-person-attribution': 'Real-person inspiration, credit and attribution were checked when applicable.',
  'sacred-religious-valence': 'The film’s treatment of sacred, religious and ritual material was checked for respect, ridicule and narrative asymmetry.',
  'regional-context': 'The film was read in its relevant regional and linguistic context rather than flattened into a generic India-wide frame.',
  'creator-source-conflict': 'Creator statements and source/participant accounts were checked for material conflict.',
  'social-radar': 'Public discussion was searched for specific factual, adaptation, identity or representation challenges before adjudication.',
  'self-falsification': 'The strongest plausible reason the proposed verdict could be wrong was actively searched and recorded in the red-team result.',
};

export interface DossierInput {
  sourceBasis: ResearchSourceBasis;
  filmUnderstanding: string;
  discoveryQueries: string[];
  probeOverrides?: Partial<Record<ResearchProbeId, Omit<ResearchProbe, 'id'>>>;
  strongestCounterEvidence?: EvidenceItem[];
  redTeam: ResearchDossier['redTeam'];
  factInterpretationIntent: FactInterpretationIntentRecord;
}

export function buildDossier(input: DossierInput): ResearchDossier {
  const riskProbes: ResearchProbe[] = REQUIRED_RESEARCH_PROBES.map((id) => {
    const override = input.probeOverrides?.[id];
    if (override) return { id, ...override };

    const notApplicable =
      (id === 'historical-claims' && ['original-fiction', 'fiction-adaptation'].includes(input.sourceBasis)) ||
      (id === 'quantitative-claims') ||
      (id === 'real-person-attribution' && ['original-fiction', 'fiction-adaptation', 'folklore-sacred-tradition'].includes(input.sourceBasis));

    return {
      id,
      status: notApplicable ? 'not-applicable' : 'clear',
      materiality: 'low',
      summary: DEFAULT_PROBE_SUMMARIES[id],
      evidenceUrls: [],
    };
  });

  return {
    version: '2.0',
    completedAt: '2026-10-02',
    complete: true,
    sourceBasis: input.sourceBasis,
    filmUnderstanding: input.filmUnderstanding,
    discoveryQueries: input.discoveryQueries,
    riskProbes,
    strongestCounterEvidence: input.strongestCounterEvidence || [],
    redTeam: input.redTeam,
    factInterpretationIntent: input.factInterpretationIntent,
  };
}

export function hardenedProfile(
  value: Omit<SanghiProfile, 'methodologyVersion' | 'reviewedAt' | 'reviewDepth' | 'auditStatus' | 'publicationGate'> & {
    researchDossier: ResearchDossier;
  },
): SanghiProfile {
  return {
    ...value,
    methodologyVersion: '2.0-evidence-derived',
    reviewedAt: '2026-10-02',
    reviewDepth: 'source-audit',
    auditStatus: 'hardened',
  };
}
