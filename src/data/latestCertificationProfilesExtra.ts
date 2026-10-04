import type { SanghiProfile } from '../types/sanghi';
import { hardenedCorpus50E } from './hardenedCorpus50E';
import { hardenedCorpus50F } from './hardenedCorpus50F';
import { languageCertificationNext150 } from './languageCertificationNext150';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

// Keep the latest language-specific hardened tranches at resolver precedence ahead of older batches.
// Binding calibration and Pakistan/terror perspective revisions still win in the resolver before this lane.
export const latestCertificationProfilesExtra: SanghiProfile[] = [
  ...languageCertificationNext150,
  ...hardenedCorpus50F,
  ...hardenedCorpus50E,
  makeHardenedBatchFilm({
    title: 'Ohh My Dog', year: 2026, language: 'Hindi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 4, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Social Dharma', 'Animal care', 'Assam roots', 'Family'],
    reasons: [
      'The film centres loyalty, rescue, care for vulnerable animals and a child’s refusal to abandon his missing dog, giving Dharma, Raksha and Social Dharma a clear positive signal.',
      'Its small-town Assam setting and ordinary community are treated with affection rather than contempt; the film’s moral argument is about responsibility and goodness rather than ideology.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Ohh My Dog review', claim: 'Describes the Assam-set story of Apu searching for his missing dog and emphasises the resilience and loyalty of Indian street dogs.', url: 'https://indianexpress.com/article/entertainment/movie-review/ohh-my-dog-movie-review-pankaj-tripathi-stray-dogs-are-stars-of-rare-kid-friendly-film-10821907/lite/' },
      { kind: 'review', source: 'Scroll — Ohh My Dog review', claim: 'Reads the film as a parable about goodness and justice, centred on a child and animal loyalty in an Assam small-town setting.', url: 'https://scroll.in/reel/1094774/scroll_in' },
      { kind: 'review', source: 'India Today — Ohh My Dog review', claim: 'Reviews the parallel rescue journeys and identifies the film’s emotional centre in the bond between humans and dogs.', url: 'https://www.indiatoday.in/movies/reviews/story/ohh-my-dog-review-amit-rai-paw-some-hero-steals-the-show-emotional-ride-nikhil-kumar-pankaj-tripathi-rajesh-kumar-2965149-2026-08-06' }
    ],
    filmUnderstanding: 'A Hindi family-investigative drama set partly in Assam, following a schoolboy searching for his missing dog while another dog searches for its kidnapped owner.',
    researchFocus: 'Assam child dog rescue animal welfare family justice community',
    redTeamChallenge: 'A feel-good animal-rescue story may be too universal to carry any specifically Bharatiya signal beyond ordinary compassion.',
    fact: 'The story is fictional and makes no historical or religious claim.',
    interpretation: 'Its combination of local rootedness, care, rescue and responsibility is strong enough for a modest Dharma/Social Dharma certification even without a national or sacred theme.',
    intent: 'No broader ideological programme is inferred from the animal-welfare and family-responsibility themes.'
  }),
];
