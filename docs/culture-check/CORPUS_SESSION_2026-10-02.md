# Culture Check corpus curation session — 2026-10-02

This session expands the durable editorial corpus beyond the initial Hindi/Tamil/Telugu/Malayalam/Kannada-heavy set while preserving the publication gate. It is deliberately not numbered as a consumer-facing batch.

## Scope

The focused session prioritised high-value historical, civilizational, regional-tradition, service and social-dharma films, with deliberate expansion into Marathi, Bengali, Punjabi, Gujarati, Odia, Assamese and Bhojpuri cinema in addition to the five languages already represented heavily.

## Rules applied

- Bharatiya alignment and Narrative Integrity remain independent axes.
- Historical/biographical films receive adaptation-delta review rather than automatic certification.
- Creative adaptation of an explicitly fictional source is not treated as a factual-integrity failure by itself.
- Social criticism, caste criticism or gender criticism is not treated as anti-Bharatiya by default.
- Local tradition can be a positive signal when the film inhabits it rather than merely using it as decoration.
- Records with unresolved high-risk historicity/source-fidelity concerns are routed to human review rather than silently auto-published.
- Focused source-audit records take precedence over concurrent-worker records for the same normalized title, even when databases disagree on release year.

## Focused source-audit records

### Tranche 1 — 18 titles

Tanhaji: The Unsung Warrior; Kesari; Kadaisi Vivasayi; Ponniyin Selvan: Part II; Sye Raa Narasimha Reddy; Gautamiputra Satakarni; Marakkar: Arabikadalinte Simham; Pathonpatham Noottandu; Kurukshetra; Krantiveera Sangolli Rayanna; Dollu; Pawankhind; Subhedar; Bagha Jatin; Mastaney; Kasoombo; DAMaN; Village Rockstars.

### Tranche 2 — 12 titles

Farzand; Fatteshikast; Mallesham; Harishchandrachi Factory; Kothanodi; Kaalapani; Bharathi; Manikarnika: The Queen of Jhansi; The Vaccine War; Nayika Devi: The Warrior Queen; Rangasthalam; Ganga Maiyya Tohe Piyari Chadhaibo.

The two focused files therefore contain 30 researched records. Their publication router outcome is 22 auto-publish and 8 human-review, with no provisional holds. The human-review set is Tanhaji, Sye Raa Narasimha Reddy, Gautamiputra Satakarni, Marakkar, Kasoombo, Manikarnika, The Vaccine War and Nayika Devi, all because the evidence/process gate passes but medium confidence and/or a high-risk historicity/source-fidelity finding requires an exception decision.

## Concurrent continuous-worker contribution

While the focused session was in progress, the continuous corpus worker also committed 20 source-audited profiles to the same branch: Swades; Lakshya; Chak De! India; Kadaisi Vivasayi; Mookuthi Amman; Annamayya; Karthikeya; Sri Ramadasu; Nandanam; Guruvayoor Ambalanadayil; Sarkari Hi. Pra. Shaale, Kasaragodu; Sri Manjunatha; Bela Seshe; Katyar Kaljat Ghusali; Harishchandrachi Factory; Angrej; Reva; Village Rockstars; Daman; Ganga Maiyya Tohe Piyari Chadhaibo.

Five of those overlap the focused audit by normalized title: Kadaisi Vivasayi, Harishchandrachi Factory, Village Rockstars, Daman/DAMaN and Ganga Maiyya Tohe Piyari Chadhaibo. The resolver now suppresses the concurrent variant for any title owned by a focused audit, so release-year discrepancies cannot create duplicate cards.

This leaves **45 unique new titles** represented by this branch: 30 from the focused source-audit work plus 15 non-overlapping continuous-worker records. The number is an internal curation metric only; the consumer UI does not market corpus totals.

Machine-readable records live in `src/data/corpusExpansion01.ts`, `src/data/corpusExpansion02.ts` and `src/data/continuousCorpusProfiles.ts`, and are wired into the current-profile resolver through `src/services/sanghi.ts`.
