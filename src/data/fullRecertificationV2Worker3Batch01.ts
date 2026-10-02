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

const maharajaAnalysis = 'https://www.onmanorama.com/entertainment/movie-reviews/2024/07/14/maharaja-vijay-sethupathi-movie-analysis-tamil-nithilan-swaminathan-cinemascape.html';
const maharajaAgency = 'https://www.hindustantimes.com/entertainment/tamil-cinema/vijay-sethupathi-anurag-kashyap-s-maharaja-explores-love-through-3-fathers-but-what-about-womens-agency-101718790776489-amp.html';
const lubberDirector = 'https://www.ottplay.com/interview/lubber-pandhu-director-tamizharasan-pachamuthu-interview-i-am-clear-to-have-repeat-audience-to-my-films/ce213021fc894';
const lubberReview = 'https://indianexpress.com/article/entertainment/movie-review/lubber-pandhu-movie-review-sports-spice-and-everything-nice-perfectly-come-together-in-this-riveting-family-drama-9576922/lite/';
const captainDirector = 'https://indianexpress.com/article/entertainment/tamil/arun-matheswaran-captain-miller-is-my-least-violent-movie-yet-9103495/';
const captainReview = 'https://indianexpress.com/article/entertainment/movie-review/captain-miller-movie-review-rating-dhanush-arun-matheswaran-9106401/';
const captainTemple = 'https://www.hindustantimes.com/entertainment/tamil-cinema/captain-miller-review-dhanush-arun-matheshwaran-bring-a-well-crafted-revolutionary-tale-101705044652074.html';
const maaveeranDirector = 'https://www.thenewsminute.com/tamil-nadu/interview-maaveeran-director-cinematic-choices-need-criticism-and-yogi-babu-180289';
const maaveeranReview = 'https://indianexpress.com/article/entertainment/movie-review/maaveeran-movie-review-sivakarthikeyans-latest-good-but-predictable-8836302/';
const parkingReview = 'https://www.newindianexpress.com/entertainment/review/2023/dec/02/parking-movie-review-an-intriguing-and-relatable-take-on-male-ego-2637884.html';
const parkingInterview = 'https://www.cinemaexpress.com/tamil/interviews/2023/Nov/20/harish-kalyan-i-dont-want-to-play-stereotypical-roles-49723.html';
const vaazhaiDirector = 'https://indianexpress.com/article/entertainment/tamil/mari-selvaraj-vaazhai-will-help-me-develop-a-stronger-relationship-with-society-9541363/';
const vaazhaiCounter = 'https://indianexpress.com/article/entertainment/tamil/vaazhai-mari-selvaraj-manipulative-melodrama-9549904/';
const kottukkaaliDirector = 'https://www.arsenal-berlin.de/en/forum-forum-expanded/archive/program-archive/2024/program-forum/main-program/kottukkaali/interview-silence-as-adamance/';
const kottukkaaliReview = 'https://indianexpress.com/article/entertainment/movie-review/kottukkaali-movie-review-ps-vinothraj-anna-ben-serve-a-triumph-of-independent-story-telling-9528887/';
const aranmanaiDirector = 'https://www.cinemaexpress.com/tamil/interviews/2024/Apr/29/sundar-c-good-comedy-is-not-always-well-appreciated';
const aranmanaiReview = 'https://indianexpress.com/article/entertainment/movie-review/aranmanai-4-movie-review-a-new-day-and-a-new-aranmanai-film-with-the-same-old-problems-9305738/lite/';
const raayanReview = 'https://www.newindianexpress.com/entertainment/review/2024/Jul/26/raayan-movie-review-dhanush-cooks-a-gangster-film-thats-tasty-in-its-restraint';
const raayanToi = 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/raayan/movie-review/112036906.cms';
const ps2Writer = 'https://www.indiatoday.in/magazine/leisure/story/20230515-interview-with-ponniyin-selvan-screenwriter-scripting-a-screen-epic-2368951-2023-05-05';
const ps2Team = 'https://www.theweek.in/theweek/leisure/2023/05/05/chats-with-ponniyin-selvan-director-and-lead-cast-and-crew.html';
const bharathiRecord = 'https://www.rottentomatoes.com/m/bharathi';
const bharathiImdb = 'https://www.imdb.com/title/tt0274372/';
const rrrPress = 'https://indianexpress.com/article/entertainment/telugu/rrr-press-meet-live-updates-5625810/lite/';
const rrrMyth = 'https://indianexpress.com/article/entertainment/opinion-entertainment/ss-rajamouli-rrr-mythological-themes-jr-ntr-ram-charan-ramayan-mahabharat-7835946/';
const hiNannaDirector = 'https://www.123telugu.com/interviews/interview-shouryuv-hi-nanna-is-a-clean-entertainer-without-double-meaning-dialogues-violence.html?amp=1';
const hiNannaReview = 'https://indianexpress.com/article/entertainment/movie-review/hi-nanna-movie-review-nani-mrunal-thakur-impress-in-a-poignant-tale-of-love-and-bonding-9058145/lite/';
const balagamDirector = 'https://thesouthfirst.com/entertainment/interview-balagam-changed-me-as-a-person-says-comedian-turned-director-venu-yeldandi/';
const balagamReview = 'https://indianexpress.com/article/entertainment/telugu/balagam-movie-review-priyadarshi-venu-yeldandi-8475818/';
const virupakshaDirector = 'https://www.cinemaexpress.com/telugu/interviews/2023/Apr/12/virupaksha-directorkarthik-dandui-am-a-big-fan-of-horror-films-42232.html';
const virupakshaFollowup = 'https://www.cinemaexpress.com/telugu/news/2023/may/25/karthik-dandu-my-next-film-is-loosely-based-on-the-puranas-43860.html';

