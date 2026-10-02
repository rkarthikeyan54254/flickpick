import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50Part1: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Border', year: 1997, language: 'Hindi', status: 'certified', sourceBasis: 'true-story',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', '1971 war', 'Military service', 'Longewala'],
    reasons: [
      'The film places defence of Indian territory, military duty, sacrifice and solidarity at the centre of its moral world, producing an unusually strong Rashtra and Raksha signal.',
      'It dramatizes the Battle of Longewala rather than functioning as a documentary, so compression and invented dialogue remain Narrative Integrity caveats without changing the India-first meaning.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Border review', claim: 'Describes the film as an ambitious 1971-war drama built around a true incident and Indian soldiers defending their post.', url: 'https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19970623-movie-review-border-starring-sunny-deol-sunil-shetty-jackie-shroff-831643-1997-06-22' },
      { kind: 'review', source: 'Wikipedia — Border', claim: 'Records the film as a fictionalised account of the Battle of Longewala during the Indo-Pakistani War of 1971.', url: 'https://en.wikipedia.org/wiki/Border_(1997_film)' }
    ],
    filmUnderstanding: 'A large-scale patriotic war drama fictionalising the Indian defence of Longewala during the 1971 Indo-Pakistani war and foregrounding soldiers, families and sacrifice.',
    researchFocus: 'Battle of Longewala 1971 soldiers historical accuracy',
    redTeamChallenge: 'Patriotic spectacle may simplify the battle, enemy competence and operational chronology in ways that should not be mistaken for documentary history.',
    fact: 'The Battle of Longewala and the Indian defence of the post are historical; the screenplay compresses and dramatises people, dialogue and events.',
    interpretation: 'The dramatic simplification is a Narrative Integrity caveat, while defence of Indian territory remains the film’s clear Bharatiya centre.',
    intent: 'No claim is made that every scene or character interaction reproduces the historical record exactly.',
    risks: [
      { id: 'source-adaptation', summary: 'A real battle is converted into a feature-film narrative with compression and dramatization.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'historical-claims', summary: 'Operational details and character moments should not be read as a scene-for-scene historical record.', evidenceIndexes: [0,1], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'The historical battle is substantially dramatized for feature-film storytelling.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Rang De Basanti', year: 2006, language: 'Hindi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 4, parampara: 2, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Rashtra', 'Freedom movement', 'Civic duty', 'Youth'],
    reasons: [
      'The film explicitly connects disengaged contemporary youth to Indian freedom-struggle memory and turns that historical encounter into a demand for civic responsibility rather than cynicism about India itself.',
      'Its anger at corruption and state failure is not anti-national by default; the strongest caveat is that its violent climax can romanticise extra-legal action even while the underlying call is to care about Bharat.'
    ],
    evidence: [
      { kind: 'interview', source: 'UCLA — Rakeysh Omprakash Mehra interview', claim: 'Mehra discusses the film’s use of Bhagat Singh-era revolutionaries and contemporary youth to provoke engagement with India.', url: 'https://international.ucla.edu/institute/article/59094' },
      { kind: 'interview', source: 'Indian Express — Rang De Basanti at 20', claim: 'Mehra revisits the political intent, censorship pressure and continuing civic resonance of the film.', url: 'https://indianexpress.com/article/entertainment/bollywood/rang-de-basanti-20-years-aamir-khan-censorship-rakeysh-omprakash-mehra-exclusive-10490576/' }
    ],
    filmUnderstanding: 'A contemporary political drama in which young Indians making a film about anti-colonial revolutionaries are transformed by historical memory and a friend’s death into political action.',
    researchFocus: 'Bhagat Singh freedom fighters corruption youth political violence',
    redTeamChallenge: 'The film may blur civic patriotism with vigilante violence and can be read as legitimising assassination when institutions fail.',
    fact: 'The modern characters and their conspiracy are fictional, while the freedom fighters they portray are historical figures.',
    interpretation: 'The film’s institutional critique is framed as a demand that Indians take responsibility for the republic, not as contempt for India or its civilisation.',
    intent: 'The record supports a deliberately political civic provocation; it does not establish advocacy of real-world political violence as a general programme.'
  }),

  makeHardenedBatchFilm({
    title: 'Airlift', year: 2016, language: 'Hindi', status: 'certified', sourceBasis: 'true-story',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 4, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Evacuation', 'Indian diaspora', 'Civic responsibility'],
    reasons: [
      'The evacuation of Indians from Kuwait is interpreted through responsibility toward fellow Indians, diaspora solidarity and the capacity of Indian institutions and citizens to act under crisis.',
      'The central protagonist is a composite/dramatised figure and the operation is simplified, so the certification is separated from a clear Narrative Integrity warning about attribution and chronology.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Airlift review', claim: 'Describes the film as a heroic evacuation drama rooted in the 1990 Kuwait crisis and the rescue of Indians.', url: 'https://www.indiatoday.in/amp/movies/reviews/story/airlift-movie-review-akshay-kumar-nimrat-kaurs-spectacular-tale-of-heroism-305043-2016-01-22' },
      { kind: 'review', source: 'Indian Express — Airlift review', claim: 'Notes the real historical evacuation while assessing the fictionalised central narrative and nationalism.', url: 'https://indianexpress.com/article/entertainment/movie-review/airlift-movie-reivew-akshay-kumar/' }
    ],
    filmUnderstanding: 'A dramatized account of the 1990 evacuation of Indians from Kuwait, using a fictional/composite businessman to embody civilian initiative alongside Indian diplomatic and state effort.',
    researchFocus: '1990 Kuwait evacuation Ranjit Katyal composite Indian government role',
    redTeamChallenge: 'A composite hero may over-concentrate credit and simplify the diplomatic, Air India and governmental work behind the real evacuation.',
    fact: 'India conducted a massive evacuation of citizens from Kuwait in 1990; the film’s Ranjit Katyal is a dramatised/composite protagonist rather than a literal single historical hero.',
    interpretation: 'The attribution caveat does not erase the film’s strong solidarity, rescue and national-capacity themes.',
    intent: 'The film is treated as a dramatization of a real operation, not as a documentary allocation of individual credit.',
    risks: [
      { id: 'source-adaptation', summary: 'The real evacuation is compressed around a fictional/composite protagonist.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'Credit for a multi-actor evacuation is narratively concentrated in the central fictional hero.', evidenceIndexes: [0,1], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'biographical-credit', status: 'supported', summary: 'The film concentrates a complex evacuation effort around a fictional/composite central figure.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Neerja', year: 2016, language: 'Hindi', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 4, itihasa: 4, parampara: 3, localRoots: 3, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Dharma', 'Courage', 'Neerja Bhanot', 'Civilian sacrifice'],
    reasons: [
      'Neerja Bhanot’s courage is presented as duty to others under mortal danger, making Dharma, Raksha and Social Dharma the core of the film rather than celebrity biography.',
      'The film reconstructs a real hijacking through dramatic scenes and private-life material, which warrants a biographical-fidelity caveat but does not undermine the central documented act of sacrifice.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Neerja review', claim: 'Reviews the film as a reconstruction of Neerja Bhanot’s actions during the Pan Am Flight 73 hijacking.', url: 'https://www.indiatoday.in/movies/reviews/story/neerja-review-sonam-kapoor-delivers-her-career-best-performance-in-ram-madhvanis-film-309581-2016-02-19' },
      { kind: 'interview', source: 'India Today — Keeping it real', claim: 'Director Ram Madhvani discusses the responsibilities and choices involved in making real-event cinema including Neerja.', url: 'https://www.indiatoday.in/magazine/cinema/story/20160411-keeping-it-real-cinema-bollywood-movies-entertainment-828700-2016-03-30' }
    ],
    filmUnderstanding: 'A biographical drama about flight attendant Neerja Bhanot and the 1986 Pan Am 73 hijacking, centred on her protection of passengers and fatal sacrifice.',
    researchFocus: 'Neerja Bhanot Pan Am 73 hijacking biography accuracy family',
    redTeamChallenge: 'Biographical cinema can embellish private moments and simplify the actions of other crew and passengers around a single heroic figure.',
    fact: 'Neerja Bhanot was killed during the Pan Am Flight 73 hijacking after helping passengers; the film dramatises the surrounding personal and operational events.',
    interpretation: 'The dramatization caveat is distinct from the well-supported moral centre of courage and duty to others.',
    intent: 'No motive beyond dramatizing the documented rescue/sacrifice narrative is inferred from reconstructed private scenes.',
    risks: [{ id: 'source-adaptation', summary: 'Real events and private-life material are reconstructed for dramatic narrative.', evidenceIndexes: [0,1], materiality: 'medium' }],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'Private and operational details are necessarily reconstructed around a documented historical core.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Bhaag Milkha Bhaag', year: 2013, language: 'Hindi', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Partition memory', 'Sport', 'Resilience'],
    reasons: [
      'Milkha Singh’s sporting life is tied to Partition trauma, disciplined self-transformation and representing India internationally, producing strong Rashtra, Itihasa and Social Dharma signals.',
      'The filmmakers openly dramatise and combine episodes, so the film remains Certified while carrying a clear adaptation-delta warning rather than presenting every scene as literal biography.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Bhaag Milkha Bhaag review', claim: 'Reviews the film as a biographical sports drama spanning Partition trauma and Milkha Singh’s athletic career.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/bhaag-milkha-bhaag/movie-review/21000449.cms' },
      { kind: 'interview', source: 'Times of India — Rakeysh Omprakash Mehra and Prasoon Joshi', claim: 'Discusses cinematic construction and dramatization in telling Milkha Singh’s life.', url: 'https://timesofindia.indiatimes.com/city/bengaluru/there-are-no-dead-moments-in-cinema/articleshow/23183925.cms' },
      { kind: 'review', source: 'Indian Express — Bhaag Milkha Bhaag review', claim: 'Offers an adversarial reading of the film’s heavy dramatic embellishment.', url: 'https://indianexpress.com/article/entertainment/movie-review/movie-review-bhaag-milkha-bhaag-starts-getting-overlaid-by-too-much-drama/' }
    ],
    filmUnderstanding: 'A dramatized biopic of Milkha Singh that links Partition displacement, military discipline, athletics and international representation of India.',
    researchFocus: 'Milkha Singh biography Partition races fictionalisation',
    redTeamChallenge: 'The film’s emotional and romantic inventions can blur the line between Milkha Singh’s documented life and screenplay-driven mythology.',
    fact: 'Milkha Singh was a Partition refugee, soldier and elite athlete who represented India; the screenplay adds and reshapes episodes for drama.',
    interpretation: 'The adaptation gap is material to biography but does not reverse the film’s rooted account of resilience and national representation.',
    intent: 'Open cinematic dramatization is recorded; invented scenes are not treated as evidence of deceptive intent.',
    risks: [
      { id: 'source-adaptation', summary: 'The biopic combines documented life history with substantial dramatic invention.', evidenceIndexes: [1,2], materiality: 'high' },
      { id: 'self-falsification', summary: 'Contemporary criticism directly challenges the film’s degree of dramatic embellishment.', evidenceIndexes: [2], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'Substantial dramatic embellishment is part of the biopic’s construction.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Parmanu: The Story of Pokhran', year: 2018, language: 'Hindi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 5, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Pokhran-II', 'Strategic autonomy', 'Narrative Integrity'],
    reasons: [
      'The film’s core meaning is Indian strategic autonomy, scientific capability and national security around Pokhran-II, which strongly supports Rashtra and Raksha under the declared lens.',
      'Its fictional hero-team structure and distortions of who did what are significant Narrative Integrity problems and are retained explicitly rather than being washed out by the patriotic verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'New Indian Express — Parmanu review', claim: 'Critiques the film as an unconvincing fictionalised rendering of the Pokhran-II story.', url: 'https://www.newindianexpress.com/entertainment/review/2018/May/25/parmanu-review-an-unconvincing-unexciting-version-of-the-pokhran-story-1819333.html' },
      { kind: 'review', source: 'Asian Age — Parmanu review', claim: 'Explicitly criticises factual distortion while discussing the 1998 nuclear-test setting.', url: 'https://www.asianage.com/entertainment/movie-reviews/260518/parmanu-the-story-of-pokhran-movie-review-unintentionally-funny-while-distorting-facts.html' }
    ],
    filmUnderstanding: 'A heavily fictionalised historical thriller built around India’s 1998 Pokhran-II nuclear tests, using invented/composite protagonists to dramatise secrecy, science and state coordination.',
    researchFocus: 'Pokhran II 1998 nuclear tests scientists Vajpayee Kalam Chidambaram factual accuracy',
    redTeamChallenge: 'The screenplay can misallocate credit and fabricate operational incidents so aggressively that viewers may mistake a patriotic thriller for the actual institutional history.',
    fact: 'India conducted the Pokhran-II nuclear tests in May 1998; many central characters and operational sequences in the film are fictional or composite.',
    interpretation: 'The factual weakness is substantial Narrative Integrity debt, but the film’s strategic-autonomy and Indian-scientific-capability orientation remains clear.',
    intent: 'Fictionalization is established; a deliberate intent to erase specific real contributors is not asserted without stronger evidence.',
    risks: [
      { id: 'historical-claims', summary: 'The film significantly fictionalises actors, credit and operational details around a major historical event.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'A real multi-institution scientific and political operation is reorganised around invented/composite heroes.', evidenceIndexes: [0,1], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'Major characters and operational events are fictionalised around the real Pokhran-II tests.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Roja', year: 1992, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 5, itihasa: 3, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Tamil roots', 'Kashmir', 'Family'],
    reasons: [
      'A Tamil village woman’s search for her kidnapped husband is placed inside the Kashmir insurgency without requiring the film to distance itself from Indian sovereignty, giving Rashtra and Raksha strong weight.',
      'The film humanises individual militants and civilians while still treating the captive Indian cryptographer and the Indian state’s territorial claim as legitimate; that combination is compatible with the declared lens.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — 30 years of Roja', claim: 'Retrospective analysis identifies Kashmir, terrorism, nationalism and Mani Ratnam’s political concerns as central to the film.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/30-years-of-roja-the-film-that-gave-birth-to-mani-ratnams-politcal-ideas-in-movies/amp_etphotostory/93591693.cms' },
      { kind: 'review', source: 'Wikipedia — Roja', claim: 'Records the fictional story of a Tamil woman whose husband is kidnapped by militants in Kashmir.', url: 'https://en.wikipedia.org/wiki/Roja_(film)' }
    ],
    filmUnderstanding: 'A fictional political-romance thriller moving from rural Tamil Nadu to Kashmir after an Indian cryptographer is kidnapped by militants.',
    researchFocus: 'Kashmir insurgency Indian sovereignty terrorism Tamil family nationalism',
    redTeamChallenge: 'Its emotional nationalism may simplify Kashmir’s political history and state/militant violence into a hostage-rescue moral frame.',
    fact: 'The protagonists and kidnapping are fictional against the real background of insurgency in Kashmir.',
    interpretation: 'The film’s simplification is a political-fiction caveat, not a reason to penalise its Indian-sovereignty standpoint.',
    intent: 'No claim is made that the film offers a comprehensive history of the Kashmir conflict.'
  }),

  makeHardenedBatchFilm({
    title: 'Bombay', year: 1995, language: 'Tamil', status: 'mixed', sourceBasis: 'history',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 4, itihasa: 4, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Communal violence', 'Interfaith family', 'Bombay riots', 'Mixed'],
    reasons: [
      'The film’s strongest positive signal is its insistence that a Hindu-Muslim family and ordinary citizens should not be destroyed by communal hatred, which supports civic solidarity and Social Dharma.',
      'Its compression and balancing of responsibility around the Bombay riots attracted contemporary criticism from Muslim leaders and others; because communal representation is central rather than incidental, the appropriate verdict is Mixed / Contested.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Bombay incenses Muslim leaders', claim: 'Documents objections from Muslim leaders to the film’s representation of the riots and communal responsibility.', url: 'https://www.indiatoday.in/magazine/indiascope/story/19950430-mani-ratnams-film-bombay-incenses-muslim-leaders-of-city-808273-1995-04-29' },
      { kind: 'review', source: 'India Today — Critical acclaim and howls of protest', claim: 'Records both acclaim and substantial controversy over the film’s treatment of the Bombay riots.', url: 'https://www.indiatoday.in/magazine/society-the-arts/films/story/19950415-critical-acclaim-and-howls-of-protest-for-mani-ratnam-bombay-806737-1995-04-14' },
      { kind: 'review', source: 'India Today — Bombay and communalism', claim: 'Discusses Ratnam’s effort to view communal conflict through an ordinary mixed-faith family.', url: 'https://www.indiatoday.in/magazine/society-and-the-arts/films/story/19950115-mani-ratnams-bombay-views-communalism-through-eyes-of-common-man-806701-1995-01-14' }
    ],
    filmUnderstanding: 'A fictional Hindu-Muslim love story and family drama placed inside the 1992-93 Bombay communal riots, using intimate domestic stakes to make an argument against communal violence.',
    researchFocus: '1992 1993 Bombay riots Hindu Muslim representation Shiv Sena Muslim leaders controversy',
    redTeamChallenge: 'The film’s reconciliation frame may flatten asymmetric historical responsibility or create false equivalence in representing the riots.',
    fact: 'The riots are historical; the central family is fictional and the film compresses political actors and episodes.',
    interpretation: 'Its anti-communal family ethic is positive, but the historically contested representation of responsibility materially limits a one-directional certification.',
    intent: 'The film clearly seeks reconciliation; no claim is made that contested balancing choices prove a hidden communal motive.',
    risks: [
      { id: 'historical-claims', summary: 'The historical riots are compressed into a fictional family narrative and the allocation of responsibility was publicly contested.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'sacred-religious-valence', summary: 'Hindu and Muslim identities are central to the story and the film’s symmetry was itself a subject of controversy.', evidenceIndexes: [0,1,2], materiality: 'high' },
      { id: 'social-radar', summary: 'Contemporary public and leadership criticism identified specific representation concerns rather than generic dislike.', evidenceIndexes: [0,1], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The film’s compressed representation of the Bombay riots and communal responsibility was materially contested at release.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Indian', year: 1996, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Rashtra', 'Anti-corruption', 'INA memory', 'Civic duty'],
    reasons: [
      'The protagonist’s freedom-struggle past and fury at corruption link national independence to ethical responsibility in the republic, producing strong Rashtra, Itihasa and Social Dharma signals.',
      'The vigilante killings are morally extreme and cannot be treated as a policy prescription; certification rests on the film’s anti-corruption and freedom-memory orientation, not endorsement of extra-judicial violence.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Pop patriotism', claim: 'Discusses Indian as part of 1990s popular patriotic cinema and its anti-corruption nationalist appeal.', url: 'https://www.indiatoday.in/magazine/indiascope/story/19960815-pop-patriotism-753604-1996-08-14' },
      { kind: 'review', source: 'Times of India — 27 years of Indian', claim: 'Retrospective highlights the freedom-fighter protagonist and the film’s anti-corruption theme.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/27-years-of-indian-from-acting-against-corruption-to-a-new-sequel/amp_etphotostory/100198078.cms' }
    ],
    filmUnderstanding: 'A fictional vigilante drama about an ageing former freedom fighter who turns violent against systemic corruption in post-independence India.',
    researchFocus: 'Indian 1996 INA freedom fighter corruption vigilante patriotism',
    redTeamChallenge: 'The film can romanticise extra-judicial killing and turn complex institutional corruption into a punitive strongman fantasy.',
    fact: 'The Senapathy character and his vigilante campaign are fictional, though the Indian National Army and freedom-struggle background are historical.',
    interpretation: 'Criticism of corrupt institutions is read as a demand for a better India rather than contempt for India itself.',
    intent: 'No inference is made that the filmmakers advocate literal vigilantism outside the fictional moral universe.'
  }),

  makeHardenedBatchFilm({
    title: 'Thevar Magan', year: 1992, language: 'Tamil', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 2, itihasa: 2, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 2, sacredRegard: 2, contemptRisk: 3 },
    tags: ['Tamil roots', 'Caste', 'Feudal power', 'Mixed'],
    reasons: [
      'The film is deeply rooted in southern Tamil village life, kinship, land, honour and inherited responsibility, giving it substantial Local Roots and Parampara signal.',
      'Later criticism has persuasively argued that its iconography and masculine feudal world could reinforce dominant-caste pride despite the narrative’s critique of violent honour; that unresolved cultural valence makes Mixed / Contested more accurate than simple certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Mari Selvaraj on Thevar Magan', claim: 'Records a major contemporary Tamil filmmaker’s critique of the film’s caste valence and later qualification of that critique.', url: 'https://indianexpress.com/article/entertainment/tamil/maari-selvaraj-on-calling-kamal-haasans-thevar-magan-casteist-in-old-open-letter-8681427/' },
      { kind: 'review', source: 'Times of India — Filmy sons of Tamil soil', claim: 'Discusses caste, land and masculine identity in Tamil cinema including Thevar Magan.', url: 'https://timesofindia.indiatimes.com/city/chennai/filmy-sons-of-tamil-soil-tache-abs/articleshow/52690171.cms' },
      { kind: 'review', source: 'Times of India — Bringing the C-word to cinema', claim: 'Places the film within a broader discussion of caste representation in Tamil cinema.', url: 'https://timesofindia.indiatimes.com/blogs/tracking-indian-communities/bringing-the-c-word-to-cinema/' }
    ],
    filmUnderstanding: 'A Tamil rural family-and-power drama about an educated son returning to a dominant local household and inheriting responsibility amid feuds, caste-coded honour and violence.',
    researchFocus: 'Thevar caste representation dominant caste pride feudal masculinity Tamil village',
    redTeamChallenge: 'A narrative that criticises feud violence can still generate celebratory dominant-caste iconography and social effects beyond the screenplay’s stated moral.',
    fact: 'The characters and village conflict are fictional; caste-coded symbols and reception are materially part of the film’s public cultural history.',
    interpretation: 'The film both critiques destructive feudal honour and powerfully aestheticises the social world that sustains it, creating a genuinely mixed signal.',
    intent: 'No deliberate caste-supremacist intent is asserted; the concern is representational effect and narrative valence.',
    risks: [
      { id: 'regional-context', summary: 'Tamil caste and regional reception materially change how the film’s honour, land and kinship imagery is read.', evidenceIndexes: [0,1,2], materiality: 'high' },
      { id: 'social-radar', summary: 'Specific caste-representation criticism has persisted in Tamil public discourse and is directly relevant to classification.', evidenceIndexes: [0,1,2], materiality: 'high' }
    ]
  })
];