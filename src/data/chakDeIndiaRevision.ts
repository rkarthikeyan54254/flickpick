import type { SanghiProfile } from '../types/sanghi';

const publicationGate: NonNullable<SanghiProfile['publicationGate']> = {
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

export const chakDeIndiaRevision: SanghiProfile = {
  title: 'Chak De! India',
  year: 2007,
  language: 'Hindi',
  status: 'mixed',
  confidence: 'medium',
  methodologyVersion: '1.0-bharatiya',
  reviewedAt: '2026-10-02',
  reviewDepth: 'source-audit',
  auditStatus: 'reviewed',
  publicationGate,
  dimensions: {
    dharma: 2,
    civilizationalContinuity: 2,
    rashtra: 5,
    itihasa: 1,
    parampara: 2,
    localRoots: 4,
    raksha: 1,
    socialDharma: 5,
    sacredRegard: 1,
    contemptRisk: 1,
  },
  tags: ['Rashtra', 'Women\'s sport', 'Identity asymmetry', 'Adaptation delta'],
  reasons: [
    'The film strongly affirms an Indian national team, shared national identity and women athletes overcoming regional and social divisions; those remain genuine positive Bharatiya signals.',
    'However, the central coach\'s Muslim identity is inseparable from the traitor/redemption arc, while public accounts conflict over how much that arc derives from former India goalkeeper and coach Mir Ranjan Negi. Because that possible Hindu-to-Muslim identity substitution could materially change the film\'s cultural meaning, the earlier automatic Sanghi Certified call is withdrawn pending adjudication.',
  ],
  integrityFlags: [
    {
      type: 'identity-substitution',
      status: 'disputed',
      summary: 'The source history of Kabir Khan is contested: director Shimit Amin denied that the character was based on Mir Ranjan Negi and instead cited the women\'s national team under M. K. Kaushik, while Shah Rukh Khan and later reporting connected Negi\'s similar disgrace/redemption experience and hockey inputs to the film. A later public allegation says the religious identity was deliberately changed. The available record does not yet prove or disprove deliberate religious substitution.',
      fact: 'Amin publicly denied direct inspiration from Negi. Shah Rukh Khan said before release that Negi had suffered a similar fate and supplied extensive hockey inputs. Later reporting and Negi\'s own account connect Sahni\'s research to Negi and the women\'s team.',
      interpretation: 'The overlap is substantial enough that the identity question cannot be dismissed as irrelevant, but the evidence does not establish that Kabir Khan is a one-to-one fictionalized Negi.',
      intent: 'A deliberate communal motive remains unproven. Annu Kapoor has publicly alleged such a motive, but that allegation conflicts with the director\'s contemporaneous account and is therefore not treated as established fact.',
    },
  ],
  evidence: [
    {
      kind: 'interview',
      source: 'Rediff — Shimit Amin chat (2007)',
      claim: 'Amin said Chak De! India was not inspired by Mir Ranjan Negi, calling the resemblance a coincidence and citing the achievements of the Indian women\'s hockey team led by M. K. Kaushik.',
      url: 'https://www.rediff.com/movies/report/shimit/20070828.htm',
    },
    {
      kind: 'interview',
      source: 'Rediff — Shah Rukh Khan interview (2007)',
      claim: 'Before release, Shah Rukh Khan said the film was not completely based on a true story, but that Negi had suffered a similar fate and had supplied extensive hockey inputs.',
      url: 'https://m.rediff.com/movies/2007/jul/16slide3.htm',
    },
    {
      kind: 'interview',
      source: 'Times of India — Mir Ranjan Negi interview (2021)',
      claim: 'Negi said writer Jaideep Sahni researched the women\'s hockey team, met players, learned about him and then developed the film; the report describes the film as drawing on his experiences.',
      url: 'https://timesofindia.indiatimes.com/sports/off-the-field/mir-ranjan-negi-when-the-womens-hockey-team-won-gold-in-cwg-2002-only-a-small-article-appeared-rest-of-the-sports-page-was-about-cricket/articleshow/85079401.cms',
    },
    {
      kind: 'review',
      source: 'Hindustan Times — Annu Kapoor allegation (2024)',
      claim: 'Kapoor publicly alleged that the protagonist was deliberately changed from a Hindu real-life inspiration to a Muslim fictional character; this is recorded as an allegation, not as an adjudicated fact.',
      url: 'https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khans-chak-de-india-twisted-facts-alleges-annu-kapoor-they-show-muslim-as-good-and-make-fun-of-pandit-101729821083669.html',
    },
  ],
};
