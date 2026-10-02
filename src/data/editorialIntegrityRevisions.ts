import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const indianExpressReview = 'https://indianexpress.com/article/entertainment/movie-review/sita-ramam-movie-review-dulquer-salmaan-mrunal-thakur-8072706/lite/';
const indiaTodayReview = 'https://www.indiatoday.in/movies/regional-cinema/story/sita-ramam-movie-review-dulquer-salmaan-mrunal-thakur-s-film-aims-to-be-a-poignant-love-story-but-falls-short-1984200-2022-08-05';
const cinemaExpressReview = 'https://www.cinemaexpress.com/telugu/review/2022/Aug/06/sita-ramam-movie-review-charming-love-story-elevated-by-layered-writing-and-dulquers-performance-33475.html';
const hindustanTimesReview = 'https://www.hindustantimes.com/entertainment/telugu-cinema/sita-ramam-review-dulquer-salmaan-mrunal-thakur-s-romance-drama-is-a-sensitive-depiction-of-indo-pak-conflict-101659703853216.html';
const endingRecord = 'https://www.thereviewgeek.com/sitaramam-endingexplained/';

export const editorialIntegrityRevisions: SanghiProfile[] = [
  hardenedProfile({
    title: 'Sita Ramam',
    year: 2022,
    language: 'Telugu',
    tmdbId: 894803,
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 5,
      civilizationalContinuity: 4,
      rashtra: 5,
      itihasa: 2,
      parampara: 4,
      localRoots: 4,
      raksha: 5,
      socialDharma: 4,
      sacredRegard: 4,
      contemptRisk: 0,
    },
    tags: ['Rashtra', 'Raksha', 'Ramayana', 'Interfaith romance', 'Sacrifice'],
    reasons: [
      'Lieutenant Ram is defined by Indian Army service, protection of civilians and refusal to betray Indian military positions even under imprisonment and torture; the film ultimately restores his honour as a patriot rather than treating national duty as disposable beside romance.',
      'The romance deliberately uses Ramayana vocabulary and Ram/Sita/Hanuman parallels while allowing a Muslim princess and Pakistani characters moral agency. Its universalist message about humanity across religion and borders does not erase the film’s strongly India-positive duty, sacrifice and sacred-cultural framing.',
    ],
    integrityFlags: [{
      type: 'historical-claim',
      status: 'supported',
      summary: 'The Kashmir and India-Pakistan military backdrop is heavily fictionalized and compressed for romantic melodrama and should not be treated as a balanced historical reconstruction.',
      fact: 'The central characters and operation are fictional, while the film borrows recognizable India-Pakistan and Kashmir conflict context.',
      interpretation: 'That geopolitical simplification is a Narrative Integrity caveat, not evidence against the film’s Rashtra, Raksha or sacred-cultural orientation.',
      intent: 'No claim is made that the screenplay provides a complete historical account of the Kashmir conflict or India-Pakistan relations.',
    }],
    evidence: [
      {
        kind: 'review',
        source: 'Indian Express — Sita Ramam review',
        claim: 'Identifies love across religion, politics and language as the driving emotion and explicitly reads the film as a modern Ramayana reimagination with Afreen functioning as a Hanuman-like messenger.',
        url: indianExpressReview,
      },
      {
        kind: 'review',
        source: 'India Today — Sita Ramam review',
        claim: 'Describes Ram as an Indian soldier, the India-Pakistan conflict as a major setting, his protection of civilians during communal violence, and the film’s humanity-over-enmity theme.',
        url: indiaTodayReview,
      },
      {
        kind: 'review',
        source: 'Cinema Express — Sita Ramam review',
        claim: 'Notes the film’s repeated Ramayana references and argues that the epic parallel is integrated into the story rather than used as disposable decoration.',
        url: cinemaExpressReview,
      },
      {
        kind: 'review',
        source: 'Hindustan Times — Sita Ramam review',
        claim: 'Reads the film as a sensitive India-Pakistan story whose central moral is choosing humanity over religious and national enmity without reducing the conflict to simple hatred.',
        url: hindustanTimesReview,
      },
      {
        kind: 'review',
        source: 'The Review Geek — Sita Ramam ending explained',
        claim: 'Records the climax in which Ram refuses to provide Indian Army coordinates while his fellow officer gives them up, establishing Ram’s refusal to betray India as a decisive plot fact.',
        url: endingRecord,
      },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Telugu period romance about Indian Army Lieutenant Ram and Princess Noor Jahan, who writes to him as Sita Mahalakshmi, framed through Kashmir, India-Pakistan hostility, military duty, sacrifice and recurring Ramayana parallels.',
      discoveryQueries: [
        'Sita Ramam Ramayana Ram Sita Hanuman symbolism review',
        'Sita Ramam Indian Army Pakistan Kashmir patriotism coordinates sacrifice',
        'Sita Ramam Hindu Muslim representation communal violence review',
        'Sita Ramam Noor Jahan Sita identity religion representation criticism',
        'Sita Ramam anti Hindu anti India criticism controversy',
        'Sita Ramam humanity over religion borders nationalism counter reading',
      ],
      probeOverrides: {
        'community-contempt': {
          status: 'clear',
          materiality: 'high',
          summary: 'The story includes Hindu-Muslim and India-Pakistan hostility but gives Muslim and Pakistani characters moral agency, repentance and cross-community bonds; the adversarial review did not support generalized contempt toward either religious community.',
          evidenceUrls: [indiaTodayReview, hindustanTimesReview],
        },
        'sacred-religious-valence': {
          status: 'clear',
          materiality: 'high',
          summary: 'Ramayana names and parallels are used affirmatively as the film’s romantic-cultural grammar rather than as ridicule, desecration or inversion of the sacred source.',
          evidenceUrls: [indianExpressReview, cinemaExpressReview],
        },
        'regional-context': {
          status: 'clear',
          materiality: 'high',
          summary: 'The review explicitly distinguishes the fictional romantic narrative from its Kashmir and India-Pakistan setting and retains the military/geopolitical simplification as a caveat.',
          evidenceUrls: [indiaTodayReview, hindustanTimesReview],
        },
      },
      strongestCounterEvidence: [
        {
          kind: 'review',
          source: 'Hindustan Times — Sita Ramam review',
          claim: 'The film explicitly prioritizes humanity across religion, borders and countries, which could be read as weakening a narrower national-duty interpretation.',
          url: hindustanTimesReview,
        },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'The film’s “humanity above borders” message, interfaith romance and Muslim heroine using the name Sita could be read as diluting Hindu and national identity rather than affirming them.',
        outcome: 'qualified',
        evidenceUrls: [hindustanTimesReview, indianExpressReview, endingRecord],
        verdictImpact: 'The counter-reading is retained, but it does not overturn the verdict: Ramayana symbolism is respectful, the Muslim heroine is not used to demean Hindu identity, and Ram’s refusal to betray Indian military positions makes national duty a decisive moral action rather than a disposable backdrop.',
      },
      factInterpretationIntent: {
        fact: 'Sita Ramam is original fiction set against a stylized Kashmir/India-Pakistan conflict; its plot repeatedly invokes Ramayana parallels and makes Ram’s refusal to reveal Indian Army coordinates central to his fate.',
        interpretation: 'The combination of duty, sacrifice, civilian protection, civilizational symbolism and cross-community reconciliation supports a high-confidence Sanghi Certified verdict while geopolitical simplification remains separately caveated.',
        intent: 'No anti-Hindu, anti-India or anti-Muslim intent is inferred; the classification rests on the film’s actual narrative treatment rather than presumed creator motives.',
      },
    }),
  }),
];
