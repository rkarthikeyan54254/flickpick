export type CertificationStatus =
  | 'certified'
  | 'mixed'
  | 'neutral'
  | 'not-certified'
  | 'unrated';

export type Confidence = 'high' | 'medium' | 'low';
export type ReviewDepth = 'desk' | 'source-audit' | 'scene-audit';
export type AuditStatus = 'provisional' | 'reviewed' | 'hardened';

/** Primary languages that receive first-class discovery filters. */
export type IndianFilmLanguage =
  | 'Hindi'
  | 'Tamil'
  | 'Telugu'
  | 'Kannada'
  | 'Malayalam'
  | 'Bengali'
  | 'Marathi'
  | 'Punjabi'
  | 'Gujarati'
  | 'Assamese'
  | 'Odia'
  | 'Bhojpuri';

export interface SanghiDimensions {
  dharma: number | null;
  civilizationalContinuity: number | null;
  rashtra: number | null;
  itihasa: number | null;
  parampara: number | null;
  localRoots: number | null;
  raksha: number | null;
  socialDharma: number | null;
  sacredRegard: number | null;
  contemptRisk: number | null;
}

export interface IntegrityFlag {
  type: string;
  status: 'verified' | 'supported' | 'disputed' | 'unverified' | 'contradicted';
  summary: string;
  fact?: string;
  interpretation?: string;
  intent?: string;
}

export interface EvidenceItem {
  kind: 'film' | 'primary' | 'official' | 'interview' | 'review' | 'social';
  source: string;
  claim: string;
  url?: string;
}

/** Legacy v1 gate. v2+ profiles are gated from ResearchDossier evidence instead. */
export interface PublicationGate {
  adversarialPass: boolean;
  regionalContextPass: boolean;
  socialRadarPass: boolean;
  adaptationDeltaPass: 'passed' | 'not-applicable';
  narrativeIntegrityPass: boolean;
  factInterpretationIntentPass: boolean;
  evidenceSufficiencyPass: boolean;
  explanationPass: boolean;
  selfFalsificationPass: boolean;
}

export type ResearchSourceBasis =
  | 'original-fiction'
  | 'fiction-adaptation'
  | 'history'
  | 'biopic'
  | 'true-story'
  | 'folklore-sacred-tradition'
  | 'mixed-unknown';

export type ResearchProbeId =
  | 'source-adaptation'
  | 'identity-substitution'
  | 'historical-claims'
  | 'quantitative-claims'
  | 'real-person-attribution'
  | 'sacred-religious-valence'
  | 'regional-context'
  | 'creator-source-conflict'
  | 'social-radar'
  | 'self-falsification';

export type ResearchProbeStatus = 'clear' | 'finding' | 'ambiguous' | 'not-applicable';
export type ResearchMateriality = 'low' | 'medium' | 'high';

export interface ResearchProbe {
  id: ResearchProbeId;
  status: ResearchProbeStatus;
  materiality: ResearchMateriality;
  summary: string;
  /** URLs from the profile evidence list that substantiate this probe. */
  evidenceUrls: string[];
}

export interface ResearchRedTeam {
  completed: boolean;
  strongestChallenge: string;
  outcome: 'cleared' | 'qualified' | 'unresolved';
  evidenceUrls: string[];
  verdictImpact: string;
}

export interface FactInterpretationIntentRecord {
  fact: string;
  interpretation: string;
  intent: string;
}

/** Durable v2 research artifact. Publication is derived from evidence, not pass booleans. */
export interface ResearchDossier {
  version: '2.0';
  completedAt: string;
  complete: boolean;
  sourceBasis: ResearchSourceBasis;
  filmUnderstanding: string;
  riskProbes: ResearchProbe[];
  strongestCounterEvidence: EvidenceItem[];
  redTeam: ResearchRedTeam;
  factInterpretationIntent: FactInterpretationIntentRecord;
}

export interface SanghiProfile {
  title: string;
  year: number;
  /** Open string keeps the corpus extensible to long-tail Indian languages. */
  language: string;
  tmdbId?: number;
  status: CertificationStatus;
  confidence: Confidence;
  methodologyVersion: string;
  reviewedAt: string;
  reviewDepth?: ReviewDepth;
  auditStatus?: AuditStatus;
  publicationGate?: PublicationGate;
  researchDossier?: ResearchDossier;
  dimensions: SanghiDimensions;
  tags: string[];
  reasons: string[];
  integrityFlags: IntegrityFlag[];
  evidence: EvidenceItem[];
}
