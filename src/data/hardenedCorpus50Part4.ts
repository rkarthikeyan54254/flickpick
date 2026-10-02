import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50Part4: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Charulata', year: 1964, language: 'Bengali', status: 'neutral', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 2, itihasa: 3, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bengali renaissance', 'Tagore', 'Marriage', 'Local roots'],
    reasons: [
      'Ray’s adaptation is deeply embedded in late-19th-century Bengali intellectual and domestic life, giving Local Roots and cultural continuity real depth.',
      'Its main concern is emotional and intellectual confinement inside a marriage rather than a directional civilizational or national thesis, so Neutral avoids forcing a political label onto rooted art.'
    ],
    evidence: [
      { kind: 'review', source: 'BFI — Charulata: a pinnacle of Satyajit Ray’s art', claim: 'Discusses Ray’s Tagore adaptation, Bengali setting and the film’s marriage, loneliness and intellectual-awakening themes.', url: 'https://www.bfi.org.uk/features/charulata-pinnacle-satyajit-ray-art' },
      { kind: 'review', source: 'Criterion — Charulata', claim: 'Identifies the film as Ray’s adaptation of Rabindranath Tagore’s Nastanirh and describes its domestic and cultural setting.', url: 'https://www.criterion.com/films/28447-charulata' }
    ],
    filmUnderstanding: 'A Bengali period drama adapted from Tagore’s Nastanirh about a lonely, intelligent woman in an elite household who develops an intimate intellectual bond with her husband’s cousin.',
    researchFocus: 'Tagore Nastanirh Bengal renaissance marriage women intellectual life',
    redTeamChallenge: 'Its critique of domestic gender constraints could be misclassified either as anti-tradition or, conversely, romanticised because of its refined cultural setting.',
    fact: 'The film is a literary adaptation set in colonial-era Bengal rather than a true story.',
    interpretation: 'Cultural rootedness and criticism of constrained domestic roles coexist without creating a strong directional certification signal.',
    intent: 'No intent to reject Bengali or Hindu culture as a whole is inferred from the marital critique.',
    risks: [{ id: 'source-adaptation', summary: 'The film is a major adaptation of Tagore’s Nastanirh and should be understood in relation to that literary source.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Nayak', year: 1966, language: 'Bengali', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bengali cinema', 'Celebrity', 'Moral introspection', 'Neutral'],
    reasons: [
      'The film is unmistakably Bengali in language, social observation and intellectual temperament, and its star protagonist is subjected to serious moral self-examination rather than simple glamour.',
      'Its dominant questions concern fame, compromise, guilt and private character, not Bharat, sacred tradition or civilizational continuity strongly enough to warrant a directional certification.'
    ],
    evidence: [
      { kind: 'review', source: 'BFI — Nayak', claim: 'Describes Ray’s train-bound drama about a Bengali film star confronting his anxieties and compromises through an interview.', url: 'https://www.bfi.org.uk/film/4558c2dd-c432-5900-a6d3-9bfa0ed44871/nayak' },
      { kind: 'review', source: 'Wikipedia — Nayak', claim: 'Records the original screenplay and its focus on a movie star’s psychological and moral self-examination.', url: 'https://en.wikipedia.org/wiki/Nayak_(1966_film)' }
    ],
    filmUnderstanding: 'An original Bengali drama by Satyajit Ray following a famous actor on a train journey as a journalist’s questions trigger memories of compromise, ambition and guilt.',
    researchFocus: 'Bengali film star celebrity ethics Ray 1966 social context',
    redTeamChallenge: 'Its urban-elite perspective could be overread as representative of Bengali culture rather than one specific social milieu.',
    fact: 'The protagonist and incidents are fictional.',
    interpretation: 'The film’s moral seriousness earns Dharma and Social Dharma credit but not a strong civilizational or national verdict.',
    intent: 'No broad cultural judgment is inferred from the protagonist’s personal failures.'
  }),

  makeHardenedBatchFilm({
    title: 'Meghe Dhaka Tara', year: 1960, language: 'Bengali', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 2, itihasa: 4, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Partition', 'Refugee life', 'Bengal', 'Family sacrifice'],
    reasons: [
      'The film preserves the human cost of Partition and refugee displacement through an intensely Bengali family tragedy, giving Itihasa, Local Roots and Social Dharma substantial weight.',
      'Its focus is suffering, exploitation within family and social dislocation rather than a clear national or civilizational endorsement, so Neutral keeps historical memory distinct from certification.'
    ],
    evidence: [
      { kind: 'review', source: 'BFI — Meghe Dhaka Tara', claim: 'Identifies the film as a major work about a refugee family in post-Partition Bengal and the sacrifice of its central woman.', url: 'https://www.bfi.org.uk/film/d045be76-313c-5d66-8d25-6ed04f0f1183/meghe-dhaka-tara' },
      { kind: 'review', source: 'Indian Express — Ritwik Ghatak centenary', claim: 'Places Ghatak’s cinema, including Meghe Dhaka Tara, within the trauma of Partition and displacement.', url: 'https://indianexpress.com/article/express-sunday-eye/ritwik-ghatak-centenary-revisiting-the-life-and-legacy-of-indian-cinemas-rebel-auteur-10343524/lite/' }
    ],
    filmUnderstanding: 'A Bengali tragedy about an East Bengali refugee family after Partition, centred on a daughter whose labour and sacrifice sustain relatives who repeatedly exploit her.',
    researchFocus: 'Partition East Bengal refugee Kolkata family sacrifice Ghatak',
    redTeamChallenge: 'Its devastating family portrait can make rooted social life look only exploitative if separated from the refugee-displacement context that structures the story.',
    fact: 'The family is fictional but inhabits the historical reality of post-Partition refugee displacement in Bengal.',
    interpretation: 'Historical memory and social compassion are strong, while the overall certification direction remains non-ideological.',
    intent: 'No claim is made that the family represents all Bengali or Indian households.'
  }),

  makeHardenedBatchFilm({
    title: 'Goopy Gyne Bagha Byne', year: 1969, language: 'Bengali', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Bengali folklore', 'Music', 'Anti-war', 'Parampara'],
    reasons: [
      'Ray adapts a Bengali children’s tale into a musical fantasy whose humour, music, kings, ghosts and storytelling grammar are inseparable from Bengali cultural inheritance.',
      'Its anti-war ethic is expressed from within that rooted imaginative world rather than through contempt for inherited culture, supporting Civilizational Continuity, Parampara and Social Dharma.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Goopy Gyne Bagha Byne at 50', claim: 'Explores the film’s magic, music, literary lineage and enduring Bengali cultural resonance.', url: 'https://indianexpress.com/article/express-sunday-eye/a-little-bit-of-magic-goes-a-long-way-5605324/' },
      { kind: 'review', source: 'Times of India — 51 years of Goopy Gyne Bagha Byne', claim: 'Revisits Ray’s cult classic and its continuing relevance, including its anti-war satire and fantasy.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movies/news/51-years-of-goopy-gyne-bagha-byne-revisiting-rays-cult-classic-and-its-relevance-even-today/articleshow/75618299.cms' }
    ],
    filmUnderstanding: 'A Bengali musical fantasy adapted from Upendrakishore Ray Chowdhury’s story about two inept musicians who receive magical gifts and use them amid rival kingdoms and war.',
    researchFocus: 'Upendrakishore Ray Bengali folklore music anti war adaptation',
    redTeamChallenge: 'The film’s satire of kings and war could be misread as rejection of traditional cultural forms rather than playful use of them.',
    fact: 'The film adapts a Bengali literary-folkloric children’s story and is entirely fictional.',
    interpretation: 'The anti-war message operates through an affectionate indigenous fantasy grammar rather than cultural derision.',
    intent: 'No anti-civilizational intent is inferred from satire of foolish rulers.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts Upendrakishore Ray Chowdhury’s Bengali story into a musical fantasy.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Sairat', year: 2016, language: 'Marathi', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 1, itihasa: 2, parampara: 1, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Marathi roots', 'Caste', 'Honour violence', 'Mixed'],
    reasons: [
      'The film is deeply rooted in rural Maharashtra and refuses to abstract caste power away from love, family, class and local social reality, creating a strong Social Dharma signal.',
      'Its portrayal of caste-bound family honour is deliberately devastating rather than affirming, so criticism of hierarchy is not anti-Hindu by default; Mixed reflects rootedness plus severe critique of inherited social structure.'
    ],
    evidence: [
      { kind: 'review', source: 'Scroll — Sairat review', claim: 'Reads the romance through caste division, rural Maharashtra and the violence that follows.', url: 'https://scroll.in/article/807345/film-review-in-nagraj-manjules-spellbinding-sairat-hearts-race-but-caste-divides' },
      { kind: 'review', source: 'Indian Express — Erasing caste', claim: 'Uses Sairat to discuss how caste is central to the story and why removing it changes the film’s meaning.', url: 'https://indianexpress.com/article/opinion/columns/erasing-caste-dhadak-sairat-jahnvi-kapoor-5282127/' },
      { kind: 'interview', source: 'Indian Express — Nagraj Manjule interview', claim: 'Provides creator context on Manjule’s filmmaking and social concerns around his work.', url: 'https://indianexpress.com/article/entertainment/regional/nagraj-manjule-acting-is-fun-but-not-as-much-as-directing-4868318/' }
    ],
    filmUnderstanding: 'A Marathi inter-caste romance set in rural Maharashtra that begins as youthful love and becomes a study of caste power, family rupture, migration and honour violence.',
    researchFocus: 'Maharashtra caste honour killing inter caste romance Dalit representation',
    redTeamChallenge: 'A severe portrayal of caste-bound tradition can be misclassified as contempt for Indian civilisation instead of critique of a specific hierarchy and violence.',
    fact: 'The couple is fictional; caste hierarchy and honour violence are real social phenomena that structure the story.',
    interpretation: 'The film is rooted and socially serious while strongly rejecting one inherited hierarchy, producing a mixed civilizational signal rather than an anti-Bharat one.',
    intent: 'Criticism of caste violence is not treated as proof of hostility to Hindu civilisation.',
    risks: [{ id: 'regional-context', summary: 'Maharashtra caste structure and local social context are essential to the film’s meaning.', evidenceIndexes: [0,1,2], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Court', year: 2014, language: 'Marathi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 1, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Institutional critique', 'Mumbai', 'Justice', 'Neutral'],
    reasons: [
      'The film’s patient attention to courts, labour, policing and ordinary lives makes institutional accountability and human dignity central Social Dharma concerns.',
      'Criticism of an Indian legal system is not anti-national in itself, and the film does not strongly engage sacred or civilizational questions; Reviewed · Neutral is therefore appropriate.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Court review', claim: 'Calls the film a searing look at the judicial system and everyday institutional processes.', url: 'https://indianexpress.com/article/entertainment/movie-review/court-film-review-it-is-a-searing-unmissable-film%E2%80%8B-the-best-you-will-see-this-year/lite/' },
      { kind: 'review', source: 'Wikipedia — Court', claim: 'Records the multilingual Mumbai courtroom drama concerning a folk singer accused under contested legal theories.', url: 'https://en.wikipedia.org/wiki/Court_(film)' }
    ],
    filmUnderstanding: 'A multilingual Mumbai courtroom drama about an ageing protest singer prosecuted after a sewage worker’s death, observing lawyers, judges and institutions with documentary-like restraint.',
    researchFocus: 'Indian courts legal system folk singer labour Mumbai institutional critique',
    redTeamChallenge: 'A relentlessly bureaucratic portrait could be interpreted as general contempt for Indian institutions rather than criticism of procedural injustice.',
    fact: 'The case and characters are fictional, though the legal procedures and social conditions are designed to resemble real Indian institutions.',
    interpretation: 'Demanding institutional accountability is compatible with concern for India and does not automatically generate either certification or disqualification.',
    intent: 'No anti-national intent is inferred from criticism of legal process.'
  }),

  makeHardenedBatchFilm({
    title: 'Harishchandrachi Factory', year: 2009, language: 'Marathi', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Dadasaheb Phalke', 'Indian cinema', 'Marathi', 'Cultural memory'],
    reasons: [
      'By dramatising Dadasaheb Phalke’s effort to make Raja Harishchandra, the film treats the birth of Indian feature cinema as indigenous cultural achievement worthy of memory and pride.',
      'Its comic biographical compression remains a Narrative Integrity caveat, but the underlying celebration of Indian creative institution-building strongly supports Itihasa and Civilizational Continuity.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Harishchandrachi Factory review', claim: 'Reviews the Marathi film’s affectionate reconstruction of Dadasaheb Phalke’s making of Raja Harishchandra.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/Harishchandrachi-Factory/movie-review/5567829.cms' },
      { kind: 'review', source: 'Times of India — Harishchandrachi Factory', claim: 'Discusses the film as a lively biographical account of the beginnings of Indian cinema.', url: 'https://timesofindia.indiatimes.com/bollywood/harishchandrachi-factory-movie-review/articleshow/5148699.cms' }
    ],
    filmUnderstanding: 'A Marathi comic biopic about Dadasaheb Phalke’s determination to make Raja Harishchandra and establish feature filmmaking in India.',
    researchFocus: 'Dadasaheb Phalke Raja Harishchandra first Indian feature film biography accuracy',
    redTeamChallenge: 'A warm comic treatment can simplify collaborators, finances and the messy institutional history of early Indian cinema around one heroic founder.',
    fact: 'Phalke made Raja Harishchandra in 1913 and is foundational to Indian feature cinema; the film dramatises his process and family life.',
    interpretation: 'Biographical compression does not overturn the strong celebration of indigenous creative achievement and cultural institution-building.',
    intent: 'The film is treated as an affectionate biopic, not a complete archival history of early cinema.',
    risks: [{ id: 'source-adaptation', summary: 'A complex early-cinema history is compressed into a comic biographical feature.', evidenceIndexes: [0,1], materiality: 'medium' }],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'The biopic compresses and comic-dramatises Phalke’s documented early-cinema history.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Killa', year: 2014, language: 'Marathi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Marathi', 'Konkan', 'Childhood', 'Neutral'],
    reasons: [
      'The film’s Konkan landscape, Marathi social world and gentle attention to childhood adjustment give it genuine regional rootedness and humane Social Dharma value.',
      'Its central concerns are grief, friendship and growing up rather than strong civilizational or national alignment, so Neutral preserves the distinction between local authenticity and certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Killa review', claim: 'Reviews the Marathi coming-of-age story and its coastal Maharashtra setting, school life and grief.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/movie-review-marathi-killa/movie-review/47827165.cms' },
      { kind: 'review', source: 'Wikipedia — Killa', claim: 'Records the Marathi film’s story of a boy adjusting to a new Konkan town after his father’s death.', url: 'https://en.wikipedia.org/wiki/Killa_(film)' }
    ],
    filmUnderstanding: 'A Marathi coming-of-age drama about a boy and his widowed mother moving to coastal Maharashtra, where school friendships and landscape shape his adjustment to grief and change.',
    researchFocus: 'Konkan Marathi childhood grief school local culture',
    redTeamChallenge: 'Beautiful regional imagery can create a false pressure to certify a film whose thematic direction is mainly personal.',
    fact: 'The story is fictional and regionally grounded in Maharashtra.',
    interpretation: 'The local setting is meaningful, but the film remains ideologically low-signal and therefore Neutral.',
    intent: 'No larger political or civilizational programme is inferred.'
  }),

  makeHardenedBatchFilm({
    title: 'Chaar Sahibzaade', year: 2014, language: 'Punjabi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Sikh history', 'Sacrifice', 'Punjab', 'Sacred memory'],
    reasons: [
      'The film is explicitly organised around Sikh sacred-historical memory, courage, martyrdom and defence against persecution, giving Dharma, Itihasa, Parampara and Raksha exceptionally strong weight.',
      'Because it portrays revered historical figures, source fidelity matters greatly; the certification therefore coexists with a standing requirement not to treat cinematic reconstruction as a substitute for primary Sikh historical sources.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Chaar Sahibzaade review', claim: 'Reviews the animated historical film about Guru Gobind Singh’s four sons and their sacrifice.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/chaar-sahibzaade/movie-review/45055529.cms' },
      { kind: 'interview', source: 'Indian Express — Sikh history and film', claim: 'Records filmmaker discussion of the difficulty of documenting Sikh history accurately and the need to handle versions carefully.', url: 'https://indianexpress.com/article/cities/chandigarh/sikh-history-hasnt-been-documented-well-and-some-of-the-versions-available-are-inaccurate-4365320/' }
    ],
    filmUnderstanding: 'An animated historical-religious film recounting the lives and martyrdom of Guru Gobind Singh’s four sons within Sikh memory of Mughal-era persecution and resistance.',
    researchFocus: 'Guru Gobind Singh four Sahibzade Sikh history martyrdom source accuracy',
    redTeamChallenge: 'Sacred-history cinema can harden one narrative version into unquestioned fact unless sources and devotional reconstruction are distinguished carefully.',
    fact: 'The four Sahibzade and their martyrdom belong to documented and sacred Sikh historical memory; the film reconstructs dialogue and scenes cinematically.',
    interpretation: 'The film’s reverence for sacrifice, faith and resistance is strongly aligned with the declared Bharatiya lens while still requiring source humility.',
    intent: 'No claim is made that every visual or dialogue detail is directly attested in primary sources.',
    risks: [{ id: 'historical-claims', summary: 'Sacred historical events are reconstructed for animation and require careful distinction between attested history and cinematic detail.', evidenceIndexes: [0,1], materiality: 'high' }],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The broad sacred-historical core is real, while detailed scenes and dialogue are cinematic reconstruction.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Qismat', year: 2018, language: 'Punjabi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Punjabi', 'Romance', 'Family', 'Neutral'],
    reasons: [
      'The film is strongly Punjabi in language, family dynamics and emotional register, giving it authentic Local Roots.',
      'Its main concern is romantic tragedy rather than national, sacred or civilizational argument, so the rooted setting should not be inflated into Sanghi Certified.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Qismat review', claim: 'Reviews the Punjabi romantic tragedy, family relationships and central performances.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movie-reviews/qismat/movie-review/65913942.cms' },
      { kind: 'review', source: 'Wikipedia — Qismat', claim: 'Records the 2018 Punjabi romantic drama and its fictional relationship story.', url: 'https://en.wikipedia.org/wiki/Qismat_(2018_film)' }
    ],
    filmUnderstanding: 'A Punjabi romantic drama about a carefree young man whose relationship with a woman becomes a story of love, family pressure, illness and loss.',
    researchFocus: 'Punjabi romance family illness local culture',
    redTeamChallenge: 'Commercial success and linguistic rootedness can pressure the classifier toward a stronger cultural verdict than the narrative supports.',
    fact: 'The story is fictional and primarily romantic melodrama.',
    interpretation: 'Regional authenticity is real but ideological signal is low, supporting Neutral.',
    intent: 'No broader social or civilizational thesis is inferred.'
  })
];