import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const sardarReview = 'https://indianexpress.com/article/entertainment/movie-review/sardar-udham-movie-review-a-turbulent-slice-of-indias-colonial-past-7573877/lite/';
const sardarReconstruction = 'https://www.indiatoday.in/movies/celebrities/story/india-today-conclave-2021-vicky-kaushal-says-shooting-sardar-udham-s-jallianwala-bagh-scene-was-numbing-1862423-2021-10-08';

const keralaStoryCourt = 'https://indianexpress.com/article/india/sc-order-west-bengal-ban-the-kerala-story-8616483/';
const keralaStoryExplainer = 'https://indianexpress.com/article/explained/how-accurate-are-the-claims-made-by-the-kerala-story-8586042/';
const keralaStoryReview = 'https://www.indiatoday.in/movies/reviews/story/the-kerala-story-movie-review-adah-sharma-vipul-amrutlal-shah-sudipto-sen-2368893-2023-05-05';

const animalDirector = 'https://indianexpress.com/article/entertainment/bollywood/sandeep-reddy-vanga-explains-why-bobby-deol-character-in-animal-is-a-muslim-9075625/lite/';
const animalReview = 'https://www.indiatoday.in/movies/reviews/story/animal-movie-review-ranbir-kapoor-is-stellar-in-problematic-paper-thin-film-2469885-2023-12-01';
const animalCulture = 'https://indianexpress.com/article/entertainment/bollywood/animal-song-arjan-vailly-origin-meaning-controversy-behind-ranbir-kapoor-starrer-9064951/';

const rocketryInterview = 'https://indianexpress.com/article/entertainment/bollywood/r-madhavan-on-rocketry-being-his-pan-india-offering-rest-of-the-world-is-catching-up-to-me-i-already-set-the-trend-many-years-ago-8002435/';
const rocketryCritique = 'https://indianexpress.com/article/cities/thiruvananthapuram/former-colleagues-of-isro-nambi-narayanan-his-claims-in-rocketry-8111474/';
const nambiCourt = 'https://api.sci.gov.in/supremecourt/2018/32319/32319_2018_Judgement_28-Sep-2018.pdf';

const ramSetuInterview = 'https://www.hindustantimes.com/entertainment/bollywood/akshay-kumar-on-his-diwali-release-ram-setu-is-very-proudly-rooted-in-indian-history-and-culture-101666589182945.html';
const ramSetuReview = 'https://indianexpress.com/article/entertainment/movie-review/ram-setu-movie-review-akshay-kumar-8228574/';
const ramSetuCounter = 'https://www.hindustantimes.com/entertainment/bollywood/ram-setu-movie-review-akshay-kumar-film-is-enjoyable-desi-take-on-indiana-jones-101666686730206.html';

const majorOfficial = 'https://nsg.gov.in/veer-gatha';
const majorInterview = 'https://indianexpress.com/article/entertainment/telugu/adivi-sesh-on-26-11-hero-major-unnikrishnans-biopic-7642875/';
const majorReview = 'https://indianexpress.com/article/entertainment/movie-review/major-movie-review-sandeep-unnikrishnan-7949642/';

