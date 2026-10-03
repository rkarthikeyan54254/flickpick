# Culture Check — Corpus 50F: Tamil Only

Date: 2026-10-03
Branch: `hardened-corpus-50f-tamil-only`
Scope: 50 new Tamil-language films from the 2026 release slate.

## Editorial contract

Corpus 50F uses `BHARATIYA_CERTIFICATION_CALIBRATION_V2.md` and `HINDU_CENTRIC_LENS_CLARIFICATION_V2_1.md` as binding methodology. Every record is evidence-derived v2, contains the required research probes, title-specific Fact / Interpretation / Intent, and a completed red-team challenge.

The tranche counts only Tamil-primary film records. Dubbed versions of films whose primary-language record belongs to another industry are not counted as new Tamil titles. Every title/year is checked against the complete pre-50F corpus before publication.

## Verdict distribution

- Sanghi Certified: 24
- Mixed / Contested: 14
- Reviewed · Neutral: 12
- Not Certified: 0
- Total: 50

## 50-title verdict list

1. Anbil Avan (2026) — Mixed / Contested
2. Vaa Vaathiyaar (2026) — Sanghi Certified
3. Baththa (2026) — Sanghi Certified
4. Dorothy (2026) — Sanghi Certified
5. The Grand Master (2026) — Sanghi Certified
6. Meesaya Murukku 2 (2026) — Sanghi Certified
7. Paris Cafe (2026) — Reviewed · Neutral
8. Sandakari (2026) — Mixed / Contested
9. The Dark Heaven (2026) — Reviewed · Neutral
10. Enna Vilai (2026) — Sanghi Certified
11. Wild Tamil Nadu (2026) — Sanghi Certified
12. Yen Ennai Edho Seidhai (2026) — Mixed / Contested
13. Once More (2026) — Reviewed · Neutral
14. Chola Kollai Bommai (2026) — Sanghi Certified
15. Hi (2026) — Reviewed · Neutral
16. Ram And Leela (2026) — Reviewed · Neutral
17. Modha Rathiri (2026) — Mixed / Contested
18. Magudam (2026) — Mixed / Contested
19. Photographer (2026) — Sanghi Certified
20. G.D.N. (2026) — Sanghi Certified
21. Gilli Mappilai (2026) — Reviewed · Neutral
22. Arulvaan (2026) — Sanghi Certified
23. Anbe Diana (2026) — Mixed / Contested
24. Idhayam Murali (2026) — Reviewed · Neutral
25. Lakshmikanthan Kolai Vazhakku (2026) — Mixed / Contested
26. Gatta Kusthi 2 (2026) — Sanghi Certified
27. Dark (2026) — Reviewed · Neutral
28. Promise (2026) — Mixed / Contested
29. Heartin (2026) — Reviewed · Neutral
30. Andharan: The Hunter (2026) — Mixed / Contested
31. Angikaaram (2026) — Sanghi Certified
32. Charukesi (2026) — Sanghi Certified
33. Aatti (2026) — Reviewed · Neutral
34. Double Occupancy (2026) — Reviewed · Neutral
35. Habeebi (2026) — Sanghi Certified
36. Sannidhanam P.O (2026) — Sanghi Certified
37. Parimala And Co (2026) — Sanghi Certified
38. Blast (2026) — Sanghi Certified
39. Hot Spot 2 Much (2026) — Mixed / Contested
40. Anali (2026) — Sanghi Certified
41. Kaakaa (2026) — Reviewed · Neutral
42. The Bed (2026) — Mixed / Contested
43. Anantha (2026) — Sanghi Certified
44. Thalaivar Thambi Thalaimaiyil (2026) — Sanghi Certified
45. Dear Radhi (2026) — Mixed / Contested
46. Justice for Jeni (2026) — Sanghi Certified
47. Jockey (2026) — Sanghi Certified
48. Maayabimbum (2026) — Mixed / Contested
49. Vangala Viriguda (2026) — Mixed / Contested
50. Red Label (2026) — Sanghi Certified

## Completion gate

The dedicated `validate:50f` audit enforces:

- exactly 50 profiles
- exactly 50 unique title/year records
- Tamil language only
- zero overlaps with the pre-50F corpus
- zero overlaps with previous evidence-derived v2 records
- zero publication-gate failures
- zero research-gate failures
- correct Bharatiya/Hindu-civilizational editorial lens
- complete 11-probe v2 research dossiers

CI retains full re-certification, Corpus 50D regression, Corpus 50E Hindi-only regression, lint, and production build checks so the Tamil tranche cannot regress previously hardened work.
