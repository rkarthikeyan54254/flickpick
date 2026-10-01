import type { SanghiProfile } from '../types/sanghi';

// Editorial revisions intentionally layer over the original calibration corpus.
// This preserves the initial judgment while allowing evidence-backed corrections
// to become the profile shown by the product.
export const sanghiProfileRevisions: SanghiProfile[] = [
  {
    title: 'Jai Bhim',
    year: 2021,
    language: 'Tamil',
    status: 'mixed',
    confidence: 'medium',
    methodologyVersion: '0.3',
    reviewedAt: '2026-10-02',
    reviewDepth: 'source-audit',
    auditStatus: 'reviewed',
    dimensions: {
      dharma: 2,
      civilizationalContinuity: 2,
      rashtra: 2,
      itihasa: 2,
      parampara: 2,
      localRoots: 4,
      raksha: 1,
      socialDharma: 5,
      sacredRegard: 2,
      contemptRisk: 1
    },
    tags: ['Social Dharma', 'Adaptation delta', 'True story'],
    reasons: [
      'The film strongly foregrounds custodial violence, constitutional remedy and justice for a marginalised community; social or caste criticism is not by itself anti-civilizational under this methodology.',
      'The adaptation materially changes parts of the real-case identity context, which makes a simple Neutral verdict too weak even though broad anti-Hindu contempt is not established.',
      'The resulting signal is genuinely mixed: strong Social Dharma and Tamil local grounding coexist with verified or disputed representation changes in a film presented as rooted in a real case.'
    ],
    integrityFlags: [
      {
        type: 'community-substitution',
        status: 'verified',
        summary: 'Justice K. Chandru has said the real Rajakannu was from the Kurava community, while the film portrays the affected family as Irular.',
        fact: 'The source case and the film use different community identities for the victim family.',
        interpretation: 'This is a deliberate adaptation delta and matters because community identity is central to the film\'s social-justice framing.',
        intent: 'The director has described the change as an attempt to foreground the hardships faced by Irular communities; hostile intent toward the original community is not established.'
      },
      {
        type: 'perpetrator-identity-substitution',
        status: 'verified',
        summary: 'The real police officer named in reporting as Anthonysamy is fictionalised as Gurumurthy/Guru in the film.',
        fact: 'The name/identity of the officer associated with the real case was changed for the film.',
        interpretation: 'Because the villain is a morally central figure, identity changes around that character deserve explicit scrutiny rather than being treated as incidental fiction.',
        intent: 'A specific ideological motive for the name change is not established from the available evidence.'
      },
      {
        type: 'community-symbolism',
        status: 'disputed',
        summary: 'The original release included a calendar symbol associated by critics with the Vanniyar community behind the villain character; the image was later replaced after objections.',
        fact: 'The visual was present in the original release and was subsequently changed.',
        interpretation: 'The combination created a plausible community-targeting reading and therefore belongs in the integrity audit.',
        intent: 'Director T.J. Gnanavel said the symbolism was unintended and expressed regret; deliberate anti-Vanniyar intent is not established.'
      }
    ],
    evidence: [
      {
        kind: 'interview',
        source: 'LiveLaw — Justice K. Chandru interview',
        claim: 'Chandru discusses the real case and states that Rajakannu belonged to the Kurava community rather than the Irular community used in the film.',
        url: 'https://www.livelaw.in/amp/interviews/justice-chandru-interview-jai-bhim-movie-police-brutality-custodial-torture-tribes-constitution-185024'
      },
      {
        kind: 'review',
        source: 'Indian Express',
        claim: 'Coverage of the controversy records objections over the Gurumurthy character and the Vanniyar-associated calendar image, as well as the filmmakers\' response and subsequent replacement of the visual.',
        url: 'https://indianexpress.com/article/cities/chennai/name-politics-jai-bhim-actor-suriya-insult-to-vanniyar-response-ramadoss-7619466/'
      }
    ]
  }
];
