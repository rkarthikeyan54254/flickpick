# Batch 02 — Review report

Date: 2026-10-02  
Editorial lens: Bharatiyanism Editorial Lens v1  
Evidence/process: Master Plan v0.3 + Editorial Publication Gate v1

## Corpus outcome

- 50 / 50 films researched across Hindi, Tamil, Telugu, Malayalam and Kannada.
- 47 / 50 pass the evidence/process gate.
- 3 / 50 remain provisional evidence holds: Laapataa Ladies, Captain Miller and Mangalavaaram.
- The publication router then separates gate-passed records into two lanes:
  - 40 auto-publish candidates.
  - 7 human-review exceptions for high-integrity-risk calibration cases.
- The human-review exceptions are: Sardar Udham, The Kerala Story, Animal, Rocketry: The Nambi Effect, Ram Setu, Major and Kannur Squad.

This intentionally makes the human reviewer an exception path, not the default reviewer for every film. The initial calibration queue is slightly conservative; the long-run target is to tune exception volume toward roughly 5–10% while never lowering the evidence threshold.

## Publication semantics

- `auto-publish`: all hard gates pass and no calibrated high-risk trigger fires.
- `human-review`: all hard gates pass, but a factual/identity/source-fidelity risk requires explicit editorial review before durable publication.
- `provisional-hold`: one or more hard gates fail or evidence remains insufficient; the record must not present as a durable verdict.

A human-review record is intentionally non-publication-eligible until that exception review is cleared. This prevents the system from silently publishing contentious cases merely because the base research checklist is green.

## Bharatiya calibration

The methodology is no longer described as a generic worldview classifier. The declared lens is India-first and Hindu-civilizational while keeping evidence discipline separate from editorial alignment.

Key regression rule: a factual-integrity problem does not automatically revoke Bharatiya certification. It remains a separate Narrative Integrity finding unless the factual manipulation materially changes the film's Bharatiya meaning.

The Kerala Story is the primary regression case: Sanghi Certified under the Bharatiya/Raksha lens, while the unsupported-at-scale `32,000` promotional framing remains a visible high-severity quantitative Narrative Integrity finding and therefore enters the human-review lane.

## Product packaging

- Batch 02 is now represented in machine-readable `SanghiProfile` records.
- Provisional titles are excluded from durable publication filters.
- Revision history is visible in the detail experience.
- Users can submit a structured `Challenge this certification` request using factual-error, missing-context, evidence-quality or editorial-disagreement categories.
- Challenges require a written rationale and optionally an evidence URL; they do not change verdicts through vote count or public comments.
- The submission path uses Netlify Forms, so no open comment stream is introduced.

## Visual/product redesign

The site shell and home/detail experience now present FlickPick as a Bharatiya cinema guide rather than a generic movie shuffler. The primary framing is Indian cinema discovery plus an explicit evidence-backed Bharatiya editorial lens.

## OTT foundation

- India provider discovery is no longer limited to a permanently hard-coded Netflix / Prime / ZEE5 list.
- The application queries TMDb's India movie-provider registry at runtime and filters for the prioritized India services, including JioHotstar/Hotstar, SonyLIV, Sun NXT, aha, ETV Win, ManoramaMAX, Hoichoi, Chaupal, Lionsgate Play, Apple TV+ and MUBI where TMDb returns them.
- A source-backed `New on Indian OTT` rail is present with confidence labels and editorial-review-pending state.
- Upcoming titles are never certified from trailers alone.
- Full automated 30-day announcement ingestion remains an operational hardening step after this PR; the data model and visible surface are established here.

## Review recommendation

Review this PR at two levels:

1. Product/system review: verify the Bharatiya framing, three-lane publication semantics, structured challenge interaction, revision history and OTT/provider surfaces.
2. Exception editorial review: concentrate on the seven human-review titles rather than line-reading all 50 records.

The 40 auto-publish candidates are specifically designed not to require per-film owner approval once the gate and routing policy are accepted.
