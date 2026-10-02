export type CertificationStatus =
  | 'certified'
  | 'mixed'
  | 'neutral'
  | 'not-certified'
  | 'unrated';

export type Confidence = 'high' | 'medium' | 'low';
export type ReviewDepth = 'desk' | 'source-audit' | 'scene-audit';
export type AuditStatus = 'provisional' | 'reviewed' | 'hardened';

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

export interface SanghiProfile {
  title: string;
  year: number;
  language: IndianFilmLanguage;
  tmdbId?: number;
  status: CertificationStatus;
  confidence: Confidence;
  methodologyVersion: string;
  reviewedAt: string;
  reviewDepth?: ReviewDepth;
  auditStatus?: AuditStatus;
  publicationGate?: PublicationGate;
  dimensions: SanghiDimensions;
  tags: string[];
  reasons: string[];
  integrityFlags: IntegrityFlag[];
  evidence: EvidenceItem[];
}
