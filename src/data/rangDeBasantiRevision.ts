import type { SanghiProfile } from '../types/sanghi';
import { buildDossier, hardenedProfile } from './hardenedCorpusFactory';

const mehra2006 = 'https://in.rediff.com/movies/report/chat/20060206.htm';
const mehraMemoir = 'https://indianexpress.com/article/books-and-literature/when-rang-de-basanti-made-protests-cool-and-dissent-civil-7489185/';
const vigilantismCritique = 'https://scroll.in/reel/802418/rang-de-basanti-at-10-pop-anarchy-at-its-seductive-best';
const patriotismCounter = 'https://www.outlookindia.com/art-entertainment/rang-de-basanti-at-20-when-bollywood-chose-patriotism-over-jingoism';

export const rangDeBasantiRevision: SanghiProfile = hardenedProfile({
  title: 'Rang De Basanti',
  year: 2006,
  language: 'Hindi',
  status: 'mixed',
  confidence: 'high',
  dimensions: {
    dharma: 2,
    civilizationalContinuity: 3,
    rashtra: 3,
    itihasa: 4,
    parampara: 1,
    localRoots: 3,
    raksha: 2,
    socialDharma: 2,
    sacredRegard: 1,
    contemptRisk: 2,
  },
  tags: ['Freedom movement', 'Political violence', 'Institutional distrust', 'Mixed'],
  reasons: [
    'The film genuinely reveres Bhagat Singh-era revolutionary memory and asks young Indians to care about the republic, so its patriotic and Itihasa signals are real rather than incidental.',
    'But its central dramatic analogy moves from anti-colonial armed resistance against foreign rule to assassination of an elected Indian minister after democratic protest fails. That collapse of colonial occupation and constitutional India materially romanticises extra-legal violence and is too significant for Sanghi Certified.',
  ],
  integrityFlags: [
    {
      type: 'ideological-substitution',
      status: 'supported',
      summary: 'The film deliberately parallels anti-colonial armed revolution with violent action against the contemporary Indian state, creating a material constitutional and Rashtra-level framing problem.',
      fact: 'The fictional protagonists move from protest to assassinating the defence minister and taking over a radio station while the film intercuts them with anti-colonial revolutionaries.',
      interpretation: 'The structure makes armed anti-colonial resistance a moral template for action inside independent constitutional India, not merely a historical reference.',
      intent: 'Rakeysh Omprakash Mehra has said the project began with armed-revolution history and was reshaped by juxtaposing the periods to make that history relevant to contemporary youth; this establishes deliberate political provocation, not a proven intent to incite real-world violence.',
    },
  ],
  evidence: [
    {
      kind: 'interview',
      source: 'Rediff — Rakeysh Omprakash Mehra reader chat (2006)',
      claim: 'Mehra says he wanted to make a film about India’s armed revolution and chose to juxtapose past and present to make the revolutionaries relevant to contemporary youth.',
      url: mehra2006,
    },
    {
      kind: 'interview',
      source: 'Indian Express — Mehra on his memoir and Rang De Basanti',
      claim: 'Mehra describes using the contemporary sociopolitical context, MiG crash anger and youth intervention to connect freedom-fighter history with present-day political action.',
      url: mehraMemoir,
    },
    {
      kind: 'review',
      source: 'Scroll — Rang De Basanti at 10',
      claim: 'The critique notes that after protest fails the protagonists assassinate the minister and that the film offers vigilantism as its decisive route to change.',
      url: vigilantismCritique,
    },
    {
      kind: 'review',
      source: 'Outlook India — Rang De Basanti at 20',
      claim: 'A strong counter-reading treats the film as patriotic civic accountability rather than hostility to India, framing dissent as responsibility.',
      url: patriotismCounter,
    },
  ],
  researchDossier: buildDossier({
    sourceBasis: 'mixed-unknown',
    filmUnderstanding: 'A fictional contemporary political drama that deliberately intercuts Indian anti-colonial revolutionaries with young citizens who respond to corruption, a friend’s death and failed protest by assassinating a minister and broadcasting a confession.',
    discoveryQueries: [
      'Rang De Basanti Rakeysh Omprakash Mehra armed revolution youth interview',
      'Rang De Basanti religion caste community identity representation',
      'Rang De Basanti Bhagat Singh history contemporary parallel source adaptation',
      'Rang De Basanti vigilante violence assassination minister criticism',
      'Rang De Basanti patriotism nationalism propaganda political framing',
      'Rang De Basanti MiG corruption government factual dispute',
      'Rang De Basanti strongest defence civic responsibility patriotism',
    ],
    probeOverrides: {
      'source-adaptation': {
        status: 'finding',
        materiality: 'medium',
        summary: 'The modern plot is fictional but intentionally constructed around historical anti-colonial revolutionaries, so the historical-to-present analogy is part of the film’s source design rather than incidental imagery.',
        evidenceUrls: [mehra2006, mehraMemoir],
      },
      'historical-claims': {
        status: 'finding',
        materiality: 'high',
        summary: 'The material issue is not a single false date or biography claim; it is the film’s structural equivalence between armed resistance to colonial rule and violent action inside independent constitutional India.',
        evidenceUrls: [mehra2006, vigilantismCritique],
      },
      'social-radar': {
        status: 'finding',
        materiality: 'high',
        summary: 'Long-running criticism specifically identifies the film’s glamorisation of vigilantism after democratic protest is shown to fail.',
        evidenceUrls: [vigilantismCritique],
      },
      'self-falsification': {
        status: 'finding',
        materiality: 'high',
        summary: 'The strongest counter-reading is that the film defines patriotism as internal accountability and civic responsibility rather than hatred of India; that positive signal is retained in the Mixed verdict.',
        evidenceUrls: [patriotismCounter],
      },
    },
    strongestCounterEvidence: [
      {
        kind: 'review',
        source: 'Outlook India — Rang De Basanti at 20',
        claim: 'The film can credibly be read as patriotic accountability and a demand that citizens take responsibility for India.',
        url: patriotismCounter,
      },
      {
        kind: 'interview',
        source: 'Indian Express — Mehra on his memoir and Rang De Basanti',
        claim: 'Mehra frames the work as youth engagement with India and public life, not contempt for the country.',
        url: mehraMemoir,
      },
    ],
    redTeam: {
      completed: true,
      strongestChallenge: 'A Mixed verdict may underweight the film’s sincere patriotism, reverence for freedom fighters and call for citizens to stop being apathetic.',
      outcome: 'qualified',
      evidenceUrls: [patriotismCounter, mehraMemoir],
      verdictImpact: 'Those positive signals prevent a simple anti-India or Not Certified reading, but they do not cure the film’s deliberate colonial-to-democratic violence analogy. Mixed / Contested is therefore the durable verdict.',
    },
    factInterpretationIntent: {
      fact: 'The contemporary story is fictional. The protagonists’ peaceful protest is followed by assassination of the defence minister and a radio-station takeover, while the film repeatedly parallels them with anti-colonial revolutionaries.',
      interpretation: 'That construction turns anti-colonial armed resistance into a moral analogue for extra-legal violence within independent India, creating a serious Rashtra and Social Dharma conflict even though the film also expresses patriotic concern.',
      intent: 'The director explicitly describes starting from armed-revolution history and juxtaposing periods to make it relevant to youth. That supports deliberate political framing; it does not by itself prove an intent to incite real-world violence.',
    },
  }),
});
