# Sanghi Certified — Prototype Plan v0.1

**Project:** FlickPick  
**Scope:** 30-film pilot, expandable to 50  
**Methodology:** `MASTER_PLAN_V0.2.md`

## Goal

Prove that Sanghi Certified adds useful discovery value inside the existing FlickPick shuffle experience before investing in large-scale automated classification.

The prototype should answer four questions:

1. Can users understand the certification and its dimensions at a glance?
2. Do the explanations feel materially more useful than generic Left/Right labels?
3. Can the editorial pipeline produce repeatable results across languages and genres?
4. Can FlickPick filter/shuffle by certification without disturbing the current TMDb/OTT flow?

## Core product decision

For the prototype, **classification is precomputed editorial data, not generated live by an LLM in the browser**.

TMDb remains the source for title/poster/overview/watch-provider data. Sanghi Certified is a separate editorial dataset keyed by TMDb movie ID.

This gives us deterministic labels, versioned methodology, evidence traceability and easy human correction.

## Recommended pilot size: 30 films

Thirty is the preferred starting point: large enough to expose methodology problems, small enough to audit manually.

Target mix:

- 6 Hindi
- 6 Tamil
- 6 Telugu
- 6 Malayalam
- 6 Kannada

Within the 30, intentionally include:

- 8 clear Sanghi Certified positives
- 5 clear Not Certified examples
- 5 broadly neutral/mainstream films
- 6 historical/biographical/true-story films requiring adaptation-delta checks
- 6 difficult/contested films where reasonable observers may disagree

Categories may overlap.

The current five-film pilot becomes part of this set:

- Kantara: Chapter 1
- Kalki 2898 AD
- Amaran
- Article 370
- The Great Indian Kitchen

Soorarai Pottru should be added as an adaptation-delta regression case.

## Phase 1 — Expand FlickPick's India language surface

Current app support must be expanded to include at minimum:

- Hindi
- Tamil
- Telugu
- Malayalam
- Kannada

The prototype should remain India-region-first and use the existing provider availability data from TMDb. Provider coverage can be expanded later; certification must remain independent of which OTT currently carries the film.

## Phase 2 — Create the editorial data model

Add a separate local dataset, for example:

`src/data/sanghiProfiles.ts` or `src/data/sanghiProfiles.json`

Recommended record:

```ts
export type CertificationStatus =
  | 'certified'
  | 'not-certified'
  | 'mixed'
  | 'unrated';

export interface SanghiProfile {
  tmdbId: number;
  title: string;
  language: string;
  status: CertificationStatus;
  confidence: 'high' | 'medium' | 'low';
  methodologyVersion: string;
  reviewedAt: string;

  dimensions: {
    dharma: number | null;
    civilizationalContinuity: number | null;
    rashtra: number | null;
    itihasa: number | null;
    parampara: number | null;
    localRoots: number | null;
    raksha: number | null;
    socialDharma: number | null;
    sacredVsCynical: number | null;
    contemptCaricature: number | null;
  };

  reasons: string[];
  integrityFlags: Array<{
    type: string;
    status: 'verified' | 'supported' | 'disputed' | 'unverified' | 'contradicted';
    summary: string;
  }>;

  evidence: Array<{
    kind: 'film' | 'primary' | 'official' | 'interview' | 'review' | 'social';
    source: string;
    claim: string;
    url?: string;
  }>;
}
```

Do **not** put a public 0–100 Sanghi score in v0.1. Use badge + dimensions + reasons + confidence + integrity flags.

## Phase 3 — Build the 30-film editorial corpus

For each film:

### A. Base evidence

Collect:

- plot / synopsis
- director/writer interviews
- regional-language coverage
- reliable background on real people/events where applicable
- reviews from different viewpoints
- social-media claim clusters

### B. Scene-level evidence where necessary

For contested, biographical or integrity-sensitive films, require one or more of:

- timed subtitle/transcript references
- exact scene descriptions
- visual symbols/portraits/rituals
- source-vs-film comparison

### C. Adaptation-delta audit for true stories

Compare real-world source profile against film portrayal for:

- identity omitted
- identity added/swapped
- ideological affiliation inserted
- marriage/event changed
- chronology changed
- perpetrators/victims/community changed
- material fact invented or inverted

### D. Social radar

Use X/Twitter, Reddit, YouTube and regional discussions as lead generation.

High-value leads contain timestamps, clips, screenshots, named source persons, before/after comparisons or falsifiable claims.

