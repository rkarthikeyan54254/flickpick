import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const hanuMan = 'https://indianexpress.com/article/entertainment/telugu/hanu-man-director-prasanth-varma-on-being-cautious-about-not-hurting-any-sentiments-this-is-not-a-religious-or-a-propaganda-film-its-a-superhero-film-9103317/';
const kalki = 'https://indianexpress.com/article/entertainment/telugu/kalki-2898-ad-director-nag-ashwin-discusses-film-connection-mahabharata-distance-time-9182359/';
const kalkiCharacters = 'https://indianexpress.com/article/entertainment/telugu/why-mahabharats-ashwatthama-and-karna-are-the-heroes-of-kalki-2898-ad-nag-ashwin-9434188/';
const karthikeya = 'https://www.cinemaexpress.com/telugu/interviews/2022/Aug/22/karthik-gattamneni-interview-for-karthikeya-2-33975.html';
const kantara = 'https://www.hindustantimes.com/htcity/cinema/rishab-shetty-reacts-to-people-making-reels-on-daiva-ritual-after-kantara-chapter-1-its-hurting-the-sentiments-101760717346408-amp.html';
const greatKitchen = 'https://www.telegraphindia.com/entertainment/director-jeo-baby-on-the-great-indian-kitchen/cid/1813047';
const malikappuram = 'https://www.onmanorama.com/entertainment/entertainment-news/2022/12/15/malikappuram-film-trailer-release-ayyappa-devotees-dedication.amp.html';
const flood2018 = 'https://www.indiatoday.in/movies/regional-cinema/story/jude-anthany-joseph-says-2018-taught-me-humanity-and-the-power-of-human-emotions-i-exclusive-2380397-2023-05-17';
const floodCraft = 'https://timesofindia.indiatimes.com/entertainment/malayalam/movies/news/asif-ali-tovino-stood-in-water-for-days-to-shoot-2018-jude-anthany-joseph/articleshow/95431488.cms';
const charlie = 'https://kannada.filmibeat.com/reviews/rakshit-shetty-starrer-777-charlie-movie-review-and-rating-058632.html';
const kgf = 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/k-g-f-chapter-2/movie-review/90832069.cms';

function dossier(sourceBasis: Parameters<typeof buildDossier>[0]['sourceBasis'], filmUnderstanding: string, queries: string[], redTeamChallenge: string, outcome: 'cleared' | 'qualified', urls: string[], fact: string, interpretation: string) {
  return buildDossier({
    sourceBasis,
    filmUnderstanding,
    discoveryQueries: queries,
    redTeam: { completed: true, strongestChallenge: redTeamChallenge, outcome, evidenceUrls: urls, verdictImpact: outcome === 'cleared' ? 'The challenge does not defeat the proposed verdict.' : 'The challenge is retained as a visible qualification but does not require a different verdict.' },
    factInterpretationIntent: { fact, interpretation, intent: 'No hostile or deceptive intent is inferred beyond what the cited record establishes.' },
  });
}

