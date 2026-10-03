import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

/** Hardened Corpus 50D — replacement profiles for records already covered by prior v2 work. */
export const hardenedCorpus50DPart7: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Border', year: 1997, language: 'Hindi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['1971 war','Longewala','Rashtra','Raksha'],
    reasons: ['The film honours Indian soldiers at Longewala, foregrounding duty, sacrifice, comradeship and defence of Bharat as its dominant moral grammar.', 'Its reconstruction compresses and dramatizes the battle and simplifies the Pakistani side; those are Narrative Integrity qualifications, not reasons to reverse a strongly Bharatiya military-service verdict.'],
    evidence: [
      { kind: 'review', source: 'India Today — Fact and fiction in Border', claim: 'Compares the film with the real Battle of Longewala and notes that the truth lies between the heroic drama and the historical record.', url: 'https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19970728-if-the-reel-border-is-full-of-drama-and-heroism-so-was-the-real-battle-in-830426-1997-07-27' },
      { kind: 'review', source: 'India Today — Border review', claim: 'Describes Border as a grand war epic based on a true incident of the 1971 Indo-Pak war.', url: 'https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19970623-movie-review-border-starring-sunny-deol-sunil-shetty-jackie-shroff-831643-1997-06-22' }
    ],
    filmUnderstanding: 'J. P. Dutta’s ensemble war drama recreates the 1971 Battle of Longewala through Indian soldiers and their families.', researchFocus: 'Battle of Longewala 1971 Major Kuldeep Singh Chandpuri historical accuracy', redTeamChallenge: 'The film can romanticize war, compress the scale of combat and flatten Pakistani soldiers into a largely hostile collective.',
    fact: 'Border is based on Longewala but changes scale, incidents and characterization for dramatic effect.', interpretation: 'Honouring soldiers who defend Bharat is a direct Raksha and Rashtra signal; factual compression remains a separate integrity question.', intent: 'Certification does not treat every combat scene as documentary fact or generalize moral judgment to Pakistanis as a people.',
    risks: [{ id: 'historical-claims', summary: 'Battle scale and incidents are dramatized relative to the historical record.', evidenceIndexes: [0], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Tanhaji: The Unsung Warrior', year: 2020, language: 'Hindi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 1 },
    tags: ['Maratha','Shivaji','Bhagwa','Dharma'],
    reasons: ['The film is overtly rooted in Maratha memory, Shivaji’s statecraft, the saffron standard, sacred duty and Tanhaji Malusare’s sacrifice, giving it unusually strong civilizational and Parampara signals.', 'The screenplay simplifies characters and history and uses a highly stylized enemy construction; those caveats remain visible without converting a Hindu-civilizational epic into a neutral verdict.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Tanhaji review', claim: 'Notes the film repeatedly foregrounds the bhagwa dhwaj, desh prem, Maratha valour and Tanhaji’s sacrifice while criticizing its simplified history.', url: 'https://indianexpress.com/article/entertainment/movie-review/tanhaji-movie-review-rating-kajol-ajay-saif-6209397/' },
      { kind: 'reference', source: 'Wikipedia — Tanhaji', claim: 'Records the film as a historical action drama about Tanaji Malusare and the Battle of Sinhagad.', url: 'https://en.wikipedia.org/wiki/Tanhaji' }
    ],
    filmUnderstanding: 'A stylized historical epic about Tanaji Malusare’s mission for Shivaji to recapture Kondhana/Sinhagad.', researchFocus: 'Tanaji Malusare Battle of Sinhagad Shivaji Udaybhan Rathod historical accuracy', redTeamChallenge: 'The film can turn a complex seventeenth-century conflict into a simplified civilizational binary and invent personal details around Udaybhan.',
    fact: 'Tanaji Malusare and the Battle of Sinhagad are historical; many character details and set pieces are dramatized.', interpretation: 'The film’s explicit Hindu-Maratha sacred and civilizational grammar is central, not incidental.', intent: 'No generalized judgment about Muslims is inferred merely from Mughal antagonists.',
    risks: [{ id: 'historical-claims', summary: 'The film substantially stylizes and simplifies the historical battle and personalities.', evidenceIndexes: [0,1], materiality: 'high' }]
  }),
];
