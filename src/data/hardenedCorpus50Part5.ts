import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50Part5: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Carry On Jatta', year: 2012, language: 'Punjabi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Punjabi', 'Family comedy', 'Local roots', 'Neutral'],
    reasons: [
      'The comedy is unmistakably Punjabi in language, family structure and social rhythm, giving it clear Local Roots.',
      'Its engine is farce built on marriage lies and household confusion rather than a strong civilizational, sacred or national position, so Neutral is the appropriate classification.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Carry On Jatta review', claim: 'Reviews the Punjabi family farce centred on marriage deception and comic household complications.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movie-reviews/carry-on-jatta/movie-review/15231092.cms' },
      { kind: 'review', source: 'Wikipedia — Carry On Jatta', claim: 'Records the 2012 Punjabi comedy and its fictional family-marriage plot.', url: 'https://en.wikipedia.org/wiki/Carry_On_Jatta' }
    ],
    filmUnderstanding: 'A Punjabi comedy of errors in which a man lies about his family situation to marry the woman he loves, triggering escalating domestic farce.',
    researchFocus: 'Punjabi family marriage comedy local culture',
    redTeamChallenge: 'Regional popularity and family setting alone should not be mistaken for substantive Bharatiya alignment.',
    fact: 'The story is fictional and primarily comic.',
    interpretation: 'The film is culturally rooted but low-signal on the certification axis.',
    intent: 'No larger ideological thesis is inferred from the farce.'
  }),

  makeHardenedBatchFilm({
    title: 'Wrong Side Raju', year: 2016, language: 'Gujarati', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 1, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Gujarati', 'Corruption', 'Justice', 'Mixed'],
    reasons: [
      'The film is rooted in contemporary Gujarat and takes corruption, class privilege and accountability seriously, giving Social Dharma and Local Roots meaningful weight.',
      'Its morally compromised protagonist and cynical systems produce a deliberately ambiguous social picture rather than a clear affirmative civilizational message, so Mixed / Contested is more accurate.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Wrong Side Raju review', claim: 'Reviews the Gujarati thriller’s hit-and-run, corruption, class and moral-accountability story.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/wrong-side-raju/movie-review/54265439.cms' },
      { kind: 'review', source: 'Times of India — Gujarati cinema and heritage sites', claim: 'Provides Gujarati cinema context and comments from actor Pratik Gandhi on regional production and locations.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movies/news/why-dhollywood-cant-get-enough-of-our-heritage-sites/articleshow/68933333.cms' }
    ],
    filmUnderstanding: 'A Gujarati crime thriller about a driver caught in a hit-and-run cover-up involving privilege, corruption and competing versions of responsibility.',
    researchFocus: 'Gujarat hit and run corruption class justice regional cinema',
    redTeamChallenge: 'Criticism of privilege and institutions can be overread either as anti-Gujarat cynicism or as automatically reformist patriotism.',
    fact: 'The characters and case are fictional within a contemporary Gujarati setting.',
    interpretation: 'Institutional critique and rooted setting are positive signals, but the film’s moral universe remains intentionally compromised and mixed.',
    intent: 'No anti-Gujarat or anti-India intent is inferred from the corruption narrative.'
  }),

  makeHardenedBatchFilm({
    title: 'Chaal Jeevi Laiye!', year: 2019, language: 'Gujarati', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Gujarati', 'Father-son', 'Family', 'Local roots'],
    reasons: [
      'The film centres filial relationship, time with family, reconciliation and a journey through recognisably Indian landscapes, giving Dharma, Local Roots and Social Dharma strong weight.',
      'Its emotional conservatism is not about enforcing hierarchy; it argues that achievement without relationship and gratitude is incomplete, a compatible Bharatiya family ethic.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Chaal Jeevi Laiye review', claim: 'Reviews the Gujarati father-son road drama and its emphasis on relationships and living fully.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/chaal-jeevi-laiye/movie-review/67791229.cms' },
      { kind: 'interview', source: 'Bollywood Hungama — Yash Soni on Chaal Jeevi Laiye', claim: 'Discusses the film’s extraordinary Gujarati theatrical resonance and the father-son story audiences embraced.', url: 'https://www.bollywoodhungama.com/news/features/exclusive-yash-soni-talks-about-fronting-the-sholay-and-ddlj-of-gujarati-cinema-chaal-jeevi-laiye-reveals-that-makers-fought-piracy-with-an-iron-hand-to-protect/' }
    ],
    filmUnderstanding: 'A Gujarati father-son road drama in which an overworked son takes his terminally ill father on a journey that reshapes their relationship and priorities.',
    researchFocus: 'Gujarati father son family journey values regional audience',
    redTeamChallenge: 'A sentimental family story can become overly moralising or treat individual ambition as inherently inferior to family obligation.',
    fact: 'The characters and journey are fictional.',
    interpretation: 'The film’s family ethic is affirmative without requiring coercive hierarchy, supporting certification.',
    intent: 'No claim is made that career ambition itself is anti-family or anti-Bharatiya.'
  }),

  makeHardenedBatchFilm({
    title: 'The Good Road', year: 2013, language: 'Gujarati', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Kutch', 'Gujarati', 'Road film', 'Neutral'],
    reasons: [
      'The film is strongly grounded in Kutch landscapes and intersecting lives, giving regional place and ordinary people narrative dignity.',
      'Its social observations are neither strongly civilizationally affirmative nor contemptuous of Bharat, so Neutral is preferable to turning regional authenticity into automatic certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — The Good Road Oscar debate', claim: 'Discusses the Gujarati film, its selection and the cultural debate around its representation and cinematic merits.', url: 'https://indianexpress.com/article/opinion/columns/the-lunchbox-no-oscar-stopover/lite/' },
      { kind: 'review', source: 'Wikipedia — The Good Road', claim: 'Records the Gujarati road film and its intersecting stories set in Kutch.', url: 'https://en.wikipedia.org/wiki/The_Good_Road' }
    ],
    filmUnderstanding: 'A Gujarati road film following intersecting travellers and children across the highways and landscapes of Kutch.',
    researchFocus: 'Kutch Gujarat road film representation rural poverty children',
    redTeamChallenge: 'Festival-facing social cinema can exoticise deprivation or landscape for outside audiences even when locally produced.',
    fact: 'The story is fictional and set in real Kutch landscapes.',
    interpretation: 'The regional representation is substantial but does not produce a strong directional certification signal.',
    intent: 'No exoticising intent is asserted without stronger creator evidence.'
  }),

  makeHardenedBatchFilm({
    title: 'Village Rockstars', year: 2017, language: 'Assamese', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Assam', 'Village life', 'Girlhood', 'Local roots'],
    reasons: [
      'The film treats an Assamese village, poverty, work, monsoon and a girl’s musical aspiration from inside the community rather than as a problem to be escaped through cultural erasure.',
      'Its rooted realism, family resilience and dignity of ordinary rural life strongly support Local Roots and Social Dharma without requiring overt nationalism.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Village Rockstars review', claim: 'Reviews the Assamese village story, Dhunu’s dream and the film’s intimate rural setting.', url: 'https://timesofindia.indiatimes.com/entertainment/english/movie-reviews/village-rockstars/movie-review/65995733.cms' },
      { kind: 'review', source: 'Indian Express — Village Rockstars review', claim: 'Highlights the child’s aspiration, poverty, landscape and naturalistic Assamese village life.', url: 'https://indianexpress.com/article/entertainment/movie-review/village-rockstars-movie-review-5377680/83/' }
    ],
    filmUnderstanding: 'An Assamese coming-of-age drama about a village girl who dreams of owning a guitar and forming a band while living through poverty and monsoon hardship.',
    researchFocus: 'Assam village girl music poverty monsoon regional representation',
    redTeamChallenge: 'Poverty-centred rural cinema can inadvertently aestheticise deprivation for festival audiences.',
    fact: 'The narrative is fictional but filmed within and draws closely from Assamese rural life.',
    interpretation: 'The community is represented with agency and intimacy rather than contempt, supporting a positive rooted verdict.',
    intent: 'No claim is made that the village represents all of Assam.'
  }),

  makeHardenedBatchFilm({
    title: 'Aamis', year: 2019, language: 'Assamese', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 1, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 2, sacredRegard: 1, contemptRisk: 3 },
    tags: ['Assam', 'Food culture', 'Transgression', 'Mixed'],
    reasons: [
      'The film is deeply Assamese in food culture, place and social texture, and the director explicitly grounds his work in Assam rather than using the region as interchangeable exotic scenery.',
      'Its romance deliberately crosses into taboo consumption and cannibalistic transgression, producing a serious Dharma and contempt-risk counterweight; Mixed / Contested preserves both rootedness and moral disturbance.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Aamis review', claim: 'Reviews the Assamese film’s food-centred romance and disturbing progression into transgressive appetite.', url: 'https://indianexpress.com/article/entertainment/movie-review/aamis-movie-review-6130038/' },
      { kind: 'interview', source: 'Cinema Express — Bhaskar Hazarika and Lima Das', claim: 'Discusses the film’s original premise, taboo pleasures and Assamese context.', url: 'https://www.cinemaexpress.com/stories/interviews/2019/nov/20/bhaskar-hazarika-and-lima-das-on-the-twisted-pleasures-of-aamis-15609.html' },
      { kind: 'interview', source: 'Indian Express — Bhaskar Hazarika', claim: 'Hazarika explains why Assam grounds his work and creative imagination.', url: 'https://indianexpress.com/article/express-sunday-eye/national-award-winning-filmmaker-bhaskar-hazarika-on-his-brave-new-film-aamis-and-why-assam-grounds-his-work-6121698/lite/' }
    ],
    filmUnderstanding: 'An Assamese psychological romance in which a married doctor and a younger researcher bond through meat and escalating taboo desire until appetite becomes grotesquely transgressive.',
    researchFocus: 'Assam food culture meat taboo cannibalism Bhaskar Hazarika regional context',
    redTeamChallenge: 'The film’s taboo endpoint can overwhelm its regional specificity and could be read as using Assamese food culture as a route to shock.',
    fact: 'The story is fictional and the director describes it as an original work grounded in Assam.',
    interpretation: 'Regional rootedness is genuine, but the film intentionally destabilises ordinary moral boundaries, yielding a mixed verdict.',
    intent: 'No intent to demean Assamese food culture is inferred; the transgression belongs to the fictional characters and escalation.',
    risks: [{ id: 'regional-context', summary: 'Assamese food culture is essential context, while the taboo escalation must not be generalised to that culture.', evidenceIndexes: [1,2], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Sala Budha', year: 2012, language: 'Odia', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Odia roots', 'Village elder', 'Tradition', 'Family'],
    reasons: [
      'The film centres an elderly village figure, intergenerational responsibility and western-Odisha rural culture with affection rather than embarrassment, producing strong Parampara and Local Roots.',
      'Its adaptation of a regional literary story preserves local language and social memory, supporting Civilizational Continuity without claiming that every custom shown is universally ideal.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Sala Budha', claim: 'Records the 2012 Odia/Kosli film as an adaptation of a story by Kapileswar Prasad Mohapatra focused on rural western Odisha.', url: 'https://en.wikipedia.org/wiki/Sala_Budha' },
      { kind: 'review', source: 'OdiaMovieDB — Sala Budha', claim: 'Provides regional film information on the story, cast and western-Odisha setting.', url: 'https://odiamoviedb.blogspot.com/2023/02/sala-budha.html' }
    ],
    filmUnderstanding: 'A regional Odia/Kosli literary adaptation centred on an elderly man, family and village life in western Odisha.',
    researchFocus: 'Kapileswar Prasad Mohapatra western Odisha Kosli village elder adaptation',
    redTeamChallenge: 'Affection for a village elder and older ways of life can slide into uncritical nostalgia if social costs are ignored.',
    fact: 'The film adapts a regional literary story rather than documenting a single real village elder.',
    interpretation: 'Its preservation of local language, memory and intergenerational duty supports certification while allowing criticism of individual customs.',
    intent: 'No claim is made that all traditional authority is inherently virtuous.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts a regional literary story into an Odia/Kosli feature.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'DAMaN', year: 2022, language: 'Odia', status: 'certified', sourceBasis: 'true-story',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 4, itihasa: 3, parampara: 2, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Odia', 'Public health', 'Tribal Odisha', 'Service'],
    reasons: [
      'The film treats medical service in remote Odisha, responsibility toward underserved communities and public-health capacity as forms of duty rather than as a reason to demean the region.',
      'Its real-program inspiration is dramatized, so the strong Dharma and Social Dharma verdict retains a source/adaptation caveat about individual attribution and chronology.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — DAMaN review', claim: 'Reviews the film’s doctor-led malaria work in remote Odisha and its public-service focus.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/daman/movie-review/97550391.cms' },
      { kind: 'interview', source: 'Cinema Express — DAMaN director Vishal Maurya', claim: 'Discusses the Odia film, its public-health subject and hopes for regional cinema.', url: 'https://www.cinemaexpress.com/international/interviews/2022/Dec/07/daman-director-vishal-maurya-success-of-my-film-could-be-a-ray-of-hope-for-odia-filmmakers-37464.html' },
      { kind: 'official', source: 'Times of India — National Award context', claim: 'Reports the film’s recognition and connection to the real public-health work associated with Dr Omkar Hota and Odisha’s malaria-control effort.', url: 'https://timesofindia.indiatimes.com/city/bhubaneswar/daman-named-best-odia-film-at-70th-national-film-awards/articleshow/112579220.cms' }
    ],
    filmUnderstanding: 'An Odia drama inspired by public-health work in remote Malkangiri, following a young doctor confronting malaria, access barriers and distrust while serving tribal communities.',
    researchFocus: 'Dr Omkar Hota Malkangiri malaria DAMaN programme Odisha true story',
    redTeamChallenge: 'A single-doctor hero narrative can over-concentrate credit for a public-health programme involving communities and institutions.',
    fact: 'The film draws from real malaria-control and medical-service experiences in Odisha while dramatizing characters and events.',
    interpretation: 'The adaptation caveat does not overturn the film’s strong service, local responsibility and state-capacity signals.',
    intent: 'The film is not treated as a documentary allocation of credit among every participant.',
    risks: [
      { id: 'source-adaptation', summary: 'Real public-health work is dramatised into a feature-film protagonist arc.', evidenceIndexes: [0,1,2], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'The narrative concentrates a broad public-health effort around a central doctor figure.', evidenceIndexes: [2], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'biographical-credit', status: 'supported', summary: 'The film simplifies a broader public-health effort around a central dramatic protagonist.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Sasura Bada Paisawala', year: 2003, language: 'Bhojpuri', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bhojpuri', 'Regional revival', 'Romance', 'Neutral'],
    reasons: [
      'The film is historically important to the revival of commercial Bhojpuri cinema and therefore carries real language-and-region continuity value.',
      'Its story is conventional romance and family conflict rather than a strong Bharatiya political or sacred argument, so cultural importance is recorded without automatically certifying the narrative.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Sasura Bada Paisawala', claim: 'Records the 2003 Bhojpuri romance-drama as a landmark commercial success associated with the revival of Bhojpuri cinema.', url: 'https://en.wikipedia.org/wiki/Sasura_Bada_Paisawala' },
      { kind: 'review', source: 'Times of India — Manoj Tiwari on the film’s box office', claim: 'Reports the film’s low budget, exceptional commercial success and importance to Bhojpuri popular cinema.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/manoj-tiwari-reveals-how-a-rs-30-lakh-bhojpuri-film-minted-rs-54-crore-but-neither-the-director-nor-the-writer-received-any-award/articleshow/126410570.cms' }
    ],
    filmUnderstanding: 'A Bhojpuri romance-drama about love, family opposition and class expectations that became a landmark commercial success for the language industry.',
    researchFocus: 'Bhojpuri cinema revival 2003 Manoj Tiwari regional industry family romance',
    redTeamChallenge: 'Industrial importance to Bhojpuri cinema should not be confused with a strong positive verdict on every element of the film’s gender or family politics.',
    fact: 'The story is fictional; the film’s major role in the commercial revival of Bhojpuri cinema is widely documented.',
    interpretation: 'Language continuity earns cultural credit while the narrative itself remains low-signal, supporting Neutral.',
    intent: 'No broader Bharatiya thesis is inferred from the film’s commercial landmark status.'
  }),

  makeHardenedBatchFilm({
    title: 'Deswa', year: 2011, language: 'Bhojpuri', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 3, itihasa: 2, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bhojpuri', 'Bihar', 'Migration', 'Regional dignity'],
    reasons: [
      'The film deliberately presents contemporary Bihar and Bhojpuri-speaking society as capable of serious modern storytelling about migration, unemployment, crime and responsibility rather than reducing the region to caricature.',
      'Its regional self-respect and concern for livelihood and social reform support Local Roots and Social Dharma while resisting contempt toward Bihar and Bhojpuri identity.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Film to showcase today’s Bihar', claim: 'Reports the filmmakers’ stated aim to show contemporary Bihar and move beyond stereotypes associated with Bhojpuri cinema.', url: 'https://timesofindia.indiatimes.com/city/patna/film-to-showcase-todays-bihar/articleshow/7773468.cms' },
      { kind: 'interview', source: 'Indian Express — Deswa and migration', claim: 'Discusses producer Neetu Chandra’s emphasis on migration issues and a more serious Bhojpuri cinema.', url: 'https://indianexpress.com/article/news-archive/web/deswa-about-migration-issues-neetu-chandra/' },
      { kind: 'review', source: 'Wikipedia — Deswa', claim: 'Records the 2011 Bhojpuri social drama and its regional-cinema context.', url: 'https://en.wikipedia.org/wiki/Deswa' }
    ],
    filmUnderstanding: 'A Bhojpuri social drama about young people in Bihar confronting unemployment, migration pressure, crime and the consequences of limited opportunity.',
    researchFocus: 'Bihar migration unemployment Bhojpuri representation regional stereotypes',
    redTeamChallenge: 'A reform-minded film about unemployment and crime can still reproduce negative images of Bihar if its critique overwhelms its stated regional dignity.',
    fact: 'The characters are fictional and the filmmakers publicly framed the project around contemporary Bihar and migration issues.',
    interpretation: 'The film’s critique operates from regional concern and self-respect rather than contempt, supporting a positive rooted verdict.',
    intent: 'Creator statements support an intent to broaden and dignify Bhojpuri/Bihar representation rather than demean it.'
  })
];