export const fullRecertificationV2Batch04: SanghiProfile[] = [
  hardenedProfile({
    title: 'Hanu-Man', year: 2024, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 4, raksha: 2, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Dharma','Hanuman','Sacred regard'], reasons: ['Hanuman bhakti is structurally central to the hero’s power and ethical transformation.', 'The director explicitly described an intention to introduce younger audiences to Hanuman while avoiding disrespect to faith.'], integrityFlags: [],
    evidence: [{ kind: 'interview', source: 'Indian Express — Prasanth Varma interview', claim: 'Varma says the film aims to make younger audiences aware of Hanuman and was made cautiously so as not to hurt religious sentiment.', url: hanuMan }],
    researchDossier: dossier('folklore-sacred-tradition','A Telugu superhero fantasy whose fictional hero receives Hanuman-linked power and grows into responsibility through explicitly devotional imagery.',['Hanu-Man source Hanuman tradition','Hanu-Man religious sentiment interview','Hanu-Man Hindu sacred representation','Hanu-Man controversy factual claims','Hanu-Man Prasanth Varma intent'],'Superhero commercialization could reduce sacred material to spectacle.','cleared',[hanuMan],'The director publicly frames Hanuman awareness and respectful treatment as explicit goals.','The finished premise and creator record support strong sacred regard rather than merely decorative mythology.')
  }),
  hardenedProfile({
    title: 'Kalki 2898 AD', year: 2024, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 5, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Mahabharata','Kalki','Civilizational continuity'], reasons: ['The film deliberately extends Mahabharata characters and Kalki cosmology into an Indian futuristic world.', 'Nag Ashwin explicitly describes the story as spanning from the Mahabharata to 2898 while trying to keep the future recognizably Indian.'], integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The film is speculative continuation, not a claim to reproduce scripture literally.' }],
    evidence: [{ kind: 'interview', source: 'Indian Express — Nag Ashwin on Mahabharata connection', claim: 'Ashwin says the film starts in the Mahabharata, spans 6,000 years and was designed to remain Indian.', url: kalki }, { kind: 'interview', source: 'Indian Express — Karna and Ashwatthama', claim: 'Ashwin explains his interpretive use of Karna and Ashwatthama as redemption arcs in the current yuga.', url: kalkiCharacters }],
    researchDossier: dossier('folklore-sacred-tradition','A dystopian science-fiction continuation drawing directly on Mahabharata figures, yuga cosmology and the Kalki avatar.',['Kalki 2898 AD Mahabharata source','Kalki sacred representation','Kalki Karna Ashwatthama adaptation','Kalki mythology criticism','Nag Ashwin interview Kalki'],'Speculative changes to epic characters could be mistaken for scriptural claims.','cleared',[kalki,kalkiCharacters],'The director openly presents the work as speculative continuation inspired by epic material.','Creative extension is transparent and the sacred/civilizational framework is affirmative rather than contemptuous.')
  }),
  hardenedProfile({
    title: 'Karthikeya 2', year: 2022, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 4, raksha: 1, socialDharma: 2, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Krishna','Dwarka','Dharma'], reasons: ['Sri Krishna, Dwarka and sacred geography are treated as meaningful foundations for the adventure rather than as superstition to be debunked.', 'The production record describes location and tradition research used to connect the fictional mystery to Krishna-linked geography.'], integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'Adventure claims are fictionalized and should not be presented as archaeological proof.' }],
    evidence: [{ kind: 'interview', source: 'Cinema Express — Karthik Gattamneni', claim: 'Gattamneni discusses research connecting Dwarka, Govardhan and other locations to the Krishna narrative.', url: karthikeya }],
    researchDossier: dossier('folklore-sacred-tradition','A contemporary mystery-adventure built around Krishna, Dwarka and inherited sacred geography.',['Karthikeya 2 Krishna source','Karthikeya 2 Dwarka research','Karthikeya 2 sacred representation','Karthikeya 2 archaeology claims','Karthikeya 2 interview'],'The film can blur fictional adventure with archaeological certainty.','qualified',[karthikeya],'The makers researched Krishna-linked locations for a fictional adventure.','Narrative-integrity caution about proof claims remains separate from the strongly affirmative sacred treatment.')
  }),
  hardenedProfile({
    title: 'Kantara', year: 2022, language: 'Kannada', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 3, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Daiva','Parampara','Local roots'], reasons: ['Daiva worship, sacred land and inherited ritual are ontologically real within the story and drive its moral resolution.', 'Rishab Shetty’s later public comments explicitly describe Daiva as sacred family worship and object to its trivialization.'], integrityFlags: [],
    evidence: [{ kind: 'interview', source: 'Hindustan Times — Rishab Shetty on Daiva', claim: 'Shetty says his family worships Daiva and criticizes viral imitation of the ritual as disrespectful to regional belief.', url: kantara }],
    researchDossier: dossier('folklore-sacred-tradition','A Kannada folk drama rooted in coastal Karnataka land conflict, Bhoota/Daiva worship and inherited ritual obligation.',['Kantara Daiva source tradition','Kantara Bhoota Kola sacred regard','Kantara community representation','Kantara land conflict','Rishab Shetty Daiva interview'],'Commercial success and spectacle could encourage outsiders to flatten a living ritual into entertainment.','cleared',[kantara],'Shetty explicitly treats Daiva worship as sacred and locally rooted.','The film’s narrative gives the sacred tradition agency and authority rather than treating it as exotic decoration.')
  }),
  hardenedProfile({
    title: 'The Great Indian Kitchen', year: 2021, language: 'Malayalam', status: 'not-certified', confidence: 'high',
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: null, socialDharma: 5, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Social Dharma','Sabarimala','Sacred-regard friction'], reasons: ['The film’s social critique of domestic patriarchy is substantial and legitimate, but inherited Hindu purity practice and Sabarimala-linked observance are used predominantly as mechanisms of oppression in the protagonist’s moral arc.', 'Under an explicitly Bharatiya certification, strong Social Dharma does not by itself offset persistently weak sacred regard.'], integrityFlags: [],
    evidence: [{ kind: 'interview', source: 'Telegraph India — Jeo Baby interview', claim: 'Jeo Baby says women’s rights, menstrual impurity norms and the Sabarimala issue were concerns intentionally incorporated into the film.', url: greatKitchen }],
    researchDossier: dossier('original-fiction','A Malayalam domestic drama using household labor, menstrual purity and Sabarimala observance to critique patriarchy.',['Great Indian Kitchen Sabarimala interview','Great Indian Kitchen Hindu ritual representation','Great Indian Kitchen patriarchy creator intent','Great Indian Kitchen community contempt','Jeo Baby interview'],'The film can be read as internal social reform rather than rejection of Hindu civilisation.','qualified',[greatKitchen],'The director intentionally connected the domestic story to menstrual impurity norms and Sabarimala.','The reformist defence is recorded, but the film’s dominant treatment of inherited sacred practice remains below this certification’s sacred-regard threshold.')
  }),
  hardenedProfile({
    title: 'Malikappuram', year: 2022, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: null, socialDharma: 2, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Ayyappa','Sabarimala','Devotion'], reasons: ['A child’s Ayyappa devotion and Sabarimala pilgrimage are the emotional and narrative centre.', 'The film approaches faith from within a devotional worldview, and its lead publicly described it as a dedication to Ayyappa devotees.'], integrityFlags: [],
    evidence: [{ kind: 'interview', source: 'Onmanorama — Malikappuram dedication', claim: 'Unni Mukundan described the film as a dedication to Ayyappa devotees.', url: malikappuram }],
    researchDossier: dossier('folklore-sacred-tradition','A Malayalam devotional drama centred on a child’s wish to undertake the Sabarimala pilgrimage and her relationship to Ayyappa faith.',['Malikappuram Ayyappa devotion','Malikappuram Sabarimala tradition','Malikappuram sacred representation','Malikappuram controversy','Unni Mukundan dedication'],'A devotional framing could simplify social controversies around Sabarimala.','cleared',[malikappuram],'The public production framing explicitly dedicates the work to Ayyappa devotees.','The certification concerns the film’s affirmative sacred treatment; broader policy disputes do not negate that signal.')
  }),
  hardenedProfile({
    title: '2018', year: 2023, language: 'Malayalam', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kerala','Solidarity','Floods'], reasons: ['The film’s strongest signal is local solidarity and ordinary rescue across communities during the Kerala floods.', 'That is a meaningful Social Dharma value, but the film is not primarily a Hindu-civilizational or national-identity work, so Neutral is the disciplined outcome.'], integrityFlags: [{ type: 'source-fidelity', status: 'verified', summary: 'The director describes the characters as fictional representations synthesized from many rescue stories rather than literal portraits of particular people.' }],
    evidence: [{ kind: 'interview', source: 'India Today — Jude Anthany Joseph', claim: 'Joseph says research exposed him to people from many walks of life helping during the floods and inspired the film.', url: flood2018 }, { kind: 'interview', source: 'Times of India — making 2018', claim: 'Joseph calls the film a fictional representation of many lesser-known hero stories rather than a depiction of particular rescuers.', url: floodCraft }],
    researchDossier: dossier('true-story','A disaster ensemble inspired by the 2018 Kerala floods, using fictional characters to synthesize many rescue experiences.',['2018 Kerala floods source','2018 film fictional characters','2018 community representation','2018 rescue accuracy','Jude Anthany interview'],'A Hindu-civilizational classifier could over-credit generic solidarity as ideological alignment.','cleared',[flood2018,floodCraft],'The film is explicitly a fictional synthesis of real flood-rescue experiences.','Its local solidarity is positive but insufficient by itself for Sanghi certification.')
  }),
  hardenedProfile({
    title: '777 Charlie', year: 2022, language: 'Kannada', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 3, raksha: null, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Compassion','Family','Neutral control'], reasons: ['The film is primarily about companionship, grief and moral rehabilitation through a man’s bond with a dog.', 'Mahabharata/Dharma echoes are compatible with Bharatiya culture but are not sufficiently central to turn a human-animal drama into a civilizational certification.'], integrityFlags: [],
    evidence: [{ kind: 'review', source: 'Filmibeat Kannada — 777 Charlie review', claim: 'The review explicitly compares Dharma’s journey with the Mahabharata story of Dharmaraya and the dog.', url: charlie }],
    researchDossier: dossier('original-fiction','A Kannada road/family drama in which an isolated man is transformed through his bond with a dog named Charlie.',['777 Charlie source','777 Charlie Mahabharata Dharma dog','777 Charlie sacred representation','777 Charlie ideology','777 Charlie review'],'The protagonist name Dharma and epic echo could justify certification.','cleared',[charlie],'A published review identifies a Mahabharata echo in the man-and-dog journey.','The echo enriches the film but does not dominate its worldview enough for certification.')
  }),
  hardenedProfile({
    title: 'K.G.F: Chapter 2', year: 2022, language: 'Kannada', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Gangster','Power','Neutral control'], reasons: ['The narrative is dominated by power, crime, ambition and personal loyalty rather than Hindu-civilizational or national themes.', 'Indian setting and mass-hero aesthetics alone are not sufficient for certification.'], integrityFlags: [],
    evidence: [{ kind: 'review', source: 'Times of India — K.G.F Chapter 2 review', claim: 'The review centres Rocky’s power struggle, enemies and gangster ambitions.', url: kgf }],
    researchDossier: dossier('original-fiction','A Kannada gangster sequel focused on Rocky’s rule, rivalries, state pursuit and personal mythology.',['KGF Chapter 2 source','KGF religion community identity','KGF sacred representation','KGF historical claims','KGF review'],'Its mass-national popularity could be mistaken for Rashtra alignment.','cleared',[kgf],'The film is fictional gangster spectacle centred on Rocky’s power struggle.','Popularity and Indian setting do not substitute for a substantive Bharatiya worldview signal.')
  }),
  hardenedProfile({
    title: 'Hi Nanna', year: 2023, language: 'Telugu', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 2, raksha: null, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family','Romance','Neutral control'], reasons: ['The film is a family and relationship drama centred on parenthood, memory and romantic attachment.', 'Family warmth is compatible with Bharatiya values but does not by itself satisfy a civilizational certification threshold.'], integrityFlags: [],
    evidence: [{ kind: 'review', source: 'Indian Express — Hi Nanna review', claim: 'The review describes the film as a family-centric story of a father, daughter and romantic relationship.', url: 'https://indianexpress.com/article/entertainment/movie-review/hi-nanna-movie-review-nani-mrunal-thakur-impress-in-a-poignant-tale-of-love-and-bonding-9058145/lite/' }],
    researchDossier: dossier('original-fiction','A Telugu family-romance drama about a father, daughter, memory and a disrupted relationship.',['Hi Nanna source','Hi Nanna family themes','Hi Nanna religion representation','Hi Nanna ideology','Hi Nanna review'],'Family-centred storytelling could be over-read as sufficient Parampara alignment.','cleared',['https://indianexpress.com/article/entertainment/movie-review/hi-nanna-movie-review-nani-mrunal-thakur-impress-in-a-poignant-tale-of-love-and-bonding-9058145/lite/'],'The film is primarily a family-romance narrative.','Family affirmation is positive but too generic to warrant Sanghi certification on its own.')
  }),
];
