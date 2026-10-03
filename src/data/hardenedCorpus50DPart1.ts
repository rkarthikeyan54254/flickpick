import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

/**
 * Hardened Corpus 50D — Part 1.
 *
 * The two Dhurandhar films are intentionally separate records. Their shared
 * franchise does not substitute for title-specific film understanding,
 * evidence, counter-reading, or Narrative Integrity findings.
 */
export const hardenedCorpus50DPart1: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Dhurandhar', year: 2025, language: 'Hindi', status: 'certified', sourceBasis: 'historical-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Rashtra', 'Raksha', 'Espionage', 'National security'],
    reasons: [
      'The film places an Indian undercover operative inside Karachi criminal and terror networks and makes protection of Bharat from cross-border terrorism the dominant narrative purpose, producing strong Rashtra and Raksha signals.',
      'Its extreme violence, fictional spy construction and use of real-event inspirations require visible Narrative Integrity and Dharma qualifications, but those qualifications do not erase the film-level India-first civilizational orientation.'
    ],
    evidence: [
      { kind: 'interview', source: 'Times of India — Aditya Dhar official clarification', claim: 'Dhar explicitly clarified before release that Dhurandhar is not a biopic of Major Mohit Sharma, rejecting a widely circulated identity claim about the protagonist.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/ranveer-singhs-dhurandhar-is-not-based-on-major-mohit-sharma-confirms-director-aditya-dhar-this-is-an-official-clarification/articleshow/125593055.cms' },
      { kind: 'review', source: 'India Today — Dhurandhar spy-thriller reception', claim: 'Reports the film as an Indian intelligence infiltration story drawing inspiration from real covert missions and Karachi criminal networks, with the operative targeting a nexus fuelling terrorism.', url: 'https://www.indiatoday.in/amp/movies/bollywood/story/dhurandhar-spy-thriller-aditya-dhar-earns-103-crore-praise-siddharth-anand-2832530-2025-12-08' },
      { kind: 'interview', source: 'Indian Express — Arjun Rampal on Dhurandhar criticism', claim: 'Records the public propaganda criticism and Rampal’s counter-position that the film is important, preserving an adversarial reading rather than treating it as decisive authority.', url: 'https://indianexpress.com/article/entertainment/bollywood/amid-dhurandhar-criticism-arjun-rampal-calls-it-an-important-film-i-felt-horrible-10436096/' }
    ],
    filmUnderstanding: 'A violent espionage thriller in which an Indian undercover operative infiltrates Karachi’s Lyari criminal-political ecosystem to penetrate and dismantle networks tied to terrorism against India.',
    researchFocus: 'Indian undercover operative Karachi Lyari terrorism R&AW real-event inspiration Mohit Sharma clarification violence',
    redTeamChallenge: 'The strongest counter-reading is that the film converts a complicated Pakistan/terrorism history into muscular nationalist propaganda and uses spectacular brutality to make political certainty emotionally irresistible.',
    fact: 'The protagonist is fictional rather than a Major Mohit Sharma biopic; reporting and the film frame the operation through an Indian agent infiltrating Karachi networks linked to terrorism, while real-event inspirations are dramatized.',
    interpretation: 'Under the declared Bharatiya lens, protection of India and penetration of hostile terror infrastructure are strong Rashtra/Raksha signals; violent or partisan framing is assessed separately under Dharma and Narrative Integrity.',
    intent: 'Dhar directly established what the film is not — a Mohit Sharma biopic. No broader creator-intent claim is needed to infer the film’s India-first orientation from its narrative structure.',
    risks: [
      { id: 'source-adaptation', summary: 'The film borrows from real covert-operation and Karachi-terror context while using fictional characters and dramatic construction; it must not be presented as a literal biopic or documentary record.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'historical-claims', summary: 'Real-event inspirations and terror-network references require claim-by-claim separation from fictional spy plotting.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'community-contempt', summary: 'An adversarial reading alleges anti-Pakistan/anti-Muslim propaganda, but negative terrorists, ISI actors or Pakistani gangsters do not by themselves establish generalized contempt toward Muslims as a community.', evidenceIndexes: [2], materiality: 'medium' }
    ],
    integrityFlags: [
      { type: 'historical-fiction', status: 'verified', summary: 'The film uses real-event and covert-operation inspiration inside a fictional spy narrative and is explicitly not a Major Mohit Sharma biopic.' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Dhurandhar: The Revenge', year: 2026, language: 'Hindi', status: 'certified', sourceBasis: 'historical-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Rashtra', 'Raksha', 'Espionage', 'National security', 'Revenge'],
    reasons: [
      'The sequel completes Jaskirat/Hamza’s covert mission against a Karachi terror network and makes retaliation for attacks on India and defence of the nation explicit, sustaining very strong Rashtra and Raksha signals.',
      'Its revenge grammar and unusually graphic violence materially lower Dharma and require factual/dramatic caveats; neither protagonist moral purity nor an ideological objection to its nationalism is allowed to substitute for the film-level civilizational verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — politics of Dhurandhar 2', claim: 'Analyses the sequel as a deliberately positioned anti-terror national-security film whose retaliation narrative responds to terrorism and Pakistan-linked denial, while acknowledging the political counter-reading.', url: 'https://www.indiatoday.in/movies/bollywood/story/aditya-dhars-dhurandhar-2-politics-explained-anti-terror-not-anti-pakistan-2885313-2026-03-22' },
      { kind: 'interview', source: 'India Today — action director Aejaz Gulab', claim: 'Gulab says the brutality was script-driven by the gangster/underworld setting, that some scenes drew on real incidents, and that only a restrained portion of the conceived violence reached the film.', url: 'https://www.indiatoday.in/movies/bollywood/story/aejaz-gulab-defends-dhurandhar-violence-2887284-2026-03-26' },
      { kind: 'review', source: 'Indian Express — CBFC changes before release', claim: 'Reports CBFC-requested factual corrections, disclaimers and violence trims, demonstrating that historical/factual precision and graphic violence require independent integrity treatment.', url: 'https://indianexpress.com/article/entertainment/bollywood/cbfc-asks-dhurandhar-2-makers-to-trim-violence-correct-demonetisation-dates-ram-gopal-varma-calls-ranveer-singh-starrer-sholay-x-100-10587998/' },
      { kind: 'review', source: 'Indian Express — adversarial opinion on Dhurandhar 2 violence', claim: 'Provides a strong counter-reading arguing that the film’s nationalist revenge and violence can produce troubling audience identification; retained as adversarial interpretation rather than decisive factual authority.', url: 'https://indianexpress.com/article/opinion/columns/dhurandhar-2-nationalism-islamophobia-narendra-modi-ranveer-singh-10602685/lite/' }
    ],
    filmUnderstanding: 'The second half of the Dhurandhar story follows Jaskirat Singh Rangi operating as Hamza Ali Mazari as his infiltration becomes an explicit campaign of retaliation and dismantling against hostile criminal-terror actors in Karachi.',
    researchFocus: 'Jaskirat Hamza Indian agent Karachi terror network retaliation national security violence factual corrections',
    redTeamChallenge: 'The strongest counter-reading is that the sequel fuses revenge, nationalism and extreme violence so tightly that protection of India can become indistinguishable from vengeance and collective hostility in audience reception.',
    fact: 'The sequel released on 19 March 2026; it continues the fictional undercover-agent story, uses real-event references, and underwent CBFC-requested factual corrections and violence trims.',
    interpretation: 'The dominant film-level orientation remains protection of Bharat and destruction of a terror infrastructure. Revenge excess lowers Dharma, while factual corrections and historical compression belong to Narrative Integrity rather than automatically reversing certification.',
    intent: 'The action director directly describes the brutality as a deliberate script and directorial choice. No unsupported claim is made that the filmmakers intended hostility toward Muslims as a community.',
    risks: [
      { id: 'historical-claims', summary: 'CBFC-requested factual corrections and real-event references make historical precision a material integrity issue.', evidenceIndexes: [1,2], materiality: 'high' },
      { id: 'community-contempt', summary: 'The film has been read as Islamophobic or collectively hostile, but the audit requires film-level generalized degradation beyond its terrorists, ISI figures, criminals and conflict setting before community contempt can be established.', evidenceIndexes: [0,3], materiality: 'high' },
      { id: 'sacred-religious-valence', summary: 'Religious settings and identities inside the Pakistan/terror plot must not be converted into a negative Hindu sacred-valence finding merely because non-Hindu antagonists or institutions are depicted negatively.', evidenceIndexes: [0,3], materiality: 'medium' }
    ],
    integrityFlags: [
      { type: 'historical-fiction', status: 'verified', summary: 'The sequel continues a fictional spy narrative that incorporates real-event references rather than presenting a documentary reconstruction.' },
      { type: 'source-fidelity', status: 'supported', summary: 'Reported CBFC factual corrections show that some timeline/details required correction before release; those caveats remain visible independently of certification.' }
    ]
  }),
];
