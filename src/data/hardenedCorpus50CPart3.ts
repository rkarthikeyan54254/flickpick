import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50CPart3 = [
  makeHardenedBatchFilm({
    title: 'Daana Veera Soora Karna', year: 1977, language: 'Telugu', status: 'mixed', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 5, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Mahabharata', 'Karna', 'Duryodhana', 'Telugu mythological', 'Epic reinterpretation'],
    reasons: [
      'The film belongs squarely to Telugu Itihasa cinema and treats the Mahabharata as a living moral and dramatic inheritance rather than as an exotic source.',
      'Its unusually sympathetic elevation of Duryodhana/Suyodhana and Karna materially rebalances the epic’s moral perspective, so the appropriate verdict is Mixed rather than assuming every mythological film is automatically Certified.'
    ],
    evidence: [
      { kind: 'review', source: 'TeluguCinema — Daana Veera Soora Karna retrospective', claim: 'Explains that NTR intentionally projected Duryodhana as learned, dharmic and unusually positive, making that characterization a defining difference from other Mahabharata films.', url: 'https://telugucinema.com/nostalgia/daana-veera-soora-karna-retrospective' },
      { kind: 'review', source: 'Wikipedia — Daana Veera Soora Karna', claim: 'Records the film as a Mahabharata-based mythological centred on Karna, Duryodhana and Krishna and notes the sympathetic Duryodhana portrayal.', url: 'https://en.wikipedia.org/wiki/Daana_Veera_Soora_Karna' },
    ],
    filmUnderstanding: 'A major Telugu mythological retelling of the Mahabharata through Karna and a highly sympathetic Duryodhana, with NTR also playing Krishna.',
    researchFocus: 'Mahabharata Karna Duryodhana Suyodhana Krishna source fidelity Telugu mythological',
    redTeamChallenge: 'The reinterpretation can invert the epic’s moral weighting by turning Duryodhana into a victimized virtuous ruler while reducing the gravity of his actions.',
    fact: 'The film openly re-centres Karna and gives Duryodhana a much more positive characterization than conventional Mahabharata tellings.',
    interpretation: 'The work is culturally and sacredly rooted, but its revisionist moral emphasis creates a genuine Itihasa-fidelity tension.',
    intent: 'No hostility to the Mahabharata is inferred; the concern is the effect of a directional reinterpretation on epic memory.',
    risks: [{ id: 'source-adaptation', summary: 'The Mahabharata is substantially reweighted around Karna and an unusually virtuous Duryodhana.', evidenceIndexes: [0, 1], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Kantara', year: 2022, language: 'Kannada', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Bhoota Kola', 'Panjurli', 'Tulunadu', 'Land', 'Daiva'],
    reasons: [
      'Bhoota Kola and Panjurli are not ornamental folklore: the Daiva is the moral authority linking land, community, justice and inherited obligation across generations.',
      'The film is unusually rooted in coastal Karnataka’s living ritual world and grants that world sacred efficacy rather than explaining it away as backward belief.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — What Kantara gets right and wrong', claim: 'Explains Bhoota Kola as a living Tulu divine belief system and identifies the film’s strength as deep regional rootedness.', url: 'https://indianexpress.com/article/opinion/columns/kantara-rishabh-shetty-ns-gundur-8255664/' },
      { kind: 'review', source: 'The Tech — Kantara review', claim: 'Praises the respectful portrayal of Kambala and Bhoota Kola and the connection among village, forest and protective deities.', url: 'https://thetech.com/2022/12/08/kantara-review' },
    ],
    filmUnderstanding: 'A coastal Karnataka land-and-community drama in which Bhoota Kola, Panjurli/Guliga and inherited obligation become the ultimate framework for justice.',
    researchFocus: 'Bhoota Kola Panjurli Guliga Tulunadu daiva land ritual sacred representation',
    redTeamChallenge: 'The film can romanticize a complex folk tradition and translate ritual into mass spectacle for audiences unfamiliar with its social context.',
    fact: 'Bhoota Kola is a living coastal Karnataka ritual tradition; the film’s characters and land conflict are fictionalized.',
    interpretation: 'The representation is reverential, locally grounded and morally consequential, producing exceptionally strong Parampara, Local Roots and Sacred Regard.',
    intent: 'Certification does not claim the film is an ethnographic account of every Bhoota Kola practice.'
  }),

  makeHardenedBatchFilm({
    title: 'Bedara Kannappa', year: 1954, language: 'Kannada', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Kannappa', 'Shiva bhakti', 'Kannada classic', 'Devotion'],
    reasons: [
      'Kannappa’s radical devotion to Shiva is the film’s moral centre, presenting bhakti as sincerity and self-surrender rather than social status or ritual sophistication.',
      'The film carries a Kannada stage-and-folk devotional tradition into cinema with direct reverence for Shiva and a devotee remembered across regional traditions.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Bedara Kannappa', claim: 'Records the film as an adaptation of the Kannappa folk tale about the hunter whose extreme devotion to Shiva culminates in offering his eyes.', url: 'https://en.wikipedia.org/wiki/Bedara_Kannappa' },
      { kind: 'official', source: 'SGV Digital — Bedara Kannappa film listing', claim: 'Identifies the 1954 Rajkumar film as a Kannada devotional work directed by H. L. N. Simha.', url: 'https://www.youtube.com/watch?v=ZBxieU9Bu9A' },
    ],
    filmUnderstanding: 'A foundational Kannada devotional film adapting the Kannappa story of a hunter whose unorthodox but absolute Shiva bhakti transcends ritual hierarchy.',
    researchFocus: 'Kannappa Shiva hunter devotion folk tale Kalahasti Kannada stage adaptation',
    redTeamChallenge: 'Devotional legend and miracle should not be mistaken for independently documented biography.',
    fact: 'The film adapts a devotional folk/stage tradition rather than a modern historical record.',
    interpretation: 'Its sacred purpose and bhakti valence are explicit and affirmative.',
    intent: 'No documentary claim about miraculous events is inferred.'
  }),

  makeHardenedBatchFilm({
    title: 'Bhakta Kumbara', year: 1974, language: 'Kannada', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Gora Kumbhar', 'Bhakti', 'Panduranga', 'Kannada devotional'],
    reasons: [
      'The saint-potter’s life is interpreted through surrender, work, humility and devotion, making ordinary labour and bhakti part of the same moral universe.',
      'The film participates in a wider Indian saint tradition while preserving a distinctly Kannada devotional-cinema lineage.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Bhakta Kumbara', claim: 'Records the film as a biographical work about the medieval potter-saint Gora Kumbhar and his intense devotion.', url: 'https://en.wikipedia.org/wiki/Bhakta_Kumbara' },
      { kind: 'review', source: 'IMDb — Bhakta Kumbara', claim: 'Provides the film record and devotional biographical premise for the Rajkumar classic.', url: 'https://www.imdb.com/title/tt0156387/' },
    ],
    filmUnderstanding: 'A Kannada devotional biographical drama based on the saint Gora Kumbhar, whose work as a potter and overwhelming bhakti define his life.',
    researchFocus: 'Gora Kumbhar Panduranga saint potter bhakti biography miracle',
    redTeamChallenge: 'Hagiographic episodes may merge saint legend and verifiable biography without distinction.',
    fact: 'Gora Kumbhar belongs to a historical devotional tradition; the film presents that life through hagiographic cinema.',
    interpretation: 'The source caveat does not weaken its direct affirmation of bhakti, humility and sacred continuity.',
    intent: 'No independent historicity is asserted for each miraculous episode.',
    risks: [{ id: 'source-adaptation', summary: 'Saint biography and hagiographic tradition are combined in a devotional film narrative.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Kaviratna Kalidasa', year: 1983, language: 'Kannada', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Kalidasa', 'Kali', 'Sanskrit literature', 'Kannada classic', 'Parampara'],
    reasons: [
      'The film places Kalidasa, Sanskrit literary memory and the transformative grace of Goddess Kali inside a reverent civilizational narrative about learning and poetic genius.',
      'Because the historical Kalidasa’s biography is uncertain and heavily legendary, the movie’s life story is best treated as devotional-cultural memory rather than documentary history.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Kaviratna Kalidasa', claim: 'Records the film as a Kannada historical drama based on the life of classical Sanskrit poet Kalidasa.', url: 'https://en.wikipedia.org/wiki/Kaviratna_Kalidasa' },
      { kind: 'official', source: 'SGV Kannada Retro — Kaviratna Kalidasa', claim: 'Provides the Rajkumar film record and scenes from the 1983 Kannada Kalidasa adaptation.', url: 'https://www.youtube.com/watch?v=UT4HrGiVXoc' },
    ],
    filmUnderstanding: 'A Kannada legendary-biographical drama about Kalidasa’s transformation into the classical poet associated with Goddess Kali’s grace.',
    researchFocus: 'Kalidasa Goddess Kali Sanskrit poet legend biography Kannada cultural memory',
    redTeamChallenge: 'Later legend supplies much of Kalidasa’s cinematic biography, so viewers may confuse devotional literary lore with established history.',
    fact: 'Kalidasa is a historical classical poet but many details of his life are uncertain; the film draws on legendary biography.',
    interpretation: 'The film strongly affirms Sanskritic literary inheritance and Goddess Kali even though its biographical specificity is not historical proof.',
    intent: 'Certification does not validate every legendary episode as fact.',
    risks: [{ id: 'historical-claims', summary: 'Legendary material fills large gaps in the historical record of Kalidasa’s life.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Kurukshetra', year: 2019, language: 'Kannada', status: 'mixed', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 5, parampara: 5, localRoots: 4, raksha: 4, socialDharma: 2, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Mahabharata', 'Duryodhana', 'Karna', 'Kannada mythological', 'Epic reinterpretation'],
    reasons: [
      'The film revives large-scale Kannada Mahabharata cinema with Krishna, Draupadi, Bhishma, Abhimanyu and the Kurukshetra war treated as shared Itihasa memory.',
      'It nevertheless centres Duryodhana as a flawed hero and victim of circumstances, materially shifting the epic’s moral perspective; that makes Mixed more precise than unconditional certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Kurukshetra review', claim: 'States that the Mahabharata adaptation is mainly told through Duryodhana’s eyes and presents him as a brilliant warrior manipulated by circumstances.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/kurukshetra/movie-review/70600701.cms' },
      { kind: 'review', source: 'Cinema Express — Kurukshetra review', claim: 'Describes the film as a big-screen Mahabharata retelling that deliberately differs by taking Duryodhana’s point of view while retaining Draupadi and Krishna episodes.', url: 'https://www.cinemaexpress.com/amp/story/reviews/kannada/2019/Aug/09/kurukshetra-movie-review-darshan-shines-in-a-seamless-retelling-of-mahabharata-13547.html' },
    ],
    filmUnderstanding: 'A Kannada Mahabharata war epic told primarily from Duryodhana’s perspective while staging many canonical episodes and characters.',
    researchFocus: 'Mahabharata Duryodhana point of view Karna Krishna Draupadi source fidelity',
    redTeamChallenge: 'Sympathy for Duryodhana can soften or redistribute responsibility for central adharmic acts in the epic.',
    fact: 'The film is an explicit Mahabharata adaptation with a deliberately Duryodhana-centred point of view.',
    interpretation: 'It strongly preserves Itihasa on screen while also revisioning its moral perspective, producing a mixed cultural signal.',
    intent: 'No contempt for the epic is inferred from choosing an antagonist-centred perspective.',
    risks: [{ id: 'source-adaptation', summary: 'The film materially recentres the Mahabharata around a sympathetic Duryodhana.', evidenceIndexes: [0, 1], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Sri Krishnadevaraya', year: 1970, language: 'Kannada', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Vijayanagara', 'Krishnadevaraya', 'Kannada history', 'Civilizational memory'],
    reasons: [
      'The film places Vijayanagara statecraft, literature, kingship and regional historical memory at the centre of a major Kannada historical drama.',
      'Its heroic representation of Krishnadevaraya is culturally affirmative while still requiring the ordinary caution that popular historical cinema compresses complex reigns into exemplary episodes.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Sri Krishnadevaraya', claim: 'Records the 1970 Kannada historical drama with Rajkumar portraying the 16th-century Vijayanagara emperor Krishnadevaraya.', url: 'https://en.wikipedia.org/wiki/Sri_Krishnadevaraya_(film)' },
      { kind: 'review', source: 'Wikipedia — Krishnadevaraya', claim: 'Provides historical background on the Vijayanagara emperor whose reign is the film’s subject.', url: 'https://en.wikipedia.org/wiki/Krishnadevaraya' },
    ],
    filmUnderstanding: 'A Kannada historical drama celebrating the reign, court and cultural memory of Vijayanagara emperor Krishnadevaraya.',
    researchFocus: 'Vijayanagara Krishnadevaraya reign Kannada Telugu Sanskrit court history accuracy',
    redTeamChallenge: 'Heroic historical cinema can simplify political conflict, royal power and chronology into a golden-age portrait.',
    fact: 'Krishnadevaraya is a major historical Vijayanagara ruler; the film dramatizes his reign for popular cinema.',
    interpretation: 'The likely compression remains a Narrative Integrity caveat without reversing the film’s civilizational and historical affirmation.',
    intent: 'No claim is made that every scene is a literal court chronicle.',
    risks: [{ id: 'historical-claims', summary: 'A complex historical reign is condensed into a popular heroic narrative.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Malikappuram', year: 2022, language: 'Malayalam', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Ayyappa', 'Sabarimala', 'Pilgrimage', 'Child devotion', 'Kerala'],
    reasons: [
      'A child’s devotion to Ayyappa and desire to undertake the Sabarimala pilgrimage are treated with emotional seriousness, not skepticism or embarrassment.',
      'The pilgrimage route, chants, Tatvamasi and temple experience function as the film’s sacred centre and place Kerala devotional practice inside mainstream family cinema.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Malikappuram review', claim: 'Calls the film a children’s movie on faith and emphasizes the girl’s boundless devotion, Sabarimala journey and Tatvamasi.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/malikappuram/movie-review/96847648.cms' },
      { kind: 'review', source: 'Manorama — Malikappuram review', claim: 'Describes the film as devotion-filled and focused on a young devotee’s Sabarimala experience and Ayyappa faith.', url: 'https://www.manoramaonline.com/movies/movie-reviews/2022/12/30/malikappuram-movie-review.html' },
    ],
    filmUnderstanding: 'A Malayalam family adventure about a young girl whose ardent Ayyappa devotion drives her attempt to reach Sabarimala.',
    researchFocus: 'Ayyappa Sabarimala child devotion Tatvamasi pilgrimage Kerala sacred representation',
    redTeamChallenge: 'A devotional children’s film can sentimentalize faith and blur the line between a perceived divine protector and ordinary human agency.',
    fact: 'The story is fictional but uses the real Sabarimala pilgrimage, chants and devotional practices as its setting and spiritual vocabulary.',
    interpretation: 'Those practices are given dignity, emotional force and protective meaning, strongly supporting Sacred Regard and Parampara.',
    intent: 'No claim is made that the film settles theological or Sabarimala policy disputes.'
  }),

  makeHardenedBatchFilm({
    title: 'The Great Indian Kitchen', year: 2021, language: 'Malayalam', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Patriarchy', 'Sabarimala', 'Menstruation', 'Domestic labour', 'Mixed'],
    reasons: [
      'The film’s exposure of unpaid domestic labour, marital entitlement and gender humiliation is a serious Social Dharma critique and should not be mislabeled anti-Hindu simply because religion appears in that system.',
      'Sabarimala, ritual purity and religious authority are nevertheless integral to the film’s final critique of patriarchy, creating a materially contested sacred valence rather than a purely secular household story.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — The Great Indian Kitchen review', claim: 'Details the film’s critique of household patriarchy and explicitly connects it to menstruation and the Sabarimala temple-entry debate.', url: 'https://indianexpress.com/article/entertainment/movie-review/the-great-indian-kitchen-review-patriarchy-is-alive-and-kicking-7157622/' },
      { kind: 'review', source: 'Visual Anthropology — Sabarimala films study', claim: 'Analyzes the film at the intersection of gender and religion and argues it critiques patriarchal masculinity around Sabarimala-era gender regimes.', url: 'https://www.tandfonline.com/doi/full/10.1080/08949468.2023.2195342' },
    ],
    filmUnderstanding: 'A Malayalam domestic drama about a new bride’s suffocation under gendered household labour, sexual entitlement and ritual-purity expectations, culminating around Sabarimala-era politics.',
    researchFocus: 'Sabarimala menstruation ritual purity Hindu household patriarchy gender religion representation',
    redTeamChallenge: 'By making ritual purity and Sabarimala part of the oppressive structure, the film can be read as moving from criticism of patriarchy toward a negative judgment on Hindu tradition itself.',
    fact: 'The film explicitly links domestic gender hierarchy with menstruation rules and Sabarimala debate, while its primary narrative target is patriarchal control.',
    interpretation: 'Social-Dharma reform and negative sacred valence coexist, making Mixed more accurate than either automatic certification or blanket “Hindu-bashing.”',
    intent: 'No claim is made that the director is hostile to Hindus as a community.',
    risks: [{ id: 'sacred-religious-valence', summary: 'Sabarimala and ritual-purity practices are materially integrated into the film’s critique of patriarchal domination.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Kuruthi', year: 2021, language: 'Malayalam', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: 4, socialDharma: 4, sacredRegard: 1, contemptRisk: 3 },
    tags: ['Communal hatred', 'Hindu-Muslim', 'Extremism', 'Kerala', 'Mixed'],
    reasons: [
      'The film’s central moral is that religious hatred consumes people and communities, and it places moderates and extremists from different backgrounds inside the same violent crisis.',
      'Its balancing is itself contested: one review argues Muslim characters carry disproportionate fanatic coding, while others see a relatively even anti-bigotry thriller. That material disagreement makes Mixed the responsible verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'Hindustan Times — Kuruthi review', claim: 'Reads the film as an effective, relatively unbiased thriller asking questions about faith and communal hatred without picking sides.', url: 'https://www.hindustantimes.com/entertainment/tamil-cinema/kuruthi-movie-review-prithviraj-sukumaran-lets-the-hate-flow-through-him-in-engrossing-unbiased-thriller-101628601086682-amp.html' },
      { kind: 'review', source: 'The News Minute — Kuruthi review', claim: 'Challenges that balance and argues the film becomes a Good Muslim/Bad Muslim narrative with disproportionate Muslim fanatic coding.', url: 'https://www.thenewsminute.com/kerala/kuruthi-review-engaging-problematic-thriller-153738' },
      { kind: 'review', source: 'Scroll — Kuruthi review', claim: 'Describes Hindu and Muslim extremists colliding while moderates and a police officer are caught between them.', url: 'https://scroll.in/reel/1002470/scroll_in' },
    ],
    filmUnderstanding: 'A Kerala home-invasion thriller in which Hindu and Muslim communal violence converges around a prisoner, a Muslim family and a Hindu neighbour.',
    researchFocus: 'Hindu Muslim extremism communal hatred Quran Hindutva representation asymmetry Kerala',
    redTeamChallenge: 'Despite an anti-hatred thesis, the character distribution may reproduce an asymmetric stereotype of Muslim fanaticism.',
    fact: 'Contemporary reviews disagree materially on whether the film balances Hindu and Muslim extremism fairly.',
    interpretation: 'The anti-bigotry moral is positive, but unresolved representational asymmetry prevents a simple Certified verdict.',
    intent: 'No sectarian intent is inferred from the contested characterization.',
    risks: [{ id: 'community-contempt', summary: 'There is a material critical dispute over whether Muslim fanaticism is coded more broadly and negatively than Hindu extremism.', evidenceIndexes: [0, 1, 2], status: 'ambiguous', materiality: 'medium' }]
  }),
];
