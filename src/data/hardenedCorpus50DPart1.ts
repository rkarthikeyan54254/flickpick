import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

/** Hardened Corpus 50D — Part 1. The two Dhurandhar films are audited independently. */
export const hardenedCorpus50DPart1: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Dhurandhar', year: 2025, language: 'Hindi', status: 'certified', sourceBasis: 'mixed-unknown',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Rashtra', 'Raksha', 'Espionage', 'National security'],
    reasons: ['The film places an Indian undercover operative inside Karachi criminal and terror networks and makes protection of Bharat from cross-border terrorism the dominant narrative purpose, producing strong Rashtra and Raksha signals.', 'Its extreme violence, fictional spy construction and use of real-event inspirations require visible Narrative Integrity and Dharma qualifications, but those qualifications do not erase the film-level India-first civilizational orientation.'],
    evidence: [
      { kind: 'interview', source: 'Times of India — Aditya Dhar clarification', claim: 'Dhar explicitly clarified before release that Dhurandhar is not a biopic of Major Mohit Sharma.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/ranveer-singhs-dhurandhar-is-not-based-on-major-mohit-sharma-confirms-director-aditya-dhar-this-is-an-official-clarification/articleshow/125593055.cms' },
      { kind: 'review', source: 'India Today — Dhurandhar spy-thriller reception', claim: 'Reports the film as an Indian intelligence infiltration story drawing inspiration from real covert missions and Karachi criminal networks.', url: 'https://www.indiatoday.in/amp/movies/bollywood/story/dhurandhar-spy-thriller-aditya-dhar-earns-103-crore-praise-siddharth-anand-2832530-2025-12-08' },
      { kind: 'review', source: 'Indian Express — Arjun Rampal on criticism', claim: 'Records public propaganda criticism and Rampal’s counter-position, preserving an adversarial reading.', url: 'https://indianexpress.com/article/entertainment/bollywood/amid-dhurandhar-criticism-arjun-rampal-calls-it-an-important-film-i-felt-horrible-10436096/' }
    ],
    filmUnderstanding: 'A violent espionage thriller in which an Indian undercover operative infiltrates Karachi’s Lyari criminal-political ecosystem to penetrate networks tied to terrorism against India.', researchFocus: 'Indian undercover operative Karachi Lyari terrorism real-event inspiration violence', redTeamChallenge: 'The strongest counter-reading is that the film converts a complicated Pakistan/terrorism history into muscular nationalist propaganda and uses brutality to make political certainty emotionally irresistible.',
    fact: 'The protagonist is fictional rather than a Major Mohit Sharma biopic; real-event inspirations are dramatized.', interpretation: 'Protection of India and penetration of hostile terror infrastructure are strong Rashtra/Raksha signals; violence and historical compression are assessed separately.', intent: 'No claim is made that fictional covert events are documentary history or that Muslim identity itself is villainous.',
    risks: [{ id: 'historical-claims', summary: 'Real-event inspirations require separation from fictional spy plotting.', evidenceIndexes: [0,1], materiality: 'high' }, { id: 'community-contempt', summary: 'Propaganda/community-hostility criticism is retained, but terrorists or Pakistani gangsters do not by themselves establish generalized contempt toward Muslims.', evidenceIndexes: [2], status: 'ambiguous', materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Dhurandhar: The Revenge', year: 2026, language: 'Hindi', status: 'certified', sourceBasis: 'mixed-unknown',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Rashtra', 'Raksha', 'Espionage', 'National security', 'Revenge'],
    reasons: ['The sequel completes Hamza’s covert mission against a Karachi terror network and makes retaliation for attacks on India and defence of the nation explicit, sustaining very strong Rashtra and Raksha signals.', 'Its revenge grammar and unusually graphic violence materially lower Dharma and require factual/dramatic caveats; protagonist moral purity does not substitute for the film-level civilizational verdict.'],
    evidence: [
      { kind: 'review', source: 'MissMalini — Dhurandhar: The Revenge review', claim: 'Describes the sequel as heavily invested in political drama and patriotic sentiment.', url: 'https://www.missmalini.com/2026/03/18/dhurandhar-the-revenge-review-aditya-dhar-with-ranveer-singh-delivers-a-bigger-louder-and-wilder-cinema' },
      { kind: 'review', source: 'Independent/NYT reception summary', claim: 'Records the counter-reading that critics objected to ultraviolence and the blending of India-Pakistan history with heroic political theatrics.', url: 'https://en.wikipedia.org/wiki/Dhurandhar%3A_The_Revenge' },
      { kind: 'official', source: 'Indian Express — television recertification', claim: 'Reports 45-50 violent scenes removed for a U/A 16+ television version.', url: 'https://indianexpress.com/article/entertainment/bollywood/dhurandhar-2s-runtime-reduced-by-10-minutes-for-tv-cbfc-cuts-45-50-violent-scenes-report-10900492/' }
    ],
    filmUnderstanding: 'The second film continues Hamza’s covert mission and turns the infiltration story into a more explicit India-Pakistan intelligence and revenge confrontation.', researchFocus: 'India Pakistan sequel espionage ISI patriotism violence history propaganda', redTeamChallenge: 'Critics argue that history, mythmaking, ultraviolence and patriotic spectacle become difficult to separate.', fact: 'The sequel continues a fictional covert mission while invoking India-Pakistan political and historical conflict and contains unusually graphic violence.', interpretation: 'Its Rashtra/Raksha orientation is strongly affirmative toward India; certification does not certify the hero’s violence as morally pure.', intent: 'The verdict evaluates film-level civilizational orientation, not agreement with every political proposition or violent act.',
    risks: [{ id: 'historical-claims', summary: 'The sequel mixes heroic fiction with India-Pakistan historical and political material.', evidenceIndexes: [1], materiality: 'high' }]
  }),
];
