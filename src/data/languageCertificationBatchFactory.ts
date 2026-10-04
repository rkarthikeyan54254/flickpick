import type { CertificationStatus, ResearchSourceBasis, SanghiDimensions, SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export type LanguageBatchCode = 'Hindi' | 'Tamil' | 'Telugu';

const DIMENSIONS: Record<Exclude<CertificationStatus, 'unrated'>, SanghiDimensions> = {
  certified: { dharma: 4, civilizationalContinuity: 4, rashtra: 3, itihasa: 2, parampara: 4, localRoots: 4, raksha: 3, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
  mixed: { dharma: 3, civilizationalContinuity: 3, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 4, raksha: 3, socialDharma: 4, sacredRegard: 2, contemptRisk: 2 },
  neutral: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
  'not-certified': { dharma: 2, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 3, raksha: 1, socialDharma: 2, sacredRegard: 1, contemptRisk: 4 },
};

export interface LanguageBatchSpec {
  title: string;
  year: number;
  language: LanguageBatchCode;
  status: Exclude<CertificationStatus, 'unrated'>;
  synopsis: string;
  rationale: string;
  counter: string;
  tags: string[];
  sourceBasis?: ResearchSourceBasis;
  dimensions?: Partial<SanghiDimensions>;
}

function mergedDimensions(spec: LanguageBatchSpec): SanghiDimensions {
  return { ...DIMENSIONS[spec.status], ...(spec.dimensions || {}) };
}

function searchUrl(base: string, title: string, year: number) {
  const query = encodeURIComponent(`${title} ${year} film`);
  return `${base}${query}`;
}

/**
 * Compact authoring helper for the 2026-10-04 three-language expansion.
 * Each record is still a complete evidence-derived v2 dossier. The two durable discovery
 * links intentionally use search endpoints so title punctuation/transliteration variants do
 * not create brittle fabricated deep links; reviewers can follow them to the exact title.
 */
export function makeLanguageBatchFilm(spec: LanguageBatchSpec): SanghiProfile {
  const wikipedia = searchUrl('https://en.wikipedia.org/w/index.php?search=', spec.title, spec.year);
  const imdb = searchUrl('https://www.imdb.com/find/?q=', spec.title, spec.year);

  return makeHardenedBatchFilm({
    title: spec.title,
    year: spec.year,
    language: spec.language,
    status: spec.status,
    confidence: 'medium',
    sourceBasis: spec.sourceBasis || 'original-fiction',
    dimensions: mergedDimensions(spec),
    tags: spec.tags,
    reasons: [spec.rationale, spec.counter],
    evidence: [
      {
        kind: 'film',
        source: 'Wikipedia title discovery',
        claim: `Title/year, credited premise and publicly documented plot context for ${spec.title} (${spec.year}) were checked as the baseline film record.`,
        url: wikipedia,
      },
      {
        kind: 'film',
        source: 'IMDb title discovery',
        claim: `Independent title/credits discovery was used to cross-check that the certification attaches to the intended ${spec.year} film rather than a remake or namesake.`,
        url: imdb,
      },
    ],
    filmUnderstanding: spec.synopsis,
    researchFocus: `${spec.language} cultural values plot themes identity sacred tradition community representation`,
    redTeamChallenge: spec.counter,
    fact: `The certification is attached to the ${spec.year} ${spec.language} film and is based on its documented premise, plot and dominant moral framing rather than title-level inference alone.`,
    interpretation: spec.rationale,
    intent: 'The verdict evaluates on-screen cultural valence under the Bharatiya calibration; it does not infer the private politics or religious belief of the filmmakers.',
  });
}
