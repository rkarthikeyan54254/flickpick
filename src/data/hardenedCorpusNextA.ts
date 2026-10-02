import type { ResearchSourceBasis, SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

function searches(title: string, focus: string) {
  return [
    `${title} ${focus} source adaptation true story`,
    `${title} religion caste community identity change`,
    `${title} controversy criticism accuracy factual dispute`,
    `${title} director writer interview ${focus}`,
    `${title} audience social media representation controversy`,
  ];
}

function standardDossier(
  title: string,
  sourceBasis: ResearchSourceBasis,
  filmUnderstanding: string,
  focus: string,
  challenge: string,
  fact: string,
  interpretation: string,
  intent: string,
) {
  return buildDossier({
    sourceBasis,
    filmUnderstanding,
    discoveryQueries: searches(title, focus),
    redTeam: {
      completed: true,
      strongestChallenge: challenge,
      outcome: 'cleared',
      evidenceUrls: [],
      verdictImpact: 'The adversarial search did not surface a material contradiction that changes the proposed Culture Check verdict.',
    },
    factInterpretationIntent: { fact, interpretation, intent },
  });
}

const lagaanReview = 'https://www.rogerebert.com/reviews/lagaan-once-upon-a-time-in-india-2002';
const lagaanCounter = 'https://www.researchgate.net/publication/236796785_Lagaan_Once_Upon_a_Time_in_India_review';
const bhagatReview = 'https://timesofindia.indiatimes.com/the-legend-of-bhagat-singh/articleshow/12395943.cms';
const bhagatInterview = 'https://timesofindia.indiatimes.com/making-of-a-legend/articleshow/12197607.cms';
const dangalFact = 'https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/';
const dangalInterview = 'https://www.indiatoday.in/movies/bollywood/story/aamir-khan-dangal-geeta-phogat-coach-pr-sondhi-girish-kulkarni-360263-2016-12-30';
const kanaaReview = 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/kanaa/movie-review/67152622.cms';
const kanaaInterview = 'https://silverscreenindia.com/movies/interviews/if-one-section-of-the-audience-finds-kanaa-preachy-the-other-would-find-reflections-of-reality-in-it-arunraja-kamaraj/';
const aoReview = 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/aayirathil-oruvan/movie-review/5452515.cms';
const aoReview2 = 'https://www.filmibeat.com/tamil/reviews/2010/aayirathil-oruvan-review-180110.html';
const deivaReview = 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/deiva-thirumagal/movie-review/9256649.cms';
const deivaSource = 'https://www.rediff.com/movies/review/south-review-deiva-thirumagal/20110718.htm';
const jerseyReview = 'https://www.cinemaexpress.com/reviews/telugu/2019/apr/20/jersey-review-nani-hits-this-one-out-of-the-park-11134.html';
const jerseyReview2 = 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/jersey/amp_movie_review/68952269.cms';
const vedamReview = 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/vedam-movie-review/movie-review/6015072.cms';
const vedamReview2 = 'https://telugu.filmibeat.com/reviews/telugu-movie-review-vedam-040610.html';
const rudraInterview = 'https://www.hindustantimes.com/regional-movies/rudhramadevi-s-story-stayed-with-me-since-school-gunasekhar/story-EBdVgoWgeJ9WrLoJwFY2aM.html';
const rudraCounter = 'https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09';
const rudraReview = 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/rudhramadevi-movie-review/movie-review/49289505.cms';
const maheshReview = 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/maheshinte-prathikaram/movie-review/50889413.cms';
const pushkaranInterview = 'https://indianexpress.com/article/express-sunday-eye/i-want-to-make-men-less-violent-through-my-stories-syam-pushkaran-kumbalangi-nights-5907510/';
const kumbalangiReview = 'https://indianexpress.com/article/entertainment/movie-review/kumbalangi-nights-movie-review-rating-5576176/lite/';
const kumbalangiAnalysis = 'https://indianexpress.com/article/lifestyle/art-and-culture/kumbalangi-nights-toxic-masculinity-decoded-destroyed-5835436/';

export const hardenedCorpusNextA: SanghiProfile[] = [
  hardenedProfile({
    title: 'Lagaan', year: 2001, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 3, parampara: 3, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Anti-colonial', 'Village solidarity', 'Local roots'],
    reasons: [
      'A drought-hit village unites across caste and religious difference to resist an exploitative colonial tax, giving the film a strong anti-colonial and collective-duty frame.',
      'The cricket contest is a fictional popular fable rather than documentary history; social simplification remains a counter-reading but does not reverse the film’s rooted India-first moral center.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Roger Ebert — Lagaan review', claim: 'Documents the Raj-era drought, punitive lagaan tax and village cricket challenge.', url: lagaanReview },
      { kind: 'review', source: 'Academic critical review of Lagaan', claim: 'Provides an adversarial reading of social and historical simplification.', url: lagaanCounter },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A fictional Raj-era village story using cricket, tax resistance and cross-community solidarity as an anti-colonial fable.',
      discoveryQueries: searches('Lagaan', 'British Raj lagaan cricket village caste'),
      strongestCounterEvidence: [{ kind: 'review', source: 'Academic critical review', claim: 'Challenges the film’s social and historical simplification.', url: lagaanCounter }],
      redTeam: { completed: true, strongestChallenge: 'The film simplifies caste, colonial history and village conflict into a nationalist sports fable.', outcome: 'qualified', evidenceUrls: [lagaanCounter], verdictImpact: 'The simplification is a caveat, not a reversal of the anti-colonial and locally rooted verdict.' },
      factInterpretationIntent: { fact: 'Lagaan is fictional period cinema set under British rule.', interpretation: 'The fictional match functions as anti-colonial village solidarity rather than a literal historical claim.', intent: 'No claim that the cricket match itself historically occurred is inferred.' }
    })
  }),

  hardenedProfile({
    title: 'The Legend of Bhagat Singh', year: 2002, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Bhagat Singh', 'Freedom struggle', 'Anti-colonial'],
    reasons: [
      'The film centers Bhagat Singh’s anti-colonial struggle, sacrifice and commitment to Indian freedom without requiring a neutral view of British rule.',
      'It treats the revolutionary tradition as Indian historical memory while retaining Bhagat Singh’s ideological complexity rather than recasting him as a religious mascot.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — The Legend of Bhagat Singh review', claim: 'Identifies the film as a serious reconstruction of Bhagat Singh’s revolutionary life.', url: bhagatReview },
      { kind: 'interview', source: 'Times of India — Rajkumar Santoshi on making the film', claim: 'Discusses responsibility and historical material behind the biopic.', url: bhagatInterview },
    ],
    researchDossier: standardDossier('The Legend of Bhagat Singh', 'biopic', 'A biographical historical drama about Bhagat Singh, revolutionary politics, imprisonment and execution.', 'Bhagat Singh biography revolutionary ideology', 'Cinematic condensation could turn a politically complex figure into uncomplicated nationalist hagiography.', 'The film is an explicit Bhagat Singh biopic centered on documented freedom-struggle events.', 'Its sympathetic anti-colonial position supports Rashtra and Itihasa without making every scene documentary fact.', 'No material identity substitution or deceptive source concealment surfaced.')
  }),

  hardenedProfile({
    title: 'Dangal', year: 2016, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 2, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Women in sport', 'Family', 'Haryana'],
    reasons: [
      'Women’s sporting excellence, family discipline and representing India internationally reinforce each other in the film rather than requiring rejection of local family roots.',
      'The film materially fictionalizes the national coach and Commonwealth final; those deviations stay as a Narrative Integrity warning rather than being hidden by the positive verdict.'
    ],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'The national coach is fictionalized as an antagonist and important details of Geeta Phogat’s final are altered.', fact: 'Fact-checking records that Mahavir was not locked away and the real final score differed; the real coach disputed the portrayal.', interpretation: 'These changes reduce biographical fidelity without reversing the film’s family, women-in-sport and India themes.', intent: 'Aamir Khan publicly acknowledged fictionalization of the coach character.' }],
    evidence: [
      { kind: 'review', source: 'Indian Express — Dangal fact check', claim: 'Documents the coach, lock-up and final-score differences.', url: dangalFact },
      { kind: 'interview', source: 'India Today — Aamir Khan on the coach', claim: 'Records acknowledgement that the antagonistic coach character was fictionalized.', url: dangalInterview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic', filmUnderstanding: 'A dramatized sports biopic about Mahavir Singh Phogat and daughters Geeta and Babita, mixing documented achievements with invented conflict.',
      discoveryQueries: searches('Dangal', 'Geeta Phogat Mahavir coach real story Commonwealth final'),
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The true-story adaptation contains documented invented and altered scenes.', evidenceUrls: [dangalFact] },
        'real-person-attribution': { status: 'finding', materiality: 'high', summary: 'The fictionalized national coach remained close enough to the real coach to prompt a public objection.', evidenceUrls: [dangalFact, dangalInterview] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The real coach’s objection and recorded match score directly falsify several dramatic details.', evidenceUrls: [dangalFact] },
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express fact check', claim: 'The real record contradicts important dramatic scenes.', url: dangalFact }],
      redTeam: { completed: true, strongestChallenge: 'The film unfairly damages a real coach’s reputation and manufactures decisive-match drama.', outcome: 'qualified', evidenceUrls: [dangalFact], verdictImpact: 'The adaptation warning remains public but does not invert the positive cultural verdict.' },
      factInterpretationIntent: { fact: 'The Phogat sporting story is real while coach behavior and match events were fictionalized.', interpretation: 'The factual changes are independent of the film’s positive women-sport and India-representation themes.', intent: 'Public acknowledgement of fictionalization weighs against treating every dramatic scene as a documentary claim.' }
    })
  }),

  hardenedProfile({
    title: 'Kanaa', year: 2018, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Tamil roots', 'Agriculture', 'Women in sport', 'Rashtra'],
    reasons: [
      'A Tamil farmer’s daughter pursues cricket for India without the film treating village roots or her farming family as baggage to discard.',
      'The director explicitly connects the agricultural strand to his own regional experience, strengthening Local Roots, Social Dharma and Rashtra signals.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Kanaa review', claim: 'Identifies women’s cricket and the farmer/farming crisis as paired concerns.', url: kanaaReview },
      { kind: 'interview', source: 'Silverscreen India — Arunraja Kamaraj interview', claim: 'Connects agriculture and sport to personal experience and the Karur/Kulithalai region.', url: kanaaInterview },
    ],
    researchDossier: standardDossier('Kanaa', 'original-fiction', 'A Tamil sports-and-agrarian drama about a farmer’s daughter pursuing cricket for India during rural economic stress.', 'women cricket agriculture Karur Kulithalai', 'Agrarian distress could be used merely as emotional fuel for a conventional sports-uplift plot.', 'Kanaa is fiction combining women’s cricket with a Tamil farming-family story.', 'Local agricultural roots and national sporting achievement are mutually reinforcing in the film.', 'No material identity substitution, hidden true-story claim or cultural contempt surfaced.')
  }),

  hardenedProfile({
    title: 'Aayirathil Oruvan', year: 2010, language: 'Tamil', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 2, sacredRegard: 3, contemptRisk: 2 },
    tags: ['Tamil history', 'Chola memory', 'Fantasy', 'Mixed'],
    reasons: [
      'Chola/Pandya memory and Tamil identity are taken seriously enough to build an ambitious fantasy world around them rather than used as disposable background.',
      'The surviving Cholas are also portrayed through brutality, ritual extremity and decay, so the civilizational signal is powerful but not uniformly affirmative; Mixed / Contested is the more faithful verdict.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Aayirathil Oruvan review', claim: 'Describes the expedition and lost-Chola historical-fantasy premise.', url: aoReview },
      { kind: 'review', source: 'Filmibeat — Aayirathil Oruvan review', claim: 'Discusses Chola/Pandya historical imagination and the fantastical second half.', url: aoReview2 },
    ],
    researchDossier: standardDossier('Aayirathil Oruvan', 'original-fiction', 'A historical fantasy inventing a surviving Chola remnant and using Chola/Pandya memory for an adventure-horror narrative.', 'Selvaraghavan Chola Pandya fantasy ritual', 'Its grotesque surviving-Chola community could be read as civilizational contempt rather than tragic fantasy.', 'The surviving-Chola premise is overt fantasy.', 'Intense historical memory coexists with disturbing depictions, supporting Mixed rather than automatic certification.', 'No evidence surfaced that the fantasy was marketed as verified Chola history or intended to ridicule Tamil identity as such.')
  }),

  hardenedProfile({
    title: 'Deiva Thirumagal', year: 2011, language: 'Tamil', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Father-daughter', 'Social Dharma', 'Adaptation'],
    reasons: [
      'The father-daughter bond, care and responsibility provide a strong Social Dharma signal, but the film is not substantially about national, sacred or civilizational continuity.',
      'Its core premise closely resembles I Am Sam; that source-origin caveat is recorded transparently without converting it into an ideological judgment.'
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'Release criticism explicitly identified strong I Am Sam inspiration.', fact: 'The intellectually disabled father/custody narrative was compared directly with I Am Sam.', interpretation: 'The overlap is a source-transparency issue rather than a Bharatiya signal.', intent: 'Plagiarism intent is not inferred from resemblance alone.' }],
    evidence: [
      { kind: 'review', source: 'Times of India — Deiva Thirumagal review', claim: 'Centers the father-daughter custody and family conflict.', url: deivaReview },
      { kind: 'review', source: 'Rediff — Deiva Thirumagal review', claim: 'Explicitly notes heavy I Am Sam inspiration.', url: deivaSource },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'fiction-adaptation', filmUnderstanding: 'A Tamil father-daughter custody drama whose setup was widely compared with I Am Sam.', discoveryQueries: searches('Deiva Thirumagal', 'I Am Sam inspiration remake custody'),
      probeOverrides: { 'source-adaptation': { status: 'finding', materiality: 'medium', summary: 'Contemporary reviews identify substantial I Am Sam inspiration.', evidenceUrls: [deivaSource] } },
      redTeam: { completed: true, strongestChallenge: 'The strongest challenge is source originality because contemporary reviewers saw substantial I Am Sam borrowing.', outcome: 'qualified', evidenceUrls: [deivaSource], verdictImpact: 'Source transparency is caveated while the Culture Check verdict remains Neutral.' },
      factInterpretationIntent: { fact: 'The custody premise strongly parallels I Am Sam.', interpretation: 'That source relationship is distinct from the film’s family-care themes.', intent: 'No deliberate concealment claim is made beyond recording the source-origin concern.' }
    })
  }),

  hardenedProfile({
    title: 'Jersey', year: 2019, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 4, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Father-son', 'Cricket', 'Telugu roots'],
    reasons: [
      'A father’s duty, dignity and relationship with his son remain the moral center of the cricket comeback story rather than family being an obstacle to self-realization.',
      'Sporting ambition stays rooted in Telugu family life and Indian cricket, creating positive Social Dharma and Rashtra signals without a true-story claim.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Jersey review', claim: 'Foregrounds failed cricket ambition, fatherhood and the son’s faith in Arjun.', url: jerseyReview },
      { kind: 'review', source: 'Times of India — Jersey review', claim: 'Describes the father-son emotional core and return to cricket.', url: jerseyReview2 },
    ],
    researchDossier: standardDossier('Jersey', 'original-fiction', 'An original Telugu sports drama about a former cricketer, fatherhood, dignity and a late return to professional cricket.', 'Gowtam Tinnanuri cricket true story inspiration', 'The India-cricket signal may be incidental and the film primarily a universal family melodrama.', 'Jersey is presented as fictional sports drama rather than a named-player biopic.', 'Family duty and Indian cricket together create a positive non-political Bharatiya signal.', 'No material source concealment, identity substitution or factual controversy surfaced.')
  }),

  hardenedProfile({
    title: 'Vedam', year: 2010, language: 'Telugu', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Social Dharma', 'Telugu', 'Class', 'Religious prejudice'],
    reasons: [
      'The ensemble argues for human dignity across class, religion and stigma, including a Muslim character facing suspicion and a sex worker denied ordinary respect.',
      'Those themes are not automatically anti-Bharatiya, but the strongest signal is social-humanist rather than distinctly civilizational or sacred, so Mixed / Contested is more precise.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Vedam review', claim: 'Describes intersecting lives and humanism across social backgrounds.', url: vedamReview },
      { kind: 'review', source: 'Filmibeat Telugu — Vedam review', claim: 'Covers the multi-character social and communal/class tensions.', url: vedamReview2 },
    ],
    researchDossier: standardDossier('Vedam', 'original-fiction', 'A Telugu ensemble drama bringing together characters divided by class, profession and religion during a crisis.', 'Krish ensemble Muslim Hindu social prejudice', 'The religious-prejudice strand could generalize Indian or Hindu society rather than criticize particular prejudice.', 'Vedam is fictional ensemble cinema.', 'Criticism of prejudice and hierarchy is Social Dharma rather than presumptively anti-Bharatiya.', 'No material evidence of targeted civilizational contempt surfaced.')
  }),

  hardenedProfile({
    title: 'Rudhramadevi', year: 2015, language: 'Telugu', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kakatiya', 'Telangana history', 'Woman ruler', 'Itihasa'],
    reasons: [
      'The film restores a major Kakatiya queen to popular Telugu/Telangana memory and treats her rule, defence and public duty as affirmative historical inheritance.',
      'Source material for parts of her life is limited and published accounts conflict over adjusted facts, so the positive editorial verdict is held for human adjudication on historical fidelity.'
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'disputed', summary: 'Gunasekhar cites years of research and historian input while contemporary reviews say important facts were adjusted or inaccurate.', fact: 'The film is based on the 13th-century Kakatiya ruler; both research claims and acknowledged dramatization are documented.', interpretation: 'Contested fidelity requires a visible integrity warning without negating Kakatiya memory.', intent: 'Research effort weighs against alleging deliberate falsification but cannot validate every scene.' }],
    evidence: [
      { kind: 'interview', source: 'Hindustan Times — Gunasekhar on research', claim: 'Records years of research and historian/industry inputs.', url: rudraInterview },
      { kind: 'review', source: 'India Today — Rudhramadevi review', claim: 'Records adjusted facts and criticism that fiction can overshadow history.', url: rudraCounter },
      { kind: 'review', source: 'Times of India — Rudhramadevi review', claim: 'Identifies the biopic and possible historical inaccuracies.', url: rudraReview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic', filmUnderstanding: 'A historical biopic of Kakatiya ruler Rudrama Devi using limited medieval source material and extensive reconstruction.', discoveryQueries: searches('Rudhramadevi', 'Gunasekhar Kakatiya historians historical accuracy'),
      probeOverrides: {
        'historical-claims': { status: 'ambiguous', materiality: 'high', summary: 'Filmmaker research claims conflict materially with published criticism of altered history.', evidenceUrls: [rudraInterview, rudraCounter] },
        'creator-source-conflict': { status: 'ambiguous', materiality: 'high', summary: 'The authenticity claim and documented fact adjustment remain difficult to reconcile title-wide.', evidenceUrls: [rudraInterview, rudraCounter] },
        'self-falsification': { status: 'ambiguous', materiality: 'high', summary: 'The strongest contrary evidence is the published record of adjusted historical facts.', evidenceUrls: [rudraCounter] },
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'India Today historical-fidelity critique', claim: 'Says facts were adjusted and fiction can overshadow the historical record.', url: rudraCounter }],
      redTeam: { completed: true, strongestChallenge: 'The film advertises deep research while critics identify adjusted history and surviving source material is limited.', outcome: 'unresolved', evidenceUrls: [rudraInterview, rudraCounter], verdictImpact: 'Bharatiya alignment is positive, but unresolved historical fidelity requires human review.' },
      factInterpretationIntent: { fact: 'Rudrama Devi is historical and the film uses extensive reconstruction.', interpretation: 'Kakatiya memory remains positive while the historical layer is contested.', intent: 'Research effort weighs against alleging deliberate falsification; accuracy uncertainty is not converted into an intent claim.' }
    })
  }),

  hardenedProfile({
    title: 'Maheshinte Prathikaaram', year: 2016, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Idukki', 'Malayalam roots', 'Community', 'Personal dharma'],
    reasons: [
      'Idukki’s people, landscape and small-town relationships are narrative substance rather than interchangeable scenery.',
      'Mahesh moves from wounded masculine pride toward maturity, work and relationship repair, an internal Social Dharma arc rather than civilizational rejection.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Maheshinte Prathikaaram review', claim: 'Describes Idukki, local characters and the humiliation/revenge arc.', url: maheshReview },
      { kind: 'interview', source: 'Indian Express — Syam Pushkaran interview', claim: 'Discusses writing ordinary Malayali men and questioning violent masculine behavior.', url: pushkaranInterview },
    ],
    researchDossier: standardDossier('Maheshinte Prathikaaram', 'original-fiction', 'An Idukki drama about humiliation, masculinity, work, love and the maturation of an ordinary photographer.', 'Idukki Syam Pushkaran masculinity local culture', 'Rejecting performative masculine revenge could be misread as imported ideology instead of local moral development.', 'The film is fictional and strongly situated in Idukki.', 'Its critique of violent masculine pride is internal social reform rather than contempt for Kerala culture.', 'No material source, identity or factual manipulation surfaced.')
  }),

  hardenedProfile({
    title: 'Kumbalangi Nights', year: 2019, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Kerala roots', 'Family', 'Social Dharma', 'Masculinity'],
    reasons: [
      'The film critiques toxic masculinity but rebuilds a broken household around care, responsibility, work and chosen obligations inside a specific Kerala fishing community.',
      'Interfaith and unconventional relationships are lived local realities rather than a vehicle for generalized contempt toward Hindu, Christian or family tradition.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Indian Express — Kumbalangi Nights review', claim: 'Emphasizes the Kumbalangi setting, working-class family and close fit between writing and surroundings.', url: kumbalangiReview },
      { kind: 'review', source: 'Indian Express — toxic masculinity analysis', claim: 'Examines the film’s contrast between patriarchal performance and men learning care and responsibility.', url: kumbalangiAnalysis },
      { kind: 'interview', source: 'Indian Express — Syam Pushkaran interview', claim: 'The writer describes a broader project of making male characters less violent.', url: pushkaranInterview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction', filmUnderstanding: 'A Kerala fishing-village family drama where four brothers move toward care while a controlling patriarchal antagonist exposes performative masculinity.', discoveryQueries: searches('Kumbalangi Nights', 'Syam Pushkaran Kerala family masculinity interfaith'),
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express masculinity analysis', claim: 'The film deliberately challenges conventional masculinity and patriarchal hierarchy.', url: kumbalangiAnalysis }],
      redTeam: { completed: true, strongestChallenge: 'Dismantling the idealized patriarchal family could be misread as hostility to family or inherited norms.', outcome: 'qualified', evidenceUrls: [kumbalangiAnalysis], verdictImpact: 'The actual arc rebuilds family around care and duty rather than rejecting family itself.' },
      factInterpretationIntent: { fact: 'The film is fictional and critiques controlling masculinity within locally specific family structures.', interpretation: 'It distinguishes family based on care from domination, fitting Social Dharma rather than civilizational rejection.', intent: 'No evidence surfaced of intent to ridicule Hindu identity, Kerala culture or family as such.' }
    })
  }),
];
