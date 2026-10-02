# Culture Check — Corpus Scale & Freshness v1

## Objective

Culture Check must behave like a living Indian-cinema editorial product, not a sequence of hand-curated batches.

Two promises drive the system:

1. **Depth at rest** — a large, durable, multilingual corpus of source-audited Culture Check records.
2. **Freshness in motion** — new theatrical and OTT releases appear quickly, stale release data disappears automatically, and editorial work begins before the OTT premiere whenever evidence is available.

Public UI should not market internal corpus counts. The product should feel complete through useful coverage, not through a counter.

---

## 1. Corpus is a continuous factory, not a batch project

### First scale milestone

Target **1,000 durable reviewed Indian feature-film records** as the first meaningful corpus milestone. This is an operational target, not homepage copy.

Initial coverage priority:

- Hindi
- Tamil
- Telugu
- Malayalam
- Kannada
- Bengali
- Marathi
- Punjabi
- Gujarati
- Assamese
- Odia
- Bhojpuri

The queue should include both contemporary and historically important cinema, with extra weight for films users are likely to search/watch today.

### Candidate generation

Candidate inventory should be generated from multiple signals rather than a hand-written list:

- TMDb India discovery/popularity by language and decade
- current India watch-provider availability
- theatrical and OTT release calendars
- major box-office / cultural-impact films
- historical, biographical, political, religious and civilizational subjects
- true-story / adaptation titles
- titles with material public controversy or representation claims
- major franchise/catalogue titles that users expect to find

Duplicate titles are resolved by TMDb ID plus title/year/language.

### Processing priority

The corpus worker scores candidates roughly in this order:

1. currently streaming / newly released / arriving on OTT soon
2. high-reach Indian feature films
3. historical / biographical / military / political / religious / civilizational subjects
4. true-story and adaptation films
5. films with strong representation disputes
6. older catalogue coverage by language and decade

No language is allowed to remain structurally starved merely because Hindi/Telugu/Tamil titles have higher raw popularity.

---

## 2. Default product experience

The homepage defaults to **Sanghi Certified** discovery because that is Culture Check's signature consumer promise.

This does **not** mean unreviewed movies are assumed certified. It means the default consumer rail draws from the reviewed, publication-eligible certified corpus. `All movies` remains available as an explicit user choice.

Public corpus counts are not used as marketing copy. Internal dashboards may track total reviewed, auto-published, human-review, provisional, language coverage and freshness SLAs.

---

## 3. Review engine

Every durable record still passes the existing publication gate:

- adversarial discovery
- regional/cultural context
- social-radar discovery
- adaptation-delta when applicable
- Narrative Integrity
- Fact / Interpretation / Intent separation
- evidence sufficiency
- explanation quality
- self-falsification

### Three lanes

- **Auto-publish** — hard gate passes and no calibrated exception trigger fires.
- **Human exception review** — hard gate passes, but a high-risk identity/source/history/quantitative issue needs explicit approval.
- **Provisional hold** — evidence/process gate is incomplete.

The owner is an exception reviewer, not a title-by-title reviewer.

### Core invariant

**Bharatiya alignment and Narrative Integrity are independent axes.** A factual/adaptation caveat does not automatically revoke Sanghi Certified unless the factual manipulation materially changes the film's Bharatiya meaning.

---

## 4. Upcoming film policy

Culture Check should not wait for an OTT premiere if the film is already available theatrically.

### A. Theatrically released, OTT date upcoming

Run the **full editorial audit immediately**. If the publication gate passes, the OTT card can already show **🪷 Sanghi Certified** before streaming day.

### B. Unreleased film / OTT original not yet publicly viewable

Do not manufacture a final certification from a trailer, poster, cast or promotional interview.

Instead publish a clearly labeled **Pre-release check** based on verifiable public material:

- subject/history/source material
- official synopsis/trailer claims
- creator interviews
- adaptation source
- publicly verifiable identity/history claims

The pre-release check can surface likely Bharatiya relevance and Narrative Integrity watchpoints, but it is **not** the durable final verdict. As soon as the film is viewable theatrically/festival/OTT, it enters the expedited full audit.

### C. Already released but evidence incomplete

Show **Review pending** rather than forcing a verdict.

---

## 5. Release freshness system

### Consumer freshness SLA

- release discovery runs multiple times per day
- any visible release record must have been re-verified within **72 hours**
- the homepage rail covers roughly the previous **7 days** and next **30 days**
- `rumoured` release dates are not exposed in the normal consumer rail
- stale records are hidden automatically rather than lingering

### Source hierarchy (internal)

The UI does not need to expose newspaper/source plumbing on each card. Provenance remains attached to the record for audit/reconciliation.

- Tier A: official OTT/studio/distributor announcement
- Tier B: established Indian trade/entertainment/news reporting with attributed platform/date
- Tier C: aggregator/social/community discovery signal only

Tier C alone cannot become `announced` or `reported` public release data.

### Reconciliation

Each refresh run should:

1. discover newly announced Indian OTT/theatrical titles
2. normalize title/language/provider/date
3. resolve TMDb ID and poster/backdrop where available
4. compare against current feed
5. refresh `lastVerifiedAt`
6. correct changed dates/platforms instead of duplicating entries
7. retire/cancel changed records
8. hide stale or uncorroborated claims
9. enqueue eligible titles for pre-release/full editorial work

---

## 6. Automation contract

Two continuous workers operate independently:

### Corpus worker

- continually expands the durable corpus toward the 1,000-title milestone
- processes manageable chunks
- runs the full gate
- auto-publishes safe records
- holds uncertain records
- escalates only genuine exception cases
- maintains balanced language coverage

### Release freshness worker

- refreshes upcoming/new OTT data several times per day
- keeps provenance internal
- maintains artwork/TMDb identity
- removes stale records
- pushes theatrical releases into the full editorial fast lane
- creates pre-release checks for unreleased titles when useful

Both workers must preserve CI/build health and never lower evidence standards merely to increase counts.

---

## 7. Product success criteria

Culture Check is ready to share broadly when a user can:

- land on a rich Sanghi Certified default experience
- switch across major Indian languages without empty-looking shelves
- search important catalogue titles and usually find an editorial record
- see current/new/upcoming OTT movies with artwork and fresh release information
- see a full review before OTT day when a theatrical release made that possible
- see an honest pre-release check instead of a fabricated final verdict for unseen films
- challenge a verdict with evidence
- read a transparent methodology and revision trail

The product should communicate breadth through usefulness, not through a public title counter.
