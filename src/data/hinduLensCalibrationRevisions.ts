import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const animalDirector = 'https://indianexpress.com/article/entertainment/bollywood/sandeep-reddy-vanga-explains-why-bobby-deol-character-in-animal-is-a-muslim-9075625/lite/';
const animalReview = 'https://www.indiatoday.in/movies/reviews/story/animal-movie-review-ranbir-kapoor-is-stellar-in-problematic-paper-thin-film-2469885-2023-12-01';
const arjanVailly = 'https://indianexpress.com/article/entertainment/bollywood/animal-song-arjan-vailly-origin-meaning-controversy-behind-ranbir-kapoor-starrer-9064951/lite/';
const arjanCreator = 'https://indianexpress.com/article/entertainment/bollywood/sandeep-reddy-vanga-reveals-how-he-finalised-jamal-kudu-arjan-vailly-for-animal-bhupinder-babbal-song-existed-for-5-years-had-350-views-9075534/lite/';
const polygynyResearch = 'https://iipsindia.ac.in/sites/default/files/Research_Brief_No_21.pdf';

export const hinduLensCalibrationRevisions: SanghiProfile[] = [
  hardenedProfile({
    title: 'Animal',
    year: 2023,
    language: 'Hindi',
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 3,
      civilizationalContinuity: 4,
      rashtra: 2,
      itihasa: 2,
      parampara: 4,
      localRoots: 5,
      raksha: 4,
      socialDharma: 2,
      sacredRegard: 2,
      contemptRisk: 0,
    },
    tags: ['Punjabi/Sikh roots', 'Family and lineage', 'Raksha', 'Dharmic tension', 'Sanghi Certified'],
    reasons: [
      'Read from the declared Hindu/Bharatiya lens, the film has substantial rooted signals rather than merely decorative ethnicity: Punjabi/Sikh kinship and lineage are central, the family repeatedly mobilises through village/cousin networks, and the Arjan Vailly sequence deliberately draws on a Punjabi/Sikh martial cultural tradition of courage and confrontation. Those elements materially support Local Roots, Parampara, Civilizational Continuity and Raksha.',
      'Sanghi Certified is not a moral-purity test for the protagonist. Ranvijay’s adultery, humiliation, domination and uncontrolled violence lower Dharma and Social Dharma and remain visible as serious moral caveats, but they do not erase the film’s dominant Bharatiya grammar of lineage, family duty, rooted kinship, martial courage and protection. The film does not turn those transgressions into an anti-Hindu or anti-Bharatiya thesis, so the stronger Hindu-centric verdict is Sanghi Certified with Dharmic qualification rather than Mixed / Contested.',
    ],
    integrityFlags: [],
    evidence: [
      {
        kind: 'interview',
        source: 'Indian Express — Sandeep Reddy Vanga on Abrar’s religion',
        claim: 'Vanga says Abrar’s conversion to Islam was used partly because Islam permits multiple wives and this allowed a larger fictional family tree; he also denied intending to portray Muslims generally in a bad light.',
        url: animalDirector,
      },
      {
        kind: 'review',
        source: 'India Today — Animal review',
        claim: 'Describes the film as an extreme father-son and family-obsession drama driven by violence, domination and morally troubling conduct, providing the strongest counterweight to an uncomplicated Dharma-positive reading.',
        url: animalReview,
      },
      {
        kind: 'review',
        source: 'Indian Express — Arjan Vailly background',
        claim: 'Documents the Punjabi/Sikh historical-cultural associations of Arjan Vailly and the Dhadi-Vaar martial tradition used by the film.',
        url: arjanVailly,
      },
      {
        kind: 'interview',
        source: 'Indian Express — Vanga on choosing Arjan Vailly',
        claim: 'Vanga says he deliberately wanted a rageful, courageous Punjabi song for the axe-fight sequence and chose Arjan Vailly for that rooted martial effect.',
        url: arjanCreator,
      },
      {
        kind: 'official',
        source: 'International Institute for Population Sciences — NFHS research brief on polygyny',
        claim: 'NFHS-based research reports polygyny as uncommon in India, including among Muslims; this prevents a character-level depiction from being silently converted into a claim that most Muslims practise polygyny.',
        url: polygynyResearch,
      },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A hyper-violent father-son crime melodrama centred on Ranvijay Singh’s obsessive protection of his industrialist father and extended Punjabi/Sikh family, with a feud against the converted Muslim relative Abrar Haque. The film uses Punjabi kinship, village cousins, martial folk music and family lineage as recurring narrative machinery rather than isolated scenery.',
      discoveryQueries: [
        'Animal 2023 source adaptation original story father son family',
        'Animal Hindu Sikh Punjabi Muslim caste community identity representation',
        'Animal Abrar Islam polygamy community contempt stereotype criticism',
        'Animal Arjan Vailly Sikh Punjabi martial tradition culture',
        'Animal controversy criticism Dharma family violence adultery factual dispute',
        'Animal Sandeep Reddy Vanga interview Abrar conversion Arjan Vailly intent',
      ],
      probeOverrides: {
        'community-contempt': {
          status: 'clear',
          materiality: 'high',
          summary: 'Abrar’s conversion and multiple wives are a creator-confirmed character and plot device. Depicting a practice permitted within Islam is not by itself generalized degradation of Muslims as a community, and the film does not make a population-wide prevalence claim.',
          evidenceUrls: [animalDirector, polygynyResearch],
        },
        'sacred-religious-valence': {
          status: 'clear',
          materiality: 'medium',
          summary: 'The relevant Bharatiya sacred/cultural material is not treated with contempt. The Arjan Vailly tradition is used as serious Punjabi/Sikh martial-cultural grammar rather than ridicule; no Hindu/Bharatiya sacred degradation was identified in this audit.',
          evidenceUrls: [arjanVailly, arjanCreator],
        },
        'regional-context': {
          status: 'clear',
          materiality: 'high',
          summary: 'Punjabi/Sikh kinship, village cousins, martial song tradition and family-lineage structures materially shape the film’s action and identity rather than functioning as generic decorative texture.',
          evidenceUrls: [arjanVailly, arjanCreator, animalReview],
        },
        'social-radar': {
          status: 'finding',
          materiality: 'medium',
          summary: 'Public criticism strongly contests the film’s violence, misogyny and domination. Those objections materially lower Dharma and Social Dharma, but they are moral-quality caveats rather than an interfaith-neutrality penalty or automatic bar to Bharatiya certification.',
          evidenceUrls: [animalReview],
        },
        'self-falsification': {
          status: 'finding',
          materiality: 'high',
          summary: 'The strongest challenge is that the film often glamorises a protagonist whose filial loyalty is expressed through adultery, humiliation and uncontrolled violence. The audit therefore lowers Dharma and Social Dharma, but does not treat a morally flawed protagonist as equivalent to an anti-Bharatiya film-level thesis.',
          evidenceUrls: [animalReview, arjanVailly],
        },
      },
      strongestCounterEvidence: [
        {
          kind: 'review',
          source: 'India Today — Animal review',
          claim: 'Provides the strongest counter-reading that the protagonist’s family devotion is inseparable from domination, violence and morally destructive conduct.',
          url: animalReview,
        },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'A Hindu-centric classifier could over-certify Animal simply because it is culturally rooted, family-centred and uses Punjabi/Sikh martial tradition, even though the protagonist repeatedly violates Dharma and harms the very relationships he claims to protect.',
        outcome: 'qualified',
        evidenceUrls: [animalReview, arjanVailly, arjanCreator],
        verdictImpact: 'The challenge is real and lowers Dharma and Social Dharma, but certification judges the film’s dominant Bharatiya/civilizational orientation rather than requiring a morally exemplary hero. Rooted kinship, lineage, martial inheritance and Raksha remain central enough for Sanghi Certified with explicit Dharmic qualification.',
      },
      factInterpretationIntent: {
        fact: 'Animal is original fiction centred on a Punjabi/Sikh family feud. Vanga explicitly connected Abrar’s conversion to Islam with the availability of multiple wives for the fictional family tree, and separately chose Arjan Vailly for a Punjabi martial effect. NFHS-based research does not support treating Muslim polygyny as a majority practice.',
        interpretation: 'Under the Hindu/Bharatiya lens, the film’s dominant cultural grammar is strongly rooted in family, lineage, Punjabi/Sikh identity, martial inheritance and protection. Ranvijay’s repeated moral transgressions lower Dharma and Social Dharma but do not, by themselves, overturn that film-level Bharatiya alignment.',
        intent: 'Where creator intent is relevant, the record uses Vanga’s direct explanations. No broader anti-Muslim or pro-Hindu motive is inferred beyond those statements and the finished film’s narrative treatment.',
      },
    }),
  }),
];
