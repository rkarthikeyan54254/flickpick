import type { CertificationStatus, ResearchSourceBasis, SanghiDimensions, SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm, type BatchRiskFinding } from './hardenedBatch50Factory';

type Lane = 'rashtra' | 'social' | 'history' | 'sacred' | 'family' | 'neutral' | 'mixed' | 'mixedSacred';
type RiskKind = 'history' | 'community' | 'sacred' | 'factual';
export interface Film50FRow {
  title: string; status: CertificationStatus; lane: Lane; sourceBasis: ResearchSourceBasis;
  fact: string; caveat: string; evidenceUrl: string; evidenceSource: string; risk?: RiskKind;
}

const RELEASE_INDEX = 'https://en.wikipedia.org/wiki/List_of_Tamil_films_of_2026';

const certifiedDimensions: Record<Exclude<Lane, 'neutral' | 'mixed' | 'mixedSacred'>, SanghiDimensions> = {
  rashtra: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
  social: { dharma: 4, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
  history: { dharma: 4, civilizationalContinuity: 4, rashtra: 3, itihasa: 5, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
  sacred: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
  family: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
};
const neutralDimensions: SanghiDimensions = { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 2, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 };
const mixedDimensions: SanghiDimensions = { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 3, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 1 };
const mixedSacredDimensions: SanghiDimensions = { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 4, sacredRegard: 3, contemptRisk: 1 };

const tagsByLane: Record<Lane, string[]> = {
  rashtra: ['Rashtra', 'Raksha', 'Public duty'], social: ['Social Dharma', 'Justice', 'Dignity'],
  history: ['Itihasa', 'Historical memory', 'Local roots'], sacred: ['Sacred Regard', 'Parampara', 'Dharma'],
  family: ['Family', 'Dharma', 'Social Dharma'], neutral: ['Contemporary Tamil Nadu', 'Narrative', 'Social texture'],
  mixed: ['Dharma', 'Social Dharma', 'Contested'], mixedSacred: ['Sacred Regard', 'Social Dharma', 'Contested'],
};

function dimensionsFor(row: Film50FRow): SanghiDimensions {
  if (row.status === 'neutral') return neutralDimensions;
  if (row.status === 'mixed' || row.status === 'not-certified') return row.lane === 'mixedSacred' ? mixedSacredDimensions : mixedDimensions;
  if (row.lane === 'neutral' || row.lane === 'mixed' || row.lane === 'mixedSacred') return { ...neutralDimensions, dharma: 4, socialDharma: 4 };
  return certifiedDimensions[row.lane];
}

function risksFor(row: Film50FRow): BatchRiskFinding[] | undefined {
  const common = { evidenceIndexes: [0, 1], materiality: 'high' as const };
  if (row.risk === 'history') return [{ id: 'historical-claims', summary: 'Real history or biography is material; dramatized detail must remain distinct from verified fact.', ...common }];
  if (row.risk === 'community') return [{ id: 'community-contempt', summary: 'Community identity is material; shorthand or stereotype must not be generalized beyond individual characters.', ...common }];
  if (row.risk === 'sacred') return [{ id: 'sacred-religious-valence', summary: 'Living sacred practice or devotional testimony is material; reverence, dramatization and factual claims must remain distinct.', evidenceIndexes: [0, 1], status: 'ambiguous', materiality: 'medium' }];
  if (row.risk === 'factual') return [{ id: 'quantitative-claims', summary: 'Material factual claims require support beyond dramatic assertion.', ...common }];
  return undefined;
}

export function makeTamil50FFilm(row: Film50FRow): SanghiProfile {
  const interpretation = row.status === 'certified'
    ? `Under the declared Bharatiya/Hindu-civilizational lens, ${row.fact.charAt(0).toLowerCase()}${row.fact.slice(1)} The supported values are directional enough for certification.`
    : row.status === 'mixed'
      ? `The film contains meaningful Bharatiya-facing values or social concerns, but ${row.caveat.charAt(0).toLowerCase()}${row.caveat.slice(1)} The competing signals remain material.`
      : `The film contains recognisably Tamil/Indian social or cultural material, but ${row.caveat.charAt(0).toLowerCase()}${row.caveat.slice(1)} Neutral avoids manufacturing a directional verdict.`;

  return makeHardenedBatchFilm({
    title: row.title, year: 2026, language: 'Tamil', status: row.status, sourceBasis: row.sourceBasis,
    dimensions: dimensionsFor(row), tags: tagsByLane[row.lane], reasons: [row.fact, row.caveat],
    evidence: [
      { kind: 'review', source: row.evidenceSource, claim: row.fact, url: row.evidenceUrl },
      { kind: 'review', source: '2026 Tamil-film release index', claim: `${row.title} is listed in the 2026 Tamil release calendar used for tranche scoping and primary-language cross-checking.`, url: RELEASE_INDEX },
    ],
    filmUnderstanding: row.fact,
    researchFocus: `${row.title} Tamil 2026 source adaptation history religion caste community sacred valence regional culture representation factual accuracy strongest counter-reading`,
    redTeamChallenge: row.caveat, fact: row.fact, interpretation,
    intent: 'The verdict applies the declared Bharatiya/Hindu-civilizational lens to the released Tamil film. It does not infer documentary truth from fiction, generalize individual characters into claims about whole communities, or infer creator intent beyond supported evidence.',
    risks: risksFor(row),
  });
}
