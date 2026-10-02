import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const swadesReview = 'https://www.rediff.com/movies/review/swades1/20041217.htm';
const swadesInterview = 'https://www.rediff.com/movies/report/ashu/20041216.htm';
const lakshyaInterview = 'https://www.rediff.com/movies/report/farhan/20040408.htm';
const lakshyaWarInterview = 'https://im.rediff.com/movies/2004/jun/15laks1.htm';
const uriDirector = 'https://indianexpress.com/article/entertainment/bollywood/uri-film-surgical-strike-vicky-kaushal-aditya-dhar-interview-5526712/lite/';
const uriReview = 'https://indianexpress.com/article/entertainment/movie-review/uri-review-rating-vicky-kaushal-5531285/';
const uriCounter = 'https://amp.scroll.in/reel/908958/uri-the-surgical-strike-movie-review-the-action-is-as-slick-as-the-propaganda';
const article370Director = 'https://indianexpress.com/article/entertainment/bollywood/article-370-director-aditya-jambhale-says-yami-gautam-starrer-is-based-on-true-facts-this-mission-was-carried-out-very-secretively-had-to-dig-out-information-not-available-in-the-public-domain-9183921/';
const article370Review = 'https://indianexpress.com/article/entertainment/movie-review/article-370-movie-review-yami-gautam-starrer-serves-its-politics-unabashedly-9176508/lite/';
const article370Counter = 'https://www.hindustantimes.com/entertainment/bollywood/article-370-movie-review-yami-gautam-priyamani-steal-the-show-chapter-101708656432240.html';
const kashmirFilesResearch = 'https://www.indiatoday.in/amp/movies/bollywood/story/here-s-what-went-into-making-of-the-kashmiri-files-700-interviews-of-victims-5-000-hours-of-research-1925281-2022-03-14';
const kashmirFilesPandits = 'https://indianexpress.com/article/cities/pune/as-the-kashmir-files-opens-in-city-pandits-recall-pain-and-grief-7817061/';
const kashmirFilesCritique = 'https://scroll.in/article/1019863/here-are-five-things-the-kashmir-files-gets-wrong-about-kashmir';
const kashmirFilesCounter = 'https://indianexpress.com/article/entertainment/bollywood/vivek-agnihotri-on-the-kashmir-files-i-wanted-to-make-a-sensitive-film-7819670/lite/';

