import type {
  CertificationStatus,
  EvidenceItem,
  ResearchSourceBasis,
  SanghiDimensions,
  SanghiProfile,
} from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

type ProfileInput = {
  title: string;
  year: number;
  language: string;
  status: CertificationStatus;
  confidence?: SanghiProfile['confidence'];
  sourceBasis: ResearchSourceBasis;
  dimensions: SanghiDimensions;
  tags: string[];
  reasons: string[];
  evidence: EvidenceItem[];
  filmUnderstanding: string;
  focus: string;
  challenge: string;
  fact: string;
  interpretation: string;
  intent: string;
  probes?: Parameters<typeof buildDossier>[0]['probeOverrides'];
  counterIndexes?: number[];
  redOutcome?: 'cleared' | 'qualified' | 'unresolved';
  redEvidenceIndexes?: number[];
  redImpact?: string;
  integrityFlags?: SanghiProfile['integrityFlags'];
};

function queries(title: string, focus: string): string[] {
  return [
    `${title} ${focus} source adaptation true story historical accuracy`,
    `${title} religion caste community identity change representation`,
    `${title} community contempt ridicule stereotype sacred religious portrayal`,
    `${title} controversy criticism accuracy factual dispute counter reading`,
    `${title} director writer interview ${focus}`,
  ];
}

function make(input: ProfileInput): SanghiProfile {
  const counterEvidence = (input.counterIndexes ?? [])
    .map((index) => input.evidence[index])
    .filter(Boolean) as EvidenceItem[];
  const redEvidenceUrls = (input.redEvidenceIndexes ?? []).flatMap((index) => {
    const url = input.evidence[index]?.url;
    return url ? [url] : [];
  });

  return hardenedProfile({
    title: input.title,
    year: input.year,
    language: input.language,
    status: input.status,
    confidence: input.confidence ?? 'high',
    dimensions: input.dimensions,
    tags: input.tags,
    reasons: input.reasons,
    integrityFlags: input.integrityFlags ?? [],
    evidence: input.evidence,
    researchDossier: buildDossier({
      sourceBasis: input.sourceBasis,
      filmUnderstanding: input.filmUnderstanding,
      discoveryQueries: queries(input.title, input.focus),
      probeOverrides: input.probes,
      strongestCounterEvidence: counterEvidence,
      redTeam: {
        completed: true,
        strongestChallenge: input.challenge,
        outcome: input.redOutcome ?? 'cleared',
        evidenceUrls: redEvidenceUrls,
        verdictImpact:
          input.redImpact ??
          'The strongest counter-reading was checked against title-specific evidence and does not materially change the proposed Culture Check verdict.',
      },
      factInterpretationIntent: {
        fact: input.fact,
        interpretation: input.interpretation,
        intent: input.intent,
      },
    }),
  });
}

