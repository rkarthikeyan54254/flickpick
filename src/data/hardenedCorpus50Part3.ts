import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50Part3: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Drishyam', year: 2013, language: 'Malayalam', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 5, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Protection', 'Moral ambiguity', 'Kerala'],
    reasons: [
      'The film’s emotional centre is a Kerala family and a father’s determination to protect wife and daughters from catastrophic consequences, giving Raksha and Local Roots genuine weight.',
      'That protection is achieved through elaborate deception and concealment of a death, making the moral architecture intentionally ambiguous; Mixed / Contested is therefore more accurate than treating family loyalty as an automatic certification.'
    ],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Jeethu Joseph on Drishyam origin', claim: 'Joseph describes the long-gestating idea, script development and alternate climax behind the fictional story.', url: 'https://indianexpress.com/article/entertainment/malayalam/jeethu-joseph-on-25-year-old-chat-that-inspired-drishyam-reveals-original-climax-families-meeting-at-grave-rewrote-script-10255351/' },
      { kind: 'review', source: 'Times of India — Drishyam review', claim: 'Reviews the family-protection thriller and its moral and procedural turns.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/Drishyam/movie-review/27751094.cms' }
    ],
    filmUnderstanding: 'A Malayalam family thriller about a father constructing an elaborate alibi after his family becomes involved in the death of a young man who had sexually blackmailed his daughter.',
    researchFocus: 'family protection blackmail police alibi morality Kerala',
    redTeamChallenge: 'The film’s sympathy for the family can normalise obstruction, destruction of evidence and manipulation of institutions in the name of protection.',
    fact: 'The plot and family are fictional; the ethical conflict is intentionally constructed around protection versus truth and law.',
    interpretation: 'Raksha is strong, but Dharma and Social Dharma are complicated by sustained deception, supporting a mixed rather than unqualified verdict.',
    intent: 'No claim is made that the film advocates real-world concealment of crime as a general social norm.'
  }),

  makeHardenedBatchFilm({
    title: 'Ustad Hotel', year: 2012, language: 'Malayalam', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 2, itihasa: 1, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Kerala roots', 'Food tradition', 'Service', 'Family'],
    reasons: [
      'The film links food, family inheritance, local place and service to others, presenting work and hospitality as responsibilities rather than mere status or consumption.',
      'Its Muslim family setting is treated as an ordinary and rooted part of Kerala life, while the grandfather’s ethic of feeding people gives Dharma and Social Dharma unusually strong weight.'
    ],
    evidence: [
      { kind: 'interview', source: 'Times of India — Anjali Menon on Ustad Hotel', claim: 'Menon discusses the story’s food, relationships and cultural setting and how a biryani can carry human connection.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movies/news/a-lot-can-happen-over-a-biryani/articleshow/13006456.cms' },
      { kind: 'review', source: 'Wikipedia — Ustad Hotel', claim: 'Records the Malayalam family drama about an aspiring chef and his grandfather’s Kozhikode restaurant.', url: 'https://en.wikipedia.org/wiki/Ustad_Hotel' }
    ],
    filmUnderstanding: 'A Malayalam coming-of-age family drama about a young chef returning to Kozhikode and learning from his grandfather’s modest restaurant and ethic of feeding people.',
    researchFocus: 'Kozhikode Muslim family biryani hospitality service Kerala',
    redTeamChallenge: 'The warm family-and-food ethic could be sentimentalised, and patriarchal family expectations remain part of the story’s background.',
    fact: 'The characters and restaurant are fictional within a recognisably Kozhikode cultural setting.',
    interpretation: 'Local food culture, intergenerational transmission and service to people reinforce rather than undermine each other.',
    intent: 'No broader communal claim is inferred from the Muslim family setting.'
  }),

  makeHardenedBatchFilm({
    title: 'Manichitrathazhu', year: 1993, language: 'Malayalam', status: 'certified', sourceBasis: 'mixed-unknown',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 3, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Kerala tradition', 'Psychology', 'Sacred valence', 'Family'],
    reasons: [
      'The film places Kerala architecture, oral memory, ritual, music and family tradition inside a psychologically sophisticated story without simply ridiculing sacred or inherited belief.',
      'Its eventual psychiatric explanation coexists with the household’s ritual language, allowing rational inquiry and cultural continuity to share the narrative rather than forcing one to humiliate the other.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Manichitrathazhu review', claim: 'Reassesses Fazil’s psychological thriller, its Kerala setting, Shobana’s performance and the balance of supernatural atmosphere with psychiatric explanation.', url: 'https://indianexpress.com/article/entertainment/movie-review/manichitrathazhu-movie-review-rating-fazil-psychological-thriller-mohanlal-shobana-masterpiece-malayalam-cinema-9518633/' },
      { kind: 'review', source: 'Indian Express — Malayalam horror context', claim: 'Places Manichitrathazhu within Malayalam cinema’s distinctive treatment of haunting, psychology and domestic cultural spaces.', url: 'https://indianexpress.com/article/express-sunday-eye/bhoothakalam-horror-movie-malayalam-revathy-7746772/lite/' }
    ],
    filmUnderstanding: 'A Malayalam psychological thriller set in an old Kerala household where a woman’s dissociative condition becomes entangled with family legends, dance, ritual and a supposedly haunted room.',
    researchFocus: 'Kerala family legend psychology dissociative disorder ritual Nagavalli',
    redTeamChallenge: 'The film’s mental-health diagnosis and theatrical treatment can be dated or clinically imprecise, while its supernatural atmosphere may blur belief and illness.',
    fact: 'The story is fictionalised and resolves the central possession-like behaviour through a psychiatric explanation inside a culturally traditional setting.',
    interpretation: 'The film does not need to choose contempt for ritual in order to affirm psychological explanation, which supports a positive sacred/civilizational reading.',
    intent: 'No claim is made that ritual alone cures psychiatric illness or that the film provides clinical guidance.',
    risks: [{ id: 'sacred-religious-valence', summary: 'Ritual and inherited belief are central but coexist with psychiatric explanation rather than being treated as the sole causal account.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Take Off', year: 2017, language: 'Malayalam', status: 'certified', sourceBasis: 'true-story',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 4, itihasa: 4, parampara: 2, localRoots: 4, raksha: 5, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Nurses', 'Iraq evacuation', 'Kerala', 'Raksha'],
    reasons: [
      'The film gives dignity to Indian nurses working abroad and centres family duty, professional service, rescue and the effort of Indian officials to bring citizens home from a war zone.',
      'Because it fictionalises and condenses the real 2014 Tikrit evacuation, the positive verdict retains a Narrative Integrity warning rather than treating its composite characters as literal history.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Take Off review', claim: 'Reviews the film as a tense drama inspired by the Indian nurses trapped in Iraq and the effort to rescue them.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/take-off/movie-review/57809221.cms' },
      { kind: 'review', source: 'Wikipedia — Take Off', claim: 'Records the film as inspired by the 2014 ordeal and evacuation of Indian nurses in Tikrit, Iraq.', url: 'https://en.wikipedia.org/wiki/Take_Off_(2017_film)' }
    ],
    filmUnderstanding: 'A Malayalam survival-and-rescue drama inspired by Indian nurses trapped in conflict-ridden Iraq, using fictional/composite characters to dramatise their ordeal and evacuation.',
    researchFocus: '2014 Tikrit Indian nurses Iraq evacuation diplomats true story',
    redTeamChallenge: 'Composite characters and compressed diplomacy can distort the distribution of real credit across nurses, diplomats and governments.',
    fact: 'Indian nurses were trapped and evacuated from Iraq in 2014; the feature film fictionalises personal stories and operational details.',
    interpretation: 'The adaptation caveat is separate from the film’s strong service, family and rescue orientation.',
    intent: 'The film is treated as inspired-by-real-events drama, not as a documentary roster of individual contributions.',
    risks: [
      { id: 'source-adaptation', summary: 'A real evacuation is condensed into fictional/composite character arcs.', evidenceIndexes: [0,1], materiality: 'high' },
      { id: 'real-person-attribution', summary: 'The rescue effort’s participants and credit are simplified for dramatic storytelling.', evidenceIndexes: [0,1], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'adaptation-delta', status: 'supported', summary: 'The real Tikrit evacuation is substantially condensed into a feature-film narrative.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Bangaarada Manushya', year: 1972, language: 'Kannada', status: 'certified', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 2, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Kannada roots', 'Agriculture', 'Family duty', 'Rural life'],
    reasons: [
      'The film places agriculture, family obligation, village uplift and productive rootedness at the centre of a respected Kannada cultural classic, strongly supporting Local Roots, Parampara and Social Dharma.',
      'Its rural idealism may simplify economic hardship, but it does not treat village life as something to escape or despise; responsibility to land and kin is the aspirational core.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Bangaarada Manushya', claim: 'Records the Rajkumar film as an adaptation of T. K. Rama Rao’s novel centred on a man who returns to family and agricultural life.', url: 'https://en.wikipedia.org/wiki/Bangaarada_Manushya' },
      { kind: 'review', source: 'Kannada Filmibeat — Bangara cultural retrospective', claim: 'Discusses the enduring Kannada association of the Bangarada Manushya tradition with farming and agrarian pride.', url: 'https://kannada.filmibeat.com/reviews/shiva-rajkumar-starrer-bangara-s-o-bangarada-manushya-critics-review-024936.html' }
    ],
    filmUnderstanding: 'A Kannada rural-family drama adapted from a novel, following Rajeeva as he gives up urban prospects to support relatives and build an agricultural life.',
    researchFocus: 'T K Rama Rao novel agriculture Kannada rural family Rajkumar',
    redTeamChallenge: 'The film’s agrarian ideal can romanticise village economics and self-sacrifice while underplaying structural hardship.',
    fact: 'The film adapts a Kannada novel and uses fictional characters to tell a rural family-and-agriculture story.',
    interpretation: 'Its aspirational attachment to land, kin and productive duty is a strong rooted Bharatiya signal despite idealisation.',
    intent: 'No claim is made that the film offers a complete economic model for rural development.',
    risks: [{ id: 'source-adaptation', summary: 'The film adapts T. K. Rama Rao’s novel into a popular-cinema rural drama.', evidenceIndexes: [0], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Mungaru Male', year: 2006, language: 'Kannada', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada romance', 'Landscape', 'Local roots', 'Neutral'],
    reasons: [
      'The film is strongly identified with Kannada language, landscape, rain and regional popular culture, giving it meaningful Local Roots.',
      'Its central concerns are romantic longing and sacrifice rather than national, sacred or civilizational questions, so cultural rootedness alone does not justify Sanghi Certified.'
    ],
    evidence: [
      { kind: 'review', source: 'Wikipedia — Mungaru Male', claim: 'Records the Kannada romantic drama and its importance in modern Kannada popular cinema.', url: 'https://en.wikipedia.org/wiki/Mungaru_Male' },
      { kind: 'review', source: 'Cinema Express — Kannada romantic cinema context', claim: 'Discusses the continuing influence of Yogaraj Bhat’s romantic and landscape-driven Kannada cinema including Mungaru Male.', url: 'https://www.cinemaexpress.com/kannada/review/2025/Mar/29/manada-kadalu-movie-review-philosophically-deep-but-struggles-to-anchor-emotionally' }
    ],
    filmUnderstanding: 'A Kannada romantic drama built around unrequited love, emotional sacrifice and the rain-soaked landscapes that became central to its cultural identity.',
    researchFocus: 'Kannada romance Coorg Jog Falls rain regional popular culture',
    redTeamChallenge: 'Its iconic regional status can tempt the classifier to confuse popularity and landscape rootedness with substantive Bharatiya alignment.',
    fact: 'The story is fictional and became a major Kannada popular-culture success.',
    interpretation: 'Regional rootedness is genuine but the ideological/civilizational signal remains low, supporting Neutral.',
    intent: 'No larger cultural programme is inferred from a romantic genre film.'
  }),

  makeHardenedBatchFilm({
    title: 'Ulidavaru Kandante', year: 2014, language: 'Kannada', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 2, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Tulunadu', 'Udupi', 'Huli Vesha', 'Local roots'],
    reasons: [
      'The film’s Rashomon-like crime story is inseparable from coastal Karnataka/Tulunadu language, fisherfolk, Huli Vesha and Udupi cultural texture, making regional rootedness a structural part of the work.',
      'Its characters are morally ambiguous, but the culture itself is not flattened or mocked; local forms are allowed to exist on their own terms, supporting Civilizational Continuity and Parampara.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — 10 years of Ulidavaru Kandante', claim: 'Retrospective explicitly discusses Tulunadu, Udupi, Huli Vesha, fisherfolk and the first-time team behind the cult film.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movies/news/ulidavaru-kandante-was-a-cult-classic-built-by-first-timers-10-years-of-ulidavaru-kandante/amp_articleshow/108918037.cms' },
      { kind: 'review', source: 'Times of India — Ulidavaru Kandante review', claim: 'Reviews the nonlinear coastal-Karnataka crime narrative and its strongly local setting.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/ulidavaru-kandante/movie-review/32916719.cms' }
    ],
    filmUnderstanding: 'A nonlinear Kannada crime drama told through competing perspectives in coastal Karnataka, saturated with Tulunadu/Udupi social and festival culture.',
    researchFocus: 'Tulunadu Udupi huli vesha fisherfolk coastal Karnataka culture',
    redTeamChallenge: 'Crime and masculine violence could dominate the reading so strongly that cultural texture is mistaken for a moral endorsement of the characters.',
    fact: 'The plot is fictional while its coastal Karnataka cultural setting and practices are real regional references.',
    interpretation: 'The certification rests on unflattened regional representation and cultural self-possession, not on the moral behaviour of every character.',
    intent: 'No claim is made that the film presents an idealised picture of Tulunadu society.'
  }),

  makeHardenedBatchFilm({
    title: 'RangiTaranga', year: 2015, language: 'Kannada', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kannada roots', 'Coastal folklore', 'Mystery', 'Parampara'],
    reasons: [
      'The mystery is built from a recognisably Kannada/coastal cultural landscape, ancestral memory, local custom and folklore rather than using regional culture as interchangeable exotic decoration.',
      'The film ultimately operates as genre entertainment, but its cultural grammar is internally respected and materially shapes the plot, supporting Local Roots and Parampara.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — RangiTaranga review', claim: 'Reviews the mystery thriller’s ancestral-village setting, local legends and layered Kannada narrative.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/RangiTaranga/movie-review/47945555.cms' },
      { kind: 'interview', source: 'Times of India — Anup Bhandari interview', claim: 'Bhandari discusses the film and his connection to the Kannada cultural environment in which he made it.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movies/news/Its-hard-to-away-from-my-family-Anup-Bhandari/articleshow/47480379.cms' }
    ],
    filmUnderstanding: 'A Kannada mystery thriller whose investigation leads into an ancestral village, folk beliefs, family secrets and a strongly regional visual-cultural setting.',
    researchFocus: 'coastal Karnataka folklore ancestral village yakshagana local customs',
    redTeamChallenge: 'Regional folklore can be used as atmospheric exoticism without deeper respect or accuracy.',
    fact: 'The story is fictional while drawing on recognisable Kannada regional aesthetics and folk-cultural references.',
    interpretation: 'Local cultural material is plot-bearing and respectfully integrated rather than merely ridiculed or discarded.',
    intent: 'No claim is made that every fictional rite or legend maps directly to a living practice.'
  }),

  makeHardenedBatchFilm({
    title: 'Ondu Motteya Kathe', year: 2017, language: 'Kannada', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Mangaluru Kannada', 'Body image', 'Local roots', 'Neutral'],
    reasons: [
      'The film’s Mangaluru/Kannada setting and speech are important to its identity, and its humane treatment of appearance, loneliness and dignity gives it Social Dharma value.',
      'Its concerns remain primarily personal and social rather than civilizational or national, so Neutral is more precise than treating regional language alone as certification.'
    ],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Ondu Motteya Kathe interview', claim: 'Discusses the film’s body-image theme and the idea that beauty is superficial.', url: 'https://www.cinemaexpress.com/stories/interviews/2017/Jul/04/egghead-movie-says-beauty-is-but-shell-deep-931.html' },
      { kind: 'review', source: 'Times of India — Ondu Motteya Kathe review', claim: 'Reviews the Kannada comedy-drama about a balding lecturer, loneliness and self-worth.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movie-reviews/ondu-motteya-kathe/movie-review/59469085.cms' },
      { kind: 'review', source: 'Times of India — Mangaluru language context', claim: 'Notes the film’s use of Mangaluru-flavoured Kannada and regional speech.', url: 'https://timesofindia.indiatimes.com/entertainment/kannada/movies/news/ready-to-connect-with-ondu-motteya-kathe/articleshow/59475063.cms' }
    ],
    filmUnderstanding: 'A Kannada comedy-drama about a balding Mangaluru lecturer confronting rejection, insecurity and his own superficial expectations of partners.',
    researchFocus: 'Mangaluru Kannada dialect body image dignity regional setting',
    redTeamChallenge: 'A humane social comedy should not be overclassified as civilizationally aligned merely because it is regionally specific.',
    fact: 'The story is fictional and intentionally uses Mangaluru-inflected Kannada and local context.',
    interpretation: 'The film earns Social Dharma and Local Roots credit while remaining overall Neutral on the certification axis.',
    intent: 'No broader ideological message is inferred beyond the explicit critique of appearance-based judgement.'
  }),

  makeHardenedBatchFilm({
    title: 'Kavaludaari', year: 2019, language: 'Kannada', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 2, parampara: 1, localRoots: 4, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Kannada', 'Crime', 'Institutional ethics', 'Neutral'],
    reasons: [
      'The film treats truth-seeking, police responsibility and consequences of buried wrongdoing seriously inside a distinctly Bengaluru/Kannada noir setting.',
      'Its institutional critique is ethically engaged but not strongly directional on civilizational, sacred or national questions, making Reviewed · Neutral the disciplined result.'
    ],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Kavaludaari review', claim: 'Reviews Hemanth M. Rao’s investigative thriller and its layered moral choices.', url: 'https://www.cinemaexpress.com/reviews/kannada/2019/apr/12/kavaludaari-review-hemanth-m-raos-film-takes-perfect-decisions-at-every-junction-11019.html' },
      { kind: 'review', source: 'Indian Express — Kavaludaari review', claim: 'Assesses the Bengaluru-set mystery, policing and investigation at the centre of the film.', url: 'https://indianexpress.com/article/entertainment/movie-review/kavaludaari-movie-review-rating-5673299/' }
    ],
    filmUnderstanding: 'A Kannada investigative noir about a traffic policeman who becomes obsessed with skeletal remains and uncovers an old political-criminal secret.',
    researchFocus: 'Bengaluru police investigation corruption Kannada noir institutional ethics',
    redTeamChallenge: 'Institutional corruption could be misread either as anti-state messaging or, in the opposite direction, as sufficient patriotism for certification.',
    fact: 'The case and characters are fictional.',
    interpretation: 'Ethical truth-seeking is positive, but the film remains primarily a crime drama rather than a strong Bharatiya-directional work.',
    intent: 'No anti-national intent is inferred from criticism of corrupt individuals or institutions.'
  })
];