export const fullRecertificationV2Batch01: SanghiProfile[] = [
  hardenedProfile({
    title: 'Swades',
    year: 2004,
    language: 'Hindi',
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 4,
      civilizationalContinuity: 4,
      rashtra: 5,
      itihasa: 1,
      parampara: 3,
      localRoots: 5,
      raksha: 1,
      socialDharma: 5,
      sacredRegard: 2,
      contemptRisk: 0,
    },
    tags: ['Rashtra', 'Local roots', 'Social Dharma', 'Development'],
    reasons: [
      'Mohan’s return to India culminates in direct responsibility for village welfare rather than nostalgic patriotism: caste exclusion, education, water and electricity become problems to solve from within society, not reasons to reject India.',
      'The film treats rooted belonging, social reform and practical service as mutually reinforcing. Its critique of caste and underdevelopment is therefore a Social Dharma strength rather than civilizational contempt.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'review', source: 'Rediff — Swades review', claim: 'The review records the film’s focus on poverty, caste, illiteracy, child labour and lack of electricity, and Mohan’s decision to work directly in Charanpur.', url: swadesReview },
      { kind: 'interview', source: 'Rediff — Ashutosh Gowariker interview', claim: 'Gowariker describes the film as a call for Indians abroad to think about India and for individuals to make a practical difference.', url: swadesInterview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A fictional drama about an Indian-origin NASA engineer who returns to a village, confronts caste and development failures, builds local electricity capacity and ultimately chooses sustained service in India.',
      discoveryQueries: [
        'Swades source adaptation true story inspiration Mohan Bhargava',
        'Swades Hindu Muslim caste community identity representation',
        'Swades Brahmin Dalit caste ridicule stereotype contempt representation',
        'Swades criticism controversy patriotism caste development factual accuracy',
        'Swades Ashutosh Gowariker interview India diaspora village development',
      ],
      probeOverrides: {
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film criticises caste exclusion and social failure without generalising contempt toward a caste, religion or linguistic community; reform is framed as responsibility toward fellow Indians.', evidenceUrls: [swadesReview] },
        'regional-context': { status: 'clear', materiality: 'medium', summary: 'Village life is used as a concrete Indian social setting rather than flattened into a generic anti-tradition argument.', evidenceUrls: [swadesReview, swadesInterview] },
        'self-falsification': { status: 'clear', materiality: 'high', summary: 'The strongest adverse reading is that the film indicts Indian social structures; the narrative answer is not exit or deracination but deeper service and belonging.', evidenceUrls: [swadesReview, swadesInterview] },
      },
      redTeam: {
        completed: true,
        strongestChallenge: 'Because the film foregrounds caste, poverty and village dysfunction, its social criticism could be mistaken for a negative civilizational verdict.',
        outcome: 'cleared',
        evidenceUrls: [],
        verdictImpact: 'The challenge does not survive the ending or the director’s framing: reform, rootedness and service to India are the film’s affirmative resolution.',
      },
      factInterpretationIntent: {
        fact: 'Swades is fiction about a diaspora engineer returning to rural India and choosing sustained local service after confronting concrete social problems.',
        interpretation: 'Its patriotism is civic and developmental: India is worthy of responsibility precisely because its problems require Indians to act.',
        intent: 'The verdict does not infer political intent; it follows the film’s narrative resolution and the director’s stated emphasis on individual contribution to India.',
      },
    }),
  }),

  hardenedProfile({
    title: 'Lakshya',
    year: 2004,
    language: 'Hindi',
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 3,
      civilizationalContinuity: 2,
      rashtra: 5,
      itihasa: 2,
      parampara: 2,
      localRoots: 3,
      raksha: 5,
      socialDharma: 4,
      sacredRegard: 1,
      contemptRisk: 0,
    },
    tags: ['Rashtra', 'Raksha', 'Indian Army', 'Duty'],
    reasons: [
      'Karan’s moral growth is expressed through discipline, responsibility and Indian Army service during a fictionalised Kargil setting; national defence becomes the arena in which an aimless young man accepts duty larger than himself.',
      'Farhan Akhtar explicitly described self-discovery as the core rather than an India-Pakistan ideological message. That limits jingoistic over-reading but does not erase the film’s sustained respect for Indian military service and sacrifice.',
    ],
    integrityFlags: [],
    evidence: [
      { kind: 'interview', source: 'Rediff — Farhan Akhtar on Lakshya', claim: 'Akhtar says the core story is about an aimless young man finding himself and that the Kargil setting is not intended as a strong India-Pakistan political message.', url: lakshyaInterview },
      { kind: 'interview', source: 'Rediff — Farhan Akhtar and the art of war', claim: 'Akhtar describes Lakshya as a war drama set against the 1999 Operation Vijay/Kargil conflict and discusses recreating the military setting.', url: lakshyaWarInterview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A fictional coming-of-age military drama in which Karan Shergill joins the Indian Army, matures through training and responsibility, and serves during a Kargil-like conflict.',
      discoveryQueries: [
        'Lakshya source adaptation true story Kargil Operation Vijay inspiration',
        'Lakshya Hindu Muslim caste community identity representation army',
        'Lakshya Pakistani community stereotype insult contempt representation',
        'Lakshya criticism controversy military accuracy Kargil factual dispute',
        'Lakshya Farhan Akhtar interview patriotism army self discovery',
      ],
      probeOverrides: {
        'historical-claims': { status: 'clear', materiality: 'medium', summary: 'The film uses the Kargil conflict as a fictional dramatic setting and does not present Karan Shergill as a documented historical officer.', evidenceUrls: [lakshyaInterview, lakshyaWarInterview] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The audit did not find a generalized contempt thesis toward Pakistani civilians, Muslims or another Indian community; the conflict is framed primarily through soldiering and self-discovery.', evidenceUrls: [lakshyaInterview] },
        'self-falsification': { status: 'clear', materiality: 'high', summary: 'The director’s own statement that the Army setting is incidental to the coming-of-age core is retained as counterweight against overstating the film as nationalist propaganda.', evidenceUrls: [lakshyaInterview] },
      },
      redTeam: {
        completed: true,
        strongestChallenge: 'If the director regards the Army setting as incidental, a Sanghi Certified verdict could overstate nationalism that the filmmaker did not intend as the primary theme.',
        outcome: 'qualified',
        evidenceUrls: [lakshyaInterview],
        verdictImpact: 'Intent is not the sole criterion: the completed narrative still makes Indian Army duty, discipline, territorial defence and sacrifice decisive to Karan’s transformation, supporting certification without calling the film jingoistic.',
      },
      strongestCounterEvidence: [
        { kind: 'interview', source: 'Rediff — Farhan Akhtar on Lakshya', claim: 'Akhtar says the central story is self-discovery and not a strong India-Pakistan message.', url: lakshyaInterview },
      ],
      factInterpretationIntent: {
        fact: 'Lakshya is fictional, set against a recognisable 1999 Kargil/Operation Vijay backdrop; its protagonist is not presented as a literal historical figure.',
        interpretation: 'The Army is both setting and moral institution in the finished film, so Rashtra and Raksha remain strong even though personal growth is the director’s stated core.',
        intent: 'The director explicitly rejects a strong India-Pakistan ideological message; the certification therefore rests on narrative treatment of service and duty rather than inferred political intent.',
      },
    }),
  }),

  hardenedProfile({
    title: 'Uri: The Surgical Strike',
    year: 2019,
    language: 'Hindi',
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 3,
      civilizationalContinuity: 2,
      rashtra: 5,
      itihasa: 3,
      parampara: 2,
      localRoots: 3,
      raksha: 5,
      socialDharma: 3,
      sacredRegard: 1,
      contemptRisk: 1,
    },
    tags: ['Rashtra', 'Raksha', 'Indian Army', 'True-event dramatization'],
    reasons: [
      'The film’s central moral frame is unapologetically Indian national defence: soldiers killed in the Uri attack are remembered through a retaliatory military mission, with courage, preparedness and collective service treated as virtues.',
      'Its reconstruction of the 2016 operation contains invented characters, tactical dramatization and overt political heroisation. Those are substantial Narrative Integrity and propaganda counter-readings, but they do not reverse the film’s clear Rashtra/Raksha alignment.',
    ],
    integrityFlags: [{
      type: 'source-fidelity', status: 'supported',
      summary: 'The film is a fictionalised reconstruction of the 2016 surgical strikes rather than a documentary record of the operation or its classified planning details.',
      fact: 'The 2016 Uri attack and Indian Army surgical strikes are real events; the film builds fictional characters, dialogue and operational detail around them.',
      interpretation: 'Dramatization limits scene-level historical fidelity while leaving the film’s national-defence orientation unambiguous.',
      intent: 'Director Aditya Dhar openly presents the film as a dramatised story inspired by the strikes, not as release of classified operational records.',
    }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Aditya Dhar interview', claim: 'Dhar explains why he chose the 2016 surgical strikes as the basis for Uri and discusses constructing the war drama.', url: uriDirector },
      { kind: 'review', source: 'Indian Express — Uri review', claim: 'The review identifies the surgical strikes, Indian Army heroism and overt nationalist framing while explicitly criticising jingoistic and political elements.', url: uriReview },
      { kind: 'review', source: 'Scroll — Uri review', claim: 'Provides the strongest adversarial reading, describing the film as a slick fictionalised retelling whose patriotic action also functions as political propaganda.', url: uriCounter },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'true-story',
      filmUnderstanding: 'A fictionalised military thriller built around the September 2016 Uri terror attack and the Indian Army surgical strikes across the Line of Control, following invented or composite personnel through planning and execution.',
      discoveryQueries: [
        'Uri Surgical Strike source adaptation true story 2016 operation fictional characters',
        'Uri Hindu Muslim Pakistani community identity representation',
        'Uri Pakistan Muslim stereotype insult contempt representation propaganda',
        'Uri controversy criticism accuracy factual dispute surgical strike details',
        'Uri Aditya Dhar interview propaganda jingoism Indian Army',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'A real military event is reconstructed through fictional/composite characters and imagined classified operational detail.', evidenceUrls: [uriDirector, uriReview] },
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'The broad event is historical, but specific planning, dialogue, technology use and personal actions should not be treated as independently verified operational history.', evidenceUrls: [uriDirector, uriReview] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film is hostile toward terrorists and the opposing security apparatus, but the reviewed evidence does not establish a generalized contempt thesis toward Indian Muslims or Muslims as a religious community.', evidenceUrls: [uriReview, uriCounter] },
        'social-radar': { status: 'finding', materiality: 'high', summary: 'Major criticism describes the film as jingoistic or election-era propaganda and notes idealisation of the government and security establishment.', evidenceUrls: [uriReview, uriCounter] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest counter-reading is that political heroisation and simplified enemy portrayal make the film government propaganda rather than merely a soldiers’ story.', evidenceUrls: [uriCounter, uriReview] },
      },
      strongestCounterEvidence: [
        { kind: 'review', source: 'Scroll — Uri review', claim: 'Argues that the film’s slick military action is inseparable from election-era political propaganda.', url: uriCounter },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'The film’s political timing, idealised government leadership and one-sided enemy construction could make its nationalism partisan propaganda rather than a durable Rashtra signal.',
        outcome: 'qualified',
        evidenceUrls: [uriCounter, uriReview],
        verdictImpact: 'The propaganda critique remains explicit, but the film’s primary narrative still honours Indian soldiers, defence and response to a real terror attack. That sustains certification while source fidelity and political framing remain caveated.',
      },
      factInterpretationIntent: {
        fact: 'The Uri attack and subsequent Indian surgical strikes occurred; much of the film’s character-level and operational narrative is dramatised.',
        interpretation: 'The film is strongly India-first and military-positive, while its political simplification and heroisation require visible integrity caveats.',
        intent: 'The director’s public framing supports a desire to tell the strike story; the audit does not need to infer partisan intent to recognise the finished film’s overt nationalist politics.',
      },
    }),
  }),

  hardenedProfile({
    title: 'Article 370',
    year: 2024,
    language: 'Hindi',
    status: 'certified',
    confidence: 'high',
    dimensions: {
      dharma: 2,
      civilizationalContinuity: 4,
      rashtra: 5,
      itihasa: 4,
      parampara: 2,
      localRoots: 3,
      raksha: 5,
      socialDharma: 3,
      sacredRegard: 1,
      contemptRisk: 1,
    },
    tags: ['Rashtra', 'Raksha', 'Kashmir', 'Political history'],
    reasons: [
      'The film explicitly treats constitutional integration of Jammu and Kashmir with India, counter-terror operations and state capacity as affirmative goals. Under the declared Bharatiya lens, that is a strong Rashtra/Raksha signal rather than something that requires ideological neutrality.',
      'The certification does not endorse the film as a complete constitutional history. Independent criticism identifies selective history, compressed events and a strongly government-favouring frame, which remain material Narrative Integrity caveats.',
    ],
    integrityFlags: [{
      type: 'historical-claim', status: 'supported',
      summary: 'The film mixes documented events around militancy, Pulwama, constitutional procedure and the 2019 changes with fictional characters, compressed chronology and contested political interpretations.',
      fact: 'The abrogation/reconfiguration of Article 370 in 2019 is historical; the screenplay dramatises secret planning and simplifies contested constitutional and political history.',
      interpretation: 'Those choices reduce value as neutral historical reconstruction without changing the film’s explicit India-integration viewpoint.',
      intent: 'The director says the team aimed for authenticity and researched non-public details; that claim is recorded but not treated as independent proof of every scene.',
    }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Aditya Suhas Jambhale interview', claim: 'Jambhale says the team researched the 2019 operation extensively and intended the film to explain why and how Article 370 was changed.', url: article370Director },
      { kind: 'review', source: 'Indian Express — Article 370 review', claim: 'The review identifies the film’s unabashedly government-favouring politics and challenges historical and constitutional simplifications.', url: article370Review },
      { kind: 'review', source: 'Hindustan Times — Article 370 review', claim: 'A more favourable review credits the film with a detailed, research-heavy account while acknowledging creative liberties.', url: article370Counter },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'history',
      filmUnderstanding: 'A political-action drama that fictionalises intelligence and bureaucratic characters around real Kashmir militancy, Pulwama, parliamentary/constitutional manoeuvring and the August 2019 change to Article 370.',
      discoveryQueries: [
        'Article 370 film source adaptation true story constitutional history 2019',
        'Article 370 film Hindu Muslim Kashmiri community identity representation',
        'Article 370 Kashmiri Muslim stereotype contempt ridicule representation',
        'Article 370 movie criticism controversy accuracy factual dispute constitution',
        'Article 370 Aditya Jambhale interview research authenticity politics',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The screenplay surrounds a real constitutional-political event with fictional/composite protagonists and reconstructed secret deliberations.', evidenceUrls: [article370Director, article370Review] },
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'The central 2019 event is real, while earlier Kashmir history and the procedural road to the change are selectively simplified and politically framed.', evidenceUrls: [article370Review, article370Counter] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film strongly criticises separatists, militants and corrupt political actors; the audited sources do not establish a generalised contempt message toward Kashmiri Muslims as a religious community.', evidenceUrls: [article370Review, article370Counter] },
        'social-radar': { status: 'finding', materiality: 'high', summary: 'A major critical line is that the film is partisan, one-sided and politically convenient in an election period.', evidenceUrls: [article370Review] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest challenge is that a government-favouring narrative and contested constitutional simplification could be mistaken for neutral history.', evidenceUrls: [article370Review] },
      },
      strongestCounterEvidence: [
        { kind: 'review', source: 'Indian Express — Article 370 review', claim: 'Challenges the film’s historical selectivity, constitutional simplification and partisan framing.', url: article370Review },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'A film that presents one government’s constitutional strategy as near-unambiguous statecraft may be political advocacy rather than reliable historical explanation.',
        outcome: 'qualified',
        evidenceUrls: [article370Review, article370Counter],
        verdictImpact: 'That challenge materially limits its Narrative Integrity score, but the declared Culture Check lens separately recognises sovereignty, integration and counter-terror defence as legitimate positive Rashtra/Raksha signals.',
      },
      factInterpretationIntent: {
        fact: 'The 2019 constitutional changes and many referenced terror/political events are real; the film fictionalises people, secret planning and portions of the historical chain.',
        interpretation: 'Its pro-integration and national-security position supports certification, while historical selectivity must remain visible instead of being converted into factual endorsement.',
        intent: 'The makers openly claim authenticity and a desire to explain the operation; the audit records that claim but adjudicates the film from evidence rather than trusting stated intent.',
      },
    }),
  }),

  hardenedProfile({
    title: 'The Kashmir Files',
    year: 2022,
    language: 'Hindi',
    status: 'mixed',
    confidence: 'high',
    dimensions: {
      dharma: 3,
      civilizationalContinuity: 4,
      rashtra: 4,
      itihasa: 4,
      parampara: 3,
      localRoots: 4,
      raksha: 3,
      socialDharma: 2,
      sacredRegard: 3,
      contemptRisk: 4,
    },
    tags: ['Kashmiri Pandits', 'Historical memory', 'Community representation', 'Mixed'],
    reasons: [
      'The film performs a legitimate and culturally significant act of remembrance by centring Kashmiri Pandit killings, displacement, trauma and the loss of a Hindu community’s homeland—subjects that had often been marginal in popular Hindi cinema.',
      'However, the current symmetric contempt standard cannot ignore the film’s broad treatment of Kashmiri Muslims. Independent criticism documents composite chronology, unverified or transplanted incidents and a narrative pattern that can invite collective suspicion of a whole community. Those problems are material enough to block a clean Sanghi Certified verdict.',
    ],
    integrityFlags: [
      {
        type: 'historical-claim', status: 'supported',
        summary: 'The film combines real killings and displacement with fictional/composite characters, compressed chronology and disputed scene-level claims while presenting itself publicly as suppressed history.',
        fact: 'Kashmiri Pandit killings and large-scale displacement during the insurgency are historical; several scenes combine events from different years or use disputed/unverified details.',
        interpretation: 'The historical core deserves remembrance, but compression and interpolation make the film unsafe as a literal event-by-event record.',
        intent: 'The filmmakers describe extensive victim testimony research; the audit does not infer fabrication merely from dramatization, but stated research does not independently verify every scene.',
      },
      {
        type: 'community-contempt', status: 'supported',
        summary: 'The film’s repeated hostile portrayal of Muslim neighbours, clerics, militants and institutional actors creates a credible collective-targeting reading beyond criticism of identified terrorists or separatist organisations.',
        fact: 'Independent critical accounts identify scenes and narrative choices in which Kashmiri Muslim society is shown with little countervailing moral agency and disputed incidents are used to support collective complicity.',
        interpretation: 'Under a symmetric standard, remembering Hindu victims cannot excuse material generalized contempt toward Muslims; this is the decisive reason the verdict is Mixed rather than Certified.',
        intent: 'The filmmakers deny an anti-Muslim purpose and frame the project as victim testimony and historical recovery; hostile intent toward all Muslims is not asserted as fact.',
      },
    ],
    evidence: [
      { kind: 'interview', source: 'India Today — research behind The Kashmir Files', claim: 'Agnihotri says the team interviewed roughly 700 Kashmiri Pandit victims and collected extensive documents and testimony before making the film.', url: kashmirFilesResearch },
      { kind: 'review', source: 'Indian Express — Pandit audience and filmmaker accounts', claim: 'Records Kashmiri Pandit viewers recognising trauma represented in the film and the filmmakers describing the testimony process.', url: kashmirFilesPandits },
      { kind: 'review', source: 'Scroll — factual and representation critique', claim: 'Documents chronology compression, disputed scene details and the argument that the film generalises complicity across Kashmiri Muslims rather than limiting blame to militants and specific actors.', url: kashmirFilesCritique },
      { kind: 'interview', source: 'Indian Express — Vivek Agnihotri on The Kashmir Files', claim: 'Agnihotri and participants describe the project as restoring a suppressed Pandit story and emphasise extensive community research.', url: kashmirFilesCounter },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'history',
      filmUnderstanding: 'A fictional/composite family narrative built from real Kashmiri Pandit killings, displacement and testimony during the Kashmir insurgency, presented as an intervention in public historical memory.',
      discoveryQueries: [
        'The Kashmir Files source adaptation true story victim testimony chronology',
        'The Kashmir Files Hindu Muslim Kashmiri Pandit community identity representation',
        'The Kashmir Files Muslim stereotype contempt ridicule hate representation criticism',
        'The Kashmir Files controversy criticism accuracy factual dispute Nadimarg Girija Tickoo',
        'The Kashmir Files Vivek Agnihotri interview 700 victims research counter evidence',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The film creates composite characters and compresses events from different years into a single family/narrative timeline while drawing on real victim testimony.', evidenceUrls: [kashmirFilesResearch, kashmirFilesCritique] },
        'identity-substitution': { status: 'finding', materiality: 'medium', summary: 'Composite characters and merged incidents alter who experienced particular events, requiring viewers not to read each fictional identity as a one-to-one historical person.', evidenceUrls: [kashmirFilesCritique] },
        'community-contempt': { status: 'finding', materiality: 'high', summary: 'The strongest evidence-based concern is narrative generalisation from militants and collaborators toward Kashmiri Muslims more broadly, with limited countervailing Muslim moral agency.', evidenceUrls: [kashmirFilesCritique] },
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'The historical core of Pandit persecution and displacement is real, but chronology, casualty framing and several scene-level claims are contested or compressed.', evidenceUrls: [kashmirFilesCritique, kashmirFilesResearch] },
        'creator-source-conflict': { status: 'finding', materiality: 'high', summary: 'The filmmakers publicly emphasise extensive testimony research and factual recovery while independent criticism disputes multiple literal historical details and the breadth of the film’s community portrayal.', evidenceUrls: [kashmirFilesResearch, kashmirFilesCritique] },
        'social-radar': { status: 'finding', materiality: 'high', summary: 'Public criticism repeatedly raises both factual accuracy and anti-Muslim generalisation, while many Pandit viewers and organisations regard the film as overdue recognition of their trauma.', evidenceUrls: [kashmirFilesCritique, kashmirFilesPandits] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest case for certification is the film’s restoration of Kashmiri Pandit suffering to popular memory after extensive victim interviews; the strongest case against is collective Muslim representation and historical compression.', evidenceUrls: [kashmirFilesPandits, kashmirFilesCounter, kashmirFilesCritique] },
      },
      strongestCounterEvidence: [
        { kind: 'review', source: 'Indian Express — Pandit audience and filmmaker accounts', claim: 'Kashmiri Pandit viewers describe the film as recognisable representation of inherited trauma, supporting the importance of its historical-memory function.', url: kashmirFilesPandits },
        { kind: 'interview', source: 'Indian Express — Vivek Agnihotri on The Kashmir Files', claim: 'The makers describe extensive testimony research and an intent to restore a marginalised community history.', url: kashmirFilesCounter },
      ],
      redTeam: {
        completed: true,
        strongestChallenge: 'Downgrading the film because of Muslim representation could itself erase the reality of Islamist militancy, targeted Pandit killings and a displaced Hindu community’s right to historical memory.',
        outcome: 'qualified',
        evidenceUrls: [kashmirFilesPandits, kashmirFilesResearch, kashmirFilesCritique],
        verdictImpact: 'The historical-memory and victim-recognition case prevents a Not Certified judgment. But the same symmetric standard used for Brahmin, Dalit, Hindu or other community contempt requires material Muslim collective-targeting concerns to block a clean certification. Mixed / Contested is therefore the durable result.',
      },
      factInterpretationIntent: {
        fact: 'Kashmiri Pandits suffered targeted killings, threats and large-scale displacement; the film builds a fictional/composite story from testimony and documented incidents while altering chronology and some event details.',
        interpretation: 'The film is culturally significant as Hindu/Pandit historical remembrance but also carries a material community-generalisation risk that cannot be excused by the importance of its subject.',
        intent: 'The filmmakers state that their aim is victim testimony and historical recovery. The audit does not assert anti-Muslim intent; the Mixed verdict rests on narrative effect, representation pattern and factual compression.',
      },
    }),
  }),
];
