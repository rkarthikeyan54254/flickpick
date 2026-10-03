# Pakistan / Terror Perspective Hard Gate v2.2

Date: 2026-10-03  
Status: binding clarification for Culture Check certification

This clarification is additive to `BHARATIYA_CERTIFICATION_CALIBRATION_V2.md` and `HINDU_CENTRIC_LENS_CLARIFICATION_V2_1.md`. Where an older record treated cross-border humanism, Pakistani-adversary sympathy, militant rehabilitation or moral equivalence as a positive certification signal, this document supersedes that treatment.

## Rule

A film cannot receive **Sanghi Certified** when its completed narrative materially uses any of the following as an affirmative moral proposition:

- Pakistani state, military or adversarial characters as a parallel moral viewpoint that creates India-Pakistan moral equivalence;
- reconciliation or `both sides` humanism that displaces the Bharatiya/Indian victim, defender or national-security viewpoint;
- sympathetic rehabilitation of terrorists, militants or terror-linked actors;
- cross-border Pakistani-perspective empathy that is central to the film's moral resolution;
- a shared-humanity frame that makes the adversarial India-Pakistan or terror context morally interchangeable.

When this gate fails, positive scores elsewhere do not restore certification. Strong Rashtra, Raksha, military-service, Partition-memory, Local Roots, Dharma or Social Dharma signals may remain accurately recorded, but the public verdict must be **Reviewed · Not Certified**.

## Scope and non-triggers

The hard gate does **not** fail merely because a film:

- depicts a Pakistani civilian, soldier or Muslim character as a human being;
- follows the laws of war, treats prisoners humanely or refuses gratuitous cruelty;
- distinguishes terrorists from ordinary Muslims or Kashmiri civilians;
- depicts pre-Partition friendship before the relevant India-Pakistan adversarial relationship exists;
- contains an incidental Pakistani character without making that viewpoint part of the film's moral proposition;
- avoids generalized hatred toward Muslims or Pakistanis.

The question is not whether every adversary is one-dimensional. The question is whether the film materially asks the audience to adopt cross-border moral equivalence, reconciliation, rehabilitation or perpetrator/adversary sympathy as a central affirmative thesis.

## Machine enforcement

`SanghiProfile.pakistanTerrorPerspectiveGate` has three values:

- `not-applicable`
- `clear`
- `fail`

`fail + certified` is an invalid publication combination. `editorialGate.ts` converts that combination into a hard publication failure (`pakistan-terror-perspective-hard-stop`). A failed gate may publish only with a non-certified reviewed verdict.

## 2026-10-03 audit revisions

The binding audit changed nine live records from Sanghi Certified to Reviewed · Not Certified:

1. `Ikkis` (2026)
2. `Border` (1997)
3. `Sky Force` (2025)
4. `Sita Ramam` (2022)
5. `Border 2` (2026)
6. `Bihu Attack` (2026)
7. `Main Vaapas Aaunga` (2026)
8. `Batwara 1947` (2026)
9. `Chal Mera Putt` (2019)

The old title records remain in revision history. `pakistanTerrorPerspectiveRevisions.ts` has highest title/year resolver precedence so the audit is reversible and attributable rather than silently rewriting historical research.

## Regression controls reviewed without verdict change

The audit also reviewed, among others, `Dhurandhar`, `Dhurandhar: The Revenge`, `The Diplomat`, `Ground Zero`, `Sarfarosh`, `Uri: The Surgical Strike`, `Shershaah`, `Lakshya`, `Sam Bahadur`, `Major`, `Amaran`, `Article 370`, `The Kashmir Files`, `The Kerala Story`, `Alpha`, `Bharat Desh Hai Mera`, `Bharat Bhhagya Viddhaata`, `Bhaag Milkha Bhaag` and `Chak De! India`. Those records did not meet the hard-stop threshold in this audit.

## Publication requirement going forward

For Pakistan-, cross-border-terror-, insurgency- or India-Pakistan-war-facing records, reviewers must explicitly test this gate before certification. A patriotic subject, Indian uniform, national-security plot or high Rashtra/Raksha score is not sufficient evidence by itself. The completed narrative's treatment of the adversarial perspective must be audited independently.
