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
};
