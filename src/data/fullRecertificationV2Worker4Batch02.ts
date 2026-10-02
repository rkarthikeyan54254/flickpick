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

export const fullRecertificationV2Worker4Batch02: SanghiProfile[] = [
  make({
    title: 'Garuda Gamana Vrishabha Vahana',
    year: 2021,
    language: 'Kannada',
    status: 'mixed',
    sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Mangaluru', 'Trimurti archetypes', 'Pili vesha', 'Mixed'],
    reasons: [
      'The film is unusually rooted in Mangaluru language, place, temple geography and pili vesha while explicitly structuring Shiva, Hari and Brammayya through creator-preserver-destroyer mythology.',
      'That civilizational density is real, but the sacred archetypes are deliberately mapped onto ruthless gangsters and a cycle of murder, creating a material sacred-valence tension that makes Mixed / Contested more accurate than either automatic certification or a contempt finding.',
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Garuda Gamana Vrishabha Vahana review', claim: 'Identifies the Devi Mahatme and Brahma-Vishnu-Maheshwara inspiration and its adaptation to Mangaluru locales.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/garuda-gamana-vrishabha-vahana/movie-review/87792018.cms' },
      { kind: 'review', source: 'The News Minute — Garuda Gamana review', claim: 'Describes the film’s Mangaluru rootedness, Kadri temple setting, pili vesha, local language and creator-destroyer mythic framing inside the gangster story.', url: 'https://www.thenewsminute.com/karnataka/garuda-gamana-vrishabha-vahana-review-riveting-film-breakthrough-sandalwood-157802' },
      { kind: 'review', source: 'Indian Express — Garuda Gamana mythology analysis', claim: 'Explicitly reads Shiva, Hari and Brammayya as destroyer, saviour and creator and notes that the holy trinity is reimagined as flawed violent humans.', url: 'https://indianexpress.com/article/entertainment/opinion-entertainment/why-you-should-watch-garuda-gamana-vrishabha-vahana-7648659/' },
      { kind: 'review', source: 'Indian Express — Garuda Gamana contextual review', claim: 'Provides the adversarial reading of Shiva as a brutal gangster while noting the mythological density and Muslim men helping the abandoned child Shiva.', url: 'https://indianexpress.com/article/entertainment/entertainment-others/garuda-gamana-vrishabha-vahana-scrappy-kannada-film-korean-crime-epic-where-to-watch-7718989/lite/' },
    ],
    filmUnderstanding: 'A Kannada gangster tragedy set in Mangaluru in which Shiva, Hari and police officer Brammayya are deliberately written through destroyer-preserver-creator archetypes amid local temple geography, pili vesha and cycles of violence.',
    focus: 'Mangaluru Shiva Hari Brammayya Trimurti Devi Mahatme pili vesha temple sacred imagery gangster violence',
    challenge: 'Using Shiva, Vishnu/Hari and Brahma-derived names and archetypes for murderers and compromised men could shift from serious mythic reinterpretation into degradation of sacred figures.',
    fact: 'The crime story is fictional, but multiple title-specific reviews and the film’s construction explicitly connect its three principal men with Hindu creator-preserver-destroyer mythology.',
    interpretation: 'The film treats myth as a serious cultural grammar embedded in coastal Karnataka, yet the violent human mapping makes sacred regard genuinely contested rather than straightforwardly affirmative.',
    intent: 'No anti-Hindu intent is inferred; the Mixed verdict is based on screen treatment and sacred analogy, not presumed creator motive.',
    probes: {
      'sacred-religious-valence': { status: 'ambiguous', materiality: 'high', summary: 'Hindu creator-preserver-destroyer imagery is structurally central and culturally literate, but those archetypes are mapped onto ruthless gangsters and murder, producing a real sacred-fidelity tension.', evidenceUrls: ['https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/garuda-gamana-vrishabha-vahana/movie-review/87792018.cms', 'https://indianexpress.com/article/entertainment/opinion-entertainment/why-you-should-watch-garuda-gamana-vrishabha-vahana-7648659/', 'https://indianexpress.com/article/entertainment/entertainment-others/garuda-gamana-vrishabha-vahana-scrappy-kannada-film-korean-crime-epic-where-to-watch-7718989/lite/'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Mangaluru Kannada/Tulu texture, Kadri and Mangaladevi geography and pili vesha are lived regional context rather than exotic insertions.', evidenceUrls: ['https://www.thenewsminute.com/karnataka/garuda-gamana-vrishabha-vahana-review-riveting-film-breakthrough-sandalwood-157802'] },
      'community-contempt': { status: 'clear', materiality: 'medium', summary: 'The violence is individual and criminal rather than communal; the film even gives Muslim men a compassionate role in the abandoned child Shiva’s early life.', evidenceUrls: ['https://indianexpress.com/article/entertainment/entertainment-others/garuda-gamana-vrishabha-vahana-scrappy-kannada-film-korean-crime-epic-where-to-watch-7718989/lite/'] },
    },
    counterIndexes: [3],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 2, 3],
    redImpact: 'The sacred-to-gangster mapping is too material to clear away, but the evidence also shows deep regional and mythic literacy rather than simple ridicule; that unresolved valence is exactly why the verdict remains Mixed.',
  }),

  make({
    title: 'Sapta Sagaradaache Ello – Side B',
    year: 2023,
    language: 'Kannada',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bengaluru', 'Love', 'Loss', 'Reviewed neutral'],
    reasons: [
      'The sequel takes responsibility, obsession, sacrifice, harm and the autonomy of the people around Manu seriously while remaining recognisably embedded in Bengaluru and Kannada emotional life.',
      'Its principal argument is romantic and psychological rather than civilizational, sacred or national; Side B therefore remains Reviewed · Neutral instead of converting intense love or local setting into certification.',
    ],
    evidence: [
      { kind: 'review', source: 'Onmanorama — Sapta Sagaradaache Ello Side B review', claim: 'Describes Manu’s post-prison obsession with Priya, Surabhi’s independent personhood and the sequel’s focus on love, loss and dark choices.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2023/11/20/sapta-sagaradaache-ello-side-b-kannada-movie-review-rakshit-shetty.html' },
      { kind: 'review', source: 'Cinema Express — Sapta Sagaradaache Ello Side B review', claim: 'Reviews the Bengaluru-set continuation as an intense journey through love, loss, redemption, crime and changing relationships.', url: 'https://www.cinemaexpress.com/kannada/review/2023/nov/18/sapta-saagaradaache-ello-side-b-movie-reviewan-immersive-journey-through-love-loss-redemption-49656.html' },
      { kind: 'review', source: 'Indian Express — Sapta Sagaradaache Ello Side B review', claim: 'Provides a counter-reading of the love story as clichéd and morally troubling in parts while centring Manu’s obsession and Priya’s separate life.', url: 'https://indianexpress.com/article/entertainment/movie-review/sapta-sagaradaache-ello-side-b-movie-review-its-a-rakshit-shetty-show-but-in-a-superficial-world-9030517/' },
    ],
    filmUnderstanding: 'The second half of a Kannada romantic drama, following Manu after a decade in prison as he remains attached to Priya, enters Surabhi’s life and moves through obsession, revenge, sacrifice and attempted redemption in Bengaluru.',
    focus: 'Bengaluru romance obsession prison redemption Priya Surabhi moral responsibility',
    challenge: 'Sacrifice and devotion could be mistaken for Dharma even when Manu’s obsession, violence and interference in other lives make the moral arc deliberately unstable.',
    fact: 'Side B is original fictional continuation of Side A rather than a biographical, sacred or historical account.',
    interpretation: 'The film has meaningful Social Dharma questions but no sufficiently strong Bharatiya civilizational direction to move beyond neutral review.',
    intent: 'No claim is made that the film endorses Manu’s every action merely because it presents his love sympathetically.',
  }),

  make({
    title: 'K.G.F: Chapter 1',
    year: 2018,
    language: 'Kannada',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 1, localRoots: 4, raksha: 3, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kolar Gold Fields', 'Crime epic', 'Oppression', 'Reviewed neutral'],
    reasons: [
      'The Kolar setting, exploited workers and Rocky’s eventual challenge to a brutal mining order give the film local texture and a limited protection/liberation signal.',
      'Its dominant grammar is nevertheless gangster power, maternal ambition and hero myth-making; as with the already-v2 Chapter 2, those elements are too morally mixed and too weakly civilizational for a certification badge.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — KGF review', claim: 'Reviews Chapter 1 as an elaborate exercise in hero worship built around Rocky’s rise from poverty into feared criminal power and the Kolar conflict.', url: 'https://indianexpress.com/article/entertainment/movie-review/kgf-movie-review-rating-yash-5503903/' },
      { kind: 'review', source: 'Times of India — KGF Chapter 1 preview', claim: 'Describes the fictional period story of Rocky, criminal ascent, oppressed people and conflict at the Kolar Gold Fields.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movies/news/kgf-movie-review-much-fanfare-as-kannadas-biggest-film-releases-tomorrow-kgf-review/articleshow/67176110.cms' },
    ],
    filmUnderstanding: 'A stylised Kannada period crime epic about Rocky’s rise from poverty through the Mumbai underworld and into the violent hierarchy of the Kolar Gold Fields, where enslaved workers live under a tyrannical order.',
    focus: 'Kolar Gold Fields fictional gangster oppression miners Rocky historical framing',
    challenge: 'Rocky’s defence of oppressed miners could be overstated as Raksha while the film’s actual fascination with domination, criminal power and hero worship remains primary.',
    fact: 'The film uses a real Karnataka mining-region name inside a highly stylised fictional criminal history and does not function as a documented history of Kolar Gold Fields.',
    interpretation: 'Worker liberation earns limited positive weight, but gangster aspiration and fictional hero mythology keep the overall civilizational signal neutral.',
    intent: 'No historical-authenticity claim or ideological endorsement of criminal power is inferred beyond the feature’s fictional frame.',
    probes: {
      'historical-claims': { status: 'clear', materiality: 'high', summary: 'The film’s KGF chronology and criminal empire are stylised fiction around a real place name and should not be mistaken for mining history.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/kgf-movie-review-rating-yash-5503903/', 'https://timesofindia.indiatimes.com/entertainment/kannada/movies/news/kgf-movie-review-much-fanfare-as-kannadas-biggest-film-releases-tomorrow-kgf-review/articleshow/67176110.cms'] },
      'regional-context': { status: 'clear', materiality: 'medium', summary: 'The Kolar association gives Karnataka specificity, but the narrative is deliberately mythic crime fiction rather than a regional historical reconstruction.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/kgf-movie-review-rating-yash-5503903/'] },
    },
  }),

  make({
    title: 'Kaatera',
    year: 2023,
    language: 'Kannada',
    status: 'certified',
    sourceBasis: 'true-story',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 3, itihasa: 4, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Land reform', 'Farmers', 'Kaateramma', 'Social Dharma'],
    reasons: [
      'The film roots heroism in protecting cultivators from feudal abuse and enabling land reform, making justice across caste and class a strong Social Dharma and Raksha signal rather than treating rural hierarchy as sacred merely because it is inherited.',
      'Its Holemari/Kaateramma ritual and 1970s Karnataka village culture are treated as living local tradition; criticism of caste oppression therefore operates inside, not outside, a rooted cultural world.',
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Kaatera review', claim: 'Describes the blacksmith hero helping farmers implement the Land Reforms Act against feudal oppression in a 1970s Karnataka village.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/kaatera/etmoviereview/106374484.cms' },
      { kind: 'review', source: 'Bangalore Mirror — Kaatera review', claim: 'Highlights land reform, zamindari, caste discrimination, untouchability and equal treatment as core social concerns.', url: 'https://bangaloremirror.indiatimes.com/entertainment/reviews/kaatera-kannada-movie-review-wholesome-family-entertainer/articleshow/106387306.cms' },
      { kind: 'review', source: 'Cinema Express — Kaatera review', claim: 'Links the drama to the 1974 land-reform context and identifies Holemari as a sacred local ritual honouring Kaateramma.', url: 'https://www.cinemaexpress.com/kannada/review/2023/Dec/30/kaatera-movie-review-darshan-wields-his-finest-weapon-yet-50800.html' },
      { kind: 'interview', source: 'Cinema Express — Darshan on Kaatera', claim: 'Records the lead actor’s statement that the film is based on a real-life incident connected to the 1974 land-reform regime and farmer distress.', url: 'https://www.cinemaexpress.com/kannada/interviews/2023/Dec/28/darshan-my-films-which-are-labelled-mass-have-underlying-layers-50755.html' },
    ],
    filmUnderstanding: 'A Kannada rural action drama inspired by real 1970s land-reform conditions, following a blacksmith who helps tenant farmers resist feudal coercion while the story remains embedded in caste, village festival and Kaateramma-linked custom.',
    focus: '1974 Karnataka land reform Devaraj Urs farmers caste Kaateramma Holemari true incident accuracy',
    challenge: 'A star vehicle may simplify land reform into one-man vigilantism, flatten caste groups into villains and use Kaateramma ritual as ornamental authenticity rather than living sacred tradition.',
    fact: 'The producers and makers identify real 1970s land-reform incidents as inspiration, but Kaatera and the plotted massacre/action arc are cinematic reconstruction rather than a documentary case file.',
    interpretation: 'The film’s anti-discrimination politics are internal Social Dharma, while Kaateramma/Holemari and village culture remain respected sources of local continuity rather than objects of contempt.',
    intent: 'No anti-Hindu or anti-caste-community intent is inferred from criticism of feudal abuse and untouchability; historical compression is recorded separately.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The makers explicitly cite real 1970s incidents and land-reform history while building a commercial fictional hero narrative around that material.', evidenceUrls: ['https://www.cinemaexpress.com/kannada/interviews/2023/Dec/28/darshan-my-films-which-are-labelled-mass-have-underlying-layers-50755.html', 'https://www.cinemaexpress.com/kannada/review/2023/Dec/30/kaatera-movie-review-darshan-wields-his-finest-weapon-yet-50800.html'] },
      'historical-claims': { status: 'finding', materiality: 'medium', summary: 'The 1974 reform context is real but the feature compresses agrarian change into a dramatic village conflict and mass-hero arc.', evidenceUrls: ['https://www.cinemaexpress.com/kannada/review/2023/Dec/30/kaatera-movie-review-darshan-wields-his-finest-weapon-yet-50800.html'] },
      'sacred-religious-valence': { status: 'clear', materiality: 'high', summary: 'Holemari and Kaateramma are presented as meaningful village sacred tradition rather than as superstition to mock or discard.', evidenceUrls: ['https://www.cinemaexpress.com/kannada/review/2023/Dec/30/kaatera-movie-review-darshan-wields-his-finest-weapon-yet-50800.html'] },
      'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film condemns feudal and caste discrimination but the evidence does not show repeated generalization that a whole caste or Hindu community is inherently contemptible.', evidenceUrls: ['https://bangaloremirror.indiatimes.com/entertainment/reviews/kaatera-kannada-movie-review-wholesome-family-entertainer/articleshow/106387306.cms'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Land reform, village caste relations and Kaateramma custom are evaluated specifically within 1970s Karnataka rather than as generic rural India.', evidenceUrls: ['https://www.cinemaexpress.com/kannada/review/2023/Dec/30/kaatera-movie-review-darshan-wields-his-finest-weapon-yet-50800.html'] },
    },
    counterIndexes: [3],
    redOutcome: 'qualified',
    redEvidenceIndexes: [2, 3],
    redImpact: 'The true-incident and star-hero compression limits historical fidelity, but it does not reverse the film’s farmer-protection, anti-discrimination and rooted sacred-cultural signals.',
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'Real land-reform context and incidents are reshaped into a commercial fictional village-action narrative.' }],
  }),

  make({
    title: 'Daredevil Musthafa',
    year: 2023,
    language: 'Kannada',
    status: 'certified',
    sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 3, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Poornachandra Tejaswi', 'Kannada literature', 'Hindu-Muslim', 'Social Dharma'],
    reasons: [
      'The film carries Poornachandra Tejaswi’s Kannada literary world into cinema while confronting Hindu-Muslim prejudice through friendship and shared college life, producing both Parampara and Social Dharma value.',
      'Ganesh Chaturthi/mosque tension is not used to declare either community inferior: both Hindu and Muslim boys are allowed heroism, error and reconciliation, clearing the narrow community-contempt threshold.',
    ],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Daredevil Musthafa review', claim: 'Identifies the Poornachandra Tejaswi adaptation, Hindu-Muslim divide, cricket reconciliation and the film’s extension of the source story’s ending.', url: 'https://www.cinemaexpress.com/kannada/review/2023/may/20/daredevil-musthafa-movie-review-bridging-religious-divides-through-friendship-and-cricket-43645.html' },
      { kind: 'review', source: 'India Today — Daredevil Musthafa review', claim: 'Describes the college boys’ stereotypes about Musthafa, Ganesh Chaturthi and mosque tensions, and the film’s movement beyond religious prejudice.', url: 'https://www.indiatoday.in/movies/reviews/story/daredevil-musthafa-review-this-ode-to-poornachandra-tejaswi-is-a-wonderful-gem-2383206-2023-05-23' },
    ],
    filmUnderstanding: 'A Kannada adaptation of Poornachandra Tejaswi’s story about Hindu college students who initially stereotype a Muslim classmate, Musthafa, before rivalry, cricket and friendship expose the shallowness of communal assumptions.',
    focus: 'Poornachandra Tejaswi adaptation Ganesh Chaturthi mosque Hindu Muslim stereotypes cricket ending changes',
    challenge: 'A communal-harmony story can become false equivalence or flatten one religious community into prejudice while sentimentalising the other, and the film’s altered ending may soften Tejaswi’s source.',
    fact: 'The film openly adapts Tejaswi and extends the source ending; its central Hindu-Muslim tension is fictional literary material rather than a disguised historical incident.',
    interpretation: 'Shared Kannada literary inheritance and reciprocal humanisation across religious lines support Social Dharma without requiring secular erasure of community identity.',
    intent: 'No anti-Hindu or anti-Muslim intent is inferred; criticism is directed at stereotypes and communal suspicion rather than either faith as such.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'medium', summary: 'The film openly adapts Poornachandra Tejaswi but extends and delays the original story’s ending to produce a more explicit reconciliation.', evidenceUrls: ['https://www.cinemaexpress.com/kannada/review/2023/may/20/daredevil-musthafa-movie-review-bridging-religious-divides-through-friendship-and-cricket-43645.html'] },
      'community-contempt': { status: 'clear', materiality: 'high', summary: 'Both Hindu and Muslim boys are individualised and capable of heroism, error and friendship; the story criticises communal stereotyping rather than generalising inferiority to either community.', evidenceUrls: ['https://www.cinemaexpress.com/kannada/review/2023/may/20/daredevil-musthafa-movie-review-bridging-religious-divides-through-friendship-and-cricket-43645.html', 'https://www.indiatoday.in/movies/reviews/story/daredevil-musthafa-review-this-ode-to-poornachandra-tejaswi-is-a-wonderful-gem-2383206-2023-05-23'] },
      'sacred-religious-valence': { status: 'clear', materiality: 'medium', summary: 'Ganesh Chaturthi and mosque conflict are treated as community context and a site of prejudice to overcome, not as an opportunity to ridicule either sacred tradition.', evidenceUrls: ['https://www.indiatoday.in/movies/reviews/story/daredevil-musthafa-review-this-ode-to-poornachandra-tejaswi-is-a-wonderful-gem-2383206-2023-05-23'] },
    },
    counterIndexes: [0],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 1],
    redImpact: 'The source-ending change is retained as an adaptation caveat, but the reciprocal treatment of Hindu and Muslim students and explicit Kannada literary lineage support certification.',
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'The film extends the ending of Poornachandra Tejaswi’s source story to deliver a fuller reconciliation arc.' }],
  }),

  make({
    title: 'Avane Srimannarayana',
    year: 2019,
    language: 'Kannada',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 3, localRoots: 4, raksha: 3, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Kannada pop culture', 'Mythology references', 'Fantasy', 'Reviewed neutral'],
    reasons: [
      'The film draws knowingly on Bhakta Prahlada, Narayana/Narasimha vocabulary and mythological theatre, giving it a real Kannada pop-cultural and inherited-story layer.',
      'Those references function mainly as playful fantasy-adventure machinery around a morally flexible cop and treasure hunt; they are neither contemptuous nor substantial enough by themselves for civilizational certification.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Avane Srimannarayana review', claim: 'Explains the title’s Bhakta Prahlada reference, Narayana’s prophesied-saviour role and the film’s Narasimha allusions within a fantasy western.', url: 'https://indianexpress.com/article/entertainment/movie-review/avane-srimannarayana-movie-review-6186404/' },
      { kind: 'review', source: 'Cinema Express — Avane Srimannarayana review', claim: 'Describes the mythological-play clues, Narayana legend and multiple mythology references inside the fictional Amaravati treasure hunt.', url: 'https://www.cinemaexpress.com/reviews/kannada/2019/dec/27/avane-srimannarayana-movie-review-this-cop-fantasy-thriller-is-a-fun-filled-ride-16249.html' },
      { kind: 'review', source: 'Times of India — Avane Srimannarayana review', claim: 'Reviews the fantasy world as an eclectic genre construction around a quirky cop, feudal villains and missing treasure.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/avane-srimannarayana/movie-review/72988534.cms' },
    ],
    filmUnderstanding: 'A Kannada fantasy-western treasure hunt in fictional Amaravati, following a self-interested cop named Narayana through theatre riddles and pop-cultural references to Bhakta Prahlada, Narasimha and mythic saviour language.',
    focus: 'Bhakta Prahlada Narayana Narasimha mythological theatre Kannada pop culture fantasy sacred representation',
    challenge: 'Religious names and mythological references could be over-scored as Parampara when the film primarily treats them as witty genre intertext and heroic branding.',
    fact: 'The story and Amaravati world are fictional; Bhakta Prahlada and other mythological references are explicit cultural allusions rather than historical or theological claims.',
    interpretation: 'The references are culturally literate and non-contemptuous but remain secondary to fantasy entertainment, supporting neutral review rather than certification.',
    intent: 'No disrespect toward Narayana, Narasimha or Bhakta Prahlada is inferred from playful genre use, and no devotional intent is assumed either.',
    probes: {
      'sacred-religious-valence': { status: 'clear', materiality: 'medium', summary: 'Bhakta Prahlada and Narasimha/Narayana allusions are playful but not presented as ridicule, desecration or collective mockery of devotees.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/avane-srimannarayana-movie-review-6186404/', 'https://www.cinemaexpress.com/reviews/kannada/2019/dec/27/avane-srimannarayana-movie-review-this-cop-fantasy-thriller-is-a-fun-filled-ride-16249.html'] },
    },
  }),

  make({
    title: 'Toby',
    year: 2023,
    language: 'Kannada',
    status: 'mixed',
    sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Coastal Karnataka', 'Maari jatre', 'Maari Gudi', 'Mixed'],
    reasons: [
      'The film is deeply embedded in Kumta/coastal Karnataka and treats Maari jatre, Maari Gudi and local myth as a living symbolic system rather than a tourist spectacle pasted over a generic revenge drama.',
      'Yet the climax deliberately fuses that sacred-folk imagery with Toby’s violent transformation and revenge. The rootedness is strongly affirmative while the deity-to-violent-avenger analogy creates enough sacred-fidelity tension for Mixed / Contested.',
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Toby review', claim: 'Describes Kumta, the opening oracle and escaped sacrificial goat, Maari as Goddess, the church priest and the climax’s blend of local myths, customs and beliefs.', url: 'https://indianexpress.com/article/entertainment/movie-review/toby-movie-review-raj-b-shetty-film-overcomes-a-well-worn-plot-thanks-to-its-exceptional-cast-and-crew-8951470/' },
      { kind: 'review', source: 'Times of India — Toby review', claim: 'Places the story in coastal Karnataka during preparations for Maari jatre and reviews the father-daughter, exploitation and violence arc.', url: 'https://timesofindia.indiatimes.com/entertainment/Kannada/movie-reviews/Toby/movie-review/103059591.cms' },
      { kind: 'review', source: 'Cinema Express — Toby review', claim: 'Calls Maari Gudi an emblematic presence guarding the village and reads the deity’s reverence/fear duality alongside Toby’s character.', url: 'https://www.cinemaexpress.com/kannada/review/2023/aug/26/toby-movie-reviewan-unavoidable-honest-piece-of-art-46979.html' },
      { kind: 'interview', source: 'Cinema Express — Raj B Shetty on Toby source', claim: 'Records that Toby originated in T K Dayanand’s eight-page short story and was substantially expanded for the screen with the writer’s endorsement.', url: 'https://www.cinemaexpress.com/amp/story/kannada/interviews/2023/Aug/24/raj-b-shetty-toby-provided-the-ideal-conduit-for-my-emotions-46910.html' },
    ],
    filmUnderstanding: 'A Kannada revenge drama set around Kumta in coastal Karnataka, adapted from T K Dayanand’s short story and layering an exploited violent man’s relationship with his adopted daughter onto Maari jatre, Maari Gudi and local sacred-folk symbolism.',
    focus: 'T K Dayanand short story Kumta Maari jatre Maari Gudi Goddess oracle sacrificial goat coastal sacred custom adaptation',
    challenge: 'The film may instrumentalise a living village Goddess and festival to sanctify or aestheticise a male revenge fantasy, even if the local texture is otherwise authentic.',
    fact: 'Toby adapts and greatly expands an eight-page short story; the film explicitly places its fictional revenge arc inside coastal Karnataka Maari worship and festival imagery.',
    interpretation: 'The local sacred system is treated with seriousness and narrative centrality, but its fusion with violent revenge creates a genuine sacred-valence qualification rather than clean certification.',
    intent: 'No intent to demean Maari worship or coastal communities is inferred; the Mixed verdict records representational tension in the film itself.',
    probes: {
      'source-adaptation': { status: 'finding', materiality: 'high', summary: 'Raj B Shetty substantially expanded T K Dayanand’s eight-page story into the feature while retaining the core character, making source transformation material to the dossier.', evidenceUrls: ['https://www.cinemaexpress.com/amp/story/kannada/interviews/2023/Aug/24/raj-b-shetty-toby-provided-the-ideal-conduit-for-my-emotions-46910.html'] },
      'sacred-religious-valence': { status: 'ambiguous', materiality: 'high', summary: 'Maari Gudi and Maari jatre are treated as living sacred presence, but the film deliberately parallels the Goddess imagery with Toby’s violent avenging transformation.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/toby-movie-review-raj-b-shetty-film-overcomes-a-well-worn-plot-thanks-to-its-exceptional-cast-and-crew-8951470/', 'https://www.cinemaexpress.com/kannada/review/2023/aug/26/toby-movie-reviewan-unavoidable-honest-piece-of-art-46979.html'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Kumta/coastal Karnataka, village festival and local sacred beliefs are integrated into character and climax rather than displayed as exotic scenery.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/toby-movie-review-raj-b-shetty-film-overcomes-a-well-worn-plot-thanks-to-its-exceptional-cast-and-crew-8951470/', 'https://timesofindia.indiatimes.com/entertainment/Kannada/movie-reviews/Toby/movie-review/103059591.cms'] },
      'community-contempt': { status: 'clear', materiality: 'medium', summary: 'Hindu village belief and the Christian priest are individualised parts of the local world; no religious community is repeatedly generalised as inferior or hateful.', evidenceUrls: ['https://indianexpress.com/article/entertainment/movie-review/toby-movie-review-raj-b-shetty-film-overcomes-a-well-worn-plot-thanks-to-its-exceptional-cast-and-crew-8951470/'] },
    },
    counterIndexes: [0, 2, 3],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 2, 3],
    redImpact: 'Source expansion and the violent Maari analogy are retained as material qualifications. The evidence nevertheless supports genuine coastal rootedness and serious treatment of local sacred tradition, yielding Mixed rather than a contempt downgrade.',
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'An eight-page T K Dayanand story is substantially expanded into the feature’s family, village and sacred-symbolic narrative.' }],
  }),

  make({
    title: 'Hostel Hudugaru Bekagiddare',
    year: 2023,
    language: 'Kannada',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada campus', 'Hostel comedy', 'Pop culture', 'Reviewed neutral'],
    reasons: [
      'The one-night hostel farce is strongly Kannada in comic rhythm, youth culture and cinema cameos, so its regional texture is not in doubt.',
      'But campus absurdity and pop-cultural familiarity do not create a substantive sacred, national or civilizational claim; the disciplined outcome is Reviewed · Neutral.',
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Hostel Hudugaru Bekagiddare review', claim: 'Reviews the Kannada pop-culture comedy as a boys-hostel story unfolding over one chaotic night without a conventional lead protagonist.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/hostel-hudugaru-bekagiddare/movie-review/102021094.cms' },
      { kind: 'review', source: 'The South First — Hostel Hudugaru Bekagiddare review', claim: 'Describes the college-hostel escapades, ensemble humour and youth-facing comic construction.', url: 'https://thesouthfirst.com/entertainment/hostel-hudugaru-bekagiddare-movie-review/' },
    ],
    filmUnderstanding: 'An ensemble Kannada comedy about hostel residents scrambling through one increasingly absurd night after an apparent crisis, built around campus behaviour, meta-cinema and chaotic group dynamics.',
    focus: 'Kannada hostel campus comedy youth culture pop cinema one-night ensemble',
    challenge: 'Strong Kannada audience identification and local humour could be mistaken for civilizational continuity even though the film is primarily anarchic campus entertainment.',
    fact: 'The story is original campus fiction and makes no historical, sacred or true-story claim.',
    interpretation: 'Regional familiarity earns Local Roots credit but is insufficient for a directional Bharatiya certification.',
    intent: 'No broader judgement about Kannada youth, education or social institutions is inferred from a deliberately absurd hostel comedy.',
  }),

  make({
    title: 'Lucia',
    year: 2013,
    language: 'Kannada',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada indie cinema', 'Crowdfunded', 'Dream and reality', 'Reviewed neutral'],
    reasons: [
      'Lucia is important to Kannada film culture as a crowdfunded regional experiment and is grounded in a Bengaluru single-screen worker’s social world rather than a culturally anonymous thriller.',
      'Its core inquiry is psychological—insomnia, aspiration, class, cinema and dream versus reality—so industrial significance and local texture do not by themselves satisfy the civilizational certification threshold.',
    ],
    evidence: [
      { kind: 'review', source: 'Filmibeat / IANS — Lucia review', claim: 'Describes the crowdfunded Kannada film, Bengaluru theatre usher, insomnia, dream pill and nonlinear reality/fantasy construction.', url: 'https://www.filmibeat.com/kannada/reviews/2013/lucia-movie-review-119279.html' },
      { kind: 'review', source: 'New Indian Express — Lucia review', claim: 'Identifies Lucia as the first crowdfunded Kannada film and an experimental mystery around a theatre worker’s insomnia and dream life.', url: 'https://www.newindianexpress.com/cities/bengaluru/2013/Sep/07/too-avant-garde-for-gandhinagar-514229.html' },
    ],
    filmUnderstanding: 'A Kannada psychological thriller about an insomniac Bengaluru theatre usher who takes a dream-inducing pill and becomes trapped between an ordinary life and a fantasy of film stardom.',
    focus: 'Bengaluru theatre usher insomnia crowdfunding Kannada cinema class dream reality',
    challenge: 'Lucia’s landmark status in Kannada independent cinema could lead cultural importance of production history to be confused with positive civilizational content inside the film.',
    fact: 'Lucia is original psychological fiction and its crowd-funded production is historically significant to Kannada cinema, not a historical claim made by the plot.',
    interpretation: 'The film deserves Local Roots and regional-cinema credit but remains substantively neutral on sacred, civilizational and national alignment.',
    intent: 'No civilizational endorsement or attack is inferred from a story about aspiration, class and unstable perception.',
  }),

  make({
    title: 'Sarkari Hi. Pra. Shaale, Kasaragodu',
    year: 2018,
    language: 'Kannada',
    status: 'certified',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 2, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada language', 'Kasaragod', 'School', 'Cultural continuity'],
    reasons: [
      'The threatened Kannada-medium school makes language transmission, children’s education and a border-region community’s right to preserve its linguistic inheritance the actual stakes of the plot.',
      'The conflict is with school closure and insensitive administration, not with Malayalam people as an inferior community, so the film supports Kannada Parampara and Social Dharma without requiring linguistic contempt.',
    ],
    evidence: [
      { kind: 'review', source: 'Filmibeat — Sarkari Hi. Pra. Shaale Kasaragodu review', claim: 'Describes the Kannada-medium school, officials’ closure attempt and the Kasaragod Kannada community’s effort to preserve the school.', url: 'https://www.filmibeat.com/kannada/reviews/2018/sarkari-hi-pra-shaale-kasaragodu-movie-review-rating-great-entertainer-genuine-concern-276654.html' },
      { kind: 'review', source: 'Kannada Filmibeat — critics on Sarkari Hi. Pra. Shaale', claim: 'Collects reviews emphasizing the coastal Kannada flavour, government-school preservation and Kasaragod regional-linguistic concern.', url: 'https://kannada.filmibeat.com/reviews/sarkari-hi-pra-shaale-kasaragodu-critics-review-032942.html' },
    ],
    filmUnderstanding: 'A Kannada children-and-community drama set in Kasaragod, Kerala, where a Kannada-medium government school faces closure and students, parents and allies fight to preserve local-language education.',
    focus: 'Kasaragod Kannada Malayalam language school closure linguistic minority education community portrayal',
    challenge: 'A Kannada-language preservation story in Kerala could slide into anti-Malayalam stereotyping or convert a school dispute into linguistic chauvinism.',
    fact: 'The film is fictional community drama about a Kannada-medium school in the real multilingual border region of Kasaragod.',
    interpretation: 'Language transmission and educational continuity are affirmative Parampara and Social Dharma, while institutional conflict does not require denigrating Malayalam speakers.',
    intent: 'No anti-Malayali intent is inferred; certification rests on preserving Kannada cultural transmission, not claiming one language community is superior.',
    probes: {
      'community-contempt': { status: 'clear', materiality: 'high', summary: 'The identified conflict concerns officials and Kannada-medium school survival; the reviewed evidence does not show recurring generalization that Malayalis or Malayalam speakers are inherently inferior.', evidenceUrls: ['https://www.filmibeat.com/kannada/reviews/2018/sarkari-hi-pra-shaale-kasaragodu-movie-review-rating-great-entertainer-genuine-concern-276654.html', 'https://kannada.filmibeat.com/reviews/sarkari-hi-pra-shaale-kasaragodu-critics-review-032942.html'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Kasaragod’s border-region Kannada identity and school-language question are central, so the film is assessed in that multilingual regional context rather than as generic linguistic nationalism.', evidenceUrls: ['https://kannada.filmibeat.com/reviews/sarkari-hi-pra-shaale-kasaragodu-critics-review-032942.html'] },
    },
  }),

  make({
    title: 'Sri Manjunatha',
    year: 2001,
    language: 'Kannada',
    status: 'certified',
    sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Shiva bhakti', 'Manjunatha', 'Kotilingeshwara', 'Devotional'],
    reasons: [
      'The film is openly hagiographical: Manjunatha’s movement from irreverence toward Shiva bhakti, linga installation, divine testing and salvation treats the sacred as narratively real and morally authoritative.',
      'Its reform episodes—including protection and marriage of Katyayini rather than accepting social coercion—are located inside devotional Dharma, not framed as liberation from Hindu sacred life.',
    ],
    evidence: [
      { kind: 'film', source: 'SGV Digital — authorised Kannada full film', claim: 'Primary film evidence shows Manjunatha’s devotional arc, Shiva’s embodied interventions, linga worship, moral tests and the sacred resolution.', url: 'https://www.youtube.com/watch?v=bP-Vtv9NoUY' },
      { kind: 'primary', source: 'Saregama — Sri Manjunatha Charithe devotional track', claim: 'Official-label material identifies the film’s Shiva/Manjunatha devotional framing and hagiographic musical presentation.', url: 'https://www.youtube.com/watch?v=X1UTx1EDC8k' },
      { kind: 'review', source: 'Wikipedia — Sri Manjunatha film record', claim: 'Records the film as a Kannada-Telugu hagiographical work based on Shiva devotee Bhakta Manjunatha of the Kotilingeshwara tradition and Shiva’s repeated aid to the devotee.', url: 'https://en.wikipedia.org/wiki/Sri_Manjunatha_%28film%29' },
    ],
    filmUnderstanding: 'A Kannada-Telugu devotional hagiography about Manjunatha, an initially irreverent man who becomes a Shiva devotee, builds sacred merit through linga worship and service, and is repeatedly tested and aided by Lord Shiva.',
    focus: 'Bhakta Manjunatha Shiva Kotilingeshwara hagiography linga devotion Katyayini sacred source legend',
    challenge: 'A devotional film can turn later legend into biography and may fold social-reform episodes into hagiography without independent historical verification.',
    fact: 'Sri Manjunatha is hagiographical sacred-tradition cinema rather than a modern documentary biography; the screen explicitly presents Shiva and devotional miracles as part of its sacred narrative world.',
    interpretation: 'Within that declared devotional genre, sacred regard, Parampara and Dharma are unusually strong and the reform elements operate as dharmic action rather than contempt for tradition.',
    intent: 'Certification does not assert empirical proof of miracles or every biographical episode; it records the film’s reverential treatment of its sacred source and devotee tradition.',
    probes: {
      'historical-claims': { status: 'ambiguous', materiality: 'medium', summary: 'The film is a hagiographic legend about a devotee rather than a source-critical modern biography, so historical claims beyond the devotional tradition should be treated cautiously.', evidenceUrls: ['https://en.wikipedia.org/wiki/Sri_Manjunatha_%28film%29'] },
      'sacred-religious-valence': { status: 'clear', materiality: 'high', summary: 'Primary film and official music evidence show consistently reverential Shiva bhakti, linga worship and divine moral authority rather than sacred ridicule.', evidenceUrls: ['https://www.youtube.com/watch?v=bP-Vtv9NoUY', 'https://www.youtube.com/watch?v=X1UTx1EDC8k'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The Manjunatha/Kotilingeshwara devotional frame belongs to a living southern Indian Shiva tradition and is not treated as generic mythological spectacle.', evidenceUrls: ['https://en.wikipedia.org/wiki/Sri_Manjunatha_%28film%29', 'https://www.youtube.com/watch?v=bP-Vtv9NoUY'] },
    },
    counterIndexes: [2],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 2],
    redImpact: 'Hagiographic history remains distinct from verifiable biography, but that Narrative Integrity limit does not weaken the film’s exceptionally clear devotional and sacred-regard orientation.',
    integrityFlags: [{ type: 'historical-claim', status: 'unverified', summary: 'The devotee biography is transmitted through hagiographic sacred tradition and should not be treated as fully source-verified modern history.' }],
  }),

  make({
    title: 'Dollu',
    year: 2022,
    language: 'Kannada',
    status: 'certified',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Dollu Kunitha', 'Folk tradition', 'Shiva', 'Parampara'],
    reasons: [
      'Preserving Dollu Kunitha is the film’s central problem: inherited drumming, village festival, devotion and transmission across generations are treated as living Karnataka tradition threatened by economic migration.',
      'The film also questions exclusion within tradition and seeks a more inclusive route to continuity; that is internal reform in service of survival, not an argument that sacred folk practice is backward or disposable.',
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Dollu review', claim: 'Describes a Dollu Kunitha artist trying to keep an age-old Karnataka folk tradition alive and notes the film’s opening mythological account of the art form.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/dollu/movie-review/93728143.cms' },
      { kind: 'review', source: 'The News Minute — Dollu review', claim: 'Reads the film as a defence of a waning tradition involving drum, dance and devotion while also examining inclusion and migration.', url: 'https://www.thenewsminute.com/karnataka/dollu-review-sagar-puranik-s-debut-champion-folk-and-tradition-lovely-twist-167229' },
      { kind: 'review', source: 'OTTplay — Dollu review', claim: 'Identifies Dollu Kunitha as a generational temple performance for Lord Shiva and describes the struggle to prevent the practice from ending.', url: 'https://www.ottplay.com/amp/review/dollu-movie-review-a-heartwarming-tale-of-inclusivity-and-reviving-a-waning-art-form/f57d46f56c920' },
    ],
    filmUnderstanding: 'A Kannada drama about a young Dollu Kunitha practitioner trying to preserve a village’s inherited Shiva-linked drumming and dance tradition after fellow artists leave for Bengaluru and old exclusions threaten its continuity.',
    focus: 'Dollu Kunitha Shiva temple folk art village festival inclusion migration Karnataka tradition',
    challenge: 'A preservation story could romanticise economically unsustainable practice, while its inclusion critique could either renew tradition or imply that inherited custodianship is inherently unjust.',
    fact: 'The plot is fictional, but Dollu Kunitha is a real Karnataka folk-devotional tradition and the film explicitly links its performance to inherited village and Shiva worship context.',
    interpretation: 'The story’s proposed reform expands participation so the tradition can survive; it strengthens rather than negates Parampara, Sacred Regard and Social Dharma.',
    intent: 'No contempt toward traditional practitioners or urban migrants is inferred; the film explicitly seeks continuity under changed social conditions.',
    probes: {
      'sacred-religious-valence': { status: 'clear', materiality: 'high', summary: 'The folk performance’s service to Lord Shiva and village festival is treated reverentially as a tradition worth preserving.', evidenceUrls: ['https://www.ottplay.com/amp/review/dollu-movie-review-a-heartwarming-tale-of-inclusivity-and-reviving-a-waning-art-form/f57d46f56c920', 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/dollu/movie-review/93728143.cms'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'The film’s subject is specifically a Karnataka folk practice, its village custodians and pressures of migration to Bengaluru.', evidenceUrls: ['https://www.thenewsminute.com/karnataka/dollu-review-sagar-puranik-s-debut-champion-folk-and-tradition-lovely-twist-167229'] },
      'community-contempt': { status: 'clear', materiality: 'medium', summary: 'Criticism of exclusion inside an art tradition is directed at a practice and access question rather than generalized hatred toward a caste or religious community.', evidenceUrls: ['https://www.thenewsminute.com/karnataka/dollu-review-sagar-puranik-s-debut-champion-folk-and-tradition-lovely-twist-167229'] },
    },
  }),

  make({
    title: 'Krantiveera Sangolli Rayanna',
    year: 2012,
    language: 'Kannada',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Sangolli Rayanna', 'Kittur Chennamma', 'Anti-colonial', 'Rashtra'],
    reasons: [
      'The film places Sangolli Rayanna’s loyalty to Kittur, armed resistance to British rule and willingness to die for political freedom at its centre, producing exceptionally strong Rashtra, Raksha and Kannada historical-memory signals.',
      'Heroic staging, compressed chronology and star-cinema action remain historical-fidelity caveats, but they do not erase the underlying remembrance of a documented anti-colonial warrior and Kittur Rani Chennamma.',
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Krantiveera Sangolli Rayanna review', claim: 'Reviews the film as a historical recreation of Rayanna, right-hand man of Kittur Rani Chennamma, and his fight and guerrilla resistance against the British.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/krantiveera-sangolli-rayanna/movie-review/17047277.cms' },
      { kind: 'review', source: 'Filmibeat — Krantiveera Sangolli Rayanna review', claim: 'Describes Rayanna as a freedom fighter, the Kittur conflict, imprisonment, renewed guerrilla struggle and the film’s explicit patriotism/Kannada-memory orientation.', url: 'https://www.filmibeat.com/kannada/reviews/2012/kranthiveera-sangolli-rayanna-review-100817.html' },
    ],
    filmUnderstanding: 'A Kannada historical epic about Sangolli Rayanna, military leader under Kittur Rani Chennamma, his resistance to British power, imprisonment, renewed guerrilla struggle and eventual execution.',
    focus: 'Sangolli Rayanna Kittur Chennamma British guerrilla resistance historical accuracy Kannada memory',
    challenge: 'A heroic star vehicle may compress campaigns, amplify dialogue and action, or project later nationalist language onto an early nineteenth-century regional conflict.',
    fact: 'Sangolli Rayanna, Kittur Rani Chennamma and resistance to British expansion are historical; the feature dramatizes battles, dialogue, chronology and personal episodes for mass cinema.',
    interpretation: 'Those fidelity limits remain separate from the unmistakable anti-colonial duty, protection and historical-memory orientation that supports certification.',
    intent: 'No claim is made that every battle beat or speech is a verbatim historical record; certification is not a substitute for historiography.',
    probes: {
      'historical-claims': { status: 'finding', materiality: 'high', summary: 'The film recreates real people and anti-British conflict through heroic popular cinema, so chronology, dialogue and battle detail require independent historical caution.', evidenceUrls: ['https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/krantiveera-sangolli-rayanna/movie-review/17047277.cms', 'https://www.filmibeat.com/kannada/reviews/2012/kranthiveera-sangolli-rayanna-review-100817.html'] },
      'regional-context': { status: 'clear', materiality: 'high', summary: 'Kittur, Kannada memory and Rayanna’s relationship with Rani Chennamma are integral historical context rather than generic nationalist decoration.', evidenceUrls: ['https://www.filmibeat.com/kannada/reviews/2012/kranthiveera-sangolli-rayanna-review-100817.html'] },
    },
    counterIndexes: [1],
    redOutcome: 'qualified',
    redEvidenceIndexes: [0, 1],
    redImpact: 'Mass-cinema historical compression remains explicit, but no counter-evidence found overturns the film’s strong remembrance of anti-colonial resistance, duty and Kannada historical inheritance.',
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'Real anti-colonial history is rendered through a heroic star vehicle with cinematic compression and invented dialogue.' }],
  }),
];
