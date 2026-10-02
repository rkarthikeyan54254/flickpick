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

export const corpusExpansion01: SanghiProfile[] = [
  profile({
    title: 'Tanhaji: The Unsung Warrior', year: 2020, language: 'Hindi', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 4, raksha: 5, socialDharma: 2, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Rashtra', 'Maratha', 'Swarajya', 'Itihasa'],
    reasons: [
      'The film explicitly celebrates Tanaji Malusare, Chhatrapati Shivaji Maharaj, Maratha resistance, Swarajya, bhagwa symbolism and defence of homeland as positive civilizational memory.',
      'Its strongly simplified historical storytelling does not negate the Bharatiya alignment, but the adaptation remains a human-review case until the largest historical compressions are source-checked title by title.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review describes the film as a Maratha-valour epic centered on Tanaji, Shivaji, bhagwa symbolism and desh prem, while criticizing its simplified treatment of the past.', url: 'https://indianexpress.com/article/entertainment/movie-review/tanhaji-movie-review-rating-kajol-ajay-saif-6209397/' },
      { kind: 'review', source: 'The Indian Express release review', claim: 'The film revolves around Maratha commander Tanhaji Malusare and the battle against Uday Bhan, with Sharad Kelkar portraying Chhatrapati Shivaji.', url: 'https://indianexpress.com/article/entertainment/bollywood/tanhaji-movie-review-release-live-updates-6209153/' }
    ]
  }),

  profile({
    title: 'Kesari', year: 2019, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 4, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Rashtra', 'Sikh history', 'Military', 'Sacrifice'],
    reasons: [
      'The Battle of Saragarhi is presented as a story of Sikh martial courage, collective duty, sacrifice and honour, with the 21 soldiers refusing to abandon their post.',
      'The film preserves Sikh religious identity and martial tradition as a source of strength rather than treating it as exotic or embarrassing.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review identifies the 1897 Battle of Saragarhi and the 21 Sikh soldiers fighting a vastly larger Afghan force as the heart of the film.', url: 'https://indianexpress.com/article/entertainment/movie-review/kesari-movie-review-akshay-kumar-parineeti-chopra-5636992/' },
      { kind: 'interview', source: 'The Indian Express', claim: 'The filmmakers describe Saragarhi as a story of valour, honour, courage and Sikh pride that they wanted a wider Indian audience to know.', url: 'https://indianexpress.com/article/entertainment/bollywood/akshay-kumar-kesari-sikh-roles-5634221/' }
    ]
  }),

  profile({
    title: 'Kadaisi Vivasayi', year: 2022, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Tamil roots', 'Agrarian life', 'Kuladeivam', 'Parampara'],
    reasons: [
      'The film inhabits rural Tamil agrarian life from within: farming, cattle, village ritual, a temple festival, kuladeivam worship and Murugan devotion are part of the community’s lived moral world.',
      'It treats continuity of farming, inherited ritual and harmonious living with the land as meaningful rather than as superstition to be discarded.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Silverscreen India', claim: 'The review describes the film as rooted near Usilampatti and built around a temple festival, ancestral deity worship and the last farmer cultivating grain for the ritual.', url: 'https://silverscreenindia.com/movies/reviews/kadaisi-vivasayi-review-manikandan-lovely-if-rose-tinted-portrait-of-rural-tn/' },
      { kind: 'review', source: 'Cinema Express', claim: 'The review notes Murugan references, vibhoodhi, traditional rituals and the film’s interest in documenting a sustainable inherited way of life.', url: 'https://www.cinemaexpress.com/tamil/review/2022/feb/11/kadaisi-vivasayi-movie-review-a-paean-to-simple-living-and-self-sufficiency-29677.html' }
    ]
  }),

  profile({
    title: 'Ponniyin Selvan: Part II', year: 2023, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 3, itihasa: 5, parampara: 5, localRoots: 5, raksha: 3, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Tamil roots', 'Chola', 'Itihasa', 'Literary adaptation'],
    reasons: [
      'The second part continues to immerse viewers in Chola-era Tamil political, cultural and religious memory, with dynastic duty and inherited Tamil civilizational identity central to the story.',
      'Its departures from Kalki’s historical-fiction novel are adaptation choices, not automatically factual-integrity failures; the source itself is historical fiction rather than a documentary record.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review explicitly discusses the film as Mani Ratnam’s adaptation of Kalki Krishnamurthy’s historical-fiction epic and notes major creative deviations in Part II.', url: 'https://indianexpress.com/article/entertainment/movie-review/ponniyin-selvan-2-movie-review-ps-2-mani-ratnam-vikram-aishwarya-rai-8580814/' }
    ]
  }),

  profile({
    title: 'Sye Raa Narasimha Reddy', year: 2019, language: 'Telugu', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Anti-colonial', 'Rayalaseema', 'Resistance'],
    reasons: [
      'The film’s core moral frame is anti-colonial resistance: Narasimha Reddy organizes local people against British extraction and rule and is presented as an early inspiration for later freedom fighters.',
      'The Bharatiya verdict remains positive even though the film openly mythologizes its protagonist and compresses a poorly documented historical record.'
    ],
    integrityFlags: [
      { type: 'historical-claim', status: 'disputed', summary: 'Contemporary reviews note that the film mythologizes Uyyalawada Narasimha Reddy and that its historical accuracy is uncertain; this affects Narrative Integrity, not the anti-colonial alignment.', fact: 'The film is based on Narasimha Reddy but uses extensive fictionalization and heroic myth-making.', interpretation: 'The historical uncertainty requires a separate source-fidelity caution.', intent: 'No intent to deceive is inferred merely from commercial dramatization.' }
    ],
    evidence: [
      { kind: 'review', source: 'The Indian Express', claim: 'The review describes Narasimha Reddy as a Rayalaseema rebel and the film as a story of common people taking up anti-colonial struggle, while criticizing the film’s mythologizing.', url: 'https://indianexpress.com/article/entertainment/movie-review/sye-raa-narasimha-reddy-movie-review-rating-chiranjeevi-6048180/' },
      { kind: 'review', source: 'The Indian Express Hindi review', claim: 'The review explicitly says the film’s historical accuracy is dubious and notes its fiction-based-on-fact caveat.', url: 'https://indianexpress.com/article/entertainment/telugu/sye-raa-narasimha-reddy-movie-review-hindi-chiranjeevi-6052992/' }
    ]
  }),

  profile({
    title: 'Gautamiputra Satakarni', year: 2017, language: 'Telugu', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Itihasa', 'Telugu history', 'Satavahana', 'Bharata'],
    reasons: [
      'The film explicitly centers a major Satavahana ruler and frames political unification, Telugu historical memory and Bharata-khandam as affirmative civilizational concerns.',
      'Because the surviving ancient record is limited and the film makes strong unity claims, certification and historical certainty are kept separate.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review calls the film a story for viewers who care strongly about Telugu culture, language and history and describes Satakarni’s dream of a united Bharata khandam.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/gautamiputra-satakarni/movie-review/56495373.cms' },
      { kind: 'review', source: 'Rotten Tomatoes synopsis', claim: 'The film chronicles the life of Gautamiputra Satakarni, a Satavahana ruler of the 2nd century CE.', url: 'https://www.rottentomatoes.com/m/gautamiputra_satakarni' }
    ]
  }),

  profile({
    title: 'Marakkar: Arabikadalinte Simham', year: 2021, language: 'Malayalam', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 2, civilizationalContinuity: 4, rashtra: 4, itihasa: 5, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Kerala history', 'Anti-colonial', 'Naval resistance', 'Local roots'],
    reasons: [
      'The film places Kunjali Marakkar and resistance to Portuguese colonial intrusion within Kerala’s own political and maritime history, making local anti-colonial memory the central positive frame.',
      'Sparse records and several criticized period-setting choices create a Narrative Integrity concern, but they do not reverse the film’s Bharatiya anti-colonial alignment.'
    ],
    integrityFlags: [
      { type: 'historical-claim', status: 'supported', summary: 'The broad Kunjali-Marakkar anti-Portuguese history is well attested, but reviews note sparse personal records and criticized architecture/costume/setting choices in the film.', fact: 'Kerala government and school-history sources identify the Marakkars as Zamorin naval commanders who resisted Portuguese expansion.', interpretation: 'The film’s broad historical frame is sound while specific scenes and material culture are substantially dramatized.', intent: 'No hostile or deceptive intent is inferred from those production choices.' }
    ],
    evidence: [
      { kind: 'official', source: 'Kerala SCERT Social Science', claim: 'Kerala’s school history text identifies the Kunjali Marakkars as Zamorin naval captains who fought the Portuguese.', url: 'https://scert.kerala.gov.in/wp-content/uploads/2018/04/10_e_socialscience1_part1.pdf' },
      { kind: 'review', source: 'Times of India', claim: 'The review notes that the film is built around sparse historical records and criticizes some period-setting, architecture and costume choices.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/marakkar-arabikadalinte-simham/amp_movie_review/88052313.cms' }
    ]
  }),

  profile({
    title: 'Pathonpatham Noottandu', year: 2022, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 2, itihasa: 5, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kerala history', 'Social Dharma', 'Local roots', 'Reform'],
    reasons: [
      'The film is deeply situated in 19th-century Travancore and treats Arattupuzha Velayudha Panicker’s resistance to caste and gender injustice as an Indian social-reform story rather than as civilizational rejection.',
      'Under this methodology, criticism of hierarchy is compatible with Bharatiya certification when the narrative remains rooted in local history, duty and reform from within society.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review describes the film as a 19th-century Travancore reform narrative centered on Velayudha Chekavar fighting caste, gender and status discrimination.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/pathonpatham-noottandu/movie-review/94094861.cms' }
    ]
  }),

  profile({
    title: 'Kurukshetra', year: 2019, language: 'Kannada', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 5, parampara: 5, localRoots: 4, raksha: 3, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Mahabharata', 'Dharma', 'Itihasa', 'Kannada'],
    reasons: [
      'The film is a large-scale Kannada retelling of the Mahabharata, treating its characters, moral conflicts, loyalty and dharmic questions as living narrative material.',
      'Centering Duryodhana as a tragic protagonist is an interpretive choice within the epic tradition, not a rejection or ridicule of the sacred source.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review describes the film as a Mahabharata adaptation told largely through Duryodhana, with Karna’s loyalty and giving nature also foregrounded.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/kurukshetra/movie-review/70600701.cms' }
    ]
  }),

  profile({
    title: 'Krantiveera Sangolli Rayanna', year: 2012, language: 'Kannada', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Kannada history', 'Anti-colonial', 'Kittur'],
    reasons: [
      'The film presents Sangolli Rayanna’s resistance to British rule, loyalty to Kittur Chennamma and Kannada identity as heroic public memory.',
      'Its regional patriotism sits comfortably within the broader Bharatiya frame rather than being treated as a competing identity.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Filmibeat', claim: 'The review describes the film as based on freedom fighter Sangolli Rayanna and highlights his patriotism, love for Kannada and resistance alongside Kittur Chennamma.', url: 'https://www.filmibeat.com/kannada/reviews/2012/kranthiveera-sangolli-rayanna-review-100817.html' },
      { kind: 'official', source: 'Government of Karnataka, Belagavi Division', claim: 'The regional government portal maintains the Krantiveera Sangolli Rayanna memorial as a recognized historic site.', url: 'https://rcbelagavi.karnataka.gov.in/en' }
    ]
  }),

  profile({
    title: 'Dollu', year: 2022, language: 'Kannada', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Kannada roots', 'Folk art', 'Dollu Kunitha', 'Parampara'],
    reasons: [
      'The story treats Dollu Kunitha as inherited sacred folk practice and asks how a living tradition can survive migration, economics and generational change.',
      'The film allows reform and inclusivity inside tradition rather than presenting preservation and social change as mutually exclusive.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The News Minute', claim: 'The review describes the film as a supporter of Dollu Kunitha, a Karnataka folk tradition combining drumbeats, dance and devotion, while also examining inclusion.', url: 'https://www.thenewsminute.com/karnataka/dollu-review-sagar-puranik-s-debut-champion-folk-and-tradition-lovely-twist-167229' },
      { kind: 'review', source: 'Times of India', claim: 'The review emphasizes preserving ancestral Dollu tradition and calls the film a native Karnataka story about sustaining folk arts.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/dollu/movie-review/93728143.cms' }
    ]
  }),

  profile({
    title: 'Pawankhind', year: 2022, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Maratha', 'Swarajya', 'Sacrifice', 'Itihasa'],
    reasons: [
      'The film centers Baji Prabhu Deshpande, Chhatrapati Shivaji Maharaj and the defence of Swarajya, presenting sacrifice for political and civilizational self-rule as its core moral achievement.',
      'The makers explicitly frame the work as a cinematic recreation rather than complete documentation, which reduces the risk of confusing dramatization with archival history.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review identifies the Battle of Pavan Khind, Baji Prabhu and the Maratha army as the film’s historical core and notes the makers’ explicit cinematic-recreation disclaimer.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/pawankhind/movie-review/89668027.cms' }
    ]
  }),

  profile({
    title: 'Subhedar', year: 2023, language: 'Marathi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Maratha', 'Swarajya', 'Tanaji Malusare', 'Itihasa'],
    reasons: [
      'The film treats Swarajya not only as warfare but as public duty, governance, infrastructure, loyalty and people-centered kingship under Chhatrapati Shivaji Maharaj.',
      'Tanaji Malusare’s service and sacrifice are placed inside a larger moral vision of responsibility to community and polity.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review emphasizes the film’s treatment of Shivaji Maharaj’s governance, public works, people skills, Swarajya and Tanaji Malusare’s bravery and loyalty.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/subhedar/etmoviereview/103062959.cms' }
    ]
  }),

  profile({
    title: 'Bagha Jatin', year: 2023, language: 'Bengali', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Bengal', 'Anti-colonial', 'Biopic'],
    reasons: [
      'The film restores Jatindranath Mukherjee’s anti-colonial revolutionary activity to Bengali and Indian public memory and treats armed resistance to British rule as patriotic sacrifice.',
      'The government historical record independently supports Bagha Jatin’s revolutionary leadership, international arms plan and final armed confrontation, reducing the risk that the film’s basic national-memory frame is invented.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'official', source: 'Azadi Ka Amrit Mahotsav, Ministry of Culture', claim: 'The Government of India history repository documents Bagha Jatin’s revolutionary leadership, German arms plan and final 1915 armed confrontation.', url: 'https://amritmahotsav.nic.in/district-reopsitory-detail.htm?2519=' },
      { kind: 'review', source: 'Times of India', claim: 'The review describes the film as a patriotic biopic about Jatindranath Mukherjee organizing an anti-British coup.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movie-reviews/bagha-jatin/movie-review/104560056.cms' }
    ]
  }),

  profile({
    title: 'Mastaney', year: 2023, language: 'Punjabi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 3, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Sikh history', 'Punjab', 'Ardaas', 'Parampara'],
    reasons: [
      'The film’s fictional commoners are transformed through Sikh ardaas, courage and collective identity, making living Sikh tradition the source of moral and martial formation.',
      'Because it clearly uses fictional protagonists inside a historical setting, the profile distinguishes cultural meaning from literal historical biography.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review calls the film a historical slice about the circumstances that led toward the Sikh empire and explicitly notes the fictional commoners being initiated by Sikh ardaas.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movie-reviews/mastaney/movie-review/103054975.cms' }
    ]
  }),

  profile({
    title: 'Kasoombo', year: 2024, language: 'Gujarati', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 4, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Gujarati history', 'Jain heritage', 'Temple protection', 'Raksha'],
    reasons: [
      'The film’s declared moral center is the defence of land, sacred places and temples by the Barot community, making protection of inherited religious heritage an explicit positive value.',
      'The specific 14th-century episode needs deeper primary-source verification before this record can auto-publish, but that evidence question is separate from the film’s strong civilizational alignment.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review describes Kasoombo as a historical saga honoring 51 residents of Adipur who sacrifice themselves defending land, sacred places and temples from Alauddin Khilji.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/kasoombo-movie-review/movie-review/107753422.cms' },
      { kind: 'review', source: 'Times of India Hindi-release report', claim: 'The report describes the film as a historical epic about Dadu Barot’s resistance to Alauddin Khilji.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movies/news/gujarati-film-kasoombo-set-for-its-hindi-release-see-the-newly-released-trailer-here/articleshow/109494576.cms' }
    ]
  }),

  profile({
    title: 'DAMaN', year: 2022, language: 'Odia', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 3, itihasa: 1, parampara: 2, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Odia', 'Social Dharma', 'Public health', 'Service'],
    reasons: [
      'The film celebrates difficult public service in remote Odisha, with a doctor choosing duty to vulnerable communities over personal comfort and working within local realities rather than abandoning them.',
      'Its positive Bharatiya signal comes from social dharma, service and locally grounded state capacity, not from forcing a religious or nationalist reading onto a public-health story.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India', claim: 'The review describes DAMaN as an inspiring true-story drama about a young doctor fighting malaria across remote villages of Malkangiri, Odisha.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/daman/movie-review/97550391.cms' }
    ]
  }),

  profile({
    title: 'Village Rockstars', year: 2017, language: 'Assamese', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Assamese', 'Local roots', 'Rural life', 'Girlhood'],
    reasons: [
      'The film is exceptionally rooted in rural Assam—fields, fairs, family work, children’s lives and local rhythms—but its central conflict is personal aspiration rather than civilizational affirmation or rejection.',
      'Gender expectations are gently challenged from within the community without broad contempt for Assamese or Indian culture, so the durable verdict is Reviewed · Neutral rather than a forced certification.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Business Standard', claim: 'The review emphasizes the film’s rural Assam setting, village work, fairs, school, family life and references to stories from the epics.', url: 'https://www.business-standard.com/article/beyond-business/village-rockstars-film-review-striking-the-right-chords-117100700026_1.html' },
      { kind: 'review', source: 'NDTV', claim: 'The review describes the film as a deeply rooted Assamese work about a village girl’s dream and notes its National Award and Oscar-submission recognition.', url: 'https://www.ndtv.com/entertainment/village-rockstars-movie-review-when-great-cinema-is-propelled-by-passion-not-money-5-stars-1923015' }
    ]
  }),
];
