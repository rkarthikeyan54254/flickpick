import type { ResearchProbeId, SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

function queries(title: string, sourceFocus: string, contextFocus: string) {
  return [
    `${title} ${sourceFocus} source adaptation true story`,
    `${title} religion caste community identity change ${contextFocus}`,
    `${title} controversy criticism accuracy factual dispute`,
    `${title} director writer interview ${contextFocus}`,
    `${title} audience social media representation controversy`,
  ];
}

function probe(
  status: 'clear' | 'finding' | 'ambiguous' | 'not-applicable',
  materiality: 'low' | 'medium' | 'high',
  summary: string,
  evidenceUrls: string[] = [],
) {
  return { status, materiality, summary, evidenceUrls };
}

function clearRedTeam(challenge: string) {
  return {
    completed: true as const,
    strongestChallenge: challenge,
    outcome: 'cleared' as const,
    evidenceUrls: [] as string[],
    verdictImpact: 'The adversarial search did not surface a material contradiction that changes the proposed Culture Check verdict.',
  };
}

export const hardenedCorpusNextB: SanghiProfile[] = [
  hardenedProfile({
    title: 'Thithi', year: 2015, language: 'Kannada', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Mandya', 'Kannada roots', 'Death ritual', 'Rural life'],
    reasons: [
      'The film is built from inside a Mandya village, using local dialect, non-professional villagers and the thithi death ritual as lived social reality rather than as exotic rural scenery.',
      'Its comedy exposes greed, folly and generational conflict without treating Kannada village culture or Hindu mourning practice as contemptible in itself.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'Scroll — making of Thithi', claim: 'The filmmakers describe writing from co-writer Eregowda’s own village, casting local non-professionals and shaping the story around people and incidents known from the place.', url: 'https://scroll.in/reel/800526/the-whole-village-was-a-set-the-making-of-raam-reddys-comedy-thithi' },
      { kind: 'interview', source: 'India Today — Raam Reddy interview', claim: 'Reddy says Eregowda’s village relationship ensured cultural references were correct and that the film was built observationally around local people.', url: 'https://www.indiatoday.in/movies/regional-cinema/story/thithi-raam-reddy-kannada-national-award-winning-film-12175-2016-06-03' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Kannada rural comedy-drama built around a funeral and thithi ritual in Mandya, written from insider knowledge of the village and performed largely by local non-actors.',
      discoveryQueries: queries('Thithi', 'Raam Reddy Eregowda village inspiration funeral ritual', 'Mandya Kannada Hindu thithi ritual'),
      redTeam: clearRedTeam('The strongest challenge is that observational comedy around a death ritual could slide into outsider caricature of rural people or ritual life.'),
      probeOverrides: {
        'regional-context': probe('clear', 'high', 'The co-writer is from the village, local people play versions of themselves, and cultural references were explicitly checked by an insider.', ['https://scroll.in/reel/800526/the-whole-village-was-a-set-the-making-of-raam-reddys-comedy-thithi', 'https://www.indiatoday.in/movies/regional-cinema/story/thithi-raam-reddy-kannada-national-award-winning-film-12175-2016-06-03']),
        'sacred-religious-valence': probe('clear', 'medium', 'The thithi ritual is part of the community’s ordinary social fabric; satire targets human behavior rather than the ritual as inherently foolish.', ['https://scroll.in/reel/800526/the-whole-village-was-a-set-the-making-of-raam-reddys-comedy-thithi']),
      },
      factInterpretationIntent: {
        fact: 'Thithi is fiction drawn from real village observation and performed largely by people from the setting itself.',
        interpretation: 'The insider production method supports a rooted reading even when the film satirizes individual villagers and family conflict.',
        intent: 'No evidence surfaced of an outsider project designed to ridicule Kannada rural or Hindu ritual life.'
      }
    })
  }),

  hardenedProfile({
    title: 'Kirik Party', year: 2016, language: 'Kannada', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada', 'Campus', 'Friendship', 'Reviewed neutral'],
    reasons: [
      'The film is culturally legible Kannada campus cinema with strong local language, college-life and friendship texture, but those elements do not by themselves create a strong civilizational or national signal.',
      'Its main arc is youth, romance, grief and maturation, so Reviewed · Neutral is more precise than stretching the Sanghi Certified badge to ordinary regional familiarity.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Kirik Party review', claim: 'The review describes the engineering-college setting, friendship, romance, grief and self-discovery as the film’s core.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/kirik-party/movie-review/56250634.cms' },
      { kind: 'review', source: 'Kannada Filmibeat — Kirik Party review', claim: 'The Kannada review likewise treats the film primarily as college-life nostalgia and entertainment.', url: 'https://kannada.filmibeat.com/reviews/rakshit-shetty-starrer-kirik-party-review-023325.html' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Kannada engineering-college coming-of-age film about friendship, romance, loss and maturity, with local campus culture but little direct historical, sacred or national content.',
      discoveryQueries: queries('Kirik Party', 'Rishab Shetty Rakshit Shetty campus inspiration', 'Kannada college culture identity'),
      redTeam: clearRedTeam('The strongest challenge is whether strong Kannada cultural familiarity alone should be enough to convert a low-signal coming-of-age film into Sanghi Certified.'),
      factInterpretationIntent: {
        fact: 'The film is fictional campus entertainment and is not presented as a biopic or historical reconstruction.',
        interpretation: 'Regional texture is positive but insufficient by itself for a stronger certification under the declared methodology.',
        intent: 'No material identity, source or factual manipulation surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Natsamrat', year: 2016, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Marathi theatre', 'Kusumagraj', 'Family', 'Parampara'],
    reasons: [
      'The film carries Kusumagraj’s canonical Marathi stage work into cinema while foregrounding theatre language, performance lineage and a specifically Marathi dramatic inheritance.',
      'Its tragedy around ageing parents, children, gratitude and abandonment strongly engages family duty and Social Dharma rather than treating inherited family obligation as meaningless.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Natsamrat review', claim: 'The review identifies the V. V. Shirwadkar play, its major Marathi stage legacy and Ganpat Belvalkar’s family tragedy.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/natsamrat-marathi-movie-review/movie-review/50407305.cms' },
      { kind: 'review', source: 'MarathiStars — Natsamrat review', claim: 'The review explicitly describes the film as an adaptation of V. V. Shirwadkar’s classic Marathi play and emphasizes the theatre tradition it carries forward.', url: 'https://marathistars.com/reviews/natsamrat-marathi-movie-review-nana-patekar-steals-the-show/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'fiction-adaptation',
      filmUnderstanding: 'A film adaptation of Kusumagraj’s classic Marathi play about a retired stage titan whose family relationships collapse after he gives his property to his children.',
      discoveryQueries: queries('Natsamrat 2016', 'Kusumagraj V V Shirwadkar play adaptation differences', 'Marathi theatre family elders'),
      redTeam: clearRedTeam('The strongest challenge is whether cinematic melodrama overwhelms the source play’s complexity and turns family duty into sentimental moralizing.'),
      probeOverrides: {
        'source-adaptation': probe('clear', 'medium', 'The source play is explicit and repeatedly acknowledged rather than concealed.', ['https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/natsamrat-marathi-movie-review/movie-review/50407305.cms', 'https://marathistars.com/reviews/natsamrat-marathi-movie-review-nana-patekar-steals-the-show/']),
        'regional-context': probe('clear', 'high', 'The film directly transmits a celebrated Marathi theatre text and performance tradition into cinema.', ['https://marathistars.com/reviews/natsamrat-marathi-movie-review-nana-patekar-steals-the-show/']),
      },
      factInterpretationIntent: {
        fact: 'Natsamrat is an acknowledged screen adaptation of Kusumagraj’s Marathi play, not a true-story claim.',
        interpretation: 'The adaptation preserves a major Marathi theatrical inheritance while making intergenerational duty central to its tragedy.',
        intent: 'No hidden source, identity substitution or factual manipulation issue surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Godavari', year: 2021, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Godavari', 'Nashik', 'Family', 'Sacred geography'],
    reasons: [
      'The Godavari is treated as civilizational and sacred geography intertwined with Nashik family life, belief, death and renewal rather than as a picturesque background.',
      'The film can criticize pollution, empty practice or the protagonist’s cynicism while still recovering respect for the river and intergenerational family responsibility, making it a strong example of reform within rootedness.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Godavari review', claim: 'The review explicitly calls the river a civilizational lifeline and links belief, four generations of family and Nashik to the story.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/godavari/amp_movie_review/95451654.cms' },
      { kind: 'review', source: 'Filmibeat — Godavari review', claim: 'The review describes the holy river, family crisis, belief and environmental degradation as intertwined themes.', url: 'https://filmibeat.com/marathi-movies/godavari-marathi-film-review-the-river-as-a-metaphor-of-life-itself-342641.html' },
      { kind: 'interview', source: 'Indian Express — Cannes feature on Godavari', claim: 'The feature describes the protagonist’s crisis of faith in family, religion and the river, and his eventual search for meaning.', url: 'https://indianexpress.com/article/express-sunday-eye/cannes-2022-death-is-a-recurring-theme-in-some-of-the-indian-films-at-the-festival-7928463/lite/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Nashik-set Marathi family drama using the sacred Godavari River as both lived geography and a spiritual metaphor for mortality, faith and reconciliation.',
      discoveryQueries: queries('Godavari Marathi film', 'Nikhil Mahajan story faith river inspiration', 'Nashik Hindu sacred river pollution family'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is whether criticism of ritual pollution and a protagonist’s loss of faith turns the sacred-river setting into rejection of religious tradition.', outcome: 'qualified',
        evidenceUrls: ['https://filmibeat.com/marathi-movies/godavari-marathi-film-review-the-river-as-a-metaphor-of-life-itself-342641.html'],
        verdictImpact: 'The film’s arc moves toward recovered belief, respect and relationship; the internal critique strengthens rather than cancels the sacred-regard reading.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Filmibeat — Godavari review', claim: 'The film directly shows river degradation and a protagonist hostile to aspects of belief and family life.', url: 'https://filmibeat.com/marathi-movies/godavari-marathi-film-review-the-river-as-a-metaphor-of-life-itself-342641.html' }],
      probeOverrides: {
        'sacred-religious-valence': probe('finding', 'high', 'The film begins with alienation from religious belief and polluted sacred geography but resolves through renewed respect rather than ridicule.', ['https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/godavari/amp_movie_review/95451654.cms', 'https://filmibeat.com/marathi-movies/godavari-marathi-film-review-the-river-as-a-metaphor-of-life-itself-342641.html']),
        'regional-context': probe('clear', 'high', 'Nashik and the Godavari are narrative characters tied to family livelihood, mortality and sacred geography.', ['https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/godavari/amp_movie_review/95451654.cms']),
      },
      factInterpretationIntent: {
        fact: 'Godavari is fictional family drama set on the river in Nashik and explicitly concerned with faith, pollution, death and reconciliation.',
        interpretation: 'Criticism of degraded practice occurs inside an arc that recovers reverence and family responsibility, supporting certification.',
        intent: 'No evidence surfaced of an intent to demean the Godavari or Hindu sacred geography as such.'
      }
    })
  }),

  hardenedProfile({
    title: 'Pather Panchali', year: 1955, language: 'Bengali', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Bengal', 'Rural life', 'Bibhutibhushan', 'Family'],
    reasons: [
      'The film inhabits rural Bengali family life, landscape, poverty, aspiration and inherited social rhythms with extraordinary specificity rather than using the village as an abstract symbol of a backward India.',
      'The long-standing criticism that it exposed Indian poverty for Western consumption is directly countered by Ray’s own insistence that the poverty is shown ruthlessly rather than prettified, and by the film’s intimate insider attention to family life.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'official', source: 'Satyajit Ray Org — Pather Panchali', claim: 'The Ray archive identifies the film as an adaptation of Bibhutibhushan Bandyopadhyay and documents its rural Bengali family setting and production history.', url: 'https://satyajitray.org/pather-panchali-song-of-the-little-road/' },
      { kind: 'interview', source: 'Satyajit Ray Org — Ray on Ray', claim: 'Ray directly rejects the claim that he romanticized poverty and explains the harsh family behavior and material deprivation he deliberately showed.', url: 'https://satyajitray.org/ray-on-ray/' },
      { kind: 'review', source: 'BFI — Pather Panchali', claim: 'The BFI record notes both the film’s stature and the criticism from some Indians that it highlighted poverty for Western eyes.', url: 'https://www.bfi.org.uk/film/bfbb9ef1-1b2c-58fd-b030-4f50c4827d91/pather-panchali' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'fiction-adaptation',
      filmUnderstanding: 'Ray’s adaptation of Bibhutibhushan Bandyopadhyay’s novel, following an impoverished Bengali Brahmin family through childhood, loss and rural everyday life.',
      discoveryQueries: queries('Pather Panchali', 'Bibhutibhushan novel adaptation Ray poverty criticism', 'Bengali Brahmin village culture poverty porn'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is the historic accusation that the film exported a degrading image of Indian poverty for Western approval.', outcome: 'qualified',
        evidenceUrls: ['https://www.bfi.org.uk/film/bfbb9ef1-1b2c-58fd-b030-4f50c4827d91/pather-panchali', 'https://satyajitray.org/ray-on-ray/'],
        verdictImpact: 'The criticism is historically real, but the film’s insider detail, literary source and Ray’s own account support a rooted humanistic portrayal rather than contempt toward India or Bengal.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'BFI — Pather Panchali', claim: 'The BFI notes the criticism that the film foregrounded Indian poverty for Western viewers.', url: 'https://www.bfi.org.uk/film/bfbb9ef1-1b2c-58fd-b030-4f50c4827d91/pather-panchali' }],
      probeOverrides: {
        'source-adaptation': probe('clear', 'medium', 'The Bibhutibhushan source is explicit and central to the film’s identity.', ['https://satyajitray.org/pather-panchali-song-of-the-little-road/']),
        'regional-context': probe('clear', 'high', 'The film’s rural Bengal detail is built from local observation and a Bengali literary source.', ['https://satyajitray.org/pather-panchali-song-of-the-little-road/']),
        'social-radar': probe('finding', 'high', 'The poverty-for-Western-eyes critique is a material historical challenge and is explicitly retained in the dossier.', ['https://www.bfi.org.uk/film/bfbb9ef1-1b2c-58fd-b030-4f50c4827d91/pather-panchali']),
        'self-falsification': probe('finding', 'high', 'Ray’s own interview directly addresses the strongest charge by pointing to the unsentimental cruelty and deprivation he shows.', ['https://satyajitray.org/ray-on-ray/']),
      },
      factInterpretationIntent: {
        fact: 'Pather Panchali adapts a Bengali novel and depicts severe rural poverty within an intimate family and village setting.',
        interpretation: 'Showing poverty is not itself anti-India; the relevant question is whether the film dehumanizes or exoticizes its people, which the evidence does not support.',
        intent: 'The record supports a humanistic literary adaptation; an intent to demean India for foreign audiences is not established.'
      }
    })
  }),

  hardenedProfile({
    title: 'Aparajito', year: 1956, language: 'Bengali', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Bengal', 'Varanasi', 'Family', 'Apu Trilogy'],
    reasons: [
      'The film moves organically between Varanasi sacred geography, rural Bengal and Kolkata education while keeping family obligation and the mother-son relationship central to Apu’s growth.',
      'Modern education is not framed as requiring contempt for inherited place or family; the tragedy comes precisely from the cost of distance and competing obligations.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'official', source: 'Criterion Collection — Aparajito', claim: 'Criterion documents the Varanasi-to-Kolkata arc, mother-son relationship and adaptation from Bibhutibhushan’s novels.', url: 'https://www.criterion.com/films/28443-aparajito' },
      { kind: 'review', source: 'Criterion Channel — Aparajito', claim: 'The synopsis emphasizes Varanasi, Apu’s education and the deepening moral and family story.', url: 'https://www.criterionchannel.com/aparajito' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'fiction-adaptation',
      filmUnderstanding: 'The second Apu film adapts Bibhutibhushan, following the family from Varanasi to Bengal and Apu toward Kolkata education while his relationship with his mother becomes the emotional center.',
      discoveryQueries: queries('Aparajito 1956', 'Bibhutibhushan novel adaptation Satyajit Ray', 'Varanasi Bengal Brahmin family tradition modern education'),
      redTeam: clearRedTeam('The strongest challenge is whether Apu’s movement toward modern education implicitly treats inherited family and sacred geography as constraints to be escaped.'),
      probeOverrides: {
        'source-adaptation': probe('clear', 'medium', 'Criterion explicitly identifies Bibhutibhushan’s novels as the source.', ['https://www.criterion.com/films/28443-aparajito']),
        'sacred-religious-valence': probe('clear', 'medium', 'Varanasi and the priestly family setting are treated as lived environments rather than ridicule targets.', ['https://www.criterion.com/films/28443-aparajito']),
      },
      factInterpretationIntent: {
        fact: 'Aparajito is literary adaptation, not a claim about a named historical family.',
        interpretation: 'The conflict between education, migration and family duty is presented as tragic complexity rather than a simple tradition-versus-progress rejection.',
        intent: 'No material source or identity manipulation surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Chal Mera Putt', year: 2019, language: 'Punjabi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 2, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Punjabi diaspora', 'Family', 'Language', 'Local roots'],
    reasons: [
      'The film treats Punjabi language, humor, family obligation and migrant solidarity as durable culture carried abroad rather than something discarded after leaving Punjab.',
      'Its Indian-Pakistani Punjabi friendships do not erase national difference; they show a shared linguistic culture among migrants while the characters remain tied to families and responsibilities back home.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Tribune — Chal Mera Putt review', claim: 'The review describes Punjabi migrants in Birmingham, responsibility to families in Punjab and the cross-border Punjabi cultural connection.', url: 'https://www.tribuneindia.com/news/archive/movie-review/chal-mera-putt-a-fresh-take-on-illegal-immigrants-and-foreign-dreams-808277' },
      { kind: 'review', source: 'Times of India — Chal Mera Putt film record', claim: 'The film record identifies the Punjabi-language migrant comedy and its principal cast and setting.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movie-details/chal-mera-putt/movieshow/69959974.cms' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Punjabi diaspora comedy-drama about undocumented migrants in Birmingham supporting families back home and forming friendships across Indian/Pakistani Punjabi lines.',
      discoveryQueries: queries('Chal Mera Putt', 'Janjot Singh migrant Birmingham story inspiration', 'Indian Pakistani Punjabi identity diaspora'),
      redTeam: clearRedTeam('The strongest challenge is whether cross-border Punjabi affinity blurs Indian national identity enough to weaken the Rashtra dimension.'),
      probeOverrides: {
        'regional-context': probe('clear', 'high', 'Punjabi language, humor, family obligation and migrant culture are the film’s core rather than generic diaspora decoration.', ['https://www.tribuneindia.com/news/archive/movie-review/chal-mera-putt-a-fresh-take-on-illegal-immigrants-and-foreign-dreams-808277']),
      },
      factInterpretationIntent: {
        fact: 'The film is fictional diaspora comedy and does not claim to reconstruct a specific migrant case.',
        interpretation: 'Shared Punjabi culture across a border is compatible with a rooted Indian/Punjabi reading when national identity is not denied.',
        intent: 'No source, identity substitution or factual manipulation issue surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Punjab 1984', year: 2014, language: 'Punjabi', status: 'mixed', confidence: 'medium',
    dimensions: { dharma: 2, civilizationalContinuity: 4, rashtra: 2, itihasa: 5, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 4, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Punjab', '1984', 'Sikh history', 'Contested history'],
    reasons: [
      'The film gives serious emotional weight to a Punjabi mother searching for her son amid state violence, militancy and the trauma surrounding 1984, so Sikh/Punjabi suffering is not treated as disposable background.',
      'However, sharply conflicting Sikh-community critiques argue that the militant movement and state/undercover violence are represented selectively; because that historical framing materially affects the meaning of the film, the record remains Mixed / Contested and requires human adjudication.'
    ],
    integrityFlags: [{
      type: 'historical-claim', status: 'disputed',
      summary: 'Community critics dispute whether the film’s composite story fairly represents state violence, militant violence and the Khalistan movement, including the role of alleged undercover “black cat” operations.',
      fact: 'The film uses a fictional mother/son story inspired by the period rather than a single biographical case; contemporary Sikh commentary strongly disputes the completeness and ideological balance of its historical framing.',
      interpretation: 'The dispute is material because viewers may treat the fictional composite as a representation of 1984 Punjab rather than only a private family tragedy.',
      intent: 'The audit does not infer government-propaganda intent as fact; that is recorded as a contested interpretation from critics.'
    }],
    evidence: [
      { kind: 'interview', source: 'Times of India — Diljit Dosanjh on Punjab 1984', claim: 'Dosanjh described the film as inspired by the 1984 period rather than based on one specific person.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movies/exclusive-punjab-1984-interview-with-diljit-dosanjh/articleshow/37235443.cms' },
      { kind: 'review', source: 'Sikh24 — critical review of Punjab 1984', claim: 'The review argues that the film inadequately contextualizes the Khalistan movement and misrepresents the balance of violence and responsibility.', url: 'https://www.sikh24.com/2014/06/27/exclusive-punjab-1984-movie-review/' },
      { kind: 'review', source: 'Naujawani — content and intent of Punjab 1984', claim: 'The commentary questions whether selected factual incidents add up to a historically complete or chronologically fair representation.', url: 'https://naujawani.co.uk/blog/the-content-and-intent-of-punjab-1984/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'history',
      filmUnderstanding: 'A fictional mother-son story situated in the violence and political trauma of Punjab around 1984, using composite characters to represent a deeply contested historical period.',
      discoveryQueries: queries('Punjab 1984 film', '1984 Punjab militancy true story Anurag Singh sources', 'Sikh Khalistan black cats state violence representation'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is that the film’s composite narrative may selectively assign violence and moral legitimacy in a way that materially distorts a contested Sikh political history.', outcome: 'unresolved',
        evidenceUrls: ['https://www.sikh24.com/2014/06/27/exclusive-punjab-1984-movie-review/', 'https://naujawani.co.uk/blog/the-content-and-intent-of-punjab-1984/'],
        verdictImpact: 'The trauma and local-rootedness signals remain real, but the unresolved historical framing is central enough to keep the film Mixed / Contested and in human review.'
      },
      strongestCounterEvidence: [
        { kind: 'review', source: 'Sikh24 critical review', claim: 'The review disputes the film’s representation of the movement and state/undercover violence.', url: 'https://www.sikh24.com/2014/06/27/exclusive-punjab-1984-movie-review/' },
        { kind: 'review', source: 'Naujawani historical critique', claim: 'The commentary argues that selected true incidents do not necessarily produce a complete historical account.', url: 'https://naujawani.co.uk/blog/the-content-and-intent-of-punjab-1984/' },
      ],
      probeOverrides: {
        'historical-claims': probe('ambiguous', 'high', 'The film’s composite historical framing is directly disputed by Sikh-community critics on attribution, context and chronology.', ['https://www.sikh24.com/2014/06/27/exclusive-punjab-1984-movie-review/', 'https://naujawani.co.uk/blog/the-content-and-intent-of-punjab-1984/']),
        'real-person-attribution': probe('clear', 'medium', 'The lead is not presented as a one-to-one real person; the actor described the story as period-inspired rather than a specific biography.', ['https://timesofindia.indiatimes.com/entertainment/punjabi/movies/exclusive-punjab-1984-interview-with-diljit-dosanjh/articleshow/37235443.cms']),
        'creator-source-conflict': probe('ambiguous', 'high', 'The period-inspired framing sits against critics who argue the composite choices themselves create a misleading historical narrative.', ['https://timesofindia.indiatimes.com/entertainment/punjabi/movies/exclusive-punjab-1984-interview-with-diljit-dosanjh/articleshow/37235443.cms', 'https://naujawani.co.uk/blog/the-content-and-intent-of-punjab-1984/']),
        'social-radar': probe('finding', 'high', 'Sikh-community criticism surfaced specific objections about omitted context and portrayal of the movement.', ['https://www.sikh24.com/2014/06/27/exclusive-punjab-1984-movie-review/']),
        'self-falsification': probe('ambiguous', 'high', 'The strongest falsifier of a straightforward sympathetic reading is the detailed claim that the film’s selected incidents create a materially incomplete political picture.', ['https://naujawani.co.uk/blog/the-content-and-intent-of-punjab-1984/']),
      } as Partial<Record<ResearchProbeId, ReturnType<typeof probe>>>,
      factInterpretationIntent: {
        fact: 'Punjab 1984 uses fictional/composite characters inside a real and contested period of state and militant violence.',
        interpretation: 'Its emotional truth about family trauma can coexist with a serious dispute over the political and historical framing.',
        intent: 'Claims that the film functions as state propaganda remain allegations/interpretations and are not asserted as proven intent.'
      }
    })
  }),

  hardenedProfile({
    title: 'Hellaro', year: 2019, language: 'Gujarati', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Gujarati roots', 'Garba', 'Kutch', 'Social Dharma'],
    reasons: [
      'The film’s women resist patriarchal restrictions through garba itself, making a Gujarati folk and devotional form the language of freedom rather than depicting liberation as escape from Gujarati culture.',
      'Its critique of superstition and gender hierarchy is therefore internal to a deeply rooted Kutchi/Gujarati cultural world and fits the methodology’s reform-within-civilization principle.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'Indian Express — importance of garba in Hellaro', claim: 'The feature describes the film as a Kutchi folktale adaptation and explains garba as the women’s central expressive and resistant form.', url: 'https://indianexpress.com/article/express-sunday-eye/dance-like-a-woman-gujarati-film-garba-hellaro-abhishek-shah-national-award-for-best-feature-film-iffi-goa-6107300/' },
      { kind: 'review', source: 'Indian Express — Paint Me a New World', claim: 'The review identifies the Kutch folktale source, patriarchal village structure and the film’s use of garba, while also criticizing its spectacle and melodrama.', url: 'https://indianexpress.com/article/lifestyle/art-and-culture/paint-me-a-new-world-hellaro-gujarati-cinema-abhishek-shah-6156816/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'folklore-sacred-tradition',
      filmUnderstanding: 'A Gujarati film adapting a Kutchi folktale in which village women denied garba discover dance as collective dignity and resistance to patriarchal control.',
      discoveryQueries: queries('Hellaro Gujarati', 'Kutchi folktale adaptation Abhishek Shah garba', 'Amba deity patriarchy Gujarati Hindu tradition'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is whether the film equates village religious practice and superstition so closely with patriarchy that its reformist message becomes contempt for inherited tradition.', outcome: 'qualified',
        evidenceUrls: ['https://indianexpress.com/article/lifestyle/art-and-culture/paint-me-a-new-world-hellaro-gujarati-cinema-abhishek-shah-6156816/'],
        verdictImpact: 'Garba and Gujarati folk culture themselves become the women’s source of agency, so the film critiques control from within the tradition rather than rejecting the tradition wholesale.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express — Paint Me a New World', claim: 'The review criticizes the film’s melodramatic treatment and its transformation of the folktale into spectacle.', url: 'https://indianexpress.com/article/lifestyle/art-and-culture/paint-me-a-new-world-hellaro-gujarati-cinema-abhishek-shah-6156816/' }],
      probeOverrides: {
        'source-adaptation': probe('clear', 'medium', 'The Kutchi folktale basis is openly discussed by the makers and reviewers.', ['https://indianexpress.com/article/express-sunday-eye/dance-like-a-woman-gujarati-film-garba-hellaro-abhishek-shah-national-award-for-best-feature-film-iffi-goa-6107300/']),
        'sacred-religious-valence': probe('finding', 'high', 'The film critiques a superstition tied to a female village deity while treating garba and Gujarati folk expression as affirmative cultural resources.', ['https://indianexpress.com/article/lifestyle/art-and-culture/paint-me-a-new-world-hellaro-gujarati-cinema-abhishek-shah-6156816/']),
        'regional-context': probe('clear', 'high', 'Kutch landscape, Gujarati folk tale and garba are structurally central to the film.', ['https://indianexpress.com/article/express-sunday-eye/dance-like-a-woman-gujarati-film-garba-hellaro-abhishek-shah-national-award-for-best-feature-film-iffi-goa-6107300/']),
      },
      factInterpretationIntent: {
        fact: 'Hellaro is a folktale adaptation set in Kutch, not a claim that one documented village incident occurred exactly as shown.',
        interpretation: 'Using garba to challenge patriarchal control is reform through inherited culture, not automatic rejection of Hindu/Gujarati tradition.',
        intent: 'No evidence surfaced of an intent to demean Gujarati folk or sacred tradition as such.'
      }
    })
  }),

  hardenedProfile({
    title: 'Bulbul Can Sing', year: 2018, language: 'Assamese', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Assam', 'Local roots', 'Krishna folk culture', 'Social Dharma'],
    reasons: [
      'Rima Das sets the film in her own Assamese village and explicitly describes the Krishna/Radha songs and katha references as organic parts of the local culture she grew up with.',
      'The film’s exploration of adolescence, gender expectations and social pressure therefore occurs inside an inhabited Assamese cultural world rather than from an external contemptuous gaze.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'Global Indian Stories — Rima Das on Bulbul Can Sing', claim: 'Das says the film is set in her own village and that Krishna stories, folk songs and katha references come organically from the local culture she grew up with.', url: 'https://globalindianstories.org/index.php/2019/06/21/an-exclusive-tete-a-tete-with-rima-das-about-bulbul-can-sing/' },
      { kind: 'interview', source: 'Platform — Rima Das on Bulbul Can Sing', claim: 'Das describes Chhaygaon as her roots and says she understands the people and culture because she was born and raised there.', url: 'https://www.platform-mag.com/film/rima-das-on-bulbul-can-sing.html' },
      { kind: 'interview', source: 'Indian Express — Rima Das interview', claim: 'The interview situates the film in rural Assam and discusses the director’s continuing relationship with the village and local community.', url: 'https://indianexpress.com/article/entertainment/entertainment-others/we-underestimate-our-audience-rima-das-on-her-latest-film-bulbul-can-sing-6037922/lite/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A coming-of-age drama shot in Rima Das’s own Assamese village, exploring adolescence, friendship, gender norms and loss through locally embedded music, landscape and Krishna/Radha folk references.',
      discoveryQueries: queries('Bulbul Can Sing', 'Rima Das Chhaygaon own village inspiration', 'Assam Krishna Radha folk songs gender sexuality culture'),
      redTeam: clearRedTeam('The strongest challenge is whether criticism of village gender and sexuality norms turns an insider coming-of-age story into a generalized indictment of inherited Assamese culture.'),
      probeOverrides: {
        'sacred-religious-valence': probe('clear', 'high', 'The Krishna/Radha songs and katha references are described by the director as organic inherited local culture rather than irony or mockery.', ['https://globalindianstories.org/index.php/2019/06/21/an-exclusive-tete-a-tete-with-rima-das-about-bulbul-can-sing/']),
        'regional-context': probe('clear', 'high', 'The director was born and raised in the village where the film is set and explicitly identifies the people and culture as her roots.', ['https://www.platform-mag.com/film/rima-das-on-bulbul-can-sing.html']),
      },
      factInterpretationIntent: {
        fact: 'The film is fictional but built from the director’s own village, local teenagers, landscape and cultural references.',
        interpretation: 'Its social critique comes from within local life and coexists with organic sacred and folk continuity, supporting certification.',
        intent: 'No evidence surfaced of an outsider or contempt-driven attempt to denigrate Assamese or Hindu cultural life.'
      }
    })
  }),

  hardenedProfile({
    title: 'Pratikshya', year: 2022, language: 'Odia', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 2, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Odia roots', 'Father-son', 'Family', 'Literary adaptation'],
    reasons: [
      'The film centers an Odia middle-class family and the morally uncomfortable obligations between an unemployed son and his terminally ill father, giving family duty real weight without sentimental simplification.',
      'Its acknowledged source in Gourahari Das’s short story and its rooted Odia social setting make regional literary continuity part of the film rather than an afterthought.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'official', source: 'Press Information Bureau / IFFI — Pratikshya', claim: 'PIB identifies the film as inspired by a Gourahari Das short story and summarizes its father-son, illness, employment and family-debt conflict.', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=1878242&lang=2&reg=48' },
      { kind: 'review', source: 'Orissa Post — Pratikshya review', claim: 'The review describes the film as an Odia middle-class family story adapted from Bapa and focused on the father-son relationship.', url: 'https://www.orissapost.com/pratikshya-a-reminder-of-love/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'fiction-adaptation',
      filmUnderstanding: 'An Odia family drama inspired by Gourahari Das’s short story, following an unemployed son whose father’s terminal illness intersects with debt and compassionate-appointment rules.',
      discoveryQueries: queries('Pratikshya Odia 2022', 'Gourahari Das Bapa short story adaptation', 'Odia middle class father son family'),
      redTeam: clearRedTeam('The strongest challenge is whether the son’s morally troubling thoughts around compassionate employment undermine rather than deepen the film’s family-duty signal.'),
      probeOverrides: {
        'source-adaptation': probe('clear', 'medium', 'The Gourahari Das short-story inspiration is publicly and officially acknowledged.', ['https://www.pib.gov.in/PressReleasePage.aspx?PRID=1878242&lang=2&reg=48']),
        'regional-context': probe('clear', 'high', 'The film is explicitly framed through an Odia middle-class family and an Odia literary source.', ['https://www.pib.gov.in/PressReleasePage.aspx?PRID=1878242&lang=2&reg=48']),
      },
      factInterpretationIntent: {
        fact: 'Pratikshya is an acknowledged literary adaptation and does not claim to be a true story about a named family.',
        interpretation: 'The protagonist’s moral conflict makes family obligation more serious rather than negating Social Dharma.',
        intent: 'No hidden source, identity substitution or factual controversy surfaced in the audit.'
      }
    })
  }),
];
