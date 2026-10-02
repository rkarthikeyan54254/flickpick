export interface EditorialApproval {
  reviewer: 'owner';
  reviewedAt: string;
  decision: 'approved';
  rationale: string;
}

// Explicit exception reviews are recorded separately from the evidence record.
// Approval clears the human-review routing requirement but never removes
// Narrative Integrity findings or source caveats from the public profile.
export const editorialApprovals: Record<string, EditorialApproval> = {
  'sardar udham::2021': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Nationalistic, anti-colonial India-first framing is decisive; historical dramatization remains a separate integrity note.'
  },
  'the kerala story::2023': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Strong Bharatiya/Raksha and pro-Hindu alignment; the disputed promotional scale figure remains a separate Narrative Integrity caveat.'
  },
  'animal::2023': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'The protagonist is presented as strongly Hindu without ridicule or compromise of Hindu faith; representation concerns do not override the Bharatiya signal.'
  },
  'rocketry the nambi effect::2022': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Strong nationalist and India-science framing around Nambi Narayanan and the injustice he suffered; technical attribution disputes remain separate integrity notes.'
  },
  'ram setu::2022': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Affirmative Hindu sacred and civilizational framing around Shri Ram and Ram Setu is decisive; archaeological certainty remains separately caveated.'
  },
  'major::2022': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Indian military service, sacrifice and national protection are strong qualifying signals; ordinary biographical dramatization does not negate certification.'
  },
  'tanhaji the unsung warrior::2020': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; historical compression remains a separate Narrative Integrity matter.'
  },
  'kesari::2019': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; Sikh courage, sacrifice and civilizational memory are decisive while tactical or historical deviations remain separately caveated.'
  },
  'sye raa narasimha reddy::2019': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; anti-colonial Bharatiya alignment is decisive while mythologizing and source-fidelity concerns remain separate.'
  },
  'gautamiputra satakarni::2017': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; civilizational and historical alignment is decisive while certainty around ancient-history claims remains a separate integrity question.'
  },
  'marakkar arabikadalinte simham::2021': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; Kerala anti-colonial and maritime-memory alignment is decisive while sparse-source and period-detail concerns remain separate.'
  },
  'pathonpatham noottandu::2022': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; rooted Kerala social-reform alignment is decisive while legend-versus-history distinctions remain separately visible.'
  },
  'krantiveera sangolli rayanna::2012': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; anti-colonial Kannada historical memory is decisive while fictional additions remain a separate Narrative Integrity issue.'
  },
  'kasoombo::2024': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; defence of sacred heritage and community sacrifice are decisive while the specific historical episode remains separately source-audited.'
  },
  'manikarnika the queen of jhansi::2019': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; anti-colonial Rashtra alignment is decisive while hagiographic compression and creative liberties remain separate integrity notes.'
  },
  'the vaccine war::2023': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; India-science, institutional achievement and national-confidence framing are decisive while disputed factual claims remain separately caveated.'
  },
  'nayika devi the warrior queen::2022': {
    reviewer: 'owner', reviewedAt: '2026-10-02', decision: 'approved',
    rationale: 'Owner confirms the film is Sanghi Certified; civilizational defence and regional historical memory are decisive while source-fidelity questions remain separate.'
  },
};
