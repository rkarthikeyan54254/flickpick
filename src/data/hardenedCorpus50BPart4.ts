import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50BPart4: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Jalsaghar', year: 1958, language: 'Bengali', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 2, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Bengali roots', 'Classical music', 'Parampara', 'Feudal decline'],
    reasons: ['The film preserves Hindustani classical music, performance and aristocratic patronage as serious cultural inheritance rather than decorative nostalgia.', 'At the same time, it presents the zamindar’s attachment to prestige and a dying order as destructive, so reverence for art and critique of feudal Parampara coexist in a genuinely Mixed / Contested result.'],
    evidence: [
      { kind: 'review', source: 'Roger Ebert — The Music Room', claim: 'Reads the film as a tragedy of an aristocrat clinging to music, prestige and a disappearing social order.', url: 'https://www.rogerebert.com/reviews/great-movie-the-music-room-1958' },
      { kind: 'review', source: 'Criterion — The Music Room', claim: 'Places Satyajit Ray’s film at the clash between tradition, modernity, aristocratic decline and classical musical culture.', url: 'https://www.criterion.com/films/27657-the-music-room' }
    ],
    filmUnderstanding: 'Satyajit Ray’s Bengali adaptation about a declining zamindar who pours his remaining wealth and identity into classical music performances in his music room.',
    researchFocus: 'zamindar classical music tradition modernity Bengali adaptation', redTeamChallenge: 'Cultural reverence may be confused with endorsement of feudal hierarchy, or feudal critique with contempt for classical tradition.',
    fact: 'The film is adapted from Tarasankar Bandyopadhyay’s story and depicts a fictional aristocratic household in decline.', interpretation: 'The music/tradition layer is deeply respectful while the social order is critically examined, supporting Mixed rather than a simple positive or negative label.', intent: 'No claim is made that the film endorses zamindari as a political institution.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts a literary source and condenses its social world into Ray’s cinematic tragedy.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Devi', year: 1960, language: 'Bengali', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 2, civilizationalContinuity: 4, rashtra: 1, itihasa: 3, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Bengali roots', 'Sacred belief', 'Superstition', 'Parampara'],
    reasons: ['The film takes Shakta/Durga devotional imagery and nineteenth-century Bengali family life seriously enough for belief to carry genuine emotional and social force.', 'Its central tragedy is also a severe warning about a patriarch declaring a young woman divine and allowing faith to override her personhood, making the sacred/Parampara signal irreducibly contested.'],
    evidence: [
      { kind: 'review', source: 'Criterion — Devi essay', claim: 'Examines Ray’s film through seeing, believing, family power and the possibility that Doyamoyee is treated as a goddess.', url: 'https://www.criterion.com/current/posts/7585-devi-seeing-and-believing' },
      { kind: 'review', source: 'Time Out — Devi', claim: 'Reviews the film as a critique of religious obsession and superstition within a Bengali household.', url: 'https://www.timeout.com/movies/devi' }
    ],
    filmUnderstanding: 'A Bengali literary adaptation about a young daughter-in-law whose father-in-law becomes convinced she is an incarnation of the goddess, transforming family reverence into tragedy.',
    researchFocus: 'Durga Kali goddess Bengali family superstition religious obsession', redTeamChallenge: 'A critique of destructive credulity could be flattened into a claim that the film despises Hindu sacred tradition as such.',
    fact: 'The story is fictional/literary and uses goddess belief as the engine of a family tragedy.', interpretation: 'Sacred imagery is culturally serious, but coercive deification and patriarchal authority are materially criticised; Mixed is therefore more faithful than automatic rejection.', intent: 'No intent to ridicule Hindu devotees as a class is inferred from the critique of one household’s extreme belief.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts a Bengali literary story and uses religious belief as its central dramatic conflict.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Hirak Rajar Deshe', year: 1980, language: 'Bengali', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 2, itihasa: 2, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bengali roots', 'Anti-tyranny', 'Satire', 'Goopy-Bagha'],
    reasons: ['The film extends a distinctly Bengali literary-musical fantasy tradition while using rhyme, folk humour and familiar Goopy-Bagha characters to defend truth and ordinary people against tyranny.', 'Its attack is directed at autocracy, propaganda and coerced conformity rather than at Bengali or Indian tradition, giving Social Dharma and civilizational continuity a positive signal.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Satyajit Ray and aggressive nationalism', claim: 'Uses Hirak Rajar Deshe as an example of Ray’s depiction of sycophancy, brainwashing and authoritarian power.', url: 'https://indianexpress.com/article/express-sunday-eye/what-satyajit-rays-ghare-baire-tells-us-about-our-age-of-aggressive-nationalism-6322470/lite/' },
      { kind: 'review', source: 'The Telegraph — Satyajit Ray films that anticipated the times', claim: 'Discusses Hirak Rajar Deshe as a durable political satire about authoritarian control and social conscience.', url: 'https://www.telegraphindia.com/amp/entertainment/ganashatru-to-hirak-rajar-deshe-satyajit-rays-films-that-anticipated-the-times-to-come/cid/2158719' }
    ],
    filmUnderstanding: 'A Bengali musical fantasy sequel in which Goopy and Bagha encounter an autocratic king who suppresses dissent and uses brainwashing to preserve power.',
    researchFocus: 'Bengali fantasy Goopy Bagha autocracy brainwashing satire', redTeamChallenge: 'Anti-authoritarian satire could be mistaken for a rejection of kingship, nation or inherited social order in general.',
    fact: 'The film is fictional fantasy and political satire.', interpretation: 'Its ethical target is coercive rule and manufactured obedience, while its cultural form is unmistakably rooted in Bengali storytelling and music.', intent: 'No real contemporary government is asserted as the sole literal referent.'
  }),
  makeHardenedBatchFilm({
    title: 'Bhooter Bhabishyat', year: 2012, language: 'Bengali', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Kolkata', 'Heritage', 'Bengali roots', 'Satire'],
    reasons: ['The ghosts from different periods of Bengal turn a threatened old Kolkata mansion into a literal archive of memory, language, class and cultural change.', 'The film’s comic target is indiscriminate redevelopment and social pretension rather than inherited culture itself, producing a strong Local Roots/civilizational-continuity signal.'],
    evidence: [
      { kind: 'interview', source: 'The Telegraph — Bhooter Bhabishyat', claim: 'Director Anik Dutta discusses disappearing heritage buildings, malls and using ghosts from different eras to embody Kolkata’s social history.', url: 'https://www.telegraphindia.com/entertainment/tollywood-bhooter-bhobishyot/cid/439141' },
      { kind: 'review', source: 'Indian Express — Bollywood remake review referencing Bhooter Bhabishyat', claim: 'Identifies the original Bengali film as a fresh ghost-satire premise later remade in Hindi.', url: 'https://indianexpress.com/article/entertainment/movie-review/spookbook/' }
    ],
    filmUnderstanding: 'A Bengali supernatural comedy about ghosts from different eras sharing an old Kolkata mansion threatened by redevelopment.',
    researchFocus: 'Kolkata heritage old mansion ghosts redevelopment Bengali social history', redTeamChallenge: 'Nostalgia for heritage could romanticise old class structures or treat modern development as inherently corrupt.',
    fact: 'The story is fictional and uses ghosts as comic embodiments of different historical periods.', interpretation: 'Heritage and cultural memory are defended without requiring literal belief in ghosts or rejection of all development.', intent: 'No empirical supernatural claim is inferred.'
  }),
  makeHardenedBatchFilm({
    title: 'Natrang', year: 2010, language: 'Marathi', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Tamasha', 'Marathi roots', 'Gender', 'Folk tradition'],
    reasons: ['Tamasha music, dance, performance discipline and the artist’s hunger to create are treated as serious Marathi folk inheritance rather than low-status decoration.', 'The protagonist’s nachya transformation also exposes stigma, gender policing and the costs imposed by society and family, so celebration of Parampara and critique of its social boundaries coexist.'],
    evidence: [
      { kind: 'interview', source: 'Times of India — Atul Kulkarni on Natrang', claim: 'Discusses the actor’s transformation from wrestler to dancer for a film centred on the Tamasha stage and the nachya role.', url: 'https://timesofindia.indiatimes.com/entertainment/regional/movie-details/news-interviews/atul-kulkarni-goes-from-wrestler-to-dancer/articleshow/5391253.cms' },
      { kind: 'primary', source: 'Academic article — The Nachya in Natrang', claim: 'Analyses the nachya figure and the regional/gender tensions of representing Tamasha in Marathi cinema.', url: 'https://www.researchgate.net/publication/262826928_The_Nachya_in_Natrang_Queering_bodies_in_representations_of_Tamasha_in_Marathi_cinema' }
    ],
    filmUnderstanding: 'A Marathi literary adaptation about a labourer obsessed with Tamasha who builds a troupe and performs the effeminate nachya role at great personal and social cost.',
    researchFocus: 'Tamasha nachya Marathi folk theatre gender family stigma', redTeamChallenge: 'The film could either romanticise a marginalised folk form or use it mainly to indict Marathi social tradition as cruel.',
    fact: 'The film adapts Anand Yadav’s novel and stages the culturally specific nachya role within Tamasha.', interpretation: 'Folk tradition is deeply valued while social stigma around performance/gender is criticised, producing a Mixed verdict.', intent: 'Criticism of stigma is not treated as contempt for Marathi folk art itself.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts a Marathi novel and translates the nachya/Tamasha social world to cinema.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Fandry', year: 2014, language: 'Marathi', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Marathi roots', 'Caste', 'Social Dharma', 'Village'],
    reasons: ['The film is deeply embedded in rural Marathi speech, labour and family life rather than observing caste discrimination from an abstract outside position.', 'Its central indictment of humiliation and untouchability is severe, but caste critique is treated as a Social Dharma question rather than automatic hostility toward Bharat; the tension with inherited hierarchy keeps the result Mixed.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Fandry review', claim: 'Reviews the rural Marathi coming-of-age story and the caste humiliation surrounding Jabya’s family.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/fandry-nagraj-manjule-somnath-awghade-kishore-kadam-rajeshwari-kharat-suraj-pawar/movie-review/30405096.cms' },
      { kind: 'review', source: 'ZEE5 — Fandry review', claim: 'Discusses the film’s treatment of discrimination, social hierarchy and Jabya’s desire for dignity.', url: 'https://www.zee5.com/zee5news/fandry-movie-review-somnath-awghades-film-highlights-discrimination-in-a-unique-way/' }
    ],
    filmUnderstanding: 'A Marathi rural coming-of-age drama about a Dalit boy whose school-age desire and family work are shaped by caste humiliation.',
    researchFocus: 'Marathi village caste untouchability family dignity social discrimination', redTeamChallenge: 'Severe caste critique could be misclassified either as anti-civilizational contempt or, conversely, sanitised into generic uplift.',
    fact: 'The story is fictional but draws on recognisable caste practices and social hierarchy.', interpretation: 'The critique is materially rooted in local life and human dignity, but the inherited-hierarchy conflict is central enough to remain Mixed.', intent: 'No collective intent claim is made about all Hindu or Marathi communities.'
  }),
  makeHardenedBatchFilm({
    title: 'The Disciple', year: 2020, language: 'Marathi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Hindustani classical music', 'Guru-shishya', 'Parampara', 'Marathi'],
    reasons: ['Hindustani classical music, riyaz, lineage and guru-shishya discipline are the film’s entire moral and aesthetic environment rather than a decorative prestige code.', 'The film is unsentimental about mediocrity, hierarchy and self-deception inside tradition, but critique comes from intimate investment in preserving artistic truth, not from contempt for Parampara.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — The Disciple review', claim: 'Reviews the film’s classical-music world, guru-shishya relationships, riyaz and the protagonist’s struggle with artistic truth.', url: 'https://indianexpress.com/article/entertainment/movie-review/the-disciple-review-a-delicately-woven-offering-7297678/' },
      { kind: 'review', source: 'Scroll — The Disciple review', claim: 'Analyses the protagonist’s devotion to Hindustani classical music, discipline, lineage and anxieties about authenticity.', url: 'https://scroll.in/reel/993571/the-disciple-review-bold-insights-and-a-few-missing-beats-in-the-saga-of-a-classical-singer/1000' }
    ],
    filmUnderstanding: 'A Marathi drama about a Hindustani classical vocalist whose life is organised around practice, teachers, inherited recordings and the demand for artistic authenticity.',
    researchFocus: 'Hindustani classical music guru shishya riyaz tradition authenticity', redTeamChallenge: 'The film’s scepticism about gatekeepers and artistic failure could be mistaken for rejection of classical tradition.',
    fact: 'The story is fictional but built from recognisable institutions and disciplines of Hindustani classical music.', interpretation: 'Its criticism is internal to reverence for the art and therefore strengthens rather than negates Parampara.', intent: 'No claim is made that one fictional guru represents the entire classical tradition.'
  }),
  makeHardenedBatchFilm({
    title: 'Deool', year: 2011, language: 'Marathi', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Village', 'Faith', 'Commercialisation', 'Marathi roots'],
    reasons: ['The film begins from sincere village faith and devotional experience, not from the assumption that belief itself is foolish.', 'It then satirises the commercialisation, politics and branding that gather around a new temple, creating a rooted reformist critique of religious economy rather than a clean devotional endorsement; Mixed / Contested fits best.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Deool feature', claim: 'Discusses the village, Kesha’s devotion and the film’s critique of commercialisation around religion.', url: 'https://timesofindia.indiatimes.com/farm-will/articleshow/10677481.cms' },
      { kind: 'review', source: 'Indian Express — Deool controversy', claim: 'Records the producer’s defence of the film/song as satire on the commodification of faith amid objections from a Hindu group.', url: 'https://indianexpress.com/article/cities/mumbai/hindu-group-wants-insulting-song-removed-from-deool/' }
    ],
    filmUnderstanding: 'A Marathi village satire in which one man’s devotional experience leads to a temple project that becomes entangled with politics, commerce, tourism and status.',
    researchFocus: 'village temple faith commercialisation religion satire Marathi', redTeamChallenge: 'Satire of temple commerce may slip into contempt for Hindu devotion, while devotional framing may romanticise credulity.',
    fact: 'The story is fictional and distinguishes an individual’s faith from the social economy built around it.', interpretation: 'Sincere belief and strong criticism of commodification coexist, warranting a Mixed verdict.', intent: 'The available record supports satire of commercialisation rather than a claim that the makers intended to insult Hindu worship.'
  }),
  makeHardenedBatchFilm({
    title: 'Qissa', year: 2013, language: 'Punjabi', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 4, rashtra: 2, itihasa: 4, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Partition', 'Punjabi roots', 'Gender', 'Family'],
    reasons: ['Partition displacement and Sikh/Punjabi family memory are central to the film’s haunted world, giving Itihasa and Local Roots substantial weight.', 'The father’s obsession with a male heir violently distorts family duty and gender identity, so the rootedness is inseparable from a severe critique of patriarchal Parampara; Mixed / Contested preserves both.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Qissa review', claim: 'Reviews the Partition-displaced Sikh family’s story and the father’s coercive treatment of a daughter raised as a son.', url: 'https://indianexpress.com/article/entertainment/movie-review/qissa-movie-review/lite/' },
      { kind: 'interview', source: 'Indian Express — Anup Singh on Qissa', claim: 'Discusses the film’s relationship to Partition memory, identity and the haunting effects of inherited violence.', url: 'https://indianexpress.com/article/entertainment/bollywood/ghost-of-the-past/lite/' }
    ],
    filmUnderstanding: 'A Punjabi post-Partition drama about a displaced Sikh father who, desperate for a male heir, raises his fourth daughter as a boy with devastating consequences.',
    researchFocus: 'Partition Sikh family male heir gender identity Punjabi memory', redTeamChallenge: 'The film could be read as turning Sikh/Punjabi family tradition into pathology rather than critiquing one father’s trauma and coercion.',
    fact: 'The story is fictional but explicitly rooted in Partition displacement and Punjabi identity.', interpretation: 'Historical memory and local rootedness are powerful, while patriarchal family coercion is the central moral problem; clean certification would flatten that tension.', intent: 'No collective blame is inferred toward Sikh or Punjabi families.'
  }),
  makeHardenedBatchFilm({
    title: 'Sajjan Singh Rangroot', year: 2018, language: 'Punjabi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 3, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Sikh history', 'Military service', 'World War I', 'Punjabi'],
    reasons: ['The film restores Sikh soldiers of the British Indian Army on the First World War Western Front to popular Punjabi historical memory and treats courage, comradeship and sacrifice with sustained respect.', 'Its characters and many incidents are broadly fictionalised, so certification reflects remembrance of service and community rather than a claim that Sajjan Singh is a literal documentary biography.'],
    evidence: [
      { kind: 'review', source: 'The Guardian — Sajjan Singh Rangroot review', claim: 'Calls the film a broadly fictionalised commemoration of Sikh soldiers who served in the British Indian Army during World War I.', url: 'https://www.theguardian.com/film/2018/mar/22/sajjan-singh-rangroot-pankaj-batra-diljit-dosanjh-review' },
      { kind: 'review', source: 'Rotten Tomatoes — Sajjan Singh Rangroot', claim: 'Summarises the film as a British Indian Army officer fighting on the Western Front and aggregates contemporary criticism.', url: 'https://www.rottentomatoes.com/m/sajjan_singh_rangroot' }
    ],
    filmUnderstanding: 'A Punjabi war drama inspired by the service of Sikh soldiers in the British Indian Army during World War I, using fictional characters to commemorate their Western Front experience.',
    researchFocus: 'Sikh soldiers World War I British Indian Army historical accuracy sacrifice', redTeamChallenge: 'Military remembrance may blur colonial service, anti-colonial aspiration and invented heroics into a simplified patriotic narrative.',
    fact: 'Indian/Sikh soldiers served on the Western Front in World War I; the named characters and many dramatic incidents are fictionalised.', interpretation: 'The service, sacrifice and Sikh historical-memory signal remains strong even with a visible adaptation warning.', intent: 'No claim is made that the protagonist’s complete life is a documented single-person biography.',
    risks: [{ id: 'historical-claims', summary: 'The film commemorates real Sikh military history through broadly fictionalised characters and incidents.', evidenceIndexes: [0, 1], materiality: 'medium' }],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'Real wartime service is represented through a broadly fictionalised dramatic narrative.' }]
  }),
];
