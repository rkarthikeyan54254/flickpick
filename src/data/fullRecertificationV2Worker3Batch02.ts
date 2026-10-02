import type {
  EvidenceItem,
  ResearchMateriality,
  ResearchProbe,
  ResearchProbeStatus,
  SanghiProfile,
} from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

type ProfileInput = Omit<Parameters<typeof hardenedProfile>[0], 'researchDossier'>;
type SourceBasis = Parameters<typeof buildDossier>[0]['sourceBasis'];

type DossierSpec = {
  sourceBasis: SourceBasis;
  filmUnderstanding: string;
  queries: string[];
  evidence: EvidenceItem[];
  sourceStatus: ResearchProbeStatus;
  sourceCheck: string;
  identityStatus: ResearchProbeStatus;
  identityCheck: string;
  communityStatus: ResearchProbeStatus;
  communityCheck: string;
  sacredStatus: ResearchProbeStatus;
  sacredCheck: string;
  regionalCheck: string;
  historicalStatus?: ResearchProbeStatus;
  historicalCheck?: string;
  realPersonStatus?: ResearchProbeStatus;
  realPersonCheck?: string;
  counterEvidence: EvidenceItem;
  redTeamChallenge: string;
  redTeamOutcome: 'cleared' | 'qualified' | 'unresolved';
  redTeamImpact: string;
  fact: string;
  interpretation: string;
  intent: string;
};

function probe(
  status: ResearchProbeStatus,
  materiality: ResearchMateriality,
  summary: string,
  evidenceUrls: string[],
): Omit<ResearchProbe, 'id'> {
  return { status, materiality, summary, evidenceUrls };
}

function dossier(spec: DossierSpec) {
  const urls = spec.evidence.flatMap((item) => item.url ? [item.url] : []);
  const counterUrls = spec.counterEvidence.url ? [spec.counterEvidence.url] : [];
  return buildDossier({
    sourceBasis: spec.sourceBasis,
    filmUnderstanding: spec.filmUnderstanding,
    discoveryQueries: spec.queries,
    probeOverrides: {
      'source-adaptation': probe(spec.sourceStatus, 'high', spec.sourceCheck, urls),
      'identity-substitution': probe(spec.identityStatus, 'high', spec.identityCheck, urls),
      'community-contempt': probe(spec.communityStatus, 'high', spec.communityCheck, urls),
      'sacred-religious-valence': probe(spec.sacredStatus, 'high', spec.sacredCheck, urls),
      'regional-context': probe('clear', 'high', spec.regionalCheck, urls),
      'social-radar': probe('clear', 'medium', 'Title-specific critical, controversy and representation coverage was searched before adjudication; no additional unresolved claim changes this verdict.', urls),
      'self-falsification': probe(spec.redTeamOutcome === 'unresolved' ? 'ambiguous' : 'finding', 'high', `Strongest counter-case: ${spec.counterEvidence.claim}`, counterUrls),
      ...(spec.historicalCheck ? {
        'historical-claims': probe(spec.historicalStatus || 'finding', 'high', spec.historicalCheck, urls),
      } : {}),
      ...(spec.realPersonCheck ? {
        'real-person-attribution': probe(spec.realPersonStatus || 'finding', 'high', spec.realPersonCheck, urls),
      } : {}),
    },
    strongestCounterEvidence: [spec.counterEvidence],
    redTeam: {
      completed: true,
      strongestChallenge: spec.redTeamChallenge,
      outcome: spec.redTeamOutcome,
      evidenceUrls: counterUrls,
      verdictImpact: spec.redTeamImpact,
    },
    factInterpretationIntent: {
      fact: spec.fact,
      interpretation: spec.interpretation,
      intent: spec.intent,
    },
  });
}

function makeProfile(profile: ProfileInput, research: DossierSpec): SanghiProfile {
  return hardenedProfile({ ...profile, researchDossier: dossier(research) });
}

