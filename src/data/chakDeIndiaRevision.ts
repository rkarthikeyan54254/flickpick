import type { SanghiProfile } from '../types/sanghi';

const aminUrl = 'https://www.rediff.com/movies/report/shimit/20070828.htm';
const srkUrl = 'https://m.rediff.com/movies/2007/jul/16slide3.htm';
const negiUrl = 'https://timesofindia.indiatimes.com/sports/off-the-field/mir-ranjan-negi-when-the-womens-hockey-team-won-gold-in-cwg-2002-only-a-small-article-appeared-rest-of-the-sports-page-was-about-cricket/articleshow/85079401.cms';
const allegationUrl = 'https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khans-chak-de-india-twisted-facts-alleges-annu-kapoor-they-show-muslim-as-good-and-make-fun-of-pandit-101729821083669.html';

export const chakDeIndiaRevision: SanghiProfile = {
  title: 'Chak De! India',
  year: 2007,
  language: 'Hindi',
  status: 'mixed',
  confidence: 'medium',
  methodologyVersion: '2.0-evidence-derived',
  reviewedAt: '2026-10-02',
  reviewDepth: 'source-audit',
  auditStatus: 'hardened',
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
    'However, the central coach\'s Muslim identity is inseparable from the traitor/redemption arc, while public accounts conflict over how much that arc derives from former India goalkeeper and coach Mir Ranjan Negi. Because that possible Hindu-to-Muslim identity substitution could materially change the film\'s cultural meaning, the earlier automatic Sanghi Certified call remains withdrawn pending adjudication.',
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
      url: aminUrl,
    },
    {
      kind: 'interview',
      source: 'Rediff — Shah Rukh Khan interview (2007)',
      claim: 'Before release, Shah Rukh Khan said the film was not completely based on a true story, but that Negi had suffered a similar fate and had supplied extensive hockey inputs.',
      url: srkUrl,
    },
    {
      kind: 'interview',
      source: 'Times of India — Mir Ranjan Negi interview (2021)',
      claim: 'Negi said writer Jaideep Sahni researched the women\'s hockey team, met players, learned about him and then developed the film; the report describes the film as drawing on his experiences.',
      url: negiUrl,
    },
    {
      kind: 'review',
      source: 'Hindustan Times — Annu Kapoor allegation (2024)',
      claim: 'Kapoor publicly alleged that the protagonist was deliberately changed from a Hindu real-life inspiration to a Muslim fictional character; this is recorded as an allegation, not as an adjudicated fact.',
      url: allegationUrl,
    },
  ],
  researchDossier: {
    version: '2.0',
    completedAt: '2026-10-02',
    complete: true,
    sourceBasis: 'mixed-unknown',
    filmUnderstanding: 'A fictional Indian women\'s hockey-team drama whose coach-redemption arc has documented similarities to former India goalkeeper Mir Ranjan Negi, while the director contemporaneously denied a direct biographical basis.',
    discoveryQueries: [
      'Chak De India Mir Ranjan Negi source adaptation true story',
      'Chak De India Kabir Khan religion identity substitution Hindu Muslim',
      'Chak De India controversy factual accuracy Mir Ranjan Negi',
      'Shimit Amin Shah Rukh Khan Jaideep Sahni Mir Ranjan Negi interviews',
      'Chak De India social media identity change allegation',
    ],
    riskProbes: [
      { id: 'source-adaptation', status: 'ambiguous', materiality: 'high', summary: 'The film is not presented as a literal biopic, but creator/participant accounts conflict over how materially Negi\'s experience shaped the coach arc.', evidenceUrls: [aminUrl, srkUrl, negiUrl] },
      { id: 'identity-substitution', status: 'ambiguous', materiality: 'high', summary: 'A Hindu real-life analogue and a Muslim fictional coach share a public-disgrace/redemption pattern; direct one-to-one substitution and intent remain unresolved.', evidenceUrls: [aminUrl, srkUrl, negiUrl, allegationUrl] },
      { id: 'historical-claims', status: 'not-applicable', materiality: 'low', summary: 'The film is contemporary sports fiction rather than a historical reconstruction.', evidenceUrls: [] },
      { id: 'quantitative-claims', status: 'not-applicable', materiality: 'low', summary: 'No material numerical claim drives the editorial verdict.', evidenceUrls: [] },
      { id: 'real-person-attribution', status: 'finding', materiality: 'high', summary: 'Negi supplied hockey input and describes Sahni learning about his story, while Amin rejects a direct inspiration claim.', evidenceUrls: [aminUrl, negiUrl] },
      { id: 'sacred-religious-valence', status: 'finding', materiality: 'high', summary: 'The fictional coach\'s Muslim identity is narratively central because the accusation of betraying India is explicitly communalised.', evidenceUrls: [srkUrl, allegationUrl] },
      { id: 'regional-context', status: 'clear', materiality: 'medium', summary: 'The film explicitly represents a multi-regional Indian women\'s team and national sporting identity rather than one local tradition.', evidenceUrls: [] },
      { id: 'creator-source-conflict', status: 'ambiguous', materiality: 'high', summary: 'Amin\'s denial of direct Negi inspiration sits against SRK and Negi accounts acknowledging substantial similarity and research input.', evidenceUrls: [aminUrl, srkUrl, negiUrl] },
      { id: 'social-radar', status: 'finding', materiality: 'medium', summary: 'Public criticism specifically surfaced the alleged Hindu-to-Muslim identity change, triggering this deeper source audit.', evidenceUrls: [allegationUrl] },
      { id: 'self-falsification', status: 'ambiguous', materiality: 'high', summary: 'The strongest falsifier of the substitution theory is Amin\'s contemporaneous denial; the strongest support is the acknowledged similar fate and Negi research trail. Neither fully resolves the contradiction.', evidenceUrls: [aminUrl, srkUrl, negiUrl] },
    ],
    strongestCounterEvidence: [
      {
        kind: 'interview',
        source: 'Rediff — Shimit Amin chat (2007)',
        claim: 'Amin explicitly denied that Negi was the direct inspiration and cited the women\'s team under M. K. Kaushik.',
        url: aminUrl,
      },
      {
        kind: 'interview',
        source: 'Rediff — Shah Rukh Khan interview (2007)',
        claim: 'SRK simultaneously rejected a fully true-story framing while acknowledging that Negi had suffered a similar fate and contributed hockey inputs.',
        url: srkUrl,
      },
    ],
    redTeam: {
      completed: true,
      strongestChallenge: 'The original Certified verdict may be materially wrong if the coach\'s disgrace/redemption arc substantially derives from Negi while changing a Hindu real-world analogue into a Muslim character whose religion is central to the betrayal narrative.',
      outcome: 'unresolved',
      evidenceUrls: [aminUrl, srkUrl, negiUrl, allegationUrl],
      verdictImpact: 'The patriotic and women\'s-sport signals remain positive, but the unresolved identity-source contradiction is significant enough to keep the overall verdict Mixed / Contested and in human review.',
    },
    factInterpretationIntent: {
      fact: 'Amin denied direct inspiration; SRK acknowledged a similar fate and Negi\'s inputs; Negi later described Sahni researching the team and learning about him.',
      interpretation: 'The available record establishes a material source overlap worth auditing but not a proven one-to-one character substitution.',
      intent: 'Deliberate communal intent is not established by the present evidence and remains distinct from the identity-change question itself.',
    },
  },
};
