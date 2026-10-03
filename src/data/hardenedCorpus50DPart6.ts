import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

/** Hardened Corpus 50D — Part 6. */
export const hardenedCorpus50DPart6: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Kantara: Chapter 1', year: 2025, language: 'Kannada', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Bhoota Kola','Panjurli','Guliga','Sacred ecology','Kantara'],
    reasons: ['The film’s world is built around coastal-Karnataka sacred ecology, Bhoota Kola, Panjurli/Guliga traditions, land, forest and inherited community obligation rather than using those traditions as decorative exotica.', 'Its mythic spectacle and action amplify folklore for mass cinema, but the sacred beings and ritual inheritance remain sources of protection, accountability and continuity rather than ridicule or desecration.'],
    evidence: [
      { kind: 'review', source: 'India Today — Kantara Chapter 1 review', claim: 'Identifies land rights, nature, divinity, folklore, faith and myth as the film’s governing thematic world.', url: 'https://www.indiatoday.in/movies/reviews/story/kantara-chapter-1-review-rishab-shetty-folklore-saga-is-a-spellbinding-spectacle-rukmini-vasanth-jayaram-2796510-2025-10-02' },
      { kind: 'review', source: 'Indian Express — Kantara Chapter 1 review', claim: 'Describes Kantara forest as sacred space protected by Panjurli and Guliga and links the tribal community’s resistance to nature worship and inherited tradition.', url: 'https://indianexpress.com/article/entertainment/movie-review/kantara-chapter-1-movie-review-rishab-shetty-crafts-visual-world-beyond-expectations-but-pays-for-it-with-actioners-soul-10282767/lite/' }
    ],
    filmUnderstanding: 'A prequel expanding the sacred, political and ecological world of Kantara through coastal-Karnataka folklore, Bhoota Kola and guardian-deity traditions.', researchFocus: 'Bhoota Kola Panjurli Guliga sacred forest tribal community land rights folklore ritual adaptation', redTeamChallenge: 'A commercially expanded franchise can turn living ritual traditions into spectacle and flatten diverse local practices into a single cinematic mythology.',
    fact: 'The film draws from living regional folklore and ritual traditions but constructs a fictional mythic history around them.', interpretation: 'Its treatment is reverential, locally rooted and oriented toward sacred continuity, ecological duty and protection of community inheritance.', intent: 'Certification does not declare the film a canonical or ethnographically complete account of Bhoota Kola, Panjurli or Guliga traditions.',
    risks: [{ id: 'source-adaptation', summary: 'Living folk-sacred traditions are freely expanded into a fictional cinematic mythology.', evidenceIndexes: [0,1], materiality: 'medium' }, { id: 'sacred-religious-valence', summary: 'Commercial spectacle is substantial, but the sacred traditions remain sources of reverence and protection rather than mockery.', evidenceIndexes: [0,1], status: 'ambiguous', materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Khadaan', year: 2024, language: 'Bengali', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Coal belt','Adivasi land','Workers','Power','Bengal'],
    reasons: ['The film is strongly rooted in Bengal’s coal-belt world and places Adivasi land, mine labour, extraction and the social costs of syndicate power inside a mass commercial narrative.', 'But the story also thrives on ambition, betrayal, violent power and criminal ascent, making the exploitation critique real without turning its central antiheroic world into an uncomplicated Dharmic certification.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Khadaan review', claim: 'Situates the film in the coal mines and follows friendship, ambition, power and betrayal against mining-syndicate conflict.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movie-reviews/khadaan/movie-review/116539256.cms' },
      { kind: 'review', source: 'Indian Express Bengali — Khadaan review', claim: 'Reviews the mass-action story through its coalfield setting, labour, local power structures and the Dev-led rise-and-conflict arc.', url: 'https://bengali.indianexpress.com/entertainment/review/superstar-dev-khadaan-bengali-movie-review-tollywood-entertainment-news-8544561' }
    ],
    filmUnderstanding: 'A Bengali coalfield mass drama about men rising through mine and syndicate power while local workers, Adivasi land and friendship are caught in extraction and betrayal.', researchFocus: 'coal mines Bengal Adivasi land workers syndicate friendship betrayal power extraction', redTeamChallenge: 'A film can invoke worker and Adivasi exploitation while still glamorising the very violent power structure it claims to expose.',
    fact: 'The story is fictional but draws on recognisable coal-belt labour, land and syndicate contexts.', interpretation: 'Regional rootedness and Social Dharma critique are meaningful, while criminal ambition and violence prevent uncomplicated certification.', intent: 'No claim is made that mine owners, workers or Adivasi communities in the film stand for their communities as a whole.',
    risks: [{ id: 'regional-context', summary: 'The coal-belt and Adivasi-land setting is materially important but is filtered through a commercial crime-and-star vehicle.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Bohurupi', year: 2024, language: 'Bengali', status: 'mixed', sourceBasis: 'true-story',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Bank robbery','Police','Class','System failure','Bengal'],
    reasons: ['The film uses the bank-robber-versus-police thriller to ask how poverty, class power and institutional failure can push an ordinary rural man toward crime, while keeping the police officer’s duty and corruption within the system in view.', 'Its sympathy for the robber is deliberately morally destabilising: exposing structural injustice is a Social Dharma strength, but romanticising lawbreaking prevents an uncomplicated certification.'],
    evidence: [
      { kind: 'review', source: 'Indian Express Bengali — Bohurupi review', claim: 'Frames the police-versus-bank-robber story as a thriller that explicitly points to failures of the social and institutional system.', url: 'https://bengali.indianexpress.com/entertainment/review-of-the-bengali-movie-bohurupi-shibaprasad-nandita-windows-production-7307956' },
      { kind: 'review', source: 'ABP Ananda — Bohurupi review', claim: 'Describes the film as rooted in reality and concerned with class conflict, political structures and the ways poor people are trapped by the system.', url: 'https://bengali.abplive.com/movie-review/entertainment/bohurupi-movie-review-shibaprasad-mukherjee-nandita-ray-abir-chatterjee-1099385/amp' }
    ],
    filmUnderstanding: 'A Bengali bank-heist thriller inspired by real criminal material, structured around a rural robber and a police officer whose contest exposes class, corruption and institutional pressures.', researchFocus: 'bank robber true story police corruption rural Bengal class system failure inspiration', redTeamChallenge: 'Structural critique can become moral exoneration of robbery, while police corruption can be used to make the criminal antihero automatically righteous.',
    fact: 'The film draws on real-world inspiration but fictionalises characters and conflicts into a police-versus-robber thriller.', interpretation: 'Its Social Dharma critique is substantial, yet the robber’s romanticisation and legal/moral ambiguity keep the verdict contested.', intent: 'No claim is made that police institutions or poor rural communities are inherently corrupt or criminal.',
    risks: [{ id: 'source-adaptation', summary: 'Real-world inspiration is substantially fictionalised into a bank-heist thriller.', evidenceIndexes: [0,1], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Binodiini - Ekti Natir Upakhyan', year: 2025, language: 'Bengali', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 5, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Nati Binodini','Bengali theatre','Cultural memory','Women','Parampara'],
    reasons: ['Restoring Nati Binodini to public memory affirms a major strand of Bengali theatrical inheritance while recognising the exploitation and barriers faced by a woman who helped shape that tradition.', 'As a biopic it necessarily dramatizes relationships and private moments, but its cultural-memory purpose and respect for Bengali stage history remain clearly affirmative.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Binodiini review', claim: 'Identifies the film as a biographical tribute to Binodini Dasi, the woman who ruled the Bengali stage in the 1870s.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movie-reviews/binodiini/movie-review/117511530.cms' },
      { kind: 'review', source: 'Ashna Kkhan — Binodini review', claim: 'Frames the film as a recovery of a historically marginalised Bengali theatre pioneer and a tribute to art, resilience and cultural history.', url: 'https://www.ashnakkhan.com/social/binodini-a-review/' }
    ],
    filmUnderstanding: 'A Bengali biographical drama about Nati Binodini, tracing her rise on the nineteenth-century Bengali stage and the gendered exploitation surrounding her artistic achievement.', researchFocus: 'Nati Binodini Bengali theatre Girish Ghosh Ramakrishna biography accuracy women stage history', redTeamChallenge: 'A reverential biopic can simplify a complicated life and turn contested relationships or spiritual encounters into tidy cultural legend.',
    fact: 'Binodini Dasi was a major historical figure in Bengali theatre; the film reconstructs her life through a dramatic biographical narrative.', interpretation: 'Recovering regional artistic inheritance and a neglected woman’s agency strongly supports Civilizational Continuity, Parampara and Social Dharma.', intent: 'Certification does not treat every depicted conversation or relationship as independently documented fact.',
    risks: [{ id: 'real-person-attribution', summary: 'Private relationships, dialogue and motivations are necessarily dramatized in the biographical reconstruction.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Dhumketu', year: 2025, language: 'Bengali', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 4, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family','Injustice','Revenge','Love','Bengal'],
    reasons: ['The emotional spine is a family broken by injustice, separation and sacrifice, with the protagonist’s return forcing old loyalties and harms into the open.', 'Yet vengeance and the protagonist’s extremist/criminal shadow remain central to the machinery of redress; family fidelity and grievance are meaningful but do not automatically make revenge Dharmic.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Dhumketu review', claim: 'Describes a man returning after years to avenge injustices suffered by his family in a slow-burn Bengali family thriller.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/dhumketu/movie-review/123332029.cms' },
      { kind: 'review', source: 'Indian Express Bengali — Dhumketu review', claim: 'Frames the film through love, separation, friendship and the emotional consequences of the protagonist’s return.', url: 'https://bengali.indianexpress.com/entertainment/review/dev-subhashree-ganguly-starrer-dhumketu-review-is-here-9662359' }
    ],
    filmUnderstanding: 'A Bengali family-revenge drama about a man who resurfaces after years away, forcing a past of love, separation and perceived injustice back into the lives of his family.', researchFocus: 'family injustice revenge extremist past love separation Bengali drama', redTeamChallenge: 'The film can invite audiences to read grievance and devotion to family as moral permission for revenge or earlier extremist choices.',
    fact: 'The story is fictional and centres a protagonist returning to address harms suffered by his family.', interpretation: 'Family loyalty and injustice are genuine moral stakes, but revenge and the protagonist’s shadowed past keep the Dharmic direction contested.', intent: 'Mixed does not mean the film is anti-family or culturally unrooted; it marks unresolved moral direction in its chosen means.'
  }),
  makeHardenedBatchFilm({
    title: 'Sangeet Manapmaan', year: 2025, language: 'Marathi', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Sangeet Natak','Marathi theatre','Khadilkar','Tembe','Parampara'],
    reasons: ['Adapting one of Marathi sangeet natak’s canonical works for contemporary cinema is a direct act of cultural transmission, preserving music, dramatic form and regional theatrical memory for a new audience.', 'The screen version changes and expands aspects of the play and its period spectacle, but adaptation is not dilution when the source tradition remains legible and honoured.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Sangeet Manapmaan review', claim: 'Identifies the film as based on Krushnaji Prabhakar Khadilkar and Govindrao Tembe’s iconic work in the history of Marathi sangeet natak.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/sangeet-manapmaan/amp_movie_review/117142165.cms' },
      { kind: 'review', source: 'Maharashtra Times — Sangeet Manapmaan review', claim: 'Calls the source play a timeless and prestigious work of Marathi musical theatre and reviews the cinematic adaptation of its love-and-honour story.', url: 'https://marathi.indiatimes.com/entertainment/entertainment-news/bollywood-news/sangeet-manapmaan/moviereview/117135833.cms' }
    ],
    filmUnderstanding: 'A film adaptation of the classic Marathi musical play Sangeet Manapmaan, retaining its soldier-princess romance and placing its celebrated sangeet natak music and form at the centre.', researchFocus: 'Khadilkar Govindrao Tembe Marathi sangeet natak adaptation original play songs changes', redTeamChallenge: 'A prestige adaptation can preserve famous songs while flattening the dramaturgy and historical texture that made the stage work culturally important.',
    fact: 'The film is explicitly adapted from a canonical Marathi musical play and retains/reworks its musical material.', interpretation: 'Transmission of Marathi theatrical inheritance is an unusually direct Parampara and Civilizational Continuity signal.', intent: 'Certification does not claim that every cinematic alteration improves upon or faithfully reproduces the stage original.',
    risks: [{ id: 'source-adaptation', summary: 'The classic stage work is restructured and expanded for film, making adaptation deltas materially relevant.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Gulkand', year: 2025, language: 'Marathi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Marriage','Family','In-laws','Forgiveness','Marathi'],
    reasons: ['The film treats two families preparing for marriage as a moral community in which old love, jealousy and insecurity must be worked through without casually discarding spouses or the younger couple’s future.', 'Its conclusion values truth, loyalty, forgiveness and the maintenance of family relationships over romantic nostalgia, making the family setting a moral structure rather than mere comic scenery.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Gulkand review', claim: 'Describes two families about to be joined by marriage when the future in-laws discover that two parents were former lovers, creating questions of loyalty, affection and family.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/gulkand/movie-review/120820866.cms' },
      { kind: 'review', source: 'Maharashtra Times — Gulkand review', claim: 'Reviews the Marathi family comedy as an examination of relationships whose meaning and sweetness mature over time.', url: 'https://maharashtratimes.com/entertainment/movie-reviews/gulkand/moviereview/120784629.cms' }
    ],
    filmUnderstanding: 'A Marathi family comedy about two households preparing for their children’s marriage when they learn that the bride’s mother and groom’s father were once lovers.', researchFocus: 'marriage in laws former lovers spouses loyalty forgiveness Marathi family comedy', redTeamChallenge: 'A “family entertainer” label can hide possessiveness, suspicion or pressure to preserve relationships at any cost.',
    fact: 'The story is fictional and places an old romantic relationship inside two present marriages and an impending inter-family wedding.', interpretation: 'The film’s resolution privileges honesty, loyalty, forgiveness and relational responsibility rather than treating family as disposable convention.', intent: 'Certification does not claim that jealousy or suspicion within the story is exemplary conduct.'
  }),
  makeHardenedBatchFilm({
    title: 'Dashavatar', year: 2025, language: 'Marathi', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Vishnu','Dashavatari theatre','Konkan','Folk tradition','Sacred art'],
    reasons: ['An ageing Konkan performer’s sense that Dashavatari theatre is a duty toward God turns the film into a direct defence of a living regional sacred-art tradition centred on Vishnu’s ten avatars.', 'The thriller machinery and symbolic use of the avatars become less plausible in the second half, but the tradition itself is depicted with reverence, local dialect, performance detail and intergenerational concern rather than parody.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Dashavatar review', claim: 'Explains the continuing Konkan tradition of Dashavatar theatre around Vishnu’s ten incarnations and the village respect accorded to veteran performer Babuli.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/dashavatar/movie-review/123850452.cms' },
      { kind: 'review', source: 'The Common Man Speaks — Dashavatar review', claim: 'Highlights realistic portrayal of Konkan folk theatre, the performer’s duty toward God and the film’s tribute to regional theatre artistes.', url: 'https://thecommonmanspeaks.com/dashavatar-review-marathi-2025-dilip-prabhavalkar/' }
    ],
    filmUnderstanding: 'A Marathi Konkan-set drama-thriller about an ageing Dashavatari folk-theatre performer whose sacred artistic vocation collides with family concern and a contemporary village threat.', researchFocus: 'Vishnu ten avatars Dashavatari Natak Konkan sacred theatre Mahashivratri village guardian spirit', redTeamChallenge: 'Using the ten avatars as thriller devices can make sacred iconography serve plot convenience rather than devotional or artistic depth.',
    fact: 'Dashavatari theatre is a living Konkan folk tradition centred on Vishnu’s incarnations; the film’s village and thriller plot are fictional.', interpretation: 'The film treats sacred performance as inherited duty and cultural memory, strongly supporting Parampara, Sacred Regard and local rootedness.', intent: 'Certification does not claim that the film’s supernatural or symbolic events are doctrinal statements.',
    risks: [{ id: 'sacred-religious-valence', summary: 'Sacred avatar imagery is repurposed inside a thriller structure but remains reverential and tradition-affirming.', evidenceIndexes: [0,1], status: 'ambiguous', materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Akaal: The Unconquered', year: 2025, language: 'Punjabi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 4, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Sikh history','Khalsa','Punjab','Village defence','Warrior Dharma'],
    reasons: ['The film explicitly locates courage inside Sikh principles: Akaal Singh fights to protect village and community, with faith presented as a restraint and moral discipline on warrior zeal rather than an excuse for aggression.', 'It is inspired by the post-Ranjit-Singh historical milieu rather than a scene-for-scene record of exact events, so ancestral pride and martial continuity are certified with a clear history-versus-fiction caveat.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Akaal review', claim: 'Places the story after Maharaja Ranjit Singh’s death, describes Sikh villagers resisting raiders and notes that Akaal fights for righteous reasons in keeping with Sikh tenets.', url: 'https://indianexpress.com/article/entertainment/movie-review/akaal-review-gippy-grewal-film-flickers-but-doesnt-burn-9938990/' },
      { kind: 'review', source: 'Times of India — Akaal review', claim: 'Describes the film as inspired by historical events and centred on Punjabi warriors defending their village with honour and valour.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movie-reviews/akaal-the-unconquered/movie-review/120153262.cms' }
    ],
    filmUnderstanding: 'A Punjabi historical-action drama set in the political disorder after Maharaja Ranjit Singh, following a Sikh warrior and village resisting violent raiders.', researchFocus: 'Maharaja Ranjit Singh Hari Singh Nalwa 1840s Sikh warrior village historical accuracy faith warrior code', redTeamChallenge: 'Ancestral-warrior pride can blur the difference between historically inspired fiction and documented Sikh military history.',
    fact: 'The setting draws on real post-Ranjit-Singh history, while Akaal Singh and the central conflict are not presented as an exact reconstruction of one documented battle.', interpretation: 'Faith-disciplined protection, ancestral continuity and village defence are strong Bharatiya/Sikh civilizational signals.', intent: 'Certification does not imply hostility toward any present-day community or validate every historical detail as fact.',
    risks: [{ id: 'historical-claims', summary: 'The film is historically inspired but substantially fictionalises its central warrior and conflict.', evidenceIndexes: [0,1], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Guru Nanak Jahaz', year: 2025, language: 'Punjabi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Komagata Maru','Sikh diaspora','Anti-colonial history','Migration','Itihasa'],
    reasons: ['The film recovers the Komagata Maru episode as Sikh and Indian civilizational memory, foregrounding racist imperial exclusion, collective resilience and the courage of migrants who challenged discriminatory law.', 'Its fidelity to documented history is unusually central to the project; dramatic simplification remains possible, but remembrance of this anti-colonial diaspora history is itself a strong Itihasa and Rashtra contribution.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Guru Nanak Jahaz review', claim: 'Details the 1914 Komagata Maru challenge to Canada’s discriminatory Continuous Passage policy, the 376 Indian passengers and the film’s investment in historical research and Sikh migrant memory.', url: 'https://indianexpress.com/article/entertainment/movie-review/guru-nanak-jahaz-movie-review-powerful-retelling-of-the-struggles-of-early-migrants-to-canada-9978754/' },
      { kind: 'review', source: 'Rotten Tomatoes — Guru Nanak Jahaz synopsis', claim: 'Identifies the film as a historical drama based on the twentieth-century Komagata Maru incident.', url: 'https://www.rottentomatoes.com/m/guru_nanak_jahaz' }
    ],
    filmUnderstanding: 'A Punjabi historical drama recreating the 1914 Komagata Maru voyage and the struggle of mostly Sikh Indian passengers against discriminatory Canadian imperial immigration policy.', researchFocus: 'Komagata Maru Gurdit Singh Mewa Singh Continuous Passage Canada 1914 Sikh migrants historical accuracy', redTeamChallenge: 'A remembrance film can simplify internal disagreements and later political consequences to produce a cleaner anti-colonial moral narrative.',
    fact: 'The voyage, discriminatory policy and principal historical figures are documented; the film reconstructs them dramatically.', interpretation: 'Preserving Sikh diaspora and anti-colonial memory while foregrounding dignity under racial exclusion strongly supports Itihasa, Rashtra and Social Dharma.', intent: 'Certification does not convert historical criticism of Canadian/British policy into contempt for present-day national or ethnic communities.',
    risks: [{ id: 'historical-claims', summary: 'Dramatic reconstruction of a complex historical episode still requires separation between documented chronology and scripted dialogue.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Umbarro', year: 2025, language: 'Gujarati', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Gujarati women','Family','Community','Self-development','Adaptation'],
    reasons: ['Seven Gujarati women crossing a literal and social threshold together creates a strongly regional story about family expectations, female friendship, age, responsibility and personal growth without requiring rejection of family or community.', 'The film is adapted from the Marathi Jhimma, but the Gujarati remake builds its own linguistic and social world rather than merely relabelling characters; adaptation therefore becomes regional cultural translation.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Umbarro review', claim: 'Describes seven women from Gujarat travelling to London, confronting different life constraints and crossing personal thresholds while remaining rooted in family and friendship.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/umbarro/amp_movie_review/117516671.cms' },
      { kind: 'review', source: 'Times of India — Umbarro adaptation discussion', claim: 'Explicitly notes that the film adapts the Marathi Jhimma while creating a distinctly Gujarati world and viewpoint.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/umbarro/movie-review/117516671.cms' }
    ],
    filmUnderstanding: 'A Gujarati adaptation of the Marathi film Jhimma about seven women travelling together to London and renegotiating personal fears, family roles and friendship.', researchFocus: 'Jhimma adaptation Gujarati women family London friendship identity remake differences', redTeamChallenge: 'A remake can borrow its emotional architecture wholesale and mistake language substitution for rooted cultural translation.',
    fact: 'Umbarro is adapted from Jhimma but reworks the group as Gujarati women with region-specific language, humour and family context.', interpretation: 'The adaptation preserves family responsibility while giving women agency and community support, producing strong local-root and Social Dharma signals.', intent: 'Certification does not imply that every family expectation depicted is inherently virtuous or beyond reform.',
    risks: [{ id: 'source-adaptation', summary: 'The film’s narrative architecture comes from Marathi film Jhimma and must be credited as adaptation rather than original Gujarati plotting.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),
];
