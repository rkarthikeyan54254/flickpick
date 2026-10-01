import type { SanghiProfile } from '../types/sanghi';

const reviewedAt = '2026-10-01';
const methodologyVersion = '0.2';

export const sanghiProfiles: SanghiProfile[] = [
  {
    title: 'Article 370', year: 2024, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 2, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Raksha', 'Kashmir'],
    reasons: ['Frames Indian sovereignty and constitutional integration as positive baseline values.', 'National-security institutions and counter-terror operations are central to the narrative.'],
    integrityFlags: [{ type: 'source-fidelity', status: 'disputed', summary: 'Specific historical details and compression should be evaluated separately from the film\'s India-sovereignty framing.' }],
    evidence: [{ kind: 'interview', source: 'Indian Express', claim: 'Director Aditya Suhas Jambhale described the film as based on true events and research around the Article 370 operation.', url: 'https://indianexpress.com/article/entertainment/bollywood/article-370-director-aditya-jambhale-says-yami-gautam-starrer-is-based-on-true-facts-this-mission-was-carried-out-very-secretively-had-to-dig-out-information-not-available-in-the-public-domain-9183921/' }]
  },
  {
    title: 'Uri: The Surgical Strike', year: 2019, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 5, itihasa: 3, parampara: 2, localRoots: 2, raksha: 5, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Raksha', 'Military'], reasons: ['Indian military service, sacrifice and retaliation to cross-border terrorism define the story.', 'The narrative clearly adopts an Indian national-security perspective.'], integrityFlags: [], evidence: []
  },
  {
    title: 'Chhaava', year: 2025, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 4, localRoots: 4, raksha: 4, socialDharma: 2, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Itihasa', 'Dharma', 'Maratha'], reasons: ['Centers Chhatrapati Sambhaji Maharaj and Maratha resistance within an explicitly Indian historical frame.', 'Civilizational memory, kingship, sacrifice and religious identity are treated seriously rather than as decorative motifs.'], integrityFlags: [{ type: 'source-fidelity', status: 'unverified', summary: 'Historical dramatization requires a dedicated scene-by-scene source audit in a later corpus pass.' }], evidence: []
  },
  {
    title: 'Swatantrya Veer Savarkar', year: 2024, language: 'Hindi', status: 'certified', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 3, raksha: 3, socialDharma: 2, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Itihasa', 'Biopic'], reasons: ['The film foregrounds Savarkar\'s nationalist political life and his interpretation of Indian independence.', 'Its certification reflects worldview alignment, not a claim that every historical assertion is uncontested.'], integrityFlags: [{ type: 'source-fidelity', status: 'disputed', summary: 'Reviews and historians dispute parts of the film\'s historical framing; this remains separate from worldview certification.' }], evidence: []
  },
  {
    title: 'The Kashmir Files', year: 2022, language: 'Hindi', status: 'certified', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 4, itihasa: 5, parampara: 3, localRoots: 4, raksha: 3, socialDharma: 2, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Kashmir', 'Itihasa', 'Displacement'], reasons: ['Places the displacement and killings of Kashmiri Pandits at the center of historical memory.', 'Treats Hindu identity and loss as legitimate subjects of remembrance rather than incidental background.'], integrityFlags: [{ type: 'source-fidelity', status: 'disputed', summary: 'Individual incidents, composites and scale claims require source-level verification; worldview certification does not resolve those disputes.' }], evidence: []
  },
  {
    title: 'PK', year: 2014, language: 'Hindi', status: 'not-certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 2, raksha: null, socialDharma: 3, sacredRegard: 1, contemptRisk: 3 },
    tags: ['Religion satire', 'Sacred-regard'], reasons: ['Organized religion and sacred practice are primarily treated through satire and skepticism.', 'The film critiques multiple religions, but under this lens its treatment of lived Hindu ritual is too consistently comic/cynical to qualify.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Los Angeles Times', claim: 'Review describes PK as a satire of organized religion across Hinduism, Sikhism, Islam and Christianity.', url: 'https://www.latimes.com/entertainment/movies/la-et-mn-pk-movie-review-20141220-story.html' }]
  },

  {
    title: 'Amaran', year: 2024, language: 'Tamil', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 5, itihasa: 3, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 2, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Raksha', 'Biopic'], reasons: ['Major Mukund Varadarajan\'s service, sacrifice and Army identity are the moral center of the film.', 'The story strongly affirms Indian national service and military duty.'], integrityFlags: [{ type: 'identity-asymmetry', status: 'disputed', summary: 'Mukund\'s Iyengar caste identity is omitted; the director says his parents requested that he be represented as Indian and Tamilian first. Intentional anti-Brahmin bias is not established.' }], evidence: [{ kind: 'interview', source: 'India Today', claim: 'Director Rajkumar Periasamy said Mukund\'s parents requested that caste not be foregrounded.', url: 'https://www.indiatoday.in/movies/regional-cinema/story/amaran-director-rajkumar-periasamy-major-mukund-varadarajan-caste-brahmin-sivakarthikeyan-2628160-2024-11-05' }]
  },
  {
    title: 'Soorarai Pottru', year: 2020, language: 'Tamil', status: 'mixed', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 1, localRoots: 4, raksha: 2, socialDharma: 4, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Adaptation delta', 'Social Dharma'], reasons: ['The film is strongly rooted in Tamil social context and celebrates aspiration and democratization of air travel.', 'Its fictionalization materially changes G. R. Gopinath\'s documented social/ideological setting, so the profile remains Mixed rather than treating the biopic framing as neutral.'], integrityFlags: [{ type: 'ideological-substitution', status: 'supported', summary: 'Public reporting describes Gopinath\'s Iyengar background while the film relocates the protagonist into a Periyar/self-respect ideological frame.' }], evidence: [{ kind: 'review', source: 'Indian Express', claim: 'Later commentary identifies the film\'s self-respect marriage and Periyar/Ambedkar imagery as a major adaptation change.', url: 'https://indianexpress.com/article/opinion/columns/in-one-battle-after-another-radical-politics-is-the-ultimate-cinematic-masala-10290445/lite/' }]
  },
  {
    title: 'Jai Bhim', year: 2021, language: 'Tamil', status: 'neutral', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Social Dharma', 'True story'], reasons: ['Its central concern is police abuse, legal justice and the treatment of an Irular family.', 'Caste/social criticism alone is neither qualifying nor disqualifying under this methodology; no broad civilizational contempt is inferred from the premise.'], integrityFlags: [{ type: 'adaptation-delta', status: 'unverified', summary: 'As a film inspired by a real legal case, character/community substitutions merit deeper source comparison in the next audit pass.' }], evidence: [{ kind: 'interview', source: 'Ananda Vikatan', claim: 'Justice K. Chandru discusses the real case and Irular context that inspired the film.', url: 'https://www.youtube.com/watch?v=lUcmlU3A_fU' }]
  },
  {
    title: 'Ponniyin Selvan: Part I', year: 2022, language: 'Tamil', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 3, itihasa: 5, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Itihasa', 'Tamil roots', 'Chola'], reasons: ['Immerses the viewer in Chola-era Tamil political, cultural and religious life.', 'Historical memory and civilizational continuity are central rather than incidental.'], integrityFlags: [], evidence: []
  },
  {
    title: 'Maharaja', year: 2024, language: 'Tamil', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Crime', 'Family'], reasons: ['A revenge/crime drama centered on a father and daughter rather than national or civilizational questions.', 'Reviewed as Neutral instead of being forced into an ideological category.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Onmanorama', claim: 'Review focuses on revenge, sexual violence and father-daughter themes rather than civilizational politics.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2024/07/14/maharaja-vijay-sethupathi-movie-analysis-tamil-nithilan-swaminathan-cinemascape.html' }]
  },
  {
    title: 'Karnan', year: 2021, language: 'Tamil', status: 'mixed', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Local roots', 'Social Dharma', 'Caste'], reasons: ['The film is explicitly about caste oppression and state violence, but it also treats village deities, symbols and local sacred life as meaningful.', 'Because criticism of hierarchy is not automatically anti-civilizational, the film is Mixed rather than rejected.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'New Indian Express', claim: 'Review notes both caste-resistance themes and reverence for nattar/siru deivangal and subaltern cultural symbols.', url: 'https://www.newindianexpress.com/states/tamil-nadu/2021/Apr/14/karnan-a-resistance-to-oppression-2289751.html' }]
  },

  {
    title: 'Hanu-Man', year: 2024, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 4, raksha: 2, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Dharma', 'Hanuman', 'Civilizational continuity'], reasons: ['Hanuman and devotional symbolism are central to the hero\'s power, ethics and narrative resolution.', 'Indic sacred material is treated as living meaning, not as a decorative mythological skin.'], integrityFlags: [], evidence: []
  },
  {
    title: 'Kalki 2898 AD', year: 2024, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 5, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Dharma', 'Itihasa', 'Kalki'], reasons: ['Mahabharata characters, Vishnu\'s Kalki prophecy and restoration of dharmic order form the story architecture.', 'Anti-authoritarian themes do not negate the film\'s strongly Indic cosmology.'], integrityFlags: [], evidence: []
  },
  {
    title: 'RRR', year: 2022, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 4, raksha: 4, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Anti-colonial', 'Itihasa'], reasons: ['The film is an emphatic anti-colonial fantasy centered on Indian resistance and sacrifice.', 'Ram/Bheem imagery and regional cultural symbolism contribute to a civilizationally Indian visual language.'], integrityFlags: [{ type: 'historical-fiction', status: 'verified', summary: 'The film is intentionally fictionalized and should not be read as a literal biography of its historical inspirations.' }], evidence: []
  },
  {
    title: 'Karthikeya 2', year: 2022, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 4, raksha: 1, socialDharma: 2, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Krishna', 'Dharma', 'Dwarka'], reasons: ['Sri Krishna, Dwarka and inherited sacred narratives drive the mystery and are treated as worthy of investigation rather than superstition.', 'Research around Krishna-linked geography is part of the film\'s adventure structure.'], integrityFlags: [], evidence: [{ kind: 'interview', source: 'Cinema Express', claim: 'Cinematographer/editor Karthik Gattamneni discussed research connecting locations such as Dwarka and Govardhan Giri to the Krishna narrative.', url: 'https://www.cinemaexpress.com/telugu/interviews/2022/Aug/22/karthik-gattamneni-interview-for-karthikeya-2-33975.html' }]
  },
  {
    title: 'Sita Ramam', year: 2022, language: 'Telugu', status: 'certified', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 4, itihasa: 2, parampara: 3, localRoots: 4, raksha: 4, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Army', 'Kashmir'], reasons: ['The protagonist\'s Indian Army service and duty in Kashmir are treated with respect.', 'The romance crosses religious/national boundaries without requiring the Indian soldier\'s identity to be mocked or diminished.'], integrityFlags: [], evidence: []
  },
  {
    title: 'Hi Nanna', year: 2023, language: 'Telugu', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 2, raksha: null, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Romance'], reasons: ['A family and relationship drama with no strong civilizational or political signal.', 'Neutral is a valid reviewed outcome; certification is not required for a film to be worthwhile.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Indian Express', claim: 'Review describes the film as a family-centric story of a father, daughter and romantic relationship.', url: 'https://indianexpress.com/article/entertainment/movie-review/hi-nanna-movie-review-nani-mrunal-thakur-impress-in-a-poignant-tale-of-love-and-bonding-9058145/lite/' }]
  },

  {
    title: 'Kantara', year: 2022, language: 'Kannada', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 3, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Daiva', 'Parampara', 'Local roots'], reasons: ['Daiva worship, sacred land and inherited ritual are ontologically real inside the story.', 'Conflict over land and hierarchy occurs within a deeply local sacred framework rather than replacing it.'], integrityFlags: [], evidence: []
  },
  {
    title: 'Kantara: Chapter 1', year: 2025, language: 'Kannada', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Daiva', 'Parampara', 'Local roots'], reasons: ['The film retains sacred landscape, daiva tradition and ancestral obligation as the core moral world.', 'Rishab Shetty has publicly emphasized preserving the cultural essence and treating daiva ritual as sacred.'], integrityFlags: [], evidence: [{ kind: 'interview', source: 'Hollywood Reporter India', claim: 'Rishab Shetty said the cultural essence, tradition and values of Kantara could not be compromised.', url: 'https://www.hollywoodreporterindia.com/features/interviews/rishab-shetty-on-kantara-chapter-1-it-felt-like-my-first-film' }]
  },
  {
    title: '777 Charlie', year: 2022, language: 'Kannada', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 3, raksha: null, socialDharma: 2, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Family', 'Compassion'], reasons: ['Primarily a human-animal bonding and redemption story.', 'Some reviewers note Mahabharata echoes around Dharma, but the film is not centrally a civilizational or national narrative.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Kannada Filmibeat', claim: 'Review explicitly compares Dharma\'s journey with the Mahabharata story of Dharmaraya and the dog.', url: 'https://kannada.filmibeat.com/reviews/rakshit-shetty-starrer-777-charlie-movie-review-and-rating-058632.html' }]
  },
  {
    title: 'K.G.F: Chapter 2', year: 2022, language: 'Kannada', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Gangster', 'Power'], reasons: ['Its central concerns are power, crime, ambition and personal loyalty rather than Indic or national worldview.', 'The presence of Indian settings alone is not enough for certification.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Times of India', claim: 'Review centers the film on Rocky\'s power struggle, enemies and gangster-world ambitions.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/k-g-f-chapter-2/movie-review/90832069.cms' }]
  },
  {
    title: 'Vikrant Rona', year: 2022, language: 'Kannada', status: 'neutral', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Mystery', 'Local setting'], reasons: ['A murder-mystery/adventure whose regional setting does not by itself create a strong civilizational signal.', 'No major evidence in the prototype pass warrants either certification or a negative ideological label.'], integrityFlags: [], evidence: []
  },
  {
    title: 'Sapta Sagaradaache Ello: Side A', year: 2023, language: 'Kannada', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: null, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Romance', 'Relationship'], reasons: ['A relationship drama about love, imprisonment and sacrifice rather than politics or civilizational identity.', 'Reviewed Neutral so the classifier does not manufacture ideology where little is present.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Rotten Tomatoes synopsis/review aggregation', claim: 'The film is described primarily as a middle-class love story disrupted by imprisonment.', url: 'https://www.rottentomatoes.com/m/saptha_sagaradaache_ello' }]
  },

  {
    title: 'The Great Indian Kitchen', year: 2021, language: 'Malayalam', status: 'not-certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: null, socialDharma: 5, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Social Dharma', 'Sabarimala', 'Patriarchy'], reasons: ['The film deliberately uses menstrual-purity and Sabarimala-related practices as part of its critique of patriarchy.', 'Under this lens, inherited Hindu domestic/religious practice is predominantly framed as something the protagonist must reject rather than inhabit or reform from within.'], integrityFlags: [], evidence: [{ kind: 'interview', source: 'Telegraph India', claim: 'Director Jeo Baby said women\'s rights, menstrual impurity norms and the Sabarimala issue were concerns he intentionally included.', url: 'https://www.telegraphindia.com/entertainment/director-jeo-baby-on-the-great-indian-kitchen/cid/1813047' }]
  },
  {
    title: 'Malikappuram', year: 2022, language: 'Malayalam', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: null, socialDharma: 2, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Ayyappa', 'Sabarimala', 'Devotion'], reasons: ['A child\'s devotion to Ayyappa and pilgrimage to Sabarimala are the emotional and narrative core.', 'Faith is presented from within the devotional worldview rather than reduced to superstition.'], integrityFlags: [], evidence: [{ kind: 'interview', source: 'Onmanorama', claim: 'Unni Mukundan described Malikappuram as a dedication to Ayyappa devotees.', url: 'https://www.onmanorama.com/entertainment/entertainment-news/2022/12/15/malikappuram-film-trailer-release-ayyappa-devotees-dedication.amp.html' }]
  },
  {
    title: '2018', year: 2023, language: 'Malayalam', status: 'neutral', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kerala', 'Solidarity', 'Floods'], reasons: ['A Kerala disaster-survival story built around inter-community solidarity rather than a single ideological worldview.', 'Religious imagery is generally used in service of humanity, but representation balance has been debated.'], integrityFlags: [{ type: 'representation-asymmetry', status: 'disputed', summary: 'Some commentary argues Christian relief activity receives greater narrative emphasis while Muslim and political contributions are underrepresented.' }], evidence: [{ kind: 'review', source: 'Outlook India', claim: 'Review notes both inter-community solidarity and criticism that Christian relief work receives comparatively more emphasis.', url: 'https://www.outlookindia.com/art-entertainment/unlikely-heroes-in-unprecedented-disasters-a-review-of-2018-everyone-is-a-hero' }]
  },
  {
    title: 'Jana Gana Mana', year: 2022, language: 'Malayalam', status: 'mixed', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 1, rashtra: 2, itihasa: 2, parampara: 1, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Political drama', 'Social Dharma'], reasons: ['The film is built around caste, profiling, media manipulation, encounter killings and institutional power.', 'Its critique is political and socially reformist, but the prototype evidence does not justify collapsing that into a blanket anti-Hindu finding.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Indian Express', claim: 'Review identifies casteism, profiling, encounter killings and contemporary political incidents as central concerns.', url: 'https://indianexpress.com/article/entertainment/malayalam/jana-gana-mana-review-prithviraj-steals-show-in-preachy-patronising-political-thriller-7891541/' }]
  },
  {
    title: 'Bramayugam', year: 2024, language: 'Malayalam', status: 'mixed', confidence: 'medium', methodologyVersion, reviewedAt,
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 3, parampara: 2, localRoots: 5, raksha: null, socialDharma: 4, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Folklore', 'Caste', 'Horror'], reasons: ['Deeply rooted in Kerala folklore, traditional architecture and a pre-modern cultural landscape.', 'At the same time, the mana, caste hierarchy and tantrik power are deliberately rendered through horror and domination, producing a genuinely mixed civilizational signal.'], integrityFlags: [{ type: 'caricature-risk', status: 'disputed', summary: 'The film uses a Brahmin mana and caste hierarchy as part of its horror/power structure; broader anti-Brahmin intent is not established.' }], evidence: [{ kind: 'interview', source: 'Onmanorama', claim: 'Director Rahul Sadasivan describes the film as a fictional folk-horror world centered on a mana and tantrik figure.', url: 'https://www.onmanorama.com/entertainment/interviews/2024/02/16/bramayugam-mammootty-rahul-sadasivan-black-and-white-format-interview.html' }]
  },
  {
    title: 'Home', year: 2021, language: 'Malayalam', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 4, raksha: null, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Parampara'], reasons: ['A warm family drama about generational distance and technology.', 'Its respect for family bonds is relevant to Parampara, but the film has no sufficiently strong broader civilizational signal to certify.'], integrityFlags: [], evidence: [{ kind: 'review', source: 'Hindustan Times', claim: 'Review describes the film as a relationship drama about a technology-challenged father reconnecting with his sons.', url: 'https://www.hindustantimes.com/entertainment/others/home-movie-review-indrans-malayalam-film-is-a-charming-relationship-drama-101629366749518.html/' }]
  }
];
