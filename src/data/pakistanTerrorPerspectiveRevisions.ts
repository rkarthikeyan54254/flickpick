import type { EvidenceItem, SanghiProfile } from '../types/sanghi';
import { fullRecertificationV2Batch05 } from './fullRecertificationV2Batch05';
import { hardenedCorpus50 } from './hardenedCorpus50';
import { hardenedCorpus50D } from './hardenedCorpus50D';
import { hardenedCorpus50E } from './hardenedCorpus50E';

const reviewedAt = '2026-10-03';

function normalizeTitle(value: string) {
  return value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, ' ').trim();
}

function requireProfile(pool: SanghiProfile[], title: string, year: number) {
  const normalized = normalizeTitle(title);
  const profile = pool.find(
    (candidate) => normalizeTitle(candidate.title) === normalized && candidate.year === year,
  );
  if (!profile) throw new Error(`Missing source profile for Pakistan/terror perspective revision: ${title} (${year})`);
  if (!profile.researchDossier) throw new Error(`Missing v2 dossier for Pakistan/terror perspective revision: ${title} (${year})`);
  return profile;
}

interface RevisionSpec {
  source: SanghiProfile;
  evidence: EvidenceItem;
  reason: string;
  fact: string;
  interpretation: string;
  challenge: string;
}

function revise(spec: RevisionSpec): SanghiProfile {
  const dossier = spec.source.researchDossier!;
  const evidenceUrls = spec.evidence.url ? [spec.evidence.url] : [];
  return {
    ...spec.source,
    status: 'not-certified',
    confidence: 'high',
    reviewedAt,
    reviewDepth: 'source-audit',
    auditStatus: 'hardened',
    pakistanTerrorPerspectiveGate: 'fail',
    tags: [...new Set([...spec.source.tags, 'Pakistan/terror perspective hard stop'])],
    reasons: [
      spec.reason,
      'This is a binding hard stop: otherwise-positive Rashtra, Raksha, military-service, Partition-memory or local-cultural signals cannot restore Sanghi Certified status once this perspective gate fails.',
    ],
    evidence: [...spec.source.evidence, spec.evidence],
    researchDossier: {
      ...dossier,
      completedAt: reviewedAt,
      discoveryQueries: [
        ...dossier.discoveryQueries,
        `${spec.source.title} Pakistan terrorist militant perspective humanisation reconciliation rehabilitation moral equivalence`,
      ],
      strongestCounterEvidence: [...dossier.strongestCounterEvidence, spec.evidence],
      redTeam: {
        completed: true,
        strongestChallenge: spec.challenge,
        outcome: 'qualified',
        evidenceUrls,
        verdictImpact: 'The Pakistan/terror perspective hard gate fails. Sanghi Certified is unavailable irrespective of positive Rashtra/Raksha signals elsewhere in the film.',
      },
      factInterpretationIntent: {
        fact: spec.fact,
        interpretation: spec.interpretation,
        intent: 'The hard gate evaluates the completed narrative effect; it does not require an inference about the filmmakers\' private political intent.',
      },
    },
  };
}

const border = requireProfile(hardenedCorpus50, 'Border', 1997);
const chalMeraPutt = requireProfile(hardenedCorpus50, 'Chal Mera Putt', 2019);
const skyForce = requireProfile(hardenedCorpus50D, 'Sky Force', 2025);
const sitaRamam = requireProfile(fullRecertificationV2Batch05, 'Sita Ramam', 2022);
const border2 = requireProfile(hardenedCorpus50E, 'Border 2', 2026);
const bihuAttack = requireProfile(hardenedCorpus50E, 'Bihu Attack', 2026);
const mainVaapasAaunga = requireProfile(hardenedCorpus50E, 'Main Vaapas Aaunga', 2026);
const batwara1947 = requireProfile(hardenedCorpus50E, 'Batwara 1947', 2026);
const ikkis = requireProfile(hardenedCorpus50E, 'Ikkis', 2026);

