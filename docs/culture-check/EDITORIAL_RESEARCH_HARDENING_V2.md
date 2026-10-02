# Culture Check editorial research hardening v2

Status: binding for every new corpus record using `methodologyVersion: 2.0-evidence-derived`.

## Why v2 exists

The first corpus system could record `adversarialPass: true`, `socialRadarPass: true` or `selfFalsificationPass: true` without a durable artifact proving what was actually searched. The Chak De! India calibration failure exposed the weakness: a specific identity/source contradiction surfaced only after an owner challenge.

V2 removes that failure mode. A new record cannot auto-publish merely because a reviewer asserts that a check passed. Publication readiness is derived from a structured `ResearchDossier` containing the searches, findings, counterevidence and red-team result.

## Mandatory research sequence

1. **Film understanding** — identify genre, plot, regional setting, source basis and whether the film is fiction, adaptation, history, biopic, true-story material or sacred/folk tradition.
2. **Adversarial discovery** — record the actual discovery queries used to search for source/adaptation issues, identity changes, controversy/factual disputes, creator statements and public challenge signals.
3. **Ten mandatory probes** — source/adaptation; identity substitution/asymmetry; historical claims; quantitative claims; real-person attribution; sacred/religious valence; regional context; creator/source conflict; social-radar discovery; self-falsification.
4. **Evidence dossier** — material findings must point to evidence URLs contained in the profile. Social posts can discover a claim but cannot close it without stronger evidence.
5. **Counterevidence** — any high-materiality finding or ambiguity requires the strongest credible contrary evidence found during research.
6. **Independent red team** — record the strongest credible reason the proposed verdict could be wrong, the evidence for that challenge, and its impact on the verdict.
7. **FACT / INTERPRETATION / INTENT** — state these separately. Intent is not inferred merely because an adaptation or identity change exists.
8. **Adjudication and routing** — only after the dossier is complete does the publication router decide whether the record can publish.

## Routing semantics

### Provisional hold

`provisional-hold` means the research itself is incomplete. Missing dossier, missing mandatory probe, missing adversarial search log, missing red-team analysis, missing counterevidence for a high-risk finding, or an unverified integrity claim all go here.

A provisional title must **not** be sent to the owner to compensate for unfinished research.

### Human review

`human-review` means the research is complete but a **material high-risk contradiction remains unresolved**. Examples include a disputed religious/caste/community identity substitution, irreconcilable creator/source accounts, or a genuinely unresolved historical attribution that changes the cultural meaning of the film.

Medium confidence by itself is no longer a reason for human review in v2.

### Auto-publish

A record may auto-publish when the dossier is complete and the red team has either cleared the proposed verdict or reduced the challenge to a resolved/qualified caveat. Supported or verified Narrative Integrity findings remain visible but do not create a human bottleneck merely because they exist.

This preserves the permanent invariant:

> Narrative Integrity and Bharatiya/Sanghi alignment are independent axes unless the manipulation itself materially changes the film's Bharatiya meaning.

## Required regression cases

The following cases must inform future editorial changes:

- **Chak De! India** — a patriotic surface signal cannot wash out a credible identity-source contradiction. Director, actor and real-person accounts must all be searched before adjudication.
- **Jai Bhim** — community/perpetrator identity substitution and disputed community-linked symbolism require an adaptation-delta audit.
- **Soorarai Pottru** — source-person identity changes and explicit ideological-symbol changes must be separated from broader unsupported allegations of hostility.
- **Amaran** — identity omission can coexist with a Certified verdict when material counterevidence, including family-request context, is retained; intent cannot be assumed.
- **The Kerala Story** — strong Bharatiya/Raksha alignment can coexist with a severe Narrative Integrity warning around an unsupported-at-scale quantitative promotional claim.

## Scaling target

The owner is an exception adjudicator, not a missing-research detector. The desired steady state is that the large majority of completed dossiers route automatically, a small number remain provisional because evidence is genuinely unavailable, and only a very small set reaches human review because fully researched evidence remains materially ambiguous.

The success metric is not raw reviews per hour. It is **publication-ready films per unit time with zero known uninvestigated high-risk claims**.
