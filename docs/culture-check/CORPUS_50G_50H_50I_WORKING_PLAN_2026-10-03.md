# Corpus 50G / 50H / 50I — Working Certification Plan

Date: 2026-10-03
Branch: `certification-next-150-hi-ta-te-20261003`
Base: `19af359a80fd5603078426690b0300c8948c596a`
Status: **research in progress / publication hold**

## Scope

Build the next three language-isolated Culture Check cohorts:

- **50G — Hindi:** exactly 50 primary-Hindi films
- **50H — Tamil:** exactly 50 primary-Tamil films
- **50I — Telugu:** exactly 50 primary-Telugu films

The initial queue uses 2025 releases because 50E and 50F already cover fresh 2026 Hindi and Tamil tranches. 2025 also gives a more mature review/evidence surface. The release indexes are discovery/scoping aids only; they are not sufficient evidence for a verdict by themselves.

Machine-readable research queue: `research/certification-next-150-2026-10-03.json`
Typed audit queue: `src/data/certificationNext150Queue.ts`
Full-corpus preflight: `src/services/next150QueueAudit.ts`
Evidence pilot: `research/certification-next-150-evidence-pilot.md`

## Binding rules

1. Apply the existing `bharatiya-hindu-civilizational` editorial lens.
2. No record becomes resolver-visible until it has an evidence-derived v2 dossier, all 11 probes, Fact / Interpretation / Intent separation, red-team challenge and passing publication/research gates.
3. Primary-language only. Dubbed-only records and ambiguous simultaneously-shot multilingual records are excluded unless the primary record can be established cleanly.
4. Final cohorts must have **zero title/year overlap** with the resolved corpus that predates this branch.
5. Apply the Pakistan/terror perspective rule currently under review in PR #26 as a **certification blocker during research**. This branch does not merge or duplicate PR #26.
6. Historical, community, sacred-religious and quantitative/factual claims must be surfaced as explicit risk probes when material.
7. A culturally Indian setting, Hindu name, temple visual or regional texture is not by itself enough for certification. Directional film-level values need evidence.
8. Character immorality is not automatically film-level rejection; narrative endorsement, civilizational direction and material counter-signals are evaluated separately.

## Work stages

### Stage A — Queue hardening

- exact 50/50/50 count
- normalized duplicate check inside and across the three queues
- release/year verification
- primary-language verification
- full-corpus title/year dedupe; replace collisions rather than override earlier records

### Stage B — Evidence and verdict work

For every surviving title:

- establish film understanding from reliable title-specific sources
- identify source/adaptation/true-story basis
- research history, caste, community identity, Hindu sacred valence and regional context where relevant
- separate Fact / Interpretation / Intent
- record strongest counter-reading and evidence
- assign `certified`, `mixed`, `neutral`, or `not-certified` only after the evidence is sufficient

### Stage C — Integration

- implement 50G, 50H and 50I as separate language cohorts
- add full-corpus overlap and language audits for each cohort
- wire resolver precedence only after all three cohorts pass their gates
- run full recertification regression, 50D, 50E, 50F, new cohort validations, lint and production build
- leave PR unmerged for owner review

## Current checkpoint

Queue hardening is complete for the current candidate set. The first full-corpus preflight found 14 title/year collisions with prior corpus records; a second pass found one additional collision (`Kesari Veer`, 2025). All 15 were replaced rather than overriding earlier certifications.

The current branch-scoped preflight is **PASS** and verifies:

- 50 Hindi candidates
- 50 Tamil candidates
- 50 Telugu candidates
- 150 unique normalized title/year candidate keys
- zero title/year overlap with the resolved pre-branch corpus
- research manifest and typed audit queue contain the same 150 title/year keys
- 2025 year/language cohort consistency
- queued/pending verdict state
- publication hold remains enabled

Title-specific evidence work has started with a nine-film pilot: three Hindi, three Tamil and three Telugu records. These pilot labels are explicitly provisional and remain outside the live resolver.

This is deliberately **not** a certification-complete or merge-ready checkpoint. Primary-language verification plus full evidence-derived v2 dossiers and final editorial/research gates remain mandatory for the full 150 before resolver integration.
