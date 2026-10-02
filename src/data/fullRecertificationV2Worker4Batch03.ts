import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const indianExpressRegional = 'https://indianexpress.com/article/entertainment/regional/baahubali-2-success-be-recreated-by-other-regional-industries-4652757/lite/';
const toiRajendraPrasad = 'https://timesofindia.indiatimes.com/entertainment/bhojpuri/movies/did-you-know/dr-rajendra-prasad-wanted-a-bhojpuri-movie/articleshow/13955392.cms';
const toiFirstFilm = 'https://timesofindia.indiatimes.com/entertainment/bhojpuri/movies/news/nirahua-recalls-first-bhojpuri-film-ganga-maiyya-tohe-piyari-chadhaibo/articleshow/81167562.cms';
const toiKumKum = 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/yesteryear-heroine-kum-kum-passes-away/articleshow/77232078.cms';
const sourceLineage = 'https://en.wikipedia.org/wiki/Ganga_Maiyya_Tohe_Piyari_Chadhaibo';

export const fullRecertificationV2Worker4Batch03: SanghiProfile[] = [
  hardenedProfile({
    title: 'Ganga Maiyya Tohe Piyari Chadhaibo',
    year: 1963,
    language: 'Bhojpuri',
    status: 'certified',
    confidence: 'medium',
    dimensions: {
      dharma: 4,
      civilizationalContinuity: 5,
      rashtra: 2,
      itihasa: 5,
      parampara: 5,
      localRoots: 5,
      raksha: 1,
      socialDharma: 5,
      sacredRegard: 5,
      contemptRisk: 0,
    },
    tags: ['Bhojpuri heritage', 'Ganga', 'Widow remarriage', 'Cinema history'],
    reasons: [
      'As the first Bhojpuri feature, the film is itself a major act of linguistic and regional cultural continuity: contemporary retrospectives treat it as the point at which Bhojpuri-speaking audiences first received a feature-film industry built around their own language and cultural world.',
      'Its title invokes Mother Ganga through a devotional vow while the story confronts dowry, forced marriage and widow remarriage. That combination supports a rooted Social Dharma reading in which reform occurs inside a sacred and local moral vocabulary rather than through contempt for inherited civilization.',
    ],
    integrityFlags: [
      {
        type: 'release-year',
        status: 'disputed',
        summary: 'Published records disagree between a 1962 Benares release and a 22 February 1963 Patna release. This v2 record deliberately retains 1963 because that is the currently resolved legacy key and multiple established Indian retrospectives use 1963.',
        fact: 'Indian Express and multiple Times of India retrospectives date the first Bhojpuri release to 1963, while another Times of India retrospective and newer reference compilations use 1962.',
        interpretation: 'The metadata conflict affects release chronology, not the film’s status as the foundational Bhojpuri feature or the cultural and social themes used for certification.',
        intent: 'No deception is inferred from inconsistent retrospective release metadata; the discrepancy is recorded rather than silently normalized.',
      },
      {
        type: 'source-lineage',
        status: 'unverified',
        summary: 'Later reference material links the film to Acharya Shivpujan Sahay’s short story Kahani Ka Plot while screen/reference credits also identify Nazir Hussain as story and screenplay writer; the exact adaptation chain is not treated as settled here.',
      },
    ],
    evidence: [
      {
        kind: 'review',
        source: 'Indian Express — regional-cinema retrospective',
        claim: 'Identifies the 1963 Kundan Kumar film as the first Bhojpuri feature, says it was encouraged by President Rajendra Prasad, and describes widow remarriage as its central social issue within culturally driven Bhojpuri cinema.',
        url: indianExpressRegional,
      },
      {
        kind: 'review',
        source: 'Times of India — Rajendra Prasad and Bhojpuri cinema',
        claim: 'Records Rajendra Prasad’s encouragement of a Bhojpuri-language film, identifies Ganga Maiyya Tohe Piyari Chadhaibo as the first Bhojpuri feature in 1963, and translates the title as a vow to Mother Ganges to offer a yellow sari.',
        url: toiRajendraPrasad,
      },
      {
        kind: 'review',
        source: 'Times of India — first-film anniversary retrospective',
        claim: 'Records the film as the first Bhojpuri feature, released on 22 February 1963, directed by Kundan Kumar and produced by Bishwanath Prasad Shahabadi.',
        url: toiFirstFilm,
      },
      {
        kind: 'review',
        source: 'Times of India — Kum Kum retrospective',
        claim: 'Independently identifies Ganga Maiyya as the first Bhojpuri film and a major cultural phenomenon in Bihar and eastern Uttar Pradesh, but dates it to 1962, preserving the strongest release-year counter-evidence.',
        url: toiKumKum,
      },
      {
        kind: 'review',
        source: 'Reference record — Ganga Maiyya Tohe Piyari Chadhaibo',
        claim: 'Provides the detailed widow-remarriage/dowry plot and records a later source-lineage claim connecting the film to Acharya Shivpujan Sahay’s Kahani Ka Plot, while also listing Nazir Hussain in story/screenplay credits.',
        url: sourceLineage,
      },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'mixed-unknown',
      filmUnderstanding: 'A foundational Bhojpuri social drama about Shyam and Sumitri in which dowry prevents their marriage, Sumitri is forced into marriage with an older man, becomes a widow and faces social degradation before the story resolves through remarriage; the title frames the world through a devotional promise to Mother Ganga.',
      discoveryQueries: [
        'Ganga Maiyya Tohe Piyari Chadhaibo source adaptation true story Kahani Ka Plot Nazir Hussain Shivpujan Sahay',
        'Ganga Maiyya Tohe Piyari Chadhaibo religion caste community identity widow remarriage dowry Ganga',
        'Ganga Maiyya Tohe Piyari Chadhaibo community contempt ridicule stereotype sacred Mother Ganga Bhojpuri',
        'Ganga Maiyya Tohe Piyari Chadhaibo controversy accuracy 1962 1963 release factual dispute',
        'Ganga Maiyya Tohe Piyari Chadhaibo Rajendra Prasad first Bhojpuri film cultural history',
      ],
      probeOverrides: {
        'source-adaptation': {
          status: 'ambiguous',
          materiality: 'medium',
          summary: 'Later reference material connects the story to Acharya Shivpujan Sahay’s Kahani Ka Plot while also crediting Nazir Hussain for story and screenplay; the exact adaptation lineage remains insufficiently primary-sourced for a definitive claim.',
          evidenceUrls: [sourceLineage],
        },
        'historical-claims': {
          status: 'finding',
          materiality: 'high',
          summary: 'Release chronology is inconsistent across retrospective sources: established Indian reporting commonly uses 1963, while another Times of India retrospective and newer reference records use 1962.',
          evidenceUrls: [indianExpressRegional, toiFirstFilm, toiKumKum],
        },
        'community-contempt': {
          status: 'clear',
          materiality: 'high',
          summary: 'The title-specific evidence supports criticism of dowry, coerced marriage and widow mistreatment rather than generalized contempt for Bhojpuri, Hindu or caste communities as inherently inferior.',
          evidenceUrls: [indianExpressRegional, sourceLineage],
        },
        'sacred-religious-valence': {
          status: 'clear',
          materiality: 'high',
          summary: 'Mother Ganga is invoked through the film’s devotional title and vow while social reform unfolds within that sacred vocabulary; the reviewed evidence does not show Ganga devotion being used as an object of ridicule.',
          evidenceUrls: [toiRajendraPrasad, indianExpressRegional],
        },
        'regional-context': {
          status: 'clear',
          materiality: 'high',
          summary: 'The film’s foundational role in Bhojpuri-language cinema and its address to Bhojpuri-speaking audiences are central to its cultural meaning rather than incidental regional branding.',
          evidenceUrls: [indianExpressRegional, toiRajendraPrasad, toiFirstFilm],
        },
      },
      strongestCounterEvidence: [
        {
          kind: 'review',
          source: 'Times of India — Kum Kum retrospective',
          claim: 'Dates the first Bhojpuri film to 1962 rather than the 1963 date retained by the live resolver record, creating a genuine chronology caveat.',
          url: toiKumKum,
        },
        {
          kind: 'review',
          source: 'Reference record — Ganga Maiyya Tohe Piyari Chadhaibo',
          claim: 'The later adaptation attribution to Acharya Shivpujan Sahay sits alongside Nazir Hussain story/screenplay credits and is not independently primary-verified in this audit.',
          url: sourceLineage,
        },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'The film could be over-certified simply because it is historically important to Bhojpuri cinema, while the release chronology and source lineage are disputed and social reform around widow remarriage could be misread as rejection of inherited Hindu society.',
        outcome: 'qualified',
        evidenceUrls: [indianExpressRegional, toiRajendraPrasad, toiFirstFilm, toiKumKum, sourceLineage],
        verdictImpact: 'The chronology and source-lineage disputes remain explicit Narrative Integrity caveats. They do not overturn the directional verdict because multiple established sources independently support the film’s foundational Bhojpuri role, widow-remarriage reform theme and Mother-Ganga devotional vocabulary; criticism targets harmful practices rather than Hindu civilization or Bhojpuri community identity.',
      },
      factInterpretationIntent: {
        fact: 'The currently resolved legacy key is the 1963 Bhojpuri record; established retrospectives identify the film as the first Bhojpuri feature and connect its plot to widow remarriage, while published release-year and literary-source details remain inconsistent.',
        interpretation: 'Foundational Bhojpuri language continuity, sacred Ganga vocabulary and reform against dowry/widow mistreatment jointly support certification even though the metadata and adaptation chain are not clean enough for high confidence.',
        intent: 'No anti-Hindu or anti-Bhojpuri intent is inferred from the reform narrative, and no deceptive intent is inferred from later disagreements over release chronology or source attribution.',
      },
    }),
  }),
];
