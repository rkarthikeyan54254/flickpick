import type { SanghiProfile } from '../types/sanghi';
import { makeHardenedBatchFilm } from './hardenedBatch50Factory';

export const latestCertificationProfiles: SanghiProfile[] = [
  makeHardenedBatchFilm({
    title: 'Sardar 2', year: 2026, language: 'Tamil', status: 'certified', sourceBasis: 'original-fiction',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 1, parampara: 2, localRoots: 4, raksha: 5, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Raksha', 'Duty', 'Tamil'],
    reasons: [
      'The sequel keeps national protection, intelligence service and the idea of duty above personal glory at the centre of its heroism, producing strong Rashtra and Raksha signals.',
      'Its exaggerated spy-thriller construction is treated as genre fiction rather than historical evidence; criticism of execution does not reverse the India-protection moral frame.'
    ],
    evidence: [
      { kind: 'review', source: 'The Week — Sardar 2 review', claim: 'The review explicitly identifies the franchise theme of putting duty above self-glory and the son growing closer to his father’s model of service.', url: 'https://www.theweek.in/review/movies/2026/09/10/sardar-2-movie-review.html' },
      { kind: 'review', source: 'Indian Express — Sardar 2 review', claim: 'Reviews the sequel as a Karthi spy film built around Sardar and Vijay Prakash in an expanded intelligence-action conflict.', url: 'https://indianexpress.com/article/entertainment/movie-review/sardar-2-movie-review-karthis-sequel-that-could-not-match-what-the-original-built-10871319/lite/' }
    ],
    filmUnderstanding: 'A fictional Tamil espionage sequel in which father and son operate as secret agents inside a national-security action plot.',
    researchFocus: 'Indian intelligence national security duty father son spy thriller',
    redTeamChallenge: 'The film may use patriotism as generic action-film decoration rather than expressing a substantive duty or national-protection ethic.',
    fact: 'Sardar 2 is fictional espionage entertainment rather than a historical or biographical account.',
    interpretation: 'The repeated duty-over-glory and national-protection framing is substantive enough to qualify even if the screenplay is commercially exaggerated.',
    intent: 'No historical-authenticity claim is inferred from fictional intelligence operations.'
  }),

  makeHardenedBatchFilm({
    title: 'Drishyam 3', year: 2026, language: 'Hindi', status: 'mixed', sourceBasis: 'fiction-adaptation',
    dimensions: { dharma: 3, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 2, raksha: 2, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Family', 'Justice', 'Moral conflict', 'Adaptation'],
    reasons: [
      'The conclusion remains organised around a father’s fierce obligation to protect his family, giving the film a strong family-duty and Social Dharma signal.',
      'That duty is inseparable from concealment, criminal culpability, grief and the claims of law and justice, so the film is better represented as Mixed / Contested than as a clean endorsement of either side.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Drishyam 3 review', claim: 'Describes the final chapter as resolving the Salgaonkar family’s long-running conflict with investigators while returning to guilt, justice and the consequences of the original crime.', url: 'https://indianexpress.com/article/entertainment/movie-review/drishyam-3-movie-review-terrific-ajay-devgn-tabu-give-drishyam-the-conclusion-it-deserved-10903384/' },
      { kind: 'review', source: 'Indian Express Bengali — Drishyam 3 review', claim: 'Highlights the family’s continuing fear, Meera’s grief, the legal conflict and the film’s focus on morality and guilt rather than only mystery mechanics.', url: 'https://bengali.indianexpress.com/entertainment/drishyam-3-movie-review-rating-ajay-devgn-tabu-12616292' }
    ],
    filmUnderstanding: 'The Hindi conclusion to the Drishyam crime-thriller series, centred on Vijay Salgaonkar’s continuing effort to shield his family from the consequences of an earlier death and cover-up.',
    researchFocus: 'family protection law justice guilt Hindi adaptation conclusion',
    redTeamChallenge: 'Family loyalty could be mistaken for an uncomplicated dharmic endorsement even though the story is built on deception and unresolved harm to another family.',
    fact: 'The story is fictional and belongs to the Hindi adaptation lineage of the Drishyam franchise.',
    interpretation: 'Family protection is a genuine positive duty signal, but the opposing claims of justice and grief are too material for clean certification.',
    intent: 'The film is interpreted as a moral thriller, not as a literal ethical instruction to obstruct justice.',
    risks: [{ id: 'source-adaptation', summary: 'The Hindi franchise derives from the Malayalam Drishyam property while the conclusion is presented as a distinct Hindi-series resolution.', evidenceIndexes: [0,1], materiality: 'medium' }]
  }),

  makeHardenedBatchFilm({
    title: 'Pooja Meri Jaan', year: 2026, language: 'Hindi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 2, raksha: 1, socialDharma: 5, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Social Dharma', 'Courtroom', 'Consent', 'Crime'],
    reasons: [
      'The film’s central concern is obsessive entitlement, rejection, blame and legal accountability after a young man’s suicide, which gives it a strong Social Dharma dimension.',
      'Those themes are contemporary social and courtroom questions rather than a sustained claim about Bharat, inherited tradition or sacred life, so Reviewed · Neutral is the more disciplined verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'NDTV — Pooja Meri Jaan review', claim: 'Describes the crime/courtroom story as challenging romantic tropes through Pooja being blamed after rejecting an obsessive friend who later dies by suicide.', url: 'https://www.ndtv.com/entertainment/pooja-meri-jaan-review-mrunal-thakur-huma-qureshi-navigate-a-messy-love-war-case-after-another-toxic-lovers-suicide-12128853' },
      { kind: 'review', source: 'Indian Express — Pooja Meri Jaan review listing', claim: 'The contemporaneous review identifies the film as a Mrunal Thakur-led social drama whose promise lies in its treatment of the central relationship and accusation.', url: 'https://indianexpress.com/section/entertainment/movie-review/' }
    ],
    filmUnderstanding: 'A contemporary Hindi crime and courtroom drama about rejection, obsessive behaviour, suicide, blame and the legal/social burden placed on a woman.',
    researchFocus: 'male entitlement consent suicide blame courtroom social drama',
    redTeamChallenge: 'A critique of male entitlement could be over-read as an ideological attack on Indian men, romance or family structures.',
    fact: 'The film is contemporary fiction about individual characters and a legal dispute.',
    interpretation: 'Its social critique is specific to entitlement and responsibility; it does not by itself establish either Bharatiya affirmation or civilizational contempt.',
    intent: 'No broader anti-cultural motive is inferred from a gender-accountability narrative.'
  }),

  makeHardenedBatchFilm({
    title: "Don't Trouble the Trouble", year: 2026, language: 'Telugu', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 3, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Fantasy', 'Telugu', 'Magic', 'Character drama'],
    reasons: [
      'The film is principally a fantasy about a conman/street magician confronting a girl with genuine powers, with character emotion and whimsy carrying the story.',
      'The available release-day evidence does not show a material national, sacred, civilizational or anti-civilizational thesis, so it is retained as a Reviewed · Neutral control rather than ideologically over-classified.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Don’t Trouble the Trouble review', claim: 'Describes Suri as a conman and street magician who encounters a girl with real powers in a Telugu fantasy drama.', url: 'https://indianexpress.com/article/entertainment/movie-review/dont-trouble-the-trouble-movie-review-fahadh-faasil-telugu-film-nothing-magical-10903778/' },
      { kind: 'review', source: 'Times of India — audience reaction roundup', claim: 'Records the release-day reception as mixed and characterises the film as a fantasy drama with emotional and magical elements.', url: 'https://timesofindia.indiatimes.com/entertainment/telugu/movies/news/dont-trouble-the-trouble-twitter-review-fahadh-faasils-telugu-debut-gets-mixed-reactions-netizens-call-it-one-time-watch/articleshow/134631506.cms' }
    ],
    filmUnderstanding: 'An original Telugu fantasy drama about a fraudulent magician whose worldview is disrupted by a child with apparently real supernatural power.',
    researchFocus: 'fantasy magic conman child powers religion culture representation',
    redTeamChallenge: 'The supernatural premise might conceal a religious or sacred-tradition claim not evident from surface summaries.',
    fact: 'Release-day reviews describe a fictional magical-fantasy plot rather than a historical, religious or national story.',
    interpretation: 'Magic functions as genre machinery; no durable sacred or civilizational claim was established by the reviewed evidence.',
    intent: 'No religious endorsement or ridicule is inferred without stronger scene-level evidence.'
  }),

  makeHardenedBatchFilm({
    title: 'Bethlehem Kudumba Unit', year: 2026, language: 'Malayalam', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 3, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Malayalam roots', 'Romance', 'Family', 'Social Dharma'],
    reasons: [
      'The film is warmly embedded in ordinary Malayalam family and neighbourhood life and treats love, grief and personal responsibility sympathetically.',
      'Its family/local-root signals are real but the story remains primarily a contemporary romantic comedy without a sufficiently strong civilizational, sacred or national thesis for certification.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Bethlehem Kudumba Unit review', claim: 'Reviews the film as a mature, organically funny age-gap romance and discusses how it avoids normalising troubling relationship behaviour.', url: 'https://indianexpress.com/article/entertainment/movie-review/bethlehem-kudumba-unit-review-nivin-pauly-mamitha-lead-a-sweet-non-creepy-age-gap-rom-com-10842662/lite/' },
      { kind: 'review', source: 'India Today — Bethlehem Kudumba Unit review', claim: 'Describes the film as a wholesome Malayalam rom-com about small joys, grief, love and emotional blocks.', url: 'https://www.indiatoday.in/movies/regional-cinema/story/bethlehem-kudumba-unit-review-nivin-pauly-mamitha-baiju-warm-rom-com-2976749-2026-08-21' },
      { kind: 'review', source: 'Onmanorama — Bethlehem Kudumba Unit review', claim: 'Places the uncomplicated romance inside Girish AD’s locally specific Malayalam social world.', url: 'https://www.onmanorama.com/entertainment/movie-reviews/2026/08/21/nivin-pauly-mamitha-baiju-bethlehem-kudumba-unit-movie-review-onam-entertainer.html' }
    ],
    filmUnderstanding: 'A contemporary Malayalam romantic comedy about a middle-aged unmarried man, a younger neighbour, family, grief and the social awkwardness around their relationship.',
    researchFocus: 'Kerala family age gap romance grief local context representation',
    redTeamChallenge: 'Family warmth and local specificity may tempt an automatic positive cultural verdict even though they are not, by themselves, a strong civilizational thesis.',
    fact: 'The story is original contemporary fiction set in a recognisably Malayalam social milieu.',
    interpretation: 'Its rootedness is positive, but the cultural signal is moderate rather than decisive.',
    intent: 'The film is not treated as making a broad claim about Indian family structures from one romance.'
  }),

  makeHardenedBatchFilm({
    title: 'Yezhu Kadal Yezhu Malai', year: 2026, language: 'Tamil', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 4, raksha: 1, socialDharma: 3, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Tamil', 'Fantasy', 'Love', 'Time'],
    reasons: [
      'The film uses a Tamil fantasy-romance frame in which an apparently 8,000-year-old man pursues love across centuries, with Diwali and local texture appearing in the contemporary journey.',
      'The release-day evidence supports an ambitious time-spanning fantasy but not a sufficiently clear sacred, historical or national argument to justify a directional Culture Check verdict.'
    ],
    evidence: [
      { kind: 'review', source: 'Indian Express — Yezhu Kadal Yezhu Malai review', claim: 'Reviews the film as Ram’s chaotic fantasy drama about an ancient, long-lived protagonist and a centuries-spanning love story.', url: 'https://indianexpress.com/article/entertainment/movie-review/yezhu-kadal-yezhu-malai-review-nivin-pauly-soori-film-messy-ai-overloaded-affair-10901557/' },
      { kind: 'review', source: 'Times of India — Yezhu Kadal Yezhu Malai review', claim: 'Describes a man travelling home on Diwali who meets someone claiming to have lived more than 8,000 years while pursuing his love across centuries.', url: 'https://timesofindia.indiatimes.com/entertainment/tamil/movie-reviews/yezhu-kadal-yezhu-malai/amp_movie_review/134624069.cms' }
    ],
    filmUnderstanding: 'A Tamil fantasy drama built around a train journey, an apparently immortal man and a love story extending across thousands of years.',
    researchFocus: 'immortality Diwali reincarnation Tamil fantasy sacred mythology love',
    redTeamChallenge: 'The centuries-spanning premise could rely on Indic reincarnation or sacred cosmology strongly enough to warrant a civilizational verdict.',
    fact: 'Contemporary reviews consistently describe the film as fantasy rather than a historical or doctrinal religious claim.',
    interpretation: 'Cultural motifs and festival setting are present, but the evidence does not justify equating fantasy longevity with a specific sacred doctrine.',
    intent: 'No religious affirmation or ridicule is inferred beyond what the released film evidence supports.'
  }),

  makeHardenedBatchFilm({
    title: 'Prem Keetanu', year: 2026, language: 'Hindi', status: 'neutral', sourceBasis: 'original-fiction',
    dimensions: { dharma: 2, civilizationalContinuity: 1, rashtra: 1, itihasa: 1, parampara: 1, localRoots: 2, raksha: 1, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Romance', 'Relationships', 'Social Dharma', 'Hindi'],
    reasons: [
      'The film is a modern relationship drama about ambition, rejection, jealousy, insecurity and male entitlement, giving it a limited but real Social Dharma dimension.',
      'Its concerns are contemporary interpersonal behaviour rather than inherited sacred, national or civilizational questions, so Reviewed · Neutral avoids forcing a cultural verdict onto a conventional rom-com.'
    ],
    evidence: [
      { kind: 'review', source: 'Hindustan Times — Prem Keetanu review', claim: 'Describes the central arc as an aimless young man meeting an ambitious woman, being rejected and attempting to find purpose.', url: 'https://www.hindustantimes.com/entertainment/bollywood/prem-keetanu-review-veer-pahariyas-harmless-rom-com-has-enough-charm-to-entertain-needed-more-to-impress-101790921325267.html' },
      { kind: 'review', source: 'India Today — Prem Keetanu review', claim: 'Characterises the film as attempting to critique modern relationship anxieties and male entitlement amid career pressure, jealousy and insecurity.', url: 'https://www.indiatoday.in/movies/reviews/story/prem-keetanu-review-veer-pahariya-preachy-drama-fails-as-a-modern-rom-com-3007987-2026-10-02' }
    ],
    filmUnderstanding: 'A contemporary Hindi romantic drama following college-age characters into adult relationships, career pressure, jealousy and emotional insecurity.',
    researchFocus: 'modern romance male entitlement relationship career jealousy cultural representation',
    redTeamChallenge: 'A gender critique may be mistaken for broader hostility to Indian romance, marriage or family norms.',
    fact: 'The film is contemporary fictional romance centred on individual relationship behaviour.',
    interpretation: 'Critiquing entitlement is a social-dharma concern, not enough by itself to imply civilizational rejection or affirmation.',
    intent: 'No broader cultural motive is inferred from the film’s relationship thesis.'
  }),
];
