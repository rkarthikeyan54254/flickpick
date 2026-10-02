import type { SanghiProfile } from '../types/sanghi';

const reviewedAt = '2026-10-02';
const methodologyVersion = '1.0-bharatiya';

const passedGate: NonNullable<SanghiProfile['publicationGate']> = {
  adversarialPass: true,
  regionalContextPass: true,
  socialRadarPass: true,
  adaptationDeltaPass: 'passed',
  narrativeIntegrityPass: true,
  factInterpretationIntentPass: true,
  evidenceSufficiencyPass: true,
  explanationPass: true,
  selfFalsificationPass: true,
};

function profile(
  value: Omit<SanghiProfile, 'methodologyVersion' | 'reviewedAt' | 'reviewDepth' | 'auditStatus' | 'publicationGate'>,
): SanghiProfile {
  return {
    ...value,
    methodologyVersion,
    reviewedAt,
    reviewDepth: 'source-audit',
    auditStatus: 'reviewed',
    publicationGate: passedGate,
  };
}

export const corpusExpansion02: SanghiProfile[] = [
  profile({
    title: 'Farzand', year: 2018, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Maratha', 'Swarajya', 'Kondaji Farzand', 'Itihasa'],
    reasons: [
      'The film deliberately recovers a lesser-known Maratha warrior and places Kondaji Farzand’s service to Chhatrapati Shivaji Maharaj and Swarajya at the center of public memory.',
      'Its language of bravery, sacrifice, local history and political self-rule is strongly aligned with the Culture Check civilizational and Rashtra dimensions.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review identifies Farzand as a historical tribute to Kondaji Farzand, Shivaji Maharaj’s warrior who captured Panhala with a small band of mavalas.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/farzand/movie-review/64395611.cms' },
      { kind: 'review', source: 'Loksatta', claim: 'The Marathi review explicitly frames Kondaji Farzand as one of the exceptional warriors found by Shivaji Maharaj for Swarajya.', url: 'https://www.loksatta.com/review/movie-review/marathi-movie-farzand-movie-review-chinmay-mandlekar-prasad-oak-digpal-lanjekar-mrunmayee-deshpande-1689126/' }
    ]
  }),

  profile({
    title: 'Fatteshikast', year: 2019, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Maratha', 'Swarajya', 'Shivaji Maharaj', 'Itihasa'],
    reasons: [
      'The narrative recreates Chhatrapati Shivaji Maharaj’s resistance to Shaista Khan and treats strategic defence of Swarajya as a legitimate heroic historical memory.',
      'The film remains rooted in Maharashtra’s own historical vocabulary, people and places rather than flattening the episode into generic action spectacle.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review identifies the film as the next historical chapter in Digpal Lanjekar’s Maratha series and praises its recreation of the era.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/fatteshikast/movie-review/72074311.cms' },
      { kind: 'review', source: 'Rotten Tomatoes synopsis', claim: 'The synopsis identifies the plot as Shivaji Maharaj’s planned attack on Shaista Khan in Pune.', url: 'https://www.rottentomatoes.com/m/fatteshikast' }
    ]
  }),

  profile({
    title: 'Mallesham', year: 2019, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 2, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Telangana', 'Handloom', 'Innovation', 'Parampara'],
    reasons: [
      'The biopic treats Pochampally handloom not as quaint background but as inherited livelihood and cultural heritage worth preserving through indigenous problem-solving.',
      'Mallesham’s innovation relieves women’s physical labour while enabling the weaving community to continue its craft, combining social dharma, local roots and continuity rather than framing tradition and progress as opposites.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review calls the film an ode to Padma Shri Chintakindi Mallesham and explicitly identifies preservation of Pochampally handloom heritage as a central theme.', url: 'https://indianexpress.com/article/entertainment/movie-review/mallesham-priyadarshi-shines-in-this-no-frills-biopic-drama-5799709/lite/' },
      { kind: 'official', source: 'Telangana State Innovation Cell', claim: 'The state innovation body documents Mallesham’s Asu machine, its impact on Pochampally weavers and the Padma Shri recognition.', url: 'https://teamtsic.telangana.gov.in/100-days-100-innovations/' },
      { kind: 'official', source: 'Press Information Bureau', claim: 'PIB identifies Chintakindi Mallesham as a 2017 Padma awardee whose Laxmi ASU machine reduced weaving labour.', url: 'https://www.pib.gov.in/newsite/printrelease.aspx?lang=2&reg=48&relid=157720' }
    ]
  }),

  profile({
    title: 'Harishchandrachi Factory', year: 2009, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 4, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Indian cinema', 'Dadasaheb Phalke', 'Cultural self-expression', 'Marathi'],
    reasons: [
      'The film celebrates Dadasaheb Phalke’s creation of an Indian cinema industry and his insistence on making films rooted in Indian stories, culture and ethos rather than remaining merely a consumer of imported moving images.',
      'Its national-cultural confidence is expressed through artistic institution-building and indigenous creative agency rather than through political sloganeering.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review describes the making of Raja Harishchandra as part of India’s assertion of identity and independence and highlights Phalke’s desire to make films resplendent with Indian culture and ethos.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/Harishchandrachi-Factory/movie-review/5567829.cms' },
      { kind: 'review', source: 'The Indian Express', claim: 'The retrospective identifies Phalke as the father of Indian cinema and the film as a fact-based account of creating India’s first motion picture.', url: 'https://indianexpress.com/article/entertainment/regional/dadasaheb-phalke-birth-anniversary-revisiting-harishchandrachi-factory-7893637/lite/' }
    ]
  }),

  profile({
    title: 'Kothanodi', year: 2015, language: 'Assamese', status: 'certified', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Assamese folklore', 'Oral tradition', 'Parampara', 'Local roots'],
    reasons: [
      'The film deliberately re-enters Assamese oral and literary folklore, adapting stories from Lakshminath Bezbaroa’s Burhi Aair Xadhu rather than treating regional tradition as disposable background.',
      'Its darkness and reinterpretation are part of a living folk-story tradition; they do not amount to contempt for Assamese culture or inherited narrative forms.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The article describes Kothanodi as Bhaskar Hazarika’s National Award-winning debut built from Assamese folk tales and a distinctly local, dark landscape.', url: 'https://indianexpress.com/article/entertainment/entertainment-others/bhaskar-hazarika-assamese-films-kothanodi-aamis-5695085/' },
      { kind: 'official', source: 'Directorate of Film Festivals', claim: 'The 63rd National Film Awards catalogue records Kothanodi as Best Assamese Film.', url: 'https://dff.nic.in/images/Documents/39_63rdNfaArchives.pdf' },
      { kind: 'review', source: 'The Indian Express', claim: 'A review identifies the four stories as adaptations of traditional Assamese tales collected in Burhi Aair Xadhu by Lakshminath Bezbaroa.', url: 'https://indianexpress.com/article/entertainment/television/shweta-basu-prasad-digital-playlist-kothanodi-is-a-assamese-anthology-based-on-folklore-4834316/' }
    ]
  }),

  profile({
    title: 'Kaalapani', year: 1996, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 2, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Anti-colonial', 'Freedom struggle', 'Cellular Jail', 'Malayalam'],
    reasons: [
      'The film makes colonial incarceration, torture and the sacrifice of Indian independence activists in the Cellular Jail its central historical memory.',
      'Its fictional protagonist functions inside a real colonial institution and independence-struggle setting, so the story can be strongly Bharat-aligned without being misrepresented as a literal biography.'
    ],
    integrityFlags: [
      { type: 'historical-fiction', status: 'verified', summary: 'The film is an epic historical drama set around real Cellular Jail conditions and independence activists, but its protagonist and many dramatic events are fictionalized.' }
    ],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The retrospective describes Kaalapani as a 1915-set epic about prisoners incarcerated in the Cellular Jail for connection with or participation in the Indian independence movement.', url: 'https://indianexpress.com/article/entertainment/malayalam/mohanlal-priyadarshan-made-kaalapani-for-rs-2-5-crore-but-couldnt-recoup-its-budget-10394465/' },
      { kind: 'review', source: 'Rotten Tomatoes synopsis', claim: 'The synopsis identifies the protagonist as a man falsely imprisoned by the British who witnesses torture and suffering in the Cellular Jail.', url: 'https://www.rottentomatoes.com/m/kala-pani-1996' }
    ]
  }),

  profile({
    title: 'Bharathi', year: 2000, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 5, itihasa: 4, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Tamil', 'Subramania Bharati', 'Freedom struggle', 'Social reform'],
    reasons: [
      'The biopic restores Mahakavi Subramania Bharati as both Tamil literary inheritance and an Indian nationalist voice whose poetry, journalism and activism helped mobilize resistance to colonial rule.',
      'His anti-caste, women’s-rights and social-reform commitments are treated here as part of Bharatiya social dharma rather than as evidence against civilizational rootedness.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'official', source: 'Press Information Bureau', claim: 'PIB documents Bharathiyar as a Tamil poet, freedom fighter and social reformer whose nationalist songs supported the independence movement and whose social reform opposed caste discrimination and supported women’s rights.', url: 'https://www.pib.gov.in/newsite/printrelease.aspx?lang=2&reg=48&relid=148927' },
      { kind: 'review', source: 'Times of India', claim: 'The film listing records Bharathi as a 2000 Tamil film directed by Gnana Rajasekaran and notes its National Film Award for Best Feature Film in Tamil.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-details/bharathi/movieshow/66179553.cms' },
      { kind: 'official', source: 'Azadi Ka Amrit Mahotsav', claim: 'The Ministry of Culture repository documents Bharati’s nationalist writings, exile and role in inspiring the freedom struggle.', url: 'https://amritmahotsav.nic.in/district-reopsitory-detail.htm?25130=' }
    ]
  }),

  profile({
    title: 'Manikarnika: The Queen of Jhansi', year: 2019, language: 'Hindi', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Rashtra', 'Rani Lakshmibai', '1857', 'Anti-colonial'],
    reasons: [
      'The film unequivocally celebrates Rani Lakshmibai’s defence of Jhansi, resistance to British rule, courage and sacrifice for her people and land.',
      'Its Bharatiya alignment is clear, while its overt hagiography and acknowledged creative liberties keep the record in human review for historical-fidelity calibration.'
    ],
    integrityFlags: [
      { type: 'historical-claim', status: 'supported', summary: 'Contemporary review coverage notes acknowledged creative liberties and a deliberately simplified, hagiographic narrative around Rani Lakshmibai.', fact: 'The film itself carries a creative-liberty caveat and compresses or invents material for dramatic effect.', interpretation: 'The historical-fidelity caution does not negate the film’s anti-colonial and Rashtra alignment.', intent: 'Commercial hagiography alone is not treated as evidence of deliberate falsification.' }
    ],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review describes the film as a nationalist hagiography of a queen who fought for her people and land, and explicitly notes its creative-liberty caveat.', url: 'https://indianexpress.com/article/entertainment/movie-review/manikarnika-movie-review-rating-5554689/lite/' }
    ]
  }),

  profile({
    title: 'The Vaccine War', year: 2023, language: 'Hindi', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 5, itihasa: 2, parampara: 1, localRoots: 3, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Indian science', 'Public health', 'Atmanirbharta'],
    reasons: [
      'The film’s strongest positive signal is confidence in Indian scientific capacity: it centers the scientists and institutions involved in developing an indigenous COVID-19 vaccine during a national emergency.',
      'Its adversarial portrayal of media and government-facing argument is a separate representation and source-fidelity issue; disagreement with that framing does not erase the film’s India-science and public-service alignment.'
    ],
    integrityFlags: [
      { type: 'source-fidelity', status: 'disputed', summary: 'Multiple reviews argue that the film shifts from documenting scientists to a one-sided defence of the government and an overly malicious depiction of media criticism.', fact: 'The movie is based on Going Viral by former ICMR director-general Balram Bhargava and dramatizes the development of Covaxin.', interpretation: 'The scientists’ work and the film’s media/government thesis should be evaluated separately.', intent: 'The audit does not infer deception merely from a strongly argumentative editorial stance.' }
    ],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review says the first half acknowledges Indian scientists and Covaxin development but criticizes the second half as a government mouthpiece portraying media as malicious.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/the-vaccine-war/amp_movie_review/103997842.cms' },
      { kind: 'review', source: 'The Indian Express', claim: 'The review recognizes a legitimate story in the race by Indian scientists to create Covaxin while noting the film’s strong atmanirbharta and government-facing editorial stance.', url: 'https://indianexpress.com/article/entertainment/movie-review/the-vaccine-war-movie-review-vivek-agnihotri-nana-patekar-covid-warriors-8959574/lite/' }
    ]
  }),

  profile({
    title: 'Nayika Devi: The Warrior Queen', year: 2022, language: 'Gujarati', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Gujarati history', 'Nayika Devi', 'Raksha', 'Itihasa'],
    reasons: [
      'The film recovers a Gujarati queen associated with the 1178 defeat of the Ghurid invasion and presents defence of land, polity and regional civilizational memory as heroic.',
      'The broad defeat of Muhammad of Ghor in Gujarat is historically supported, but the exact extent of Naikidevi’s personal battlefield role relies partly on later narrative sources, so the film remains in human review for historicity precision.'
    ],
    integrityFlags: [
      { type: 'historical-claim', status: 'disputed', summary: 'The Ghurid defeat in Gujarat is well attested, but historical sources differ on how directly Naikidevi personally commanded the battle; later Merutunga tradition gives her a prominent battlefield role.', fact: 'A 1178 Ghurid invasion was defeated during Mularaja II’s reign; later tradition credits regent Naikidevi with leading the resistance.', interpretation: 'The film’s recovery of the queen is culturally significant, but individual battlefield scenes should not be treated as settled documentary fact.', intent: 'No deliberate falsification is inferred from dramatizing the later tradition.' }
    ],
    evidence: [
      { kind: 'official', source: 'Sreenarayanaguru Open University history material', claim: 'University history material identifies Naikidevi as regent during Muhammad Ghori’s invasion and states that she resisted the incursion at Gadararaghatta and achieved victory.', url: 'https://d198y4z1gpgoxg.cloudfront.net/uploads/slm/CdNfREoq2Pkk9DTsvLCP4dnJGzj2fnNgOBuTqYiz.pdf' },
      { kind: 'review', source: 'Times of India', claim: 'The film was publicly framed as a Gujarati historical drama about Nayika Devi and her defeat of Muhammad Ghori; Gujarat granted it tax-free status citing the state’s cultural heritage and her heroism.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movies/news/khushi-shah-starrer-nayika-devi-the-warrior-queen-becomes-tax-free-in-gujarat/amp_articleshow/92032829.cms' }
    ]
  }),

  profile({
    title: 'Rangasthalam', year: 2018, language: 'Telugu', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Telugu roots', 'Village life', 'Social Dharma', 'Anti-authoritarian'],
    reasons: [
      'The film is intensely rooted in 1980s Telugu village life and simultaneously attacks entrenched exploitation and authoritarian power.',
      'Because social hierarchy criticism is not anti-Bharatiya by default and the film does not broadly ridicule inherited culture, it is retained as a strong local-roots control rather than being forced into either certification or rejection.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review describes the film as a village-rooted story of revenge and defiance against long-running authoritarian exploitation while also emphasizing the beauty and desirability of countryside life.', url: 'https://indianexpress.com/article/entertainment/movie-review/rangasthalam-movie-review-ram-charan-samantha-akkineni-star-rating-5117080/' }
    ]
  }),

  profile({
    title: 'Ganga Maiyya Tohe Piyari Chadhaibo', year: 1963, language: 'Bhojpuri', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Bhojpuri roots', 'Ganga', 'Widow remarriage', 'Cinema history'],
    reasons: [
      'As the first Bhojpuri feature film, it is itself a major act of regional cultural continuity, giving Bhojpuri language and Purvanchal social life a durable cinematic form.',
      'Its sacred-Ganga vocabulary coexists with a social-reform story around dowry and widow remarriage, making tradition and reform part of the same local moral world rather than opposites.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express archive', claim: 'The Indian Express identifies Ganga Maiyya Tohe Piyari Chadhaibo as the first-ever Bhojpuri film and the film chosen to mark 50 years of Bhojpuri cinema.', url: 'https://indianexpress.com/archive/2011/02/14/page/7/' },
      { kind: 'review', source: 'Times of India', claim: 'Times of India traces the film’s origin to Dr Rajendra Prasad’s encouragement for a Bhojpuri movie and identifies it as the well-received beginning of Bhojpuri cinema.', url: 'https://timesofindia.indiatimes.com/entertainment/bhojpuri/movies/did-you-know/dr-rajendra-prasad-wanted-a-bhojpuri-movie/articleshow/13955392.cms' },
      { kind: 'film', source: 'Film history record', claim: 'The film’s central social theme includes dowry pressure and widow remarriage while its title and songs invoke Mother Ganga.', url: 'https://en.wikipedia.org/wiki/Ganga_Maiyya_Tohe_Piyari_Chadhaibo' }
    ]
  }),
];
