import type { SanghiProfile } from '../types/sanghi';

const reviewedAt = '2026-10-02';
const methodologyVersion = '1.0-bharatiya';

const fictionGate: NonNullable<SanghiProfile['publicationGate']> = {
  adversarialPass: true,
  regionalContextPass: true,
  socialRadarPass: true,
  adaptationDeltaPass: 'not-applicable',
  narrativeIntegrityPass: true,
  factInterpretationIntentPass: true,
  evidenceSufficiencyPass: true,
  explanationPass: true,
  selfFalsificationPass: true,
};

const adaptationGate: NonNullable<SanghiProfile['publicationGate']> = {
  ...fictionGate,
  adaptationDeltaPass: 'passed',
};

export const continuousCorpusProfiles: SanghiProfile[] = [
  {
    title: 'Swades', year: 2004, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Local roots', 'Social Dharma', 'Development'],
    reasons: [
      'The film treats attachment to India as constructive responsibility: Mohan moves from distant concern to direct service in a village rather than romanticising patriotism as a slogan.',
      'Its critique of caste, poverty, illiteracy and weak infrastructure is framed as work Indians can undertake for their own society, so reform strengthens rather than negates the Bharatiya signal.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Rediff — Swades review', claim: 'The review foregrounds Mohan confronting caste, poverty, illiteracy, child labour and the lack of electricity in Charanpur.', url: 'https://www.rediff.com/movies/review/swades1/20041217.htm' },
      { kind: 'interview', source: 'Rediff — Ashutosh Gowariker interview', claim: 'Gowariker described the film as asking Indians abroad to give their country a thought and stressing that an individual can make a difference.', url: 'https://www.rediff.com/movies/report/ashu/20041216.htm' },
    ],
  },
  {
    title: 'Lakshya', year: 2004, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 5, itihasa: 2, parampara: 2, localRoots: 2, raksha: 5, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Raksha', 'Military', 'Duty'],
    reasons: [
      'The protagonist finds purpose through Indian Army service, discipline and responsibility, with the Kargil setting making national defence central to his moral growth.',
      'The film does not require jingoism to affirm Rashtra and Raksha: personal maturity and service to India reinforce each other throughout the story.',
    ],
    integrityFlags: [{
      type: 'military-authenticity', status: 'disputed',
      summary: 'Some military readers have criticised tactical and procedural details as unrealistic; that affects military authenticity, not the film’s India-positive service ethic.',
      fact: 'Published reader criticism identifies specific tactical and planning choices it considers implausible.',
      interpretation: 'Those objections are relevant to realism but do not alter the film’s dominant respect for Indian military service.',
      intent: 'No evidence reviewed establishes an intent to misrepresent the Army.',
    }],
    evidence: [
      { kind: 'review', source: 'Rediff — Lakshya review', claim: 'The review describes the transformation of an aimless young man into an Indian soldier against a Kargil-war backdrop.', url: 'https://www.rediff.com/movies/review/lakshya/20040618.htm' },
      { kind: 'interview', source: 'Rediff — Farhan Akhtar interview', claim: 'Akhtar described the film as a story about a young man finding himself, deliberately set in the Army.', url: 'https://m.rediff.com/movies/report/farhan/20040408.htm' },
      { kind: 'review', source: 'Rediff — military reader critique', claim: 'A published reader response disputes some operational and tactical details shown in the film.', url: 'https://www.rediff.com/movies/review/lak-reader2/20040619.htm' },
    ],
  },
  {
    title: 'Chak De! India', year: 2007, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: adaptationGate,
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 5, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Sport', 'Women', 'National unity'],
    reasons: [
      'The film’s emotional centre is an Indian national team learning to place shared national purpose above regional rivalry, ego and prejudice.',
      'Its women athletes are presented as representing India without requiring cultural deracination; regional identities remain visible inside a larger Indian identity.',
    ],
    integrityFlags: [{
      type: 'source-fidelity', status: 'contradicted',
      summary: 'A recurring claim that a real Hindu coach was directly converted into the fictional Muslim Kabir Khan is not supported as a biographical substitution by the creator record reviewed.',
      fact: 'Director Shimit Amin said the film was not inspired by Mir Ranjan Negi’s life and described the inspiration as the Indian national hockey team under M. K. Kaushik; public accounts also state the script existed before Negi joined the project.',
      interpretation: 'The specific allegation of a direct real-person religious identity substitution is therefore not established by the available creator record.',
      intent: 'The audit does not infer a communal motive for the fictional coach’s identity.',
    }],
    evidence: [
      { kind: 'interview', source: 'Rediff — Shimit Amin chat', claim: 'Amin explicitly rejected the claim that the film was inspired by Mir Ranjan Negi and pointed instead to the Indian women’s hockey team under M. K. Kaushik.', url: 'https://www.rediff.com/movies/report/shimit/20070828.htm' },
      { kind: 'review', source: 'Times of India — Winning against the odds', claim: 'Contemporary commentary identifies nationalism, women’s sport and collective Indian identity as central themes.', url: 'https://timesofindia.indiatimes.com/edit-page/leader-article-winning-against-the-odds/articleshow/2289324.cms' },
    ],
  },
  {
    title: 'Kadaisi Vivasayi', year: 2021, language: 'Tamil', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Tamil roots', 'Agriculture', 'Parampara', 'Sacred regard'],
    reasons: [
      'Farming, village ritual, land, memory and inherited obligation are presented as an integrated Tamil way of life rather than as backward scenery to be escaped.',
      'Murugan devotion and village-deity practice are treated with seriousness and tenderness while the farmer’s work itself becomes a form of lived dharma.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Kadaisi Vivasayi review', claim: 'The review highlights farming, faith, transcendence, a village-deity stone and the Murugan-devotee character.', url: 'https://indianexpress.com/article/entertainment/movie-review/kadaisi-vivasayi-movie-review-vijay-sethupathi-7814885/' },
      { kind: 'review', source: 'Hindu Tamil — Kadaisi Vivasayi review', claim: 'The Tamil review discusses village kuladeivam worship alongside the farmer’s rooted rural life.', url: 'https://www.hindutamil.in/news/cinema/tamil-cinema/766374-kadaisi-vivasayi-movie-review.html' },
    ],
  },
  {
    title: 'Mookuthi Amman', year: 2020, language: 'Tamil', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 4, sacredRegard: 5, contemptRisk: 1 },
    tags: ['Dharma', 'Amman', 'Internal reform', 'Sacred regard'],
    reasons: [
      'The film distinguishes faith in the goddess from exploitation by self-proclaimed godmen, making its satire an internal critique of fraud rather than a rejection of Hindu divinity.',
      'Mookuthi Amman is treated as a real moral and sacred presence in the story, so reform and scepticism toward commercialised religiosity coexist with strong sacred regard.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Mookuthi Amman review', claim: 'The review notes that the protagonist believes in God while rejecting self-proclaimed godmen and that the goddess helps expose exploitation.', url: 'https://indianexpress.com/article/entertainment/movie-review/mookuthi-amman-review-no-dull-moment-in-nayanthara-starrer-7051503/' },
      { kind: 'review', source: 'Rotten Tomatoes — Mookuthi Amman synopsis', claim: 'The synopsis describes the goddess appearing to help expose fake god-men.', url: 'https://www.rottentomatoes.com/m/mookuthi_amman' },
    ],
  },
  {
    title: 'Annamayya', year: 1997, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: adaptationGate,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Venkateswara', 'Bhakti', 'Itihasa', 'Telugu roots'],
    reasons: [
      'The life and compositions of Tallapaka Annamacharya are framed through Sri Venkateswara bhakti, making devotion and sacred musical inheritance the film’s central grammar.',
      'The film strengthens Telugu civilizational continuity by presenting a historical saint-composer and his devotional corpus as living cultural memory.',
    ],
    integrityFlags: [{
      type: 'sacred-tradition', status: 'supported',
      summary: 'The historical Annamacharya tradition and devotional corpus are documented; miraculous or divine episodes belong to sacred tradition and are not presented here as independently verified empirical history.',
      fact: 'TTD’s Annamacharya Project documents the saint-composer and a large corpus of Venkateswara compositions.',
      interpretation: 'The film is a devotional biography rather than a modern documentary reconstruction.',
      intent: 'Its devotional intent is explicit; no hostile or deceptive intent is inferred from sacred-story material.',
    }],
    evidence: [
      { kind: 'official', source: 'Tirumala Tirupati Devasthanams — Annamacharya Project', claim: 'TTD documents Annamacharya as a fifteenth-century saint-composer associated with thousands of Venkateswara keertanas.', url: 'https://www.tirumala.org/RAAnnamacharyaProject.aspx' },
      { kind: 'official', source: 'Tirumala Tirupati Devasthanams — Annamacharya life history', claim: 'TTD provides a temple-institution account of Annamacharya’s life and devotional legacy.', url: 'https://www.tirumala.org/AnnamaCharyaLifeHistory.aspx' },
    ],
  },
  {
    title: 'Karthikeya', year: 2014, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 4, raksha: 1, socialDharma: 2, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Temple', 'Subramanya', 'Inquiry', 'Sacred regard'],
    reasons: [
      'A Subramanya temple and the community’s relationship with it are central to the mystery rather than disposable exotic scenery.',
      'The protagonist’s rational investigation does not resolve by mocking the sacred setting; inquiry and inherited belief are allowed to coexist inside an Indic frame.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Karthikeya review', claim: 'The review describes the mystery surrounding a temple in Subramaniapuram as the film’s central engine.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/karthikeya-movie-review/movie-review/44928177.cms' },
      { kind: 'review', source: 'Filmibeat — Karthikeya review', claim: 'The review likewise identifies the temple mystery and the protagonist’s investigation as core to the film.', url: 'https://www.filmibeat.com/telugu/reviews/2014/karthikeya-movie-review-162393.html' },
    ],
  },
  {
    title: 'Sri Ramadasu', year: 2006, language: 'Telugu', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: adaptationGate,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Rama', 'Bhakti', 'Bhadrachalam', 'Telugu roots'],
    reasons: [
      'Bhakti to Sri Rama, temple construction and devotional music define the protagonist’s transformation and the film’s moral universe.',
      'The Bhadrachalam Ramadasu tradition is treated as inherited Telugu sacred history rather than as an object of ridicule or embarrassment.',
    ],
    integrityFlags: [{
      type: 'sacred-tradition', status: 'supported',
      summary: 'The historical core around Kancherla Gopanna, public funds, temple construction and imprisonment is documented, while miraculous repayment/release belongs to devotional lore.',
      fact: 'Telangana educational material records Gopanna’s service, use of public funds for the Bhadrachalam Rama temple and imprisonment.',
      interpretation: 'The film combines that historical core with a devotional sacred narrative.',
      intent: 'The devotional framing is overt and does not by itself establish a factual claim about miracles.',
    }],
    evidence: [
      { kind: 'official', source: 'SCERT Telangana — Social Studies textbook', claim: 'The state textbook records Kancherla Gopanna as a tahsildar who used public funds for the Bhadrachalam Rama temple and was imprisoned.', url: 'https://www.scert.telangana.gov.in/pdf/publication/ebooks2019/7%20social%20em%202020-21.pdf' },
      { kind: 'official', source: 'Telangana Tourism — Bhadrachalam booklet', claim: 'The tourism account associates Gopanna with the temple while explicitly noting that lore and legend are intertwined in the miraculous repayment tradition.', url: 'https://tourism.telangana.gov.in/assets/img/pdf/Booklet%20for%20FlipBookLow.pdf' },
    ],
  },
  {
    title: 'Nandanam', year: 2002, language: 'Malayalam', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Krishna', 'Guruvayoor', 'Bhakti', 'Malayalam roots'],
    reasons: [
      'Balamani’s devotion to Guruvayoorappan is not incidental character colour; it structures the emotional and metaphysical resolution of the film.',
      'The story treats Krishna bhakti, miracle and Guruvayoor-associated sacred imagination sympathetically inside ordinary Malayali domestic life.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'NowRunning — Nandanam review', claim: 'The review describes the film’s simple domestic story and its miraculous devotional dimension.', url: 'https://www.nowrunning.com/movie/195/malayalam/nandanam/79/review.htm' },
      { kind: 'official', source: 'Apple TV — Nandanam', claim: 'The platform synopsis identifies Balamani as a Guruvayoorappan devotee and frames devotion as central to the story.', url: 'https://tv.apple.com/in/movie/nandanam/umc.cmc.721a5t61lff5bod6j4xrlauz8' },
    ],
  },
  {
    title: 'Guruvayoor Ambalanadayil', year: 2024, language: 'Malayalam', status: 'neutral', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 4, raksha: 1, socialDharma: 2, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Wedding', 'Guruvayoor', 'Comedy', 'Local roots'],
    reasons: [
      'The Guruvayoor temple-wedding setting and Malayali family practices are treated as ordinary, culturally legible parts of life rather than targets of contempt.',
      'The film remains primarily a relationship comedy, so the rooted setting is positive but not strong enough by itself to force a Sanghi Certified verdict.',
    ],
    integrityFlags: [{
      type: 'source-fidelity', status: 'contradicted',
      summary: 'Social-media speculation that the film directly retells a specific Guruvayoor wedding incident or older film has not been substantiated by the creator account reviewed.',
      fact: 'Public reporting cites director Vipin Das denying that the film was inspired by the older film Grihapravesam; no verified real-incident source was established in this audit.',
      interpretation: 'The title and temple setting should not be converted into a true-story claim without evidence.',
      intent: 'No source reviewed establishes an attempt to conceal a real incident or source work.',
    }],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Guruvayoor Ambalanadayil review', claim: 'The review treats the film as a wedding/family comedy built around the Guruvayoor setting.', url: 'https://indianexpress.com/article/entertainment/movie-review/guruvayoorambala-nadayil-movie-review-rating-robust-entertainer-9330542/' },
      { kind: 'review', source: 'India Today — Guruvayoor Ambalanadayil review', claim: 'The review similarly presents the work as a family comedy rather than a historical or devotional claim.', url: 'https://www.indiatoday.in/movies/reviews/story/guruvayoor-ambalanadayil-review-prithiviraj-sukumaran-basil-joseph-vipin-das-film-is-fun-and-hilarious-in-parts-2539954-2024-05-16' },
    ],
  },
  {
    title: 'Sarkari Hi. Pra. Shaale, Kasaragodu', year: 2018, language: 'Kannada', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: adaptationGate,
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 2, itihasa: 2, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada', 'Language', 'Kasaragod', 'Local roots'],
    reasons: [
      'The fight to preserve Kannada-medium schooling and linguistic continuity in Kasaragod is the story’s central cultural concern.',
      'The film treats language, place and community memory as inheritances worth defending, while keeping the conflict rooted in a specific border-region social reality.',
    ],
    integrityFlags: [{
      type: 'historical-fiction', status: 'verified',
      summary: 'The film was inspired by a real 2007 Kannada-school incident in Kasaragod but dramatizes it as a fictional narrative rather than a documentary reconstruction.',
      fact: 'Contemporary review reporting records director Rishab Shetty’s statement that a 2007 incident involving Kannada schooling inspired the film.',
      interpretation: 'The real-event inspiration supports the language-preservation context without requiring every character or scene to map literally onto the incident.',
      intent: 'No evidence reviewed suggests the fictionalization was meant to falsify the underlying language issue.',
    }],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Sarkari Hi. Pra. Shaale review/context', claim: 'The article records the Kasaragod Kannada identity conflict and the director’s real-incident inspiration.', url: 'https://www.cinemaexpress.com/reviews/kannada/2018/aug/25/sarkari-hiriya-pratamika-shale-kasargodu-koduge-ramanna-rai-review-digs-deep-into-identity-crisis-7580.html' },
      { kind: 'review', source: 'Times of India — Sarkari Hi. Pra. Shaale review', claim: 'The review identifies the threatened Kannada school and Kasaragod language setting as core to the plot.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/sarkari-hi-pra-shaale-kasaragodu/amp_movie_review/65524509.cms' },
    ],
  },
  {
    title: 'Sri Manjunatha', year: 2001, language: 'Kannada', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 4, raksha: 2, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Shiva', 'Bhakti', 'Dharma', 'Kannada roots'],
    reasons: [
      'The protagonist’s movement from disbelief toward Shiva bhakti and moral transformation is the explicit centre of the film.',
      'Devotion, temple-associated sacred imagination and service are treated affirmatively rather than as superstition to be discarded.',
    ],
    integrityFlags: [{
      type: 'sacred-tradition', status: 'supported',
      summary: 'The film is devotional fiction drawing on Manjunatha/Shiva sacred tradition; supernatural events are part of that devotional mode rather than audited empirical history.',
      fact: 'Contemporary and platform descriptions consistently identify the work as a devotional story centred on Lord Manjunatha/Shiva.',
      interpretation: 'Its supernatural material functions as sacred narrative inside the film’s declared genre.',
      intent: 'The film’s devotional intent is explicit and affirmative.',
    }],
    evidence: [
      { kind: 'film', source: 'TeluguOne — Sri Manjunatha full-film description', claim: 'The published film description traces Manjunatha’s transformation from atheist/rebel to Shiva devotee.', url: 'https://www.youtube.com/watch?v=T1Sh4T2i4Eo' },
      { kind: 'review', source: 'Filmibeat Telugu — Sri Manjunatha review', claim: 'The review treats the work as an overt devotional film centred on Manjunatha and Shiva bhakti.', url: 'https://telugu.filmibeat.com/reviews/manjunatha.html' },
    ],
  },
  {
    title: 'Bela Seshe', year: 2015, language: 'Bengali', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Marriage', 'Bengali roots', 'Social Dharma'],
    reasons: [
      'The film takes a long marriage and extended Bengali family seriously as institutions that deserve examination, responsibility and renewal rather than casual dismissal.',
      'Its critique of habit, emotional neglect and gendered expectations works inside the family relationship instead of treating rooted domestic life itself as contemptible.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'NowRunning — Bela Seshe review', claim: 'The review describes the film as an examination of long marriage, love, habit and what can be recovered through changed action.', url: 'https://www.nowrunning.com/movie/17206/bengali/bela-seshe/5070/review/' },
      { kind: 'review', source: 'Anandabazar Patrika — Bela Seshe review', claim: 'The Bengali review documents the film’s strong reception around its treatment of ageing love and family relationships.', url: 'https://www.anandabazar.com/entertainment/review-of-bela-seshe-1.152172' },
    ],
  },
  {
    title: 'Katyar Kaljat Ghusali', year: 2015, language: 'Marathi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Classical music', 'Guru-shishya', 'Marathi theatre', 'Parampara'],
    reasons: [
      'Hindustani classical music, artistic lineage and guru-shishya transmission are not decorative elements; they are the film’s central moral and aesthetic world.',
      'The adaptation carries a major Marathi stage tradition into cinema while treating inherited musical excellence as something worthy of preservation and mastery.',
    ],
    integrityFlags: [{
      type: 'source-adaptation', status: 'supported',
      summary: 'The film adapts a celebrated Marathi musical play and makes cinematic changes; audience commentary includes disagreement about whether the film version matches the stage work.',
      fact: 'The film is an adaptation of the Marathi musical play of the same name.',
      interpretation: 'Differences in staging and emphasis are adaptation choices, not evidence of civilizational contempt.',
      intent: 'No hostile intent toward the source tradition is established; the production foregrounds the music and theatrical legacy.',
    }],
    evidence: [
      { kind: 'review', source: 'Times of India — Katyar Kaljat Ghusali', claim: 'The review describes the film through its musical performances and classical-music rivalry.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-details/katyar-kaljat-ghusali/movieshow/61244616.cms' },
      { kind: 'social', source: 'Reddit r/marathinatak — film adaptations of Marathi plays', claim: 'Social-radar discussion contains both criticism of changes from the stage version and appreciation that the film introduced the theatrical tradition to new audiences.', url: 'https://www.reddit.com/r/marathinatak/comments/1gy0o7e' },
    ],
  },
  {
    title: 'Harishchandrachi Factory', year: 2009, language: 'Marathi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: adaptationGate,
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Indian cinema', 'Dadasaheb Phalke', 'Itihasa', 'Marathi roots'],
    reasons: [
      'The film celebrates Dadasaheb Phalke’s creation of Raja Harishchandra as a foundational act in Indian cinema and treats indigenous creative institution-building with affection.',
      'Its period detail, family labour and comic tone make Indian cinematic heritage accessible without treating that heritage as quaint or inferior.',
    ],
    integrityFlags: [{
      type: 'historical-fiction', status: 'verified',
      summary: 'This is a comic biographical reconstruction of Phalke’s early filmmaking rather than a scene-for-scene documentary record.',
      fact: 'Contemporary reviews identify it as a biopic about Phalke making Raja Harishchandra, the pioneering Indian feature.',
      interpretation: 'The comic compression does not materially reverse the documented cultural significance of Phalke’s work in the sources reviewed.',
      intent: 'The film’s stated and evident purpose is celebratory rather than revisionist.',
    }],
    evidence: [
      { kind: 'review', source: 'Times of India — Harishchandrachi Factory review', claim: 'The review identifies the film as a biopic tracing Dadasaheb Phalke’s effort to make Raja Harishchandra and begin India’s film tradition.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/Harishchandrachi-Factory/movie-review/5567829.cms' },
      { kind: 'review', source: 'Times of India — 2009 review', claim: 'The contemporary review describes Phalke as the pioneering maker associated with India’s first feature film and evaluates the film’s reconstruction of that achievement.', url: 'https://timesofindia.indiatimes.com/bollywood/harishchandrachi-factory-movie-review/articleshow/5148699.cms' },
    ],
  },
  {
    title: 'Angrej', year: 2015, language: 'Punjabi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Punjab', '1940s', 'Parampara', 'Local roots'],
    reasons: [
      'The film deliberately reconstructs 1940s rural Punjabi language, courtship, clothing, food, music and wedding culture as a lived world rather than generic period decoration.',
      'Its affection for regional memory and inherited social texture creates a strong civilizational-continuity signal even though the primary story is romantic rather than political.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Tribune — Angrej review', claim: 'The review highlights the pre-Independence setting and attention to old-Punjab sets, props, dresses and dialect.', url: 'https://www.tribuneindia.com/news/archive/movie-reviews/love-ly-lanes-113715/' },
      { kind: 'interview', source: 'PunjabiGrooves — Angrej context', claim: 'Writer Amberdeep Singh and the production framing emphasize showing the culture, food, joy and roots of 1945 Punjab.', url: 'https://punjabigrooves.com/angrej-tells-you-the-love-story-of-1945-punjab/' },
    ],
  },
  {
    title: 'Reva', year: 2018, language: 'Gujarati', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Narmada', 'Parikrama', 'Dharma', 'Gujarati roots'],
    reasons: [
      'The protagonist’s Narmada journey moves from alienation and disbelief toward reverence, responsibility and rootedness, making sacred geography the vehicle of transformation.',
      'The film treats Narmada, ashram life and Indic philosophical ideas from Tattvamasi as meaningful inheritance rather than exotic spirituality for consumption.',
    ],
    integrityFlags: [{
      type: 'source-adaptation', status: 'supported',
      summary: 'The film adapts Dhruv Bhatt’s novel Tattvamasi and necessarily condenses its philosophical and narrative material.',
      fact: 'Contemporary Gujarati reviews identify Tattvamasi as the source novel and note substantial dialogue and philosophical material carried into the film.',
      interpretation: 'Condensation does not erase the source’s Narmada-centred spiritual architecture in the version reviewed.',
      intent: 'No evidence reviewed establishes an intent to invert or ridicule the source’s sacred worldview.',
    }],
    evidence: [
      { kind: 'review', source: 'DeshGujarat — Reva review', claim: 'The review identifies the film as an adaptation of Tattvamasi and describes the protagonist’s transformation from non-believer to Narmada devotee.', url: 'https://deshgujarat.com/2018/04/07/gujarati-film-review-reva/' },
      { kind: 'review', source: 'Times of India — Reva', claim: 'The film’s critical record identifies the Narmada journey and Gujarati literary adaptation as core to its reception.', url: 'https://timesofindia.indiatimes.com/entertainment/gujarati/movie-details/reva/movieawards/62709875.cms' },
    ],
  },
  {
    title: 'Village Rockstars', year: 2017, language: 'Assamese', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 2, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Assam', 'Local roots', 'Family', 'Social Dharma'],
    reasons: [
      'The film is created from inside rural Assam rather than treating the village as an outsider’s ethnographic backdrop; local landscape, work, flood, family and childhood are its narrative substance.',
      'Dhunu’s ambition and her mother’s support operate within that rooted world, so female agency is presented without requiring contempt for family, village or Assamese social life.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Village Rockstars review', claim: 'The review describes the film as life-like, rooted in the director’s own Assam village and attentive to poverty, flood, family and gender without artifice.', url: 'https://indianexpress.com/article/entertainment/movie-review/village-rockstars-movie-review-5377680/' },
      { kind: 'interview', source: 'The Indian Express — Rima Das profile', claim: 'The director describes returning to her own village in Assam and building the film around children and observations from that place.', url: 'https://indianexpress.com/article/entertainment/regional/village-rockstars-rima-das-4890447/' },
    ],
  },
  {
    title: 'Daman', year: 2022, language: 'Odia', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: adaptationGate,
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 4, itihasa: 2, parampara: 2, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Public health', 'Odia roots', 'Service', 'Rashtra'],
    reasons: [
      'The film frames medical service in remote Odisha as duty to fellow citizens, with the protagonist’s growth tied to staying, understanding local realities and building trust.',
      'It presents Indian public-health capacity and frontline government work as capable of meaningful social change without pretending the system is frictionless or perfect.',
    ],
    integrityFlags: [{
      type: 'historical-fiction', status: 'verified',
      summary: 'The film draws from Odisha’s malaria-control programme and the work of multiple field personnel rather than functioning as a literal one-person biography.',
      fact: 'The directors have described the inspiration as coming from the malaria programme and the collective work of government personnel in difficult districts.',
      interpretation: 'The protagonist is best read as a dramatized/composite vehicle for a real public-health effort, not proof that every event happened to one doctor exactly as shown.',
      intent: 'The available creator account supports dramatization for storytelling rather than concealment of the programme’s collective nature.',
    }],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Daman director interview', claim: 'Director Vishal Maurya describes the Odisha malaria programme and collective government-worker effort that inspired the film.', url: 'https://www.cinemaexpress.com/international/interviews/2022/Dec/07/daman-director-vishal-maurya-success-of-my-film-could-be-a-ray-of-hope-for-odia-filmmakers-37464.html' },
      { kind: 'review', source: 'Times of India — Daman review', claim: 'The review frames the story around a doctor posted in Malkangiri confronting malaria, difficult terrain and public-health challenges.', url: 'https://timesofindia.indiatimes.com/entertainment/hindi/movie-reviews/daman/movie-review/97550391.cms' },
    ],
  },
  {
    title: 'Ganga Maiyya Tohe Piyari Chadhaibo', year: 1962, language: 'Bhojpuri', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: fictionGate,
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Bhojpuri heritage', 'Ganga', 'Social reform', 'Cinema history'],
    reasons: [
      'As the first Bhojpuri feature, the film is itself a major act of regional-language cultural continuity, bringing Bhojpuri social life and idiom into Indian cinema.',
      'Its sacred invocation of Ganga coexists with a social-reform concern around widow remarriage, illustrating reform within a rooted cultural world rather than rejection of that world.',
    ],
    integrityFlags: [{
      type: 'source-adaptation', status: 'verified',
      summary: 'The film draws on a literary/social-reform story tradition; the audit treats that as source context rather than as a claim that the events are historical fact.',
      fact: 'Historical references identify it as the first Bhojpuri feature and connect its story to social-reform themes including widow remarriage.',
      interpretation: 'The combination of sacred Ganga imagery and reform supports a rooted social-dharma reading.',
      intent: 'No evidence reviewed establishes hostility toward the sacred tradition used by the film.',
    }],
    evidence: [
      { kind: 'review', source: 'Times of India — history of the first Bhojpuri film', claim: 'The retrospective identifies Ganga Maiyya Tohe Piyari Chadhaibo as the first Bhojpuri film and places it in the origins of Bhojpuri cinema.', url: 'https://timesofindia.indiatimes.com/entertainment/bhojpuri/movies/news/nirahua-recalls-first-bhojpuri-film-ganga-maiyya-tohe-piyari-chadhaibo/amp_articleshow/81167562.cms' },
      { kind: 'review', source: 'Cinema historiography — Bhojpuri cinema and regional identity', claim: 'Historical scholarship treats the film as foundational to Bhojpuri cinema and regional cultural identity.', url: 'https://cgscopus.com/index.php/journals/article/view/409' },
    ],
  },
];
