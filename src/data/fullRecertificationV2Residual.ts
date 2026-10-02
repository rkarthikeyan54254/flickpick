import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const directorSource = 'https://indianexpress.com/article/cities/ahmedabad/few-academic-references-went-into-making-of-nayika-devi-director-7875743/';
const ignouHistory = 'https://egyankosh.ac.in/bitstream/123456789/116355/3/Unit-4.pdf';
const epigraphia = 'https://library.bjp.org/jspui/bitstream/123456789/1910/1/epigraphia-indica-vol-11.pdf';
const gujaratReception = 'https://timesofindia.indiatimes.com/entertainment/gujarati/movies/news/khushi-shah-starrer-nayika-devi-the-warrior-queen-becomes-tax-free-in-gujarat/amp_articleshow/92032829.cms';

export const fullRecertificationV2Residual: SanghiProfile[] = [
  hardenedProfile({
    title: 'Nayika Devi: The Warrior Queen',
    year: 2022,
    language: 'Gujarati',
    status: 'certified',
    confidence: 'medium',
    dimensions: {
      dharma: 4,
      civilizationalContinuity: 5,
      rashtra: 5,
      itihasa: 5,
      parampara: 4,
      localRoots: 5,
      raksha: 5,
      socialDharma: 4,
      sacredRegard: 3,
      contemptRisk: 0,
    },
    tags: ['Gujarati history', 'Naikidevi', 'Raksha', 'Itihasa', 'Chaulukya'],
    reasons: [
      'The film recovers a Gujarati regent-queen and the 1178 resistance to the Ghurid invasion as affirmative regional and Bharatiya historical memory, giving Raksha, Itihasa and civilizational continuity decisive weight.',
      'The historical core of a major Ghurid defeat in Gujarat is well supported, while Naikidevi’s exact battlefield role and many scene-level details depend on later chronicles and cinematic reconstruction; those limits remain visible as Narrative Integrity caveats rather than reversing the cultural verdict.',
    ],
    integrityFlags: [
      {
        type: 'historical-claim',
        status: 'disputed',
        summary: 'The 1178 Ghurid defeat in Gujarat is well supported, but sources differ over ruler attribution and how directly Naikidevi personally commanded the battle; later Gujarati tradition gives her the leading role used by the film.',
        fact: 'Academic material and epigraphic discussion support a 1178 defeat of Muhammad of Ghor in Gujarat during the Chaulukya succession around Mularaja II/Bhima II.',
        interpretation: 'The film may legitimately recover the Naikidevi tradition, but its personal dialogue, strategy and battlefield staging should not be treated as settled documentary history.',
        intent: 'No deliberate falsification is inferred; the director publicly acknowledged sparse records and reconstruction rather than claiming documentary precision.',
      },
      {
        type: 'source-fidelity',
        status: 'supported',
        summary: 'The director says the production relied on only a few books, including Dhumketu’s Nayikadevi, did not consult a historian, and reconstructed gaps in the record.',
      },
    ],
    evidence: [
      {
        kind: 'interview',
        source: 'Indian Express — director Nitin Gawde on historical sources',
        claim: 'Gawde says very little material survives, that the film used only a few books including Dhumketu’s Nayikadevi and a work by Surendra Sharma, that no historian was consulted, and that the team reconstructed gaps while trying to honour Nayika Devi.',
        url: directorSource,
      },
      {
        kind: 'official',
        source: 'IGNOU eGyanKosh — medieval Gujarat history unit',
        claim: 'The academic unit records Merutunga’s account of Queen Naiki leading the Chaulukya army against Muhammad Ghori and also notes the conflicting Muslim-chronicle attribution, while concluding that Ghori’s defeat in Gujarat is securely established.',
        url: ignouHistory,
      },
      {
        kind: 'official',
        source: 'Epigraphia Indica — Gujarat invasion context',
        claim: 'The epigraphic discussion places Muhammad Ghori’s Gujarat expedition and defeat in 1178 and records the competing Bhimadeva attribution in later Muslim historical writing, supporting the battle while cautioning against over-certainty on command attribution.',
        url: epigraphia,
      },
      {
        kind: 'review',
        source: 'Times of India — Gujarat reception of Nayika Devi',
        claim: 'Contemporary reporting describes the Gujarati historical film as celebrating Nayika Devi’s heroism and regional cultural heritage and records the Gujarat government’s decision to make it tax-free.',
        url: gujaratReception,
      },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'history',
      filmUnderstanding: 'A Gujarati historical drama about Chaulukya regent Queen Naikidevi and the resistance to Muhammad of Ghor’s 1178 invasion, reconstructed from sparse medieval evidence and later literary-historical tradition.',
      discoveryQueries: [
        'Nayika Devi Warrior Queen film source Dhumketu director historian historical accuracy',
        'Naikidevi 1178 Muhammad Ghori Gujarat Mularaja Bhima epigraphy historical sources',
        'Nayika Devi film Muslim community portrayal Muhammad Ghori contempt stereotype',
        'Nayika Devi Gujarati sacred religious representation temple tradition',
        'Nayika Devi movie controversy historical accuracy counter reading',
        'Nitin Gawde Nayika Devi interview reconstruction sources',
      ],
      probeOverrides: {
        'source-adaptation': {
          status: 'finding',
          materiality: 'high',
          summary: 'The film reconstructs a sparse 12th-century record using only a few secondary/literary sources; the director explicitly says no historian was consulted.',
          evidenceUrls: [directorSource],
        },
        'historical-claims': {
          status: 'ambiguous',
          materiality: 'high',
          summary: 'The 1178 Ghurid defeat in Gujarat is secure, but primary and later sources differ over Mularaja/Bhima attribution and the degree of Naikidevi’s personal battlefield command.',
          evidenceUrls: [ignouHistory, epigraphia],
        },
        'real-person-attribution': {
          status: 'ambiguous',
          materiality: 'high',
          summary: 'Naikidevi is a historical regent, but private dialogue, strategy, motives and exact battlefield actions are necessarily reconstructed beyond the surviving record.',
          evidenceUrls: [directorSource, ignouHistory],
        },
        'community-contempt': {
          status: 'clear',
          materiality: 'high',
          summary: 'The reviewed evidence supports a conflict against Muhammad of Ghor and an invading army; it does not establish generalized degradation of Muslims as a community as a condition of the film’s positive verdict.',
          evidenceUrls: [directorSource, ignouHistory],
        },
        'sacred-religious-valence': {
          status: 'clear',
          materiality: 'medium',
          summary: 'No material sacred-ridicule finding emerged in the title-specific audit; the film’s directional signal rests on historical memory and defence rather than on manufacturing a devotional claim.',
          evidenceUrls: [directorSource],
        },
        'regional-context': {
          status: 'clear',
          materiality: 'high',
          summary: 'The film is explicitly positioned as Gujarati historical memory around Patan, the Chaulukya polity and a queen treated as part of Gujarat’s cultural heritage.',
          evidenceUrls: [directorSource, gujaratReception],
        },
        'creator-source-conflict': {
          status: 'finding',
          materiality: 'high',
          summary: 'The creator openly acknowledges source scarcity and reconstruction, while academic history preserves attribution disputes that limit literal confidence in the film’s scene-level narrative.',
          evidenceUrls: [directorSource, ignouHistory, epigraphia],
        },
      },
      strongestCounterEvidence: [
        {
          kind: 'interview',
          source: 'Indian Express — director Nitin Gawde on historical sources',
          claim: 'The director acknowledges that source material was sparse, the team reconstructed missing history, and no historian was consulted.',
          url: directorSource,
        },
        {
          kind: 'official',
          source: 'IGNOU eGyanKosh — medieval Gujarat history unit',
          claim: 'Academic discussion records conflicting historical attributions for the 1178 victory, limiting certainty about the film’s exact version of Naikidevi’s command role.',
          url: ignouHistory,
        },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'The film could be over-certified by converting a later heroic tradition into settled history and by flattening a complex 12th-century campaign into a simple civilizational clash around one queen and one invader.',
        outcome: 'qualified',
        evidenceUrls: [directorSource, ignouHistory, epigraphia, gujaratReception],
        verdictImpact: 'The historical uncertainty is material and remains visible, but it concerns scene-level attribution and reconstruction rather than the well-supported core of a Ghurid defeat in Gujarat or the film’s affirmative Gujarati/Bharatiya memory. The antagonist is a named invading ruler and army, so the evidence does not require a community-contempt downgrade.',
      },
      factInterpretationIntent: {
        fact: 'Muhammad of Ghor suffered a major defeat in Gujarat in 1178; later Gujarati tradition prominently credits regent Naikidevi, while other historical traditions differ over ruler attribution and the exact command narrative.',
        interpretation: 'Recovering Naikidevi as Gujarati civilizational memory strongly supports certification, but the film should be presented as a historically inspired reconstruction rather than documentary proof of every episode.',
        intent: 'The director’s public acknowledgement of sparse records and reconstruction weighs against inferring deceptive intent; no generalized anti-Muslim intent is inferred from dramatizing conflict with Muhammad of Ghor.',
      },
    }),
  }),
];
