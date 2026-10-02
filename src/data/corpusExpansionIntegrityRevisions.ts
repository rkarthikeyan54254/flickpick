import type { SanghiProfile } from '../types/sanghi';

const reviewedAt = '2026-10-02';
const methodologyVersion = '1.0-bharatiya';

const historicalGate: NonNullable<SanghiProfile['publicationGate']> = {
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

export const corpusExpansionIntegrityRevisions: SanghiProfile[] = [
  {
    title: 'Kesari', year: 2019, language: 'Hindi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: historicalGate,
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 4, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Rashtra', 'Sikh history', 'Military', 'Sacrifice'],
    reasons: [
      'The Battle of Saragarhi is presented as a story of Sikh martial courage, collective duty, sacrifice and honour, with the defenders’ Sikh identity treated as a source of strength rather than embarrassment.',
      'The Bharatiya/Raksha alignment is strong, but the film adds or alters documented military details; those changes remain a separate Narrative Integrity issue and require human adjudication before durable publication.',
    ],
    integrityFlags: [{
      type: 'historical-claim', status: 'supported',
      summary: 'The battle and the defenders’ last stand are historical, while several tactical, costume and character details in the film depart from surviving military records.',
      fact: 'A published military account drawing on the 36 Sikh service digest and Lt Col John Haughton’s record disputes details including the film’s dynamite sequence, uniform choices and some popular Saragarhi myths.',
      interpretation: 'These departures affect historical fidelity but do not erase the film’s respect for Sikh courage and sacrifice.',
      intent: 'Director Anurag Singh has described Kesari as historical fiction rather than a documentary; the audit does not infer deliberate deception from dramatization alone.',
    }],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Kesari review', claim: 'The review identifies the 1897 Battle of Saragarhi and the Sikh defenders’ last stand as the film’s core historical event.', url: 'https://indianexpress.com/article/entertainment/movie-review/kesari-movie-review-akshay-kumar-parineeti-chopra-5636992/' },
      { kind: 'primary', source: 'Lt Gen H. S. Panag — military account of Saragarhi', claim: 'The military-history critique cites regimental records and Haughton’s account while identifying several film/popular-history deviations.', url: 'https://www.strategicstudyindia.com/2019/04/what-akshay-kumars-kesari-wont-tell-you.html' },
      { kind: 'interview', source: 'The Tribune — Anurag Singh interview', claim: 'The director explicitly calls Kesari historical fiction and says a film is not a documentary.', url: 'https://www.tribuneindia.com/news/archive/spectrum/every-film-is-a-make-or-mar-film-744194/' },
    ],
  },
  {
    title: 'Pathonpatham Noottandu', year: 2022, language: 'Malayalam', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: historicalGate,
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 2, itihasa: 5, parampara: 4, localRoots: 5, raksha: 3, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Kerala history', 'Social Dharma', 'Local roots', 'Reform'],
    reasons: [
      'The film restores Arattupuzha Velayudha Panicker’s resistance to caste and gender injustice to popular Kerala memory while remaining rooted in nineteenth-century Travancore society and sacred life.',
      'That reform-within-society signal is compatible with Bharatiya certification, but the film mixes documented biography with legend and invented material, so its historical layer requires a visible integrity warning and human review.',
    ],
    integrityFlags: [{
      type: 'historical-claim', status: 'disputed',
      summary: 'The film mixes well-attested aspects of Velayudha Panicker’s reform work with contested legends and fictionalized events, including the Nangeli/breast-tax strand and altered biographical details.',
      fact: 'Independent reporting documents Panicker’s temple-building and struggles for lower-caste women’s dignity; critical historical commentary says the film also incorporates legend and outright fiction.',
      interpretation: 'The verified reformer’s life supports the film’s rooted social-dharma frame, while the contested additions reduce historical fidelity.',
      intent: 'Director Vinayan has publicly described the film as cinema rather than a documentary and acknowledged artistic liberty; hostile intent is not inferred.',
    }],
    evidence: [
      { kind: 'review', source: 'The Indian Express — Arattupuzha Velayudha Panicker explainer', claim: 'The explainer documents Panicker’s Shiva-temple building and campaigns for the dignity and dress rights of oppressed communities.', url: 'https://indianexpress.com/article/explained/arattupuzha-velayudha-panicker-malayalam-movie-pathonpatham-noottandu-8149074/' },
      { kind: 'review', source: 'ThePrint — Pathonpatham Noottandu historical review', claim: 'The review says the film gets important facts right but also combines history, legend and fiction, specifically scrutinising the Nangeli strand and other narrative changes.', url: 'https://theprint.in/feature/reel-take/pathonpatham-noottandu-shows-arattupuzhas-legacy-but-cant-escape-pitfalls-of-malayalam-epics/1140399/' },
      { kind: 'review', source: 'Onmanorama — Velayudha Panicker history', claim: 'The feature describes Panicker’s reform activity and Shiva-temple construction as historical context for the film.', url: 'https://www.onmanorama.com/entertainment/entertainment-news/2022/01/09/pathonpatham-noottandu-history-velayudha-panicker.html' },
    ],
  },
  {
    title: 'Krantiveera Sangolli Rayanna', year: 2012, language: 'Kannada', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: historicalGate,
    dimensions: { dharma: 3, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 4, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Kannada history', 'Anti-colonial', 'Kittur'],
    reasons: [
      'Sangolli Rayanna’s resistance to British rule, loyalty to Kittur Chennamma and Kannada regional memory are treated as heroic anti-colonial inheritance.',
      'The film nevertheless introduces overtly fictional romantic and mythological material, so the historical record and the positive Bharatiya verdict must remain separate.',
    ],
    integrityFlags: [{
      type: 'historical-claim', status: 'disputed',
      summary: 'Contemporary criticism and public protest identified fictional additions around romance and divine intervention that should not be read as established Rayanna biography.',
      fact: 'Contemporary criticism notes a fictional love-interest track and a goddess-gives-Rayanna-a-sword sequence despite the film’s historical subject and cinematic-liberty disclaimer.',
      interpretation: 'Those additions materially lower biographical fidelity without changing the anti-colonial/Kannada-memory alignment.',
      intent: 'The record reviewed supports commercial dramatization; it does not establish an intent to deceive viewers about Rayanna’s historical significance.',
    }],
    evidence: [
      { kind: 'review', source: 'Filmibeat — Krantiveera Sangolli Rayanna review', claim: 'The review identifies Rayanna as a freedom fighter, Kannada patriot and associate of Kittur Chennamma.', url: 'https://www.filmibeat.com/kannada/reviews/2012/kranthiveera-sangolli-rayanna-review-100817.html' },
      { kind: 'review', source: 'Bangalore Mirror — Krantiveera Sangolli Rayanna review', claim: 'The review specifically flags invented romantic and mythological additions and notes the film’s cinematic-liberty disclaimer.', url: 'https://bangaloremirror.indiatimes.com/entertainment/reviews/krantiveera-sangolli-rayanna-lavish-battle-scenes-sans-sword-fighting/articleshow/21287972.cms' },
      { kind: 'review', source: 'Filmibeat Kannada — protest over historical distortion', claim: 'Contemporary reporting records objections that the duet/fictional material distorted the historical figure for commercial effect.', url: 'https://kannada.filmibeat.com/news/protest-staged-against-sangolli-rayanna-in-gulbarga-069294.html' },
    ],
  },
  {
    title: 'Pawankhind', year: 2022, language: 'Marathi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: historicalGate,
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Maratha', 'Swarajya', 'Sacrifice', 'Itihasa'],
    reasons: [
      'Baji Prabhu Deshpande’s sacrifice to protect Chhatrapati Shivaji Maharaj and Swarajya is the film’s explicit moral centre.',
      'The production openly labels itself a cinematic recreation rather than complete documentation, allowing the Bharatiya historical-memory verdict to stay strong while keeping dramatization visible.',
    ],
    integrityFlags: [{
      type: 'historical-fiction', status: 'supported',
      summary: 'The Battle of Pavan Khind and Baji Prabhu’s sacrifice are the historical core; the film openly uses cinematic recreation and dramatic compression.',
      fact: 'Institutional history material and the film’s own review record agree on the Panhala escape, rear-guard action and Baji Prabhu’s sacrifice as the central episode.',
      interpretation: 'The dramatization is material to scene-level fidelity but does not reverse the documented core event.',
      intent: 'The makers’ disclaimer explicitly signals recreation rather than full documentary completeness.',
    }],
    evidence: [
      { kind: 'review', source: 'Times of India — Pawankhind review', claim: 'The review identifies the Battle of Pavan Khind, Baji Prabhu and Maratha sacrifice as the core and notes the makers’ cinematic-recreation disclaimer.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/pawankhind/movie-review/89668027.cms' },
      { kind: 'official', source: 'Rajarshi Shahu Mahavidyalaya History Department — Pawankhind historical-film report', claim: 'The history-department report summarizes the Panhala escape, rear-guard defence and Baji Prabhu’s sacrifice as the historical episode represented in the film.', url: 'https://www.shahucollegelatur.org.in/Department/Association/Arts/History/ShowHistoricalMoviePawankhind.pdf' },
    ],
  },
  {
    title: 'Subhedar', year: 2023, language: 'Marathi', status: 'certified', confidence: 'high', methodologyVersion, reviewedAt,
    reviewDepth: 'source-audit', auditStatus: 'reviewed', publicationGate: historicalGate,
    dimensions: { dharma: 4, civilizationalContinuity: 5, rashtra: 5, itihasa: 5, parampara: 5, localRoots: 5, raksha: 4, socialDharma: 4, sacredRegard: 4, contemptRisk: 0 },
    tags: ['Maratha', 'Swarajya', 'Tanaji Malusare', 'Itihasa'],
    reasons: [
      'The film links Tanaji Malusare’s service to a wider conception of Swarajya involving governance, public works, loyalty and responsibility to people.',
      'Its positive civilizational reading survives the historical-fiction caveat because the director explicitly articulates a constrained approach to creative liberty rather than claiming documentary completeness.',
    ],
    integrityFlags: [{
      type: 'historical-fiction', status: 'supported',
      summary: 'Subhedar combines documented Maratha figures and the Sinhagad episode with reconstructed scenes where the historical record is incomplete.',
      fact: 'The film presents Tanaji Malusare, Shivaji Maharaj and the Battle of Sinhagad; the director has acknowledged gaps in documentation and described the limited kind of inference he considers acceptable.',
      interpretation: 'Reconstructed connective scenes should be treated as dramatization rather than automatically as verified biography.',
      intent: 'The director publicly argues against inventing arbitrary material merely to make history more entertaining, which is relevant counterevidence against deceptive intent.',
    }],
    evidence: [
      { kind: 'review', source: 'Times of India — Subhedar review', claim: 'The review covers the Shivaji–Tanaji relationship, Swarajya governance themes and the Battle of Sinhagad.', url: 'https://timesofindia.indiatimes.com/entertainment/marathi/movie-reviews/subhedar/etmoviereview/103062959.cms' },
      { kind: 'interview', source: 'Lokmat — Digpal Lanjekar historical-film interview', claim: 'Lanjekar says historical cinema should not invent arbitrary events for entertainment, while limited reconstruction may be necessary where records are absent.', url: 'https://www.lokmat.com/filmy/marathi-cinema/subhedar-historical-tanhaji-malusare-sinhgad-movie-exclusive-interview-with-digpal-lanjekar-chinmay-mandalekar-a-a971/' },
    ],
  },
];
