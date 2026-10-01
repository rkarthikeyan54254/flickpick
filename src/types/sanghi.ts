export type CertificationStatus =
  | 'certified'
  | 'mixed'
  | 'neutral'
  | 'not-certified'
  | 'unrated';

export type Confidence = 'high' | 'medium' | 'low';

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
}

export interface EvidenceItem {
  kind: 'film' | 'primary' | 'official' | 'interview' | 'review' | 'social';
  source: string;
  claim: string;
  url?: string;
}

export interface SanghiProfile {
  title: string;
  year: number;
  language: 'Hindi' | 'Tamil' | 'Telugu' | 'Kannada' | 'Malayalam';
  tmdbId?: number;
  status: CertificationStatus;
  confidence: Confidence;
  methodologyVersion: string;
  reviewedAt: string;
  dimensions: SanghiDimensions;
  tags: string[];
  reasons: string[];
  integrityFlags: IntegrityFlag[];
  evidence: EvidenceItem[];
}
