import type { CertificationStatus, SanghiProfile } from '../types/sanghi';

type Row = {
  title: string;
  year: number;
  language: SanghiProfile['language'];
  status: CertificationStatus;
  confidence?: SanghiProfile['confidence'];
  tags?: string[];
  note?: string;
  provisional?: boolean;
  integrity?: SanghiProfile['integrityFlags'];
};

const nullDimensions: SanghiProfile['dimensions'] = {
  dharma: null,
  civilizationalContinuity: null,
  rashtra: null,
  itihasa: null,
  parampara: null,
  localRoots: null,
  raksha: null,
  socialDharma: null,
  sacredRegard: null,
  contemptRisk: null,
};

const passedGate: NonNullable<SanghiProfile['publicationGate']> = {
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

const rows: Row[] = [
  { title: '12th Fail', year: 2023, language: 'Hindi', status: 'neutral', tags: ['Social Dharma', 'Public service'], note: 'Audited as an India-rooted perseverance and public-service story without a material civilizational conflict signal.' },
  { title: 'Shershaah', year: 2021, language: 'Hindi', status: 'certified', tags: ['Rashtra', 'Raksha', 'Military'], note: 'Captain Vikram Batra’s service, sacrifice and defence of India are the film’s moral centre.' },
  { title: 'Sam Bahadur', year: 2023, language: 'Hindi', status: 'certified', tags: ['Rashtra', 'Raksha', 'Itihasa'], note: 'Treats Manekshaw’s Army service and India’s military history with sustained respect while preserving historical caveats.' },
  { title: 'Sardar Udham', year: 2021, language: 'Hindi', status: 'certified', tags: ['Itihasa', 'Anti-colonial', 'Rashtra'], note: 'Strongly India-grounded anti-colonial historical memory. The owner review confirms its nationalistic Bharatiya alignment; historical dramatization remains separately caveated.' },
  { title: 'The Kerala Story', year: 2023, language: 'Hindi', status: 'certified', tags: ['Raksha', 'Rashtra', 'Extremism'], note: 'Treats coercive radicalisation and extremist recruitment as legitimate Indian security and social concerns; the scale claim is audited separately.', integrity: [{ type: 'quantitative-claim', status: 'verified', summary: 'The original 32,000-women promotional framing was not authenticated at that scale and must not be treated as an established figure.', fact: 'The producer agreed to a disclaimer that no authenticated data established 32,000 or another specific conversion figure.', interpretation: 'The promotional number amplified scale beyond what the authenticated evidence established.', intent: 'The audit does not infer deliberate deception from the number alone.' }] },
  { title: 'Brahmāstra: Part One – Shiva', year: 2022, language: 'Hindi', status: 'certified', tags: ['Dharma', 'Sacred regard'], note: 'Uses Indic sacred vocabulary and cosmology affirmatively rather than as contemptuous decoration.' },
  { title: 'Animal', year: 2023, language: 'Hindi', status: 'certified', tags: ['Hindu identity', 'Family', 'Sacred regard'], note: 'Owner review resolves the prior Mixed call: the protagonist’s Hindu identity and faith are presented strongly without ridicule or compelled disavowal; other social or gender criticisms do not by themselves negate Bharatiya certification.' },
  { title: 'Laapataa Ladies', year: 2024, language: 'Hindi', status: 'neutral', provisional: true, tags: ['Provisional'], note: 'Held from durable publication pending sufficient evidence to resolve the outstanding originality/source dispute.' },
  { title: 'Rocketry: The Nambi Effect', year: 2022, language: 'Hindi', status: 'certified', tags: ['Rashtra', 'Science', 'Biopic'], note: 'Owner review confirms the film’s nationalist, India-science framing around Nambi Narayanan and the grave injustice he suffered; technical-credit disputes remain separate Narrative Integrity notes.', integrity: [{ type: 'biographical-credit', status: 'disputed', summary: 'Former ISRO scientists have disputed some technical and career-credit claims concentrated in the protagonist.', fact: 'Publicly reported former-ISRO objections challenge specific technical-history and credit claims in the film.', interpretation: 'Those disputes affect biographical fidelity but do not erase the film’s strong India-positive and nationalist framing.', intent: 'The available evidence does not establish an intent to falsify ISRO history.' }] },
  { title: 'Ram Setu', year: 2022, language: 'Hindi', status: 'certified', tags: ['Dharma', 'Heritage', 'Sacred regard'], note: 'Owner review confirms certification because the film affirmatively treats Shri Ram, Ram Setu and inherited Hindu civilizational memory as real and worthy of protection; scientific certainty is caveated separately.', integrity: [{ type: 'historical-claim', status: 'supported', summary: 'The film presents stronger archaeological certainty around Ram Setu’s human construction and antiquity than the public scientific record conclusively establishes.', fact: 'The film’s story treats its discoveries as conclusive, while official/scientific records cited in the audit do not establish that full archaeological claim conclusively.', interpretation: 'This is a Narrative Integrity caveat about empirical certainty, not a downgrade of the film’s Hindu-civilizational alignment.', intent: 'The makers openly present the film as respectful of Shri Ram and Ram Setu; hostile intent is not at issue.' }] },

  { title: 'Lubber Pandhu', year: 2024, language: 'Tamil', status: 'neutral', tags: ['Local roots'], note: 'Audited Tamil social drama with no material Bharatiya-alignment or contempt signal strong enough to force a directional verdict.' },
  { title: 'Captain Miller', year: 2024, language: 'Tamil', status: 'neutral', provisional: true, tags: ['Provisional'], note: 'Held from durable publication pending stronger evidence on the historical/identity interpretation surfaced by the adversarial pass.' },
  { title: 'Maaveeran', year: 2023, language: 'Tamil', status: 'neutral', tags: ['Tamil roots', 'Social Dharma'], note: 'Local social and political criticism remains inside an Indian social frame rather than becoming broad civilizational contempt.' },
  { title: 'Parking', year: 2023, language: 'Tamil', status: 'neutral', tags: ['Family', 'Social drama'], note: 'A low-ideology social conflict control: reviewed, but not forced into a civilizational category.' },
  { title: 'Ayothi', year: 2023, language: 'Tamil', status: 'mixed', tags: ['Dharma', 'Representation'], note: 'Humanist and social-dharma strengths coexist with representation choices that require a contested rather than clean verdict.' },
  { title: 'Meiyazhagan', year: 2024, language: 'Tamil', status: 'certified', tags: ['Tamil roots', 'Family', 'Parampara'], note: 'Deeply rooted in Tamil place, kinship, memory and inherited cultural life without contempt for the tradition it inhabits.' },
  { title: 'Vaazhai', year: 2024, language: 'Tamil', status: 'mixed', tags: ['Tamil roots', 'Social Dharma'], note: 'Strong local grounding and social critique coexist with contested representational implications surfaced in the source audit.' },
  { title: 'Kottukkaali', year: 2024, language: 'Tamil', status: 'mixed', tags: ['Local roots', 'Gender', 'Tradition'], note: 'A rooted regional story whose critique of coercive custom is not anti-Bharatiya by default, but the tradition/agency tension is material.' },
  { title: 'Aranmanai 4', year: 2024, language: 'Tamil', status: 'neutral', tags: ['Genre', 'Local roots'], note: 'Genre supernaturalism and local ritual are present without enough directional civilizational signal for certification.' },
  { title: 'Raayan', year: 2024, language: 'Tamil', status: 'neutral', tags: ['Family', 'Crime'], note: 'Family loyalty and local texture are present, but the film remains primarily a crime/family drama rather than a Bharatiya editorial case.' },

  { title: 'Balagam', year: 2023, language: 'Telugu', status: 'certified', tags: ['Parampara', 'Telangana', 'Family'], note: 'Death rites, kinship duties and Telangana village culture form the dramatic grammar rather than decorative folklore.' },
  { title: 'Virupaksha', year: 2023, language: 'Telugu', status: 'mixed', tags: ['Sacred regard', 'Supernatural', 'Tradition'], note: 'Village-deity and ritual life are culturally rooted while harmful superstition and occult causation create a genuine mixed signal.' },
  { title: 'Dasara', year: 2023, language: 'Telugu', status: 'mixed', tags: ['Telangana', 'Social Dharma'], note: 'Strong local cultural grounding coexists with difficult social and representation material that resists a clean directional label.' },
  { title: 'Major', year: 2022, language: 'Telugu', status: 'certified', tags: ['Rashtra', 'Raksha', 'Biopic'], note: 'Indian military service, sacrifice and national protection are the film’s moral centre. Owner review confirms certification; ordinary biographical fidelity checks remain separate.' },
  { title: 'Sita Ramam', year: 2022, language: 'Telugu', status: 'mixed', tags: ['Rashtra', 'Romance', 'Representation'], note: 'Indian-service and cultural-rootedness signals coexist with narrative/identity tensions identified in the adversarial review.' },
  { title: 'Akhanda', year: 2021, language: 'Telugu', status: 'certified', tags: ['Dharma', 'Sacred regard'], note: 'Hindu sacred vocabulary, protection and dharmic power are central and treated affirmatively.' },
  { title: 'Bimbisara', year: 2022, language: 'Telugu', status: 'certified', tags: ['Itihasa', 'Dharma'], note: 'Indic kingship, moral transformation and civilizational symbolism are central to the story architecture.' },
  { title: 'GodFather', year: 2022, language: 'Telugu', status: 'neutral', tags: ['Political drama'], note: 'Reviewed as a low-civilizational-signal political/crime control rather than inferred into a preferred verdict.' },
  { title: 'Mangalavaaram', year: 2023, language: 'Telugu', status: 'mixed', provisional: true, tags: ['Provisional'], note: 'Held from durable publication pending stronger evidence on the contested belief/representation finding.' },
  { title: 'Hi Nanna', year: 2023, language: 'Telugu', status: 'neutral', tags: ['Family', 'Social Dharma'], note: 'Family responsibility and care are sympathetic, but inherited tradition or national questions are not central enough for certification.' },

  { title: 'Aattam', year: 2024, language: 'Malayalam', status: 'neutral', tags: ['Social Dharma'], note: 'A social and moral accountability story reviewed as low civilizational signal rather than ideologically forced.' },
  { title: 'Bramayugam', year: 2024, language: 'Malayalam', status: 'mixed', tags: ['Tradition', 'Sacred archetype', 'Power'], note: 'Deeply rooted mythic and ritual texture coexists with dark transposition of inherited power and belief.' },
  { title: 'Aadujeevitham / The Goat Life', year: 2024, language: 'Malayalam', status: 'mixed', tags: ['Migration', 'Faith', 'Adaptation'], note: 'Indian lived experience and faith remain important while source/adaptation and representation questions keep the result contested.' },
  { title: 'Premalu', year: 2024, language: 'Malayalam', status: 'neutral', tags: ['Romance', 'Local roots'], note: 'A contemporary romance control with regional texture but no material Bharatiya conflict signal.' },
  { title: 'Manjummel Boys', year: 2024, language: 'Malayalam', status: 'neutral', tags: ['Friendship', 'Local roots'], note: 'Local identity and friendship are strong, while faith/empirical claims remain too peripheral for a directional verdict.' },
  { title: 'Kaathal – The Core', year: 2023, language: 'Malayalam', status: 'mixed', tags: ['Family', 'Social Dharma', 'Representation'], note: 'Queer representation is not treated as anti-Bharatiya by default; the mixed result comes from the broader family/social representation audit.' },
  { title: 'Neru', year: 2023, language: 'Malayalam', status: 'neutral', tags: ['Justice', 'Social Dharma'], note: 'A justice-focused drama with no material civilizational contempt or certification signal.' },
  { title: 'Aavesham', year: 2024, language: 'Malayalam', status: 'neutral', tags: ['Crime', 'Youth'], note: 'Reviewed as a genre/social control rather than converting style, violence or hero worship into Bharatiya signal.' },
  { title: 'Kannur Squad', year: 2023, language: 'Malayalam', status: 'mixed', tags: ['Police', 'Raksha', 'Real-event'], note: 'Public-order and investigative service signals coexist with real-event fidelity and representation caveats; this remains the sole owner-review exception.' },
  { title: 'Jana Gana Mana', year: 2022, language: 'Malayalam', status: 'mixed', tags: ['Rashtra', 'Justice', 'State critique'], note: 'Strong critique of institutions remains inside an Indian constitutional/social frame, but the film’s manipulative-information thesis creates a contested result.' },

  { title: 'Garuda Gamana Vrishabha Vahana', year: 2021, language: 'Kannada', status: 'mixed', tags: ['Sacred archetype', 'Local roots'], note: 'Rooted sacred archetypes are deliberately mapped onto violent gangsters, creating a real transposition tension rather than simple contempt.' },
  { title: 'Sapta Sagaradaache Ello – Side B', year: 2023, language: 'Kannada', status: 'neutral', tags: ['Romance', 'Agency'], note: 'Gender-agency and stalking criticism are separated from Bharatiya classification; no material civilizational contempt finding survives.' },
  { title: 'K.G.F: Chapter 1', year: 2018, language: 'Kannada', status: 'neutral', tags: ['Crime', 'Heroism'], note: 'Violence and hero worship are not automatically converted into a Bharatiya editorial signal.' },
  { title: 'Kaatera', year: 2023, language: 'Kannada', status: 'mixed', tags: ['Caste', 'Custom', 'Local roots'], note: 'Caste/custom critique and local rootedness coexist; unverified social allegations were excluded from the durable verdict.' },
  { title: 'Daredevil Musthafa', year: 2023, language: 'Kannada', status: 'mixed', tags: ['Communal harmony', 'Representation'], note: 'A communal-harmony thesis coexists with representation asymmetry that warrants a contested label.' },
  { title: 'Avane Srimannarayana', year: 2019, language: 'Kannada', status: 'neutral', tags: ['Mythic vocabulary', 'Adventure'], note: 'Mythic vocabulary is distinguished from devotional or civilizational claim; the genre signal alone is insufficient for certification.' },
  { title: 'Toby', year: 2023, language: 'Kannada', status: 'mixed', tags: ['Sacred archetype', 'Violence'], note: 'The Maari sacred archetype is deliberately transposed onto a violent protagonist, creating a rooted but contested signal.' },
  { title: 'Hostel Hudugaru Bekagiddare', year: 2023, language: 'Kannada', status: 'neutral', tags: ['Comedy', 'Control'], note: 'Retained as an audited neutral control: high-energy local comedy without material Bharatiya conflict signal.' },
  { title: 'Lucia', year: 2013, language: 'Kannada', status: 'neutral', tags: ['Psychological drama', 'Control'], note: 'Retained as an audited neutral control rather than projecting an ideological verdict onto a psychological narrative.' },
  { title: 'Godhi Banna Sadharana Mykattu', year: 2016, language: 'Kannada', status: 'certified', tags: ['Family', 'Dharma', 'Kannada roots'], note: 'Filial duty, family responsibility and local cultural rootedness are central enough to produce a positive Bharatiya signal.' },
];

const dossierForLanguage: Record<SanghiProfile['language'], string> = {
  Hindi: 'HINDI_TRANCHE_01.md',
  Tamil: 'TAMIL_TRANCHE_01.md',
  Telugu: 'TELUGU_TRANCHE_01.md',
  Malayalam: 'MALAYALAM_TRANCHE_01.md',
  Kannada: 'KANNADA_TRANCHE_01.md',
};

function dossierUrl(row: Row) {
  const file = dossierForLanguage[row.language];
  return `https://github.com/rkarthikeyan54254/flickpick/blob/sanghi-certified-batch-02-50/docs/sanghi-certified/batch-02/${file}`;
}

export const batch02Profiles: SanghiProfile[] = rows.map((row) => ({
  title: row.title,
  year: row.year,
  language: row.language,
  status: row.status,
  confidence: row.confidence ?? (row.provisional ? 'low' : 'high'),
  methodologyVersion: '1.0-bharatiya',
  reviewedAt: '2026-10-02',
  reviewDepth: row.provisional ? 'desk' : 'source-audit',
  auditStatus: row.provisional ? 'provisional' : 'reviewed',
  publicationGate: row.provisional ? undefined : passedGate,
  dimensions: nullDimensions,
  tags: row.tags ?? [],
  reasons: [
    row.note ?? `Batch 02 source audit reached a ${row.status} result under the Bharatiya editorial lens.`,
    row.provisional
      ? 'This title is intentionally held from durable publication until the unresolved evidence gap is closed.'
      : 'The durable verdict passed adversarial discovery, regional-context, social-radar, Narrative Integrity, evidence-sufficiency and self-falsification checks.',
  ],
  integrityFlags: row.integrity ?? [],
  evidence: [{
    kind: 'primary',
    source: 'Batch 02 source-audit dossier',
    claim: 'The repository dossier contains the source trail, adversarial review, Fact/Interpretation/Intent separation and publication-gate notes for this title.',
    url: dossierUrl(row),
  }],
}));