Social virality changes investigation priority, not truth confidence.

### E. Adjudication

Each sensitive finding must separate:

- Fact
- Interpretation
- Intent

Then assign evidence status and confidence.

## Phase 4 — Add Sanghi Certified to the existing FlickPick data flow

Current flow:

`TMDb candidates -> provider filtering -> shuffle -> MovieCard`

Prototype flow:

`TMDb candidates -> join SanghiProfile by tmdbId -> optional certification filter -> shuffle -> MovieCard`

Rules:

- A movie with no profile is **Unrated**, not Not Certified.
- Existing discovery remains functional when Sanghi mode is off.
- Sanghi Certified must never be inferred live from TMDb synopsis alone.
- If the user selects Certified Only, shuffle only from movies with `status === 'certified'`.

## Phase 5 — Minimal UI prototype

### Home / filter area

Add a compact certification selector:

- All movies
- Sanghi Certified only
- Reviewed only

Do not expose ten ideological controls on the home screen initially.

### Movie card

For reviewed movies display:

`🪷 SANGHI CERTIFIED`  
`High confidence`

or:

`REVIEWED — NOT CERTIFIED`

or:

`MIXED / CONTESTED`

Show 2–3 strongest dimension chips, for example:

`Dharma` `Rashtra` `Local Roots`

### Movie detail page

Add a `Sanghi Certified` editorial panel containing:

1. verdict + confidence
2. one-paragraph explanation
3. dimension grid
4. "Why this verdict" reasons
5. Narrative Integrity flags
6. expandable evidence / methodology note

Keep artistic rating (TMDb) visually separate from the certification.

## Phase 6 — Prototype quality gates

Before calling the prototype usable:

- 30 films have complete profiles
- all five target languages represented
- every sensitive identity/adaptation claim has corroborating evidence
- contested findings distinguish Fact / Interpretation / Intent
- every profile records methodology version and review date
- no movie becomes Not Certified simply because it is unrated
- no certification is produced from synopsis-only inference
- pilot regression cases remain explainable under the same rules

Required regression cases include:

- Kantara: Chapter 1 — should not become "Left" merely because of anti-exploitation/tribal themes
- Kalki 2898 AD — should recognize Indic cosmology as story architecture
- Amaran — must preserve the distinction between verified caste omission and unproven hostile intent
- Article 370 — Indian sovereignty/integration is an explicit positive editorial baseline; factual claims remain independently auditable
- The Great Indian Kitchen — social criticism must not automatically become an anti-Hindu accusation
- Soorarai Pottru — adaptation pipeline must surface documented ideological/social-identity changes

## Phase 7 — User test

Test three workflows:

### 1. Discovery

User selects language/provider and `Sanghi Certified only`, then shuffles.

Measure whether the result requires fewer reshuffles and whether explanation is understandable.

### 2. Trust

Show the verdict first, then allow the user to inspect evidence.

Ask whether they understand **why** the movie received that verdict, even if they disagree.

### 3. Challenge

Provide `Did we miss something?` on the detail page.

User submission fields:

- scene/timestamp
- claim
- optional source link
- category: identity / history / religion / caricature / national-security / other

Submissions create editorial leads, not automatic score changes.

## Phase 8 — Only after the prototype works: automation

Then automate parts of the editorial pipeline:

1. candidate-film selection from TMDb
2. multilingual web/social discovery
3. claim clustering
4. source-entity graph generation
5. transcript/scene extraction
6. source-vs-film delta generation
7. draft dimension scoring
8. adversarial second-pass review

Human/editorial approval remains required for contested findings until the system demonstrates acceptable precision.

## Suggested implementation order

1. Freeze methodology v0.2
2. Add Malayalam + Kannada language support
3. Add SanghiProfile TypeScript schema
4. Seed the existing six regression films
5. Build badge + detail panel + Certified-only filter
6. Expand corpus to 15 films
7. Run first UI/user test
8. Expand to 30 films
9. Audit disagreements and revise methodology if needed
10. Only then decide whether to grow to 50+ and automate ingestion

## Prototype success criteria

The pilot is successful if:

- users understand the badge without needing a long methodology explanation
- disputed films remain explainable rather than arbitrary
- scene-level findings materially improve at least some classifications over synopsis/review-only analysis
- the certification produces different useful information from TMDb/IMDb-style quality scores
- the existing one-click FlickPick experience remains simple

The core product proposition for the prototype is:

> **FlickPick tells you what to watch. Sanghi Certified tells you the worldview you are walking into.**
