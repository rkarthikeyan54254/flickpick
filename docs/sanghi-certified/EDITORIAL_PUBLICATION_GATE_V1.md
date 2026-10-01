# Sanghi Certified — Editorial Publication Gate v1

**Status:** Mandatory for all new reviews from Batch 02 onward  
**Methodology:** v0.3+  
**Purpose:** Prevent a verdict from becoming publicly durable before the evidence and adversarial review are complete.

## Core rule

A movie may exist in the research queue with any provisional hypothesis. It may not be presented to users as a durable **Sanghi Certified**, **Reviewed · Neutral**, **Reviewed · Not Certified**, or **Mixed / Contested** result until this gate passes.

The first 30-film corpus is a calibration set. Legacy v0.2 records remain useful for product testing but are treated as **provisional** until re-audited under this gate.

## The gate

Every published review must record all of the following:

### G1 — Basic editorial record
- title, year, language
- verdict and confidence
- at least two concrete reasons for the verdict
- relevant dimension scores
- methodology version and review date

### G2 — Adversarial discovery pass
The reviewer must actively search for evidence that could overturn or complicate the initial impression, including:
- community/religious/caste caricature or ridicule
- identity asymmetry
- hero/villain identity patterns
- one-off dialogue or visual symbolism
- regional-language criticism and praise
- creator explanations
- X/Twitter, Reddit and YouTube claims with falsifiable details

A lack of obvious controversy is not evidence that the pass occurred.

### G3 — Regional/context pass
At least one India/regional-context source or primary/creator source must be considered where the film materially engages culture, religion, caste, history or politics. A Western review cannot be the only interpretive basis for an Indian-context finding.

### G4 — Social-radar pass
Search social discussion for specific scene-level or adaptation claims. Social media is a lead generator, not proof. Record significant claims that survive verification; ignore vote/retweet volume as evidence of truth.

### G5 — Adaptation-delta pass
Mandatory for historical, biographical, true-story or real-event films. Compare source record with film portrayal for:
- names
- religion/caste/community identity
- ideological affiliation
- marriage/ritual
- political symbolism
- victim/perpetrator identity
- chronology/event inversion
- invented composites
- selective omission or retention of identity

For wholly fictional films this may be marked `not-applicable`, but never silently skipped.

### G6 — Narrative Integrity result
Record either:
- one or more material findings, or
- explicit `no-material-finding` after the adversarial pass.

Silence is not equivalent to no finding.

### G7 — Fact / Interpretation / Intent separation
Every sensitive finding must distinguish:
- **Fact:** what is independently established
- **Interpretation:** what the fact plausibly means in the film
- **Intent:** what can actually be established about why the filmmaker made the choice

Do not infer hostile intent from identity alone.

### G8 — Evidence sufficiency
A durable review requires an evidence trail sufficient for a user to understand why the verdict exists. As a default:
- at least two independent source notes for contested/historical/true-story films
- at least one strong primary/creator/film source plus one contextual source where available
- scene-level evidence for claims that depend on a specific scene

If evidence is weak, downgrade confidence or hold the film as provisional.

### G9 — Explanation UX
The public record must expose:
- verdict
- confidence
- concise Why section on the shuffle card
- full Why section on detail page
- Narrative Integrity section
- evidence trail
- review depth

A badge without reasons fails the gate.

### G10 — Self-falsification check
Before publication, explicitly ask:

> What evidence would make this verdict wrong or materially incomplete, and did we actively look for it?

If not, the review is provisional.

## Machine-readable gate state

New SanghiProfile records must carry a publication gate object with:

- `adversarialPass`
- `regionalContextPass`
- `socialRadarPass`
- `adaptationDeltaPass`: `passed` or `not-applicable`
- `narrativeIntegrityPass`
- `factInterpretationIntentPass`
- `evidenceSufficiencyPass`
- `explanationPass`
- `selfFalsificationPass`

Only profiles with all applicable checks passed and `auditStatus: reviewed|hardened` are publication-eligible.

## Hold rule

When evidence is incomplete, the correct output is **Provisional / Needs audit**, not a forced verdict.

Editorial throughput never outranks editorial integrity.

## Regression cases

The following are permanent tests of this gate:

- **Jai Bhim** — first-pass Neutral missed adaptation/community deltas; must never regress to passive desk classification.
- **Soorarai Pottru** — ideological and social-identity substitution must be actively searched for in real-person adaptations.
- **Amaran** — omission/asymmetry must be separated from filmmaker intent and family explanation.
- **Kantara / Kalki 2898 AD** — Western Left/Right framing must not overwrite India-native civilizational context.
- **Article 370** — India-sovereignty alignment is part of the declared lens; factual source fidelity is a separate question.

## Batch policy

For Batch 02 and later:

1. Research records may be created freely.
2. Provisional hypotheses may change during audit.
3. Gate failures are recorded, not hidden.
4. Only gate-passed records join the published reviewed corpus.
5. Every editorial revision is versioned in source control.

This gate is part of the product moat, not process overhead.