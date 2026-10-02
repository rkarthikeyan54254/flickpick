# Batch 02 — Review report

Date: 2026-10-02  
Editorial lens: Bharatiyanism Editorial Lens v1  
Evidence/process: Master Plan v0.3 + Editorial Publication Gate v1

## Corpus outcome

- 50 / 50 films researched across Hindi, Tamil, Telugu, Malayalam and Kannada.
- 47 / 50 pass the evidence/process gate.
- 3 / 50 remain provisional evidence holds: Laapataa Ladies, Captain Miller and Mangalavaaram.
- After explicit owner review of six high-risk exceptions:
  - 46 records are cleared for the auto-publish lane.
  - 1 record remains in the human-review exception lane: Kannur Squad.
- Owner-cleared exceptions are recorded separately from the evidence record so their Narrative Integrity caveats remain visible.

This makes the human reviewer an exception path, not the default reviewer for every film. The gate remains strict; owner approval clears an escalation requirement but never deletes an evidence finding.

## Owner-reviewed exception decisions

- **Sardar Udham — Sanghi Certified.** Its nationalistic, anti-colonial and India-first framing is decisive. Historical dramatization remains a separate fidelity note.
- **The Kerala Story — Sanghi Certified.** Strong Bharatiya/Raksha and pro-Hindu alignment is decisive. The original `32,000` promotional scale claim remains a high-severity Narrative Integrity caveat because that specific number was not authenticated at the asserted scale.
- **Animal — Sanghi Certified.** The protagonist's Hindu identity and faith are presented strongly without ridicule or compelled disavowal; social/gender criticism does not itself negate Bharatiya certification.
- **Rocketry: The Nambi Effect — Sanghi Certified.** Its nationalist, India-science framing around Nambi Narayanan and the injustice he suffered is decisive; technical and biographical-credit disputes remain separate integrity notes.
- **Ram Setu — Sanghi Certified.** The film affirmatively treats Shri Ram, Ram Setu and inherited Hindu civilizational memory as real and worthy of protection. Archaeological certainty beyond the established public record remains separately caveated.
- **Major — Sanghi Certified.** Indian military service, sacrifice and national protection are strong qualifying signals. Ordinary biographical fidelity checks do not negate certification.
- **Kannur Squad — still pending owner review.** The real-event/source-fidelity issue remains unresolved at the owner-review layer.

## Publication semantics

- `auto-publish`: all hard gates pass and either no calibrated high-risk trigger fires or an explicit exception review has cleared it.
- `human-review`: all hard gates pass, but a factual/identity/source-fidelity risk still requires explicit editorial review before durable publication.
- `provisional-hold`: one or more hard gates fail or evidence remains insufficient; the record must not present as a durable verdict.

An explicit owner approval is stored in `src/data/editorialApprovals.ts`. This creates an auditable distinction between "the system found no risk" and "the system found risk, retained the warning, and the exception was editorially cleared."

## Bharatiya calibration

The methodology is no longer described as a generic worldview classifier. The declared lens is India-first and Hindu-civilizational while keeping evidence discipline separate from editorial alignment.

Key regression rule: a factual-integrity problem does not automatically revoke Bharatiya certification. It remains a separate Narrative Integrity finding unless the factual manipulation materially changes the film's Bharatiya meaning.

The Kerala Story remains the primary regression case: Sanghi Certified under the Bharatiya/Raksha lens while the unsupported-at-scale `32,000` promotional framing remains visible as a quantitative Narrative Integrity finding.

A second regression rule is now explicit for military/national-service films: Indian Army, national defence and sacrifice are strong positive Bharatiya signals unless the film materially undermines India/Bharat, distorts identity in a way that changes the meaning, or fails the factual-integrity gate severely enough to require a hold.

## Product packaging

- Batch 02 is represented in machine-readable `SanghiProfile` records.
- Provisional titles are excluded from durable publication filters.
- Revision history is visible in the detail experience.
- Users can submit a structured `Challenge this certification` request using factual-error, missing-context, evidence-quality or editorial-disagreement categories.
- Challenges require a written rationale and optionally an evidence URL; they do not change verdicts through vote count or public comments.
- The submission path uses Netlify Forms, so no open comment stream is introduced.

## Visual/product redesign

The site shell and home/detail experience present FlickPick as a Bharatiya cinema guide rather than a generic movie shuffler. The primary framing is Indian cinema discovery plus an explicit evidence-backed Bharatiya editorial lens.

## OTT foundation

- India provider discovery is no longer limited to a permanently hard-coded Netflix / Prime / ZEE5 list.
- The application queries TMDb's India movie-provider registry at runtime and filters for prioritized India services, including JioHotstar/Hotstar, SonyLIV, Sun NXT, aha, ETV Win, ManoramaMAX, Hoichoi, Chaupal, Lionsgate Play, Apple TV+ and MUBI where TMDb returns them.
- A source-backed `New on Indian OTT` rail is present with confidence labels and editorial-review-pending state.
- Upcoming titles are never certified from trailers alone.
- Full automated 30-day announcement ingestion remains an operational hardening step after this PR; the data model and visible surface are established here.

## Review recommendation

The remaining editorial owner review is now only **Kannur Squad**. Product/system review should focus on the Bharatiya framing, three-lane publication semantics, structured challenge interaction, revision history and OTT/provider surfaces rather than line-reading all 50 titles.
