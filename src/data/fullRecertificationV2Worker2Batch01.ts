import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

/**
 * Worker 2 full-v2 re-certification shard.
 *
 * Scope: currently resolved legacy Hindi, Marathi, Punjabi, Bengali and Gujarati
 * records that were not already represented by an evidence-derived v2 profile at
 * the full-recertification-migration-v2 branch point.
 *
 * Evidence holds are research-complete records whose remaining high-materiality
 * source conflict requires human adjudication rather than an invented certainty.
 */
export const fullRecertificationV2Worker2Batch01: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Chhaava',
    year: 2025,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'biopic',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 4, localRoots: 4, raksha: 4, socialDharma: 2, sacredRegard: 4, contemptRisk: 1 },
    tags: ['Chhatrapati Sambhaji Maharaj', 'Maratha history', 'Swarajya', 'Itihasa', 'Narrative Integrity'],
    reasons: [
      'The film treats Chhatrapati Sambhaji Maharaj, defence of Swarajya, resistance to Mughal imperial power and martyrdom as affirmative Bharatiya historical memory; its cultural direction is not dependent on pretending the screenplay is documentary history.',
      'A source audit finds substantial dramatization and disputed attribution around historical figures and betrayals. Those are material Narrative Integrity caveats, but hostility toward Aurangzeb and named imperial antagonists is not by itself generalized contempt toward Muslims as a community.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — historian Vishwas Patil on Chhaava', claim: 'The historian identifies the film as drawing from Shivaji Sawant’s literary treatment while noting substantial cinematic liberties and points where screen history diverges from the documentary record.', url: 'https://www.indiatoday.in/opinion/story/reel-or-real-decoding-chhaava-from-a-historian-perspective-opinion-2689357-2025-03-05' },
      { kind: 'review', source: 'Times of India — historians on Chhaava controversy', claim: 'Records competing expert views on historical accuracy, creative liberty and the responsibility of popular historical cinema.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/the-chhaava-controversy-a-battle-between-creative-liberty-and-historical-accuracy-experts-weigh-in-exclusive/articleshow/118027889.cms' },
      { kind: 'review', source: 'The Quint WebQoof — Chhaava historical claims', claim: 'Examines disputed historical claims and attribution choices, including questions around betrayal narratives and what survives in the historical record.', url: 'https://www.thequint.com/news/webqoof/historical-accuracy-and-creative-liberties-in-bollywood-chhaava-manikarnika-padmaavat' }
    ],
    filmUnderstanding: 'A Hindi historical biographical drama about Chhatrapati Sambhaji Maharaj, his rule, conflict with Mughal power, capture and death, shaped through a popular literary and cinematic reconstruction rather than a scene-by-scene archival biography.',
    researchFocus: 'Sambhaji Maharaj Shivaji Sawant Chhava Aurangzeb Maratha Mughal history betrayal source fidelity',
    redTeamChallenge: 'The strongest challenge is that the film compresses complex Deccan politics into an intensely heroic Maratha-versus-Mughal moral binary and may attach disputed blame or dialogue to real historical figures.',
    fact: 'Sambhaji Maharaj, the Maratha-Mughal conflict, his capture and execution are historical; the film reconstructs private scenes, dialogue, chronology and contested attribution through literary and cinematic dramatization.',
    interpretation: 'The historical debt limits literal reliability but does not erase the film’s strong civilizational-memory, Swarajya and resistance orientation under the declared Bharatiya lens.',
    intent: 'No anti-Muslim or deceptive filmmaker intent is inferred; the verdict distinguishes hostility to specific imperial actors from generalized community contempt.',
    risks: [
      { id: 'source-adaptation', summary: 'The biographical film inherits literary shaping and adds substantial cinematic reconstruction rather than reproducing a single primary historical source.', evidenceIndexes: [0, 1], materiality: 'high' },
      { id: 'historical-claims', summary: 'Specific betrayals, exchanges, chronology and character emphases are disputed or dramatized and should not be presented as settled history.', evidenceIndexes: [0, 1, 2], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'The film assigns consequential motives, dialogue and blame to real historical figures whose exact actions are not uniformly established by the surviving record.', evidenceIndexes: [0, 2], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The historical core is real, but scene-level chronology, motives and attribution are substantially dramatized and in places disputed.', fact: 'Sambhaji Maharaj’s reign, conflict, capture and execution are historical.', interpretation: 'Cinematic reconstruction lowers scene-level historical certainty without changing the film’s affirmative Maratha/Swarajya cultural position.', intent: 'No deliberate falsification is inferred from dramatization alone.' }]
  }),

  makeHardenedBatchFilm({
    title: '12th Fail',
    year: 2023,
    language: 'Hindi',
    status: 'neutral',
    sourceBasis: 'biopic',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 3, itihasa: 1, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Social Dharma', 'Education', 'Public service', 'Perseverance', 'Reviewed neutral'],
    reasons: [
      'Honesty, perseverance, education, mutual aid and public-service aspiration are the film’s strongest positive values, but they do not amount to a sufficiently material Hindu-civilizational, sacred or Rashtra thesis for a directional certification.',
      'Its observations about caste, English access and class opportunity are social criticism directed at barriers and institutions, not generalized degradation of a caste, religion or Indian community.'
    ],
    evidence: [
      { kind: 'interview', source: 'Hindustan Times — Manoj Kumar Sharma on 12th Fail', claim: 'Sharma says the values he wanted the film to carry were hard work, honesty and avoiding shortcuts, and treats the story as representative of ordinary aspirants.', url: 'https://www.hindustantimes.com/entertainment/bollywood/manoj-kumar-sharma-reveals-why-he-didn-t-take-any-monetary-compensation-for-vikrant-massey-starrer-12th-fail-101708781747774.html' },
      { kind: 'interview', source: 'Times of India — Vidhu Vinod Chopra on personal incidents', claim: 'Chopra says some incidents used in the film, including the stolen-luggage episode, came from his own life rather than literally from Manoj Sharma’s biography.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/vidhu-vinod-chopra-reveals-12th-fail-is-inspired-from-his-personal-experiences/articleshow/105141962.cms' },
      { kind: 'review', source: 'Mint Lounge — 12th Fail review', claim: 'Provides a counter-reading around caste, English access, coaching and the aspirational public-service world while noting the film’s Ambedkar/Kalam references.', url: 'https://www.livemint.com/mint-lounge/art-and-culture/12th-fail-review-film-vikrant-massey-vidhu-vinod-chopra-111698301983242.html' }
    ],
    filmUnderstanding: 'A dramatized Hindi biographical drama based on IPS officer Manoj Kumar Sharma’s path from academic failure and poverty to the civil-services examination, with some composite or autobiographical incidents added by the filmmaker.',
    researchFocus: 'Manoj Kumar Sharma Anurag Pathak biography UPSC caste class English coaching composite incidents honesty',
    redTeamChallenge: 'The film’s emotionally uplifting treatment of UPSC aspiration could romanticize the examination/coaching ecosystem and blur where Manoj Sharma’s documented biography ends and cinematic or director-autobiographical material begins.',
    fact: 'Manoj Kumar Sharma’s civil-services journey is real, while the director has acknowledged importing some incidents from his own life into the film.',
    interpretation: 'The adaptation caveat does not create an anti-Bharatiya signal; it supports a disciplined Neutral verdict because the film’s dominant content is ethical perseverance and public service rather than civilizational ideology.',
    intent: 'No caste, religious or political hostility is inferred from the film’s critique of social and educational barriers.',
    risks: [
      { id: 'source-adaptation', summary: 'The biographical narrative includes acknowledged composite or filmmaker-autobiographical incidents rather than reproducing Manoj Sharma’s life scene for scene.', evidenceIndexes: [0, 1], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'adaptation-delta', status: 'verified', summary: 'Some dramatic incidents are acknowledged additions from Vidhu Vinod Chopra’s own experience rather than literal Manoj Sharma biography.', fact: 'The real civil-service journey is documented and Chopra has identified personal incidents inserted into the screenplay.', interpretation: 'The film is a biographical adaptation, not a documentary.', intent: 'The additions are publicly acknowledged, so deceptive source concealment is not inferred.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Shershaah',
    year: 2021,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'biopic',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Captain Vikram Batra', 'Kargil', 'Rashtra', 'Raksha', 'Military service'],
    reasons: [
      'Captain Vikram Batra’s Army service, courage, sacrifice and defence of India during the Kargil conflict are the film’s moral centre, giving Rashtra and Raksha decisive weight.',
      'The film uses cinematic connective material around a real officer and a real war, but its hostility is directed at wartime adversaries rather than Muslims or Pakistanis as inherently degraded communities.'
    ],
    evidence: [
      { kind: 'interview', source: 'New Indian Express/PTI — Vishnuvardhan on Shershaah', claim: 'The director describes family and Army cooperation, research around factual detail and limited cinematic liberties in telling Vikram Batra’s story.', url: 'https://www.newindianexpress.com/entertainment/hindi/2021/Jul/30/important-to-get-facts-and-details-right-director-vishnuvardhan-on-shershaah-2337782.html' },
      { kind: 'interview', source: 'Indian Express — Shershaah writer on research', claim: 'Writer Sandeep Srivastava describes research with people close to Batra and Dimple Cheema and distinguishes documented milestones from imagined connective scenes.', url: 'https://indianexpress.com/article/entertainment/bollywood/shershaah-writer-says-dimple-cheema-confirmed-vikram-batra-cut-his-thumb-used-blood-as-sindoor-sandeep-srivastava-7477102/' },
      { kind: 'interview', source: 'Times of India — Vikram Batra’s parents', claim: 'Batra’s parents discuss their son’s Army life and respond positively to the film’s portrayal while supplying family context.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/captain-vikram-batras-parents-interview-on-son-dimple-cheema-siddharth-malhotra-kiara-advani-and-shershaah-our-son-wanted-to-do-something-in-life-exclusive/amp_articleshow/85514553.cms' }
    ],
    filmUnderstanding: 'A Hindi biographical war drama about Captain Vikram Batra, his relationship with Dimple Cheema and his service and death during the 1999 Kargil War.',
    researchFocus: 'Vikram Batra Kargil Dimple Cheema family Army biography cinematic liberties Sikh Nishan Sahib sacrifice',
    redTeamChallenge: 'A patriotic biopic can smooth contradictory biography and operational complexity into a clean heroic arc, especially when private romance and battlefield dialogue must be reconstructed.',
    fact: 'Vikram Batra’s service, Kargil actions and death are historical; the production record acknowledges cinematic connective material around documented milestones.',
    interpretation: 'The reconstruction caveat remains visible, while the finished film’s respect for Indian military duty and sacrifice strongly supports certification.',
    intent: 'No generalized anti-Muslim or anti-Pakistani intent is inferred from the portrayal of specific wartime adversaries.',
    risks: [
      { id: 'source-adaptation', summary: 'Private and battlefield connective scenes are reconstructed around documented biographical and Kargil milestones.', evidenceIndexes: [0, 1, 2], materiality: 'medium' },
      { id: 'real-person-attribution', summary: 'Dialogue and private relationship scenes attributed to real people include cinematic reconstruction even where major milestones were researched with family and associates.', evidenceIndexes: [1, 2], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Sam Bahadur',
    year: 2023,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'biopic',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Sam Manekshaw', 'Indian Army', 'Rashtra', 'Itihasa', '1971 war'],
    reasons: [
      'The film gives sustained respect to Sam Manekshaw’s Indian Army career, military professionalism, national service and the 1971 war while also retaining his humane treatment of Pakistani prisoners as part of the officer’s code.',
      'Its four-decade biography is necessarily compressed and strongly heroic. That hagiographic selection is a Narrative Integrity limitation, not evidence against its Rashtra/Raksha orientation.'
    ],
    evidence: [
      { kind: 'interview', source: 'Hindustan Times — Meghna Gulzar on Sam Bahadur', claim: 'Gulzar describes the aim of telling Manekshaw’s life comprehensively and the production’s emphasis on authenticity and source research.', url: 'https://www.hindustantimes.com/entertainment/bollywood/meghna-gulzar-interview-sam-bahadur-101706105390846.html' },
      { kind: 'interview', source: 'Yahoo/Variety — Meghna Gulzar on detail and research', claim: 'Records family and Army vetting, limited fictionalized domestic dialogue and the director’s refusal to turn Manekshaw’s patriotism into indiscriminate jingoism.', url: 'https://www.yahoo.com/entertainment/meghna-gulzar-obsessed-detail-she-114318520.html' },
      { kind: 'review', source: 'Indian Express — Sam Bahadur review', claim: 'Provides the strongest counter-reading, criticizing the episodic, reverential treatment and compression of political and military complexity.', url: 'https://indianexpress.com/article/entertainment/movie-review/sam-bahadur-movie-review-vicky-kaushal-film-suffers-from-being-excessively-declamatory-9049060/' }
    ],
    filmUnderstanding: 'A Hindi biographical film spanning Field Marshal Sam Manekshaw’s long military career from the pre-Independence Army through major post-Independence conflicts and the 1971 war.',
    researchFocus: 'Sam Manekshaw biography 1971 war Army family Kashmir Mizoram Pakistani POW historical accuracy',
    redTeamChallenge: 'The film’s reverential episodic structure may turn a complex military career into hagiography, compressing political context and difficult theatres while attributing polished dialogue to a real officer.',
    fact: 'Manekshaw’s career, senior commands and 1971 role are historical; a feature film compresses decades and reconstructs private exchanges.',
    interpretation: 'Compression limits biographical completeness but the film consistently treats Indian service, professionalism and restraint as virtues, supporting certification.',
    intent: 'No anti-community motive is inferred; the creator record explicitly resists indiscriminate jingoism.',
    risks: [
      { id: 'source-adaptation', summary: 'Roughly four decades of military life are compressed into selected episodes with reconstructed domestic and professional dialogue.', evidenceIndexes: [0, 1, 2], materiality: 'high' },
      { id: 'historical-claims', summary: 'Political and military theatres are selectively represented, so the film should not substitute for a complete history of Manekshaw’s career or India’s wars.', evidenceIndexes: [0, 2], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The biopic uses researched milestones but compresses and heroically selects a four-decade career.', fact: 'Major career events are historical and the production consulted family and military sources.', interpretation: 'Selection and reconstruction reduce completeness rather than reverse the film’s national-service meaning.', intent: 'No claim that every exchange is verbatim history is inferred.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Brahmāstra: Part One – Shiva',
    year: 2022,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 3, parampara: 4, localRoots: 4, raksha: 2, socialDharma: 2, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Astra', 'Shiva', 'Guru-shishya', 'Sacred regard', 'Civilizational continuity'],
    reasons: [
      'The fantasy deliberately builds a contemporary Indian superhero cosmology from astras, sages, guru-shishya lineage and Shiva-linked vocabulary, treating Indic sacred inheritance as generative rather than embarrassing or contemptible.',
      'Its invented Astraverse taxonomy is creative fiction, not a claim that every named weapon or rule is scripturally canonical; that distinction protects sacred/source integrity without weakening the affirmative civilizational signal.'
    ],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Ayan Mukerji on Brahmāstra', claim: 'Mukerji describes the film as bringing modern India together with ancient Indian astras, culture and spirituality.', url: 'https://indianexpress.com/article/entertainment/bollywood/ayan-mukerji-on-amitabh-bachchan-brahmastra-ranbir-kapoor-alia-bhatt-difficult-joruney-ancient-india-astras-7957336/' },
      { kind: 'interview', source: 'Indian Express — Ayan Mukerji responds to shoes controversy', claim: 'Mukerji says the disputed location was a Durga Puja pandal rather than a temple and explicitly frames the project as celebrating Indian culture and his own puja tradition.', url: 'https://indianexpress.com/article/entertainment/bollywood/ranbir-kapoor-wearing-shoes-in-temple-brahmastra-trailer-ayan-mukerji-issues-clarification-7978758/' },
      { kind: 'interview', source: 'The Quint — Ayan Mukerji explains the Astraverse', claim: 'The creator explains the invented fantasy universe and its relationship to Indian mythic and elemental concepts.', url: 'https://www.thequint.com/entertainment/celebrities/ayan-mukerji-deep-dives-into-the-vision-of-ranbir-alia-starrer-brahmastra' }
    ],
    filmUnderstanding: 'An original Hindi fantasy in which a contemporary hero discovers a hidden Brahmansh order protecting supernatural astras, with Shiva, fire, gurus and Indic sacred vocabulary supplying the world-building grammar.',
    researchFocus: 'Ayan Mukerji Astraverse ancient Indian astras Shiva Durga Puja temple shoes sacred representation invented mythology',
    redTeamChallenge: 'A commercial fantasy may appropriate sacred terms loosely, invent non-canonical astras or reduce inherited spiritual concepts to superhero mechanics, and the trailer’s apparent temple-shoes shot created a plausible disrespect concern before clarification.',
    fact: 'The film is original fantasy inspired by Indic concepts; the creator publicly clarified that the disputed shoes scene occurs at a Durga Puja pandal and not inside a temple.',
    interpretation: 'Creative invention should not be misrepresented as scripture, but the film’s actual sacred valence is affirmative and its modern world-building consciously celebrates Indian cultural material.',
    intent: 'The creator explicitly states a cultural-celebratory purpose; no desecratory intent is inferred from the clarified trailer image.'
  }),

  makeHardenedBatchFilm({
    title: 'Laapataa Ladies',
    year: 2024,
    language: 'Hindi',
    status: 'neutral',
    sourceBasis: 'original-fiction',
    confidence: 'medium',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Social Dharma', 'Rural India', 'Women', 'Family', 'Evidence hold'],
    reasons: [
      'The film criticizes coercive patriarchy and compulsory veiling through a rural Indian story while retaining marriage, family affection and local community as meaningful institutions; criticism of a harmful practice is not itself contempt for Indian or Hindu tradition.',
      'Its cultural verdict can be Neutral with strong Social Dharma, but a separate originality/source conflict remains unresolved: similarities to Ghunghat Ke Pat Khol and Burqa City have been alleged while the credited writer denies derivation. That unresolved source question requires human review rather than a plagiarism conclusion.'
    ],
    evidence: [
      { kind: 'interview', source: 'The Quint — Kiran Rao on Laapataa Ladies', claim: 'Rao says the film was not designed to demonize men or demand wholesale rupture from marriage/family and distinguishes coercive ghoonghat from a woman’s own choice.', url: 'https://www.thequint.com/opinion/interview-with-kiran-rao-on-laapataa-ladies-movie-aamir-khan' },
      { kind: 'interview', source: 'New Indian Express — Kiran Rao on gender and ghoonghat', claim: 'Rao discusses the gentle male characters and the veil as a narrative device in a critique of patriarchy rather than a blanket condemnation of rural families.', url: 'https://www.newindianexpress.com/amp/story/entertainment/entertainment-news/2024/Mar/12/laapataa-ladies-movie-a-hero-can-be-macho-without-wielding-guns' },
      { kind: 'review', source: 'Cinema Express — Mahadevan allegation and Goswami denial', claim: 'Records Ananth Mahadevan’s similarity allegation concerning Ghunghat Ke Pat Khol and writer Biplab Goswami’s statement that the script and characters were original.', url: 'https://www.cinemaexpress.com/hindi/news/2024/May/26/director-ananth-mahadevan-claims-laapataa-ladies-similar-to-his-film-ghunghat-ke-phat-kol-writer-biplab-goswami-states-the-kiran-rao-film-is-100-per-cent-original' },
      { kind: 'review', source: 'Business Standard — Burqa City similarity allegation', claim: 'Records the later online comparison with the 2019 short Burqa City without establishing copying as fact.', url: 'https://www.business-standard.com/entertainment/kiran-rao-s-laapataa-ladies-faces-plagiarism-with-arabic-film-burqa-city-125040200724_1.html' }
    ],
    filmUnderstanding: 'A rural Hindi social comedy about two newly married women accidentally exchanged during train travel, using identity, veiling, marriage, work and local relationships to examine women’s agency without making a historical claim.',
    researchFocus: 'Kiran Rao Biplab Goswami Ghunghat Ke Pat Khol Burqa City originality bride swap ghoonghat patriarchy marriage family',
    redTeamChallenge: 'The social-reform reading is reasonably clear, but the unresolved similarity allegations raise a high-materiality source-integrity question that cannot be resolved by choosing either the accuser’s or credited writer’s account on assertion alone.',
    fact: 'Mahadevan has publicly alleged similarities to his 1999 film and later online comparisons invoked Burqa City; Biplab Goswami denies derivation and says his story, script and characters are original.',
    interpretation: 'Those competing claims are enough for a source-integrity hold but not enough to label copying as fact or to alter the film’s otherwise Neutral cultural verdict.',
    intent: 'No plagiarism, deceptive intent or anti-traditional intent is inferred without stronger source-comparison evidence.',
    risks: [
      { id: 'source-adaptation', status: 'ambiguous', summary: 'The credited original screenplay faces unresolved similarity allegations involving earlier films; available reporting contains both allegation and denial rather than a dispositive source determination.', evidenceIndexes: [2, 3], materiality: 'high' },
      { id: 'creator-source-conflict', status: 'ambiguous', summary: 'Ananth Mahadevan’s public source-similarity claim and Biplab Goswami’s explicit originality denial materially conflict and remain unresolved.', evidenceIndexes: [2], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'disputed', summary: 'Originality/source similarity remains materially disputed and is held for human adjudication.', fact: 'Similarity allegations and an explicit writer denial are both on the public record.', interpretation: 'The record is insufficient to resolve copying or independent creation as fact.', intent: 'Intent is unknown and must not be inferred.' }],
    humanReview: true
  }),

  makeHardenedBatchFilm({
    title: 'Tanhaji: The Unsung Warrior',
    year: 2020,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'history',
    confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 4, raksha: 5, socialDharma: 2, sacredRegard: 4, contemptRisk: 1 },
    tags: ['Tanaji Malusare', 'Chhatrapati Shivaji Maharaj', 'Swarajya', 'Maratha history', 'Raksha'],
    reasons: [
      'The film explicitly celebrates Tanaji Malusare’s service to Chhatrapati Shivaji Maharaj, defence of Swarajya, sacrifice and recovery of Kondhana as affirmative Maratha and Bharatiya historical memory.',
      'Its stylized saffron-versus-enemy visual grammar and simplified politics warrant historical and representational caveats, but criticism of Mughal rule or a named antagonist does not establish generalized Muslim-community contempt.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Tanhaji review', claim: 'The review identifies the Maratha battle, Shivaji, Tanaji and Udaybhan while supplying an adversarial critique of the film’s simplified and politically coloured historical framing.', url: 'https://indianexpress.com/article/entertainment/movie-review/tanhaji-movie-review-rating-kajol-ajay-saif-6209397/lite/' },
      { kind: 'interview', source: 'Times of India — Om Raut on historical responsibility', claim: 'Raut describes research, the need to preserve the sanctity of historical characters and the use of cinematic liberties where records do not supply dramatic detail.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/om-raut-while-making-a-historical-you-have-to-maintain-the-sanctity-of-the-characters/articleshow/73109323.cms' },
      { kind: 'interview', source: 'The Telegraph — Om Raut on Tanhaji', claim: 'The director addresses research, historical responsibility, political/saffronization criticism and changes made during production.', url: 'https://www.telegraphindia.com/entertainment/bollywood/debutant-director-om-raut-on-what-went-into-the-making-of-his-blockbuster-tanhaji-the-unsung-warrior/cid/1739972' }
    ],
    filmUnderstanding: 'A stylized Hindi historical action drama about Tanaji Malusare and the 1670 Battle of Kondhana/Sinhagad, framed through service to Shivaji Maharaj and Swarajya.',
    researchFocus: 'Tanaji Malusare Kondhana Sinhagad Shivaji Maharaj Udaybhan Rathod Maratha Mughal historical accuracy saffronization',
    redTeamChallenge: 'The film’s highly stylized hero/villain contrast and present-day visual politics can flatten a complex seventeenth-century conflict into a modern communal binary while also inventing private scenes.',
    fact: 'Tanaji Malusare, Shivaji Maharaj and the Kondhana campaign are historical; character design, dialogue, private scenes and portions of the action are cinematic reconstruction.',
    interpretation: 'The reconstruction and political simplification remain visible Narrative Integrity caveats, while defence of Swarajya and sacrifice remain strong Bharatiya signals.',
    intent: 'No generalized anti-Muslim intent is inferred from hostility to specific imperial/military antagonists.',
    risks: [
      { id: 'historical-claims', summary: 'The film stylizes and compresses a documented historical battle and reconstructs dialogue, motives and action beyond the surviving record.', evidenceIndexes: [0, 1, 2], materiality: 'high' },
      { id: 'source-adaptation', summary: 'Popular historical material is converted into a mass-action narrative with acknowledged cinematic liberties.', evidenceIndexes: [1, 2], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The historical battle is real but the film is a stylized reconstruction, not a documentary account.', fact: 'Tanaji’s Kondhana campaign belongs to the historical record.', interpretation: 'Mass-cinema additions reduce scene-level fidelity.', intent: 'The director openly discusses cinematic liberty, so invented dramatic detail is not treated as concealed fact.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Kesari',
    year: 2019,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 4, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Saragarhi', 'Sikh history', 'Rashtra', 'Raksha', 'Sacrifice'],
    reasons: [
      'The Battle of Saragarhi is presented through Sikh martial courage, collective duty, religious identity and refusal to abandon the post, making sacrifice and inherited martial tradition central rather than decorative.',
      'The attackers are historical battlefield antagonists; their religious or ethnic identity does not by itself convert a one-sided battle film into generalized contempt toward Muslims or Pashtuns.'
    ],
    evidence: [
      { kind: 'review', source: 'Hindustan Times — the true Battle of Saragarhi', claim: 'Provides historical context for the 1897 battle, the 21 Sikh soldiers and the military post at the centre of the film.', url: 'https://www.hindustantimes.com/bollywood/ahead-of-akshay-kumar-s-kesari-here-s-the-true-story-of-battle-of-saragarhi/story-s8shvaI4Uhz3nawC6FBbLP.html' },
      { kind: 'interview', source: 'Indian Express — Anurag Singh on Kesari research', claim: 'The director discusses research into British records and the challenge of building individual dramatic stories around a sparsely documented battle.', url: 'https://indianexpress.com/article/entertainment/bollywood/kesari-director-anurag-singh-akshay-kumar-5907792/lite/' },
      { kind: 'review', source: 'Hindustan Times — Kesari review', claim: 'Offers an adversarial assessment of the film’s action, nationalism and dramatic construction around the battle.', url: 'https://www.hindustantimes.com/bollywood/kesari-movie-review-this-battle-of-saragarhi-film-pins-all-its-hopes-on-akshay-kumar/story-aj6KekoTQZoPhXgoCkHXTI_amp.html' }
    ],
    filmUnderstanding: 'A Hindi historical war film dramatizing the 1897 Battle of Saragarhi, in which 21 Sikh soldiers defended a British Indian Army communications post against a much larger attacking force.',
    researchFocus: 'Battle of Saragarhi 21 Sikh soldiers British records Ishar Singh Pashtun attackers Sikh ardaas history accuracy',
    redTeamChallenge: 'Sparse individual-level records create room for the screenplay to invent personal arcs and battlefield details, while patriotic spectacle can simplify the colonial context and the attacking side.',
    fact: 'The Battle of Saragarhi and the 21 defenders are historical; much individual dialogue, interpersonal conflict and tactical detail is dramatized from a limited record.',
    interpretation: 'The colonial-service context and dramatization remain caveats, but the film’s Sikh martial memory, courage and duty strongly support certification under the declared lens.',
    intent: 'No community-wide hostility is inferred from portraying the historical attackers as battlefield enemies.',
    risks: [
      { id: 'historical-claims', summary: 'A well-documented battle outcome is surrounded by reconstructed individual stories, dialogue and tactical detail because the surviving record is limited.', evidenceIndexes: [0, 1, 2], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'Private motives and interactions are assigned to named historical soldiers beyond what sparse records can independently verify.', evidenceIndexes: [0, 1], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Manikarnika: The Queen of Jhansi',
    year: 2019,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'biopic',
    confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Rani Lakshmibai', '1857', 'Anti-colonial', 'Rashtra', 'Itihasa'],
    reasons: [
      'The film unequivocally celebrates Rani Lakshmibai’s resistance to British rule, defence of Jhansi, courage and sacrifice, making anti-colonial Rashtra and historical memory its dominant cultural signal.',
      'It also turns a contested and partly legendary biography into overt heroic cinema. Those creative liberties must travel with the verdict, but criticism of colonial officials is not generalized contempt toward British people as a community.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Manikarnika review', claim: 'Describes the film as a nationalist and heroic reconstruction of Lakshmibai while explicitly noting creative liberties and hagiographic treatment.', url: 'https://indianexpress.com/article/entertainment/movie-review/manikarnika-movie-review-rating-5554689/lite/' },
      { kind: 'review', source: 'India Today — Manikarnika review', claim: 'Provides a strong counter-reading that praises the central performance while warning viewers to treat portions of the history with caution.', url: 'https://www.indiatoday.in/movies/reviews/story/manikarnika-movie-review-kangana-ranaut-excellent-as-queen-of-jhansi-film-not-so-much-1439057-2019-01-25' },
      { kind: 'review', source: 'Indian Express — historical controversy around Manikarnika', claim: 'Examines contested claims and legend around Lakshmibai’s life that became politically salient before release.', url: 'https://indianexpress.com/article/research/manikarnika-controversy-rani-laxmibai-jhansi-brahmin-protests-5054740/' }
    ],
    filmUnderstanding: 'A Hindi biographical historical epic about Rani Lakshmibai of Jhansi, the 1857 uprising and resistance to British annexation, presented through a strongly heroic popular-cinema frame.',
    researchFocus: 'Rani Lakshmibai Jhansi 1857 biography legend historical accuracy British annexation creative liberty',
    redTeamChallenge: 'The film’s hagiographic structure can collapse disputed legend, nationalist memory and documented biography into one seamless “history”, exaggerating individual actions or invented confrontations.',
    fact: 'Lakshmibai ruled Jhansi and fought British forces during the 1857 uprising; many private scenes, speeches and action episodes are reconstructed or contested.',
    interpretation: 'Historical uncertainty requires visible caveats but does not reverse the film’s clear anti-colonial, India-centred memory and protection-of-land orientation.',
    intent: 'No deceptive or anti-community motive is inferred from heroic historical dramatization alone.',
    risks: [
      { id: 'historical-claims', summary: 'The film blends documented events, nationalist memory and legendary material and should not be treated as a scene-by-scene biography.', evidenceIndexes: [0, 1, 2], materiality: 'high' },
      { id: 'source-adaptation', summary: 'Heroic compression and invented connective scenes materially shape the historical biography.', evidenceIndexes: [0, 1], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The film’s anti-colonial historical core is real while its biographical detail is substantially dramatized and sometimes legendary.', fact: 'Lakshmibai and the 1857 conflict are historical.', interpretation: 'The film is heroic popular history, not an archival biography.', intent: 'No hidden motive is inferred from acknowledged cinematic liberty.' }]
  }),

  makeHardenedBatchFilm({
    title: 'The Vaccine War',
    year: 2023,
    language: 'Hindi',
    status: 'certified',
    sourceBasis: 'true-story',
    confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 5, itihasa: 2, parampara: 1, localRoots: 3, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Indian science', 'Public health', 'Rashtra', 'Raksha', 'Narrative Integrity'],
    reasons: [
      'The film’s strongest positive signal is confidence in Indian scientific capability and public-service institutions during the COVID-19 emergency, with scientists and an indigenous vaccine effort framed as national capacity worth defending.',
      'Its adversarial construction of media and institutional disagreement is polemical and can be reductive, but criticism of a profession or institution is not community contempt and does not by itself erase the India-science/Raksha alignment.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — The Vaccine War review', claim: 'Identifies the real Indian vaccine-development subject while criticizing the film’s treatment of disagreement, media and dramatic execution.', url: 'https://www.indiatoday.in/movies/reviews/story/the-vaccine-war-review-vivek-agnihotri-film-is-relevant-but-not-without-flaws-2441496-2023-09-28' },
      { kind: 'review', source: 'Indian Express — The Vaccine War review', claim: 'Provides an adversarial reading of the nationalist framing, institutional simplification and relative attribution of the vaccine effort.', url: 'https://indianexpress.com/article/entertainment/movie-review/the-vaccine-war-movie-review-vivek-agnihotri-nana-patekar-covid-warriors-8959574/lite/' },
      { kind: 'interview', source: 'OTTplay — Vivek Agnihotri on source research', claim: 'Agnihotri identifies Balram Bhargava’s book and interviews with participants as source material while acknowledging cinematic construction.', url: 'https://www.ottplay.com/news/the-vaccine-war-more-than-threats-they-will-try-to-lynch-me-on-social-media-and-will-try-to-pull-me-down-says-vivek-agnihotri-exclusive/c169f6e20f23' },
      { kind: 'review', source: 'Indian Journal of Medical Ethics — The Vaccine War critique', claim: 'Offers a substantive counter-reading of the film’s nationalism, science ethics and simplification of the vaccine-development ecosystem.', url: 'https://ijme.in/articles/doing-bioethics-in-an-era-of-nationalism-the-vaccine-war/?galley=html' }
    ],
    filmUnderstanding: 'A Hindi true-event drama inspired by Balram Bhargava’s account and interviews around India’s COVID-19 vaccine development, converting institutional scientific work into a feature-film conflict about researchers, state capacity and critics.',
    researchFocus: 'Balram Bhargava Going Viral Covaxin ICMR NIV Bharat Biotech scientists media portrayal vaccine development attribution',
    redTeamChallenge: 'The film can over-concentrate credit, flatten scientific uncertainty and turn media or professional disagreement into a conspiratorial antagonist structure, making its institutional history less reliable than its patriotic framing suggests.',
    fact: 'India developed Covaxin through a multi-institutional effort involving public bodies and Bharat Biotech; the film adapts that real process through selected characters, conflict and dramatic compression.',
    interpretation: 'The attribution and polemical framing require Narrative Integrity caveats, while the film’s celebration of Indian scientific capacity, public health work and crisis response remains a strong Bharatiya/Rashtra signal.',
    intent: 'No malicious motive by critics, journalists or filmmakers is inferred beyond what cited sources establish; the cultural verdict is separated from the accuracy of every dramatic confrontation.',
    risks: [
      { id: 'source-adaptation', summary: 'A complex multi-institutional scientific process is adapted from a participant account and interviews into simplified dramatic conflict.', evidenceIndexes: [0, 1, 2, 3], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'The screenplay’s distribution of credit, resistance and conflict should not be treated as a complete factual allocation among all real institutions and people involved.', evidenceIndexes: [1, 3], materiality: 'high' },
      { id: 'creator-source-conflict', summary: 'The filmmaker’s heroic institutional framing is materially challenged by reviews and bioethics criticism that describe omissions and simplification.', evidenceIndexes: [1, 2, 3], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The vaccine-development core is real but institutional roles, media conflict and attribution are selectively dramatized.', fact: 'Covaxin was produced through a real multi-institutional scientific effort.', interpretation: 'The feature-film narrative is not a complete institutional history.', intent: 'Disagreement with the film’s politics is not used to infer deceptive intent.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Subhedar',
    year: 2023,
    language: 'Marathi',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Tanaji Malusare', 'Swarajya', 'Maratha history', 'Marathi roots', 'Itihasa'],
    reasons: [
      'The film links Tanaji Malusare’s service and sacrifice to Chhatrapati Shivaji Maharaj’s wider Swarajya project, treating governance, public duty and local historical memory as affirmative Maharashtrian/Bharatiya inheritance.',
      'Historical cinema necessarily fills gaps in private life and dialogue. The director’s own research threshold and exclusion of the popular monitor-lizard episode show an effort to distinguish documentable tradition from unsupported spectacle, without making the film documentary history.'
    ],
    evidence: [
      { kind: 'interview', source: 'Lokmat — Digpal Lanjekar on Subhedar research', claim: 'Lanjekar says historical films should not freely invent events and explains his research approach and use of dramatic material around documented history.', url: 'https://www.lokmat.com/filmy/marathi-cinema/subhedar-historical-tanhaji-malusare-sinhgad-movie-exclusive-interview-with-digpal-lanjekar-chinmay-mandalekar-a-a971/' },
      { kind: 'review', source: 'Times of India — Subhedar review', claim: 'Describes the film’s focus on Swarajya, governance, Tanaji Malusare’s service and the Sinhagad campaign.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/subhedar/etmoviereview/103062959.cms' },
      { kind: 'interview', source: 'Lokmat — why Subhedar omits the ghorpad episode', claim: 'Records the filmmaker’s decision not to stage the monitor-lizard legend because he did not find sufficient documentary support for it.', url: 'https://www.lokmat.com/filmy/marathi-cinema/digpal-lanjekar-talk-about-ghorpade-bandhu-in-sinhgad-fort-battle-tanhaji-malusare-said-no-such-scene-in-subhedar-movie-a-a971/' }
    ],
    filmUnderstanding: 'A Marathi historical drama about Tanaji Malusare’s service under Chhatrapati Shivaji Maharaj, the social and administrative world of Swarajya and the campaign remembered through Sinhagad.',
    researchFocus: 'Tanaji Malusare Shivaji Maharaj Sinhagad Kondhana Swarajya Digpal Lanjekar history ghorpad source',
    redTeamChallenge: 'A reverential franchise treatment of Maratha history can selectively idealize rulers and warriors, reconstruct family scenes and understate political complexity even when individual legends are screened out.',
    fact: 'Tanaji Malusare, Shivaji Maharaj and the Kondhana/Sinhagad campaign are historical; domestic scenes, dialogue and some connective events are feature-film reconstruction.',
    interpretation: 'The reconstruction caveat is separate from the film’s strong Parampara, Itihasa, Local Roots and Swarajya orientation.',
    intent: 'No generalized contempt toward Muslims or another community is inferred from a story focused on specific military and political opponents.',
    risks: [
      { id: 'historical-claims', summary: 'Historical events are framed through reconstructed family and governance scenes and should not be treated as a complete primary-source account.', evidenceIndexes: [0, 1, 2], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Farzand',
    year: 2018,
    language: 'Marathi',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Kondaji Farzand', 'Panhala', 'Swarajya', 'Maratha history', 'Marathi roots'],
    reasons: [
      'The film deliberately restores Kondaji Farzand’s service to Chhatrapati Shivaji Maharaj and the capture of Panhala to popular Marathi historical memory, making courage, collective protection and Swarajya its central values.',
      'Popular retellings attach precise force-size and combat details to the episode; those quantitative and scene-level claims should remain caveated rather than being mistaken for the basis of the Bharatiya verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Farzand review', claim: 'Describes the Panhala mission, Kondaji Farzand’s small force and the film’s strongly heroic reconstruction of the historical episode.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/farzand/movie-review/64395611.cms' },
      { kind: 'review', source: 'Loksatta — Farzand review', claim: 'Frames Kondaji Farzand as one of Shivaji Maharaj’s exceptional warriors and discusses the film’s historical-popular treatment.', url: 'https://www.loksatta.com/review/movie-review/marathi-movie-farzand-movie-review-chinmay-mandlekar-prasad-oak-digpal-lanjekar-mrunmayee-deshpande-1689126/' },
      { kind: 'interview', source: 'MahaMTB — Digpal Lanjekar on historical-cultural cinema', claim: 'Provides the filmmaker’s broader account of research, Marathi historical memory and the cultural purpose of his Shivraj Ashtak films.', url: 'https://www.mahamtb.com/Encyc/2023/2/18/Digpal-Lanjekar-Interview.html' }
    ],
    filmUnderstanding: 'A Marathi historical action drama about Kondaji Farzand’s mission under Chhatrapati Shivaji Maharaj to recapture Panhala, built as a heroic popular-memory film.',
    researchFocus: 'Kondaji Farzand Panhala Shivaji Maharaj 60 warriors force size Swarajya historical accuracy',
    redTeamChallenge: 'Heroic popular history can turn uncertain troop numbers, individual feats and villain characterization into apparently settled fact while simplifying the wider military and political context.',
    fact: 'Kondaji Farzand and the Maratha struggle around Panhala belong to historical memory; exact troop numbers, dialogue and combat choreography in a feature film are not automatically established primary history.',
    interpretation: 'Quantitative and dramatic uncertainty limits literal fidelity but not the film’s strong rooted Maratha/Swarajya cultural position.',
    intent: 'No hostile community motive is inferred from depicting specific political and military adversaries.',
    risks: [
      { id: 'historical-claims', summary: 'The heroic reconstruction supplies dialogue and action details beyond what the film’s review-level evidence independently establishes.', evidenceIndexes: [0, 1, 2], materiality: 'high' },
      { id: 'quantitative-claims', summary: 'Precise force-size claims repeated in popular retellings should be treated cautiously rather than as the foundation of the verdict.', evidenceIndexes: [0, 1], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Fatteshikast',
    year: 2019,
    language: 'Marathi',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Chhatrapati Shivaji Maharaj', 'Shaista Khan', 'Swarajya', 'Maratha history', 'Raksha'],
    reasons: [
      'The film treats Chhatrapati Shivaji Maharaj’s resistance to Shaista Khan and defence of Swarajya as strategic, locally rooted historical memory, with courage and protection of self-rule as its dominant cultural signals.',
      'Calling the Lal Mahal raid a modern-style “surgical strike” is best understood as present-day analogy and popular framing rather than seventeenth-century terminology; that source-language caveat does not change the film’s civilizational alignment.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Fatteshikast review', claim: 'Describes the Lal Mahal/Shaista Khan operation and the film’s emphasis on Shivaji Maharaj’s strategy and Swarajya.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/fatteshikast/movie-review/72074311.cms' },
      { kind: 'review', source: 'Mumbai Mirror — Fatteshikast review', claim: 'Offers a counter-reading of the repetitive heroic treatment and mass-cinema reconstruction of the historical episode.', url: 'https://www.mumbaimirror.com/entertainment/movie-review/fatteshikast-movie-review-repeating-history/amp_movie_review/72080019.cms' },
      { kind: 'interview', source: 'MahaMTB — Digpal Lanjekar interview', claim: 'Supplies the filmmaker’s stated historical-cultural framing and research orientation for the Shivraj Ashtak cycle.', url: 'https://www.mahamtb.com/Encyc/2023/2/18/Digpal-Lanjekar-Interview.html' }
    ],
    filmUnderstanding: 'A Marathi historical action film about Shivaji Maharaj’s resistance to Shaista Khan, culminating in the Lal Mahal raid and presented as a strategic defence of Swarajya.',
    researchFocus: 'Shivaji Maharaj Shaista Khan Lal Mahal raid Pune Swarajya surgical strike analogy historical accuracy',
    redTeamChallenge: 'The franchise’s heroic structure can over-modernize a seventeenth-century raid through present-day military vocabulary and flatten Mughal-Maratha politics into simple moral roles.',
    fact: 'The Shaista Khan episode and Lal Mahal attack are historical; modern labels, private dialogue and many tactical beats are retrospective or cinematic reconstruction.',
    interpretation: 'Presentist language and simplification are integrity caveats, while the film’s Marathi historical-memory and self-rule orientation remain strongly affirmative.',
    intent: 'No generalized anti-Muslim intent is inferred from opposition to named Mughal political and military actors.',
    risks: [
      { id: 'historical-claims', summary: 'The film reconstructs tactical detail and uses present-day framing around a historical raid that should not be confused with period terminology or exhaustive history.', evidenceIndexes: [0, 1, 2], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The Lal Mahal raid is historical, while “surgical strike” is a modern analogy and scene-level detail is dramatized.', fact: 'Shivaji Maharaj attacked Shaista Khan’s position in Pune in the historical record.', interpretation: 'Modern strategic vocabulary is interpretive framing, not original period language.', intent: 'No deceptive intent is inferred from an overt popular-cinema analogy.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Bagha Jatin',
    year: 2023,
    language: 'Bengali',
    status: 'certified',
    sourceBasis: 'biopic',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Jatindranath Mukherjee', 'Bengal', 'Anti-colonial', 'Rashtra', 'Biopic'],
    reasons: [
      'The film restores Jatindranath “Bagha Jatin” Mukherjee’s anti-colonial revolutionary work to Bengali and Indian public memory, treating armed resistance to British imperial rule as sacrifice for national freedom.',
      'The revolutionary network, German-arms plan and final confrontation have historical grounding, while private scenes and the famous tiger episode carry the ordinary compression and legend risk of heroic biography.'
    ],
    evidence: [
      { kind: 'official', source: 'Azadi Ka Amrit Mahotsav — Bagha Jatin', claim: 'Government historical material records Jatindranath Mukherjee’s revolutionary leadership, German arms plan and armed resistance to British rule.', url: 'https://amritmahotsav.nic.in/district-reopsitory-detail.htm?2519=' },
      { kind: 'official', source: 'Nadia District Administration — historical perspective', claim: 'The district historical account places Bagha Jatin within Bengal’s anti-colonial revolutionary history.', url: 'https://nadia.gov.in/historical-perspective/' },
      { kind: 'review', source: 'Times of India — Bagha Jatin review', claim: 'Describes the film as a patriotic biographical drama about Jatindranath Mukherjee and his anti-British revolutionary activity.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movie-reviews/bagha-jatin/movie-review/104560056.cms' },
      { kind: 'review', source: 'Indian Express Bengali — Bagha Jatin review', claim: 'Provides a Bengali critical reading of the film’s heroic construction and historical-biographical treatment.', url: 'https://bengali.indianexpress.com/entertainment/review/film-review-dev-as-bagha-jatin-movie-review-685289/' }
    ],
    filmUnderstanding: 'A Bengali biographical historical drama about revolutionary Jatindranath Mukherjee, the Jugantar movement, attempts to secure arms during World War I and the armed confrontation that ended his life.',
    researchFocus: 'Jatindranath Mukherjee Bagha Jatin Jugantar German arms plot Balasore tiger legend biography history',
    redTeamChallenge: 'A star-led patriotic biopic may concentrate a networked revolutionary movement into one heroic life and merge legend, private reconstruction and documented anti-colonial history.',
    fact: 'Bagha Jatin was a historical revolutionary leader associated with Jugantar, international arms planning and armed confrontation with British authorities; not every private scene or legendary detail is independently documented.',
    interpretation: 'The biographical compression remains a caveat, while the film’s Bengali-rooted anti-colonial Rashtra and Itihasa signal is strong and source-grounded.',
    intent: 'Condemnation of colonial rule and officials is not generalized contempt toward British people as an inherent community.',
    risks: [
      { id: 'source-adaptation', summary: 'A networked revolutionary history is compressed around one heroic biographical arc with reconstructed private scenes and legendary material.', evidenceIndexes: [0, 2, 3], materiality: 'medium' },
      { id: 'historical-claims', summary: 'The broad revolutionary record is documented, but popular legendary episodes and scene-level chronology should remain distinct from independently verified history.', evidenceIndexes: [0, 1, 3], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Bela Seshe',
    year: 2015,
    language: 'Bengali',
    status: 'certified',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Marriage', 'Bengali roots', 'Social Dharma', 'Intergenerational duty'],
    reasons: [
      'The film takes a long marriage, ageing and the extended Bengali family seriously as institutions that can be examined, repaired and renewed rather than dismissed as obsolete burdens.',
      'Its criticism falls on complacency, habit and failures inside relationships, not on Bengalis, spouses, elders, women or another community as inherently degraded; reform and responsibility remain inside a rooted family frame.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Bela Seshe review', claim: 'Describes the elderly couple’s proposed separation and the extended family’s confrontation with love, habit, marriage and responsibility.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movie-reviews/belaseshe/movie-review/47146990.cms' },
      { kind: 'review', source: 'Anandabazar Patrika — Bela Seshe review', claim: 'Documents the Bengali film’s treatment and reception around ageing love, marriage and family relationships.', url: 'https://www.anandabazar.com/entertainment/review-of-bela-seshe-1.152172' },
      { kind: 'interview', source: 'Times of India — Nandita Roy profile', claim: 'Places the filmmakers’ family-centred storytelling, including Bela Seshe, within their recurring interest in relationships and Bengali audiences.', url: 'https://timesofindia.indiatimes.com/entertainment/bengali/movies/news/birthday-special-why-director-nandita-roy-is-unassailable-at-the-bengali-box-office/photostory/68699035.cms' }
    ],
    filmUnderstanding: 'An original Bengali family drama in which an elderly husband announces separation after decades of marriage, forcing several generations to reconsider love, habit, obligation and what sustains a family.',
    researchFocus: 'Bela Seshe Nandita Roy Shiboprosad Mukherjee marriage ageing family Bengali culture divorce relationships',
    redTeamChallenge: 'A family-centred certification can over-romanticize marriage or treat reconciliation as automatically dharmic even when the film’s purpose is to expose emotional neglect and unequal relational habits.',
    fact: 'Bela Seshe is fictional family drama rather than a historical or sacred claim.',
    interpretation: 'Its willingness to criticize a marriage strengthens rather than cancels its rooted Social Dharma signal because responsibility, affection and intergenerational family remain morally consequential.',
    intent: 'No contempt toward women, elders, marriage or Bengali family life is inferred from critique of specific relationship failures.'
  }),

  makeHardenedBatchFilm({
    title: 'Mastaney',
    year: 2023,
    language: 'Punjabi',
    status: 'certified',
    sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 3, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Sikh history', 'Punjab', 'Ardaas', 'Parampara', 'Raksha'],
    reasons: [
      'The fictional commoners’ transformation through Sikh ardaas, courage, collective memory and willingness to protect others makes living Sikh tradition the source of moral and martial formation.',
      'Nader Shah’s invasion supplies a real historical frame, but the five central commoners are dramatic creations; hostility to invading rulers and soldiers is not generalized contempt toward Muslims as a religious community.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Mastaney review', claim: 'Identifies the 1739 historical setting, Nader Shah’s invasion and fictional commoners whose encounter with Sikh courage and ardaas transforms them.', url: 'https://timesofindia.indiatimes.com/entertainment/punjabi/movie-reviews/mastaney/movie-review/103054975.cms' },
      { kind: 'review', source: 'Indian Express — Mastaney review', claim: 'Reads the film as an ode to Sikh valour and tradition while assessing the historical-fantasy construction.', url: 'https://indianexpress.com/article/entertainment/movie-review/mastaney-movie-review-an-ode-to-the-legendary-valour-of-sikhs-8909394/lite/' },
      { kind: 'interview', source: 'Indian Express — Tarsem Jassar on Mastaney', claim: 'Jassar discusses the film’s ensemble purpose and the importance of the story rather than individual star prominence.', url: 'https://indianexpress.com/article/entertainment/tarsem-jassar-on-mastaney-screen-time-does-not-matter-the-film-matters-8903970/lite/' },
      { kind: 'review', source: 'Institute for Advanced Study — Nader Shah context', claim: 'Provides scholarly historical context for Nader Shah’s invasion and its place in eighteenth-century imperial history.', url: 'https://www.ias.edu/ideas/2018/matthee-nader-shah' }
    ],
    filmUnderstanding: 'A Punjabi historical fiction set around Nader Shah’s 1739 invasion in which ordinary men hired as Sikh decoys are morally transformed by real Sikh resistance, prayer and collective identity.',
    researchFocus: 'Nader Shah 1739 Punjab Sikh resistance ardaas fictional commoners Zakariya Khan history source fidelity',
    redTeamChallenge: 'The film can blur historical setting and invented heroes, simplify eighteenth-century politics and turn invaders into a monolithic villain force in service of devotional martial uplift.',
    fact: 'Nader Shah’s invasion is historical, while the central decoy/commoner characters are fictional dramatic devices inside that setting.',
    interpretation: 'The fictionalization is transparent enough to preserve the strong Parampara, Sacred Regard and Raksha signal without treating each scene as literal Sikh history.',
    intent: 'No anti-Muslim intent is inferred from opposition to named invading political and military actors.',
    risks: [
      { id: 'historical-claims', summary: 'A real invasion and Sikh historical setting are populated by fictional protagonists and dramatized encounters.', evidenceIndexes: [0, 1, 3], materiality: 'medium' },
      { id: 'source-adaptation', summary: 'The film uses historical setting as the foundation for an invented transformation narrative rather than claiming a one-to-one biography.', evidenceIndexes: [0, 1], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Angrej',
    year: 2015,
    language: 'Punjabi',
    status: 'certified',
    sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Punjab', '1940s', 'Parampara', 'Local roots', 'Courtship'],
    reasons: [
      'The film deliberately reconstructs 1940s rural Punjabi speech, clothing, food, music, wedding practice and courtship as a lived cultural world rather than generic period decoration.',
      'Its nostalgia does not require every social convention to be morally ideal: individual family and romantic conflicts can be comic or restrictive without turning Punjabi tradition or a community into an object of generalized contempt.'
    ],
    evidence: [
      { kind: 'review', source: 'The Tribune — Angrej review', claim: 'Highlights the pre-Independence setting and attention to old-Punjab sets, props, dress, dialect and courtship culture.', url: 'https://www.tribuneindia.com/news/archive/movie-reviews/love-ly-lanes-113715/' },
      { kind: 'interview', source: 'The Tribune — Angrej period-culture feature', claim: 'Discusses the production’s effort to recreate an older Punjabi social world and visual culture.', url: 'https://www.tribuneindia.com/news/archive/life-style/angreji-beat-te-111579/' },
      { kind: 'interview', source: 'PunjabiGrooves — Angrej context', claim: 'Writer Amberdeep Singh and the production framing emphasize showing the culture, food, joy and roots of 1945 Punjab.', url: 'https://punjabigrooves.com/angrej-tells-you-the-love-story-of-1945-punjab/' }
    ],
    filmUnderstanding: 'An original Punjabi period romantic comedy set in rural pre-Partition Punjab, built around courtship, family, festivals, language and the social texture of the 1940s.',
    researchFocus: '1945 Punjab Amberdeep Singh rural courtship wedding dress food dialect pre-Partition culture nostalgia',
    redTeamChallenge: 'Period nostalgia can sanitize gender, class or family constraints and mistake accurate-looking props for complete social history.',
    fact: 'Angrej is period fiction rather than a true-story or documentary claim.',
    interpretation: 'Its dense Punjabi cultural reconstruction and affection for inherited social forms strongly support Civilizational Continuity, Parampara and Local Roots while leaving room for critique of individual customs.',
    intent: 'No claim is made that every depicted courtship or family convention was universal across 1940s Punjab.'
  }),

  makeHardenedBatchFilm({
    title: 'Kasoombo',
    year: 2024,
    language: 'Gujarati',
    status: 'certified',
    sourceBasis: 'fiction-adaptation',
    confidence: 'medium',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 4, itihasa: 4, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 1 },
    tags: ['Jain heritage', 'Shetrunjay', 'Temple protection', 'Gujarati roots', 'Evidence hold'],
    reasons: [
      'The film’s declared moral centre is defence of Shetrunjay’s Jain sacred geography, temples and local heritage, producing exceptionally strong Sacred Regard, Parampara, Local Roots and Raksha signals.',
      'The remaining problem is not that cultural verdict: the screenplay is explicitly adapted from Vimalkumar Dhami’s novel Amar Balidan, while the precise historical episode of Dadu Barot and 51 defenders was not independently verified to the v2 standard in this pass. The history claim is therefore held rather than invented as certainty.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Kasoombo review', claim: 'Identifies the film as an adaptation of Vimalkumar Dhami’s Amar Balidan and describes the 51-defender Shetrunjay temple-protection narrative.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/kasoombo-movie-review/movie-review/107753422.cms' },
      { kind: 'interview', source: 'Bilkul Online — Kasoombo cast and director', claim: 'Records director Vijaygiri Bava’s statement that the film reflects the novel Amar Balidan and recounts Dadu Barot and 51 defenders.', url: 'https://bilkulonline.com/2024/02/15/kasoombo-a-gujarati-film-is-a-riveting-historical-drama-of-14th-century-gujarats-shetrunjay-hills/' },
      { kind: 'primary', source: 'Vijaygiri Filmos — Kasoombo official film page', claim: 'The production’s own synopsis frames Dadu Barot as protecting Shetrunjay’s sacred temples and cultural heritage from Alauddin Khilji’s forces.', url: 'https://www.vijaygirifilmos.in/kasoombo' },
      { kind: 'primary', source: 'Patel Processing Studios — Kasoombo', claim: 'The production listing credits Amar Balidan as the literary source and describes the film as a historical drama mirroring the novel.', url: 'https://www.patelprocessingstudios.com/movie/kasoombo/' }
    ],
    filmUnderstanding: 'A Gujarati historical-sacred drama adapted from the novel Amar Balidan, portraying Dadu Barot and a small group of local defenders protecting Shetrunjay’s Jain temples and heritage from Alauddin Khilji’s forces.',
    researchFocus: 'Kasoombo Amar Balidan Vimalkumar Dhami Dadu Barot 51 Adipur Shetrunjay Jain temple Alauddin Khilji history sources',
    redTeamChallenge: 'The film and its publicity present a precise 14th-century sacrifice narrative as history, but the accessible title-specific evidence in this pass largely traces back to the source novel and production/review repetition rather than independent primary or scholarly verification of the 51-defender episode.',
    fact: 'Kasoombo is explicitly adapted from Amar Balidan and depicts Shetrunjay temple defence; this audit did not independently establish every claimed participant count, conversion episode or battle detail as historical fact.',
    interpretation: 'The unresolved historicity requires human adjudication, while the film’s on-screen Jain sacred-protection and Gujarati civilizational alignment is clear and should not be downgraded merely because historical proof remains incomplete.',
    intent: 'No anti-Muslim or deceptive intent is inferred; named imperial antagonists and a sacred-defence narrative are not by themselves generalized community contempt.',
    risks: [
      { id: 'source-adaptation', summary: 'The film openly derives its narrative from the novel Amar Balidan, so novel-to-film choices and the distinction between literary tradition and independently documented history are material.', evidenceIndexes: [0, 1, 3], materiality: 'high' },
      { id: 'historical-claims', status: 'ambiguous', summary: 'The precise Dadu Barot/51-defender episode, participant count and related historical details were not independently corroborated beyond adaptation and production/review sources in this pass.', evidenceIndexes: [0, 1, 2, 3], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'disputed', summary: 'The cultural/sacred orientation is clear, but the precise historical reconstruction remains insufficiently independently sourced for durable factual publication.', fact: 'The film is adapted from Amar Balidan and presents the Shetrunjay defence as a historical sacrifice narrative.', interpretation: 'Independent corroboration of the detailed episode remains incomplete.', intent: 'No fabrication intent is inferred from reliance on a literary/historical tradition.' }],
    humanReview: true
  }),

  makeHardenedBatchFilm({
    title: 'Reva',
    year: 2018,
    language: 'Gujarati',
    status: 'certified',
    sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Narmada', 'Parikrama', 'Dharma', 'Gujarati roots', 'Sacred geography'],
    reasons: [
      'The protagonist’s Narmada journey moves from alienation and disbelief toward reverence, responsibility and rootedness, making sacred geography and parikrama the vehicle of moral transformation rather than exotic scenery.',
      'The film can criticize individual customs, fear or superstition without converting those criticisms into contempt for devotees or Hindu practice; its overall movement is toward deeper respect for Narmada and inherited spiritual life.'
    ],
    evidence: [
      { kind: 'interview', source: 'Times of India — adapting Tatvamasi into Reva', claim: 'Directors Rahul Bhole and Vinit Kanojia discuss adapting Dhruv Bhatt’s novel Tatvamasi and the changes required to translate its Narmada journey to cinema.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movies/news/it-was-a-delight-to-adapt-tatvamasi-into-reva-rahul-bhole-and-vinit-kanojia/articleshow/63642934.cms' },
      { kind: 'review', source: 'Times of India — Reva review', claim: 'Describes the Narmada parikrama, the protagonist’s spiritual transformation and the film’s rooted Gujarati sacred-geography setting.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-reviews/reva/movie-review/63656807.cms' },
      { kind: 'review', source: 'DeshGujarat — Reva review', claim: 'Provides a counter-reading that praises the rooted journey while criticizing portions of the film’s romanticization and treatment of customs.', url: 'https://deshgujarat.com/2018/04/07/gujarati-film-review-reva/' }
    ],
    filmUnderstanding: 'A Gujarati film adaptation of Dhruv Bhatt’s novel Tatvamasi in which an initially materialistic or unbelieving protagonist undertakes a Narmada parikrama and is transformed by people, landscape, tradition and sacred experience.',
    researchFocus: 'Reva Tatvamasi Dhruv Bhatt Narmada parikrama adaptation sacred river faith customs Gujarati',
    redTeamChallenge: 'The film can romanticize sacred geography and village custom, and an adaptation may simplify the novel’s philosophical ambiguity or reproduce troubling practices without enough critique.',
    fact: 'Reva is an acknowledged adaptation of Tatvamasi; the directors describe making changes with awareness of the source rather than claiming an original true story.',
    interpretation: 'The adaptation’s criticism of particular customs does not outweigh a strong movement toward Narmada reverence, rootedness and dharmic responsibility.',
    intent: 'No contempt toward devotees, rural communities or Hindu sacred geography is inferred from criticism of specific practices.',
    risks: [
      { id: 'source-adaptation', summary: 'The film condenses and changes Dhruv Bhatt’s Tatvamasi for cinema, so source differences should remain visible even though the adaptation is openly acknowledged.', evidenceIndexes: [0, 1, 2], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'The film openly adapts Tatvamasi with cinematic changes rather than reproducing the novel literally.', fact: 'The literary source and adaptation process are publicly acknowledged.', interpretation: 'Source condensation is a Narrative Integrity caveat, not a reason to deny the film’s sacred-geography orientation.', intent: 'No hidden-source or deceptive intent is inferred.' }]
  })
];

if (fullRecertificationV2Worker2Batch01.length !== 19) {
  throw new Error(`Expected 19 Worker 2 profiles, got ${fullRecertificationV2Worker2Batch01.length}`);
}
