import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50BPart2: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Super Deluxe', year: 2019, language: 'Tamil', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 2, contemptRisk: 1 },
    tags: ['Tamil', 'Family', 'Gender', 'Moral pluralism'],
    reasons: ['The film’s multiple Chennai/Tamil stories repeatedly ask whether compassion and responsibility can survive shame, sexuality, crime and social judgement.', 'Its treatment of religion, gender identity, family and morality is deliberately irreverent and plural rather than consistently affirming inherited norms, making Mixed / Contested the most faithful label.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Super Deluxe review', claim: 'Describes the interlinked stories, family crises, transgender parent and morally unstable urban world.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/super-deluxe/movie-review/68623088.cms' },
      { kind: 'review', source: 'Indian Express — Super Deluxe review', claim: 'Reviews the film’s multiple moral, sexual, religious and family provocations and its refusal of easy judgement.', url: 'https://indianexpress.com/article/entertainment/movie-review/super-deluxe-movie-review-rating-5648634/' }
    ],
    filmUnderstanding: 'An anthology-like Tamil drama connecting several families and outsiders over one chaotic day, including a transgender parent returning home and characters facing sex, crime, faith and shame.',
    researchFocus: 'transgender family religion morality Tamil urban social judgement',
    redTeamChallenge: 'Irreverence toward religion or family norms could amount to civilizational contempt rather than merely plural moral inquiry.',
    fact: 'The film is original fiction and intentionally juxtaposes conflicting moral worlds.',
    interpretation: 'Compassion and family responsibility remain meaningful, but inherited norms are also challenged hard enough to prevent clean certification.',
    intent: 'No single character’s provocation is treated as proof of the filmmaker’s hostility to Hindu or Tamil culture.'
  }),
  makeHardenedBatchFilm({
    title: 'Peranbu', year: 2019, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Dharma', 'Father-daughter', 'Disability', 'Tamil roots'],
    reasons: ['A father’s difficult, sustained responsibility toward his daughter with cerebral palsy is the film’s moral core, giving Dharma and Social Dharma unusually strong weight.', 'The film confronts sexuality, disability and social discomfort without treating family obligation as a burden to discard; care deepens rather than dissolves the relationship.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Peranbu review', claim: 'Centres the film on Amudhavan’s care for his daughter Paapa and the challenges surrounding disability and adolescence.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/peranbu/movie-review/67750595.cms' },
      { kind: 'review', source: 'Indian Express — Peranbu review', claim: 'Reviews the father-daughter relationship and the film’s compassionate engagement with disability, sexuality and social exclusion.', url: 'https://indianexpress.com/article/entertainment/movie-review/peranbu-movie-review-rating-mammootty-ram-5562395/' }
    ],
    filmUnderstanding: 'A Tamil father-daughter drama about a man becoming the primary caregiver for his daughter with cerebral palsy and learning to meet her emotional and physical needs.',
    researchFocus: 'father daughter disability care sexuality family duty',
    redTeamChallenge: 'The film’s difficult material could be read as using disability for moral uplift or exposing family failure rather than affirming duty.',
    fact: 'The story is fictional and centres care within a family relationship.',
    interpretation: 'Its difficult questions strengthen rather than negate the sustained ethic of responsibility toward a vulnerable family member.',
    intent: 'No claim is made that one family’s experience represents all people with disabilities.'
  }),
  makeHardenedBatchFilm({
    title: 'Srimanthudu', year: 2015, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 3, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Local roots', 'Village adoption', 'Social Dharma', 'Telugu'],
    reasons: ['The hero rejects passive elite comfort and takes responsibility for his ancestral village, making local rootedness and service the central transformation.', 'Development is framed as returning wealth and capability to a community rather than escaping village life, giving Local Roots and Social Dharma decisive positive weight.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Srimanthudu review', claim: 'Summarises Harsha giving up inherited privilege to adopt his native village and work for its impoverished residents.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/srimanthudu-movie-review/movie-review/48404863.cms' },
      { kind: 'review', source: 'Wikipedia — Srimanthudu', claim: 'Records the fictional village-adoption premise and social-service arc of the Telugu film.', url: 'https://en.wikipedia.org/wiki/Srimanthudu' }
    ],
    filmUnderstanding: 'A Telugu social-action drama about a billionaire’s son who reconnects with his family’s native village and commits resources and personal effort to its development.',
    researchFocus: 'village adoption ancestral roots development social responsibility',
    redTeamChallenge: 'The saviour narrative may make villagers passive recipients of an elite hero’s benevolence.',
    fact: 'The story is fictional and does not document a specific real village-adoption project.',
    interpretation: 'Despite hero-centric commercial framing, responsibility to ancestral place and community is explicit and sustained.',
    intent: 'No real-world policy efficacy is inferred from the film’s development montage.'
  }),
  makeHardenedBatchFilm({
    title: 'Athadu', year: 2005, language: 'Telugu', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 3, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Crime', 'Telugu', 'Redemption'],
    reasons: ['The assassin’s temporary entry into a large family gives the film a meaningful arc around belonging, affection and moral change.', 'Those family signals are secondary to an action/crime plot and do not amount to a strong civilizational, sacred or national thesis, so Reviewed · Neutral avoids overclassification.'],
    evidence: [
      { kind: 'review', source: 'NowRunning — Athadu review', claim: 'Summarises the assassin assuming another man’s identity, entering his family and developing emotional ties while evading a murder conspiracy.', url: 'https://www.nowrunning.com/movie/2324/telugu/athadu/517/review.htm' },
      { kind: 'review', source: 'Wikipedia — Athadu', claim: 'Records the Telugu action-thriller premise, mistaken identity and family setting.', url: 'https://en.wikipedia.org/wiki/Athadu' }
    ],
    filmUnderstanding: 'A Telugu action thriller about a professional assassin who adopts the identity of a dead man and unexpectedly becomes part of that man’s extended family.',
    researchFocus: 'assassin mistaken identity family belonging redemption Telugu',
    redTeamChallenge: 'Warm family scenes could tempt a positive verdict even though the core plot remains criminal action fiction.',
    fact: 'The plot is wholly fictional.',
    interpretation: 'Family/belonging is morally important but not strong enough to turn a crime thriller into a directional Culture Check verdict.',
    intent: 'No approval of assassination or criminality is inferred from the protagonist’s charisma.'
  }),
  makeHardenedBatchFilm({
    title: 'C/o Kancharapalem', year: 2018, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Local roots', 'Kancharapalem', 'Social Dharma', 'Pluralism'],
    reasons: ['Kancharapalem itself is treated as a living community of work, devotion, caste, religion, age and relationships rather than interchangeable scenery.', 'The film challenges social barriers while retaining bhajans, burra katha, neighbourhood life and multiple religious worlds as lived local culture rather than objects of contempt.'],
    evidence: [
      { kind: 'review', source: 'Times of India — C/o Kancharapalem review', claim: 'Highlights the locality, non-professional/local cast and relationships across age, caste and religion.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/c/o-kancharapalem/amp_movie_review/65643361.cms' },
      { kind: 'review', source: 'Cinema Express — C/o Kancharapalem review', claim: 'Emphasises the film’s lived-in locality, ordinary people and rooted social texture.', url: 'https://www.cinemaexpress.com/amp/story/reviews/telugu/2018/Sep/07/co-kancharapalem-review-as-real-as-it-gets-7786.html' }
    ],
    filmUnderstanding: 'An ensemble Telugu drama built from several love stories across ages and communities in the Visakhapatnam neighbourhood of Kancharapalem.',
    researchFocus: 'Kancharapalem caste religion bhajans burra katha local community',
    redTeamChallenge: 'Criticism of caste/religious barriers could be misread as rejection of the community and traditions the film inhabits.',
    fact: 'The stories are fictional but filmed and cast to preserve the locality’s social texture.',
    interpretation: 'Reformist critique coexists with strong affection for local culture, supporting Local Roots and Social Dharma.',
    intent: 'No broad contempt for Hindu, Christian or Muslim identity is inferred from individual social barriers.'
  }),
  makeHardenedBatchFilm({
    title: 'Mahanati', year: 2018, language: 'Telugu', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 2, itihasa: 5, parampara: 4, localRoots: 4, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Itihasa', 'Telugu cinema', 'Biopic', 'Savitri'],
    reasons: ['The film restores Savitri and the Telugu/Tamil studio era to popular historical memory with sustained affection for regional cinema and artistic inheritance.', 'Gemini Ganesan’s family publicly disputed aspects of his portrayal, so biographical credit and private-life fidelity remain an explicit warning rather than being erased by certification.'],
    evidence: [
      { kind: 'review', source: 'The Week — Mahanati review', claim: 'Reviews the film as a biographical portrait of legendary actress Savitri and the South Indian studio era.', url: 'https://www.theweek.in/review/movies/2018/05/09/mahanti-review-biopic-legendary-actress-savitri-lights-up-stage.html' },
      { kind: 'interview', source: 'Indian Express — Gemini Ganesan’s daughter on Mahanati', claim: 'Records a family objection that Gemini Ganesan was not portrayed accurately and challenges research around the private-life depiction.', url: 'https://indianexpress.com/article/entertainment/telugu/gemini-ganesan-daughter-mahanati-kadhal-mannan-not-portray-accurately-5182161/lite/' }
    ],
    filmUnderstanding: 'A Telugu-Tamil biographical drama reconstructing actor Savitri’s rise, marriage, career, generosity and decline within mid-century South Indian cinema.',
    researchFocus: 'Savitri Gemini Ganesan biopic Telugu cinema historical accuracy family objections',
    redTeamChallenge: 'Heroic remembrance of Savitri may unfairly simplify or damage other real people, especially Gemini Ganesan.',
    fact: 'Savitri’s career and marriage to Gemini Ganesan are historical; private scenes, motives and interpersonal blame are reconstructed.',
    interpretation: 'Regional cinema memory is strongly affirmative, while disputed portrayal is a separate biographical-integrity issue.',
    intent: 'Family objections prevent inferring documentary certainty or hostile intent from dramatized private scenes.',
    risks: [
      { id: 'real-person-attribution', summary: 'A close family member publicly disputed the accuracy of Gemini Ganesan’s portrayal.', evidenceIndexes: [1], materiality: 'high' },
      { id: 'source-adaptation', summary: 'The biopic reconstructs private life and motives that cannot be verified scene by scene.', evidenceIndexes: [0, 1], materiality: 'medium' }
    ],
    integrityFlags: [{ type: 'biographical-credit', status: 'disputed', summary: 'Gemini Ganesan’s family challenged important aspects of the film’s private-life portrayal.' }]
  }),
  makeHardenedBatchFilm({
    title: 'Bommarillu', year: 2006, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 4, localRoots: 3, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Parent-child', 'Social Dharma', 'Telugu'],
    reasons: ['The film’s conflict is not family versus freedom in a simple sense; it asks a loving but controlling father to recognize an adult son’s agency while preserving reconciliation and affection.', 'The resolution reforms family authority rather than discarding kinship, supporting a Social Dharma reading based on reciprocal duty and respect.'],
    evidence: [
      { kind: 'review', source: 'NowRunning — Bommarillu review', claim: 'Describes Siddhu’s loving but over-controlling father and the romance that forces the family conflict into the open.', url: 'https://www.nowrunning.com/movie/3161/telugu/bommarillu/823/review.htm' },
      { kind: 'review', source: 'Filmibeat — Bommarillu review', claim: 'Reviews the father-son conflict, family control and eventual emotional resolution.', url: 'https://www.filmibeat.com/telugu/reviews/2006/bommarillu-review-100806.html' }
    ],
    filmUnderstanding: 'A Telugu family romance about an adult son seeking room to choose his own life while remaining emotionally tied to a father whose care has become controlling.',
    researchFocus: 'father son family control autonomy reconciliation Telugu',
    redTeamChallenge: 'A story about rejecting parental control could be over-read as rejection of family hierarchy or inherited duty.',
    fact: 'The story is fictional and ends through family confrontation and reconciliation rather than severance.',
    interpretation: 'The film argues for corrected family duty and adult agency, not abandonment of family.',
    intent: 'No general claim is made that traditional families are inherently oppressive.'
  }),
  makeHardenedBatchFilm({
    title: 'Manam', year: 2014, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 1, itihasa: 1, parampara: 5, localRoots: 3, raksha: 1, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Parampara', 'Family continuity', 'Reincarnation', 'Telugu'],
    reasons: ['The film makes intergenerational family continuity its entire narrative architecture, using reincarnation to reconnect broken kinship across time.', 'Rebirth is treated with warmth and emotional seriousness rather than as a joke, giving Parampara and civilizational continuity substantial positive weight even within fantasy.'],
    evidence: [
      { kind: 'review', source: 'Times of India — Manam review', claim: 'Describes the multi-generational family story and reincarnation-driven connections among its characters.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/manam-movie-review/movie-review/35504409.cms' },
      { kind: 'review', source: 'Filmibeat — Manam review', claim: 'Reviews the reincarnation structure and its use to reunite family relationships across generations.', url: 'https://filmibeat.com/telugu/reviews/2014/manam-review-140774.html' }
    ],
    filmUnderstanding: 'A Telugu fantasy-family drama in which members of one family encounter reincarnated versions of parents and loved ones across generations.',
    researchFocus: 'reincarnation family generations parampara Telugu',
    redTeamChallenge: 'Sentimental reincarnation could be merely a screenplay gimmick rather than a meaningful civilizational signal.',
    fact: 'The story is fictional and makes no empirical claim proving reincarnation.',
    interpretation: 'Because rebirth is central to preserving kinship and treated sincerely, it carries a real Parampara signal within fantasy.',
    intent: 'No doctrinal claim is inferred beyond the film’s narrative use of rebirth.'
  }),
  makeHardenedBatchFilm({
    title: 'Guru', year: 1997, language: 'Malayalam', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 2, itihasa: 1, parampara: 2, localRoots: 3, raksha: 3, socialDharma: 5, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Spirituality', 'Anti-fanaticism', 'Social Dharma', 'Malayalam'],
    reasons: ['The film ultimately moves its protagonist from sectarian bloodlust toward compassion, non-violence and a spiritual search for truth, giving Dharma and Social Dharma major positive weight.', 'Its allegory also equates institutionalised religion with blindness and superstition while presenting spirituality as the cure, so sacred regard is complex rather than uniformly affirmative; Mixed / Contested preserves that tension.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Guru at 25', claim: 'Provides a detailed reading of the film’s communal conflict, spiritual allegory, anti-fanaticism message and acknowledged influence from H. G. Wells.', url: 'https://indianexpress.com/article/entertainment/guru-religious-fanaticism-caste-hatred-malayalam-film-rajiv-anchal-mohanlal-suresh-gopi-8341094/' },
      { kind: 'review', source: 'Wikipedia — Guru (1997 film)', claim: 'Summarises Rajiv Anchal’s Malayalam spiritual-fantasy film and its narrative background.', url: 'https://en.wikipedia.org/wiki/Guru_(1997_film)' }
    ],
    filmUnderstanding: 'A Malayalam spiritual allegory about a man radicalised by communal violence who experiences a symbolic world of blindness and returns committed to saving rather than killing.',
    researchFocus: 'religious fanaticism caste hatred spirituality Karunakara Guru H G Wells',
    redTeamChallenge: 'The film’s metaphor may reduce organised religion and inherited practice to blindness while privileging a universal spirituality.',
    fact: 'The film is fictional and its fantasy section was acknowledged as influenced by H. G. Wells while also drawing on Karunakara Guru’s spiritual message.',
    interpretation: 'Compassion and anti-hatred are strongly dharmic, but the institutional-religion metaphor remains materially contested.',
    intent: 'No blanket hostility toward believers is inferred; the critique is directed at fanaticism and credulity.',
    risks: [{ id: 'source-adaptation', summary: 'The fantasy section has an acknowledged literary influence that is material to source understanding.', evidenceIndexes: [0, 1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Kammattipaadam', year: 2016, language: 'Malayalam', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 3, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Kerala roots', 'Dalit displacement', 'Urbanisation', 'Crime'],
    reasons: ['The film remembers the communities displaced as Kochi’s urban landscape transformed, giving marginalised local history and place-memory unusual narrative centrality.', 'Its gangland violence and bleak account of development prevent an uncomplicated positive verdict even though the local/social-memory signal is powerful.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Kammattipaadam review', claim: 'Describes the film as a raw account of buried Dalit history, displacement and Kochi’s transformation, carried through a gangster narrative.', url: 'https://indianexpress.com/article/entertainment/movie-review/kammatipaadam-movie-review-dulquer-salmaan-shines-in-a-raw-and-realistic-cut-into-the-brutally-buried-history-of-dalits-2811732/' },
      { kind: 'review', source: 'Wikipedia — Kammattipaadam', claim: 'Summarises the Malayalam gangster drama and its setting in a locality transformed by urban development.', url: 'https://en.wikipedia.org/wiki/Kammatipaadam' }
    ],
    filmUnderstanding: 'A Malayalam gangster drama spanning decades of land change in Kochi and the displacement of Dalit families from Kammattipaadam.',
    researchFocus: 'Kochi Dalit displacement land urbanisation gangster local history',
    redTeamChallenge: 'The film’s social history may romanticise criminality or reduce Kerala modernisation to predation.',
    fact: 'The characters are fictional while the film draws on recognisable processes of displacement and urban change.',
    interpretation: 'Preservation of erased local memory is positive, but violence and political pessimism make the overall signal contested.',
    intent: 'No claim is made that every fictional crime maps to a specific real person or transaction.'
  }),
];
