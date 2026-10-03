# Culture Check — Corpus 50E: Hindi Only

Date: 2026-10-03
Branch: `hardened-corpus-50e-hindi-only`
Scope: 50 new Hindi-language films, with emphasis on released 2026 titles.

## Editorial contract

Corpus 50E uses `BHARATIYA_CERTIFICATION_CALIBRATION_V2.md` and `HINDU_CENTRIC_LENS_CLARIFICATION_V2_1.md` as binding methodology. Every record is evidence-derived v2, includes the required research probes, title-specific Fact / Interpretation / Intent, and a completed red-team challenge.

The tranche excludes records already represented by the current corpus, including Hindi 2026 profiles already present in 50D or the latest-certification lane. Hindi-dubbed versions of films whose primary-language record belongs to another industry are not counted as new Hindi films.

## Verdict distribution

- Sanghi Certified: 22
- Mixed / Contested: 10
- Reviewed · Neutral: 18
- Not Certified: 0
- Total: 50

## 50-title verdict list

1. Border 2 (2026) — Sanghi Certified
2. Rahu Ketu (2026) — Reviewed · Neutral
3. Happy Patel: Khatarnak Jasoos (2026) — Reviewed · Neutral
4. Safia/Safdar (2026) — Reviewed · Neutral
5. Bihu Attack (2026) — Sanghi Certified
6. Mayasabha - The Hall of Illusion (2026) — Reviewed · Neutral
7. Mardaani 3 (2026) — Sanghi Certified
8. Vadh 2 (2026) — Mixed / Contested
9. Tu Yaa Main (2026) — Reviewed · Neutral
10. O'Romeo (2026) — Mixed / Contested
11. Shatak: Sangh Ke 100 Varsh (2026) — Sanghi Certified
12. Assi (2026) — Sanghi Certified
13. Do Deewane Seher Mein (2026) — Reviewed · Neutral
14. Bharat Desh Hai Mera (2026) — Sanghi Certified
15. The Kerala Story 2: Goes Beyond (2026) — Mixed / Contested
16. Accused (2026) — Reviewed · Neutral
17. Subedaar (2026) — Sanghi Certified
18. Charak: Fair of Faith (2026) — Mixed / Contested
19. Jab Khuli Kitaab (2026) — Reviewed · Neutral
20. Bhooth Bangla (2026) — Reviewed · Neutral
21. Ginny Wedss Sunny 2 (2026) — Reviewed · Neutral
22. Ek Din (2026) — Reviewed · Neutral
23. Krishnavataram Part 1: The Heart (2026) — Sanghi Certified
24. Hanuman Ansh (2026) — Sanghi Certified
25. Daadi Ki Shaadi (2026) — Sanghi Certified
26. Pati Patni Aur Woh Do (2026) — Reviewed · Neutral
27. Kartavya (2026) — Sanghi Certified
28. Krishna aur Chitthi (2026) — Sanghi Certified
29. Shree Baba Neeb Karori Maharaj (2026) — Sanghi Certified
30. Maa Behen (2026) — Mixed / Contested
31. Bandar (2026) — Mixed / Contested
32. Main Vaapas Aaunga (2026) — Sanghi Certified
33. Bharat Bhhagya Viddhaata (2026) — Sanghi Certified
34. The Narmada Story (2026) — Sanghi Certified
35. Cocktail 2 (2026) — Reviewed · Neutral
36. Welcome to the Jungle (2026) — Reviewed · Neutral
37. Alpha (2026) — Sanghi Certified
38. Satluj (2026) — Sanghi Certified
39. Dhamaal 4 (2026) — Reviewed · Neutral
40. Ikka (2026) — Sanghi Certified
41. The India Story (2026) — Mixed / Contested
42. Awarapan 2 (2026) — Mixed / Contested
43. Batwara 1947 (2026) — Sanghi Certified
44. Babita Singh Reporting (2026) — Sanghi Certified
45. Gandhari (2026) — Mixed / Contested
46. Mirzapur: The Movie (2026) — Reviewed · Neutral
47. Haiwaan (2026) — Reviewed · Neutral
48. Vibe (2026) — Reviewed · Neutral
49. Daayra (2026) — Mixed / Contested
50. The Vvaan: Force of the Forrest (2026) — Sanghi Certified

## Completion gate

The dedicated `validate:50e` audit enforces:

- exactly 50 profiles
- exactly 50 unique title/year records
- Hindi language only
- zero overlaps with the pre-50E corpus
- zero overlaps with previous evidence-derived v2 records
- zero publication-gate failures
- zero research-gate failures
- correct Bharatiya/Hindu-civilizational editorial lens
- complete 11-probe v2 research dossiers

CI also retains the full re-certification audit, the 50D regression audit, lint, and the production build so 50E cannot regress the previously completed corpus.
