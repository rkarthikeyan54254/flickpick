# Culture Check — Next Hardened 50 + Latest Certification Lane — 2026-10-02

This checkpoint adds the second exact 50-film evidence-derived hardened tranche and establishes a parallel current-release certification lane. The bulk tranche remains distinct from release-day/current-release reviews so freshness work does not wait for the next corpus batch.

## Next hardened 50 — verdict summary

- Sanghi Certified: 23
- Mixed / Contested: 17
- Reviewed · Neutral: 10
- Total: 50

## Language balance

- Hindi: 6
- Tamil: 6
- Telugu: 6
- Malayalam: 6
- Kannada: 6
- Bengali: 4
- Marathi: 4
- Punjabi: 3
- Gujarati: 3
- Assamese: 2
- Odia: 2
- Bhojpuri: 2

## Film list

| # | Film | Year | Language | Verdict |
|---:|---|---:|---|---|
| 1 | OMG 2 | 2023 | Hindi | Sanghi Certified |
| 2 | Bajirao Mastani | 2015 | Hindi | Mixed / Contested |
| 3 | Jodhaa Akbar | 2008 | Hindi | Mixed / Contested |
| 4 | Sarfarosh | 1999 | Hindi | Sanghi Certified |
| 5 | Mission Mangal | 2019 | Hindi | Sanghi Certified |
| 6 | Paan Singh Tomar | 2012 | Hindi | Mixed / Contested |
| 7 | Anbe Sivam | 2003 | Tamil | Mixed / Contested |
| 8 | Virumaandi | 2004 | Tamil | Mixed / Contested |
| 9 | Vada Chennai | 2018 | Tamil | Mixed / Contested |
| 10 | Kaaka Muttai | 2015 | Tamil | Sanghi Certified |
| 11 | Super Deluxe | 2019 | Tamil | Mixed / Contested |
| 12 | Peranbu | 2019 | Tamil | Sanghi Certified |
| 13 | Srimanthudu | 2015 | Telugu | Sanghi Certified |
| 14 | Athadu | 2005 | Telugu | Reviewed · Neutral |
| 15 | C/o Kancharapalem | 2018 | Telugu | Sanghi Certified |
| 16 | Mahanati | 2018 | Telugu | Sanghi Certified |
| 17 | Bommarillu | 2006 | Telugu | Sanghi Certified |
| 18 | Manam | 2014 | Telugu | Sanghi Certified |
| 19 | Guru | 1997 | Malayalam | Mixed / Contested |
| 20 | Kammattipaadam | 2016 | Malayalam | Mixed / Contested |
| 21 | Android Kunjappan Version 5.25 | 2019 | Malayalam | Sanghi Certified |
| 22 | #Home | 2021 | Malayalam | Sanghi Certified |
| 23 | Malik | 2021 | Malayalam | Mixed / Contested |
| 24 | Sudani from Nigeria | 2018 | Malayalam | Sanghi Certified |
| 25 | U Turn | 2016 | Kannada | Reviewed · Neutral |
| 26 | Dia | 2020 | Kannada | Reviewed · Neutral |
| 27 | Godhi Banna Sadharana Mykattu | 2016 | Kannada | Sanghi Certified |
| 28 | Gantumoote | 2019 | Kannada | Reviewed · Neutral |
| 29 | Bell Bottom | 2019 | Kannada | Reviewed · Neutral |
| 30 | Rama Rama Re | 2016 | Kannada | Sanghi Certified |
| 31 | Jalsaghar | 1958 | Bengali | Mixed / Contested |
| 32 | Devi | 1960 | Bengali | Mixed / Contested |
| 33 | Hirak Rajar Deshe | 1980 | Bengali | Sanghi Certified |
| 34 | Bhooter Bhabishyat | 2012 | Bengali | Sanghi Certified |
| 35 | Natrang | 2010 | Marathi | Mixed / Contested |
| 36 | Fandry | 2014 | Marathi | Mixed / Contested |
| 37 | The Disciple | 2020 | Marathi | Sanghi Certified |
| 38 | Deool | 2011 | Marathi | Mixed / Contested |
| 39 | Qissa | 2013 | Punjabi | Mixed / Contested |
| 40 | Sajjan Singh Rangroot | 2018 | Punjabi | Sanghi Certified |
| 41 | Chauthi Koot | 2015 | Punjabi | Mixed / Contested |
| 42 | Karsandas Pay & Use | 2017 | Gujarati | Sanghi Certified |
| 43 | Chhello Show | 2021 | Gujarati | Sanghi Certified |
| 44 | Kevi Rite Jaish | 2012 | Gujarati | Reviewed · Neutral |
| 45 | Local Kung Fu | 2013 | Assamese | Reviewed · Neutral |
| 46 | Mission China | 2017 | Assamese | Reviewed · Neutral |
| 47 | Kalira Atita | 2021 | Odia | Sanghi Certified |
| 48 | Hello Arsi | 2018 | Odia | Reviewed · Neutral |
| 49 | Nirahua Hindustani | 2014 | Bhojpuri | Reviewed · Neutral |
| 50 | Bidesiya | 1963 | Bhojpuri | Sanghi Certified |

## Current-release certification lane

The first current-release pass publishes eight evidence-backed verdicts independently of the 50-film tranche:

| Film | Year | Language | Verdict |
|---|---:|---|---|
| Sardar 2 | 2026 | Tamil | Sanghi Certified |
| Drishyam 3 | 2026 | Hindi | Mixed / Contested |
| Pooja Meri Jaan | 2026 | Hindi | Reviewed · Neutral |
| Don't Trouble the Trouble | 2026 | Telugu | Reviewed · Neutral |
| Bethlehem Kudumba Unit | 2026 | Malayalam | Reviewed · Neutral |
| Yezhu Kadal Yezhu Malai | 2026 | Tamil | Reviewed · Neutral |
| Prem Keetanu | 2026 | Hindi | Reviewed · Neutral |
| Ohh My Dog | 2026 | Hindi | Sanghi Certified |

Unreleased titles remain pre-release/pending and are not given final verdicts from trailers alone.

## Product/navigation changes in the same branch

- `Pick a film` now scrolls directly to the selected movie card, bypassing the latest-release rail after every shuffle.
- The desktop header now exposes `Discover`, `Latest`, and `Methodology` navigation.
- The latest-release rail has explicit desktop previous/next controls while retaining touch/trackpad horizontal scrolling.
- Current-release cards resolve and display the actual published Culture Check verdict when one exists instead of continuing to show `Review pending`.
- Release-card metadata and verdict labels were increased for scanability.

## Integrity rules retained

- Each tranche record uses the evidence-derived v2 ResearchDossier path.
- The batch aggregator throws unless exactly 50 records are present.
- Duplicate normalized titles inside the new tranche are rejected.
- Titles already represented in the earlier corpus are rejected by the new-tranche overlap guard.
- Historical, biographical and adaptation caveats remain separate from the Bharatiya verdict rather than being silently erased.
