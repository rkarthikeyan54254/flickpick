import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const researchUrl = 'https://www.indiatoday.in/movies/bollywood/story/here-s-what-went-into-making-of-the-kashmiri-files-700-interviews-of-victims-5-000-hours-of-research-1925281-2022-03-14';
const panditAudienceUrl = 'https://indianexpress.com/article/cities/pune/as-the-kashmir-files-opens-in-city-pandits-recall-pain-and-grief-7817061/';
const historicalSurveyUrl = 'https://www.indiatoday.in/magazine/cover-story/story/20220404-exodus-of-kashmiri-pandits-the-truth-the-kashmir-files-1929231-2022-03-25';
const filmmakerUrl = 'https://indianexpress.com/article/entertainment/bollywood/vivek-agnihotri-on-the-kashmir-files-i-wanted-to-make-a-sensitive-film-7819670/lite/';
const adversarialUrl = 'https://scroll.in/article/1019863/here-are-five-things-the-kashmir-files-gets-wrong-about-kashmir';

export const fullRecertificationV2Overrides: SanghiProfile[] = [
  hardenedProfile({
    title: 'The Kashmir Files',
    year: 2022,
    language: 'Hindi',
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 4,
      civilizationalContinuity: 5,
      rashtra: 4,
      itihasa: 5,
      parampara: 4,
      localRoots: 5,
      raksha: 4,
      socialDharma: 3,
      sacredRegard: 4,
      contemptRisk: 1,
    },
    tags: ['Kashmiri Pandits', 'Hindu historical memory', 'Itihasa', 'Displacement', 'Raksha'],
    reasons: [
      'The film centres the targeted killings, threats, displacement and civilizational loss experienced by Kashmiri Pandits and treats recovery of that Hindu community memory as a legitimate moral task rather than an embarrassment to be softened for representational balance.',
      'Its negative portrayal of Islamist militants, separatists, collaborators and betraying neighbours does not by itself establish contempt for Muslims as a community. Under the Bharatiya calibration, victim-centred asymmetry is permissible unless the film demonstrably generalizes inherent guilt or inferiority to Muslims as Muslims.',
    ],
    integrityFlags: [
      {
        type: 'historical-claim',
        status: 'supported',
        summary: 'The film combines a real historical core with composite characters, compressed chronology and disputed scene-level details, so it should not be treated as a literal event-by-event documentary record.',
        fact: 'Kashmiri Pandits suffered targeted killings, threats and large-scale displacement during the insurgency; the film builds a composite dramatic narrative from testimony and historical incidents.',
        interpretation: 'Chronology compression and dramatization reduce scene-level historical precision without erasing the documented persecution and displacement at the centre of the film.',
        intent: 'The filmmakers describe the project as historical recovery based on extensive victim testimony; stated intent does not independently verify every cinematic detail.',
      },
    ],
    evidence: [
      {
        kind: 'interview',
        source: 'India Today — research behind The Kashmir Files',
        claim: 'The filmmakers describe interviewing hundreds of Kashmiri Pandit victims and collecting extensive testimony and documents while developing the film.',
        url: researchUrl,
      },
      {
        kind: 'review',
        source: 'Indian Express — Kashmiri Pandit audience accounts',
        claim: 'Pandit viewers describe recognition of family trauma, displacement and inherited memory in the film, supporting its historical-remembrance function.',
        url: panditAudienceUrl,
      },
      {
        kind: 'review',
        source: 'India Today — historical survey of the Pandit exodus',
        claim: 'Provides historical context on militancy, targeted Pandit killings and large-scale flight while also noting that individual Kashmiri Muslims responded in different ways.',
        url: historicalSurveyUrl,
      },
      {
        kind: 'interview',
        source: 'Indian Express — Vivek Agnihotri interview',
        claim: 'Agnihotri frames the project as recovery of a marginalised Pandit history and says he intended a sensitive film based on community research.',
        url: filmmakerUrl,
      },
      {
        kind: 'review',
        source: 'Scroll — adversarial factual and representation critique',
        claim: 'Raises chronology, composite-event and Muslim-representation objections; retained as adversarial evidence rather than treated as the decisive certification authority.',
        url: adversarialUrl,
      },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'history',
      filmUnderstanding: 'A fictional/composite family story constructed around the documented persecution, killings, threats and displacement of Kashmiri Pandits during the Kashmir insurgency, explicitly framed as recovery of Hindu/Pandit historical memory.',
      discoveryQueries: [
        'The Kashmir Files source adaptation true story victim testimony chronology exodus',
        'The Kashmir Files Hindu Muslim Kashmiri Pandit community identity representation',
        'The Kashmir Files Muslim stereotype contempt ridicule hate representation criticism',
        'The Kashmir Files controversy criticism accuracy factual dispute chronology composite events',
        'The Kashmir Files Vivek Agnihotri victim interviews research intent historical memory',
      ],
      probeOverrides: {
        'source-adaptation': {
          status: 'finding',
          materiality: 'high',
          summary: 'A real historical episode is rendered through composite characters and merged incidents rather than a one-to-one documentary reconstruction.',
          evidenceUrls: [researchUrl, adversarialUrl],
        },
        'historical-claims': {
          status: 'finding',
          materiality: 'high',
          summary: 'The persecution and displacement of Kashmiri Pandits are historically grounded, while chronology and some scene-level details are compressed, merged or disputed.',
          evidenceUrls: [historicalSurveyUrl, adversarialUrl],
        },
        'community-contempt': {
          status: 'clear',
          materiality: 'high',
          summary: 'The audit found strong narrative hostility toward militants, separatists and collaborators, but victim-centred asymmetry and a lack of balancing Muslim characters are not sufficient to establish generalized contempt toward Muslims as Muslims.',
          evidenceUrls: [historicalSurveyUrl, panditAudienceUrl, adversarialUrl],
        },
        'regional-context': {
          status: 'finding',
          materiality: 'high',
          summary: 'The film foregrounds the Pandit experience and is not a comprehensive social history of every Kashmiri community; that limited perspective is explicit and should not be mistaken for total regional coverage.',
          evidenceUrls: [historicalSurveyUrl, panditAudienceUrl],
        },
        'creator-source-conflict': {
          status: 'finding',
          materiality: 'medium',
          summary: 'The makers emphasise testimony and historical recovery, while critics dispute some literal scene details and chronology; both claims remain visible.',
          evidenceUrls: [researchUrl, filmmakerUrl, adversarialUrl],
        },
        'social-radar': {
          status: 'finding',
          materiality: 'high',
          summary: 'The film generated intense factual and representational criticism alongside strong recognition from many Kashmiri Pandit viewers who regard it as overdue public memory.',
          evidenceUrls: [panditAudienceUrl, adversarialUrl],
        },
        'self-falsification': {
          status: 'finding',
          materiality: 'high',
          summary: 'The strongest challenge is that composite history and a highly asymmetric victim perspective can be read as collective Muslim suspicion; the counter-audit found that asymmetry alone does not meet the clarified community-contempt threshold.',
          evidenceUrls: [historicalSurveyUrl, adversarialUrl, panditAudienceUrl],
        },
      },
      strongestCounterEvidence: [
        {
          kind: 'review',
          source: 'Scroll — adversarial factual and representation critique',
          claim: 'Argues that compressed chronology and narrative choices broaden suspicion beyond specific perpetrators; retained as the strongest challenge to certification.',
          url: adversarialUrl,
        },
        {
          kind: 'review',
          source: 'India Today — historical survey of the Pandit exodus',
          claim: 'Notes a more complex historical record in which militants and collaborators committed atrocities while some Kashmiri Muslims also protected or assisted Pandits.',
          url: historicalSurveyUrl,
        },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'The film can be read as converting a documented Hindu victim history into generalized suspicion of Kashmiri Muslims through composite events, limited countervailing Muslim agency and intense dramatic compression.',
        outcome: 'qualified',
        evidenceUrls: [adversarialUrl, historicalSurveyUrl],
        verdictImpact: 'That challenge remains a representation and Narrative Integrity caveat, but under the clarified Bharatiya standard it does not justify downgrading a film merely for victim-centred asymmetry. No sufficiently corroborated film-level evidence was found that the work generalizes inherent inferiority or guilt to Muslims as Muslims.',
      },
      factInterpretationIntent: {
        fact: 'Targeted killings, threats and large-scale displacement of Kashmiri Pandits are historical; the screenplay combines and dramatizes incidents within a composite family narrative.',
        interpretation: 'The film functions as Hindu/Pandit historical remembrance and civilizational-loss recovery. Its asymmetrical focus is compatible with certification, while disputed chronology and scene details remain explicit integrity caveats.',
        intent: 'The makers state a victim-testimony and historical-recovery purpose. The verdict does not infer hidden motives and does not require ideological critics to approve the film’s perspective.',
      },
    }),
  }),
];
