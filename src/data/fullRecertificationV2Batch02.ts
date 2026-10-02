import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const chandruRecord = 'https://www.boomlive.in/law/jai-bhim-courtroom-drama-justice-k-chandru-suriya-th-gnanavel-15530';
const directorResponse = 'https://indianexpress.com/article/entertainment/tamil/jai-bhim-director-tha-se-gnanavel-apologises-says-wrong-to-drag-suriya-7634812/';
const communityObjection = 'https://www.hindustantimes.com/india-news/vanniyar-sangam-takes-jai-bhim-to-court-alleges-defamation-seeks-punishment-101637667233541.html';
const filmReview = 'https://www.indiatoday.in/amp/movies/regional-cinema/story/jai-bhim-movie-review-suriya-s-hard-hitting-tale-about-caste-injustice-and-police-brutality-is-a-must-watch-1871899-2021-11-01';

export const fullRecertificationV2Batch02: SanghiProfile[] = [
  hardenedProfile({
    title: 'Jai Bhim',
    year: 2021,
    language: 'Tamil',
    status: 'mixed',
    confidence: 'high',
    dimensions: {
      dharma: 3,
      civilizationalContinuity: 2,
      rashtra: 2,
      itihasa: 2,
      parampara: 2,
      localRoots: 4,
      raksha: 1,
      socialDharma: 5,
      sacredRegard: 2,
      contemptRisk: 2,
    },
    tags: ['Social Dharma', 'Custodial violence', 'True-story adaptation', 'Community representation'],
    reasons: [
      'The film gives unusually strong moral weight to justice for a marginalised tribal family, exposing custodial torture while ultimately using courts, legal advocacy and institutional accountability rather than rejecting Indian society or constitutional remedy.',
      'Its true-story adaptation nevertheless changes identity-sensitive facts: Rajakannu’s community is changed from Kurava/Koravar to Irular, while the torturing officer is renamed Gurumurthy and the original release visually associated him with a Vanniyar symbol. The latter association was removed and the director denied any anti-community intent, but the asymmetry is material enough to prevent uncomplicated certification.'
    ],
    integrityFlags: [
      {
        type: 'community-substitution', status: 'verified',
        summary: 'The real victim belonged to the Kurava/Koravar community while the film portrays the family as Irular.',
        fact: 'Justice K. Chandru confirmed the community change while describing the film as a dramatization rather than a documentary.',
        interpretation: 'Because tribal identity is central to the film’s social-justice argument, the substitution is a material adaptation delta even though the underlying custodial-abuse case is real.',
        intent: 'The audit does not infer hostility toward either community from the substitution.'
      },
      {
        type: 'perpetrator-identity-asymmetry', status: 'supported',
        summary: 'The real officer’s name was Anthonysamy; the film uses Gurumurthy/Guru and the original release placed a Vanniyar-associated fire-pot calendar behind the character.',
        fact: 'The name change and original calendar image are documented; the calendar was promptly replaced after objections.',
        interpretation: 'Changing identity cues around the perpetrator while retaining a true-story moral claim creates a legitimate representation-integrity concern.',
        intent: 'Director T.J. Gnanavel said the calendar association was unintended and apologised for hurt; deliberate anti-Vanniyar intent is therefore not established.'
      }
    ],
    evidence: [
      { kind: 'interview', source: 'BOOM — Justice K. Chandru on the real Jai Bhim case', claim: 'Chandru describes the real custodial-death case, says Rajakannu was Kuruva rather than Irular, and distinguishes the film from a documentary.', url: chandruRecord },
      { kind: 'interview', source: 'Indian Express — T.J. Gnanavel response to Vanniyar controversy', claim: 'Gnanavel says the calendar association was unintended, records its removal, takes responsibility and denies intent to insult a community.', url: directorResponse },
      { kind: 'review', source: 'Hindustan Times — Vanniyar Sangam court complaint', claim: 'Records the objection that the real officer Anthonysamy was renamed Gurumurthy and visually associated with a Vanniyar symbol.', url: communityObjection },
      { kind: 'review', source: 'India Today — Jai Bhim review', claim: 'Documents the film’s central focus on caste discrimination, Irular vulnerability, custodial violence and the pursuit of justice.', url: filmReview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'true-story',
      filmUnderstanding: 'A courtroom and custodial-violence drama based on the Rajakannu case handled by advocate K. Chandru, with substantial real-case grounding but deliberate changes to victim-community and perpetrator identity details.',
      discoveryQueries: [
        'Jai Bhim source adaptation true story Rajakannu Justice Chandru Kurava Irular',
        'Jai Bhim caste community identity substitution Vanniyar Irular Kurava',
        'Jai Bhim Vanniyar contempt stereotype insult representation Gurumurthy calendar',
        'Jai Bhim controversy criticism accuracy factual dispute Anthonysamy',
        'Jai Bhim TJ Gnanavel apology intention community symbol',
        'Jai Bhim strongest defence custodial violence constitutional justice social dharma',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The film is rooted in a real custodial-death case but changes community identity, family details and names.', evidenceUrls: [chandruRecord, directorResponse] },
        'identity-substitution': { status: 'finding', materiality: 'high', summary: 'Rajakannu is changed from Kurava/Koravar to Irular and the perpetrating officer is renamed from Anthonysamy to Gurumurthy/Guru.', evidenceUrls: [chandruRecord, communityObjection, directorResponse] },
        'community-contempt': { status: 'ambiguous', materiality: 'high', summary: 'The original Vanniyar-associated calendar plus the Gurumurthy name created a plausible community-targeting reading; however the visual was removed and the director explicitly denied anti-community intent.', evidenceUrls: [communityObjection, directorResponse] },
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'The underlying custodial abuse and legal case are real, while identity-sensitive and family details were fictionalised.', evidenceUrls: [chandruRecord] },
        'creator-source-conflict': { status: 'finding', materiality: 'medium', summary: 'Community critics read deliberate vilification into the Vanniyar cues, whereas the director says the calendar was accidental and denies intent to target any community.', evidenceUrls: [communityObjection, directorResponse] },
        'social-radar': { status: 'finding', materiality: 'high', summary: 'The Vanniyar representation dispute produced a legal complaint and public controversy substantial enough to require explicit editorial treatment.', evidenceUrls: [communityObjection, directorResponse] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest defence is that the film exposes documented custodial brutality and pursues justice through Indian constitutional institutions, while the director corrected the disputed visual.', evidenceUrls: [chandruRecord, filmReview, directorResponse] },
      },
      strongestCounterEvidence: [
        { kind: 'interview', source: 'Indian Express — T.J. Gnanavel response', claim: 'The director denies an intention to target Vanniyars and says the disputed calendar was removed immediately after it was noticed.', url: directorResponse },
        { kind: 'interview', source: 'BOOM — Justice K. Chandru', claim: 'Chandru says the film broadly follows a real case while using cinematic liberty and that some actual police brutality was even more severe than shown.', url: chandruRecord },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'A Mixed verdict could over-penalise a film whose dominant purpose is truthful exposure of custodial brutality and constitutional advocacy, especially when the director denied and corrected the disputed Vanniyar visual cue.',
        outcome: 'qualified',
        evidenceUrls: [chandruRecord, directorResponse, filmReview],
        verdictImpact: 'The strong Social Dharma case prevents Not Certified, but the combination of victim-community substitution and perpetrator identity cues in a true-story film remains too material for uncomplicated certification. Mixed / Contested is retained.'
      },
      factInterpretationIntent: {
        fact: 'The Rajakannu custodial-death case and Chandru’s legal role are real; the film changes Rajakannu’s community to Irular, changes the perpetrating officer’s name, and originally included a Vanniyar-associated calendar image that was later replaced.',
        interpretation: 'The film’s constitutional justice and anti-abuse message is strongly positive, but identity-sensitive adaptation asymmetry creates a real Narrative Integrity conflict.',
        intent: 'The director expressly denied intending to target a community and apologised for unintended hurt, so hostile anti-Vanniyar intent is not treated as established.'
      }
    })
  }),
];
