import type { EvidenceItem, ResearchProbeId, SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

function queries(title: string, sourceFocus: string, contextFocus: string) {
  return [
    `${title} ${sourceFocus} source adaptation true story`,
    `${title} religion caste community identity change ${contextFocus}`,
    `${title} controversy criticism accuracy factual dispute`,
    `${title} director writer interview ${contextFocus}`,
    `${title} audience social media representation controversy`,
  ];
}

function probe(
  status: 'clear' | 'finding' | 'ambiguous' | 'not-applicable',
  materiality: 'low' | 'medium' | 'high',
  summary: string,
  evidenceUrls: string[] = [],
) {
  return { status, materiality, summary, evidenceUrls };
}

function clearRedTeam(challenge: string) {
  return {
    completed: true as const,
    strongestChallenge: challenge,
    outcome: 'cleared' as const,
    evidenceUrls: [] as string[],
    verdictImpact: 'The adversarial search did not surface a material contradiction that changes the proposed Culture Check verdict.',
  };
}

export const hardenedCorpusNextA: SanghiProfile[] = [
  hardenedProfile({
    title: 'Lagaan', year: 2001, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 3, parampara: 3, localRoots: 5, raksha: 4, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Anti-colonial', 'Village solidarity', 'Local roots'],
    reasons: [
      'The fictional village unites across caste and religious difference to resist an exploitative colonial tax, giving the film a strong anti-colonial, self-respect and collective-duty frame.',
      'Its period setting is deliberately mythic rather than documentary history, but the village, temple, agricultural economy and shared Indian identity are treated from within rather than as objects of embarrassment.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Roger Ebert — Lagaan review', claim: 'The review describes the Raj-era drought, punitive lagaan tax and village cricket challenge as the film’s central anti-colonial conflict.', url: 'https://www.rogerebert.com/reviews/lagaan-once-upon-a-time-in-india-2002' },
      { kind: 'review', source: 'Research review — Lagaan and historical/social simplification', claim: 'Academic criticism provides a useful adversarial reading of the film’s simplified social and historical representation.', url: 'https://www.researchgate.net/publication/236796785_Lagaan_Once_Upon_a_Time_in_India_review' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A fictional Raj-era village story using cricket, tax resistance and cross-community solidarity as a popular anti-colonial fable rather than claiming to reconstruct a specific historical match.',
      discoveryQueries: queries('Lagaan', 'British Raj lagaan tax cricket fictional history', 'caste religion village unity'),
      redTeam: {
        completed: true, strongestChallenge: 'A plausible challenge is that the film simplifies caste, colonial history and village social conflict into a nationalist sports fable.', outcome: 'qualified',
        evidenceUrls: ['https://www.researchgate.net/publication/236796785_Lagaan_Once_Upon_a_Time_in_India_review'],
        verdictImpact: 'The simplification is a representational caveat, but it does not reverse the film’s explicit anti-colonial and locally rooted moral frame.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Academic critical review of Lagaan', claim: 'Criticism challenges the film’s social and historical simplifications.', url: 'https://www.researchgate.net/publication/236796785_Lagaan_Once_Upon_a_Time_in_India_review' }],
      probeOverrides: {
        'historical-claims': probe('clear', 'medium', 'The cricket contest and village are fictional; the audit does not present them as a documented historical event.', ['https://www.rogerebert.com/reviews/lagaan-once-upon-a-time-in-india-2002']),
        'regional-context': probe('clear', 'medium', 'Village agriculture, temple life and local solidarity are central to the film’s narrative world.', ['https://www.rogerebert.com/reviews/lagaan-once-upon-a-time-in-india-2002']),
        'social-radar': probe('finding', 'medium', 'Critical writing raises caste and nationalist simplification as the strongest counter-reading.', ['https://www.researchgate.net/publication/236796785_Lagaan_Once_Upon_a_Time_in_India_review']),
      } as Partial<Record<ResearchProbeId, ReturnType<typeof probe>>>,
      factInterpretationIntent: {
        fact: 'Lagaan is fictional period cinema set under British rule and structured around punitive agricultural taxation and a cricket challenge.',
        interpretation: 'The fictional structure functions as an anti-colonial village-solidarity story rather than as a claim that the match literally occurred.',
        intent: 'The film’s popular nationalist intent is visible, but no unsupported claim about a specific historical event is inferred.'
      }
    })
  }),

  hardenedProfile({
    title: 'The Legend of Bhagat Singh', year: 2002, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Bhagat Singh', 'Freedom struggle', 'Anti-colonial'],
    reasons: [
      'The film centers Bhagat Singh’s anti-colonial struggle, sacrifice and political commitment to Indian freedom without requiring a neutral view of British rule.',
      'It treats the revolutionary tradition as Indian historical memory while retaining Bhagat Singh’s own ideological complexity rather than reducing him to a religious mascot.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — The Legend of Bhagat Singh review', claim: 'The review identifies the film as a serious reconstruction of Bhagat Singh’s revolutionary life and anti-British struggle.', url: 'https://timesofindia.indiatimes.com/the-legend-of-bhagat-singh/articleshow/12395943.cms' },
      { kind: 'interview', source: 'Times of India — Rajkumar Santoshi on making the film', claim: 'Santoshi discusses the responsibility of depicting Bhagat Singh and the historical material behind the film.', url: 'https://timesofindia.indiatimes.com/making-of-a-legend/articleshow/12197607.cms' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic',
      filmUnderstanding: 'A biographical historical drama about Bhagat Singh, his revolutionary politics, imprisonment and execution during the Indian freedom struggle.',
      discoveryQueries: queries('The Legend of Bhagat Singh', 'Bhagat Singh biography historical sources', 'revolutionary ideology religion identity'),
      redTeam: clearRedTeam('The strongest challenge is whether cinematic condensation turns a politically complex historical figure into uncomplicated nationalist hagiography.'),
      probeOverrides: {
        'historical-claims': probe('clear', 'medium', 'The film’s central events are tied to Bhagat Singh’s documented revolutionary life; ordinary dramatic compression remains visible as cinema.', ['https://timesofindia.indiatimes.com/the-legend-of-bhagat-singh/articleshow/12395943.cms']),
        'real-person-attribution': probe('clear', 'medium', 'The film openly identifies Bhagat Singh as its biographical subject rather than disguising a real-person source.', ['https://timesofindia.indiatimes.com/making-of-a-legend/articleshow/12197607.cms']),
      },
      factInterpretationIntent: {
        fact: 'The film is an explicit Bhagat Singh biopic centered on documented freedom-struggle events.',
        interpretation: 'Its strongly sympathetic view of anti-colonial resistance supports Rashtra and Itihasa dimensions without requiring every scene to be documentary reconstruction.',
        intent: 'No material evidence surfaced of identity substitution or deceptive source concealment.'
      }
    })
  }),

  hardenedProfile({
    title: 'Dangal', year: 2016, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 5, itihasa: 2, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Women in sport', 'Family', 'Haryana'],
    reasons: [
      'The film frames women’s sporting excellence, family discipline and representing India internationally as compatible parts of one story rather than opposing tradition and national achievement.',
      'Its biographical dramatization materially distorts the national coach and the Commonwealth final, but those deviations are recorded as Narrative Integrity findings rather than allowed to disappear behind the positive verdict.'
    ],
    integrityFlags: [{
      type: 'adaptation-delta', status: 'supported',
      summary: 'The film fictionalizes the national coach as an antagonist and invents or changes important details of Geeta Phogat’s Commonwealth Games final for dramatic effect.',
      fact: 'Contemporary fact-checking records that the real coach disputed the hostile portrayal and that Mahavir was not locked away during the final; the real final score also differed materially from the film.',
      interpretation: 'These changes reduce biographical fidelity but do not reverse the film’s women-in-sport, family-duty and India-representation themes.',
      intent: 'Aamir Khan publicly described the coach character as fictionalized; the record supports dramatization rather than concealed documentary intent.'
    }],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Dangal fact check', claim: 'The fact check documents differences involving the coach, Mahavir’s presence during the final and the real match score.', url: 'https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/' },
      { kind: 'interview', source: 'India Today — Aamir Khan on coach portrayal', claim: 'Aamir Khan acknowledged that the negative national-coach character was fictionalized for the film.', url: 'https://www.indiatoday.in/movies/bollywood/story/aamir-khan-dangal-geeta-phogat-coach-pr-sondhi-girish-kulkarni-360263-2016-12-30' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic',
      filmUnderstanding: 'A dramatized sports biopic about Mahavir Singh Phogat and daughters Geeta and Babita, combining documented sporting achievements with invented antagonism and altered match details.',
      discoveryQueries: queries('Dangal', 'Geeta Phogat Mahavir Phogat real story coach', 'Haryana women wrestling coach identity'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is that the film unfairly damages a real coach’s reputation and manufactures decisive-match drama, weakening source fidelity.', outcome: 'qualified',
        evidenceUrls: ['https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/'],
        verdictImpact: 'The adaptation warning is material and stays public, but it does not invert the film’s Bharatiya alignment around women’s achievement, family effort and representing India.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express fact check', claim: 'The real coach and match record contradict important dramatic scenes.', url: 'https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/' }],
      probeOverrides: {
        'source-adaptation': probe('finding', 'high', 'The true-story adaptation contains documented invented or altered scenes.', ['https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/']),
        'real-person-attribution': probe('finding', 'high', 'The fictionalized coach is close enough to the real national coach to have prompted a public objection; the film changes his name while preserving the role.', ['https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/', 'https://www.indiatoday.in/movies/bollywood/story/aamir-khan-dangal-geeta-phogat-coach-pr-sondhi-girish-kulkarni-360263-2016-12-30']),
        'self-falsification': probe('finding', 'high', 'The real coach’s objection and the recorded final score directly falsify several dramatic details while leaving the broader achievement story intact.', ['https://indianexpress.com/article/entertainment/bollywood/did-dangal-get-its-facts-wrong-a-fact-check-of-aamir-khan-film-4450334/']),
      },
      factInterpretationIntent: {
        fact: 'Geeta and Babita Phogat’s sporting story is real, while specific coach behavior and match events were fictionalized.',
        interpretation: 'The factual changes are a Narrative Integrity issue independent of the film’s positive women-sport and India-representation themes.',
        intent: 'The public acknowledgement of fictionalization weighs against inferring an intent to pass every dramatic scene off as literal history.'
      }
    })
  }),

  hardenedProfile({
    title: 'Kanaa', year: 2018, language: 'Tamil', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 1, parampara: 3, localRoots: 5, raksha: 2, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Tamil roots', 'Agriculture', 'Women in sport', 'Rashtra'],
    reasons: [
      'The film connects a young Tamil woman’s cricket ambition with her farming family rather than making sporting modernity require rejection of village roots.',
      'Its parallel concern for agrarian distress and playing for India gives it strong Local Roots, Social Dharma and Rashtra signals.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Kanaa review', claim: 'The review identifies women’s cricket and the farmer/farming crisis as the film’s paired concerns.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/kanaa/movie-review/67152622.cms' },
      { kind: 'interview', source: 'Silverscreen India — Arunraja Kamaraj interview', claim: 'The director explains that agriculture and sport came from intimate experience and that the rural setting reflects the Karur/Kulithalai region.', url: 'https://silverscreenindia.com/movies/interviews/if-one-section-of-the-audience-finds-kanaa-preachy-the-other-would-find-reflections-of-reality-in-it-arunraja-kamaraj/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Tamil sports-and-agrarian drama about a farmer’s daughter pursuing cricket for India while the family faces rural economic stress.',
      discoveryQueries: queries('Kanaa', 'women cricket farmer story inspiration', 'Tamil agriculture India cricket'),
      redTeam: clearRedTeam('The strongest challenge is that the film may use agrarian distress instrumentally to support a conventional sports-uplift narrative.'),
      probeOverrides: {
        'regional-context': probe('clear', 'high', 'The director explicitly roots the agricultural strand in the Karur/Kulithalai region and his own familiarity with farming.', ['https://silverscreenindia.com/movies/interviews/if-one-section-of-the-audience-finds-kanaa-preachy-the-other-would-find-reflections-of-reality-in-it-arunraja-kamaraj/']),
      },
      factInterpretationIntent: {
        fact: 'Kanaa is fiction combining women’s cricket with a Tamil farming-family story.',
        interpretation: 'The film treats local agricultural roots and national sporting achievement as mutually reinforcing rather than oppositional.',
        intent: 'No material identity substitution, hidden true-story claim or hostile treatment of Tamil/Hindu culture surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Aayirathil Oruvan', year: 2010, language: 'Tamil', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 2, civilizationalContinuity: 5, rashtra: 2, itihasa: 4, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 2, sacredRegard: 3, contemptRisk: 2 },
    tags: ['Tamil history', 'Chola memory', 'Fantasy', 'Mixed'],
    reasons: [
      'The film takes Chola/Pandya historical memory, Tamil identity and civilizational continuity seriously enough to build an ambitious fantasy world around them rather than treating them as irrelevant background.',
      'At the same time its surviving Cholas are portrayed through brutality, ritual extremity and decay, so the civilizational signal is powerful but not uniformly affirmative; Mixed / Contested better reflects the text than automatic certification.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Aayirathil Oruvan review', claim: 'The review describes the expedition, lost Chola world and historical-fantasy premise at the center of the film.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/aayirathil-oruvan/movie-review/5452515.cms' },
      { kind: 'review', source: 'Filmibeat — Aayirathil Oruvan review', claim: 'The review discusses the Chola/Pandya historical imagination and the film’s fantastical second half.', url: 'https://www.filmibeat.com/tamil/reviews/2010/aayirathil-oruvan-review-180110.html' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A historical fantasy that invents a surviving Chola remnant and uses Chola/Pandya memory as the basis of an adventure-horror narrative, not as documentary history.',
      discoveryQueries: queries('Aayirathil Oruvan', 'Selvaraghavan Chola Pandya fantasy inspiration', 'Tamil history ritual representation'),
      redTeam: clearRedTeam('The strongest challenge is that the film’s grotesque portrayal of the surviving Chola community could be read as civilizational contempt rather than tragic fantasy.'),
      probeOverrides: {
        'historical-claims': probe('clear', 'medium', 'The central surviving-Chola premise is overt fantasy and is not treated here as a historical claim.', ['https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/aayirathil-oruvan/movie-review/5452515.cms']),
        'sacred-religious-valence': probe('finding', 'medium', 'Ritual and inherited Chola symbolism are powerful but sometimes deliberately disturbing, supporting a Mixed rather than uniformly affirmative reading.', ['https://www.filmibeat.com/tamil/reviews/2010/aayirathil-oruvan-review-180110.html']),
      },
      factInterpretationIntent: {
        fact: 'The film is fantasy using Tamil dynastic history and imagery rather than a literal historical reconstruction.',
        interpretation: 'Its intense Chola memory is culturally rooted, while the portrayal of decay and violence prevents a simple positive certification.',
        intent: 'No evidence surfaced that the fantasy was marketed as verified Chola history or created to ridicule Tamil identity as such.'
      }
    })
  }),

  hardenedProfile({
    title: 'Deiva Thirumagal', year: 2011, language: 'Tamil', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Father-daughter', 'Social Dharma', 'Adaptation'],
    reasons: [
      'The father-daughter bond, care, dignity and responsibility provide a strong Social Dharma signal, but the film is not substantially about civilizational, national, sacred or regional continuity.',
      'Because its core premise closely resembles I Am Sam, the source relationship is recorded transparently; that borrowing question does not itself make the film anti-Bharatiya.'
    ],
    integrityFlags: [{
      type: 'source-fidelity', status: 'supported',
      summary: 'Contemporary criticism explicitly noted the film’s strong resemblance to I Am Sam; this is treated as an adaptation/source-origin caveat rather than a cultural verdict.',
      fact: 'Reviews at release compared the central intellectually disabled father/custody narrative to I Am Sam.',
      interpretation: 'The overlap is relevant to source transparency but does not create a Bharatiya or anti-Bharatiya signal by itself.',
      intent: 'The audit does not infer plagiarism intent solely from thematic and plot resemblance.'
    }],
    evidence: [
      { kind: 'review', source: 'Times of India — Deiva Thirumagal review', claim: 'The review centers the father-daughter custody story and emotional family conflict.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/deiva-thirumagal/movie-review/9256649.cms' },
      { kind: 'review', source: 'Rediff — Deiva Thirumagal review', claim: 'The review explicitly notes the film’s heavy inspiration from I Am Sam while assessing the Tamil adaptation.', url: 'https://www.rediff.com/movies/review/south-review-deiva-thirumagal/20110718.htm' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'fiction-adaptation',
      filmUnderstanding: 'A Tamil father-daughter custody drama whose core setup has been widely compared with I Am Sam, localized around family care and social dignity.',
      discoveryQueries: queries('Deiva Thirumagal', 'I Am Sam inspiration remake adaptation', 'father daughter disability Tamil family'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is source originality: contemporary reviewers saw substantial I Am Sam borrowing.', outcome: 'qualified',
        evidenceUrls: ['https://www.rediff.com/movies/review/south-review-deiva-thirumagal/20110718.htm'],
        verdictImpact: 'Source transparency is caveated, while the Culture Check verdict remains Neutral because the film’s strongest signal is universal family care rather than civilizational alignment.'
      },
      probeOverrides: {
        'source-adaptation': probe('finding', 'medium', 'Contemporary reviews identify substantial I Am Sam inspiration.', ['https://www.rediff.com/movies/review/south-review-deiva-thirumagal/20110718.htm']),
      },
      factInterpretationIntent: {
        fact: 'The film’s central custody premise has strong parallels to I Am Sam and was identified as such in release reviews.',
        interpretation: 'That source relationship is distinct from the film’s family-care themes and from the Bharatiya verdict.',
        intent: 'No claim of deliberate concealment is made beyond recording the source-origin concern.'
      }
    })
  }),

  hardenedProfile({
    title: 'Jersey', year: 2019, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 4, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Father-son', 'Cricket', 'Telugu roots'],
    reasons: [
      'The film makes a father’s duty, dignity and relationship with his son the moral center of a cricket comeback story rather than treating family responsibility as an obstacle to self-realization.',
      'Its sporting ambition remains rooted in Telugu family life and Indian cricket, providing positive Social Dharma and Rashtra signals without manufacturing a true-story claim.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Cinema Express — Jersey review', claim: 'The review foregrounds Arjun’s failed cricket career, fatherhood and his son’s faith in him.', url: 'https://www.cinemaexpress.com/reviews/telugu/2019/apr/20/jersey-review-nani-hits-this-one-out-of-the-park-11134.html' },
      { kind: 'review', source: 'Times of India — Jersey review', claim: 'The review describes the father-son emotional core and return to cricket.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/jersey/amp_movie_review/68952269.cms' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'An original Telugu sports drama about a former cricketer, fatherhood, dignity and a late attempt to return to professional cricket.',
      discoveryQueries: queries('Jersey Telugu 2019', 'Gowtam Tinnanuri true story inspiration cricket', 'father son India cricket'),
      redTeam: clearRedTeam('The strongest challenge is whether the cricket-national signal is incidental and the film should be treated simply as a universal family melodrama.'),
      factInterpretationIntent: {
        fact: 'Jersey is presented as fictional sports drama rather than a biopic of a named cricketer.',
        interpretation: 'The family-duty and Indian-cricket setting together create a positive but non-political Bharatiya signal.',
        intent: 'No material source concealment, identity substitution or factual controversy surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Vedam', year: 2010, language: 'Telugu', status: 'mixed', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 2, itihasa: 1, parampara: 2, localRoots: 4, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Social Dharma', 'Telugu', 'Class', 'Religious prejudice'],
    reasons: [
      'The ensemble story argues for human dignity across class, religion and social stigma, including a Muslim character facing suspicion and a sex worker denied ordinary respect.',
      'Those reformist themes are not automatically anti-Bharatiya, but the film’s signal is primarily social-humanist rather than strongly civilizational or sacred, so Mixed / Contested is more precise than Certified.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Vedam review', claim: 'The review describes the intersecting stories and calls the film a triumph of humanism across sharply different social backgrounds.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/vedam-movie-review/movie-review/6015072.cms' },
      { kind: 'review', source: 'Filmibeat Telugu — Vedam review', claim: 'The review covers the film’s multi-character social structure and communal/class tensions.', url: 'https://telugu.filmibeat.com/reviews/telugu-movie-review-vedam-040610.html' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Telugu ensemble drama bringing together characters divided by class, profession and religion during a crisis, with human dignity as its strongest through-line.',
      discoveryQueries: queries('Vedam Telugu', 'Krish film original story inspiration', 'Muslim Hindu communal representation class caste'),
      redTeam: clearRedTeam('The strongest challenge is whether its religious-prejudice strand generalizes Hindu or Indian society rather than criticizing specific prejudice.'),
      probeOverrides: {
        'sacred-religious-valence': probe('clear', 'medium', 'The communal-prejudice strand humanizes a Muslim character without requiring contempt for Hindu sacred life or a generalized anti-Hindu claim.', ['https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/vedam-movie-review/movie-review/6015072.cms']),
      },
      factInterpretationIntent: {
        fact: 'Vedam is fictional ensemble cinema about intersecting social lives rather than a factual reconstruction.',
        interpretation: 'Its criticism of prejudice and hierarchy is treated as Social Dharma rather than presumptively anti-Bharatiya.',
        intent: 'No material evidence of targeted civilizational contempt or source manipulation surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Rudhramadevi', year: 2015, language: 'Telugu', status: 'certified', confidence: 'medium',
    dimensions: { dharma: 3, civilizationalContinuity: 5, rashtra: 4, itihasa: 5, parampara: 4, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kakatiya', 'Telangana history', 'Woman ruler', 'Itihasa'],
    reasons: [
      'The film restores a major Kakatiya queen to popular Telugu/Telangana memory and treats her rule, defence of the kingdom and public duty as affirmative historical inheritance.',
      'However, source material for parts of her life is limited and contemporary reviews identify invented or adjusted facts; because the exact boundary between research and commercial fiction is materially disputed, the verdict is held for human adjudication despite strong Bharatiya alignment.'
    ],
    integrityFlags: [{
      type: 'historical-claim', status: 'disputed',
      summary: 'Gunasekhar says years of research and historian input informed the film, while contemporary reviews say important facts were adjusted or historically inaccurate; the precise fidelity of several plot elements remains unresolved.',
      fact: 'The film is explicitly based on the 13th-century Kakatiya ruler. Gunasekhar publicly described extensive research; reviews also document admitted fact adjustment and alleged inaccuracies.',
      interpretation: 'The contested fidelity warrants a visible historical-integrity warning without negating the film’s positive treatment of Kakatiya memory.',
      intent: 'The director’s public research claims weigh against inferring deceptive intent, but do not by themselves validate every dramatized event.'
    }],
    evidence: [
      { kind: 'interview', source: 'Hindustan Times — Gunasekhar on Rudhramadevi research', claim: 'Gunasekhar said he spent years researching the ruler with historian and industry inputs and aimed for authenticity.', url: 'https://www.hindustantimes.com/regional-movies/rudhramadevi-s-story-stayed-with-me-since-school-gunasekhar/story-EBdVgoWgeJ9WrLoJwFY2aM.html' },
      { kind: 'review', source: 'India Today — Rudhramadevi review', claim: 'The review says Gunasekhar acknowledged adjusting facts and argues that fictional elements sometimes overshadow historical fact.', url: 'https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09' },
      { kind: 'review', source: 'Times of India — Rudhramadevi review', claim: 'The review identifies the work as a biographical period film and says some historical facts may be incorrect.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movie-reviews/rudhramadevi-movie-review/movie-review/49289505.cms' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic',
      filmUnderstanding: 'A large-scale historical biopic of Kakatiya ruler Rudrama Devi, based on limited medieval source material and extensive filmmaker reconstruction.',
      discoveryQueries: queries('Rudhramadevi 2015', 'Gunasekhar Kakatiya research historians historical accuracy', 'Telangana Kakatiya queen gender identity'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is that the film advertises deep research while contemporary critics identify adjusted or incorrect history, and limited surviving sources make some claims difficult to resolve.', outcome: 'unresolved',
        evidenceUrls: ['https://www.hindustantimes.com/regional-movies/rudhramadevi-s-story-stayed-with-me-since-school-gunasekhar/story-EBdVgoWgeJ9WrLoJwFY2aM.html', 'https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09'],
        verdictImpact: 'Bharatiya alignment is strongly positive, but unresolved historical-fidelity questions require human review under the hardened router.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'India Today historical-fidelity critique', claim: 'The review says facts were adjusted and fictional elements can overshadow the historical record.', url: 'https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09' }],
      probeOverrides: {
        'historical-claims': probe('ambiguous', 'high', 'Filmmaker research claims and published criticism materially conflict on the fidelity of important narrative details.', ['https://www.hindustantimes.com/regional-movies/rudhramadevi-s-story-stayed-with-me-since-school-gunasekhar/story-EBdVgoWgeJ9WrLoJwFY2aM.html', 'https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09']),
        'creator-source-conflict': probe('ambiguous', 'high', 'Gunasekhar emphasizes authenticity and historian input while reviewers record acknowledged fact adjustment and inaccuracies.', ['https://www.hindustantimes.com/regional-movies/rudhramadevi-s-story-stayed-with-me-since-school-gunasekhar/story-EBdVgoWgeJ9WrLoJwFY2aM.html', 'https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09']),
        'self-falsification': probe('ambiguous', 'high', 'The strongest contrary evidence to the film’s authenticity claim is the documented admission/criticism of adjusted historical facts.', ['https://www.indiatoday.in/movies/regional-cinema/story/rudhramadevi-movie-review-anushka-shetty-is-the-gem-of-this-period-drama-267364-2015-10-09']),
      },
      factInterpretationIntent: {
        fact: 'Rudrama Devi is historical; the film uses extensive reconstruction, and public sources disagree on the fidelity of some details.',
        interpretation: 'The film’s restoration of Kakatiya memory remains a positive cultural signal even while its historical layer is contested.',
        intent: 'The documented research effort weighs against alleging deliberate falsification; unresolved accuracy is not converted into an intent claim.'
      }
    })
  }),

  hardenedProfile({
    title: 'Maheshinte Prathikaaram', year: 2016, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 3, localRoots: 5, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Idukki', 'Malayalam roots', 'Community', 'Personal dharma'],
    reasons: [
      'The film is unusually specific to Idukki’s people, landscape, small-town relationships and rhythms, allowing regional life to be the substance of the story rather than interchangeable scenery.',
      'Mahesh’s movement away from wounded masculine pride toward maturity, work and relationship repair is compatible with Social Dharma rather than requiring a heroic violence template.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Times of India — Maheshinte Prathikaaram review', claim: 'The review describes the Idukki setting, local characters and Mahesh’s personal humiliation/revenge arc.', url: 'https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/maheshinte-prathikaram/movie-review/50889413.cms' },
      { kind: 'interview', source: 'Indian Express — Syam Pushkaran interview', claim: 'Pushkaran discusses writing ordinary Malayali men and deliberately questioning violent masculine behavior across his films.', url: 'https://indianexpress.com/article/express-sunday-eye/i-want-to-make-men-less-violent-through-my-stories-syam-pushkaran-kumbalangi-nights-5907510/' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A locally grounded Idukki drama about humiliation, masculinity, work, love and the maturation of an ordinary photographer.',
      discoveryQueries: queries('Maheshinte Prathikaaram', 'Syam Pushkaran Dileesh Pothan inspiration Idukki', 'Malayali masculinity community caste religion'),
      redTeam: clearRedTeam('The strongest challenge is whether rejecting performative masculine revenge should be read as merely progressive ideology rather than an organically local moral development.'),
      probeOverrides: {
        'regional-context': probe('clear', 'high', 'Idukki’s landscape and ordinary local social life are integral to the film’s identity.', ['https://timesofindia.indiatimes.com/entertainment/malayalam/movie-reviews/maheshinte-prathikaram/movie-review/50889413.cms']),
      },
      factInterpretationIntent: {
        fact: 'The film is fictional and strongly situated in Idukki rather than based on a named historical person.',
        interpretation: 'Its critique of violent masculine pride is treated as internal social-dharma reform, not as contempt for Kerala or Indian culture.',
        intent: 'No material source, identity or factual manipulation surfaced in the audit.'
      }
    })
  }),

  hardenedProfile({
    title: 'Kumbalangi Nights', year: 2019, language: 'Malayalam', status: 'certified', confidence: 'high',
    dimensions: { dharma: 3, civilizationalContinuity: 3, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 5, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 1 },
    tags: ['Kerala roots', 'Family', 'Social Dharma', 'Masculinity'],
    reasons: [
      'The film’s critique of toxic masculinity does not end in rejection of family; it rebuilds a broken household around care, responsibility, work and chosen obligations while remaining deeply situated in a Kerala fishing community.',
      'Interfaith and unconventional relationships are presented as lived local social reality rather than as an argument for contempt toward Hindu or Christian tradition, so reformist content remains compatible with certification.'
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Indian Express — Kumbalangi Nights and toxic masculinity', claim: 'The analysis describes the film’s contrast between destructive patriarchal performance and men learning care, vulnerability and responsibility.', url: 'https://indianexpress.com/article/lifestyle/art-and-culture/kumbalangi-nights-toxic-masculinity-decoded-destroyed-5835436/' },
      { kind: 'review', source: 'Indian Express — Kumbalangi Nights review', claim: 'The review emphasizes the Kumbalangi setting, working-class family structure and close fit between writing and surroundings.', url: 'https://indianexpress.com/article/entertainment/movie-review/kumbalangi-nights-movie-review-rating-5576176/lite/' },
      { kind: 'review', source: 'Cinema Express — Kumbalangi Nights review', claim: 'The review discusses the small fishing-village setting, interfaith relationship and deconstruction of masculine heroism.', url: 'https://www.cinemaexpress.com/reviews/malayalam/2019/feb/08/kumbalangi-nights-review-a-beautifully-realised-benchmark-setting-film-10010.html' },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A Kerala fishing-village family drama in which four brothers move from dysfunction toward care while a controlling patriarchal antagonist exposes the costs of performative masculinity.',
      discoveryQueries: queries('Kumbalangi Nights', 'Syam Pushkaran Madhu Narayanan story inspiration', 'Hindu Christian interfaith family masculinity Kerala'),
      redTeam: {
        completed: true, strongestChallenge: 'The strongest challenge is that the film explicitly dismantles the idealized patriarchal family and conventional masculinity, which could be misread as hostility to family or inherited social norms.', outcome: 'qualified',
        evidenceUrls: ['https://indianexpress.com/article/lifestyle/art-and-culture/kumbalangi-nights-toxic-masculinity-decoded-destroyed-5835436/'],
        verdictImpact: 'The film’s actual arc rebuilds family around responsibility, care and relationship rather than rejecting family itself; the challenge does not defeat certification.'
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express masculinity analysis', claim: 'The film deliberately challenges conventional masculinity and patriarchal family hierarchy.', url: 'https://indianexpress.com/article/lifestyle/art-and-culture/kumbalangi-nights-toxic-masculinity-decoded-destroyed-5835436/' }],
      probeOverrides: {
        'sacred-religious-valence': probe('clear', 'medium', 'Interfaith relationships are depicted without converting either Hindu or Christian identity into a contempt object.', ['https://www.cinemaexpress.com/reviews/malayalam/2019/feb/08/kumbalangi-nights-review-a-beautifully-realised-benchmark-setting-film-10010.html']),
        'regional-context': probe('clear', 'high', 'Kumbalangi’s fishing-community setting is integral to the writing, labor, class and family relationships.', ['https://indianexpress.com/article/entertainment/movie-review/kumbalangi-nights-movie-review-rating-5576176/lite/']),
        'social-radar': probe('finding', 'medium', 'A major public/critical reading centers the film’s critique of toxic masculinity and the patriarchal family.', ['https://indianexpress.com/article/lifestyle/art-and-culture/kumbalangi-nights-toxic-masculinity-decoded-destroyed-5835436/']),
      },
      factInterpretationIntent: {
        fact: 'Kumbalangi Nights is fictional and explicitly critiques controlling masculinity within two locally specific family structures.',
        interpretation: 'The film distinguishes family based on care and duty from patriarchal domination, which fits Social Dharma rather than amounting to civilizational rejection.',
        intent: 'No evidence surfaced of an intent to ridicule Hindu identity, Kerala culture or family as such.'
      }
    })
  }),
];
