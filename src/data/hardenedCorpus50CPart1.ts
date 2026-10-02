import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50CPart1 = [
  makeHardenedBatchFilm({
    title: 'Karuppu', year: 2026, language: 'Tamil', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 2, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Karuppasamy', 'Tamil guardian deity', 'Devotion', 'Justice', 'Local roots'],
    reasons: [
      'Karuppasamy is not decorative mythology: the guardian deity answers a devotee’s plea, enters the human world and becomes the story’s active force for justice and protection.',
      'The film treats Tamil village-deity tradition with affirmation and dignity while linking faith to duty toward ordinary people rather than to contempt for another community.'
    ],
    evidence: [
      { kind: 'review', source: 'India Today — Karuppu review', claim: 'Describes the film as a devotional commercial entertainer that glorifies Karuppusaami and holds him high.', url: 'https://www.indiatoday.in/movies/reviews/story/karuppu-review-suriya-rj-balaji-nostalgic-amman-films-2912258-2026-05-15' },
      { kind: 'review', source: 'Indian Express — Karuppu review', claim: 'Describes Karuppuswamy answering a helpless devotee’s prayer and taking human form to confront corruption in the legal system.', url: 'https://indianexpress.com/article/entertainment/movie-review/karuppu-movie-review-suriya-sivakumar-is-in-top-form-but-the-film-around-him-is-not-10691088/' },
    ],
    filmUnderstanding: 'A devotional courtroom-masala story in which the Tamil guardian deity Karuppasamy manifests to protect vulnerable people and confront corruption.',
    researchFocus: 'Karuppasamy guardian deity devotional justice sacred representation Tamil folk tradition',
    redTeamChallenge: 'A commercial deity-as-superhero treatment could reduce living folk devotion to mass-cinema spectacle.',
    fact: 'Reviews consistently identify Karuppasamy as the literal guardian-deity protagonist and devotional faith as a central engine of the plot.',
    interpretation: 'Because the deity is granted moral authority, efficacy and reverence, the film carries unusually strong Sacred Regard, Parampara and Local Roots signals.',
    intent: 'The verdict does not infer the truth of supernatural events; it evaluates how the film represents the tradition on screen.'
  }),

  makeHardenedBatchFilm({
    title: 'A1: Accused No. 1', year: 2019, language: 'Tamil', status: 'not-certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 3, raksha: 1, socialDharma: 1, sacredRegard: 1, contemptRisk: 5 },
    tags: ['Brahmin representation', 'Caste stereotypes', 'Comedy', 'Community contempt'],
    reasons: [
      'The negative verdict is not for depicting an inter-caste romance or criticising caste prejudice; it is for repeatedly building comedy around caste-coded Brahmin identity, speech, food and purity stereotypes.',
      'Contemporary reviews and complaints independently identified the Brahmin portrayal as a material part of the film’s ridicule structure, crossing the line from criticism of a practice into generalized community stereotyping.'
    ],
    evidence: [
      { kind: 'review', source: 'The News Minute — A1 review', claim: 'Notes exaggerated Brahmin dialect and says stereotypes on both sides are cringeworthy, with the heroine defined through conspicuous Brahmin markers.', url: 'https://www.thenewsminute.com/article/a1-review-santhanams-comedy-film-half-boil-only-106183' },
      { kind: 'review', source: 'India Today — A1 teaser controversy', claim: 'Documents a complaint alleging the Brahmin community was depicted in a bad light, including the vegetarian/egg identity joke.', url: 'https://www.indiatoday.in/movies/regional-cinema/story/a1-teaser-sparks-controversy-complaint-filed-against-santhanam-1570794-2019-07-18' },
    ],
    filmUnderstanding: 'A caste-coded romantic comedy between a North Chennai man and a Mylapore Brahmin woman that uses identity stereotypes as recurring comic material.',
    researchFocus: 'Brahmin Iyengar dialect food purity stereotype ridicule inter-caste romance',
    redTeamChallenge: 'The film stereotypes both social groups, and satire of privileged caste hypocrisy can be a legitimate comic target rather than community hatred.',
    fact: 'Major reviews explicitly identify exaggerated Brahmin markers and contemporary objections to the community portrayal.',
    interpretation: 'The repetition and breadth of caste-coded jokes make community identity itself, rather than a specific harmful practice, a sustained object of ridicule.',
    intent: 'No claim of personal hostility by the filmmakers is required for a community-contempt finding; the screen treatment is sufficient.',
    risks: [{ id: 'community-contempt', summary: 'Recurring Brahmin-coded speech, food and purity stereotypes are used as a generalized comedy target rather than confined to criticism of a specific practice.', evidenceIndexes: [0, 1], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Kaala', year: 2018, language: 'Tamil', status: 'not-certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 2, parampara: 1, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 0, contemptRisk: 4 },
    tags: ['Dharavi', 'Land rights', 'Anti-caste', 'Ramayana inversion', 'Sacred valence'],
    reasons: [
      'The film’s defence of the urban poor and critique of caste hierarchy are legitimate Social Dharma signals and are not, by themselves, treated as anti-Hindu.',
      'The negative verdict comes from the sustained sacred-symbolic architecture that codes the antagonist through Rama/purity/saffron and the hero through Ravana, culminating in an explicit reversal in which the Rama-coded order falls and Ravana proliferates.'
    ],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Kaala review', claim: 'Details repeated Ramayana references: Hari calls Kaala Ravana, casts himself as Rama and the climax juxtaposes the ten heads of Ravana with the political conflict.', url: 'https://www.cinemaexpress.com/reviews/tamil/2018/Jun/07/kaala-review-an-important-work-by-a-filmmaker-whos-admirable-in-his-passion-for-social-change-6400.html' },
      { kind: 'review', source: 'The Week — Kaala review', claim: 'Reads the film’s symbolic design as Rama villain/Ravana hero and links its white/saffron imagery to the political conflict.', url: 'https://www.theweek.in/review/movies/2018/06/07/rajini-kaala-might-colours-but-not-saffron.html' },
      { kind: 'review', source: 'ThePrint — Kaala interpretation', claim: 'Provides the strongest counter-reading: the film is attacking Hindutva/fascism rather than Hinduism itself.', url: 'https://theprint.in/opinion/kaala-is-not-just-about-rajinikanth-it-is-about-land-fascism-ramayana-the-dalit-gaze/68907/' },
    ],
    filmUnderstanding: 'A Dharavi land-rights and anti-caste political drama that deliberately maps its conflict onto Ramayana and colour symbolism.',
    researchFocus: 'Rama Ravana Ramayana saffron Hindu sacred symbolism Hindutva land rights caste',
    redTeamChallenge: 'A strong good-faith reading says the Rama/Ravana imagery attacks Hindutva-style majoritarian politics, not Hindu belief or the Ramayana itself.',
    fact: 'Multiple contemporary reviews independently identify deliberate Rama-versus-Ravana coding and its inversion in the climax.',
    interpretation: 'Culture Check distinguishes political criticism from sacred contempt, but judges the repeated use of Rama-coded sacred imagery as the villainous moral pole to be a material negative sacred-valence choice.',
    intent: 'The verdict does not claim that Pa Ranjith intended hostility toward Hindus; it assesses the film’s symbolic valence and retains the anti-fascist counter-reading.',
    risks: [{ id: 'sacred-religious-valence', summary: 'The film repeatedly maps villainy, purity and domination onto Rama-coded imagery while affirmatively reversing the binary through Ravana in the climax.', evidenceIndexes: [0, 1, 2], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Mookuthi Amman', year: 2020, language: 'Tamil', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 4, raksha: 3, socialDharma: 4, sacredRegard: 5, contemptRisk: 1 },
    tags: ['Amman', 'Devotion', 'Godmen critique', 'Faith', 'Tamil roots'],
    reasons: [
      'The film attacks fraudulent godmen and religious commerce while making the goddess herself real, compassionate, effective and worthy of devotion; criticism of intermediaries is not treated as criticism of the sacred.',
      'Its satire repeatedly distinguishes faith from exploitation, allowing a positive sacred reading even when institutions and superstition are challenged.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Mookuthi Amman review', claim: 'The TV reporter receives direct help from Goddess Mookuthi Amman to expose a self-styled godman.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/mookuthi/movie-review/79221483.cms' },
      { kind: 'review', source: 'Scroll — Mookuthi Amman review', claim: 'Says the satire attacks fraudulent interpreters and godmen while the goddess is presented with warmth and divine efficacy.', url: 'https://scroll.in/reel/978502/scroll_in' },
    ],
    filmUnderstanding: 'A devotional satire in which an embodied goddess helps a struggling family and exposes a fraudulent godman.',
    researchFocus: 'Amman goddess fake godman blind faith religion politics satire sacred regard',
    redTeamChallenge: 'The film jokes about miracles, religious commerce and blind faith, which could be read as disrespectful toward devotional practice.',
    fact: 'The goddess is a real active character within the film and the antagonist is a fraudulent intermediary, not the deity or devotion itself.',
    interpretation: 'The distinction between sacred faith and exploitative godmanship is strong enough to support certification rather than treating all religious satire as anti-Hindu.',
    intent: 'No broader claim about the filmmakers’ theology is inferred.'
  }),

  makeHardenedBatchFilm({
    title: 'Jai Bhim', year: 2021, language: 'Tamil', status: 'mixed', sourceBasis: 'true-story',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 3, itihasa: 3, parampara: 1, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Irular', 'Justice', 'Custodial violence', 'True story', 'Identity controversy'],
    reasons: [
      'The defence of an Irular family against custodial abuse is a strong justice-and-protection signal grounded in a real case and the constitutional promise of equal dignity.',
      'The film also introduced a contested community marker around the abusive police character that was not part of the real officer’s identity, so the positive Social Dharma reading must sit beside a material identity-representation caveat.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Jai Bhim review', claim: 'Describes the film’s basis in the real custodial-abuse case and its focus on Irular vulnerability and justice.', url: 'https://indianexpress.com/article/entertainment/movie-review/jai-bhim-review-suriya-delivers-a-powerful-film-on-discrimination/lite/' },
      { kind: 'review', source: 'Indian Express — Jai Bhim case quashed', claim: 'Documents the Vanniyar controversy over an inserted Agni Kundam symbol and notes the FIR was later quashed.', url: 'https://indianexpress.com/article/entertainment/tamil/case-against-suriyas-jai-bhim-quashed-8085050/' },
    ],
    filmUnderstanding: 'A dramatized true-case legal drama about an Irular woman seeking justice after custodial torture and death, with a later dispute over community coding of a police antagonist.',
    researchFocus: 'Irular Rajakannu Chandru Vanniyar Agni Kundam real officer identity custodial violence',
    redTeamChallenge: 'The film’s social-justice force is weakened by assigning a community-coded symbol to a villain when that identity was disputed as historically inaccurate.',
    fact: 'The central custodial-abuse case is real; the community marker shown in the film became a documented dispute and legal controversy.',
    interpretation: 'Justice for an Adivasi family remains a strong positive signal, but identity substitution around a villain prevents an uncomplicated certification.',
    intent: 'The quashing of the FIR means Culture Check does not infer unlawful intent; it records the representational choice and its effect.',
    risks: [
      { id: 'identity-substitution', summary: 'A community-associated symbol was added to the abusive police character despite a dispute that the real officer did not belong to that community.', evidenceIndexes: [1], materiality: 'high' },
      { id: 'community-contempt', summary: 'The disputed symbol created a plausible community-directed negative association even though the wider film targets custodial abuse rather than the community as a whole.', evidenceIndexes: [1], materiality: 'medium' }
    ]
  }),

  makeHardenedBatchFilm({
    title: 'Karnan', year: 2021, language: 'Tamil', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 2, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 5, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Caste oppression', 'Village resistance', 'Mahabharata allusion', 'Local deity'],
    reasons: [
      'The film is deeply rooted in village life and frames resistance to humiliation and denial of basic civic dignity as a matter of collective protection and social dharma.',
      'Its dense epic and deity symbolism is deliberately revisionist rather than straightforwardly devotional, so the cultural signal is powerful but contested rather than uniformly affirmative.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Karnan review', claim: 'Describes the film as an emotionally and visually grounded account of generations subjected to caste oppression and village resistance.', url: 'https://indianexpress.com/article/entertainment/movie-review/karnan-movie-review-dhanush-mari-selvaraj-deliver-perfect-tamil-cinema-of-2021-7266601/' },
      { kind: 'review', source: 'Wikipedia — Karnan film overview', claim: 'Provides plot and production context for the fictional village story and its cultural symbolism.', url: 'https://en.wikipedia.org/wiki/Karnan_(2021_film)' },
    ],
    filmUnderstanding: 'A village-resistance drama about caste humiliation, state violence and collective assertion, layered with epic, folk and deity imagery.',
    researchFocus: 'Mahabharata Karnan Draupadi Krishna local deity caste symbolism village resistance',
    redTeamChallenge: 'Epic names and inversions can be read as using sacred material mainly as political counter-symbolism rather than as reverent continuity.',
    fact: 'The film is fictional but consciously uses epic and folk symbols within an anti-caste resistance narrative.',
    interpretation: 'The result combines strong Social Dharma and Local Roots with a more contested sacred-symbolic register.',
    intent: 'No claim is made that the filmmaker rejects the epics or local religion as such.'
  }),

  makeHardenedBatchFilm({
    title: 'Pariyerum Perumal', year: 2018, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Anti-caste', 'Dignity', 'Tirunelveli', 'Education', 'Social dharma'],
    reasons: [
      'Its core moral demand is equal human dignity in the face of caste humiliation, and the protagonist repeatedly chooses education, restraint and survival over revenge.',
      'The film’s criticism is directed at caste domination and honour violence rather than generalized ridicule of Hindus or a named caste community, which matters under the symmetric contempt gate.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — South Stream: Pariyerum Perumal', claim: 'Describes the film as an uncompromising exposure of caste hegemony while emphasizing the protagonist’s refusal of easy revenge.', url: 'https://indianexpress.com/article/entertainment/web-series/south-stream-pariyerum-perumal-5834767/' },
      { kind: 'review', source: 'The News Minute — Pariyerum Perumal review', claim: 'Frames the film as a major work revising Tamil cinema’s treatment of caste and social inequality.', url: 'https://www.thenewsminute.com/flix/pariyerum-perumal-review-mari-selvaraj-s-film-effortlessly-brilliant-89102' },
    ],
    filmUnderstanding: 'A Tirunelveli-set coming-of-age and inter-caste story about a Dalit law student facing humiliation, violence and structural discrimination.',
    researchFocus: 'caste dignity inter-caste love community portrayal religion Tirunelveli social justice',
    redTeamChallenge: 'The opening declaration that caste and religion are against humanity can be read as an undifferentiated rejection of inherited religious society.',
    fact: 'The narrative targets caste domination, honour violence and unequal treatment rather than using sacred figures or an entire faith as its contempt object.',
    interpretation: 'A strong Social Dharma reading is compatible with a Bharatiya lens when reform and human dignity are not conflated with civilizational contempt.',
    intent: 'The certification is not an endorsement of every political formulation in the film.'
  }),

  makeHardenedBatchFilm({
    title: 'Maamannan', year: 2023, language: 'Tamil', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 1, localRoots: 4, raksha: 3, socialDharma: 5, sacredRegard: 2, contemptRisk: 2 },
    tags: ['Anti-caste', 'Political power', 'Representation', 'Tamil politics'],
    reasons: [
      'The demand that a Dalit elected representative be accorded basic dignity is a clear Social Dharma signal, and the film also criticizes hypocrisy inside a party that publicly claims social justice.',
      'Its upper-caste antagonist is written with limited nuance and the film is openly partisan in its political architecture, so the social-justice signal is stronger than its broader civilizational balance.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Maamannan review', claim: 'Identifies the central conflict as denial of basic respect to an oppressed-caste elected representative and criticizes the one-dimensional antagonist.', url: 'https://indianexpress.com/article/entertainment/movie-review/maamannan-review-a-well-meaning-but-rudimentary-film-from-mari-selvaraj-8692260/' },
      { kind: 'review', source: 'Indian Express — Maamannan antagonist reaction', claim: 'Explains that the film depicts Rathnavelu as a casteist villain even though some online audiences later glorified him.', url: 'https://indianexpress.com/article/entertainment/tamil/celebration-of-fahadh-faasils-casteist-antagonist-from-maamannan-is-a-tragic-and-unintended-outcome-8871037/' },
    ],
    filmUnderstanding: 'An anti-caste political drama about dignity, party power and an oppressed-caste MLA confronting an upper-caste district strongman.',
    researchFocus: 'caste antagonist community generalization DMK political symbolism social justice',
    redTeamChallenge: 'The antagonist’s thin construction risks making upper-caste identity itself feel synonymous with cruelty rather than distinguishing a specific power structure.',
    fact: 'The film explicitly frames its antagonist as a casteist political actor and its protagonists as fighting denial of equal status.',
    interpretation: 'The film’s reformist justice axis is positive, but its reductive political character writing supports a Mixed rather than Certified verdict.',
    intent: 'Audience glorification of the villain is recorded as reception, not attributed to the filmmaker’s intent.'
  }),

  makeHardenedBatchFilm({
    title: 'Draupathi', year: 2020, language: 'Tamil', status: 'not-certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 3, raksha: 2, socialDharma: 0, sacredRegard: 2, contemptRisk: 5 },
    tags: ['Caste propaganda', 'Dalit representation', 'Endogamy', 'Community contempt'],
    reasons: [
      'The film generalizes a marriage-fraud narrative onto a lower-caste community and repeatedly associates that community with predation, manipulation and criminality.',
      'Defence of family or tradition cannot qualify as Dharma when it depends on degrading another Indian community; the symmetric contempt gate therefore outweighs any claimed rootedness.'
    ],
    evidence: [
      { kind: 'review', source: 'The News Minute — Draupathi review', claim: 'Documents the repeated coding of Dalit men and women as a predatory community and calls the film explicitly casteist.', url: 'https://www.thenewsminute.com/article/draupathi-review-vile-casteist-film-should-have-never-been-made-119153' },
      { kind: 'review', source: 'Times of India — Draupathi review', claim: 'Notes the film’s caste markers and controversial message-heavy second half, providing a less hostile counter-reading than TNM.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/draupathi/movie-review/74339447.cms' },
    ],
    filmUnderstanding: 'A vigilante drama built around alleged fraudulent inter-caste marriages and family honour, with strong caste-coded villains.',
    researchFocus: 'Dalit Vanniyar inter-caste marriage honour community stereotype Ambedkar symbols',
    redTeamChallenge: 'Supporters read the film as exposing a specific marriage-registration fraud rather than attacking Dalits generally.',
    fact: 'The narrative repeatedly links the alleged fraud to recognizable Dalit-coded symbols and characters rather than confining wrongdoing to isolated individuals.',
    interpretation: 'The breadth and repetition of group coding make community contempt materially central to the film’s message.',
    intent: 'The verdict does not require proof of the director’s personal prejudice; it evaluates the generalized screen portrayal.',
    risks: [{ id: 'community-contempt', summary: 'A lower-caste community is repeatedly coded as predatory, fraudulent and criminal in a way that generalizes beyond individual antagonists.', evidenceIndexes: [0, 1], materiality: 'high' }]
  }),

  makeHardenedBatchFilm({
    title: 'Rudra Thandavam', year: 2021, language: 'Tamil', status: 'not-certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 3, localRoots: 3, raksha: 2, socialDharma: 0, sacredRegard: 3, contemptRisk: 5 },
    tags: ['Caste propaganda', 'Conversion', 'Dalit representation', 'Christian representation', 'Community contempt'],
    reasons: [
      'A film can criticize coercive conversion or misuse of law without penalty, but this narrative repeatedly codes Dalit and Christian-linked characters as morally suspect while using exceptional abuses to discredit wider protections and social-justice claims.',
      'A pro-Hindu or anti-conversion posture does not earn certification when it violates the same community-contempt standard applied to anti-Brahmin or anti-Hindu films.'
    ],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Rudra Thandavam review', claim: 'Finds the film uses system loopholes to vilify victims of caste oppression and mounts a broad anti-conversion agenda.', url: 'https://www.cinemaexpress.com/tamil/review/2021/Oct/01/rudra-thaandavam-movie-review-better-craft-better-cast-and-yet-similar-problems-27028.html' },
      { kind: 'review', source: 'The News Minute — Rudra Thandavam and caste propaganda', claim: 'Describes the film as Vanniyar caste-pride propaganda and notes Dalit characters are repeatedly shown as drug peddlers or abusers.', url: 'https://www.thenewsminute.com/tamil-nadu/rudra-thandavam-new-age-propaganda-films-promoting-caste-pride-tamil-cinema-154486' },
    ],
    filmUnderstanding: 'A police-and-courtroom drama combining anti-conversion politics with claims about misuse of caste-protection laws and caste-coded criminality.',
    researchFocus: 'Dalit Christian conversion PCR Act caste stereotype Vanniyar community contempt',
    redTeamChallenge: 'The film can be read as criticizing coercive conversion and abuse of legal protections rather than every Dalit or Christian person.',
    fact: 'Major reviews identify repeated negative group coding that goes beyond a single corrupt converter or criminal.',
    interpretation: 'Culture Check applies a symmetric rule: affirmation of one community cannot be built through generalized contempt for another.',
    intent: 'The verdict addresses representation, not the legitimacy of debating conversion policy.',
    risks: [{ id: 'community-contempt', summary: 'Dalit and Christian-linked identities are repeatedly associated with criminality, manipulation or illegitimate grievance beyond individualized wrongdoing.', evidenceIndexes: [0, 1], materiality: 'high' }]
  }),
];