export const fullRecertificationV2OwnerExceptions: SanghiProfile[] = [
  hardenedProfile({
    title: 'Sardar Udham', year: 2021, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 5, itihasa: 5, parampara: 3, localRoots: 4, raksha: 4, socialDharma: 4, sacredRegard: 1, contemptRisk: 0 },
    tags: ['Rashtra', 'Itihasa', 'Anti-colonial', 'Jallianwala Bagh'],
    reasons: [
      'The film treats Jallianwala Bagh and colonial repression as Indian historical trauma and follows Udham Singh’s long pursuit of Michael O’Dwyer as an anti-colonial act rooted in memory, sacrifice and resistance to imperial rule.',
      'Its politics are not required to be neutral between coloniser and colonised. Creative reconstruction and compressed biography remain Narrative Integrity caveats, but the finished film’s India-first anti-colonial orientation is decisive.'
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The film is based on Udham Singh and Jallianwala Bagh but uses reconstructed dialogue, invented connective material and creative liberties rather than functioning as a documentary biography.', fact: 'Udham Singh assassinated Michael O’Dwyer in London in 1940; the film explicitly states that it dramatizes true events and recreates portions of his life for cinema.', interpretation: 'Dramatization affects scene-level certainty without changing the anti-colonial historical core.', intent: 'The makers openly present the work as a cinematic reconstruction rather than a verbatim archival record.' }],
    evidence: [
      { kind: 'review', source: 'Indian Express — Sardar Udham review', claim: 'Records the film’s true-event basis, Udham Singh’s assassination of Michael O’Dwyer and the centrality of Jallianwala Bagh, while noting explicit creative-liberty disclaimers.', url: sardarReview },
      { kind: 'interview', source: 'India Today Conclave — Shoojit Sircar on recreating Jallianwala Bagh', claim: 'Sircar describes using archival footage, photographs and historical material to construct the Jallianwala Bagh world for the film.', url: sardarReconstruction },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic',
      filmUnderstanding: 'A historical drama about Udham Singh, his connection to the Jallianwala Bagh massacre, revolutionary networks, years abroad and the 1940 assassination of former Punjab lieutenant-governor Michael O’Dwyer.',
      discoveryQueries: [
        'Sardar Udham source adaptation biopic true story Udham Singh Jallianwala Bagh',
        'Sardar Udham religion caste community identity representation British Indian',
        'Sardar Udham British community stereotype contempt ridicule representation colonial',
        'Sardar Udham criticism controversy accuracy factual dispute historical liberties',
        'Sardar Udham Shoojit Sircar interview archives Jallianwala Bagh reconstruction',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The biographical core is historical while dialogue, travel, relationships and connective events are cinematically reconstructed.', evidenceUrls: [sardarReview, sardarReconstruction] },
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'The broad Udham Singh/Jallianwala Bagh history is real, but viewers should not treat every scene or chronology choice as archival fact.', evidenceUrls: [sardarReview, sardarReconstruction] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film condemns British colonial rule and responsible officials; anti-colonial hostility toward an imperial system is not generalized contempt toward British people as an inherent community.', evidenceUrls: [sardarReview] },
        'self-falsification': { status: 'clear', materiality: 'high', summary: 'The strongest challenge is that revolutionary vengeance and cinematic reconstruction could be romanticised beyond the archive; the source audit retains that caveat without changing the anti-colonial verdict.', evidenceUrls: [sardarReview] },
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express — Sardar Udham review', claim: 'Notes creative liberties and the difficulty of treating the work as a straightforward documentary biopic.', url: sardarReview }],
      redTeam: { completed: true, strongestChallenge: 'The film could mythologise Udham Singh and use Jallianwala Bagh primarily to justify revenge, overstating details that survive poorly in the historical record.', outcome: 'qualified', evidenceUrls: [sardarReview, sardarReconstruction], verdictImpact: 'That limits documentary precision, not the film’s strong Itihasa and anti-colonial Rashtra alignment.' },
      factInterpretationIntent: { fact: 'Udham Singh, Jallianwala Bagh and the assassination of Michael O’Dwyer are historical; the film reconstructs much of the surrounding biography.', interpretation: 'The reconstruction remains an India-centred anti-colonial historical-memory film even where scene-level fidelity is uncertain.', intent: 'The audit relies on the finished film and disclosed reconstruction process, not an assumption that every dramatic detail is literally true.' }
    })
  }),

  hardenedProfile({
    title: 'The Kerala Story', year: 2023, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 4, rashtra: 4, itihasa: 2, parampara: 3, localRoots: 3, raksha: 5, socialDharma: 3, sacredRegard: 4, contemptRisk: 2 },
    tags: ['Raksha', 'Coercive conversion', 'ISIS', 'Narrative Integrity warning'],
    reasons: [
      'The film treats coercive conversion, ideological radicalisation, trafficking and ISIS recruitment as serious threats to Indian women and families. Under the declared Bharatiya/Raksha lens, that subject is a legitimate positive certification signal even though the film is polemical and highly asymmetric.',
      'The original 32,000 promotional figure was not authenticated and the producers accepted a disclaimer saying no established data supported that number. That is a major Narrative Integrity failure, but it does not erase the film’s cultural position against coercive radicalisation and extremist recruitment.'
    ],
    integrityFlags: [{ type: 'quantitative-claim', status: 'verified', summary: 'The original 32,000-women promotional claim was not authenticated; the producers agreed in court to a disclaimer stating that no authentic data backed 32,000 or another established conversion figure.', fact: 'The Supreme Court proceedings recorded the producer’s agreement to add that disclaimer and describe the film as a fictionalised account.', interpretation: 'The number materially exaggerated scale and must not be repeated as established fact.', intent: 'The audit does not infer deliberate deception from the unsupported number alone.' }],
    evidence: [
      { kind: 'official', source: 'Indian Express — Supreme Court proceedings on The Kerala Story', claim: 'Reports the producer’s agreement to state that no authentic data supports the 32,000 figure and that the film is a fictionalised account.', url: keralaStoryCourt },
      { kind: 'review', source: 'Indian Express — accuracy explainer', claim: 'Examines the 32,000 claim and distinguishes the film’s radicalisation premise from the unsupported scale asserted in promotion.', url: keralaStoryExplainer },
      { kind: 'review', source: 'India Today — The Kerala Story review', claim: 'Describes the film’s central plot as conversion, ISIS radicalisation and abuse of its female protagonist while criticising over-dramatisation and execution.', url: keralaStoryReview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'mixed-unknown',
      filmUnderstanding: 'A fictionalised drama about young women in Kerala who are manipulated or coerced into religious conversion and drawn toward ISIS-linked radicalisation, presented as a warning about extremist recruitment.',
      discoveryQueries: [
        'The Kerala Story source adaptation true story ISIS Kerala women conversion recruitment',
        'The Kerala Story Hindu Muslim Christian community identity representation',
        'The Kerala Story Muslim stereotype contempt ridicule hate representation criticism',
        'The Kerala Story controversy criticism accuracy factual dispute 32000 disclaimer',
        'The Kerala Story Sudipto Sen Vipul Shah interview research radicalisation intent',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The film claims inspiration from real cases but presents a fictionalised composite story rather than a documented one-to-one account.', evidenceUrls: [keralaStoryCourt, keralaStoryExplainer] },
        'quantitative-claims': { status: 'finding', materiality: 'high', summary: 'The 32,000 promotional claim was not authenticated and was formally disclaimed by the producer.', evidenceUrls: [keralaStoryCourt, keralaStoryExplainer] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film’s antagonists are radicalisers, recruiters, abusive partners and ISIS-linked actors. Its representational asymmetry is severe, but under the clarified rule that is not by itself proof of inherent contempt toward Muslims as Muslims.', evidenceUrls: [keralaStoryReview, keralaStoryExplainer] },
        'social-radar': { status: 'finding', materiality: 'high', summary: 'The film drew sustained criticism for communal generalisation, Kerala-wide framing and unsupported scale claims; those challenges are retained rather than suppressed.', evidenceUrls: [keralaStoryExplainer, keralaStoryReview] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest challenge is that inflated scale and uniformly threatening Muslim characters convert a specific extremist-recruitment problem into a broader communal narrative.', evidenceUrls: [keralaStoryExplainer, keralaStoryReview] },
      },
      strongestCounterEvidence: [
        { kind: 'review', source: 'Indian Express — accuracy explainer', claim: 'Shows that the original numerical scale was unsupported and records substantial objections to the film’s framing.', url: keralaStoryExplainer },
        { kind: 'review', source: 'India Today — The Kerala Story review', claim: 'Criticises the film’s over-dramatisation while still identifying radicalisation and ISIS recruitment as the issue being portrayed.', url: keralaStoryReview },
      ],
      redTeam: { completed: true, strongestChallenge: 'The unsupported 32,000 claim and one-sided Muslim character construction could turn a real extremist-risk subject into a communal generalisation rather than a disciplined warning.', outcome: 'qualified', evidenceUrls: [keralaStoryCourt, keralaStoryExplainer, keralaStoryReview], verdictImpact: 'The unsupported number is a major integrity caveat and cannot be repeated. The Bharatiya/Raksha verdict remains Certified because the film’s central moral target is coercive radicalisation and ISIS recruitment, and representational asymmetry alone does not meet the clarified contempt threshold.' },
      factInterpretationIntent: { fact: 'The film is a fictionalised account; its original 32,000 promotional figure was not supported by authenticated data and was formally disclaimed.', interpretation: 'Its warning about coercive conversion and extremist recruitment can support Raksha even though its scale and social framing are polemical.', intent: 'The certification does not infer the filmmakers’ private motives and does not convert the unsupported 32,000 figure into fact.' }
    })
  }),

  hardenedProfile({
    title: 'Animal', year: 2023, language: 'Hindi', status: 'neutral', confidence: 'high',
    dimensions: { dharma: 1, civilizationalContinuity: 2, rashtra: 1, itihasa: 1, parampara: 2, localRoots: 3, raksha: 2, socialDharma: 1, sacredRegard: 1, contemptRisk: 2 },
    tags: ['Family', 'Punjabi/Sikh setting', 'Violence', 'Reviewed neutral'],
    reasons: [
      'The film contains Punjabi/Sikh family texture, inter-caste marriage, traditional imagery and a strong family-loyalty obsession, but these elements serve a violent father-son crime drama rather than a sustained Bharatiya, Hindu-civilizational or national thesis.',
      'A villain’s conversion to Islam is explicitly used by the director to enable a polygamy plot device. That creates a representation caveat, but it is not enough on its own to turn the film into either a Bharatiya certification case or a generalized anti-Muslim film. Neutral is more disciplined than the older Certified call.'
    ],
    integrityFlags: [{ type: 'community-contempt', status: 'supported', summary: 'The director explicitly linked the antagonist’s conversion to Islam with polygamy and larger family plotting, creating a real stereotype/representation concern without establishing a film-wide thesis about all Muslims.', fact: 'Sandeep Reddy Vanga said he chose to have Abrar convert to Islam in part because the character could then have multiple wives and more descendants.', interpretation: 'That is a material representational stereotype, but the film does not supply enough broader civilizational content for either certification or a Not Certified judgment.', intent: 'Vanga denied intending to portray Muslims generally in a bad light; the audit records the design choice without inferring broader motive.' }],
    evidence: [
      { kind: 'interview', source: 'Indian Express — Sandeep Reddy Vanga on Abrar’s religion', claim: 'Vanga explains why Abrar converts to Islam and explicitly links the choice to polygamy and a larger family tree while denying anti-Muslim intent.', url: animalDirector },
      { kind: 'review', source: 'India Today — Animal review', claim: 'Describes the film as a violent father-son drama with misogyny, family obsession, domesticity and a brief Made in India motif rather than a sustained civilizational thesis.', url: animalReview },
      { kind: 'review', source: 'Indian Express — Arjan Vailly background', claim: 'Documents the film’s use of a Punjabi/Sikh martial cultural song and the historical-cultural associations surrounding it.', url: animalCulture },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A hyper-violent fictional father-son crime drama centred on Ranvijay Singh’s obsession with protecting and winning the approval of his industrialist father, set within a Punjabi/Sikh family milieu.',
      discoveryQueries: [
        'Animal 2023 source adaptation original story father son family',
        'Animal Sikh Hindu Muslim caste community identity representation',
        'Animal Muslim stereotype polygamy insult contempt representation Abrar',
        'Animal controversy criticism accuracy factual dispute misogyny religion',
        'Animal Sandeep Reddy Vanga interview Abrar conversion Sikh family intent',
      ],
      probeOverrides: {
        'community-contempt': { status: 'finding', materiality: 'medium', summary: 'Abrar’s Muslim conversion is explicitly used as a polygamy/family-size device, creating a stereotype concern; the film does not establish generalized inherent contempt toward Muslims as a whole.', evidenceUrls: [animalDirector] },
        'regional-context': { status: 'clear', materiality: 'medium', summary: 'Punjabi/Sikh family imagery and Arjan Vailly are meaningful cultural texture, but they remain subordinate to the crime/father-son plot.', evidenceUrls: [animalCulture, animalReview] },
        'self-falsification': { status: 'clear', materiality: 'high', summary: 'The strongest case for certification is family loyalty and Punjabi/Sikh rootedness; the audit found those signals too incidental and morally disordered to justify a directional Bharatiya verdict.', evidenceUrls: [animalReview, animalCulture] },
      },
      strongestCounterEvidence: [],
      redTeam: { completed: true, strongestChallenge: 'Family loyalty, traditional imagery, Sikh/Punjabi martial culture and Made-in-India language could be read as a strong rooted Bharatiya signal.', outcome: 'qualified', evidenceUrls: [animalReview, animalCulture], verdictImpact: 'Those signals are real but secondary to a crime melodrama built around obsessive filial violence. Neutral avoids both over-certifying rooted aesthetics and over-penalising the film for unrelated gender controversy.' },
      factInterpretationIntent: { fact: 'Animal is original fiction centred on a Punjabi/Sikh family, violent filial obsession and a feud with a converted Muslim relative.', interpretation: 'Rooted cultural texture is present, but the film does not make a coherent Bharatiya/Hindu-civilizational argument strong enough for certification.', intent: 'The director’s comments clarify some character-design choices; the cultural verdict rests on the completed narrative rather than inferred politics.' }
    })
  }),

  hardenedProfile({
    title: 'Rocketry: The Nambi Effect', year: 2022, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 3, raksha: 3, socialDharma: 5, sacredRegard: 3, contemptRisk: 0 },
    tags: ['Rashtra', 'Indian science', 'Biopic', 'Institutional injustice'],
    reasons: [
      'The film celebrates Indian scientific ambition and Nambi Narayanan’s contribution to the national space programme while treating his false espionage implication and humiliation as a grave injustice inflicted on an Indian scientist.',
      'Former ISRO colleagues dispute portions of the technical-credit narrative. Those disputes materially constrain biographical precision, but the Supreme Court record independently establishes the wrongful prosecution and the film’s India-science/Rashtra orientation remains strong.'
    ],
    integrityFlags: [{ type: 'biographical-credit', status: 'disputed', summary: 'Former ISRO scientists dispute some claims about Narayanan’s role in cryogenics and the concentration of technical credit in the film.', fact: 'The Supreme Court record establishes wrongful implication and humiliation; former ISRO colleagues separately contest portions of the technical-history narrative associated with Narayanan and the film.', interpretation: 'The injustice is independently grounded while some scientific-career credit remains contested.', intent: 'The audit does not infer deliberate falsification by the filmmakers from a contested biographical account.' }],
    evidence: [
      { kind: 'official', source: 'Supreme Court of India — Nambi Narayanan judgment', claim: 'The Court records wrongful implication, humiliation and compensation arising from the ISRO espionage case.', url: nambiCourt },
      { kind: 'review', source: 'Indian Express — former ISRO scientists challenge Rocketry claims', claim: 'Reports former colleagues disputing Narayanan’s claims regarding cryogenic development and aspects of ISRO history represented around the film.', url: rocketryCritique },
      { kind: 'interview', source: 'Indian Express — R Madhavan on Rocketry', claim: 'Madhavan describes making the film around Narayanan’s life, scientific work and the injustice of being branded a traitor.', url: rocketryInterview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic',
      filmUnderstanding: 'A biographical drama about ISRO scientist Nambi Narayanan, India’s liquid-propulsion ambitions, his arrest in the 1994 espionage case and his long effort to clear his name.',
      discoveryQueries: [
        'Rocketry Nambi Effect source adaptation biopic true story ISRO espionage',
        'Rocketry religion caste community identity representation Nambi Narayanan',
        'Rocketry Brahmin Hindu Muslim community stereotype contempt representation',
        'Rocketry controversy criticism accuracy factual dispute cryogenic credit ISRO',
        'Rocketry R Madhavan interview Nambi Narayanan Indian science injustice',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The film dramatizes a real scientist’s life and compresses technical history, personal encounters and institutional conflict.', evidenceUrls: [rocketryInterview, rocketryCritique] },
        'real-person-attribution': { status: 'finding', materiality: 'high', summary: 'Former ISRO colleagues dispute attribution of some scientific achievements and roles to Narayanan.', evidenceUrls: [rocketryCritique] },
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'Wrongful prosecution is strongly grounded in the Supreme Court record, while portions of ISRO technical history remain disputed.', evidenceUrls: [nambiCourt, rocketryCritique] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film’s antagonism is toward wrongful investigators and institutional failures, not a generalized caste, religious or regional community.', evidenceUrls: [nambiCourt, rocketryInterview] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest challenge is that the film over-concentrates scientific credit and simplifies ISRO history around its protagonist.', evidenceUrls: [rocketryCritique] },
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express — former ISRO scientists challenge Rocketry claims', claim: 'Former ISRO colleagues publicly dispute parts of the technical and credit narrative.', url: rocketryCritique }],
      redTeam: { completed: true, strongestChallenge: 'If major technical achievements are wrongly concentrated in one protagonist, the film risks turning national scientific history into personal hagiography.', outcome: 'qualified', evidenceUrls: [rocketryCritique, nambiCourt], verdictImpact: 'The credit dispute remains prominent, but the independently established wrongful prosecution and the film’s celebration of Indian scientific capacity support certification.' },
      factInterpretationIntent: { fact: 'Nambi Narayanan was wrongfully implicated and later compensated by the Supreme Court; former ISRO scientists dispute some technical-credit claims associated with his public narrative and the film.', interpretation: 'The film can strongly affirm Indian science and institutional justice while carrying a serious biographical-credit caveat.', intent: 'No deliberate historical falsification is inferred without stronger evidence.' }
    })
  }),

  hardenedProfile({
    title: 'Ram Setu', year: 2022, language: 'Hindi', status: 'certified', confidence: 'high',
    dimensions: { dharma: 5, civilizationalContinuity: 5, rashtra: 3, itihasa: 4, parampara: 5, localRoots: 4, raksha: 4, socialDharma: 3, sacredRegard: 5, contemptRisk: 0 },
    tags: ['Shri Ram', 'Ram Setu', 'Sacred heritage', 'Civilizational continuity'],
    reasons: [
      'The film’s entire dramatic movement takes an initially sceptical archaeologist toward protecting Ram Setu as sacred civilizational heritage connected to Shri Ram, and it treats inherited Hindu belief as worthy of investigation, respect and defence rather than ridicule.',
      'Its fictional archaeology presents a stronger empirical case for human construction and antiquity than public scientific evidence conclusively establishes. That is a major Narrative Integrity caveat, not a reason to deny its unmistakable Hindu-civilizational alignment.'
    ],
    integrityFlags: [{ type: 'historical-claim', status: 'supported', summary: 'The screenplay converts a contested religious/archaeological question into conclusive fictional discoveries and should not be read as scientific proof of Ram Setu’s human construction or precise antiquity.', fact: 'The film’s archaeologist discovers evidence inside a fictional adventure narrative; critical reviews themselves describe the story as moving from evidence-based scepticism to belief.', interpretation: 'The empirical certainty belongs to the film’s fictional world while the cultural respect for Shri Ram and Ram Setu is the relevant certification signal.', intent: 'The makers openly describe the film as respectful of Indian history, culture, Shri Ram and Ram Setu; that stated framing is recorded without treating the fiction as scientific evidence.' }],
    evidence: [
      { kind: 'interview', source: 'Hindustan Times — Akshay Kumar on Ram Setu', claim: 'Kumar describes the film as proudly rooted in Indian history and culture and says the values and beliefs associated with Shri Ram and Ram Setu are upheld respectfully.', url: ramSetuInterview },
      { kind: 'review', source: 'Indian Express — Ram Setu review', claim: 'Describes the central arc as an evidence-minded archaeologist moving toward belief in the sacred/historical significance of Ram Setu.', url: ramSetuReview },
      { kind: 'review', source: 'Hindustan Times — Ram Setu review', claim: 'Describes the adventure as a search for historical evidence around Lord Ram and Ram Setu while noting large logical and cinematic liberties.', url: ramSetuCounter },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'original-fiction',
      filmUnderstanding: 'A fictional archaeological adventure in which a sceptical Indian archaeologist investigates Ram Setu, uncovers evidence inside the story world connecting it to the Ramayana tradition, and works to prevent its destruction.',
      discoveryQueries: [
        'Ram Setu film source adaptation original fiction archaeology Ramayana Shri Ram',
        'Ram Setu Hindu Muslim Christian community identity representation religion',
        'Ram Setu Hindu sacred ridicule stereotype contempt representation criticism',
        'Ram Setu controversy criticism accuracy factual dispute archaeology scientific evidence',
        'Ram Setu Akshay Kumar Abhishek Sharma interview Indian history culture belief',
      ],
      probeOverrides: {
        'historical-claims': { status: 'finding', materiality: 'high', summary: 'The fictional plot treats its discoveries as conclusive proof beyond what the public scientific record independently establishes.', evidenceUrls: [ramSetuReview, ramSetuCounter] },
        'sacred-religious-valence': { status: 'clear', materiality: 'high', summary: 'Shri Ram, Ram Setu and inherited Hindu belief are treated affirmatively and as heritage worthy of protection rather than as superstition to be mocked.', evidenceUrls: [ramSetuInterview, ramSetuReview] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film’s conflict concerns heritage, commercial destruction and belief; the audit found no generalized contempt toward another religious or caste community.', evidenceUrls: [ramSetuReview, ramSetuCounter] },
        'self-falsification': { status: 'finding', materiality: 'high', summary: 'The strongest challenge is that the film presents fictional archaeological certainty as if it settles a real scientific and historical dispute.', evidenceUrls: [ramSetuReview, ramSetuCounter] },
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express — Ram Setu review', claim: 'Challenges the film’s collapse of faith, myth and scientific proof into a predetermined conclusion.', url: ramSetuReview }],
      redTeam: { completed: true, strongestChallenge: 'The film’s fictional proof structure may blur faith and archaeology so aggressively that certification could look like endorsement of empirical claims the evidence does not establish.', outcome: 'qualified', evidenceUrls: [ramSetuReview, ramSetuCounter], verdictImpact: 'The product must explicitly separate the empirical caveat from the cultural verdict. The film remains strongly Hindu-civilizational and sacred-regard positive.' },
      factInterpretationIntent: { fact: 'Ram Setu is fiction; its protagonist discovers conclusive evidence within the story world, not through a real archaeological publication.', interpretation: 'The film’s respect for Shri Ram and heritage supports certification while its scientific certainty remains fictional and separately caveated.', intent: 'The makers openly describe a respectful Hindu-cultural orientation; no additional motive is inferred.' }
    })
  }),

  hardenedProfile({
    title: 'Major', year: 2022, language: 'Telugu', status: 'certified', confidence: 'high',
    dimensions: { dharma: 4, civilizationalContinuity: 3, rashtra: 5, itihasa: 4, parampara: 3, localRoots: 4, raksha: 5, socialDharma: 5, sacredRegard: 2, contemptRisk: 0 },
    tags: ['Rashtra', 'Raksha', 'Major Sandeep Unnikrishnan', '26/11'],
    reasons: [
      'The film is built around Major Sandeep Unnikrishnan’s service, courage, protection of hostages and sacrifice during the 26/11 Mumbai attacks. The official NSG record independently confirms his leadership, rescue actions and death in Operation Black Tornado.',
      'The screenplay takes substantial creative freedom with his private life and development into a soldier, but the central national-service and Raksha claims are not inventions. Biographical dramatization therefore remains separate from a high-confidence Bharatiya verdict.'
    ],
    integrityFlags: [{ type: 'source-fidelity', status: 'supported', summary: 'The film uses creative freedom in reconstructing Sandeep Unnikrishnan’s personal life and motivations even though the central 26/11 service and sacrifice are independently documented.', fact: 'NSG records his leadership and death during Operation Black Tornado; the filmmakers acknowledge shaping a feature narrative from family memories and public material.', interpretation: 'Private-life dramatization limits scene-level biographical certainty but does not weaken the documented Raksha core.', intent: 'Adivi Sesh describes close consultation with Unnikrishnan’s parents and a desire to tell the story in a way they could accept.' }],
    evidence: [
      { kind: 'official', source: 'National Security Guard — Veer Gatha', claim: 'The NSG records Major Sandeep Unnikrishnan leading hostage-rescue action at the Taj during Operation Black Tornado, being fatally wounded and receiving the Ashok Chakra posthumously.', url: majorOfficial },
      { kind: 'interview', source: 'Indian Express — Adivi Sesh on Major', claim: 'Sesh describes working closely with Unnikrishnan’s parents and making accurate remembrance of his life the central responsibility of the project.', url: majorInterview },
      { kind: 'review', source: 'Indian Express — Major review', claim: 'Calls the film an effective homage while noting substantial creative freedom in the personal-life and action-drama reconstruction.', url: majorReview },
    ],
    researchDossier: buildDossier({
      sourceBasis: 'biopic',
      filmUnderstanding: 'A biographical drama about Major Sandeep Unnikrishnan, his family and Army/NSG career, culminating in his role and sacrifice during the 26/11 Taj Hotel rescue operation.',
      discoveryQueries: [
        'Major 2022 source adaptation biopic true story Sandeep Unnikrishnan 26/11',
        'Major film Hindu Muslim community identity representation terrorist portrayal',
        'Major 26/11 Muslim stereotype contempt ridicule representation criticism',
        'Major movie controversy criticism accuracy factual dispute creative liberties',
        'Major Adivi Sesh interview Sandeep Unnikrishnan parents accuracy intent',
      ],
      probeOverrides: {
        'source-adaptation': { status: 'finding', materiality: 'high', summary: 'The feature film reconstructs personal relationships and developmental episodes around a documented NSG officer and real terror attack.', evidenceUrls: [majorInterview, majorReview] },
        'real-person-attribution': { status: 'clear', materiality: 'high', summary: 'The central service and sacrifice claims are independently supported by the NSG’s official account.', evidenceUrls: [majorOfficial] },
        'historical-claims': { status: 'finding', materiality: 'medium', summary: 'Operation Black Tornado and Unnikrishnan’s sacrifice are documented, while scene-level dialogue and some action details are dramatized.', evidenceUrls: [majorOfficial, majorReview] },
        'community-contempt': { status: 'clear', materiality: 'high', summary: 'The film condemns 26/11 terrorists; portraying identified terrorists as enemies does not establish generalized contempt toward Muslims as a religious community.', evidenceUrls: [majorOfficial, majorReview] },
        'self-falsification': { status: 'clear', materiality: 'high', summary: 'The strongest challenge is biographical romanticisation, but the core Raksha and sacrifice claims are supported by official NSG records and family consultation.', evidenceUrls: [majorOfficial, majorInterview, majorReview] },
      },
      strongestCounterEvidence: [{ kind: 'review', source: 'Indian Express — Major review', claim: 'Notes extensive creative freedom and a subjective, romanticised treatment of the protagonist’s life.', url: majorReview }],
      redTeam: { completed: true, strongestChallenge: 'A feature-film homage may simplify a complex counter-terror operation and idealise its central hero beyond what can be independently established.', outcome: 'qualified', evidenceUrls: [majorOfficial, majorReview], verdictImpact: 'Creative freedom remains a fidelity warning, while the central national-service and sacrifice record is independently corroborated and decisively supports certification.' },
      factInterpretationIntent: { fact: 'Major Sandeep Unnikrishnan served in the NSG, led rescue action during 26/11 and was killed in action; the film fictionalises portions of his personal biography.', interpretation: 'The documented service and sacrifice strongly support Rashtra and Raksha, while personal-life invention remains an integrity caveat.', intent: 'The creators’ close consultation with the family is relevant context but does not substitute for independent evidence.' }
    })
  }),
];
