# Sanghi Certified — Batch 02: 50-film deep-dive plan

**Target:** 50 additional Indian films  
**Languages:** Hindi, Tamil, Telugu, Malayalam, Kannada  
**Distribution:** target ~10 per language, adjusted only when current FlickPick/India OTT availability makes that impractical  
**Methodology:** v0.3 + Editorial Publication Gate v1

## Objective

Expand the corpus by 50 films without weakening the editorial standard established after the first calibration batch.

This is not a throughput exercise. A movie counts as **reviewed** only when it passes `EDITORIAL_PUBLICATION_GATE_V1.md`. A title may be researched and still be held as provisional if evidence is incomplete.

## Candidate-selection priority

Prefer films that FlickPick can currently surface for India through its supported discovery/OTT path, with priority to:

1. popular/recent films users are likely to encounter
2. historical, biographical and true-story adaptations
3. films with strong religious/civilizational/national-security themes
4. films with known caste/religious/representation disputes
5. ordinary mainstream films that serve as neutral controls
6. a balanced mix of Certified / Mixed / Neutral / Not Certified possibilities

Do not select 50 films merely because they are easy to classify.

## Mandatory workflow per film

1. Establish title/year/language and current availability/discoverability.
2. Form an initial hypothesis but do not publish it.
3. Run the adversarial discovery pass.
4. Run regional-context research.
5. Run social-radar searches for specific scene/adaptation claims.
6. For true/historical/biographical films, run source-vs-film adaptation delta.
7. Record Narrative Integrity findings or explicit no-material-finding.
8. Separate Fact / Interpretation / Intent for sensitive findings.
9. Score the dimensions.
10. Write at least two concrete public-facing reasons.
11. Record evidence notes and confidence.
12. Complete the machine-readable PublicationGate object.
13. Mark `auditStatus: reviewed` only if every applicable gate passes.
14. If any gate fails, retain as provisional and document what is missing.

## Source expectations

Use a hierarchy:

1. film/transcript/scene evidence where legally and practically available
2. primary records / memoir / court or government material for real events
3. filmmaker/actor/family interviews
4. regional Indian reporting and criticism
5. viewpoint-diverse reviews
6. social media as discovery radar, never proof

For contested or true-story films, one review is never enough.

## Output format

Each new SanghiProfile should include:

- verdict
- confidence
- reviewDepth
- auditStatus
- dimensions
- 2–4 public-facing reasons
- Narrative Integrity findings
- Fact / Interpretation / Intent where applicable
- evidence trail
- publicationGate
- methodologyVersion
- reviewedAt

## Branch and review policy

Batch 02 should be prepared on a dedicated branch and opened as a PR for human review. Do **not** merge the 50-film batch directly to `main` before review.

The PR summary should include:

- all 50 titles grouped by language
- verdict distribution
- count that fully passed the gate
- count held provisional, with reason
- highest-risk/most-contested 10 titles
- any methodology issue discovered during the batch
- proposed updates to the rubric, if any

## Naming side-track

Product renaming is intentionally separate from editorial classification. A naming shortlist may be researched in parallel, but it must not reduce the rigor or time allocated to the 50-film audit.

The desired naming direction is catchy, memorable and culturally resonant for nationalist Indian users without sounding bureaucratic, generic, or like a government portal.