export const fullRecertificationV2Worker3Batch01: SanghiProfile[] = [
  makeProfile({
    title: 'Maharaja', year: 2024, language: 'Tamil', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 4, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Fatherhood', 'Justice', 'Revenge', 'Tamil contemporary'],
    reasons: [
      'The film gives paternal duty, protection of a daughter and punishment of sexual violence strong moral weight, but its governing form is an intensely personal revenge thriller rather than a civilizational or sacred argument.',
      'Its women-agency limitations and retaliatory violence are material ethical caveats, yet neither amounts to community contempt; Neutral is more disciplined than converting generic family protection into Bharatiya certification.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Onmanorama — Maharaja analysis', claim: 'Reads the film through fatherhood, sexual violence, revenge and patriarchal dehumanization.', url: maharajaAnalysis },
      { kind: 'review', source: 'Hindustan Times — Maharaja and women’s agency', claim: 'Highlights the three-father structure while challenging the limited agency afforded to women.', url: maharajaAgency },
    ],
  }, {
    sourceBasis: 'original-fiction',
    filmUnderstanding: 'A nonlinear Tamil revenge thriller about a father whose apparent complaint over a missing dustbin conceals his pursuit of the men responsible for violence against his daughter.',
    queries: ['Maharaja source original fiction Nithilan Saminathan', 'Maharaja father daughter revenge women agency', 'Maharaja caste religion community representation', 'Maharaja sacred Hindu ridicule controversy'],
    evidence: [
      { kind: 'review', source: 'Onmanorama — Maharaja analysis', claim: 'Reads the film through fatherhood, sexual violence, revenge and patriarchal dehumanization.', url: maharajaAnalysis },
      { kind: 'review', source: 'Hindustan Times — Maharaja and women’s agency', claim: 'Highlights the three-father structure while challenging the limited agency afforded to women.', url: maharajaAgency },
    ],
    sourceStatus: 'clear', sourceCheck: 'No biographical, historical or literary source claim drives the film; it is adjudicated as original fiction.',
    identityStatus: 'clear', identityCheck: 'No material substitution of a real person’s caste, religion or community identity is implicated by the fictional premise.',
    communityStatus: 'clear', communityCheck: 'The perpetrators are individualized criminals; the film does not generalize their depravity to a caste, religion or Indian community.',
    sacredStatus: 'clear', sacredCheck: 'Sacred or ritual material is not a material target or source of the film’s moral conflict.',
    regionalCheck: 'The film is read as a contemporary Tamil crime drama whose strongest cultural signal is family duty rather than an imported representational frame.',
    counterEvidence: { kind: 'review', source: 'Hindustan Times — Maharaja and women’s agency', claim: 'The film’s celebration of protective fatherhood can overshadow women’s agency and rely on retaliatory violence.', url: maharajaAgency },
    redTeamChallenge: 'Strong paternal protection and justice could be over-credited as Dharma when the movie’s operative ethic is revenge.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The challenge supports Neutral rather than a stronger verdict; family duty is recognized without converting a revenge thriller into a civilizational certification.',
    fact: 'Maharaja is fictional and centres a father’s response to violence against his daughter.',
    interpretation: 'Protective duty is positive, but the film lacks enough civilizational, sacred or inherited-tradition content for certification.',
    intent: 'No ideological motive is inferred from the revenge structure or its gender limitations.'
  }),

  makeProfile({
    title: 'Lubber Pandhu', year: 2024, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Local cricket', 'Family', 'Equality', 'Tamil roots'],
    reasons: [
      'The film turns local cricket, family ties and intergenerational ego into a rooted Tamil social world while explicitly arguing that caste barriers should yield to dignity, talent and human relationships.',
      'Its caste critique identifies exclusionary behaviour rather than degrading any caste community as a collective, satisfying the narrow community-contempt threshold while supporting strong Social Dharma and Local Roots.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'OTTplay — Tamizharasan Pachamuthu interview', claim: 'The director says the film advocates equality subtly through cricket and romance and draws characterizations from real life.', url: lubberDirector },
      { kind: 'review', source: 'Indian Express — Lubber Pandhu review', claim: 'Finds caste hierarchy, inclusion, family, romance and cricket integrated without reducing characters to ideological types.', url: lubberReview },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A Perambalur-rooted Tamil sports-family drama about two local cricketers whose rivalry intersects with marriage, caste exclusion, gender and pride.',
    queries: ['Lubber Pandhu source inspiration director interview', 'Lubber Pandhu caste equality community contempt', 'Lubber Pandhu women family cricket Tamil roots', 'Lubber Pandhu religious sacred representation'],
    evidence: [
      { kind: 'interview', source: 'OTTplay — Tamizharasan Pachamuthu interview', claim: 'The director says the film advocates equality subtly through cricket and romance and draws characterizations from real life.', url: lubberDirector },
      { kind: 'review', source: 'Indian Express — Lubber Pandhu review', claim: 'Finds caste hierarchy, inclusion, family, romance and cricket integrated without reducing characters to ideological types.', url: lubberReview },
    ],
    sourceStatus: 'clear', sourceCheck: 'The characters draw on observed life but the film is not presented as a biopic or literal true-story reconstruction.',
    identityStatus: 'clear', identityCheck: 'Caste identity functions as a social barrier in the fictional story; no real person’s identity is substituted.',
    communityStatus: 'clear', communityCheck: 'The film criticizes caste exclusion and casual prejudice without assigning collective moral guilt or contempt to an entire caste community.',
    sacredStatus: 'clear', sacredCheck: 'Religion and sacred practice are not material targets of ridicule or adjudication.',
    regionalCheck: 'Perambalur-style local cricket, family structures, dialect and everyday Tamil social life are constitutive rather than decorative.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Lubber Pandhu review', claim: 'The film contains explicit caste commentary and brownfacing concerns that require checking whether equality politics overwhelms character-level nuance.', url: lubberReview },
    redTeamChallenge: 'A social-equality film could be mislabeled Certified merely for progressive politics rather than Bharatiya rootedness.',
    redTeamOutcome: 'cleared', redTeamImpact: 'Certification rests on the combination of local rootedness, family obligation, dignity and non-contemptuous social reform—not on secular representational balance.',
    fact: 'The director explicitly frames equality as one of the film’s ideas and situates it within local cricket and family relationships.',
    interpretation: 'Internal social reform and rooted community life are compatible with Bharatiya certification when no community is collectively degraded.',
    intent: 'No anti-caste-community hostility is inferred from criticism of caste discrimination.'
  }),

  makeProfile({
    title: 'Captain Miller', year: 2024, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 4, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 4, contemptRisk: 1 },
    tags: ['Anti-colonial', 'Temple reclamation', 'Caste reform', 'Tamil folklore', 'Raksha'],
    reasons: [
      'The film’s anti-colonial revolt, defence of dispossessed villagers and reclamation of a local Shiva-temple inheritance create strong Rashtra, Raksha, Local Roots and civilizational continuity.',
      'Its critique is directed at caste exclusion by rulers and colonial collaboration, not at Shiva, the village deity or Hindus as a collective; the sacred inheritance is ultimately something the oppressed community fights to recover.'
    ],
    integrityFlags: [{ type: 'historical-fiction', status: 'verified', summary: 'The pre-Independence setting and revolutionary vocabulary are historical, but Captain Miller and the central village/temple plot are stylized fiction rather than a biopic.' }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Arun Matheswaran interview', claim: 'The director describes constructing a warrior figure through Tamil folklore in a pre-Independence action setting.', url: captainDirector },
      { kind: 'review', source: 'Indian Express — Captain Miller review', claim: 'Identifies the caste-oppressed villager, British service and revolt, temple exclusion and native-deity politics as central to the story.', url: captainReview },
      { kind: 'review', source: 'Hindustan Times — Captain Miller review', claim: 'Records the 600-year-old Shiva temple, land gift to local people and caste-based denial of temple entry.', url: captainTemple },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A stylized pre-Independence Tamil action drama in which a caste-oppressed villager joins the British army, revolts after colonial violence and fights rulers and colonizers over his people’s land and temple inheritance.',
    queries: ['Captain Miller source historical fiction director Tamil folklore', 'Captain Miller temple Shiva caste exclusion', 'Captain Miller anti Hindu sacred representation', 'Captain Miller British colonial revolt community portrayal'],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Arun Matheswaran interview', claim: 'The director describes constructing a warrior figure through Tamil folklore in a pre-Independence action setting.', url: captainDirector },
      { kind: 'review', source: 'Indian Express — Captain Miller review', claim: 'Identifies the caste-oppressed villager, British service and revolt, temple exclusion and native-deity politics as central to the story.', url: captainReview },
      { kind: 'review', source: 'Hindustan Times — Captain Miller review', claim: 'Records the 600-year-old Shiva temple, land gift to local people and caste-based denial of temple entry.', url: captainTemple },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film uses a historical colonial era but is not presented as the biography of a specific freedom fighter.',
    identityStatus: 'clear', identityCheck: 'The caste-oppressed hero is fictional; no real historical identity is replaced or reassigned.',
    communityStatus: 'clear', communityCheck: 'Specific rulers, collaborators and exclusionary practices are condemned; the film does not generalize blame to Brahmins, dominant castes or Hindus as communities.',
    sacredStatus: 'clear', sacredCheck: 'The Shiva temple and indigenous deity inheritance are objects of reclamation and protection; oppression conducted around temple access is not treated as proof that the sacred itself is contemptible.',
    regionalCheck: 'Tamil folklore, village deity memory, caste history and anti-colonial experience are integrated into the local world rather than flattened into generic revolution iconography.',
    historicalStatus: 'finding', historicalCheck: 'The period setting and colonial violence invite historical association, but the central hero and temple plot are fictionalized and should not be used as documentary history.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Captain Miller review', claim: 'The film explicitly links caste oppression to control over a temple and the god in whose name villagers are excluded, creating a plausible sacred-valence challenge.', url: captainReview },
    redTeamChallenge: 'A film that associates a Hindu temple order with caste exclusion could be read as anti-Hindu rather than reformist reclamation.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The story’s direction is reclamation: the deity, temple and land are returned to the people while British rule and exclusionary power are the antagonists. The sacred object is not the target of contempt.',
    fact: 'The fictional community is denied entry to an old Shiva temple despite a tradition that the land and sacred inheritance belonged to them.',
    interpretation: 'Critiquing exclusion while reclaiming the temple is an internal civilizational justice argument, not generalized anti-Hindu contempt.',
    intent: 'No claim is made that the fictional temple history documents a specific real institution.'
  }),

  makeProfile({
    title: 'Maaveeran', year: 2023, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 2, itihasa: 1, parampara: 2, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Courage', 'Protection', 'Working-class dignity', 'Tamil social drama'],
    reasons: [
      'Sathya’s arc is explicitly from cowardice and accommodation toward courage, truth-telling and protection of vulnerable residents from corrupt power and unsafe housing.',
      'The film’s politics targets a specific politician and failed public project rather than any caste, religion or region, making its Raksha and Social Dharma signals compatible with certification.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'The News Minute — Madonne Ashwin interview', claim: 'The director discusses dignity, criticism and his deliberate approach to character representation in Maaveeran.', url: maaveeranDirector },
      { kind: 'review', source: 'Indian Express — Maaveeran review', claim: 'Describes a timid cartoonist becoming a defender of displaced slum residents against a corrupt politician and unsafe housing.', url: maaveeranReview },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A Tamil fantasy-action social drama about a timid cartoonist who hears a guiding narrative voice and gradually risks himself to protect residents of a dangerously built government housing project.',
    queries: ['Maaveeran source inspiration Madonne Ashwin', 'Maaveeran caste religion community representation', 'Maaveeran courage protector corrupt politician', 'Maaveeran sacred deity religious ridicule'],
    evidence: [
      { kind: 'interview', source: 'The News Minute — Madonne Ashwin interview', claim: 'The director discusses dignity, criticism and his deliberate approach to character representation in Maaveeran.', url: maaveeranDirector },
      { kind: 'review', source: 'Indian Express — Maaveeran review', claim: 'Describes a timid cartoonist becoming a defender of displaced slum residents against a corrupt politician and unsafe housing.', url: maaveeranReview },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film is original fiction and makes no real-person or historical reconstruction claim.',
    identityStatus: 'clear', identityCheck: 'No true-story identity substitution is involved; class and language details belong to fictional characters.',
    communityStatus: 'clear', communityCheck: 'Political corruption and cowardice are individualized; no caste, religious or linguistic community is collectively degraded.',
    sacredStatus: 'clear', sacredCheck: 'The supernatural narrative voice is a fantasy device, not a deity or sacred tradition being mocked.',
    regionalCheck: 'The film’s working-class housing, Tamil comic-book idiom and local political setting are substantive to its moral arc.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Maaveeran review', claim: 'The film is fundamentally a populist superhero story and can be read as generic anti-corruption entertainment rather than civilizationally rooted cinema.', url: maaveeranReview },
    redTeamChallenge: 'The certification could over-credit generic anti-corruption heroism as Bharatiya Dharma.',
    redTeamOutcome: 'cleared', redTeamImpact: 'Certification rests on the unusually explicit duty/protection transformation and rooted social world, not simply on opposition to a corrupt politician.',
    fact: 'Sathya changes from avoiding conflict to risking himself for residents endangered by political corruption and unsafe construction.',
    interpretation: 'The arc strongly instantiates duty, courage, protection and social responsibility in a locally rooted setting.',
    intent: 'No broader ideological intent beyond the finished film’s social critique is asserted.'
  }),

  makeProfile({
    title: 'Parking', year: 2023, language: 'Tamil', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Male ego', 'Family', 'Middle class', 'Neutral control'],
    reasons: [
      'Parking is a sharply local middle-class morality tale about two men allowing ego over a shared parking space to poison two households.',
      'Its eventual recognition of the damage caused by pride is ethically legible, but religion, civilizational continuity, inherited tradition and collective protection are not central enough for certification.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'New Indian Express — Parking review', claim: 'Identifies male ego and escalating conflict between two ordinary families as the film’s core.', url: parkingReview },
      { kind: 'interview', source: 'Cinema Express — Harish Kalyan on Parking', claim: 'The actor describes the film as exploring how an ordinary parking dispute escalates through ego and material attachment.', url: parkingInterview },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A Tamil domestic thriller about two tenants whose disagreement over a parking space escalates into retaliation that threatens both families.',
    queries: ['Parking Tamil source true story inspiration', 'Parking male ego family review', 'Parking caste religion community representation', 'Parking sacred religious content'],
    evidence: [
      { kind: 'review', source: 'New Indian Express — Parking review', claim: 'Identifies male ego and escalating conflict between two ordinary families as the film’s core.', url: parkingReview },
      { kind: 'interview', source: 'Cinema Express — Harish Kalyan on Parking', claim: 'The actor describes the film as exploring how an ordinary parking dispute escalates through ego and material attachment.', url: parkingInterview },
    ],
    sourceStatus: 'clear', sourceCheck: 'No verified real-person or historical source claim is material to the film.',
    identityStatus: 'clear', identityCheck: 'The conflict is between fictional households and does not depend on identity substitution.',
    communityStatus: 'clear', communityCheck: 'The film indicts the pride and choices of two individuals rather than a caste, religion, age group or community.',
    sacredStatus: 'clear', sacredCheck: 'Sacred or religious representation is not material to the dispute.',
    regionalCheck: 'The middle-class Tamil household setting is credible and local, but locality alone does not create a civilizational verdict.',
    counterEvidence: { kind: 'review', source: 'New Indian Express — Parking review', claim: 'The story does contain a moral critique of destructive ego and a family-preserving resolution that could be read as Dharma.', url: parkingReview },
    redTeamChallenge: 'A family-restoration ending may justify Certified rather than Neutral.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The ethical lesson is recognized, but it is too generic and thin on civilizational/sacred/parampara content to cross the certification threshold.',
    fact: 'The story concerns a fictional parking-space feud that escalates through reciprocal retaliation.',
    interpretation: 'It is a useful neutral control: locally rooted and morally serious without being materially Bharatiya-civilizational in subject.',
    intent: 'No ideological motive is inferred.'
  }),

  makeProfile({
    title: 'Vaazhai', year: 2024, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 3, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rural Tamil', 'Labour dignity', 'Childhood memory', 'Social Dharma'],
    reasons: [
      'Mari Selvaraj roots the film in his own rural childhood world and the bodily cost of banana-plantation labour, giving working families, children and local memory unusual specificity and dignity.',
      'The film’s anger is directed at exploitative labour arrangements and preventable tragedy, not at a caste or religious community as such; its strongest signal is locally rooted Social Dharma.'
    ],
    integrityFlags: [{ type: 'autobiographical-source', status: 'verified', summary: 'The director publicly frames Vaazhai through his life, struggles and truth, while the feature dramatizes those memories rather than functioning as documentary reconstruction.' }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Mari Selvaraj on Vaazhai', claim: 'Selvaraj explicitly discusses the film through his life, struggles and the need to tell people who he is.', url: vaazhaiDirector },
      { kind: 'review', source: 'Indian Express — Vaazhai critical analysis', claim: 'Describes the child labour setting and the fatal overloaded-truck tragedy while challenging the film’s melodramatic handling.', url: vaazhaiCounter },
    ],
  }, {
    sourceBasis: 'true-story', filmUnderstanding: 'A semi-autobiographical rural Tamil drama about schoolchildren compelled into banana-plantation labour and a remembered transport tragedy that devastates a village community.',
    queries: ['Vaazhai Mari Selvaraj childhood true story', 'Vaazhai banana workers accident source', 'Vaazhai caste community representation', 'Vaazhai sacred religion village tradition'],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Mari Selvaraj on Vaazhai', claim: 'Selvaraj explicitly discusses the film through his life, struggles and the need to tell people who he is.', url: vaazhaiDirector },
      { kind: 'review', source: 'Indian Express — Vaazhai critical analysis', claim: 'Describes the child labour setting and the fatal overloaded-truck tragedy while challenging the film’s melodramatic handling.', url: vaazhaiCounter },
    ],
    sourceStatus: 'finding', sourceCheck: 'The film is rooted in autobiographical memory and real social experience but reconstructs events through cinematic characters and melodrama.',
    identityStatus: 'clear', identityCheck: 'No evidence was found of substituting a real person’s caste or religious identity for ideological effect.',
    communityStatus: 'clear', communityCheck: 'Exploitative employers and labour structures are criticized without turning an identifiable caste or religious community into a collective villain.',
    sacredStatus: 'clear', sacredCheck: 'Local belief and cultural life are not used as objects of generalized sacred ridicule.',
    regionalCheck: 'The Thoothukudi/Tirunelveli rural landscape, labour economy, dialect and childhood culture are inseparable from the film’s meaning.',
    realPersonStatus: 'finding', realPersonCheck: 'Because the work is semi-autobiographical, personal memory is a source; individual scenes should not be treated as independently verified documentary testimony.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Vaazhai critical analysis', claim: 'A strong critical reading argues that manipulative melodrama can distort the labour tragedy the film seeks to honour.', url: vaazhaiCounter },
    redTeamChallenge: 'Autobiographical authenticity and pro-labour politics could be over-credited despite melodramatic reconstruction and a narrow social rather than civilizational focus.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The source caveat remains explicit, while the combination of rooted community memory, dignity of labour and duty toward vulnerable children sustains certification.',
    fact: 'Selvaraj ties Vaazhai to his life and rural labour experience; the feature dramatizes that material.',
    interpretation: 'Its social critique is internally rooted and community-specific without generalized contempt, supporting Social Dharma and Local Roots.',
    intent: 'No claim is made that every character or exchange is a literal historical record.'
  }),

  makeProfile({
    title: 'Kottukkaali', year: 2024, language: 'Tamil', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Patriarchy', 'Caste', 'Exorcism', 'Tamil rural life', 'Mixed'],
    reasons: [
      'The film is exceptionally rooted in rural Tamil kinship, caste and ritual landscape while defending a young woman’s agency against coercion justified through possession and exorcism.',
      'Its target is a specific patriarchal use of belief rather than Hindus or a caste community as a whole, but inherited ritual is repeatedly framed as damaging superstition; strong Social Dharma and Local Roots therefore coexist with weak Sacred Regard.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'Arsenal/Berlinale — PS Vinothraj interview', claim: 'Vinothraj says the film grew from incidents he observed and examines beliefs and exorcism practices imposed on women.', url: kottukkaaliDirector },
      { kind: 'review', source: 'Indian Express — Kottukkaali review', claim: 'Identifies casteism, toxic masculinity, family-deity stops and coerced exorcism as central to Meena’s journey.', url: kottukkaaliReview },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A rural Tamil road drama in which a family transports a silent young woman to an exorcist because she resists an arranged marriage after loving a man from an oppressed caste.',
    queries: ['Kottukkaali PS Vinothraj source family incidents', 'Kottukkaali caste community contempt', 'Kottukkaali exorcism family deity sacred belief', 'Kottukkaali patriarchy creator interview'],
    evidence: [
      { kind: 'interview', source: 'Arsenal/Berlinale — PS Vinothraj interview', claim: 'Vinothraj says the film grew from incidents he observed and examines beliefs and exorcism practices imposed on women.', url: kottukkaaliDirector },
      { kind: 'review', source: 'Indian Express — Kottukkaali review', claim: 'Identifies casteism, toxic masculinity, family-deity stops and coerced exorcism as central to Meena’s journey.', url: kottukkaaliReview },
    ],
    sourceStatus: 'clear', sourceCheck: 'Observed incidents inform the fiction, but the film is not offered as a literal reconstruction of a named true story.',
    identityStatus: 'clear', identityCheck: 'The inter-caste love conflict is fictional and no real person’s identity is replaced.',
    communityStatus: 'clear', communityCheck: 'The film condemns coercive relatives, caste prejudice and patriarchal practice; it does not establish generalized contempt toward a caste or Hindu community.',
    sacredStatus: 'finding', sacredCheck: 'Possession and exorcism are presented as harmful superstition used against Meena, creating genuine sacred/parampara friction even though the film does not ridicule a deity or Hindu community collectively.',
    regionalCheck: 'Village roads, kinship, family deity, caste boundaries, liquor stops and exorcism practices are observed as a specific Tamil rural world.',
    counterEvidence: { kind: 'interview', source: 'Arsenal/Berlinale — PS Vinothraj interview', claim: 'The director’s own framing explicitly challenges inherited beliefs and exorcism practices as harmful, which is stronger than a merely neutral depiction.', url: kottukkaaliDirector },
    redTeamChallenge: 'Calling the film Mixed could unfairly penalize legitimate internal criticism of coercive superstition, which the methodology says is not community contempt.',
    redTeamOutcome: 'qualified', redTeamImpact: 'No contempt finding is made. Mixed instead records the coexistence of deep local rootedness and Social Dharma with a sustained negative valence toward the ritual mechanism central to the plot.',
    fact: 'The family interprets Meena’s resistance as possession and seeks exorcism; the film links that process to caste and patriarchal coercion.',
    interpretation: 'The critique is socially specific rather than anti-community, but its sacred/ritual valence is materially negative enough to prevent a clean Certified verdict.',
    intent: 'No anti-Hindu intent is inferred from Vinothraj’s critique of the practice.'
  }),

  makeProfile({
    title: 'Aranmanai 4', year: 2024, language: 'Tamil', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 4, raksha: 4, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Mariamman', 'Divine intervention', 'Folklore', 'Family protection'],
    reasons: [
      'The horror-comedy treats the Mariamman festival and divine intervention as effective protective forces in the climax rather than as delusion or a punchline.',
      'Its borrowing of the Assamese Baak is shallow and highly commercialized, but that is a folklore/adaptation-quality caveat; the finished sacred valence toward the village goddess remains affirmative.'
    ],
    integrityFlags: [{ type: 'folklore-adaptation', status: 'supported', summary: 'The film borrows the Baak from Assamese folklore primarily for its shapeshifting premise and does not attempt a deep ethnographic representation of that tradition.' }],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Sundar C interview', claim: 'Sundar C describes divine intervention as a required element of the Aranmanai formula and explains the external dark-spirit premise.', url: aranmanaiDirector },
      { kind: 'review', source: 'Indian Express — Aranmanai 4 review', claim: 'Records the Baak borrowing, village Mariamman festival and goddess-versus-demon climax while criticizing the folklore treatment as superficial.', url: aranmanaiReview },
    ],
  }, {
    sourceBasis: 'folklore-sacred-tradition', filmUnderstanding: 'A Tamil horror-comedy in which a malevolent shapeshifting Baak threatens a family while a village Mariamman festival and divine intervention become part of the protective resolution.',
    queries: ['Aranmanai 4 Baak Assamese folklore source', 'Aranmanai 4 Mariamman goddess climax', 'Aranmanai 4 sacred ridicule divine intervention', 'Aranmanai 4 folklore appropriation criticism'],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Sundar C interview', claim: 'Sundar C describes divine intervention as a required element of the Aranmanai formula and explains the external dark-spirit premise.', url: aranmanaiDirector },
      { kind: 'review', source: 'Indian Express — Aranmanai 4 review', claim: 'Records the Baak borrowing, village Mariamman festival and goddess-versus-demon climax while criticizing the folklore treatment as superficial.', url: aranmanaiReview },
    ],
    sourceStatus: 'finding', sourceCheck: 'The Baak is borrowed from Assamese folklore but selectively adapted for a Tamil franchise, while Mariamman belongs to the village sacred framework of the climax.',
    identityStatus: 'clear', identityCheck: 'No real-person or community identity substitution is involved.',
    communityStatus: 'clear', communityCheck: 'Neither Assamese people nor a Hindu caste/religious community is degraded; the adaptation concern is superficiality, not collective contempt.',
    sacredStatus: 'clear', sacredCheck: 'Mariamman is a real and effective protective sacred presence in the story; the divine climax is affirmative even inside a comic-commercial genre.',
    regionalCheck: 'The film combines a borrowed Assamese spirit with Tamil village-goddess festival conventions; the cultural mixture is documented rather than assumed homogeneous.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Aranmanai 4 review', claim: 'The Baak is used superficially and the festival imagery is highly commercialized, raising a real concern that living traditions are being reduced to genre machinery.', url: aranmanaiReview },
    redTeamChallenge: 'Commercial horror can instrumentalize sacred and folk traditions so heavily that affirmative divine imagery becomes mere spectacle.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The folklore-depth caveat is retained in Narrative Integrity, but the goddess is not mocked or negated; she has protective efficacy, so the cultural verdict remains Certified.',
    fact: 'The film borrows Baak lore and stages a Mariamman-centred divine resolution.',
    interpretation: 'Shallow folklore adaptation is not the same as sacred contempt; the principal Hindu sacred valence is positive.',
    intent: 'No ethnographic fidelity or hostile religious intent is inferred.'
  }),

  makeProfile({
    title: 'Raayan', year: 2024, language: 'Tamil', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 2, localRoots: 4, raksha: 4, socialDharma: 2, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Family protection', 'Gangster violence', 'Ravana imagery', 'Mixed'],
    reasons: [
      'Raayan’s strongest affirmative value is fierce responsibility for siblings, expressed inside a recognizably Tamil urban-local world.',
      'The film also deliberately codes the family through Raavana/asura imagery and folds deity/priest symbolism into a cycle of betrayal and killing. That is not generalized anti-Hindu contempt, but the violent mythic inversion and criminal ethic keep the verdict Mixed.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'New Indian Express — Raayan review', claim: 'Reads Raayan as a deliberate Raavana/asura reimagination built around siblings and a family bloodline prone to violence.', url: raayanReview },
      { kind: 'review', source: 'Times of India — Raayan review', claim: 'Describes the sibling-protection core alongside gangster conflict and escalating revenge violence.', url: raayanToi },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A Tamil gangster tragedy about an elder brother who raises and protects his siblings, then enters escalating underworld violence, betrayal and revenge with explicit Ravana/asura visual coding.',
    queries: ['Raayan Ravana asura symbolism review', 'Raayan priest deity sacred symbolism', 'Raayan family protection gangster violence', 'Raayan caste religion community contempt'],
    evidence: [
      { kind: 'review', source: 'New Indian Express — Raayan review', claim: 'Reads Raayan as a deliberate Raavana/asura reimagination built around siblings and a family bloodline prone to violence.', url: raayanReview },
      { kind: 'review', source: 'Times of India — Raayan review', claim: 'Describes the sibling-protection core alongside gangster conflict and escalating revenge violence.', url: raayanToi },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film is original gangster fiction using epic/demonic imagery as metaphor rather than adapting the Ramayana as a source narrative.',
    identityStatus: 'clear', identityCheck: 'No true-story identity substitution is involved.',
    communityStatus: 'clear', communityCheck: 'Criminality and betrayal attach to individuals and gangs, not to an identifiable caste or religion as a collective.',
    sacredStatus: 'finding', sacredCheck: 'Raavana/asura and deity-priest imagery is intentionally inverted into a violent criminal tragedy; it creates sacred friction without amounting to ridicule of Rama, a deity, devotees or Hindus collectively.',
    regionalCheck: 'Tamil kinship, neighbourhood and mythic visual coding are part of the film’s local grammar, while the gangster form remains dominant.',
    counterEvidence: { kind: 'review', source: 'New Indian Express — Raayan review', claim: 'The film’s Raavana/asura coding is purposeful and can be read as a culturally literate tragic framework rather than sacred hostility.', url: raayanReview },
    redTeamChallenge: 'Treating Ravana/asura imagery as a negative sacred signal may confuse an antagonist-centred literary metaphor with contempt for Itihasa.',
    redTeamOutcome: 'qualified', redTeamImpact: 'No contempt finding is made. Mixed records that family duty and cultural symbolism coexist with a violent antihero ethic and mythic inversion too central for clean certification.',
    fact: 'The film uses explicit Raavana/asura imagery around a fictional gangster family.',
    interpretation: 'The symbolism is culturally literate but morally ambivalent; it neither justifies Not Certified nor supports uncomplicated certification.',
    intent: 'No anti-Hindu intent is inferred from the metaphor.'
  }),

  makeProfile({
    title: 'Ponniyin Selvan: Part II', year: 2023, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 3, itihasa: 4, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Chola', 'Kalki adaptation', 'Tamil history', 'Civilizational continuity'],
    reasons: [
      'Part II sustains the Chola civilizational world of Kalki’s novel through dynastic duty, temples, royal ritual, Tamil geography, inherited political memory and the ethical burden of kingship.',
      'It remains an adaptation of historical fiction, not a documentary chronicle; condensation and invented resolution belong in Narrative Integrity and do not erase the film’s strongly affirmative Tamil/Indic civilizational frame.'
    ],
    integrityFlags: [{ type: 'historical-fiction', status: 'verified', summary: 'The film adapts Kalki’s historical novel and necessarily combines historical Chola figures with literary invention and further cinematic compression.' }],
    evidence: [
      { kind: 'interview', source: 'India Today — screenwriter Jeyamohan on PS2', claim: 'Discusses the adaptation challenge of condensing Kalki’s large historical-fiction narrative for cinema.', url: ps2Writer },
      { kind: 'interview', source: 'The Week — Mani Ratnam and PS team', claim: 'Ratnam says the adaptation sought to retain the heart of the novel while the team researched Chola locations, sculpture and historical context.', url: ps2Team },
    ],
  }, {
    sourceBasis: 'fiction-adaptation', filmUnderstanding: 'The second half of Mani Ratnam’s two-part adaptation of Kalki Krishnamurthy’s Ponniyin Selvan, resolving succession, romance and conspiracy around historical Chola figures through the novel’s fictional architecture.',
    queries: ['Ponniyin Selvan 2 Kalki adaptation changes', 'PS2 Chola history versus fiction', 'PS2 Shaiva Vaishnava temple portrayal', 'PS2 Mani Ratnam Jeyamohan source fidelity'],
    evidence: [
      { kind: 'interview', source: 'India Today — screenwriter Jeyamohan on PS2', claim: 'Discusses the adaptation challenge of condensing Kalki’s large historical-fiction narrative for cinema.', url: ps2Writer },
      { kind: 'interview', source: 'The Week — Mani Ratnam and PS team', claim: 'Ratnam says the adaptation sought to retain the heart of the novel while the team researched Chola locations, sculpture and historical context.', url: ps2Team },
    ],
    sourceStatus: 'finding', sourceCheck: 'The controlling source is Kalki’s historical fiction; cinematic compression and altered emphasis must be distinguished from claims about primary Chola history.',
    identityStatus: 'clear', identityCheck: 'No evidence establishes material caste/religious identity substitution of a real Chola figure for ideological effect.',
    communityStatus: 'clear', communityCheck: 'Dynastic and sectarian tensions are dramatized without generalized degradation of Shaivas, Vaishnavas, Brahmins or another Indian community.',
    sacredStatus: 'clear', sacredCheck: 'Temple, ritual and Indic religious texture remains part of the Chola world and is not treated with sustained ridicule or contempt.',
    regionalCheck: 'Tamil language, Chola geography, court culture, temple landscape and literary memory are the film’s constitutive civilizational setting.',
    historicalStatus: 'finding', historicalCheck: 'Historical rulers coexist with invented characters and plotlines inherited from Kalki; the feature cannot be treated as a literal Chola chronicle.',
    counterEvidence: { kind: 'interview', source: 'India Today — screenwriter Jeyamohan on PS2', claim: 'Major compression is unavoidable in adapting Kalki, creating a risk that viewers conflate the film’s invented resolution with settled Chola history.', url: ps2Writer },
    redTeamChallenge: 'A visually Indic historical epic could be over-certified while adaptation choices attenuate or alter important religious and historical detail.',
    redTeamOutcome: 'cleared', redTeamImpact: 'Those deltas are retained as Narrative Integrity issues; the film’s finished civilizational and sacred orientation remains materially affirmative.',
    fact: 'PS2 adapts a historical novel that already combines real Chola figures with fiction.',
    interpretation: 'Source-fidelity debt does not by itself reverse a strongly rooted Tamil/Indic cultural treatment.',
    intent: 'No deceptive documentary claim or anti-Hindu motive is inferred.'
  }),

  makeProfile({
    title: 'Bharathi', year: 2000, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Subramania Bharati', 'Freedom movement', 'Tamil literature', 'Social reform'],
    reasons: [
      'The biopic places Mahakavi Subramania Bharati’s poetry, anti-colonial nationalism, Tamil literary contribution and social reform at the centre of a civilizational life story.',
      'Bharati’s challenges to caste and convention are reformist positions within his wider Indian and Hindu intellectual world; portraying those conflicts does not amount to generalized contempt for a community.'
    ],
    integrityFlags: [{ type: 'biographical-compression', status: 'supported', summary: 'The film condenses Bharati’s life for a feature narrative and should not substitute for primary biography or his writings.' }],
    evidence: [
      { kind: 'review', source: 'Rotten Tomatoes — Bharathi synopsis', claim: 'Identifies the film as a biography of freedom fighter and poet Subramania Bharati and foregrounds his equality-oriented social reform.', url: bharathiRecord },
      { kind: 'review', source: 'IMDb — Bharathi', claim: 'Records the film as a true-story biographical drama about the Tamil poet’s struggle for Indian freedom.', url: bharathiImdb },
    ],
  }, {
    sourceBasis: 'biopic', filmUnderstanding: 'A Tamil biographical drama about poet-journalist Subramania Bharati, connecting his literary life, family hardship, social reform and anti-colonial nationalism.',
    queries: ['Bharathi 2000 film Subramania Bharati biopic source', 'Bharathi film historical accuracy poet life', 'Bharathi caste reform Hindu community portrayal', 'Bharathi nationalism sacred spirituality'],
    evidence: [
      { kind: 'review', source: 'Rotten Tomatoes — Bharathi synopsis', claim: 'Identifies the film as a biography of freedom fighter and poet Subramania Bharati and foregrounds his equality-oriented social reform.', url: bharathiRecord },
      { kind: 'review', source: 'IMDb — Bharathi', claim: 'Records the film as a true-story biographical drama about the Tamil poet’s struggle for Indian freedom.', url: bharathiImdb },
    ],
    sourceStatus: 'finding', sourceCheck: 'The subject is historical, but a feature biopic necessarily selects and dramatizes episodes from Bharati’s life.',
    identityStatus: 'clear', identityCheck: 'No evidence establishes substitution of Bharati’s Tamil, religious or caste identity; the film presents him as the historical poet and nationalist.',
    communityStatus: 'clear', communityCheck: 'Bharati’s anti-caste and social-reform positions challenge practices and hierarchy rather than degrading an entire caste or Hindu community.',
    sacredStatus: 'clear', sacredCheck: 'The film’s subject belongs to a Hindu/Indic literary-spiritual world and is not framed through sacred ridicule.',
    regionalCheck: 'Tamil poetry, Ettayapuram/Pondicherry-era cultural life and Bharati’s place in Tamil memory are central rather than incidental.',
    historicalStatus: 'finding', historicalCheck: 'Biographical scenes should be checked against Bharati scholarship and writings; certification does not validate every dramatized private exchange.',
    realPersonStatus: 'finding', realPersonCheck: 'The title directly portrays a historical poet and freedom activist, so attribution and biographical compression are material.',
    counterEvidence: { kind: 'review', source: 'Rotten Tomatoes — Bharathi synopsis', claim: 'The equality/reform emphasis could be isolated from Bharati’s broader civilizational and devotional thought if the feature is treated as exhaustive biography.', url: bharathiRecord },
    redTeamChallenge: 'A nationalist subject can be over-certified simply because the real Bharati is revered, without separating the historical person from the film’s actual treatment.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The verdict rests on the film’s own documented focus on freedom, poetry and reform, while biographical completeness remains an integrity caveat.',
    fact: 'The film is a biographical portrayal of Subramania Bharati, a major Tamil poet and Indian nationalist.',
    interpretation: 'Its literary, national and reformist orientation strongly aligns with civilizational continuity and Social Dharma.',
    intent: 'No claim is made that the feature is an exhaustive or scene-by-scene historical record.'
  }),

  makeProfile({
    title: 'RRR', year: 2022, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Anti-colonial', 'Alluri Sitarama Raju', 'Komaram Bheem', 'Ramayana', 'Mahabharata'],
    reasons: [
      'RRR is openly fictional about the meeting of two real anti-colonial figures, but its moral direction is unmistakably toward resistance to imperial domination, loyalty, sacrifice and collective liberation.',
      'Ramayana and Mahabharata imagery is used affirmatively to enlarge the heroes’ moral vocabulary rather than parody the epics; the large historical inventions remain Narrative Integrity caveats, not a reason to reverse the cultural verdict.'
    ],
    integrityFlags: [{ type: 'historical-fiction', status: 'verified', summary: 'Rajamouli explicitly says RRR is completely fictitious and not a biography even though it uses Alluri Sitarama Raju and Komaram Bheem as its historical anchors.' }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — RRR 2019 press meet', claim: 'Rajamouli says the two historical revolutionaries never met and that the story asking what if they had is completely fictitious, though researched for period detail.', url: rrrPress },
      { kind: 'review', source: 'Indian Express — RRR mythological themes', claim: 'Documents the film’s deliberate Ramayana and Mahabharata parallels around Rama, Bheema and Hanuman.', url: rrrMyth },
    ],
  }, {
    sourceBasis: 'true-story', filmUnderstanding: 'A counterfactual anti-colonial action epic imagining a friendship between Alluri Sitarama Raju and Komaram Bheem before their historically documented rebellions, with extensive Itihasa symbolism.',
    queries: ['RRR Rajamouli completely fictitious Alluri Komaram Bheem', 'RRR historical accuracy freedom fighters', 'RRR Ramayana Mahabharata symbolism', 'RRR Gond identity community representation controversy'],
    evidence: [
      { kind: 'interview', source: 'Indian Express — RRR 2019 press meet', claim: 'Rajamouli says the two historical revolutionaries never met and that the story asking what if they had is completely fictitious, though researched for period detail.', url: rrrPress },
      { kind: 'review', source: 'Indian Express — RRR mythological themes', claim: 'Documents the film’s deliberate Ramayana and Mahabharata parallels around Rama, Bheema and Hanuman.', url: rrrMyth },
    ],
    sourceStatus: 'finding', sourceCheck: 'Real revolutionaries supply names and broad inspiration, but the meeting, friendship and most central events are explicitly counterfactual fiction.',
    identityStatus: 'clear', identityCheck: 'The film retains the protagonists’ broad historical identities as Telugu anti-colonial figures; fictionalization is overt rather than a concealed identity substitution.',
    communityStatus: 'clear', communityCheck: 'Colonial oppressors are the principal collective antagonistic force; no Indian caste or religious community is generalized as contemptible.',
    sacredStatus: 'clear', sacredCheck: 'Rama, Bheema and Hanuman imagery is heroic and reverential, functioning as living Itihasa symbolism rather than ridicule.',
    regionalCheck: 'The two Telugu-region revolutionaries, Gond/tribal setting, dialect research and anti-colonial memory are integral to the film’s identity.',
    historicalStatus: 'finding', historicalCheck: 'The central friendship is invented and must not be taught as biography; Rajamouli himself marks the work as fiction.',
    realPersonStatus: 'finding', realPersonCheck: 'Because the protagonists bear real freedom fighters’ names, viewers need a durable warning that characterization and events are heavily fictionalized.',
    counterEvidence: { kind: 'interview', source: 'Indian Express — RRR 2019 press meet', claim: 'Rajamouli explicitly concedes that the central premise is completely fictitious, creating substantial historical-fidelity debt.', url: rrrPress },
    redTeamChallenge: 'The film’s nationalist and epic symbolism could obscure how radically it fictionalizes two real historical figures.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The historical debt is explicit and high but separable. It does not change the finished film’s strongly anti-colonial and affirmative Itihasa meaning.',
    fact: 'Alluri Sitarama Raju and Komaram Bheem were real anti-colonial figures who did not historically meet; RRR invents their friendship.',
    interpretation: 'Transparent counterfactual history can still carry strong Rashtra, Raksha and Itihasa signals when the adaptation debt is separately disclosed.',
    intent: 'No claim is made that Rajamouli intended a documentary biography; he publicly states the opposite.'
  }),

  makeProfile({
    title: 'Hi Nanna', year: 2023, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 3, raksha: 4, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Fatherhood', 'Family', 'Care', 'Reconciliation'],
    reasons: [
      'The film treats sustained parental care, truth, sacrifice and eventual family reconciliation as serious moral duties rather than sentimental decoration.',
      'Its values are broadly familial rather than explicitly sacred or historical, but the strength and centrality of responsibility across father, mother and child justify a Dharma/Social Dharma certification without inventing religious content.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: '123Telugu — Shouryuv interview', claim: 'The director says the film’s core is father-daughter bonding and describes it as a clean emotional family story.', url: hiNannaDirector },
      { kind: 'review', source: 'Indian Express — Hi Nanna review', claim: 'Describes a single father whose life revolves around his daughter and a story focused on love, memory and family bonding.', url: hiNannaReview },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A Telugu family melodrama about a devoted single father, his daughter with a serious medical condition and the return of the child’s estranged mother under altered circumstances.',
    queries: ['Hi Nanna Shouryuv father daughter family interview', 'Hi Nanna source original story', 'Hi Nanna caste religion community portrayal', 'Hi Nanna family values criticism'],
    evidence: [
      { kind: 'interview', source: '123Telugu — Shouryuv interview', claim: 'The director says the film’s core is father-daughter bonding and describes it as a clean emotional family story.', url: hiNannaDirector },
      { kind: 'review', source: 'Indian Express — Hi Nanna review', claim: 'Describes a single father whose life revolves around his daughter and a story focused on love, memory and family bonding.', url: hiNannaReview },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film is original family fiction rather than a biopic, history or adaptation with a source-fidelity burden.',
    identityStatus: 'clear', identityCheck: 'No real-person caste, religious or regional identity substitution is involved.',
    communityStatus: 'clear', communityCheck: 'Family conflict is individualized and does not generalize blame to any caste, religion or community.',
    sacredStatus: 'clear', sacredCheck: 'The film does not depend on sacred representation, so certification is not being inferred from nonexistent religious imagery.',
    regionalCheck: 'The film is Telugu family cinema with an urban setting; its decisive cultural signal is duty within family rather than regional folklore.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Hi Nanna review', claim: 'The film is a universal family melodrama whose values could be too generic to qualify as specifically Bharatiya-civilizational.', url: hiNannaReview },
    redTeamChallenge: 'Family affection alone should not automatically produce certification under a Hindu-civilizational framework.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The verdict is based on sustained, costly parental duty and reconciliation as the film’s governing ethic; sacred/civilizational scores remain modest rather than inflated.',
    fact: 'The story repeatedly centers a father’s care for his daughter and the possibility of repairing a fractured family.',
    interpretation: 'Its strongest Bharatiya-aligned signal is Dharma expressed through family responsibility, not explicit religious identity.',
    intent: 'No claim is made that the film advances a religious or nationalist program.'
  }),

  makeProfile({
    title: 'Balagam', year: 2023, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Telangana', 'Funeral rites', 'Family reconciliation', 'Parampara'],
    reasons: [
      'Balagam makes Telangana death rites, kinship obligations, village participation and traditional performers the structure through which a fractured family confronts itself and reconciles.',
      'The director explicitly treats these funeral customs as meaningful local culture rather than backward spectacle, giving Parampara, Local Roots and family Dharma unusually direct support.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'South First — Venu Yeldandi interview', claim: 'Venu describes Telangana funeral customs as meaningful culture and explains that the film grew from family death rituals and village relationships.', url: balagamDirector },
      { kind: 'review', source: 'Indian Express — Balagam review', claim: 'Says the film faithfully documents the 12-day death customs of Telangana villages while examining changing family equations.', url: balagamReview },
    ],
  }, {
    sourceBasis: 'original-fiction', filmUnderstanding: 'A Telangana village family drama in which an elder’s death and the rites that follow expose old resentments and eventually become the framework for kinship repair.',
    queries: ['Balagam Venu Yeldandi funeral rituals interview', 'Balagam Telangana death customs culture', 'Balagam caste community representation', 'Balagam sacred ritual ridicule controversy'],
    evidence: [
      { kind: 'interview', source: 'South First — Venu Yeldandi interview', claim: 'Venu describes Telangana funeral customs as meaningful culture and explains that the film grew from family death rituals and village relationships.', url: balagamDirector },
      { kind: 'review', source: 'Indian Express — Balagam review', claim: 'Says the film faithfully documents the 12-day death customs of Telangana villages while examining changing family equations.', url: balagamReview },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film draws on the director’s family experiences and observed customs but is structured as fiction rather than a named-person biopic.',
    identityStatus: 'clear', identityCheck: 'No real-person identity is substituted; kinship and ritual are portrayed through fictional villagers.',
    communityStatus: 'clear', communityCheck: 'Family pettiness and conflict are distributed among individuals and do not become contempt toward Telangana villagers, a caste or religious community.',
    sacredStatus: 'clear', sacredCheck: 'Death rites, crows, mourning practices and traditional performers are treated as meaningful inherited practice, even when characters behave comically within them.',
    regionalCheck: 'Telangana language, food, toddy, funeral custom, Budaga Jangam performance and village kinship are the film’s core cultural fabric.',
    counterEvidence: { kind: 'review', source: 'Indian Express — Balagam review', claim: 'The film includes comic treatment around mourning rituals, which could be mistaken for ridicule of inherited practice.', url: balagamReview },
    redTeamChallenge: 'Comic interludes during death rites could trivialize sacred/parampara material rather than honour it.',
    redTeamOutcome: 'cleared', redTeamImpact: 'The director’s own framing and the film’s final use of ritual for reconciliation show that comedy humanizes participants without negating the rites themselves.',
    fact: 'The film closely depicts Telangana funeral customs and uses them to structure a family reconciliation narrative.',
    interpretation: 'Inherited practice is granted social and moral efficacy, supporting strong Parampara and Local Roots.',
    intent: 'No claim is made that all Telangana communities perform every rite identically.'
  }),

  makeProfile({
    title: 'Virupaksha', year: 2023, language: 'Telugu', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Mysticism', 'Black magic', 'Village belief', 'Telugu horror', 'Mixed'],
    reasons: [
      'Virupaksha revives a distinctly Telugu rural mystical-horror vocabulary of village taboo, ritual, spirituality and black magic, treating the supernatural world as narratively real rather than merely sneering at belief.',
      'At the same time, ritual authority, occult practice and collective fear become engines of horror and violence. That rootedness is substantial, but the sacred/ritual valence is too ambivalent for a clean Certified verdict.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Karthik Dandu interview', claim: 'The director says he deliberately returned to Telugu horror traditions involving black magic and mysticism and set the film in a rural spiritual world.', url: virupakshaDirector },
      { kind: 'interview', source: 'Cinema Express — Karthik Dandu follow-up', claim: 'The director describes Virupaksha as a mystical thriller involving freak deaths, lynch-mob history and dark ritual connections.', url: virupakshaFollowup },
    ],
  }, {
    sourceBasis: 'folklore-sacred-tradition', filmUnderstanding: 'A Telugu rural mystical thriller in which a village is sealed by fear, ritual prohibitions and a chain of supernatural deaths connected to past violence and occult revenge.',
    queries: ['Virupaksha Karthik Dandu black magic mysticism interview', 'Virupaksha village ritual sacred representation', 'Virupaksha caste religion community contempt', 'Virupaksha lynching occult source'],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Karthik Dandu interview', claim: 'The director says he deliberately returned to Telugu horror traditions involving black magic and mysticism and set the film in a rural spiritual world.', url: virupakshaDirector },
      { kind: 'interview', source: 'Cinema Express — Karthik Dandu follow-up', claim: 'The director describes Virupaksha as a mystical thriller involving freak deaths, lynch-mob history and dark ritual connections.', url: virupakshaFollowup },
    ],
    sourceStatus: 'clear', sourceCheck: 'The film draws on horror/mystical traditions but is not presented as a canonical Purana adaptation or true historical account.',
    identityStatus: 'clear', identityCheck: 'No real-person identity substitution is involved.',
    communityStatus: 'clear', communityCheck: 'The village’s collective fear and past violence are criticized as story events, not used to establish an Indian caste or religious community as inherently depraved.',
    sacredStatus: 'ambiguous', sacredCheck: 'Spiritual and ritual forces are narratively efficacious but repeatedly associated with occult danger, taboo and death; reverence and horror are intertwined.',
    regionalCheck: 'The film consciously revives a Telugu rural black-magic/mysticism horror tradition, making regional genre memory material to the verdict.',
    counterEvidence: { kind: 'interview', source: 'Cinema Express — Karthik Dandu interview', claim: 'The director’s stated goal is genre revival rather than religious critique, which argues against reading the occult material as anti-Hindu.', url: virupakshaDirector },
    redTeamChallenge: 'A horror film’s use of black magic and ritual danger should not automatically be treated as weak sacred regard when the supernatural is taken seriously.',
    redTeamOutcome: 'qualified', redTeamImpact: 'No contempt finding is made, but the film’s sacred/ritual material is persistently fear-laden rather than affirmatively dharmic, so Mixed best captures the coexistence.',
    fact: 'Virupaksha intentionally uses spirituality, black magic and village ritual as the machinery of a mystical thriller.',
    interpretation: 'The representation is rooted and serious but morally/sacredly ambivalent rather than clearly affirmative.',
    intent: 'No anti-Hindu or anti-village intent is inferred from genre choices.'
  }),
];
