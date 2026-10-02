import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const hardenedCorpus50Part2: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Kannathil Muthamittal', year: 2002, language: 'Tamil', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 2, itihasa: 3, parampara: 3, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Tamil roots', 'Adoption', 'Sri Lanka', 'Family'],
    reasons: [
      'The film is strongly rooted in Tamil family life and treats adoption, motherhood and a child’s search for origins with seriousness and compassion.',
      'Its Sri Lankan-war setting is politically significant but the film’s primary moral centre is family and civilian suffering rather than a strong Bharat-alignment or anti-Bharat signal, so Neutral is the more disciplined verdict.'
    ],
    evidence: [
      { kind: 'interview', source: 'Times of India — Mani Ratnam interview', claim: 'Ratnam describes the adoption-search inspiration and the decision to place the story against the Sri Lankan conflict.', url: 'https://timesofindia.indiatimes.com/bombay-times/show-me-the-mani/articleshow/5182739.cms' },
      { kind: 'review', source: 'Wikipedia — Kannathil Muthamittal', claim: 'Records the fictional story of an adopted Tamil child seeking her biological mother amid the Sri Lankan civil war.', url: 'https://en.wikipedia.org/wiki/Kannathil_Muthamittal' }
    ],
    filmUnderstanding: 'A Tamil family drama about an adopted child searching for her biological mother, with the search leading into the Sri Lankan civil-war context.',
    researchFocus: 'adoption Sri Lankan civil war Tamil family LTTE representation',
    redTeamChallenge: 'The civil-war background could be read as politically selective or emotionally simplified through a child-centred family story.',
    fact: 'The central family is fictional; the Sri Lankan conflict and displacement form the historical background.',
    interpretation: 'The political background matters, but the film’s dominant moral frame is kinship, adoption and civilian loss rather than a directional Bharat verdict.',
    intent: 'No comprehensive historical claim about the Sri Lankan conflict is attributed to the film.'
  }),

  makeHardenedBatchFilm({
    title: 'Asuran', year: 2019, language: 'Tamil', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 2, itihasa: 3, parampara: 2, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Tamil roots', 'Land', 'Caste', 'Family', 'Mixed'],
    reasons: [
      'The film is deeply rooted in Tamil land, family, labour and survival and treats protection of children and dignity against entrenched violence as serious moral obligations.',
      'Its caste-oppression narrative is not anti-Hindu merely because it is severe, but the film’s social world is intentionally accusatory toward inherited hierarchy; that produces a strong Social Dharma signal alongside a contested civilizational valence, hence Mixed.'
    ],
    evidence: [
      { kind: 'interview', source: 'Cinema Express — Dhanush on Asuran', claim: 'Confirms the film adapts Poomani’s Vekkai and discusses changes required between novel and cinema.', url: 'https://www.cinemaexpress.com/stories/interviews/2019/Oct/02/dhanush-asuran-is-vetri-maaran-best-with-me-14665.html' },
      { kind: 'review', source: 'Times of India — Asuran review', claim: 'Identifies caste, class, land and family protection as core elements of the film.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/asuran/movie-review/71436273.cms' }
    ],
    filmUnderstanding: 'A violent rural Tamil drama adapted from Poomani’s novel Vekkai, centred on a landholding conflict, caste oppression and a father trying to keep his son alive.',
    researchFocus: 'Vekkai novel caste land Kilvenmani adaptation Dalit representation',
    redTeamChallenge: 'The adaptation’s violence and class-caste framing may simplify social groups or convert a historically resonant structure into a one-directional moral tableau.',
    fact: 'Asuran adapts the novel Vekkai and fictionalises a caste-and-land conflict in rural Tamil Nadu.',
    interpretation: 'Critique of caste violence is treated as Social Dharma rather than automatically anti-Hindu, while the harsh portrayal of inherited hierarchy prevents a simplistic affirmative civilizational verdict.',
    intent: 'No claim is made that criticism of caste hierarchy establishes hostility toward Hindu civilisation as a whole.',
    risks: [
      { id: 'source-adaptation', summary: 'The film materially adapts and reshapes Poomani’s Vekkai for cinema.', evidenceIndexes: [0], materiality: 'high' },
      { id: 'regional-context', summary: 'Tamil caste, land and rural-power context is essential to interpreting the film fairly.', evidenceIndexes: [0,1], materiality: 'high' }
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The film makes acknowledged changes while adapting Vekkai.' }]
  }),

  makeHardenedBatchFilm({
    title: 'Sankarabharanam', year: 1980, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 2, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 4, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Carnatic music', 'Parampara', 'Telugu culture', 'Guru-shishya'],
    reasons: [
      'The film treats Carnatic music, guru-shishya transmission and artistic discipline as living civilizational inheritance rather than decorative nostalgia.',
      'Its strongest Bharatiya signal is preservation through transmission: tradition survives because people choose responsibility toward it across social boundaries.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Sankarabharanam review', claim: 'Describes the film’s central devotion to classical music, the ageing maestro and the changing cultural environment around him.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/Sankarabharanam/movie-review/46569542.cms' },
      { kind: 'review', source: 'Wikipedia — Sankarabharanam', claim: 'Records K. Viswanath’s Telugu musical drama and its focus on the relationship between a classical musician and a devoted admirer.', url: 'https://en.wikipedia.org/wiki/Sankarabharanam_(1980_film)' }
    ],
    filmUnderstanding: 'A Telugu musical drama about an ageing Carnatic maestro, a devoted woman from a socially marginalised background and the transmission of classical art to a new generation.',
    researchFocus: 'Carnatic music classical tradition guru shishya social hierarchy Telugu culture',
    redTeamChallenge: 'Celebration of classical tradition could romanticise social hierarchy or treat cultural change too nostalgically.',
    fact: 'The characters are fictional; Carnatic music and its institutions are real cultural traditions.',
    interpretation: 'The film’s dominant movement is preservation and transmission of art while allowing devotion and talent to cross social boundaries.',
    intent: 'No intent to defend caste hierarchy is inferred from the film’s classical-cultural setting.'
  }),

  makeHardenedBatchFilm({
    title: 'Mayabazar', year: 1957, language: 'Telugu', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 5, parampara: 5, localRoots: 5, raksha: 2, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Mahabharata', 'Krishna', 'Telugu tradition', 'Itihasa'],
    reasons: [
      'The film builds its fantasy and comedy from Mahabharata-linked popular tradition, treating Krishna, kinship and epic memory as an intimate shared cultural world rather than an exotic object.',
      'Its playful inventions are part of a long regional storytelling tradition; they do not signal contempt for the sacred source and instead demonstrate civilizational continuity through adaptation.'
    ],
    evidence: [
      { kind: 'review', source: 'Times of India — Mayabazar theatre retrospective', claim: 'Describes Mayabazar as an enduring adaptation of the Sasirekha-Abhimanyu folktale associated with the Mahabharata world.', url: 'https://timesofindia.indiatimes.com/entertainment/events/hyderabad/mayabazar-theatre-review-fiery-effects-fountains-moving-sets-light-up-this-timeless-folktale/articleshow/131737674.cms' },
      { kind: 'review', source: 'Wikipedia — Mayabazar', claim: 'Records the film’s Mahabharata-associated folklore basis and Krishna/Ghatotkacha-centred fantasy story.', url: 'https://en.wikipedia.org/wiki/Mayabazar' }
    ],
    filmUnderstanding: 'A Telugu mythological fantasy drawing on the popular Sasirekha-Abhimanyu tale within the Mahabharata cultural universe, with Krishna and Ghatotkacha driving the comic plot.',
    researchFocus: 'Sasirekha Abhimanyu Mahabharata folklore Krishna Ghatotkacha Telugu tradition',
    redTeamChallenge: 'Because the Sasirekha story is not a direct canonical Mahabharata episode, audiences could mistake regional folklore for scripture if adaptation boundaries are not acknowledged.',
    fact: 'The film draws on a popular Mahabharata-associated folktale rather than reproducing a canonical Mahabharata episode verbatim.',
    interpretation: 'Regional elaboration is treated as living Itihasa tradition so long as the distinction from canonical text is preserved.',
    intent: 'The playful adaptation is not treated as an attempt to falsify scripture.'
  }),

  makeHardenedBatchFilm({
    title: 'Leader', year: 2010, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 4, itihasa: 2, parampara: 1, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Governance', 'Anti-corruption', 'Civic duty', 'Telugu'],
    reasons: [
      'The film’s political critique is anchored in the proposition that public office should serve citizens rather than family wealth or patronage, a strong Social Dharma and governance signal.',
      'Criticism of corruption and cynical electoral politics is not treated as anti-Bharatiya; the protagonist’s project is reform of Indian democratic institutions from within.'
    ],
    evidence: [
      { kind: 'review', source: 'Rediff — Leader review', claim: 'Reviews the film as a political drama about an idealistic chief minister confronting corruption and power.', url: 'https://www.rediff.com/movies/review/south-telugu-movie-review-leader/20100219.htm' },
      { kind: 'review', source: 'Times of India — Leader review', claim: 'Describes the film’s anti-corruption and governance themes in Telugu politics.', url: 'https://timesofindia.indiatimes.com/regional/telugu/leader-movie-review/articleshow/5596110.cms' },
      { kind: 'review', source: 'Indian Express — Leader retrospective', claim: 'Revisits Sekhar Kammula’s anger at political corruption and the film’s unusual place in Telugu political cinema.', url: 'https://indianexpress.com/article/entertainment/telugu/rana-daggubatis-debut-sekhar-kammulas-anger-and-a-political-film-telugu-cinema-has-never-bettered-10540978/' }
    ],
    filmUnderstanding: 'A fictional Telugu political drama about an idealistic heir entering electoral politics and trying to reform corruption after becoming chief minister.',
    researchFocus: 'Telugu politics corruption chief minister democratic reform caste money power',
    redTeamChallenge: 'The reformer-hero structure can oversimplify democratic change into individual moral purity and elite leadership.',
    fact: 'The protagonist and political events are fictional rather than a disguised biopic of a specific chief minister.',
    interpretation: 'Institutional criticism is read as reformist civic commitment rather than rejection of Indian democracy.',
    intent: 'No claim is made that one heroic leader is a realistic substitute for institutional reform.'
  }),

  makeHardenedBatchFilm({
    title: 'Eega', year: 2012, language: 'Telugu', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 3, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Telugu fantasy', 'Reincarnation', 'Revenge', 'Neutral'],
    reasons: [
      'The reincarnation premise sits comfortably within an Indian imaginative register and the film is culturally local rather than deracinated.',
      'Its dominant purpose is inventive revenge entertainment, not a sustained civilizational, national or sacred argument, so Neutral avoids converting cultural familiarity into automatic certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Eega retrospective', claim: 'Describes Rajamouli’s reincarnation-revenge premise and the film’s creative genre construction.', url: 'https://indianexpress.com/article/entertainment/telugu/ss-rajamouli-retrospective-eega-a-housefly-revenge-8285978/lite/' },
      { kind: 'review', source: 'Times of India — Eega review', claim: 'Reviews the Telugu fantasy about a murdered man reincarnated as a fly seeking revenge.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/Eega-Movie-Review/movie-review/14715128.cms' }
    ],
    filmUnderstanding: 'A Telugu fantasy-revenge film in which a murdered man is reincarnated as a housefly and battles his killer.',
    researchFocus: 'reincarnation Telugu fantasy revenge cultural context',
    redTeamChallenge: 'A reincarnation motif alone should not be inflated into a strong civilizational endorsement when the film primarily uses it as genre mechanics.',
    fact: 'The story is wholly fictional and uses reincarnation as a fantasy premise.',
    interpretation: 'Cultural rootedness is present but not strong enough by itself to create a directional Bharatiya verdict.',
    intent: 'No broader religious claim is inferred from the fantasy device.'
  }),

  makeHardenedBatchFilm({
    title: 'Arundhati', year: 2009, language: 'Telugu', status: 'certified', sourceBasis: 'folklore-sacred-tradition',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 1, itihasa: 2, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Shakti', 'Telugu folklore', 'Ancestral duty', 'Raksha'],
    reasons: [
      'The film treats ancestral duty, Shakti-coded feminine power, ritual knowledge and inherited protection of community as meaningful forces inside the story rather than superstition to be mocked.',
      'Its horror-fantasy exaggeration is not historical evidence, but the sacred and regional imagination is internally respected, supporting Civilizational Continuity, Parampara and Raksha.'
    ],
    evidence: [
      { kind: 'review', source: 'Rediff — Arundhati review', claim: 'Reviews the film’s reincarnation, palace, ritual and supernatural revenge framework.', url: 'https://www.rediff.com/movies/review/telugu-film-review-arundhati/20090119.htm' },
      { kind: 'review', source: 'Wikipedia — Arundhati', claim: 'Records the Telugu supernatural fantasy centred on an ancestral queen, evil spirit and reincarnated descendant.', url: 'https://en.wikipedia.org/wiki/Arundhati_(2009_film)' }
    ],
    filmUnderstanding: 'A Telugu supernatural fantasy about a modern woman confronting an evil tied to an ancestral queen, ritual protection and reincarnation.',
    researchFocus: 'Telugu folklore Shakti ritual reincarnation supernatural sacred representation',
    redTeamChallenge: 'Horror spectacle can sensationalise ritual practices or blur invented occult imagery with living religious traditions.',
    fact: 'The characters and supernatural history are fictional and draw on broad South Indian ritual-fantasy motifs.',
    interpretation: 'The sacred-coded practices are granted narrative efficacy and dignity rather than framed primarily as backwardness.',
    intent: 'No claim is made that the invented rites correspond exactly to a specific living tradition.'
  }),

  makeHardenedBatchFilm({
    title: 'Magadheera', year: 2009, language: 'Telugu', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 2, itihasa: 3, parampara: 4, localRoots: 4, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Reincarnation', 'Warrior duty', 'Telugu fantasy', 'Civilizational continuity'],
    reasons: [
      'The film uses reincarnation, warrior duty, loyalty and inherited bonds to build a thoroughly Indian historical-fantasy world rather than importing an externally detached mythic grammar.',
      'Its kingdom and past-life history are invented, so Itihasa scoring reflects civilizational imagination rather than a claim of literal historical reconstruction.'
    ],
    evidence: [
      { kind: 'interview', source: 'Rediff — S. S. Rajamouli on Magadheera', claim: 'Rajamouli discusses the conception of the reincarnation-based period-fantasy story and its large-scale historical setting.', url: 'https://www.rediff.com/movies/slide-show/2009/aug/04/slide-show-1-rajamouli-on-magadheera.htm' },
      { kind: 'review', source: 'Rediff — Magadheera review', claim: 'Reviews the film’s past-life warrior romance, reincarnation and period-action structure.', url: 'https://www.rediff.com/movies/review/the-magadheera-review/20090731.htm' }
    ],
    filmUnderstanding: 'A Telugu reincarnation epic linking a present-day romance to an invented historical kingdom, warrior sacrifice and unfinished duty from a past life.',
    researchFocus: 'reincarnation warrior kingdom historical fantasy Rajamouli',
    redTeamChallenge: 'The lush invented period setting can be mistaken for history even though it is designed as fantasy.',
    fact: 'The kingdom, warriors and historical conflict are fictional; reincarnation is the story’s supernatural premise.',
    interpretation: 'The invented setting still carries a strongly indigenous civilizational grammar of duty, rebirth and protection.',
    intent: 'No claim of documentary historicity is attributed to the filmmakers.'
  }),

  makeHardenedBatchFilm({
    title: 'Kireedam', year: 1989, language: 'Malayalam', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Malayalam', 'Family', 'Fate', 'Neutral'],
    reasons: [
      'The film is deeply grounded in Kerala family expectations, father-son bonds and the social consequences of violence, with a strong moral concern for duty and lost ordinary life.',
      'Those values are culturally rooted but not directional enough on civilizational or national questions to require certification; Neutral better preserves the distinction between rooted cinema and ideological alignment.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express Malayalam — Kireedam retrospective', claim: 'Revisits Lohithadas and Sibi Malayil’s family tragedy and the making of Sethumadhavan’s downfall.', url: 'https://malayalam.indianexpress.com/entertainment/mohanlal-siby-malayil-kireedam-lohithadas-memories/' },
      { kind: 'review', source: 'Wikipedia — Kireedam', claim: 'Records the Malayalam tragedy about a young man whose intervention in a violent conflict destroys his expected future.', url: 'https://en.wikipedia.org/wiki/Kireedam_(1989_film)' }
    ],
    filmUnderstanding: 'A Malayalam family tragedy in which a dutiful son is drawn into violence after defending his policeman father, destroying the future his family imagined for him.',
    researchFocus: 'Kerala family father son police violence social tragedy',
    redTeamChallenge: 'The film’s reverence for paternal expectation and respectable employment could be read as socially conservative rather than simply tragic.',
    fact: 'The story is fictional and locally grounded in Kerala social life.',
    interpretation: 'Its family-duty ethic is meaningful but does not by itself create a strong directional Bharatiya classification.',
    intent: 'No ideological programme is inferred from the tragedy’s family structure.'
  }),

  makeHardenedBatchFilm({
    title: 'Devaasuram', year: 1993, language: 'Malayalam', status: 'mixed', sourceBasis: 'mixed-unknown',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 1, itihasa: 2, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 2, sacredRegard: 3, contemptRisk: 2 },
    tags: ['Kerala roots', 'Feudal masculinity', 'Classical arts', 'Mixed'],
    reasons: [
      'Kerala feudal-household culture, classical arts, ritual and local memory are treated as dense lived context rather than generic scenery, giving the film real Local Roots and Parampara weight.',
      'At the same time, its charismatic feudal masculinity and caste/class privilege can be aestheticised even as the protagonist is morally challenged, making Mixed / Contested more responsible than an uncomplicated certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Ranjith and the politics of his cinema', claim: 'Critically examines elitist, patriarchal and feudal ideas associated with Ranjith’s body of work including Devaasuram.', url: 'https://indianexpress.com/article/entertainment/malayalam/ranjith-the-malayalam-writer-director-who-peddled-elitist-patriarchal-and-misogynistic-ideas-through-his-films-now-accused-of-sexual-harassment-9556079/' },
      { kind: 'review', source: 'Wikipedia — Devaasuram', claim: 'Records the Malayalam drama about Mangalassery Neelakandan and notes the character’s inspiration from a real Kerala personality.', url: 'https://en.wikipedia.org/wiki/Devaasuram' }
    ],
    filmUnderstanding: 'A Malayalam character drama about an arrogant feudal heir whose violence, humiliation, artistic relationships and eventual transformation unfold inside a culturally specific Kerala aristocratic world.',
    researchFocus: 'Mullassery Rajagopal inspiration feudal caste masculinity classical arts Kerala',
    redTeamChallenge: 'The film’s critique of its hero may be weakened by how powerfully it glamorises his feudal privilege and masculine dominance.',
    fact: 'The narrative is fictional but the protagonist is widely reported as partly inspired by a real Kerala figure.',
    interpretation: 'The rooted cultural world is substantial, but admiration and critique of feudal masculinity coexist, yielding a mixed signal.',
    intent: 'No intent to endorse caste or feudal hierarchy is asserted; representational valence is the concern.',
    risks: [
      { id: 'real-person-attribution', summary: 'The central fictional character is reported as partly inspired by a real Kerala personality rather than being wholly invented.', evidenceIndexes: [1], materiality: 'medium' },
      { id: 'regional-context', summary: 'Kerala caste, feudal and classical-art context materially affects the reading of the protagonist’s charisma and power.', evidenceIndexes: [0,1], materiality: 'high' }
    ]
  })
];