export const pakistanTerrorPerspectiveRevisions: SanghiProfile[] = [
  revise({
    source: ikkis,
    evidence: {
      kind: 'review',
      source: 'Indian Express — Ikkis review',
      claim: 'Describes the film as deeply anti-war, foregrounding residual connections across borders, bhaichara with Pakistanis and human losses on both sides.',
      url: 'https://indianexpress.com/article/entertainment/movie-review/ikkis-movie-review-agastya-nanda-dharmendra-film-is-a-war-film-thats-deeply-anti-war-10449941/lite/',
    },
    reason: 'The film materially humanises the Pakistani brigadier who killed Arun Khetarpal and frames the later India-Pakistan encounter through shared grief, cross-border empathy and the human cost borne on both sides.',
    fact: 'The finished film intercuts Arun Khetarpal\'s 1971 battle with his father\'s later visit to Pakistan and relationship with the Pakistani officer connected to his son\'s death.',
    interpretation: 'That cross-border moral-equivalence and reconciliation frame is central rather than incidental, so it triggers the hard stop despite the film\'s genuine respect for Khetarpal\'s courage.',
    challenge: 'Can a film remain Sanghi Certified when it honours an Indian martyr but makes empathy with the Pakistani combatant and losses on both sides a central moral thesis?',
  }),
  revise({
    source: border,
    evidence: {
      kind: 'review',
      source: 'Indian Express — Border retrospective',
      claim: 'Highlights the original film\'s enemy-as-brother ending and its invitation to feel the human cost suffered by families on both sides.',
      url: 'https://indianexpress.com/article/entertainment/bollywood/border-pakistan-enemy-and-brother-border-2-trades-90s-empathy-modern-rage-bait-cinema-10507488/',
    },
    reason: 'The film ultimately moves beyond Indian military sacrifice into an explicit enemy-as-brother and shared-suffering message, asking the audience to morally identify with combatants and families on both sides.',
    fact: 'Border strongly celebrates Indian defence at Longewala but closes with an explicit human-cost-of-war appeal that includes Pakistani soldiers and families.',
    interpretation: 'The closing cross-border equivalence is a material narrative proposition and therefore fails the hard gate even though Rashtra and Raksha remain otherwise strong.',
    challenge: 'Does the film\'s overwhelming Indian military viewpoint outweigh its explicit final move toward brotherhood and equivalent grief across the India-Pakistan battle line?',
  }),
  revise({
    source: skyForce,
    evidence: {
      kind: 'review',
      source: 'Indian Express — Sky Force genre analysis',
      claim: 'Says the Pakistani Air Force officer Hussain is deliberately humanised, emotionally complex and ultimately bonds with the Indian protagonist while helping locate Vijaya.',
      url: 'https://indianexpress.com/article/entertainment/bollywood/akshay-kumars-sky-force-surprisingly-subverts-the-military-drama-genre-as-it-dares-to-ask-is-there-an-enemy-at-all-9803907/lite/',
    },
    reason: 'The film deliberately humanises its Pakistani Air Force antagonist, gives him moral and emotional parity with Indian officers, and turns him into a cooperative partner in resolving the Indian protagonist\'s loss.',
    fact: 'The Pakistani officer Hussain is written as intelligent and emotionally complex and later assists Ahuja in the search connected to Vijaya.',
    interpretation: 'That rehabilitation and cross-border bonding are substantive narrative choices, so the perspective hard stop overrides the film\'s otherwise strong IAF-service and sacrifice signals.',
    challenge: 'Can the film certify when its military story explicitly dismantles the enemy category by developing a sympathetic Pakistani officer as a moral counterpart and collaborator?',
  }),
  revise({
    source: sitaRamam,
    evidence: {
      kind: 'review',
      source: 'Hindustan Times — Sita Ramam review',
      claim: 'Describes the film as choosing humanity over religion, boundaries and countries while presenting the India-Pakistan conflict sensitively.',
      url: 'https://www.hindustantimes.com/entertainment/telugu-cinema/sita-ramam-review-dulquer-salmaan-mrunal-thakur-s-romance-drama-is-a-sensitive-depiction-of-indo-pak-conflict-101659703853216.html',
    },
    reason: 'The romance explicitly elevates humanity above borders and countries and uses its India-Pakistan security setting to support a cross-border humanist thesis rather than an India-first national-security conclusion.',
    fact: 'Ram is an Indian Army officer and the film uses Kashmir and India-Pakistan conflict as consequential story material, but its explicit emotional thesis privileges humanity over national boundaries.',
    interpretation: 'Because cross-border humanism materially reframes the security conflict, Army service cannot by itself sustain certification under the hard gate.',
    challenge: 'Does respectful portrayal of an Indian Army officer suffice when the film explicitly subordinates national boundaries to a universalist cross-border humanism?',
  }),
  revise({
    source: border2,
    evidence: {
      kind: 'review',
      source: 'Outlook India — Border 2 review',
      claim: 'Identifies scenes that humanise enemy soldiers through their mothers and through refusal to kill an unarmed Pakistani general.',
      url: 'https://www.outlookindia.com/art-entertainment/movie-review/border-2-review-sunny-deol-works-overtime-to-rescue-a-film-burdened-by-inheritance',
    },
    reason: 'Although less pervasive than the original Border, the film deliberately inserts moral-equivalence scenes that ask viewers to recognise Pakistani soldiers as parallel sons and subjects of conscience across the battle line.',
    fact: 'The film includes a mother explicitly reminding an Indian soldier that Pakistani soldiers are also sons whose mothers pray for them, alongside a refusal to kill an unarmed Pakistani general.',
    interpretation: 'Those scenes are purposeful cross-border humanisation rather than incidental battlefield restraint, triggering the literal hard gate.',
    challenge: 'Should brief but explicit enemy-humanisation scenes be treated as exceptions to an otherwise patriotic film, or as a binding gate failure once the rule is literal?',
  }),
  revise({
    source: bihuAttack,
    evidence: {
      kind: 'review',
      source: 'Times of India — Bihu Attack review',
      claim: 'The story states that the former soldier works to rehabilitate militants and their families before later confronting infiltrating terrorists.',
      url: 'https://timesofindia.indiatimes.com/bollywood/bihu-attack/amp_movie_review/126614260.cms',
    },
    reason: 'The protagonist\'s work rehabilitating militants and their families is part of the film\'s positive moral setup, so later anti-terror action cannot erase the narrative rehabilitation signal.',
    fact: 'Before the Assam terror plot escalates, the disgraced former soldier is depicted working to rehabilitate militants and their families.',
    interpretation: 'Positive militant rehabilitation is itself a hard-stop condition under the clarified rule; subsequent protection of civilians does not restore certification.',
    challenge: 'Can a later anti-terror rescue plot offset the film\'s affirmative rehabilitation of militants and their families?',
  }),
  revise({
    source: mainVaapasAaunga,
    evidence: {
      kind: 'review',
      source: 'Mint — Main Vaapas Aaunga review',
      claim: 'Describes the return to Sargodha in Pakistan as a Partition journey lifted by the idea of shared humanity across the border.',
      url: 'https://www.livemint.com/mint-lounge/art-and-culture/main-vaapas-aaunga-review-diljit-dosanjh-imtiaz-ali-vedang-raina-naseeruddin-shah-sharvari-film/amp-11781270298416.html',
    },
    reason: 'The Partition-memory story makes return to present-day Pakistan and shared humanity across the border central to its emotional resolution, rather than retaining an exclusively Bharatiya victim-and-homeland frame.',
    fact: 'The story follows a family memory of lost Punjab and a later journey back to Sargodha in Pakistan, with the cross-border encounter used to resolve inherited grief.',
    interpretation: 'Shared-humanity reconciliation is a core thematic endpoint, so historical-memory and local-rootedness strengths cannot preserve certification under the hard gate.',
    challenge: 'Can Partition remembrance certify when its emotional resolution depends on a present-day cross-border shared-humanity frame?',
  }),
  revise({
    source: batwara1947,
    evidence: {
      kind: 'review',
      source: 'The Week — Batwara 1947 review',
      claim: 'Describes the Muslim refugee family in Lahore gradually embracing and protecting a Hindu woman and identifies communal harmony and coexistence as the film\'s message.',
      url: 'https://www.theweek.in/review/movies/2026/08/14/batwara-1947-hindi-film-review.html',
    },
    reason: 'The film explicitly constructs its Partition story around cross-religious, post-Partition Pakistani-family empathy and communal coexistence, making shared humanity the proposition rather than a specifically Bharatiya historical-memory verdict.',
    fact: 'A Muslim family displaced from India to Lahore initially rejects and then comes to protect the Hindu woman living in their allotted home.',
    interpretation: 'The Pakistani-family empathy and reconciliation thesis materially triggers the cross-border perspective hard stop despite the film\'s compassion and Partition-memory value.',
    challenge: 'Can a Partition film certify when the central dramatic payoff is empathy with a Pakistani Muslim refugee family and reconciliation across communal lines?',
  }),
  revise({
    source: chalMeraPutt,
    evidence: {
      kind: 'review',
      source: 'The Tribune — Chal Mera Putt review',
      claim: 'Identifies friendship among Indian and Pakistani Punjabi migrants and the cultural connection between Punjabis on both sides of the border as a central theme.',
      url: 'https://www.tribuneindia.com/news/archive/movie-review/chal-mera-putt-a-fresh-take-on-illegal-immigrants-and-foreign-dreams-808277',
    },
    reason: 'The film positively centres Indian-Pakistani Punjabi friendship and shared cross-border cultural identity among migrants; that affinity was previously counted as a certification strength and now falls directly under the hard stop.',
    fact: 'Indian and Pakistani Punjabi migrants live together, share hardship and are presented through a common linguistic-cultural bond in Birmingham.',
    interpretation: 'Regional Punjabi rootedness remains real, but cross-border Pakistani affinity cannot be used to award Sanghi Certified status under the clarified rule.',
    challenge: 'Can strong Punjabi Local Roots certify when the same narrative treats Indian-Pakistani Punjabi friendship and cross-border cultural affinity as a primary virtue?',
  }),
];

if (pakistanTerrorPerspectiveRevisions.length !== 9) {
  throw new Error(`Expected 9 Pakistan/terror perspective revisions, got ${pakistanTerrorPerspectiveRevisions.length}`);
}
