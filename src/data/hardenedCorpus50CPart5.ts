import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50CPart5 = [
  makeHardenedBatchFilm({
    title: 'Pawankhind', year: 2022, language: 'Marathi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Chhatrapati Shivaji Maharaj', 'Baji Prabhu Deshpande', 'Maratha history', 'Hindavi Swarajya', 'Raksha'],
    reasons: [
      'The film centres Baji Prabhu Deshpande and the Bandal army’s sacrifice to secure Chhatrapati Shivaji Maharaj’s escape, making duty, collective protection and Swarajya its unmistakable moral core.',
      'It is explicitly a cinematic recreation rather than a complete documentary account of Pavan Khind, so heroic compression and dramatization remain visible Narrative Integrity caveats without reversing the strong Rashtra and Itihasa signal.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Pawankhind review', claim: 'Describes the film as an epic retelling of the Battle of Pavan Khind centred on Shivaji Maharaj, Baji Prabhu Deshpande and the Bandal army, while noting it is a cinematic recreation rather than complete documentation.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/pawankhind/movie-review/89668027.cms' },
      { kind: 'review', source: 'Wikipedia — Pawankhind', claim: 'Records the Marathi historical drama as based on the Battle of Pavan Khind and Baji Prabhu Deshpande’s defence during Shivaji Maharaj’s escape.', url: 'https://en.wikipedia.org/wiki/Pawankhind' },
    ],
    filmUnderstanding: 'A Marathi historical war drama about the 1660 escape from Panhala and the sacrificial defence at Pavan Khind led by Baji Prabhu Deshpande.',
    researchFocus: 'Pavan Khind Baji Prabhu Deshpande Shivaji Maharaj Bandal army history accuracy Swarajya',
    redTeamChallenge: 'Heroic historical cinema can simplify tactical chronology, magnify individual deeds and flatten political complexity into legend.',
    fact: 'The Battle of Pavan Khind and Baji Prabhu Deshpande are historical; the film openly presents a dramatized recreation rather than exhaustive documentation.',
    interpretation: 'The historical caveat is material but separate from the film’s strong civilizational memory, duty and protection orientation.',
    intent: 'No claim is made that every exchange, combat beat or chronology is literal history.',
    risks: [{ id: 'historical-claims', summary: 'A celebrated historical episode is condensed and dramatized for heroic popular cinema.', evidenceIndexes: [0, 1], materiality: 'high' }],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The film is a cinematic recreation and should not be treated as a complete documentary record of Pavan Khind.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Har Har Mahadev', year: 2022, language: 'Marathi', status: 'mixed', sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 3, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Shivaji Maharaj', 'Baji Prabhu', 'Hindavi Swarajya', 'Historical controversy', 'Mixed'],
    reasons: [
      'The film is strongly affirmative toward Chhatrapati Shivaji Maharaj, Baji Prabhu Deshpande and Hindavi Swarajya, so its cultural and Rashtra direction is clearly positive.',
      'However, descendants and public figures raised specific objections to invented confrontations, chronology and community portrayals, making historical-source fidelity too disputed for an uncomplicated Certified verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Har Har Mahadev controversy explained', claim: 'Documents specific objections including an unsupported Shivaji-Baji Prabhu fight, disputed presence at the Afzal Khan episode and objections from Bandal descendants.', url: 'https://indianexpress.com/article/explained/har-har-mahadev-movie-controversy-explained-8264417/' },
      { kind: 'review', source: 'Times of India — Har Har Mahadev review', claim: 'Describes the film as a big-screen historical spectacle about the beginnings of Hindavi Swarajya and the Pavan Khind story.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/har-har-mahadev/etmoviereview/95080443.cms' },
    ],
    filmUnderstanding: 'A Marathi historical action drama about Shivaji Maharaj, Baji Prabhu and the emergence of Hindavi Swarajya, using substantial dramatic invention.',
    researchFocus: 'Shivaji Maharaj Baji Prabhu Pavan Khind Afzal Khan Bandal descendants historical accuracy',
    redTeamChallenge: 'Strong civilizational affirmation cannot compensate for invented incidents if those inventions materially reshape the historical relationship among revered figures and communities.',
    fact: 'The historical personalities and battles are real; multiple specific scenes and relationships in the film were publicly challenged as unsupported or distorted.',
    interpretation: 'Affirmative Rashtra and civilizational intent coexists with serious source-fidelity debt, producing a genuinely Mixed verdict.',
    intent: 'The verdict does not infer malicious distortion; it records the gap between heroic purpose and contested history.',
    risks: [
      { id: 'historical-claims', summary: 'Specific scenes and relationships involving Shivaji Maharaj, Baji Prabhu and Bandal history were challenged as unsupported by the historical record.', evidenceIndexes: [0, 1], materiality: 'high' },
      { id: 'social-radar', summary: 'The objections came from descendants, historians and political actors and were specific enough to require retention in the record.', evidenceIndexes: [0], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'Material historical inventions and disputed portrayals prevent the film from functioning as a reliable historical account.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Mee Vasantrao', year: 2022, language: 'Marathi', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Vasantrao Deshpande', 'Hindustani classical music', 'Marathi culture', 'Guru-parampara', 'Biopic'],
    reasons: [
      'The film treats Hindustani classical music, training, artistic discipline and Marathi musical culture as inherited traditions worth preserving while still allowing Vasantrao Deshpande to form an individual style beyond rigid gharana boundaries.',
      'Its biographical reconstruction naturally compresses a long artistic life, but the central cultural act is transmission of Indian classical music rather than celebrity worship.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Mee Vasantrao review', claim: 'Describes the film as a biopic of Vasantrao Deshpande, tracing his struggles, musical growth, mentors and distinctive classical style.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/mee-vasantrao/movie-review/90689647.cms' },
      { kind: 'review', source: 'Wikipedia — Me Vasantrao', claim: 'Records the Marathi musical biopic based on Hindustani classical vocalist Vasantrao Deshpande.', url: 'https://en.wikipedia.org/wiki/Me_Vasantrao' },
    ],
    filmUnderstanding: 'A Marathi musical biopic following Vasantrao Deshpande from a difficult upbringing through training, experimentation and recognition as a major Hindustani classical vocalist.',
    researchFocus: 'Vasantrao Deshpande Hindustani classical music gharana Marathi natya sangeet biography accuracy',
    redTeamChallenge: 'A family-linked biopic can smooth over failures or disputes and turn artistic biography into reverential memory.',
    fact: 'Vasantrao Deshpande was a historical classical vocalist; the film reconstructs episodes of his life and musical development for cinema.',
    interpretation: 'The reconstruction caveat does not weaken the film’s strong Parampara and Civilizational Continuity through Indian classical music.',
    intent: 'No claim is made that every private exchange in the biopic is independently documented.',
    risks: [{ id: 'source-adaptation', summary: 'A long artistic biography is condensed into a feature-film narrative.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Katyar Kaljat Ghusali', year: 2015, language: 'Marathi', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Hindustani classical music', 'Sangeet Natak', 'Guru-shishya', 'Hindu-Muslim', 'Marathi theatre'],
    reasons: [
      'Indian classical music is the film’s sovereign value: rivalry, humility, ego, teaching and redemption are all judged through commitment to the art rather than through communal identity.',
      'Its Hindu Pandit and Muslim Khansaheb inhabit the same musical civilization, preserving a Marathi Sangeet Natak classic while showing prejudice, competition and eventual moral realization without degrading either religious community as a whole.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Katyar Kaljat Ghusali review', claim: 'Calls the film a rich treasure of classical music adapted from the landmark Marathi play and centres the rivalry between Pandit Bhanushankar and Khansaheb Aftab Hussain.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/marathi-movie-review-katyar-kaljat-ghusli/movie-review/49765532.cms' },
      { kind: 'interview', source: 'Indian Express — Shankar Mahadevan on Katyar', claim: 'Describes the Marathi play’s deep place in cultural memory and the film adaptation built around its classical-music tradition.', url: 'https://indianexpress.com/article/entertainment/bollywood/song-sung-true-11/lite/' },
    ],
    filmUnderstanding: 'A Marathi film adaptation of the classic Sangeet Natak about two rival classical musicians and the moral consequences of ego, generosity and artistic inheritance.',
    researchFocus: 'Pandit Khansaheb Hindustani classical music Hindu Muslim gharana Marathi Sangeet Natak adaptation',
    redTeamChallenge: 'Because the Muslim Khansaheb becomes the principal antagonist, a careless reading could turn artistic rivalry into communal coding.',
    fact: 'The story explicitly places Hindu and Muslim musicians inside a shared Hindustani classical tradition and judges characters by ego, integrity and music rather than communal belonging.',
    interpretation: 'The shared artistic civilization and guru-shishya transmission dominate the narrative, supporting Parampara without a community-contempt finding.',
    intent: 'No claim is made that a fictional antagonist stands for his religious community.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts and expands a canonical Marathi musical play for cinema.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Chaar Sahibzaade', year: 2014, language: 'Punjabi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Guru Gobind Singh', 'Sahibzaade', 'Sikh history', 'Khalsa', 'Sacrifice'],
    reasons: [
      'The four Sahibzaade are presented through courage, refusal of forced conversion, sacrifice and defence of the Sikh Panth, making Dharma, Raksha and sacred historical memory the film’s centre.',
      'The production deliberately avoids ordinary actor portrayal of Guru Gobind Singh and uses animation/still representation because of Sikh sensitivities, indicating unusual care toward sacred representation even while historical cinema necessarily compresses events.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Chaar Sahibzaade review', claim: 'Describes the film as the heroic story of Guru Gobind Singh’s four sons, their sacrifice, defence of faith and resistance to forced conversion and tyranny.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/chaar-sahibzaade/movie-review/45055529.cms' },
      { kind: 'review', source: 'Indian Express — Chaar Sahibzaade review', claim: 'Treats the film as a historical-faith animation carrying Sikh history, teachings, ardas and hymns while noting screenplay simplifications.', url: 'https://indianexpress.com/article/entertainment/movie-review/chaar-sahibzaade-movie-review-hary-baweja-om-puri-star-rating-4369952/' },
    ],
    filmUnderstanding: 'An animated Punjabi/Hindi historical-faith film recounting the lives and martyrdom of Guru Gobind Singh’s four sons during conflict with Mughal power.',
    researchFocus: 'Guru Gobind Singh four Sahibzaade Chamkaur Sirhind forced conversion Sikh history source fidelity sacred depiction',
    redTeamChallenge: 'Devotional historical cinema can simplify military and political context and present adversaries without enough nuance.',
    fact: 'The Sahibzaade and their martyrdom belong to Sikh historical memory; the feature film dramatizes and compresses that history for family audiences.',
    interpretation: 'The sacred-historical representation is strongly affirmative and unusually careful about Sikh visual conventions.',
    intent: 'Certification does not claim that every narrated detail resolves all historiographical questions.',
    risks: [{ id: 'historical-claims', summary: 'A complex sacred-historical episode is condensed into animated popular history.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Nanak Shah Fakir', year: 2015, language: 'Punjabi', status: 'mixed', sourceBasis: 'biopic',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 5, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Guru Nanak', 'Sikhism', 'Sacred representation', 'SGPC controversy', 'Mixed'],
    reasons: [
      'The film is plainly reverential toward Guru Nanak’s teachings of Ik Onkar, equality and selflessness and was made as a spiritual biographical work rather than satire or attack.',
      'At the same time, the visual embodiment of Guru Nanak and the casting/depiction of members of the Guru’s family triggered sustained objections from Sikh institutions and groups over sacred representation. Reverent intent and a serious Parampara conflict therefore coexist.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Nanak Shah Fakir review', claim: 'Describes the film as a reverential life-and-teachings biopic of Guru Nanak and notes the use of computer graphics and concealed face because of religious sensitivity.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/nanak-shah-fakir/movie-review/46944818.cms' },
      { kind: 'review', source: 'Indian Express — Nanak Shah Fakir controversy', claim: 'Explains sustained Sikh objections and SGPC/Akal Takht controversy over visual portrayals of Guru Nanak and members of the Guru’s family.', url: 'https://indianexpress.com/article/research/nanak-shah-fakir-controversy-why-sikhism-prohibits-pictorial-depiction-of-the-gurus-5144997/lite/' },
      { kind: 'review', source: 'Indian Express — film row explained', claim: 'Records the film’s withdrawal, later clearances and renewed objections over Sikh sacred-depiction rules.', url: 'https://indianexpress.com/article/explained/nanak-shah-fakir-released-opposed-cleared-why-film-on-guru-nanak-dev-is-at-centre-of-row-5132226/lite/' },
    ],
    filmUnderstanding: 'A reverential Punjabi/Hindi biographical film about Guru Nanak whose production choices around visual depiction became a major Sikh sacred-representation controversy.',
    researchFocus: 'Guru Nanak SGPC Akal Takht pictorial depiction family actors sacred representation Sikh tradition',
    redTeamChallenge: 'A filmmaker’s sincere devotional purpose does not by itself override a living community’s rules and objections about depicting its Gurus and sacred family figures.',
    fact: 'The film affirms Guru Nanak’s teachings, but Sikh institutions and groups repeatedly objected to its mode of visual representation and family casting.',
    interpretation: 'The contradiction is not between pro- and anti-Sikh content; it is between reverential message and contested sacred method, making Mixed the disciplined verdict.',
    intent: 'No anti-Sikh intent is inferred.',
    risks: [{ id: 'sacred-religious-valence', summary: 'The film’s visual embodiment of Guru Nanak and portrayal of sacred family figures conflicted with objections from major Sikh institutions and groups.', evidenceIndexes: [0, 1, 2], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Hellaro', year: 2019, language: 'Gujarati', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Garba', 'Kutch', 'Women', 'Gujarati folklore', 'Social dharma'],
    reasons: [
      'The film turns garba — a deeply Gujarati cultural form with devotional associations — into a language of dignity, joy and women’s self-expression rather than rejecting local culture in order to criticize patriarchy.',
      'Its target is a village power structure that forbids women from dancing while invoking a female deity, not Gujarati or Hindu identity as a community; reform is expressed through the culture’s own music, dance and folktale vocabulary.'
    ],
    evidence: [
      { kind: 'interview', source: 'Indian Express — importance of garba in Hellaro', claim: 'Explains that the National Award-winning film adapts a Kutchi folktale and uses garba to explore women’s suppression and self-expression while remaining deliberately rooted in Gujarati life and culture.', url: 'https://indianexpress.com/article/express-sunday-eye/dance-like-a-woman-gujarati-film-garba-hellaro-abhishek-shah-national-award-for-best-feature-film-iffi-goa-6107300/' },
      { kind: 'review', source: 'Times of India — Hellaro review', claim: 'Describes the film as a Kutch-set story of women breaking free from patriarchal suppression through the dhol and garba.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/hellaro-a-celluloid-celebration-of-breaking-free/amp_movie_review/71971460.cms' },
    ],
    filmUnderstanding: 'A Gujarati folktale-derived drama set in 1975 Kutch where women forbidden from garba discover collective freedom and self-expression through dance.',
    researchFocus: 'Gujarati garba Kutch Amba goddess patriarchy women folk tradition sacred representation',
    redTeamChallenge: 'By linking a female deity and village custom to the women’s suppression, the film could be read as using Hindu tradition primarily as the architecture of patriarchy.',
    fact: 'The director explicitly roots the film in Gujarati folklore and garba, and the criticism is focused on patriarchal restrictions imposed by the fictional village.',
    interpretation: 'Because the women reclaim rather than reject their cultural form, Social Dharma and Parampara reinforce each other instead of producing generalized sacred contempt.',
    intent: 'Certification is not approval of every custom represented in the village.'
  }),

  makeHardenedBatchFilm({
    title: 'Daman', year: 2022, language: 'Odia', status: 'mixed', sourceBasis: 'true-story',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 4, itihasa: 3, parampara: 2, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Malkangiri', 'Malaria', 'Public health', 'Adivasi communities', 'Service'],
    reasons: [
      'The doctor’s choice to remain in remote Malkangiri and build a malaria-eradication effort is a strong service, protection and public-duty signal rooted in an Indian state-health context.',
      'However, some promotional and review language frames tribal communities mainly through superstition and a civilizing doctor narrative. Because service and paternalistic representation can coexist, Mixed is safer than uncomplicated certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Daman review', claim: 'Describes the true-story-inspired doctor confronting malaria, isolation, weak infrastructure and harmful health beliefs in remote tribal Odisha.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/daman/movie-review/97550391.cms' },
      { kind: 'review', source: 'Times of India — Daman wins Best Odia Film', claim: 'Records the film as loosely based on Dr Omkar Hota’s work under Odisha’s malaria programme in Malkangiri and its portrayal of outreach to tribal populations.', url: 'https://timesofindia.indiatimes.com/city/bhubaneswar/daman-named-best-odia-film-at-70th-national-film-awards/articleshow/112579220.cms' },
    ],
    filmUnderstanding: 'An Odia true-story-inspired public-health drama about a young doctor working across remote Malkangiri villages under the state’s malaria-eradication programme.',
    researchFocus: 'Malkangiri tribal Adivasi malaria superstition public health doctor Omkar Hota Durgama Anchalare Malaria Nirakarana',
    redTeamChallenge: 'A doctor-as-saviour narrative can flatten Adivasi communities into passive, superstitious subjects waiting for outside rationality and state rescue.',
    fact: 'The health programme and Dr Omkar Hota’s work are real inspirations; reviews use broad language about tribal superstition that warrants representational caution.',
    interpretation: 'The service ethic is strongly positive, but the community lens is not sufficiently balanced in the available evidence for unqualified certification.',
    intent: 'No contemptuous intent toward Adivasi communities is inferred.',
    risks: [{ id: 'community-contempt', summary: 'Available reviews repeatedly describe tribal communities through generalized superstition and gullibility, creating a plausible paternalistic representational risk even within a pro-service story.', evidenceIndexes: [0, 1], status: 'ambiguous', materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Village Rockstars', year: 2017, language: 'Assamese', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Assam', 'Village life', 'Girlhood', 'Floods', 'Local roots'],
    reasons: [
      'The film portrays rural Assam from inside its rhythms of flood, work, childhood, poverty, friendship and aspiration rather than treating the village as an exotic or backward setting.',
      'That rootedness is substantial, but its principal concern is a girl’s coming-of-age and dream of owning a guitar rather than a directional sacred, national or civilizational argument. Reviewed · Neutral therefore preserves the distinction between cultural authenticity and certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Village Rockstars review', claim: 'Praises the life-like portrayal of Dhunu, rural Assam, floods, poverty and her mother’s support for her independence.', url: 'https://indianexpress.com/article/entertainment/movie-review/village-rockstars-movie-review-5377680/' },
      { kind: 'interview', source: 'Indian Express — Rima Das on Village Rockstars', claim: 'Explains that the film grew directly from the director’s own village in Assam and a local group of children, making its rootedness autobiographically grounded.', url: 'https://indianexpress.com/article/north-east-india/assam/the-kids-learnt-how-to-act-under-open-skies-assamese-filmmaker-rima-das-on-village-rockstars-winner-of-best-film-at-the-65th-national-awards-5136192/lite/' },
    ],
    filmUnderstanding: 'An Assamese coming-of-age film about ten-year-old Dhunu dreaming of forming a rock band while growing up in a flood-prone rural village.',
    researchFocus: 'Assam Chaygaon village girl guitar floods poverty local culture rooted representation',
    redTeamChallenge: 'Strong regional authenticity can tempt the classifier to award certification merely for being local and non-metropolitan.',
    fact: 'The film is fictional but shot with local non-actors in the director’s own Assamese village environment.',
    interpretation: 'Local Roots are exceptionally strong, while directional Culture Check signals remain modest; Neutral is therefore more disciplined than Certified.',
    intent: 'No ideological programme is inferred from a coming-of-age story.'
  }),

  makeHardenedBatchFilm({
    title: 'Kedarnath', year: 2018, language: 'Hindi', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 2, itihasa: 2, parampara: 3, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Kedarnath pilgrimage', 'Interfaith romance', '2013 floods', 'Sacred place', 'Mixed'],
    reasons: [
      'The film places an interfaith romance and rescue story inside the real Kedarnath pilgrimage landscape and 2013 disaster, giving the sacred geography and porter-pilgrim economy genuine narrative weight.',
      'Priests and Hindu groups objected that romance, intimacy and the Muslim-Hindu pairing instrumentalized a revered shrine; courts rejected demands to ban it and the filmmakers described the purpose as unity. Because sacred-place concern and inclusive intent both have evidence, Mixed is more responsible than either “Hindu-bashing” or automatic certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Kedarnath review', claim: 'Describes the film as an interfaith love story set against the Kedarnath pilgrimage and 2013 flood disaster.', url: 'https://indianexpress.com/article/entertainment/movie-review/kedarnath-movie-review-sushant-singh-rajput-sara-ali-khan-5482081/lite/' },
      { kind: 'review', source: 'Indian Express — Uttarakhand screening ban', claim: 'Documents objections from Hindu groups and officials who said the shrine name, interfaith romance and imagery hurt religious sentiments, while the restrictions were framed as law-and-order decisions.', url: 'https://indianexpress.com/article/entertainment/bollywood/screening-of-kedarnath-banned-in-uttarakhand-5483047/' },
      { kind: 'review', source: 'Indian Express — Uttarakhand High Court decision', claim: 'Records the High Court dismissing a plea to ban the film over alleged hurt to Hindu sentiments and love-jihad claims.', url: 'https://indianexpress.com/article/india/kedarnath-kedarnath-movie-pil-uttarakhand-high-court-5481630/' },
    ],
    filmUnderstanding: 'A fictional Hindi interfaith romance between a Hindu pilgrim-family daughter and a Muslim porter, set around the Kedarnath shrine and the real 2013 Uttarakhand floods.',
    researchFocus: 'Kedarnath shrine pilgrimage Hindu Muslim romance 2013 floods priests sacred sentiments love jihad controversy',
    redTeamChallenge: 'Using one of Hinduism’s most revered pilgrimage sites as the backdrop for romance and sensual imagery may make the sacred setting feel instrumental rather than revered.',
    fact: 'The romance is fictional; the pilgrimage place and 2013 disaster are real, and objections to the film’s sacred-place treatment were substantial enough to affect screenings in Uttarakhand.',
    interpretation: 'The evidence supports neither generalized Hindu contempt nor uncomplicated sacred affirmation, so Mixed captures the contested valence.',
    intent: 'No anti-Hindu intent is inferred; the filmmakers publicly framed the story as one of unity.',
    risks: [{ id: 'sacred-religious-valence', summary: 'There was a material dispute over whether romance and intimacy used the Kedarnath shrine in a way that diminished its sacred character.', evidenceIndexes: [0, 1, 2], status: 'ambiguous', materiality: 'medium' }]
  }),
];
