# OTT Discovery Pipeline v1

**Goal:** Make FlickPick useful before and at the moment a movie lands on Indian OTT services, not weeks later.

## Product outcome

The home experience should eventually have four useful states:

1. **Streaming now** — titles currently available on selected OTT services.
2. **New this week** — titles that landed in the last 7 days.
3. **Coming soon** — announced OTT releases with an attributable date/platform.
4. **Bharatiya-reviewed** — titles whose editorial review has passed the Sanghi Certified publication gate.

The ideal user experience is: see what is coming to OTT, understand whether it has been reviewed, and arrive on release day with the Bharatiya editorial context already prepared whenever the evidence allows it.

## Provider coverage

Do not hard-code only Netflix / Prime Video / ZEE5. Provider coverage should be India-first and configurable.

### Core national services
- Netflix
- Prime Video
- JioHotstar
- ZEE5
- SonyLIV

### Regional / language-heavy services
- Sun NXT
- aha
- ETV Win
- ManoramaMAX
- hoichoi
- Chaupal

### Secondary services worth retaining where metadata exists
- Lionsgate Play
- Apple TV+
- MUBI
- ShemarooMe
- MX Player / Amazon MX Player where movie availability is relevant

The UI should not depend on fixed provider IDs. Fetch/maintain a provider registry for India and map provider aliases/renames over time.

## Current-availability source

Use TMDb watch-provider metadata for current availability, with India (`IN`) as the watch region. TMDb states that its watch-provider data is powered by JustWatch and requires JustWatch attribution in the product.

Current-availability data answers **where the movie can be watched now**. It is not sufficient by itself for future OTT premiere dates.

## Upcoming OTT release intake

Upcoming OTT dates require a separate ingestion pipeline.

### Source priority

**Tier A — authoritative**
- OTT platform official announcement / coming-soon page
- studio / distributor announcement
- official trailer/poster/press release that names platform and date

**Tier B — strong secondary confirmation**
- established Indian news/entertainment publications that attribute the date/platform
- trade reporting quoting platform/studio representatives

**Tier C — discovery radar only**
- OTT calendar aggregators
- X / Instagram / YouTube posts
- Reddit
- fan pages

Tier C can create a candidate but cannot create an `announced` release date without corroboration.

## Release record

Each upcoming entry should store:

```ts
interface OttReleaseRecord {
  tmdbId?: number;
  title: string;
  year?: number;
  language?: string;
  provider: string;
  releaseDate?: string;
  status: 'rumoured' | 'reported' | 'announced' | 'live' | 'cancelled-or-changed';
  confidence: 'low' | 'medium' | 'high';
  sourceUrl: string;
  sourceName: string;
  sourceTier: 'A' | 'B' | 'C';
  firstSeenAt: string;
  lastVerifiedAt: string;
  notes?: string;
}
```

## Confidence rules

- **High / announced:** official platform/studio source or two independent strong sources with one clearly attributing the platform/date.
- **Medium / reported:** one strong secondary source; show as `Reported`, not `Confirmed`.
- **Low / rumoured:** social/aggregator-only; keep out of default consumer view or visibly label as rumour.
- If dates conflict, keep all source observations internally, expose the most authoritative/latest one, and mark the record changed.

## Editorial fast lane

Upcoming OTT discovery should feed the Sanghi Certified editorial queue.

### Case 1: Already released theatrically, OTT date announced

This is the highest-value case. The film can often be fully audited before OTT day using:
- film/review availability from theatrical release
- creator interviews
- source/adaptation material
- regional criticism
- social radar for scene-level claims

Target: complete a gated Bharatiya review **before OTT release day**.

### Case 2: OTT original, not released anywhere yet

Do not certify from trailers, marketing copy, political reputation or casting.

Before release show:
- `Coming soon`
- provider/date
- `Editorial review pending`

After release, trigger the review immediately and only publish a durable verdict after the editorial gate passes.

### Case 3: Film released, but evidence is insufficient

Show current availability plus `Review in progress / Provisional`. Do not force a verdict.

## Daily ingestion rhythm

A lightweight ingestion job should run at least twice daily:

1. Scan official/platform and reputable OTT-release sources for India.
2. Normalize title, language, provider and date.
3. Match/create TMDb ID.
4. Reconcile conflicting dates.
5. Verify whether the title is already live through current watch-provider metadata.
6. Add high-value Indian-language movies to the editorial queue.
7. Escalate any title releasing within 7 days that has not yet been reviewed.

## Prioritization score

Prioritize editorial work using:

- OTT release within 7 days
- Indian-language feature film
- high expected audience/reach
- historical/biographical/political/religious/civilizational subject
- strong social controversy radar
- adaptation / true-story status
- currently available on more than one major Indian OTT service

Do **not** prioritize solely by controversy or engagement volume.

## UI direction

Provider selection should become a real OTT shelf rather than a technical filter.

Suggested top-level controls:

- **Now streaming**
- **New this week**
- **Coming soon**
- **Bharatiya reviewed**

Each card can show:

`JioHotstar · Oct 9`  
`Coming soon`  
`🪷 Review ready` or `Editorial review pending`

For live titles:

`Netflix · Streaming now`  
`🪷 Sanghi Certified`  
`Why you're seeing this…`

## Attribution / compliance

TMDb's watch-provider documentation states that provider availability is supplied through its partnership with JustWatch and requires JustWatch attribution. Add the required attribution anywhere this provider data is surfaced.

## Near-term implementation sequence

1. Replace hard-coded provider assumptions with an India provider registry.
2. Add JioHotstar, SonyLIV, Sun NXT, aha, ETV Win, ManoramaMAX and hoichoi to the supported-provider model where current provider metadata is available.
3. Add `OttReleaseRecord` as a static/versioned data layer first.
4. Seed it from authoritative/reputable sources for the next 30 days.
5. Add `Coming soon` and `New this week` surfaces.
6. Feed announced titles into the editorial fast lane.
7. Later automate the ingestion/reconciliation job while preserving source URLs and confidence.

## Product principle

The value is not just telling users where a film streams.

The differentiated experience is:

> **What is arriving on Indian OTT, when can I watch it, and what should I know about its Bharatiya representation before I spend my time on it?**