const dasaraReview = 'https://www.cinemaexpress.com/telugu/review/2023/mar/30/dasara-movie-reviewa-surprising-reimagination-of-mass-cinema-41746.html';
const dasaraTeaser = 'https://indianexpress.com/article/entertainment/telugu/dasara-teaser-nani-action-drama-feels-like-pushpa-on-steroids-8413195/';
const bimbisaraDirector = 'https://telugu.filmibeat.com/interviews/director-vashist-about-bimbisara-and-kalyan-ram-and-ntr-111786.html';
const bimbisaraReview = 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/bimbisara/amp_movie_review/93368130.cms';
const godfatherInterview = 'https://indianexpress.com/article/entertainment/telugu/chiranjeevi-on-godfather-remakes-8189585/';
const godfatherReview = 'https://indianexpress.com/article/entertainment/movie-review/godfather-movie-review-rating-chiranjeevi-nayanthara-8190530/';
const mangalavaaramReview = 'https://indianexpress.com/article/entertainment/movie-review/mangalavaaram-movie-review-ajay-bhupathi-payal-rajput-try-too-hard-to-impress-9030706/lite/';
const mangalavaaramCounter = 'https://www.cinemaexpress.com/telugu/review/2023/nov/17/mangalavaaram-movie-review-engaging-but-at-what-cost-49637.html';
const syeRaaChiru = 'https://www.cinemaexpress.com/stories/interviews/2019/Sep/30/i-dont-want-rajini-and-kamal-to-get-hurt-in-politics-chiranjeevi-at-the-sye-raa-narasimha-reddy-pr-14609.html';
const syeRaaReview = 'https://indianexpress.com/article/entertainment/movie-review/sye-raa-narasimha-reddy-movie-review-rating-chiranjeevi-6048180/lite/';
const syeRaaResearch = 'https://www.cinemaexpress.com/videos/trailers/2018/Aug/21/chiru-makes-a-splash-as-uyyalawada-7536.html';
const satakarniDirector = 'https://telugucinema.com/interviews/krish-gpsk-has-divine-intervention/amp';
const satakarniCounter = 'https://www.newindianexpress.com/amp/story/cities/hyderabad/2017/Jan/14/historians-claim-balakrishnas-gautamiputra-satakarni-is-historically-inaccurate-1559475.html';
const satakarniHistory = 'https://ignca.gov.in/Asi_data/17904.pdf';
const malleshamTedx = 'https://www.youtube.com/watch?v=JdYeYdN3Syk';
const malleshamReview = 'https://indianexpress.com/article/entertainment/movie-review/mallesham-priyadarshi-shines-in-this-no-frills-biopic-drama-5799709/';
const malleshamCounter = 'https://timesofindia.indiatimes.com/city/hyderabad/mallesham-biopic-row-over-invention-of-asu-machine/articleshow/69795206.cms';
const rangasthalamReview = 'https://www.cinemaexpress.com/reviews/telugu/2018/Mar/30/rangasthalam-review-cherry-on-top-5295.html';
const rangasthalamIe = 'https://indianexpress.com/article/entertainment/movie-review/rangasthalam-movie-review-ram-charan-samantha-akkineni-star-rating-5117080/';
const karthikeyaReview = 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/karthikeya-movie-review/movie-review/44928177.cms';
const karthikeyaOfficial = 'https://www.primevideo.com/-/es/detail/0G0V1V845A1ZBGT53HCPZ6BAJQ';