export const fullRecertificationV2Worker4Batch01: SanghiProfile[] = [
  make({
    title: 'Aattam',
    year: 2024,
    language: 'Malayalam',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Malayalam roots', 'Theatre', 'Gender accountability', 'Reviewed neutral'],
    reasons: [
      'The film is a searching Social Dharma critique of male hypocrisy, group self-interest and the erosion of solidarity after a woman reports sexual assault inside a theatre troupe.',
      'That moral seriousness and Kerala theatre texture are real, but the film does not make a sufficiently strong sacred, national or civilizational claim to justify a directional certification.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Aattam review', claim: 'Describes the allegation inside a theatre group and the film’s sustained exposure of male hypocrisy, opportunism and sexism without trivialising the reported assault.', url: 'https://indianexpress.com/article/entertainment/movie-review/aattam-movie-review-a-magnificent-film-that-brilliantly-explores-male-hypocrisy-9062388/' },
      { kind: 'interview', source: 'Indian Express — making of Aattam', claim: 'Profiles the Kerala theatre actors behind the project and the troupe-based origins of the screenplay.', url: 'https://indianexpress.com/article/entertainment/malayalam/painters-and-masons-by-day-how-a-bunch-of-theatre-actors-came-up-a-national-award-winner-9518414/lite/' },
    ],
    filmUnderstanding: 'A Malayalam chamber drama in which a theatre troupe debates how to respond after its only woman member reports that a male colleague sexually assaulted her, exposing shifting loyalties and self-interest.',
    focus: 'Kerala theatre sexual assault group accountability male hypocrisy',
    challenge: 'A severe portrait of male hypocrisy could be over-read as a generalized indictment of Kerala social life rather than a tightly bounded institutional and gender critique.',
    fact: 'The story is original fiction developed around a Malayalam theatre ensemble rather than a documented case or adaptation.',
    interpretation: 'Its justice and accountability concerns carry strong Social Dharma weight while remaining low-signal on specifically civilizational, sacred or national dimensions.',
    intent: 'No collective contempt toward Malayalis, Hindus or men as a community is inferred from criticism of the fictional troupe’s conduct.',
    probes: {
      'community-contempt': { status: 'clear', materiality: 'medium', summary: 'The criticism is directed at specific men and group dynamics around an assault allegation, not at an identifiable religious, caste or regional community as inherently contemptible.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/aattam-movie-review-a-magnificent-film-that-brilliantly-explores-male-hypocrisy-9062388/'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The project emerged from a Kerala theatre ensemble and is evaluated as locally grounded social drama rather than generic festival-facing critique.', evidenceUrls: ['https://indianexpress.com/article/entertainment/malayalam/painters-and-masons-by-day-how-a-bunch-of-theatre-actors-came-up-a-national-award-winner-9518414/lite/'] },
    },
  }),

  make({
    title: 'Aadujeevitham / The Goat Life',
    year: 2024,
    language: 'Malayalam',
    status: 'neutral',
    sourceBasis: 'true-story',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 1, itihasa: 2, parampara: 2, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Malayali migrant', 'Survival', 'Labour exploitation', 'True-story adaptation'],
    reasons: [
      'The film gives moral weight to the suffering, endurance and dignity of a Malayali migrant worker trapped in abusive labour conditions abroad, creating strong Dharma and Social Dharma signals.',
      'Those signals remain primarily human and migrant-specific rather than a sustained sacred, national or civilizational thesis, so Reviewed · Neutral is more disciplined than certifying hardship and resilience by themselves.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Aadujeevitham adaptation analysis', claim: 'Explains Benyamin’s novel, its grounding in the real experience of Najeeb Muhammad, and the adaptation’s handling of Saudi desert captivity and religious/community context.', url: 'https://indianexpress.com/article/entertainment/malayalam/aadujeevitham-timeless-major-challenges-blessy-prithviraj-faced-in-adaptation-9212953/' },
      { kind: 'review', source: 'Indian Express — Aadujeevitham review', claim: 'Reviews the film as a selective screen adaptation of the novel and a survival drama centred on Najeeb’s enslavement-like ordeal.', url: 'https://indianexpress.com/article/entertainment/movie-review/aadujeevitham-movie-review-blessy-and-prithviraj-craft-a-stunning-survival-drama-9237302/' },
    ],
    filmUnderstanding: 'A Malayalam survival drama adapted from Benyamin’s novel, itself rooted in Najeeb Muhammad’s migrant-worker experience, following a Kerala man trapped in brutal desert labour conditions in Saudi Arabia.',
    focus: 'Najeeb Muhammad Benyamin novel Saudi migrant worker adaptation Islam community portrayal',
    challenge: 'An abuse narrative involving Arab Muslim captors could be read as broad anti-Muslim or anti-Arab coding, while dramatic compression may blur the boundary between Najeeb’s life and the novel’s inventions.',
    fact: 'Najeeb Muhammad’s migrant ordeal is real, but the film adapts Benyamin’s literary reconstruction and omits or reshapes material from the novel.',
    interpretation: 'The film condemns coercive labour abuse and preserves a Malayali migrant perspective without turning the perpetrators into evidence of collective Muslim or Arab inferiority.',
    intent: 'No anti-Islam intent is inferred; the title-specific adaptation discussion notes that victim and perpetrator identities do not amount to a generalized religious accusation.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The feature adapts a novel based on a real migrant’s ordeal and necessarily selects, omits and reshapes episodes, so it should not be treated as a scene-by-scene documentary biography.', evidenceUrls: ['https://indianexpress.com/article/entertainment/malayalam/aadujeevitham-timeless-major-challenges-blessy-prithviraj-faced-in-adaptation-9212953/', 'https://indianexpress.com/article/entertainment/movie-review/aadujeevitham-movie-review-blessy-and-prithviraj-craft-a-stunning-survival-drama-9237302/'] },
      'community-contempt': { status: 'clear', materiality: 'high', summary: 'The evidence supports a story about particular abusive captors and migrant exploitation rather than a narrative generalization against Muslims or Arabs as communities.', evidenceUrls: ['https://indianexpress.com/article/entertainment/malayalam/aadujeevitham-timeless-major-challenges-blessy-prithviraj-faced-in-adaptation-9212953/'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Najeeb’s Kerala migrant identity and Gulf migration context are central to understanding the story rather than incidental scenery.', evidenceUrls: ['https://indianexpress.com/article/entertainment/malayalam/aadujeevitham-timeless-major-challenges-blessy-prithviraj-faced-in-adaptation-9212953/'] },
    },
    counterIndexes: [0],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 1],
    redImpact: 'The adaptation and community-framing risks remain explicit, but the evidence supports a bounded migrant-abuse narrative rather than collective religious contempt; they do not create a directional Bharatiya verdict.',
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'A real migrant experience reaches the screen through Benyamin’s literary adaptation and a selective feature-film reconstruction.' }],
  }),

  make({
    title: 'Premalu',
    year: 2024,
    language: 'Malayalam',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Malayalam youth', 'Hyderabad', 'Romance', 'Reviewed neutral'],
    reasons: [
      'The film is recognisably rooted in contemporary Malayali youth speech, class aspiration, migration to Hyderabad and friendship, giving it meaningful local-cultural texture.',
      'Its central concerns are romance, insecurity and early-adult life rather than sacred tradition, civilizational continuity or national duty; popularity and regional familiarity are therefore not enough for certification.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Premalu review', claim: 'Reviews the film as a charming contemporary love story built around young Malayalis, Hyderabad, friendship and awkward early-adult aspiration.', url: 'https://indianexpress.com/article/entertainment/movie-review/premalu-movie-review-rating-naslen-mamitha-baiju-charming-love-story-full-of-delightful-moments-9153471/lite/' },
      { kind: 'review', source: 'Cinema Express — Premalu review', claim: 'Highlights the Hyderabad setting, youthful Malayalam humour, friendship and romantic dynamics that drive the film.', url: 'https://www.cinemaexpress.com/amp/story/malayalam/review/2024/Feb/09/premalu-movie-review-this-adorable-rom-com-hits-the-right-spots-51914.html' },
    ],
    filmUnderstanding: 'A contemporary Malayalam romantic comedy about a young graduate who moves to Hyderabad, falls for a working professional and navigates friendship, insecurity and career uncertainty.',
    focus: 'Malayali youth Hyderabad migration romance friendship contemporary culture',
    challenge: 'Strong regional popularity and slang could tempt the classifier to equate recognisable Malayali texture with substantive civilizational alignment.',
    fact: 'Premalu is original contemporary romantic fiction rather than history, biography or sacred adaptation.',
    interpretation: 'Its local and linguistic texture is genuine but the narrative remains low-signal on the declared civilizational certification dimensions.',
    intent: 'No larger ideological claim about Kerala, Bharat, religion or family structure is inferred from a youth romance.',
  }),

  make({
    title: 'Manjummel Boys',
    year: 2024,
    language: 'Malayalam',
    status: 'certified',
    sourceBasis: 'true-story',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 1, itihasa: 3, parampara: 2, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Raksha', 'Friendship', 'Kerala roots', 'True story'],
    reasons: [
      'The rescue is not generic friendship warmth: a real group refuses to abandon a trapped friend when official responders have effectively given up, making self-risking protection and duty the decisive moral action.',
      'The film preserves the Manjummel group’s Kerala identity and the real Guna Caves ordeal while dramatizing it for cinema, supporting a positive Raksha/Dharma verdict with a separate adaptation caveat.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Manjummel Boys review', claim: 'Identifies the film as based on the 2006 Guna Caves incident and centres the friends’ determination to save Subash.', url: 'https://indianexpress.com/article/entertainment/movie-review/manjummel-boys-movie-review-soubin-shahir-sreenath-bhasis-chilling-survival-thriller-9174439/' },
      { kind: 'official', source: 'PIB / IFFI — Chidambaram on Manjummel Boys', claim: 'Records the director’s account of the real eleven-member Manjummel group, Siju David descending after responders gave up, and the recreated cave set.', url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2076902&lang=2&reg=48' },
      { kind: 'primary', source: 'New Indian Express — original Manjummel Boys', claim: 'Interviews members of the original group, who describe the rescue and say the screen version was overwhelmingly faithful to the incident.', url: 'https://www.newindianexpress.com/cities/kochi/2024/Mar/19/a-day-out-with-original-manjummel-boys' },
    ],
    filmUnderstanding: 'A Malayalam survival-rescue drama based on the 2006 incident in which friends from Manjummel near Kochi fought to save one of their group after he fell into a deep cavity in the Guna Caves in Tamil Nadu.',
    focus: '2006 Guna Caves Siju David Subash real rescue Manjummel factual accuracy',
    challenge: 'Popular retelling may exaggerate official indifference or individual heroism and turn a complex rescue into a cleaner friendship legend.',
    fact: 'The fall and extraordinary friend-led rescue are documented real events, while staging, dialogue and chronology are necessarily reconstructed for a feature film.',
    interpretation: 'The documented willingness to risk oneself to save a friend supplies unusually strong Raksha and Dharma weight independent of cinematic embellishment.',
    intent: 'No claim is made that every responder, line of dialogue or rescue beat is reproduced with documentary precision.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The film reconstructs a real rescue through actors, sets, compressed chronology and dramatized dialogue even though core participants describe the account as substantially faithful.', evidenceUrls: ['https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2076902&lang=2&reg=48', 'https://www.newindianexpress.com/cities/kochi/2024/Mar/19/a-day-out-with-original-manjummel-boys'] },
      'real-person-attribution': { status: 'clear', materiality: 'high', summary: 'The core rescuer role attributed to Siju David is supported by official festival material and interviews with the original group.', evidenceUrls: ['https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2076902&lang=2&reg=48', 'https://www.newindianexpress.com/cities/kochi/2024/Mar/19/a-day-out-with-original-manjummel-boys'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The Manjummel group’s Kerala identity and cross-state trip to the Guna Caves are integral to the documented incident rather than invented regional colouring.', evidenceUrls: ['https://www.newindianexpress.com/cities/kochi/2024/Mar/19/a-day-out-with-original-manjummel-boys'] },
    },
    counterIndexes: [2],
    redOutcome: 'qualified',
    redEvidenceIndexes: [1, 2],
    redImpact: 'Feature-film reconstruction remains a Narrative Integrity caveat, but participant and official evidence supports the central rescue, self-risk and refusal-to-abandon facts that drive the positive verdict.',
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'A documented 2006 rescue is reconstructed with cinematic staging and dialogue while retaining the core participant actions.' }],
  }),

  make({
    title: 'Kaathal – The Core',
    year: 2023,
    language: 'Malayalam',
    status: 'mixed',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Kerala Christian setting', 'Marriage', 'Social Dharma', 'Mixed'],
    reasons: [
      'The film’s demand for truth, dignity and compassion inside a long marriage gives it substantial Social Dharma weight, and its Syrian-Christian Kerala setting is treated as lived community rather than interchangeable décor.',
      'Its critique also intersects materially with church and religious expectations around homosexuality; because that institutional-religious tension is real but does not cross the evidence threshold for generalized Christian contempt, the civilizational signal remains Mixed / Contested.',
    ],
    evidence: [
      { kind: 'review', source: 'Onmanorama — Kaathal: The Core review', claim: 'Reviews the film as a family and relationship drama about homosexuality, marriage, truth and acceptance inside a Kerala social world.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2023/11/23/kaathal-the-core-movie-review-mammootty-jyothika-jeo-baby.html' },
      { kind: 'primary', source: 'Onmanorama — KCBC response to Kaathal', claim: 'Records a Kerala Catholic Bishops Council commission’s objection that the film’s treatment could be read as propagating against Christian faith and community.', url: 'https://www.onmanorama.com/entertainment/entertainment-news/2023/12/02/kaathal-the-core-kerala-catholic-bishops-conference-homosexuality-stand.amp.html' },
      { kind: 'primary', source: 'Humanities and Social Sciences Communications — Kaathal analysis', claim: 'Provides an academic counter-reading of sexuality, class and Syrian-Christian representation, including the film’s differentiated rather than uniformly hostile treatment of parish and community figures.', url: 'https://www.nature.com/articles/s41599-025-06304-7' },
    ],
    filmUnderstanding: 'A Malayalam family drama about a married Syrian-Christian man whose wife seeks divorce after years of concealed homosexuality, forcing the couple and their community to confront truth, dignity and social-religious expectation.',
    focus: 'Kerala Syrian Christian homosexuality church marriage community portrayal internal reform',
    challenge: 'The strongest counter-reading is that the story makes Christian marriage and church-linked social pressure the moral obstacle and therefore turns a specific reform critique into hostility toward Christian faith or community.',
    fact: 'The central family is fictional; the film uses a recognisable Kerala Christian setting and drew documented objection from a Catholic body over its religious and sexual-ethics framing.',
    interpretation: 'The film materially challenges institutional and social expectations while still individualising Christian characters and preserving family affection, so criticism does not meet the narrow generalized-contempt threshold.',
    intent: 'No anti-Christian intent is inferred from institutional criticism or the sexual-minority subject; the mixed verdict records representational tension without alleging community hatred.',
    probes: {
      'community-contempt': { status: 'ambiguous', materiality: 'medium', summary: 'A Catholic body publicly objected to the portrayal, but film and academic evidence show differentiated Christian characters rather than repeated generalization that Christians as a community are inferior or contemptible.', evidenceUrls: ['https://www.onmanorama.com/entertainment/entertainment-news/2023/12/02/kaathal-the-core-kerala-catholic-bishops-conference-homosexuality-stand.amp.html', 'https://www.nature.com/articles/s41599-025-06304-7'] },
      'sacred-religious-valence': { status: 'ambiguous', materiality: 'medium', summary: 'Christian belief and church-linked norms are part of the film’s social conflict, but religious life is not reduced to a single ridicule target and the evidence supports an internal social-reform reading.', evidenceUrls: ['https://www.onmanorama.com/entertainment/entertainment-news/2023/12/02/kaathal-the-core-kerala-catholic-bishops-conference-homosexuality-stand.amp.html', 'https://www.nature.com/articles/s41599-025-06304-7'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The Kerala Syrian-Christian family and parish context are structurally important to the story and are retained in the assessment rather than flattened into a generic sexuality drama.', evidenceUrls: ['https://www.nature.com/articles/s41599-025-06304-7'] },
    },
    counterIndexes: [1, 2],
    redOutcome: 'qualified',
    redEvidenceIndexes: [1, 2],
    redImpact: 'The church criticism is retained as a serious adversarial reading, but the title-specific evidence does not establish generalized Christian contempt; the resulting tension supports Mixed rather than a negative community-contempt verdict.',
  }),

  make({
    title: 'Neru',
    year: 2023,
    language: 'Malayalam',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 1, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Justice', 'Courtroom', 'Consent', 'Reviewed neutral'],
    reasons: [
      'The film takes sexual violence, evidentiary fairness and a survivor’s dignity seriously, giving it a substantial Social Dharma and justice signal.',
      'Those concerns operate through a contemporary courtroom thriller rather than a sustained civilizational, sacred or national argument, so Reviewed · Neutral avoids treating generic justice themes as sufficient certification.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Neru review', claim: 'Reviews the film as a courtroom drama centred on a blind survivor of sexual assault, evidentiary conflict and a lawyer’s return to advocacy.', url: 'https://indianexpress.com/article/entertainment/movie-review/neru-movie-review-mohanlal-has-started-his-journey-back-9077471/' },
      { kind: 'review', source: 'Onmanorama — Neru review', claim: 'Describes the survivor, legal contest and courtroom focus that drive the Malayalam drama.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2023/12/21/neru-malayalam-movie-review-mohanlal-jeethu-joseph.html' },
    ],
    filmUnderstanding: 'A Malayalam courtroom thriller about a blind young woman seeking justice after sexual assault and the advocate who returns to practice to prosecute the case against a powerful defence.',
    focus: 'sexual assault survivor justice courtroom evidence Kerala legal drama',
    challenge: 'A strong justice narrative could be mistaken for distinctly Bharatiya Social Dharma even though the values involved are universal and the film has little civilizational content.',
    fact: 'Neru is original courtroom fiction and does not present the central assault case as a documented historical prosecution.',
    interpretation: 'The film earns Social Dharma credit for survivor dignity and accountability but remains low-signal on sacred, civilizational and national dimensions.',
    intent: 'No broader ideological claim about Indian courts, men, caste or religion is inferred from the fictional prosecution.',
  }),

  make({
    title: 'Aavesham',
    year: 2024,
    language: 'Malayalam',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Malayali students', 'Bengaluru', 'Gangster comedy', 'Reviewed neutral'],
    reasons: [
      'Malayali students, Bengaluru migration and Malayalam comic rhythms give the film a real local-regional identity rather than a culturally blank action setting.',
      'Its engine is revenge comedy, gangster charisma and the consequences of seeking violent protection; that does not amount to a sustained civilizational, sacred or national thesis.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Aavesham review', claim: 'Reviews the story of Malayali students in Bengaluru who seek a gangster’s help after ragging and become trapped inside his violent world.', url: 'https://indianexpress.com/article/entertainment/movie-review/aavesham-movie-review-fahadh-faasil-delivers-verithanam-performance-9262849/' },
      { kind: 'review', source: 'Cinema Express — Aavesham review', claim: 'Describes the laugh-riot gangster setup, students, violence and Ranga’s outsized persona.', url: 'https://www.cinemaexpress.com/malayalam/review/2024/Apr/11/aavesham-movie-review-fahadh-faasil-and-sajin-gopu-scream-through-this-laugh-riot' },
    ],
    filmUnderstanding: 'A Malayalam action-comedy about three Kerala students studying in Bengaluru who recruit a charismatic local gangster for revenge after a campus conflict and then discover the costs of his protection.',
    focus: 'Malayali students Bengaluru gangster violence revenge local youth culture',
    challenge: 'The protective-gangster relationship could be over-read as Raksha or loyalty even though coercion and violence are central to the comic tragedy.',
    fact: 'Aavesham is fictional gangster comedy and is not a true-story or historical claim.',
    interpretation: 'Regional texture is genuine, but the film is morally and civilizationally low-signal and should not be upgraded because audiences identify with its local humour.',
    intent: 'No endorsement of criminal violence or broader judgement of Bengaluru or Malayali youth is inferred from the genre construction.',
  }),

  make({
    title: 'Kannur Squad',
    year: 2023,
    language: 'Malayalam',
    status: 'certified',
    sourceBasis: 'true-story',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 4, itihasa: 3, parampara: 2, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kerala Police', 'Raksha', 'Duty', 'True-story inspiration'],
    reasons: [
      'The film places patient police work, interstate pursuit, institutional duty and protection of citizens above flamboyant vigilantism, producing substantial Raksha, Rashtra and Social Dharma weight.',
      'Its four-person screen unit condenses a larger real Kannur police squad and composite case experience, so the positive duty verdict carries an explicit attribution and adaptation caveat.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Kannur Squad review', claim: 'Describes the film as inspired by a real police squad and cases, while reviewing its procedural pursuit across states.', url: 'https://indianexpress.com/article/entertainment/movie-review/kannur-squad-movie-review-rating-roby-varghese-raj-mammootty-police-procedural-solid-yet-lacks-freshness-8959935/' },
      { kind: 'review', source: 'Onmanorama — Kannur Squad review', claim: 'Highlights the task-force inspiration, integrity, resilience and travel across India to bring suspects to justice.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2023/09/28/mammootty-film-kannur-squad-movie-review-performances-roby-varghese.html' },
      { kind: 'primary', source: 'OTTplay — S Sreejith on the real Kannur Squad', claim: 'Records the former squad leader’s view that the film is realistic but takes artistic liberties and condenses a larger unit into four screen officers.', url: 'https://www.ottplay.com/news/real-squad-leader-s-sreejith-on-kannur-squad-the-film-is-a-tribute-to-kerala-police/491a11bf3b866' },
    ],
    filmUnderstanding: 'A Malayalam police procedural inspired by the Kannur Squad, following a small investigative team across India as it tracks violent suspects through patient fieldwork rather than superhero policing.',
    focus: 'real Kannur police squad S Sreejith cases composite officers factual accuracy',
    challenge: 'Police tribute cinema can sanitize coercive institutions, concentrate credit in a few heroic officers and turn complex cases into a cleaner state-capacity narrative.',
    fact: 'A real Kannur police squad existed and inspired the film, but the screen team and cases are condensed and dramatized rather than a literal roster or chronology.',
    interpretation: 'The documented institutional inspiration and emphasis on duty, restraint and investigation support Raksha and Social Dharma while attribution caveats remain separate.',
    intent: 'No claim is made that every fictional officer or investigation beat corresponds one-to-one with a real officer or case.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The film derives from a real police unit but compresses a larger squad and case history into a four-person dramatic team and selected incidents.', evidenceUrls: ['https://www.ottplay.com/news/real-squad-leader-s-sreejith-on-kannur-squad-the-film-is-a-tribute-to-kerala-police/491a11bf3b866', 'https://indianexpress.com/article/entertainment/movie-review/kannur-squad-movie-review-rating-roby-varghese-raj-mammootty-police-procedural-solid-yet-lacks-freshness-8959935/'] },
      'real-person-attribution': { status: 'finding', materiality: 'medium', summary: 'The real unit had more personnel than the principal screen squad, so individual credit should not be mapped literally from the film.', evidenceUrls: ['https://www.ottplay.com/news/real-squad-leader-s-sreejith-on-kannur-squad-the-film-is-a-tribute-to-kerala-police/491a11bf3b866'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Kerala Police institutional context and the squad’s interstate investigative role are central to both the real inspiration and the film.', evidenceUrls: ['https://www.onmanorama.com/entertainment/movie-reviews/2023/09/28/mammootty-film-kannur-squad-movie-review-performances-roby-varghese.html'] },
    },
    counterIndexes: [2],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 2],
    redImpact: 'Credit compression and dramatization remain material Narrative Integrity caveats, but they do not reverse the film’s sustained duty, investigation and citizen-protection orientation.',
    integrityFlags: [{ type: 'biographical-credit', status: 'supported', summary: 'A larger real police squad and case history are condensed into a smaller dramatic team.' }],
  }),

  make({
    title: 'Guruvayoor Ambalanadayil',
    year: 2024,
    language: 'Malayalam',
    status: 'certified',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 1, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Guruvayur', 'Hindu wedding', 'Kerala custom', 'Parampara'],
    reasons: [
      'Guruvayur and the wedding-at-the-temple tradition are not incidental scenery: the marriage, family obligations and escalating comedy are structurally organised around reaching and completing that sacred social rite.',
      'The film jokes about flawed people and family chaos without making Guruvayur, temple worship or the Hindu wedding itself an object of derision, supporting Parampara, Local Roots and Sacred Regard.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Guruvayoor Ambalanadayil review', claim: 'Describes the wedding, family conflict and repeated movement toward the Guruvayur temple entrance as the organising structure of the comedy.', url: 'https://indianexpress.com/article/entertainment/movie-review/guruvayoorambala-nadayil-movie-review-rating-robust-entertainer-9330542/' },
      { kind: 'review', source: 'Onmanorama — Guruvayoor Ambalanadayil review', claim: 'Reviews the family comedy around a marriage planned at Guruvayur and the relationships that threaten or enable the ceremony.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2024/05/16/guruvayoor-ambalanadayil-movie-review-prithviraj-basil-joseph-vipin-das.html' },
    ],
    filmUnderstanding: 'A Malayalam family comedy in which a wedding planned at Guruvayur becomes the focal point for tangled relationships, old resentments and eventual family reconciliation.',
    focus: 'Guruvayur temple Hindu wedding Kerala custom ritual representation comedy',
    challenge: 'A temple-centred commercial comedy could use a living sacred site merely as a crowd-pleasing backdrop and mistake ordinary family warmth for civilizational affirmation.',
    fact: 'The plot is fictional, but the Guruvayur wedding setting and temple-linked customs are explicit and structurally central to the narrative.',
    interpretation: 'The comedy targets human confusion rather than the deity, temple or rite, and the wedding tradition retains dignity and social meaning throughout.',
    intent: 'No claim is made that the film is a theological work; certification rests on respectful living-tradition representation rather than generic family sentiment.',
    probes: {
      'sacred-religious-valence': { status: 'clear', materiality: 'high', summary: 'Guruvayur and the Hindu wedding rite remain meaningful and desired within the story while comic ridicule is directed at characters and family complications.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/guruvayoorambala-nadayil-movie-review-rating-robust-entertainer-9330542/', 'https://www.onmanorama.com/entertainment/movie-reviews/2024/05/16/guruvayoor-ambalanadayil-movie-review-prithviraj-basil-joseph-vipin-das.html'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The Guruvayur setting is evaluated as a living Kerala devotional and marriage tradition, not as generic temple imagery.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/guruvayoorambala-nadayil-movie-review-rating-robust-entertainer-9330542/'] },
    },
  }),

  make({
    title: 'Marakkar: Arabikadalinte Simham',
    year: 2021,
    language: 'Malayalam',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Kunjali Marakkar', 'Kerala history', 'Anti-colonial', 'Raksha'],
    reasons: [
      'The film restores Kunjali Marakkar and Kerala’s maritime resistance to Portuguese coercion and monopoly to popular memory, creating strong Itihasa, Local Roots, Raksha and anti-colonial Rashtra signals.',
      'Historians contest retrospective nationalist simplifications and the film takes substantial period liberties, so its positive civilizational direction is retained with a prominent historical-fidelity warning.',
    ],
    evidence: [
      { kind: 'primary', source: 'Indian Express — Kunjali Marakkars historical explainer', claim: 'Surveys the Marakkar merchant-naval clan, their relationship with the Zamorin and resistance to Portuguese power while cautioning against simple modern-nationalist labels.', url: 'https://indianexpress.com/article/research/kunjali-marakkars-an-ambitious-merchant-clan-of-kerala-or-early-nationalists-7656957/' },
      { kind: 'review', source: 'Nowrunning — Marakkar review', claim: 'Reviews the historical epic while identifying period-authenticity and characterization problems in the cinematic reconstruction.', url: 'https://www.nowrunning.com/movie/22654/malayalam/marakkar-arabikadalinte-simham/11811/review/' },
    ],
    filmUnderstanding: 'A Malayalam historical epic dramatizing Kunjali Marakkar IV and the Malabar naval resistance associated with the Zamorin’s forces against Portuguese power on the Kerala coast.',
    focus: 'Kunjali Marakkar Zamorin Portuguese Malabar naval resistance history accuracy Mappila identity',
    challenge: 'The film may convert a complex merchant, dynastic and maritime conflict into a modern nationalist hero story and use spectacle to conceal period inaccuracies.',
    fact: 'Kunjali Marakkars and conflict with Portuguese power are historical, while motives, private scenes, chronology and a modern nationalist framing require caution.',
    interpretation: 'Historical compression does not erase the film’s clear affirmation of Kerala maritime memory and resistance to foreign coercive power.',
    intent: 'No claim is made that the feature supplies a complete or uncontested history of the Marakkars, the Zamorin or sixteenth-century Malabar.',
    probes: {
      'historical-claims': { status: 'finding', materiality: 'high', summary: 'Historical scholarship complicates the simple early-nationalist label and the feature substantially dramatizes period events and character relationships.', evidenceUrls: ['https://indianexpress.com/article/research/kunjali-marakkars-an-ambitious-merchant-clan-of-kerala-or-early-nationalists-7656957/', 'https://www.nowrunning.com/movie/22654/malayalam/marakkar-arabikadalinte-simham/11811/review/'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Malabar maritime history, Mappila identity, the Zamorin and Portuguese power are necessary regional context for adjudicating the film.', evidenceUrls: ['https://indianexpress.com/article/research/kunjali-marakkars-an-ambitious-merchant-clan-of-kerala-or-early-nationalists-7656957/'] },
      'community-contempt': { status: 'clear', materiality: 'medium', summary: 'The film’s conflict with Portuguese colonial actors is historical-political and does not establish generalized contempt toward contemporary Christians or Europeans as communities.', evidenceUrls: ['https://indianexpress.com/article/research/kunjali-marakkars-an-ambitious-merchant-clan-of-kerala-or-early-nationalists-7656957/'] },
    },
    counterIndexes: [0, 1],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 1],
    redImpact: 'The historical-fidelity debt blocks documentary treatment of the film but does not reverse its strong Kerala historical-memory and anti-colonial protection orientation.',
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The film dramatizes contested historical motives and chronology and should not be read as a complete account of the Marakkars.' }],
  }),

  make({
    title: 'Pathonpatham Noottandu',
    year: 2022,
    language: 'Malayalam',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 2, itihasa: 5, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Arattupuzha Velayudha Panicker', 'Kerala reform', 'Social Dharma', 'Shiva'],
    reasons: [
      'Arattupuzha Velayudha Panicker is remembered through resistance to caste humiliation, defence of women’s dignity and institution-building, giving the film strong Social Dharma, Dharma and Kerala Itihasa weight.',
      'Crucially, the reform is not framed as rejection of Hindu civilization: Panicker’s own Shiva-temple building and religious participation support an internal-reform reading even while the film attacks caste exclusion and abusive custom.',
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Pathonpatham Noottandu review', claim: 'Reviews the film as a nineteenth-century Kerala historical drama centred on Arattupuzha Velayudha Panicker and resistance to caste oppression.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/pathonpatham-noottandu/movie-review/94094861.cms' },
      { kind: 'primary', source: 'Indian Express — Arattupuzha Velayudha Panicker explainer', claim: 'Documents Panicker as an Ezhava social reformer who built Shiva temples and fought discriminatory restrictions and indignities in nineteenth-century Travancore.', url: 'https://indianexpress.com/article/explained/arattupuzha-velayudha-panicker-malayalam-movie-pathonpatham-noottandu-8149074/' },
      { kind: 'review', source: 'ThePrint — Pathonpatham Noottandu historical critique', claim: 'Provides an adversarial reading of the historical epic, including the limits and pitfalls of reconstructing reform history and legendary episodes.', url: 'https://theprint.in/feature/reel-take/pathonpatham-noottandu-shows-arattupuzhas-legacy-but-cant-escape-pitfalls-of-malayalam-epics/1140399/' },
    ],
    filmUnderstanding: 'A Malayalam historical epic centred on nineteenth-century Travancore reformer Arattupuzha Velayudha Panicker, combining documented anti-caste activism and temple-building with dramatized and legendary social-conflict material.',
    focus: 'Arattupuzha Velayudha Panicker Shiva temples caste reform Travancore Nangeli historical accuracy',
    challenge: 'The film could turn Hindu social hierarchy into a uniformly civilizational villain, while legendary or composite episodes may be presented with more certainty than the historical record allows.',
    fact: 'Panicker was a real reformer associated with anti-caste action and Shiva-temple building; the feature reconstructs and combines historical and legendary material around him.',
    interpretation: 'The documented religious institution-building makes the critique legible as reform from within a Kerala Hindu civilizational world rather than generalized contempt for Hindu sacred life.',
    intent: 'No anti-Hindu intent is inferred from attacking untouchability, caste humiliation or restrictions on women; historical invention is treated separately as Narrative Integrity.',
    probes: {
      'historical-claims': { status: 'finding', materiality: 'high', summary: 'The feature mixes well-documented reform history with dramatized or legendary episodes and therefore requires explicit source-fidelity caution.', evidenceUrls: ['https://indianexpress.com/article/explained/arattupuzha-velayudha-panicker-malayalam-movie-pathonpatham-noottandu-8149074/', 'https://theprint.in/feature/reel-take/pathonpatham-noottandu-shows-arattupuzhas-legacy-but-cant-escape-pitfalls-of-malayalam-epics/1140399/'] },
      'sacred-religious-valence': { status: 'clear', materiality: 'high', summary: 'Panicker’s Shiva-temple building materially complicates any claim that the film’s anti-caste critique is a rejection of Hindu sacred tradition itself.', evidenceUrls: ['https://indianexpress.com/article/explained/arattupuzha-velayudha-panicker-malayalam-movie-pathonpatham-noottandu-8149074/'] },
      'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film attacks caste oppression and abusive social hierarchy; the evidence does not establish repeated generalized contempt toward Hindus or an entire caste community as inherently subhuman.', evidenceUrls: ['https://indianexpress.com/article/explained/arattupuzha-velayudha-panicker-malayalam-movie-pathonpatham-noottandu-8149074/'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Travancore caste regulation, Kerala reform history and Panicker’s local religious institution-building are essential to interpreting the story.', evidenceUrls: ['https://indianexpress.com/article/explained/arattupuzha-velayudha-panicker-malayalam-movie-pathonpatham-noottandu-8149074/'] },
    },
    counterIndexes: [2],
    redOutcome: 'qualified',
    redEvidenceIndexes: [1, 2],
    redImpact: 'Historical reconstruction limits remain prominent, but title-specific evidence supports an internal reform tradition rather than civilizational contempt, so the positive Social Dharma and continuity signals survive.',
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'Documented reform history is combined with dramatized and legendary material in the feature-film narrative.' }],
  }),

  make({
    title: 'Kaalapani',
    year: 1996,
    language: 'Malayalam',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Freedom struggle', 'Cellular Jail', 'Anti-colonial', 'Rashtra'],
    reasons: [
      'The film places colonial imprisonment, sacrifice and resistance by Indian political prisoners at the moral centre of the Cellular Jail story, creating unmistakable Rashtra, Raksha and Itihasa signals.',
      'Its fictional protagonist, compressed prison history and debated source debts require substantial Narrative Integrity caution, but those issues are separate from the film’s clearly anti-colonial Bharatiya orientation.',
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Kaalapani review', claim: 'Reviews the film as a Cellular Jail period drama about Indian freedom fighters, colonial brutality and patriotic sacrifice.', url: 'https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19960531-film-review-kaalapaani-starring-mohanlal-prabhu-tabu-834614-1996-05-30' },
      { kind: 'review', source: 'The Federal — Kaalapani historical/source analysis', claim: 'Examines the film’s blend of real Cellular Jail history and fiction, including the director’s history-versus-fiction framing and questions around source material and Savarkar-linked prison memory.', url: 'https://thefederal.com/entertainment/mohanlals-kaalapani-1996-film-on-savarkar-in-andaman-jail-that-escaped-attention' },
    ],
    filmUnderstanding: 'A Malayalam historical prison drama set in the British Cellular Jail, using a fictional Malayali doctor alongside real freedom-struggle context to depict colonial brutality, imprisonment and resistance.',
    focus: 'Cellular Jail freedom fighters British colonial history Savarkar source adaptation factual accuracy',
    challenge: 'Patriotic prison cinema can exaggerate atrocities, collapse different prisoners and periods, or borrow historical testimony without clearly separating source from fiction.',
    fact: 'The Cellular Jail, colonial repression and Indian political prisoners are historical, while the central personal plot and many scenes are feature-film reconstruction.',
    interpretation: 'Historical and source caveats limit documentary reliability but do not reverse the direct anti-colonial and freedom-struggle orientation.',
    intent: 'No claim is made that every torture scene, prisoner interaction or attribution is independently verified merely because the film is patriotic.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'high', summary: 'Published analysis identifies a substantial blend of historical prison memory, fictional protagonist material and debated source lineage rather than a single transparent documentary source.', evidenceUrls: ['https://thefederal.com/entertainment/mohanlals-kaalapani-1996-film-on-savarkar-in-andaman-jail-that-escaped-attention'] },
      'historical-claims': { status: 'finding', materiality: 'high', summary: 'The feature compresses and dramatizes Cellular Jail history and should not be treated as a complete historical reconstruction of prisoners, chronology or abuses.', evidenceUrls: ['https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19960531-film-review-kaalapaani-starring-mohanlal-prabhu-tabu-834614-1996-05-30', 'https://thefederal.com/entertainment/mohanlals-kaalapani-1996-film-on-savarkar-in-andaman-jail-that-escaped-attention'] },
      'regional-context': { status: 'clear', materiality: 'medium', summary: 'The Malayali protagonist and Malayalam production perspective coexist with a deliberately all-India freedom-struggle prison setting.', evidenceUrls: ['https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19960531-film-review-kaalapaani-starring-mohanlal-prabhu-tabu-834614-1996-05-30'] },
    },
    counterIndexes: [1],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 1],
    redImpact: 'The source and historical-fidelity debt remains substantial and public, but it does not negate the film’s explicit remembrance of Indian anti-colonial sacrifice and resistance.',
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'Real Cellular Jail history is combined with fictional characters, compressed chronology and debated source lineage.' }],
  }),

  make({
    title: 'Kothanodi',
    year: 2015,
    language: 'Assamese',
    status: 'certified',
    sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Assamese folklore', 'Burhi Aair Sadhu', 'Parampara', 'Local roots'],
    reasons: [
      'The film directly reactivates stories from Lakshminath Bezbaroa’s Burhi Aair Sadhu, a foundational Assamese folktale collection, making language, oral memory and regional imaginative inheritance the substance of the work.',
      'Its dark adult treatment is intentionally unsettling, but indigenous folklore is not presented as backward material to escape; the filmmaker’s own account frames the project as a return to Assamese cultural identity and inherited stories.',
    ],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Bhaskar Hazarika on Kothanodi', claim: 'Discusses the Assamese filmmaker’s use of regional folktales and the place of Kothanodi in his work grounded in Assam.', url: 'https://indianexpress.com/article/entertainment/entertainment-others/bhaskar-hazarika-assamese-films-kothanodi-aamis-5695085/' },
      { kind: 'review', source: 'Indian Express — Kothanodi recommendation', claim: 'Identifies the film as an Assamese anthology adapting four stories associated with Lakshminath Bezbaroa’s Burhi Aair Sadhu and precolonial folk worlds.', url: 'https://indianexpress.com/article/entertainment/television/shweta-basu-prasad-digital-playlist-kothanodi-is-a-assamese-anthology-based-on-folklore-4834316/' },
      { kind: 'interview', source: 'Open — Bhaskar Hazarika interview', claim: 'Records the director’s description of the childhood familiarity of the source tales and how making the film deepened his engagement with Assamese identity and language.', url: 'https://openthemagazine.com/cinema/bhaskar-hazarika-the-hunger-games' },
    ],
    filmUnderstanding: 'An Assamese dark-folklore anthology adapting four stories from the cultural world of Burhi Aair Sadhu, translating familiar oral/literary tales into an adult cinematic register.',
    focus: 'Lakshminath Bezbaroa Burhi Aair Sadhu Assamese folklore adaptation identity dark retelling',
    challenge: 'Turning childhood folktales into horror and cruelty could exoticise Assamese tradition for festival audiences or make inherited culture seem intrinsically grotesque.',
    fact: 'Kothanodi openly adapts Assamese folktale material rather than claiming its supernatural events as modern history or documentary fact.',
    interpretation: 'The dark register changes tone but keeps Assamese inherited stories, language and imaginative forms alive as serious narrative material, supporting Parampara and Civilizational Continuity.',
    intent: 'Creator testimony supports cultural re-engagement rather than an intent to ridicule Assamese tradition; no empirical supernatural claim is inferred.',
    probes: {
      'source-adaptation': { status: 'clear', materiality: 'high', summary: 'The Bezbaroa/Burhi Aair Sadhu folktale source is explicit and central rather than hidden or falsely presented as original history.', evidenceUrls: ['https://indianexpress.com/article/entertainment/television/shweta-basu-prasad-digital-playlist-kothanodi-is-a-assamese-anthology-based-on-folklore-4834316/'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The source tales, Assamese language and creator’s own return to regional identity make insider cultural context essential to the film’s meaning.', evidenceUrls: ['https://openthemagazine.com/cinema/bhaskar-hazarika-the-hunger-games', 'https://indianexpress.com/article/entertainment/entertainment-others/bhaskar-hazarika-assamese-films-kothanodi-aamis-5695085/'] },
      'sacred-religious-valence': { status: 'clear', materiality: 'medium', summary: 'The supernatural and folkloric material is treated as inherited storytelling rather than a device for ridiculing a living sacred community or ritual tradition.', evidenceUrls: ['https://indianexpress.com/article/entertainment/television/shweta-basu-prasad-digital-playlist-kothanodi-is-a-assamese-anthology-based-on-folklore-4834316/'] },
    },
    counterIndexes: [1],
    redOutcome: 'qualified',
    redEvidenceIndexes: [1, 2],
    redImpact: 'The adult horror register remains a legitimate counter-reading, but source transparency and creator evidence support cultural reactivation rather than exotic contempt, so the positive Parampara verdict survives.',
  }),
];
