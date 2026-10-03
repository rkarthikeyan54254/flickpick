import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

/** Hardened Corpus 50D — Part 3. */
export const hardenedCorpus50DPart3: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Chhaava', year: 2025, language: 'Hindi', status: 'certified', sourceBasis: 'history',
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 4, sacredRegard: 4, contemptRisk: 1 },
    tags: ['Sambhaji Maharaj','Maratha history','Rashtra','Itihasa'],
    reasons: ['The film places Chhatrapati Sambhaji Maharaj’s defence of the Maratha polity, refusal to submit and inherited civilizational duty at its centre, creating unusually strong Itihasa, Rashtra and continuity signals.', 'Its adaptation of Shivaji Sawant’s novel takes substantial dramatic liberties and amplifies torture and combat; those are serious Narrative Integrity qualifications, not grounds to erase the film’s Bharatiya orientation.'],
    evidence: [
      { kind: 'review', source: 'Indian Express — Chhaava review', claim: 'Identifies the film as an adaptation of Shivaji Sawant’s Marathi novel about Sambhaji and explicitly raises the fact-versus-fiction and extreme-violence questions.', url: 'https://indianexpress.com/article/entertainment/movie-review/chhaava-movie-review-vicky-kaushal-is-fully-committed-in-laxman-utekars-ultra-loud-ultra-violent-and-exhausting-film-9835599/lite/' },
      { kind: 'review', source: 'India Today — historian perspective on Chhaava', claim: 'Historian Vishwas Patil documents multiple liberties and exaggerations while recognizing that the film brought Sambhaji’s struggle to a national audience.', url: 'https://www.indiatoday.in/opinion/story/reel-or-real-decoding-chhaava-from-a-historian-perspective-opinion-2689357-2025-03-05' }
    ],
    filmUnderstanding: 'A historical epic about Chhatrapati Sambhaji Maharaj’s resistance to Aurangzeb and defence of the Maratha realm, adapted through a popular Marathi historical novel.', researchFocus: 'Sambhaji Aurangzeb Shivaji Sawant historical accuracy torture conversion Maratha resistance', redTeamChallenge: 'The patriotic and sacred force of Sambhaji’s story can obscure how much of the action, dialogue and religious framing is novelistic or cinematic amplification.',
    fact: 'Sambhaji and Aurangzeb are historical figures, but the film adapts a novel and dramatizes battles, court conduct, slogans and the circumstances and meaning of Sambhaji’s torture.', interpretation: 'The film’s dominant orientation honours Maratha resistance and Hindu civilizational memory; historical caveats remain visible on a separate axis.', intent: 'Certification does not assert that every depicted act, quotation or motive is documentary history and does not generalize guilt to Muslims as a community.',
    risks: [{ id: 'historical-claims', summary: 'The adaptation contains material historical liberties and exaggerated combat/torture presentation.', evidenceIndexes: [0,1], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Emergency', year: 2025, language: 'Hindi', status: 'mixed', sourceBasis: 'biopic',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 4, itihasa: 4, parampara: 1, localRoots: 2, raksha: 3, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Emergency 1975','Indira Gandhi','Democracy','Historical integrity'],
    reasons: ['Remembering the suspension of civil liberties during the Emergency and the costs of concentrated power is a legitimate Rashtra and Social Dharma concern.', 'The film compresses decades of Indira Gandhi’s life into a strongly authored political biopic and gives the Emergency itself surprisingly little depth, so its historical-memory value is inseparable from a material integrity qualification.'],
    evidence: [
      { kind: 'review', source: 'India Today — Emergency review', claim: 'Finds that the film only briefly treats the 1975 Emergency while attempting a rushed crash course across Indira Gandhi’s life.', url: 'https://www.indiatoday.in/movies/reviews/story/emergency-review-kangana-ranaut-indira-gandhi-crash-course-2666166-2025-01-17' },
      { kind: 'review', source: 'Indian Express — Emergency review', claim: 'Notes the film’s real-life basis, creative liberties and politically slanted, scattershot construction.', url: 'https://indianexpress.com/article/entertainment/movie-review/emergency-movie-review-kangana-ranaut-confused-indira-gandhi-biopic-weak-in-craft-9783764/' }
    ],
    filmUnderstanding: 'A political biographical drama spanning Indira Gandhi’s career, wars and the 1975-77 Emergency, filtered through Kangana Ranaut’s interpretation.', researchFocus: 'Indira Gandhi 1975 Emergency civil liberties chronology biopic historical accuracy', redTeamChallenge: 'A viewer can mistake a highly selective political biography for a settled account of the Emergency era and Indira Gandhi’s motives.',
    fact: 'The Emergency and major political figures are historical, while the film compresses events, conversations and motivations.', interpretation: 'Remembering authoritarian overreach is civically important, but the film’s selection and compression prevent an uncomplicated historical certification.', intent: 'No claim is made that political disagreement with Indira Gandhi proves malicious intent by the filmmakers or that the film is a neutral documentary.',
    risks: [{ id: 'historical-claims', summary: 'Broad chronology and characterization are compressed into a selective political biopic.', evidenceIndexes: [0,1], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Jaat', year: 2025, language: 'Hindi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 4, itihasa: 2, parampara: 2, localRoots: 3, raksha: 5, socialDharma: 4, sacredRegard: 3, contemptRisk: 1 },
    tags: ['Raksha','Village protection','Jai Shri Ram','Mass action'],
    reasons: ['The story’s moral centre is a stranger confronting a terror-criminal regime that has brutalised villagers, with explicit Ramayana/Jai Shri Ram coding and a strong protection-of-the-innocent Raksha signal.', 'The film’s gruesome violence and regressive gender taunts materially reduce Dharma, but protagonist moral excess does not by itself reverse the film-level protection and civilizational orientation.'],
    evidence: [
      { kind: 'review', source: 'India Today — Jaat review', claim: 'Describes the terrorised community, the hero’s Ramayan-theme introduction and the film’s mass-action rescue structure.', url: 'https://www.indiatoday.in/movies/reviews/story/jaat-review-sunny-deol-film-mass-masala-blast-we-needed-2707006-2025-04-10' },
      { kind: 'review', source: 'Indian Express — Jaat review', claim: 'Provides the counter-reading that relentless bloodletting and mutilation desensitise the film and overwhelm coherence.', url: 'https://indianexpress.com/article/entertainment/movie-review/jaat-movie-review-sunny-deol-starrer-leaves-you-numb-unmoving-and-desensitised-9936434/lite/' }
    ],
    filmUnderstanding: 'A mass-action film in which a wandering Jaat confronts a violent criminal-terror network that has subjugated a coastal community.', researchFocus: 'villagers terror network Jai Shri Ram Ramayan hero violence women portrayal', redTeamChallenge: 'Religious and patriotic cues can be mistaken for sufficient virtue even when the hero’s methods and the film’s gender language are ethically coarse.',
    fact: 'The story is fictional and uses explicit Hindu-coded heroic imagery alongside extreme vigilante violence.', interpretation: 'Protection of terrorised civilians and refusal to submit to predation are positive Raksha signals; gore and misogynistic taunts lower Dharma rather than automatically cancelling the verdict.', intent: 'Certification does not endorse mutilation, vigilantism or gender humiliation as Dharmic conduct.',
    risks: [{ id: 'social-radar', summary: 'Critics identified unusually graphic violence and desensitising treatment as a material moral counter-reading.', evidenceIndexes: [1], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Raid 2', year: 2025, language: 'Hindi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 2, rashtra: 4, itihasa: 1, parampara: 1, localRoots: 3, raksha: 3, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Anti-corruption','Public duty','Tax enforcement','Social Dharma'],
    reasons: ['An honest public servant confronting a corrupt political nexus is a direct Social Dharma and institutional-duty proposition, with the state framed as capable of lawful self-correction.', 'The film is formulaic and star-driven, but those craft limitations do not weaken the underlying ethic that public office and wealth are accountable to law.'],
    evidence: [
      { kind: 'review', source: 'India Today — Raid 2 review', claim: 'Identifies Amay Patnaik as an honest income-tax officer pursuing a revered politician whose public image conceals corruption and exploitation.', url: 'https://www.indiatoday.in/movies/reviews/story/raid-2-movie-review-ajay-devgn-film-crumbles-under-weight-of-his-stardom-2717810-2025-05-01' },
      { kind: 'review', source: 'Rotten Tomatoes — Raid 2 synopsis', claim: 'Summarises the conflict as an income-tax officer uncovering a corrupt nexus and testing whether justice can prevail over power.', url: 'https://www.rottentomatoes.com/m/raid_2' }
    ],
    filmUnderstanding: 'A fictional anti-corruption thriller about income-tax officer Amay Patnaik targeting a powerful politician’s concealed network of illicit wealth.', researchFocus: 'income tax officer corruption politician justice public duty law', redTeamChallenge: 'A simplistic incorruptible-hero-versus-corrupt-politician template can substitute star worship for serious institutional accountability.',
    fact: 'The film is a fictional franchise entry centred on tax enforcement and political corruption.', interpretation: 'The core public-duty ethic supports Social Dharma even though the plot is conventional and hero-centric.', intent: 'Certification is not an endorsement of every investigative tactic or a claim that the story represents a real tax case.'
  }),
  makeHardenedBatchFilm({
    title: 'Metro... In Dino', year: 2025, language: 'Hindi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Relationships','Urban India','Marriage','Family'],
    reasons: ['Its interwoven stories take marriage, ageing, fidelity, regret, reconciliation and family seriously within recognisably Indian metropolitan life.', 'Those are meaningful human and social themes, but the film does not sustain a specifically Bharatiya/Hindu-civilizational thesis strong enough to manufacture certification from cultural familiarity alone.'],
    evidence: [
      { kind: 'review', source: 'India Today — Metro... In Dino review', claim: 'Describes an Indian-metropolitan anthology of romance, regret, rediscovery and everyday relationships.', url: 'https://www.indiatoday.in/movies/reviews/story/metro-in-dino-movie-review-anurag-basu-film-is-like-the-beauty-of-the-first-monsoon-rain-pankaj-tripathi-konkona-sara-ali-khan-neena-gupta-aditya-roy-kapur-2750534-2025-07-04' },
      { kind: 'review', source: 'Rotten Tomatoes — Metro... In Dino synopsis', claim: 'Summarises parallel bittersweet relationships across metropolitan settings and multiple forms of love.', url: 'https://www.rottentomatoes.com/m/metro_in_dino' }
    ],
    filmUnderstanding: 'An ensemble urban relationship drama following several couples and families across Indian metros.', researchFocus: 'marriage family adultery ageing urban India relationships cultural roots', redTeamChallenge: 'Family and marriage themes are easy to overread as Bharatiya certification signals even when the film’s frame is broadly universal and metropolitan.',
    fact: 'The film is an original fictional anthology of contemporary relationships.', interpretation: 'Indian social texture is present, but rooted setting alone does not establish a civilizationally affirmative thesis.', intent: 'Neutral means insufficient directional Bharatiya signal, not hostility to family, marriage or Indian culture.'
  }),
  makeHardenedBatchFilm({
    title: 'Tanvi the Great', year: 2025, language: 'Hindi', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 5, itihasa: 2, parampara: 3, localRoots: 3, raksha: 4, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Indian Army','Siachen','Disability','Rashtra','Bhajan'],
    reasons: ['Tanvi’s desire to honour her late Army-officer father and salute the flag at Siachen makes service, remembrance, dignity and national belonging the film’s explicit moral centre.', 'The screenplay takes major liberties with SSB and Army protocols, so its strong Rashtra/Social Dharma orientation is certified with a prominent institutional-realism caveat.'],
    evidence: [
      { kind: 'review', source: 'India Today — Tanvi the Great review', claim: 'Describes Tanvi’s mission to honour her late Army father at Siachen while challenging the film’s implausible SSB training and defence-protocol shortcuts.', url: 'https://www.indiatoday.in/movies/reviews/story/tanvi-the-great-review-anupam-kher-soulful-acting-shubhangi-dutt-debut-soulful-bad-execution-2757301-2025-07-18' },
      { kind: 'review', source: 'Rotten Tomatoes — Tanvi: The Great synopsis', claim: 'Summarises an autistic young woman pursuing her father’s dream to salute the flag at Siachen despite barriers to military service.', url: 'https://www.rottentomatoes.com/m/tanvi_the_great' }
    ],
    filmUnderstanding: 'A fictional inspirational drama about an autistic young woman trying to complete her deceased Army-officer father’s dream at Siachen.', researchFocus: 'autism Indian Army Siachen SSB protocol father flag bhajan', redTeamChallenge: 'Patriotic emotion can obscure an implausible portrayal of military selection, discipline and operational protocol.',
    fact: 'The protagonist and mission are fictional; the film depicts real institutions such as the SSB and Indian Army with substantial dramatic licence.', interpretation: 'The film’s service-and-remembrance ethic is strongly affirmative while the institutional inaccuracies remain a separate integrity problem.', intent: 'Certification does not validate the depicted route through SSB or Army rules as realistic.',
    risks: [{ id: 'historical-claims', summary: 'Military selection and defence protocols are portrayed implausibly despite using real institutions.', evidenceIndexes: [0], materiality: 'high' }]
  }),
  makeHardenedBatchFilm({
    title: 'Ikkis', year: 2026, language: 'Hindi', status: 'certified', sourceBasis: 'biopic',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 4, raksha: 5, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Arun Khetarpal','1971 war','Param Vir Chakra','Military sacrifice'],
    reasons: ['The film honours Second Lieutenant Arun Khetarpal’s courage and sacrifice in the 1971 war while locating that service inside family memory rather than mere spectacle.', 'Its anti-war attention to grief and the humanity of soldiers on both sides strengthens rather than weakens the duty-and-sacrifice case; patriotism need not require chest-thumping or community hostility.'],
    evidence: [
      { kind: 'review', source: 'India Today — Ikkis review', claim: 'Identifies the film as the story of 21-year-old Param Vir Chakra awardee Arun Khetarpal and praises its focus on valour alongside lasting familial trauma.', url: 'https://www.indiatoday.in/movies/reviews/story/ikkis-review-dharmendra-agastya-nanda-war-film-sensitive-storytelling-2844933-2026-01-01' },
      { kind: 'review', source: 'Hindustan Times — Ikkis review', claim: 'Reviews the biopic as a moving account of Khetarpal and the human price paid by young soldiers and their families.', url: 'https://www.hindustantimes.com/entertainment/bollywood/ikkis-review-dharmendra-is-the-beating-heart-of-this-biopic-on-arun-khetarpal-which-moves-you-more-than-you-expect-101767244137624.html' }
    ],
    filmUnderstanding: 'A biographical war drama about Param Vir Chakra awardee Second Lieutenant Arun Khetarpal, killed in the 1971 Battle of Basantar at age 21.', researchFocus: 'Arun Khetarpal Battle of Basantar 1971 Param Vir Chakra family biopic accuracy', redTeamChallenge: 'War-film admiration can turn sacrifice into simplistic nationalism or flatten the opposing soldiers into faceless enemies.',
    fact: 'Arun Khetarpal was a real Indian Army officer awarded the Param Vir Chakra posthumously for the 1971 war; the film dramatizes his life and family memory.', interpretation: 'Service, courage and sacrifice are direct Rashtra/Raksha/Dharma signals, and acknowledging war’s human cost does not negate them.', intent: 'Certification does not endorse war as desirable or treat Pakistani identity as inherently hostile.',
    risks: [{ id: 'real-person-attribution', summary: 'As a biopic, private conversations and emotional beats necessarily require separation from documented service history.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Param Sundari', year: 2025, language: 'Hindi', status: 'mixed', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 3, raksha: 1, socialDharma: 2, sacredRegard: 2, contemptRisk: 3 },
    tags: ['Kerala','Regional representation','Romance','Cultural stereotype'],
    reasons: ['The film visibly uses Kerala’s languages, dress, dance, kalaripayattu, Onam, backwaters, churches and local social texture rather than erasing regional identity.', 'But that density often functions as a tourist-board collage and repeated Malayali caricature; the regional rootedness is therefore real but contested rather than sufficient for an uncomplicated certification.'],
    evidence: [
      { kind: 'review', source: 'Onmanorama — Param Sundari review', claim: 'A Malayali review identifies the heroine’s accent, dress, toddy gag and other repeated portrayals as outdated regional stereotypes.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2025/08/30/param-sundari-movie-review-janhvi-kapoor-sidharth-malhotra-bollywood.html' },
      { kind: 'review', source: 'Indian Express — Malayali review of Param Sundari', claim: 'Describes the film as an overstuffed showcase of Kerala stereotypes rather than organically observed regional life.', url: 'https://indianexpress.com/article/entertainment/bollywood/sidharth-malhotra-and-janhvi-kapoor-film-param-sundari-is-a-testament-to-bollywoods-extreme-laziness-10217757/' }
    ],
    filmUnderstanding: 'A Delhi-meets-Kerala romantic comedy that foregrounds Malayali cultural markers as the couple crosses regional and family differences.', researchFocus: 'Kerala Malayali accent stereotypes Onam kalaripayattu mohiniyattam regional representation', redTeamChallenge: 'Calling every comic shorthand “contempt” would overstate the case, while calling the Kerala setting “rooted” would understate how mechanically the stereotypes are deployed.',
    fact: 'The film uses many recognisable Kerala cultural markers and has been criticised by Malayali reviewers for accent and regional caricature.', interpretation: 'Rooted visibility and stereotyped treatment coexist, producing a contested cultural result rather than generalized hatred of Malayalis.', intent: 'No claim is made that the filmmakers intended contempt toward Malayalis.',
    risks: [{ id: 'regional-context', summary: 'Malayali reviewers identify repeated regional clichés and inauthentic accent/behaviour as a material representation problem.', evidenceIndexes: [0,1], materiality: 'high' }, { id: 'community-contempt', summary: 'The stereotyping is material but does not rise to generalized dehumanization or collective hatred of Malayalis.', evidenceIndexes: [0,1], status: 'ambiguous', materiality: 'medium' }]
  }),
  makeHardenedBatchFilm({
    title: 'Tourist Family', year: 2025, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 4, rashtra: 3, itihasa: 2, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Tamil identity','Family','Neighbourhood','Karuna','Social Dharma'],
    reasons: ['A Sri Lankan Tamil family’s devotion to one another, patient rebuilding of life and transformation of a suspicious Chennai neighbourhood through kindness make family duty, hospitality and Social Dharma the film’s centre.', 'Its idealised faith in neighbourly goodness is sentimental, but it remains deeply rooted in Tamil language, migration experience and community rather than generic cosmopolitan uplift.'],
    evidence: [
      { kind: 'review', source: 'Hindustan Times — Tourist Family review', claim: 'Describes a loving Sri Lankan Tamil family rebuilding life in Chennai and a neighbourhood gradually bound together by affection and mutual care.', url: 'https://www.hindustantimes.com/entertainment/tamil-cinema/tourist-family-movie-review-a-feel-good-entertainer-elevated-by-a-stellar-sasikumar-and-simran-101746097396944-amp.html' },
      { kind: 'review', source: 'Hindustan Times — Tourist Family analysis', claim: 'Highlights Eelam Tamil language identity, prejudice, acceptance and the film’s argument for kindness over othering.', url: 'https://www.hindustantimes.com/entertainment/tamil-cinema/tourist-family-review-film-marks-the-arrival-of-a-major-new-voice-in-abishan-jeevinth-101749050808259.html' }
    ],
    filmUnderstanding: 'A family drama about undocumented Sri Lankan Tamil migrants finding refuge and community in Chennai while initially facing suspicion after a nearby bombing.', researchFocus: 'Sri Lankan Tamil Eelam family Chennai migration neighbourhood kindness identity suspicion', redTeamChallenge: 'The film’s humane resolution may romanticise the legal and security complexities around undocumented migration and communal suspicion.',
    fact: 'The family and events are fictional, while the language and refugee/migration context draw on real Tamil social experience.', interpretation: 'Family fidelity, hospitality, karuna and community integration are strong Social Dharma and local-root signals.', intent: 'Certification does not make a policy claim about immigration enforcement or treat suspicion of a security incident as inherently malicious.'
  }),
  makeHardenedBatchFilm({
    title: 'Dragon', year: 2025, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 5, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Education','Parents','Honesty','Redemption','Social Dharma'],
    reasons: ['The protagonist’s arc moves from fraud, resentment and shortcuts toward accepting consequences, valuing education, respecting parental sacrifice and repairing harm caused to others.', 'This is not certification because the hero is morally pure—he is not—but because the narrative itself clearly distinguishes adharma from earned responsibility and makes reform the destination.'],
    evidence: [
      { kind: 'review', source: 'India Today — Dragon review', claim: 'Describes a coming-of-age story centred on education, mistakes, second chances and the consequences of harming an already struggling person.', url: 'https://www.indiatoday.in/movies/reviews/story/dragon-movie-review-pradeep-ranganathan-ashwath-marimuthu-anupama-parameswaran-2683402-2025-02-21' },
      { kind: 'review', source: 'Indian Express — Dragon review', claim: 'Frames the film around whether goodness comes from fear of consequences or genuine moral change and calls the film preachy but effective.', url: 'https://indianexpress.com/article/entertainment/movie-review/dragon-movie-review-this-pradeep-ranganathan-ashwath-marimuthu-film-passes-with-flying-colours-9848620/' }
    ],
    filmUnderstanding: 'A Tamil campus-to-adulthood redemption comedy-drama about a former academic achiever who embraces fraud and bravado before being forced to confront the harm he causes.', researchFocus: 'education cheating parents sacrifice honesty redemption consequences Tamil youth', redTeamChallenge: 'A didactic redemption ending may be too convenient after the protagonist has benefited from deception and irresponsible behaviour.',
    fact: 'The story is fictional and explicitly structures the hero around wrongdoing, consequences and a second chance.', interpretation: 'The narrative endorses earned responsibility, education and gratitude to parents rather than celebrating the hero’s earlier deception.', intent: 'Certification applies to the film’s moral direction, not to every action committed by its protagonist.'
  }),
  makeHardenedBatchFilm({
    title: 'Thug Life', year: 2025, language: 'Tamil', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 2, socialDharma: 2, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Gangster drama','Family','Loyalty','Betrayal'],
    reasons: ['The film gives weight to surrogate family, loyalty, betrayal and responsibility within a recognisably Tamil gangster world.', 'But its governing framework remains criminal power, revenge and personal allegiance rather than a sustained Bharatiya civilizational or Dharmic thesis, so local texture alone should not manufacture certification.'],
    evidence: [
      { kind: 'review', source: 'India Today — Thug Life review', claim: 'Describes a gangster story driven by trust, jealousy, greed, betrayal and the bond between Sakthivel and Amar.', url: 'https://www.indiatoday.in/movies/reviews/story/thug-life-review-kamal-haasan-silambarasan-mani-ratnam-haphazard-screenplay-hollow-2736118-2025-06-05' },
      { kind: 'review', source: 'Indian Express — Thug Life review', claim: 'Provides an adversarial assessment of the film’s gangster-family construction and moral/emotional execution.', url: 'https://indianexpress.com/article/entertainment/movie-review/thug-life-review-kamal-haasan-mani-ratnams-game-of-thrones-is-a-cinematic-endurance-test-10048484/' }
    ],
    filmUnderstanding: 'A Mani Ratnam gangster saga about an underworld patriarch and the orphan he raises, whose bond fractures into betrayal and violent succession conflict.', researchFocus: 'Tamil gangster surrogate family loyalty betrayal violence cultural orientation', redTeamChallenge: 'Family language and loyalty can look Dharmic while functioning primarily as codes of criminal allegiance and patriarchal control.',
    fact: 'The story is fictional and centres a violent criminal network and surrogate-family conflict.', interpretation: 'Familial themes are present, but the film does not provide enough specifically Bharatiya civilizational direction to move beyond Neutral.', intent: 'Neutral is not a condemnation of the film’s Tamil identity or a claim that gangster protagonists make a film anti-Bharatiya.'
  }),
];