export const fullRecertificationV2Worker3Batch02: SanghiProfile[] = [
  makeProfile({
    title: 'Dasara', year: 2023, language: 'Telugu', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 3, socialDharma: 4, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Telangana roots', 'Caste and power', 'Friendship', 'Violence', 'Mixed'],
    reasons: [
      'Dasara is intensely rooted in a Singareni-belt Telangana village, using local speech, labour, alcohol economy, caste hierarchy and friendship rather than a generic mass-film setting.',
      'Its opposition to a power-hungry local order is a Social Dharma signal, but revenge, alcoholism and extreme violence remain the dominant moral machinery; no caste community is collectively condemned, so Mixed fits better than either Certified or Not Certified.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Dasara review', claim: 'Describes alcohol, caste and power dynamics in Veerlapally as central to the film’s deeply rooted mass-cinema world.', url: dasaraReview },
      { kind: 'review', source: 'Indian Express — Dasara teaser/context', claim: 'Places the fictional Veerlapalli village within the Singareni coal-mining landscape and foregrounds drinking, brawling and revenge.', url: dasaraTeaser },
    ],
  }, {
    sourceBasis: 'original-fiction',
    filmUnderstanding: 'A rural Telangana action tragedy about three friends in a coal-belt village where liquor, caste-linked power and local political control shape a cycle of love, murder and revenge.',
    queries: ['Dasara Srikanth Odela Veerlapalli Telangana caste power', 'Dasara caste community contempt', 'Dasara Telangana local culture alcohol violence', 'Dasara sacred festival religious representation'],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Dasara review', claim: 'Describes alcohol, caste and power dynamics in Veerlapally as central to the film’s deeply rooted mass-cinema world.', url: dasaraReview },
      { kind: 'review', source: 'Indian Express — Dasara teaser/context', claim: 'Places the fictional Veerlapalli village within the Singareni coal-mining landscape and foregrounds drinking, brawling and revenge.', url: dasaraTeaser },
    ],
    sourceStatus: 'clear', sourceCheck: 'The village and principal characters are fictional rather than a claimed reconstruction of a named historical event.',
    identityStatus: 'clear', identityCheck: 'Caste hierarchy is part of the fictional social order; no real person’s caste or religious identity is substituted.',
    communityStatus: 'clear', communityCheck: 'The film criticizes local domination and caste-linked power through specific characters without assigning collective depravity to an entire caste community.',
    sacredStatus: 'clear', sacredCheck: 'Festival and local-cultural texture is not used for sustained sacred ridicule; religion is not the primary target of the conflict.',
    regionalCheck: 'Singareni labour geography, Telangana dialect, drinking culture and village hierarchy are constitutive to the film’s world.',
    counterEvidence: { kind: 'review', source: 'Cinema Express — Dasara review', claim: 'The film’s rooted caste-and-power critique and subversion of jealousy give it meaningful Social Dharma depth beyond a generic revenge picture.', url: dasaraReview },
    redTeamChallenge: 'Calling Dasara Mixed may under-credit a highly rooted story in which friendship and resistance to exploitative local power are genuine moral goods.',
    redTeamOutcome: 'qualified', redTeamImpact: 'Those strengths prevent Neutral or Not Certified, but the film’s governing resolution through retaliatory violence and intoxication keeps the affirmative Dharma signal incomplete.',
    fact: 'Dasara is set in a fictional Telangana coal-belt village structured by alcohol, caste-linked power, friendship and revenge.',
    interpretation: 'Deep Local Roots and some Social Dharma coexist with a violent revenge ethic, producing a Mixed result.',
    intent: 'No anti-caste-community or anti-Hindu intent is inferred from the social conflict.'
  }),

  makeProfile({
    title: 'Bimbisara', year: 2022, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 2, itihasa: 2, parampara: 4, localRoots: 4, raksha: 4, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Dharma transformation', 'Indic fantasy', 'Ayurveda', 'Kingship'],
    reasons: [
      'The film’s central arc converts a cruel, conquest-driven ruler into a more humane and self-sacrificing protector, making the correction of adharmic kingship the story’s governing moral movement.',
      'The director explicitly says the movie has no historical connection to the real Bimbisara and is complete socio-fantasy; that name collision is an Integrity warning, not a reason to deny the affirmative Dharma arc.'
    ],
    integrityFlags: [{ type: 'historical-name-collision', status: 'verified', summary: 'Director Vassishta explicitly states that the film’s Bimbisara has no relation to the historical Bimbisara and that the story is complete fiction.' }],
    evidence: [
      { kind: 'interview', source: 'Filmibeat Telugu — Vassishta interview', claim: 'The director says the film has no relation to the historical Bimbisara and is completely fictional socio-fantasy.', url: bimbisaraDirector },
      { kind: 'review', source: 'Times of India — Bimbisara review', claim: 'Describes the cruel Trigartala king’s transformation into a humane and selfless figure, including the Dhanvantri/Ayurvedic village episode.', url: bimbisaraReview },
    ],
  }, {
    sourceBasis: 'original-fiction',
    filmUnderstanding: 'A Telugu time-travel socio-fantasy about a fictional ancient king named Bimbisara whose cruelty and conquest are reversed through consequences, a child’s vulnerability and contact with the modern world.',
    queries: ['Bimbisara director historical Bimbisara relation', 'Bimbisara Trigartala fictional king source', 'Bimbisara Ayurveda Dhanvantri village', 'Bimbisara Hindu sacred representation'],
    evidence: [
      { kind: 'interview', source: 'Filmibeat Telugu — Vassishta interview', claim: 'The director says the film has no relation to the historical Bimbisara and is completely fictional socio-fantasy.', url: bimbisaraDirector },
      { kind: 'review', source: 'Times of India — Bimbisara review', claim: 'Describes the cruel Trigartala king’s transformation into a humane and selfless figure, including the Dhanvantri/Ayurvedic village episode.', url: bimbisaraReview },
    ],
    sourceStatus: 'finding', sourceCheck: 'The title borrows the name of a historical ruler, but the creator explicitly disclaims historical connection and frames the story as fiction.',
    identityStatus: 'clear', identityCheck: 'Because the protagonist is expressly fictional, the story is not substituting the real Bimbisara’s documented religion, caste or political identity.',
    communityStatus: 'clear', communityCheck: 'The tyrant’s cruelty is personal and royal, not attributed to an Indian caste, religion or community.',
    sacredStatus: 'clear', sacredCheck: 'Ayurvedic/Dhanvantri and ancient Indic motifs are treated as part of the moral-fantasy world without generalized sacred ridicule.',
    regionalCheck: 'The film belongs to Telugu socio-fantasy tradition and uses an Indic kingship idiom rather than claiming archaeological reconstruction.',
    historicalStatus: 'finding', historicalCheck: 'The historical name creates a foreseeable confusion risk; viewers should not infer facts about the Magadhan king Bimbisara from this fictional Trigartala story.',
    counterEvidence: { kind: 'interview', source: 'Filmibeat Telugu — Vassishta interview', claim: 'The creator’s explicit disclaimer means historical grandeur cannot be credited as real Itihasa evidence for the verdict.', url: bimbisaraDirector },
    redTeamChallenge: 'An ancient-king aesthetic can falsely inflate Civilizational Continuity if the title’s historical association is mistaken for actual history.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The historical score is kept modest. Certification instead rests on the film’s internal Dharma transformation, Indic fantasy grammar and protection ethic.',
    fact: 'The director states that the film’s Bimbisara is unrelated to the historical ruler and that the story is fictional.',
    interpretation: 'The movie can be culturally affirmative as fantasy without receiving historical credit it has not earned.',
    intent: 'No attempt to pass the fictional story off as documented history is inferred after the explicit creator disclaimer.'
  }),

  makeProfile({
    title: 'GodFather', year: 2022, language: 'Telugu', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 2, localRoots: 3, raksha: 3, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Lucifer remake', 'Political crime', 'Family loyalty', 'Neutral control'],
    reasons: [
      'GodFather localizes Lucifer around political succession, a brother-sister relationship, criminal power and protection of family, but it does not make sacred, inherited or civilizational questions central.',
      'Its Telugu adaptation choices are real and explicitly acknowledged; they alter characterization and pacing rather than creating an identity/community grievance. Neutral best fits a political-crime remake with some family-duty content.'
    ],
    integrityFlags: [{ type: 'remake-delta', status: 'verified', summary: 'The makers explicitly describe GodFather as a Telugu remake of Lucifer with substantive screenplay and relationship changes for the new version.' }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Chiranjeevi on GodFather remake', claim: 'Chiranjeevi says the team took Lucifer’s core and reworked it, with political drama and family sentiment central to the Telugu adaptation.', url: godfatherInterview },
      { kind: 'review', source: 'Indian Express — GodFather review', claim: 'Identifies the film as the official Lucifer remake about a political power vacuum, family protection and a powerful fixer.', url: godfatherReview },
    ],
  }, {
    sourceBasis: 'fiction-adaptation',
    filmUnderstanding: 'A Telugu political-crime remake of the Malayalam film Lucifer, centring Brahma’s control over a succession crisis while protecting his sister and late father’s political legacy.',
    queries: ['GodFather Telugu Lucifer remake changes Mohan Raja', 'GodFather family sentiment adaptation delta', 'GodFather religion community representation', 'GodFather sacred Hindu content'],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Chiranjeevi on GodFather remake', claim: 'Chiranjeevi says the team took Lucifer’s core and reworked it, with political drama and family sentiment central to the Telugu adaptation.', url: godfatherInterview },
      { kind: 'review', source: 'Indian Express — GodFather review', claim: 'Identifies the film as the official Lucifer remake about a political power vacuum, family protection and a powerful fixer.', url: godfatherReview },
    ],
    sourceStatus: 'finding', sourceCheck: 'Lucifer is the controlling fictional source, with explicit screenplay changes to suit the Telugu version and foreground sibling sentiment.',
    identityStatus: 'clear', identityCheck: 'The adaptation changes fictional characters rather than substituting identities of real people or historical communities.',
    communityStatus: 'clear', communityCheck: 'Corruption and criminal power attach to political actors and gangs, not to a caste, religion or Indian community as a collective.',
    sacredStatus: 'clear', sacredCheck: 'Names such as Brahma function as character nomenclature; sacred representation is not a material axis of the film.',
    regionalCheck: 'The remake deliberately adjusts the source for Telugu star text and family sentiment, which is documented without treating localization itself as civilizational certification.',
    counterEvidence: { kind: 'interview', source: 'Indian Express — Chiranjeevi on GodFather remake', claim: 'The makers explicitly foreground family sentiment and protection, which could support a modest Dharma reading.', url: godfatherInterview },
    redTeamChallenge: 'The brother-sister protection arc could warrant Certified despite the crime-politics form.',
    redTeamOutcome: 'cleared', redTeamImpact: 'Family duty is credited, but it is embedded in a criminal-political power fantasy with little sacred, parampara or civilizational content; Neutral remains calibrated.',
    fact: 'GodFather is an acknowledged remake of Lucifer with changed screenplay and stronger sibling sentiment.',
    interpretation: 'Adaptation localization and family loyalty are positive but insufficient on their own for Bharatiya certification.',
    intent: 'No deceptive source claim or community-targeting intent is inferred.'
  }),

  makeProfile({
    title: 'Mangalavaaram', year: 2023, language: 'Telugu', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Village morality', 'Sexual stigma', 'Social hypocrisy', 'Mystery', 'Mixed'],
    reasons: [
      'The film is strongly rooted in a Telugu village moral world and attempts to expose sexual hypocrisy, stigma and the cruelty directed at a woman whose condition and desire are misunderstood.',
      'Its social critique is mixed with sensational violence, voyeurism and a god-fearing-versus-atheist household contrast. It does not establish generalized contempt toward Hindu villagers, but neither does it present a consistently affirmative sacred or dharmic frame.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Indian Express — Mangalavaaram review', claim: 'Describes Maha Lakshmi Puram, the god-fearing wife/atheist zamindar contrast and the film’s attempt to expose sexual double standards and female stigma.', url: mangalavaaramReview },
      { kind: 'review', source: 'Cinema Express — Mangalavaaram review', claim: 'Highlights the village’s obsession with sex and morality and the film’s social commentary on menstrual taboo and female trauma.', url: mangalavaaramCounter },
    ],
  }, {
    sourceBasis: 'original-fiction',
    filmUnderstanding: 'A Telugu village mystery-thriller in which public accusations of illicit relationships precede deaths, eventually exposing trauma, sexual stigma, revenge and local moral hypocrisy.',
    queries: ['Mangalavaaram Ajay Bhupathi women sexuality village interview', 'Mangalavaaram goddess religion atheist god fearing', 'Mangalavaaram caste community contempt', 'Mangalavaaram menstrual taboo social commentary'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Mangalavaaram review', claim: 'Describes Maha Lakshmi Puram, the god-fearing wife/atheist zamindar contrast and the film’s attempt to expose sexual double standards and female stigma.', url: mangalavaaramReview },
      { kind: 'review', source: 'Cinema Express — Mangalavaaram review', claim: 'Highlights the village’s obsession with sex and morality and the film’s social commentary on menstrual taboo and female trauma.', url: mangalavaaramCounter },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film is original fictional mystery material rather than a true-story or scripture adaptation.',
    identityStatus: 'clear', identityCheck: 'No real-person caste or religious identity substitution is involved.',
    communityStatus: 'clear', communityCheck: 'Village hypocrisy is distributed across fictional individuals; the film does not declare a caste, Hindu community or rural population collectively contemptible.',
    sacredStatus: 'ambiguous', sacredCheck: 'Religious belief is present through the god-fearing household and village atmosphere, but the narrative’s moral emphasis is sexual stigma and revenge rather than reverent sacred treatment.',
    regionalCheck: 'The village setting, speech, social surveillance and moral codes are specific enough to support Local Roots, while the thriller sensationalism remains equally central.',
    counterEvidence: { kind: 'review', source: 'Cinema Express — Mangalavaaram review', claim: 'The film’s sexual and menstrual-taboo commentary can be read as serious Social Dharma rather than mere exploitation.', url: mangalavaaramCounter },
    redTeamChallenge: 'A Mixed verdict could over-penalize a film for depicting village hypocrisy and taboo when the methodology allows internal social criticism.',
    redTeamOutcome: 'qualified', redTeamImpact: 'No community-contempt penalty is applied; Mixed instead reflects the clash between rooted social critique and a sensational, revenge-heavy moral/sacred frame.',
    fact: 'The fictional village story explores sexual stigma, public moral policing, trauma and murder.',
    interpretation: 'Its Social Dharma critique is meaningful but culturally and morally ambivalent rather than cleanly affirmative.',
    intent: 'No anti-Hindu or anti-village motive is inferred from criticism of hypocrisy.'
  }),

  makeProfile({
    title: 'Sye Raa Narasimha Reddy', year: 2019, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 5, itihasa: 4, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Anti-colonial', 'Uyyalawada Narasimha Reddy', 'Freedom struggle', 'Historical epic'],
    reasons: [
      'The film’s moral centre is resistance to colonial extraction, protection of local people and the willingness to sacrifice for freedom, producing exceptionally strong Rashtra and Raksha signals.',
      'Documentation of Uyyalawada Narasimha Reddy is limited and the film heavily mythologizes him; those historical liberties are substantial Integrity debt but do not reverse the clearly Bharatiya anti-colonial meaning of the finished work.'
    ],
    integrityFlags: [{ type: 'historical-dramatization', status: 'verified', summary: 'The production acknowledges limited documentation and significant dramatization around Uyyalawada Narasimha Reddy’s life and rebellion.' }],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Chiranjeevi on Sye Raa', claim: 'Chiranjeevi calls Narasimha Reddy an early anti-British warrior and explicitly notes the lack of proper documentation about his life.', url: syeRaaChiru },
      { kind: 'official', source: 'Cinema Express — production research remarks', claim: 'Ram Charan says the team researched for a year to gather period details before production.', url: syeRaaResearch },
      { kind: 'review', source: 'Indian Express — Sye Raa review', claim: 'Notes extensive mythologization, a 1857 framing device and a broad story of anti-British rebellion and sacrifice.', url: syeRaaReview },
    ],
  }, {
    sourceBasis: 'biopic',
    filmUnderstanding: 'A Telugu historical action epic based on Uyyalawada Narasimha Reddy, presenting him as an early anti-East India Company rebel whose resistance mobilizes common people across local divisions.',
    queries: ['Sye Raa Uyyalawada Narasimha Reddy historical sources', 'Sye Raa Chiranjeevi documentation interview', 'Sye Raa historical inaccuracies 1857 frame', 'Sye Raa religion community representation'],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Chiranjeevi on Sye Raa', claim: 'Chiranjeevi calls Narasimha Reddy an early anti-British warrior and explicitly notes the lack of proper documentation about his life.', url: syeRaaChiru },
      { kind: 'official', source: 'Cinema Express — production research remarks', claim: 'Ram Charan says the team researched for a year to gather period details before production.', url: syeRaaResearch },
      { kind: 'review', source: 'Indian Express — Sye Raa review', claim: 'Notes extensive mythologization, a 1857 framing device and a broad story of anti-British rebellion and sacrifice.', url: syeRaaReview },
    ],
    sourceStatus: 'finding', sourceCheck: 'The film is based on a real rebel but fills major documentary gaps with mainstream dramatic invention and mythic framing.',
    identityStatus: 'clear', identityCheck: 'No evidence establishes a material substitution of Narasimha Reddy’s caste or religious identity for an ideologically opposed one; the larger issue is dramatization.',
    communityStatus: 'clear', communityCheck: 'The film’s enemy is colonial power; Indian collaborators and rivals are individualized rather than generalized into contempt for an Indian community.',
    sacredStatus: 'clear', sacredCheck: 'Mythic and devotional idioms elevate resistance without sustained ridicule of Hindu sacred material.',
    regionalCheck: 'Rayalaseema/Andhra memory, local rebellion and Telugu historical-epic tradition are central to the film’s identity.',
    historicalStatus: 'finding', historicalCheck: 'The 1857 framing, chronology and heroic episodes exceed what sparse documentation can securely establish; the feature should not be used as a literal history text.',
    realPersonStatus: 'finding', realPersonCheck: 'The title directly attributes deeds and relationships to Uyyalawada Narasimha Reddy, so historical uncertainty must remain visible.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Sye Raa review', claim: 'The film aggressively mythologizes the historical figure and compresses complex colonial history into a commercial heroic template.', url: syeRaaReview },
    redTeamChallenge: 'Anti-colonial subject matter can conceal enough historical invention to turn certification into endorsement of false history.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The verdict explicitly does not certify historical accuracy. The high Integrity caveat remains while Rashtra/Raksha values of the finished film stay strongly affirmative.',
    fact: 'Uyyalawada Narasimha Reddy was a real anti-Company rebel, but the production itself acknowledges poor documentation and dramatization.',
    interpretation: 'Historical uncertainty lowers Itihasa confidence but does not negate the film’s civilizational and anti-colonial orientation.',
    intent: 'No claim is made that every event, speech or chronology in the feature is documented fact.'
  }),

  makeProfile({
    title: 'Gautamiputra Satakarni', year: 2017, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Satavahana', 'Historical epic', 'Rajasuya', 'Civilizational continuity'],
    reasons: [
      'The film is explicitly built around Satavahana political memory, Indic kingship, Rajasuya imagery and a civilizational ideal of unifying and defending the land, giving it strong continuity and Rashtra signals.',
      'Historians have identified serious chronology, geography and material-culture errors. Those are high Narrative Integrity debt; under the binding methodology they do not erase the film’s Bharatiya meaning unless the errors themselves create community contempt, which the evidence does not establish.'
    ],
    integrityFlags: [{ type: 'historical-accuracy', status: 'disputed', summary: 'Independent historians challenged the film’s chronology, territorial claims, Demetrius encounter, Saka-era attribution and material-culture details.' }],
    evidence: [
      { kind: 'interview', source: 'TeluguCinema — Krish on GPSK', claim: 'Krish says he drew from inscriptions, literature and coinage, acknowledges creative liberty, and describes the Rajasuya episode as historically contextual but dramatized.', url: satakarniDirector },
      { kind: 'review', source: 'New Indian Express — historians challenge GPSK', claim: 'Reports specific historian objections concerning chronology, geography, Demetrius, the Saka era and stirrups.', url: satakarniCounter },
      { kind: 'primary', source: 'IGNCA/ASI historical text — Gautamiputra Satakarni', claim: 'Summarizes inscriptional evidence for Gautamiputra Satakarni, including the Nasik inscription and conflicts with Sakas, Yavanas and Pahlavas.', url: satakarniHistory },
    ],
  }, {
    sourceBasis: 'history',
    filmUnderstanding: 'A Telugu historical epic dramatizing Satavahana ruler Gautamiputra Satakarni as a unifier and defender of a large Indic realm, with royal ritual, warfare and maternal dynastic identity at the centre.',
    queries: ['Gautamiputra Satakarni inscriptions coins historical evidence', 'GPSK Krish creative liberties Rajasuya', 'Gautamiputra Satakarni film historical inaccuracies Demetrius', 'GPSK caste religion community portrayal'],
    evidence: [
      { kind: 'interview', source: 'TeluguCinema — Krish on GPSK', claim: 'Krish says he drew from inscriptions, literature and coinage, acknowledges creative liberty, and describes the Rajasuya episode as historically contextual but dramatized.', url: satakarniDirector },
      { kind: 'review', source: 'New Indian Express — historians challenge GPSK', claim: 'Reports specific historian objections concerning chronology, geography, Demetrius, the Saka era and stirrups.', url: satakarniCounter },
      { kind: 'primary', source: 'IGNCA/ASI historical text — Gautamiputra Satakarni', claim: 'Summarizes inscriptional evidence for Gautamiputra Satakarni, including the Nasik inscription and conflicts with Sakas, Yavanas and Pahlavas.', url: satakarniHistory },
    ],
    sourceStatus: 'finding', sourceCheck: 'The film uses a genuine historical ruler and epigraphic/literary traditions but substantially dramatizes events beyond what surviving evidence can establish.',
    identityStatus: 'clear', identityCheck: 'The ruler’s maternal dynastic identity and Indic political setting are retained; the principal dispute concerns events and extent, not ideological identity substitution.',
    communityStatus: 'clear', communityCheck: 'Foreign and rival powers are martial antagonists, but the film does not establish generalized contempt toward a contemporary Indian caste or religious community.',
    sacredStatus: 'clear', sacredCheck: 'Rajasuya and Indic royal-sacred idiom are treated affirmatively rather than as superstition or ridicule.',
    regionalCheck: 'Satavahana memory, Deccan history and Telugu cultural ownership are central, while the historical record also extends across modern regional boundaries.',
    historicalStatus: 'finding', historicalCheck: 'Specific chronology, territorial extent, Demetrius encounter, Saka-era attribution and stirrup depiction have been publicly challenged and must remain flagged.',
    realPersonStatus: 'finding', realPersonCheck: 'The film directly attributes speeches, battles and motives to Gautamiputra Satakarni; many such details are dramatized rather than inscriptionally established.',
    counterEvidence: { kind: 'review', source: 'New Indian Express — historians challenge GPSK', claim: 'Multiple concrete historical errors and anachronisms have been alleged by historians, creating unusually high narrative-integrity debt.', url: satakarniCounter },
    redTeamChallenge: 'A civilizational historical epic with significant factual errors risks converting mythic nationalism into false Itihasa.',
    redTeamOutcome: 'cleared', redTeamImpact: 'Itihasa confidence is constrained and the historical disputes are explicit. The cultural verdict still reflects the finished film’s affirmative Indic kingship and civilizational-continuity frame, not a claim that every event is true.',
    fact: 'Gautamiputra Satakarni is historically attested, while several major film episodes and claims are disputed or dramatized.',
    interpretation: 'Narrative Integrity debt is high but separable from the film’s strongly Bharatiya civilizational orientation.',
    intent: 'No deceptive intent is inferred merely from historical dramatization; the director openly acknowledges creative liberty.'
  }),

  makeProfile({
    title: 'Mallesham', year: 2019, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Pochampally', 'Handloom', 'Biopic', 'Innovation', 'Seva'],
    reasons: [
      'Mallesham connects filial duty, practical innovation and service to the Pochampally weaving community, while treating handloom as living regional heritage rather than picturesque backdrop.',
      'A public dispute exists over priority for the Asu-machine invention. That attribution question is material and is preserved as Narrative Integrity debt, but it does not reverse the film’s affirmative treatment of craft, family, work and community uplift.'
    ],
    integrityFlags: [{ type: 'invention-attribution', status: 'disputed', summary: 'A contemporaneous report records a competing claim by Y Srinivas and Y Satyanarayana regarding prior invention of an Asu machine; Chintakindi Mallesham’s patent and public recognition remain part of the record.' }],
    evidence: [
      { kind: 'primary', source: 'TEDxHyderabad — Chintakindi Mallesham and Raj Rachakonda', claim: 'The real inventor subject and director describe how Mallesham’s TEDx account became the film’s core reference and how the Asu machine served Pochampally weavers.', url: malleshamTedx },
      { kind: 'review', source: 'Indian Express — Mallesham review', claim: 'Frames the film as a grounded biopic about preserving handloom heritage and reducing the punishing labour borne by Pochampally weavers.', url: malleshamReview },
      { kind: 'review', source: 'Times of India — Asu machine attribution dispute', claim: 'Records a competing claim that brothers Y Srinivas and Y Satyanarayana built an Asu machine before Mallesham’s version.', url: malleshamCounter },
    ],
  }, {
    sourceBasis: 'biopic',
    filmUnderstanding: 'A Telugu biopic of Padma Shri Chintakindi Mallesham, following his effort to mechanize the Asu process after witnessing the physical suffering and economic precarity of Pochampally weaving families.',
    queries: ['Mallesham Chintakindi biopic TEDx source', 'Mallesham Asu machine invention dispute Srinivas Satyanarayana', 'Mallesham Pochampally weavers craft heritage', 'Mallesham caste community representation'],
    evidence: [
      { kind: 'primary', source: 'TEDxHyderabad — Chintakindi Mallesham and Raj Rachakonda', claim: 'The real inventor subject and director describe how Mallesham’s TEDx account became the film’s core reference and how the Asu machine served Pochampally weavers.', url: malleshamTedx },
      { kind: 'review', source: 'Indian Express — Mallesham review', claim: 'Frames the film as a grounded biopic about preserving handloom heritage and reducing the punishing labour borne by Pochampally weavers.', url: malleshamReview },
      { kind: 'review', source: 'Times of India — Asu machine attribution dispute', claim: 'Records a competing claim that brothers Y Srinivas and Y Satyanarayana built an Asu machine before Mallesham’s version.', url: malleshamCounter },
    ],
    sourceStatus: 'finding', sourceCheck: 'The film draws directly from Mallesham’s public life story and TEDx account, but a material competing invention-priority claim exists.',
    identityStatus: 'clear', identityCheck: 'No evidence establishes religious/caste identity substitution of Mallesham or the weaving community; the dispute is attribution of invention.',
    communityStatus: 'clear', communityCheck: 'The film dignifies weavers and criticizes economic hardship without degrading another caste or community as a collective.',
    sacredStatus: 'clear', sacredCheck: 'Sacred representation is not the central axis; cultural continuity comes primarily through craft, family and livelihood.',
    regionalCheck: 'Pochampally handloom, Telangana dialect, village life and craft economy are central to the film’s texture and moral stakes.',
    historicalStatus: 'finding', historicalCheck: 'The timeline of invention and priority claims should not be resolved solely from the feature film.',
    realPersonStatus: 'finding', realPersonCheck: 'The film portrays a living/modern real person and attributes the invention journey to him, making the competing claim important counter-evidence.',
    counterEvidence: { kind: 'review', source: 'Times of India — Asu machine attribution dispute', claim: 'A competing inventor claim directly challenges the film’s singular attribution of the Asu-machine breakthrough to Mallesham.', url: malleshamCounter },
    redTeamChallenge: 'Certification of a revered craft/innovation biopic could improperly endorse disputed personal credit.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The attribution dispute is explicitly retained and no factual priority judgment is made here. The cultural verdict concerns the film’s treatment of seva, family and Pochampally craft continuity.',
    fact: 'The film credits Mallesham’s Asu-machine journey; contemporaneous reporting records a competing prior-invention claim.',
    interpretation: 'Disputed attribution reduces biographical certainty but does not negate the film’s strongly rooted and service-oriented cultural meaning.',
    intent: 'No deceptive intent is inferred from the existence of a competing claim.'
  }),

  makeProfile({
    title: 'Rangasthalam', year: 2018, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 2, itihasa: 2, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rural Andhra', 'Local culture', 'Anti-feudal', 'Brotherhood', 'Social Dharma'],
    reasons: [
      'Rangasthalam reconstructs a richly specific 1980s Andhra village world of work, family, festivals, local hierarchy and speech while making resistance to exploitative authoritarian power the social spine of the story.',
      'The villainous president and his system are specific institutions and individuals; the film does not convert class/caste-linked domination into generalized contempt for a caste or Indian community.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Rangasthalam review', claim: 'Calls the film a rural entertainer focused on locality, culture and traditions and describes the president’s exploitation of dependent villagers.', url: rangasthalamReview },
      { kind: 'review', source: 'Indian Express — Rangasthalam review', claim: 'Reads defiance against the village president’s long authoritarian rule as the soul of the film while praising its countryside life.', url: rangasthalamIe },
    ],
  }, {
    sourceBasis: 'original-fiction',
    filmUnderstanding: 'A 1980s Andhra village drama about a hearing-impaired irrigation worker and his brother confronting a long-entrenched village president whose economic and political control keeps residents dependent and afraid.',
    queries: ['Rangasthalam Sukumar village inspiration 1980s', 'Rangasthalam caste feudal president community contempt', 'Rangasthalam Andhra culture traditions festival', 'Rangasthalam sacred religious representation'],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Rangasthalam review', claim: 'Calls the film a rural entertainer focused on locality, culture and traditions and describes the president’s exploitation of dependent villagers.', url: rangasthalamReview },
      { kind: 'review', source: 'Indian Express — Rangasthalam review', claim: 'Reads defiance against the village president’s long authoritarian rule as the soul of the film while praising its countryside life.', url: rangasthalamIe },
    ],
    sourceStatus: 'clear', sourceCheck: 'The village and characters are fictional, even though Sukumar draws heavily on the social texture of rural Andhra life.',
    identityStatus: 'clear', identityCheck: 'No real-person or true-story identity is reassigned; caste/class coding belongs to fictional social relations.',
    communityStatus: 'clear', communityCheck: 'The film attacks an authoritarian local order and exploitative president, not a caste or religious community as an undifferentiated whole.',
    sacredStatus: 'clear', sacredCheck: 'Local traditions and festival life form part of the world without sustained sacred ridicule.',
    regionalCheck: 'Andhra village speech, agriculture, irrigation work, local festivities and 1980s social relations are foundational to the film’s identity.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Rangasthalam review', claim: 'Revenge is as central as defiance, and the climactic moral order remains violent rather than institutionally reformist.', url: rangasthalamIe },
    redTeamChallenge: 'The film could be over-certified because its anti-feudal revolt ends through revenge and murder rather than a consistently dharmic process.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The violent caveat lowers Dharma purity but does not erase the film’s sustained local-rootedness, family duty and resistance to exploitative domination.',
    fact: 'The fictional village is controlled by a president who economically exploits residents and eliminates challengers.',
    interpretation: 'Defiance of local tyranny is a Social Dharma signal when the criticism remains targeted and the village culture itself is treated with affection.',
    intent: 'No anti-caste-community intent is inferred from the anti-feudal story.'
  }),

  makeProfile({
    title: 'Karthikeya', year: 2014, language: 'Telugu', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 4, raksha: 2, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Subramanya temple', 'Reason and belief', 'Mystery', 'Telugu sacred geography', 'Mixed'],
    reasons: [
      'The mystery takes a Subramanya Swamy temple, village fear and inherited sacred geography seriously enough to make them the entire narrative world, and the protagonist ultimately works to reopen the temple rather than destroy or mock it.',
      'At the same time, much of the supposed curse is investigated through rational/scientific explanation and human conspiracy. That productive tension between reverence and debunking makes Mixed more precise than either a devotional Certified verdict or an anti-Hindu reading.'
    ],
    integrityFlags: [{ type: 'fictional-temple-mystery', status: 'verified', summary: 'The Subramaniapuram mystery is a fictional thriller construct and should not be treated as a factual claim about a specific real temple or curse.' }],
    evidence: [
      { kind: 'review', source: 'Times of India — Karthikeya review', claim: 'Describes the closed Subramanya Swamy temple, feared snake-bite curse and a medical student’s evidence-driven investigation into the deaths.', url: karthikeyaReview },
      { kind: 'official', source: 'Prime Video — Karthikeya synopsis', claim: 'Frames the movie as a supernatural mystery around a long-closed Subramanian Swami temple that the protagonists seek to solve.', url: karthikeyaOfficial },
    ],
  }, {
    sourceBasis: 'original-fiction',
    filmUnderstanding: 'A Telugu mystery thriller about a curious medical student investigating deaths and a feared curse around a closed Subramanya Swamy temple in the fictional village of Subramaniapuram.',
    queries: ['Karthikeya 2014 Chandoo Mondeti temple mystery', 'Karthikeya Subramanya temple science superstition', 'Karthikeya sacred ridicule Hindu representation', 'Karthikeya village curse snake conspiracy ending'],
    evidence: [
      { kind: 'review', source: 'Times of India — Karthikeya review', claim: 'Describes the closed Subramanya Swamy temple, feared snake-bite curse and a medical student’s evidence-driven investigation into the deaths.', url: karthikeyaReview },
      { kind: 'official', source: 'Prime Video — Karthikeya synopsis', claim: 'Frames the movie as a supernatural mystery around a long-closed Subramanian Swami temple that the protagonists seek to solve.', url: karthikeyaOfficial },
    ],
    sourceStatus: 'clear', sourceCheck: 'The temple, curse and deaths are fictional thriller material rather than claims about a verified historical or scriptural event.',
    identityStatus: 'clear', identityCheck: 'No real-person caste or religious identity substitution is involved.',
    communityStatus: 'clear', communityCheck: 'Villagers’ fear and superstition are story conditions; the film does not portray Hindus or devotees as a collectively contemptible community.',
    sacredStatus: 'ambiguous', sacredCheck: 'The Subramanya temple remains narratively important and is ultimately restored, while the feared curse is subjected to rational investigation and debunking; sacred regard and skepticism coexist.',
    regionalCheck: 'The Telugu village-temple mystery and Subramanya sacred geography give the thriller a recognizably local Indic frame rather than a generic haunted-house setting.',
    counterEvidence: { kind: 'review', source: 'Times of India — Karthikeya review', claim: 'The protagonist approaches the temple mystery as a case study and seeks factual/scientific answers, which can be read as reducing inherited belief to superstition.', url: karthikeyaReview },
    redTeamChallenge: 'A rationalist mystery that debunks a temple curse may fall below the sacred-regard threshold even if the temple survives.',
    redTeamOutcome: 'qualified', redTeamImpact: 'The concern is material, but the film distinguishes a false/engineered fear from the temple itself and does not generalize contempt toward devotees. Mixed captures the tension.',
    fact: 'The fictional plot links a closed Subramanya Swamy temple to feared deaths that a medical student investigates rationally.',
    interpretation: 'The film neither simply affirms superstition nor attacks the sacred; it uses reason inside a culturally rooted temple mystery.',
    intent: 'No anti-Hindu intent is inferred from the protagonist’s skepticism.'
  }),
];
