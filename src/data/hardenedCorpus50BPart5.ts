import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50BPart5: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Chauthi Koot', year: 2015, language: 'Punjabi', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 3, itihasa: 5, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Punjab 1984', 'Itihasa', 'Civilian life', 'Literary adaptation'],
    reasons: ['The film preserves the fear and ordinary civilian life of 1980s Punjab with exceptional local specificity, making historical memory and Punjabi rootedness central.', 'It depicts civilians trapped between militant coercion and security-force violence rather than offering a simple nationalist or separatist moral, so the political signal remains Mixed / Contested.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Chauthi Koot review', claim: 'Calls the film an authentic recreation of 1980s Punjab where civilians were caught between militants and security forces, and identifies its two Waryam Singh Sandhu source stories.', url: 'https://indianexpress.com/article/entertainment/movie-review/chauthi-koot-movie-review-star-rating-gurvinder-singh-2954929/' },
      { kind: 'interview', source: 'Cannes — Gurvinder Singh on Chauthi Koot', claim: 'The director explains the film’s post-Indira Gandhi Punjab setting and adaptation from two Punjabi short stories.', url: 'https://www.festival-cannes.com/en/2015/un-certain-regard-chauthi-koot-interview-with-gurvinder-singh/' }
    ],
    filmUnderstanding: 'A Punjabi literary adaptation set during the 1980s insurgency, following ordinary people facing fear, militant coercion and counter-insurgency violence.',
    researchFocus: 'Punjab 1984 militancy security forces civilians Waryam Singh Sandhu adaptation', redTeamChallenge: 'A civilian-centred account may be accused of false equivalence or of assigning blame selectively in a contested historical conflict.',
    fact: 'The film adapts two Waryam Singh Sandhu stories and is set against real political violence in Punjab, but its central characters are fictional.', interpretation: 'Its value lies in rooted civilian historical memory, while the contested political framing makes Mixed more accurate than clean certification.', intent: 'No intent to endorse Khalistani militancy or state abuse is inferred from depicting fear caused by both.',
    risks: [{ id: 'source-adaptation', summary: 'The film merges two literary stories into one historical-period narrative.', evidenceIndexes: [0, 1], materiality: 'medium' }, { id: 'historical-claims', summary: 'The real 1980s Punjab conflict frames the fictional civilian story and remains politically contested.', evidenceIndexes: [0, 1], materiality: 'high' }],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'Two Punjabi short stories are merged inside a real historical-conflict setting.' }]
  }),
  makeHardenedBatchFilm({
    title: 'Karsandas Pay & Use', year: 2017, language: 'Gujarati', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Gujarati roots', 'Working class', 'Harmony', 'Romance'],
    reasons: ['The film places working-class dignity, small-town Gujarati life and friendship at the centre of a mainstream romance rather than using them as comic inferiority.', 'Its cross-community romance explicitly argues for harmony and respect across social sections, giving Local Roots and Social Dharma strong positive weight.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Karsandas Pay & Use review', claim: 'Describes the cross-community romance and praises the film’s message of harmony and respect for working-class people.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/karsandas-pay-use/movie-review/58752432.cms' },
      { kind: 'review', source: 'Wikipedia — Karsandas Pay & Use', claim: 'Summarises the Gujarati romantic comedy-drama and its characters.', url: 'https://en.wikipedia.org/wiki/Karsandas_Pay_%26_Use' }
    ],
    filmUnderstanding: 'A Gujarati romance centred on a young man running a pay-and-use facility and the class/community barriers surrounding his relationship.',
    researchFocus: 'Gujarati working class cross-community romance harmony local roots', redTeamChallenge: 'A feel-good harmony message may simplify real community and class conflict.',
    fact: 'The story is fictional.', interpretation: 'The film’s local setting and respect-for-all-sections thesis are clear enough for a positive Social Dharma verdict.', intent: 'No claim is made that the romance resolves structural inequality generally.'
  }),
  makeHardenedBatchFilm({
    title: 'Chhello Show', year: 2021, language: 'Gujarati', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Saurashtra', 'Family', 'Cinema', 'Local roots'],
    reasons: ['The child’s love of cinema is embedded in Saurashtra’s railway, food, family and village life instead of requiring rejection of his Gujarati roots.', 'The film treats material scarcity, friendship and cross-community exchange with warmth, preserving local dignity while celebrating artistic aspiration.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Chhello Show review', claim: 'Reviews the Saurashtra-set childhood story, cinema obsession, family life and nostalgia.', url: 'https://indianexpress.com/article/entertainment/movie-review/chhello-show-movie-review-a-steeped-in-nostalgia-story-about-love-for-cinema-8207992/lite/' },
      { kind: 'review', source: 'The Week — Chhello Show review', claim: 'Describes the Gujarati film as an ode to childhood, cinema and the local world surrounding the boy protagonist.', url: 'https://www.theweek.in/review/movies/2022/10/15/chello-show-review-an-ode-to-childhood-innocence-and-love-for-cinema.html' }
    ],
    filmUnderstanding: 'A Gujarati coming-of-age drama about a Saurashtra boy who becomes fascinated by projected cinema and pursues that passion amid family and village life.',
    researchFocus: 'Saurashtra village family cinema food local roots', redTeamChallenge: 'Cinema aspiration could be framed as escape from local life rather than growth through it.',
    fact: 'The story is fictional/semi-autobiographical in inspiration but not presented as a documentary biography.', interpretation: 'The film’s affection for place and family survives its artistic yearning, supporting Local Roots and Social Dharma.', intent: 'No claim is made that every childhood incident is autobiographical fact.'
  }),
  makeHardenedBatchFilm({
    title: 'Kevi Rite Jaish', year: 2012, language: 'Gujarati', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Gujarati roots', 'Migration', 'Patel community', 'Satire'],
    reasons: ['The film is strongly rooted in contemporary Gujarati middle-class and Patel migration aspirations, making it valuable local social observation.', 'Its satire of the obsession with moving to the United States is neither a strong civilizational affirmation nor broad contempt for Gujarat, so Reviewed · Neutral is more precise.'],
    evidence: [
      { kind: 'review', source: 'Gujarati Film Review — Kevi Rite Jaish', claim: 'Describes the Patel family’s US-migration dream, visa failure and the film’s role in reviving urban Gujarati cinema.', url: 'https://www.gujaratifilmreview.com/kevi-rite-jaish-2012-gujarati-film-review-and-analysis/' },
      { kind: 'review', source: 'Wikipedia — Kevi Rite Jaish', claim: 'Identifies the film as a satire on Patel fascination with migration to the United States and motel-business aspirations.', url: 'https://en.wikipedia.org/wiki/Kevi_Rite_Jaish' }
    ],
    filmUnderstanding: 'A Gujarati family satire about a young Patel man and his father’s determination that he migrate to the United States, centred on visa culture and diaspora aspiration.',
    researchFocus: 'Gujarati Patel migration America visa satire family', redTeamChallenge: 'The migration satire could be read as mockery of Gujarati aspiration or, conversely, as simple celebration of staying home.',
    fact: 'The story is fictional and satirical.', interpretation: 'Its strong local specificity merits review but the cultural direction is intentionally ambivalent.', intent: 'No collective judgement is inferred about all Patels or Gujarati migrants.'
  }),
  makeHardenedBatchFilm({
    title: 'Local Kung Fu', year: 2013, language: 'Assamese', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 2, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Assamese roots', 'Martial arts', 'Comedy', 'Independent cinema'],
    reasons: ['The low-budget film’s Assamese speech, performers and everyday settings create an unusually direct Local Roots signal and helped demonstrate a new independent mode for Assamese cinema.', 'Its core remains action-comedy and martial-arts parody rather than a sustained national, sacred or civilizational argument, so it stays Reviewed · Neutral.'],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Local Kung Fu feature', claim: 'Profiles the film’s home-grown Assamese production, martial-arts performers and extremely low-budget independent approach.', url: 'https://indianexpress.com/article/cities/mumbai/real-action-heroes-2/lite/' },
      { kind: 'review', source: 'Times of India — Assamese film lends comic punch to martial arts', claim: 'Discusses Local Kung Fu’s Assamese action-comedy identity and local production context.', url: 'https://timesofindia.indiatimes.com/entertainment/assamese/assamese-film-lends-comic-punch-to-martial-arts/articleshow/21913172.cms' }
    ],
    filmUnderstanding: 'An independent Assamese martial-arts comedy built with local performers, dialect and settings around a young man’s encounters with fighters and petty criminals.',
    researchFocus: 'Assamese independent film martial arts local performers comedy', redTeamChallenge: 'Celebrating a locally made film should not be confused with a substantive civilizational verdict on its story.',
    fact: 'The story is fictional.', interpretation: 'Local production and cultural specificity are positive but not enough for certification without a stronger moral/civilizational thesis.', intent: 'No broader claim about Assamese society is inferred from comedy characters.'
  }),
  makeHardenedBatchFilm({
    title: 'Mission China', year: 2017, language: 'Assamese', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 3, itihasa: 1, parampara: 1, localRoots: 4, raksha: 3, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Assamese cinema', 'Action', 'Rescue', 'Local industry'],
    reasons: ['The film is a major Assamese-language commercial action production and its rescue/security plot supplies a modest Raksha signal.', 'Available durable evidence is stronger on the film’s industrial/local significance than on a deep civilizational thesis, so Reviewed · Neutral avoids upgrading scale and action into ideology.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — five Northeast films to watch', claim: 'Identifies Mission China as a milestone Assamese action drama and a major local box-office/production event.', url: 'https://indianexpress.com/article/north-east-india/five-films-northeast-you-should-watch-film-making-5008744/lite/' },
      { kind: 'review', source: 'Wikipedia — Mission China', claim: 'Summarises Zubeen Garg’s Assamese action film, its rescue-oriented plot and release context.', url: 'https://en.wikipedia.org/wiki/Mission_China' }
    ],
    filmUnderstanding: 'An Assamese commercial action drama involving a rescue mission and security threat, significant for the scale of its regional-language production.',
    researchFocus: 'Assamese action rescue security regional cinema', redTeamChallenge: 'A military/rescue setup may tempt an automatic Raksha certification even when the film’s cultural thesis is thin.',
    fact: 'The film is fictional commercial action cinema.', interpretation: 'Regional significance and modest protection themes are real, but the evidence does not support a stronger directional verdict.', intent: 'No real security operation is inferred from the plot.'
  }),
  makeHardenedBatchFilm({
    title: 'Kalira Atita', year: 2021, language: 'Odia', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 3, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Odia roots', 'Climate', 'Jagannath', 'Memory'],
    reasons: ['The disappearing Odisha coast, family memory, Jagannath-linked cultural geography and Achyutananda prophecy are woven into the film’s understanding of ecological loss rather than added as decorative folklore.', 'Climate warning is expressed through protection of land, community and inherited memory, giving Local Roots, civilizational continuity and Social Dharma strong positive weight.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Kalira Atita and climate change', claim: 'Explains the Odisha coastal setting, climate-displacement theme and use of Achyutananda Das prophecies and Jagannath/Puri cultural memory.', url: 'https://indianexpress.com/article/lifestyle/art-and-culture/why-iffi-selected-odia-feature-film-kalira-atita-is-a-wake-up-call-to-global-warming-and-its-washing-out-of-lands-people-memories-7155938/' },
      { kind: 'interview', source: 'Times of India — Nila Madhab Panda on Kalira Atita', claim: 'Discusses the film as a climate-change story about vanishing land, people and memory.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/time-to-tell-the-scary-climate-change-story-to-everyone-says-nila-madhab-panda-as-kalira-atita-travels-to-the-chicago-south-asian-film-fest/articleshow/85713557.cms' }
    ],
    filmUnderstanding: 'An Odia climate drama about a man moving through a disappearing coastal landscape where personal loss, ecological change and local prophecy/memory blur together.',
    researchFocus: 'Odisha coast climate Jagannath Achyutananda prophecy displacement', redTeamChallenge: 'Using prophecy and Jagannath-linked imagery in climate fiction could instrumentalise sacred memory or confuse allegory with empirical claim.',
    fact: 'The film is fictional and uses local prophetic/sacred motifs alongside real concerns about coastal climate vulnerability.', interpretation: 'The sacred/local material is treated with seriousness and tied to stewardship rather than ridicule, supporting certification.', intent: 'No scientific claim is inferred from prophecy; climate and sacred meaning are kept conceptually distinct.'
  }),
  makeHardenedBatchFilm({
    title: 'Hello Arsi', year: 2018, language: 'Odia', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Odia roots', 'Industrialisation', 'Displacement', 'Social Dharma'],
    reasons: ['Rourkela and the transition from agrarian to industrial life are central to the film’s exploration of alienation, identity and displacement.', 'Its social critique is locally important but not a clear national, sacred or civilizational affirmation or rejection, so Reviewed · Neutral is the disciplined verdict.'],
    evidence: [
      { kind: 'official', source: 'Times of India — Hello Arsi National Award report', claim: 'Records the Odia film’s National Awards, including Best Feature Film in Odia and screenplay recognition.', url: 'https://timesofindia.indiatimes.com/city/bhubaneswar/odia-film-hello-arsi-wins-big-at-65th-national-film-awards/articleshow/63785182.cms' },
      { kind: 'review', source: 'Wikipedia — Hello Arsi', claim: 'Summarises the Rourkela-set story’s focus on social alienation, industrialisation and displacement.', url: 'https://en.wikipedia.org/wiki/Hello_Arsi' }
    ],
    filmUnderstanding: 'An Odia road/relationship drama set around Rourkela, following two strangers whose conversation reflects industrialisation, displacement, alienation and survival.',
    researchFocus: 'Rourkela industrialisation displacement social alienation Odia', redTeamChallenge: 'A bleak industrialisation critique could be over-read as rejection of development or modern India.',
    fact: 'The story is fictional and socially specific.', interpretation: 'Its local/social concerns are meaningful but do not produce a strong directional Bharatiya verdict.', intent: 'No policy position on industrialisation as a whole is inferred.'
  }),
  makeHardenedBatchFilm({
    title: 'Nirahua Hindustani', year: 2014, language: 'Bhojpuri', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bhojpuri roots', 'Popular cinema', 'Romance', 'Family'],
    reasons: ['The film is unmistakably Bhojpuri popular cinema in language, humour, music and family-romance conventions, giving it a real Local Roots signal.', 'The available evidence does not support a strong sacred, national or civilizational thesis beyond that rooted mainstream identity, so Reviewed · Neutral avoids equating popularity with certification.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Nirahua Hindustani is a hit', claim: 'Documents the film’s strong Bhojpuri theatrical reception and popular-cinema significance.', url: 'https://timesofindia.indiatimes.com/entertainment/bhojpuri/movies/news/nirahua-hindustani-is-a-hit/articleshow/36869049.cms' },
      { kind: 'review', source: 'Wikipedia — Nirahua Hindustani', claim: 'Summarises the Bhojpuri romantic-comedy/action plot and release context.', url: 'https://en.wikipedia.org/wiki/Nirahua_Hindustani' }
    ],
    filmUnderstanding: 'A mainstream Bhojpuri romantic comedy-drama built around a rural/urban romance, family conflict, songs and star-driven popular entertainment.',
    researchFocus: 'Bhojpuri popular cinema family romance local roots', redTeamChallenge: 'Regional-language popularity alone could be overcounted as civilizational alignment.',
    fact: 'The story is fictional popular entertainment.', interpretation: 'Local language/cultural presence is positive but the deeper directional signal is insufficient for certification.', intent: 'No claim is made that commercial success itself is a Bharatiya value.'
  }),
  makeHardenedBatchFilm({
    title: 'Bidesiya', year: 1963, language: 'Bhojpuri', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Bhojpuri roots', 'Folk theatre', 'Migration', 'Parampara'],
    reasons: ['The film carries Bhikhari Thakur’s Bidesia folk-theatre tradition into Bhojpuri cinema, preserving a regional performance lineage built from song, speech, dance and migration experience.', 'Its family-separation and migrant-labour themes arise from the Bhojpuri social world itself, giving Parampara, Local Roots and Social Dharma unusually strong historical depth.'],
    evidence: [
      { kind: 'primary', source: 'IGNCA report on Bidesia folk performance', claim: 'Describes Bidesia as a rural Bihar folk-performance tradition associated with Bhikhari Thakur and its mixture of poetry, song, dance and speech.', url: 'https://ignca.gov.in/PDF_data/Report_by_Uppal_Banerjee_Annexure.pdf' },
      { kind: 'official', source: 'Eagle Bhojpuri Movies — Bidesiya full-film listing', claim: 'Identifies the classic Bhojpuri film as based on Bhikhari Thakur’s Bidesiya and foregrounds migration, family, love and social struggle.', url: 'https://www.youtube.com/watch?v=ZZ8H6PILRVc' }
    ],
    filmUnderstanding: 'A classic Bhojpuri adaptation of Bhikhari Thakur’s Bidesia tradition about migration, separation, love, family and the social costs of men leaving home for work.',
    researchFocus: 'Bhikhari Thakur Bidesia folk theatre migration Bhojpuri family', redTeamChallenge: 'Celebrating a canonical folk form should not hide gender, labour or social tensions inside the migration story.',
    fact: 'The film is an adaptation of an established Bhojpuri folk-theatre/literary tradition rather than an original modern screenplay.', interpretation: 'The adaptation preserves regional artistic memory while confronting separation and labour migration from within that tradition.', intent: 'No claim is made that every feature-film scene reproduces one fixed stage text.',
    risks: [{ id: 'source-adaptation', summary: 'The film translates Bhikhari Thakur’s Bidesia performance/literary tradition into cinema.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),
];
