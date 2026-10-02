# Full corpus v2 re-certification migration

Started: 2026-10-02
Branch: `full-recertification-migration-v2`
Base: `main` after PR #18 (`2f73177bb06710478ec9e3f5c21b8bd5fe8d63fb`)

## Completion condition

The migration is complete only when every *current* corpus profile that would otherwise resolve to a legacy v0.x/v1.x record has an evidence-derived v2 replacement or an explicit evidence hold. No legacy verdict is restored merely to preserve corpus size.

## Mandatory review for every title

1. Understand the full narrative: protagonist, antagonist, ending and decisive moral actions.
2. Re-score Dharma, Civilizational Continuity, Rashtra, Itihasa, Parampara, Local Roots, Raksha, Social Dharma, Sacred Regard and Contempt Risk from the actual film.
3. Run the symmetric community-contempt screen across caste, religious, regional and linguistic communities.
4. Run the sacred/religious-valence screen, including treatment of deities, scripture, temples, priests, rituals and devotional life.
5. Separate criticism of a person/practice/institution from generalized contempt for a community or tradition.
6. Audit source/adaptation, real-person identity and historical/quantitative claims where applicable.
7. Separate fact, interpretation and creator intent.
8. Research the strongest plausible counter-reading and preserve it in the dossier.
9. Use `human-review` or `provisional-hold` for unresolved material ambiguity rather than forcing a verdict.
10. Keep Narrative Integrity distinct from the cultural verdict unless the factual/adaptation issue materially changes the cultural meaning.

## Migration order

1. Legacy Certified / Mixed / Not Certified titles with religion, caste/community, sacred, military/Kashmir, historical/biographical or ideological content.
2. Remaining directional legacy verdicts.
3. Legacy Neutral records.
4. Final resolver audit: zero current legacy records eligible to resolve as public verdicts; every public verdict must be evidence-derived v2.
5. CI, production build, PR review, merge and post-merge verification.

## Editorial rule

Owner feedback is a calibration signal, never the QA mechanism. A verdict changes only when the evidence-derived re-audit supports the change. Previously published verdicts remain in revision history when superseded.
