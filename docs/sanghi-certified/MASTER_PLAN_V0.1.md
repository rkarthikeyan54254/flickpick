# Sanghi Certified — Master Plan v0.1

**Project:** FlickPick  
**Status:** Pilot methodology  
**Purpose:** Define an India-grounded, evidence-backed editorial certification layer for Indian cinema.

## 1. Product thesis

FlickPick already solves the "endless scroll" problem by narrowing a streaming pool and shuffling to a single recommendation. Sanghi Certified adds a second question:

> **Before I invest my time, how does this film treat India, Indic civilization, dharma, inherited traditions, history, national identity and culturally sensitive representation?**

This is **not a movie-quality rating** and is **not a generic Left/Right classifier**. It is an explicitly Bharatiya/India-grounded editorial lens whose rules and evidence are published so users can disagree with individual verdicts.

The product should remain **FlickPick**. **Sanghi Certified** is a badge/mode inside FlickPick, not a replacement brand.

## 2. What the certification is — and is not

### It is

- A worldview/discovery signal.
- India-first and region-aware.
- Evidence-backed and explainable.
- Capable of certifying films for different reasons: Dharma, Rashtra, Itihasa, Parampara, Raksha, etc.
- Separate from artistic quality, box office, popularity and star rating.
- Explicit about uncertainty and disputed interpretations.

### It is not

- A BJP-support score.
- A Western conservative/progressive score translated to Indian films.
- A rule that caste criticism, social reform, anti-tyranny themes or female agency are automatically "anti-Sanghi".
- A rule that a villain's caste/religion proves prejudice.
- A rule that Hindu characters being good or non-Hindu characters being bad determines certification.
- A claim of political neutrality.

## 3. Core editorial principle

The central question is:

> **Is the film's underlying treatment of India, Indic civilization, dharma, history, sacred tradition, inherited culture or national identity substantially compatible with a Bharatiya civilizational worldview — without deriving its dramatic force primarily from caricaturing or contemptuously flattening that worldview?**

A film can qualify through different routes. A devotional/mythological film and a military film do not need to resemble each other ideologically.

## 4. India-native evaluation dimensions

Each dimension is scored **0–5** where applicable. `N/A` is allowed. These are diagnostic dimensions, not a simplistic average.

### 4.1 Dharma / Sacred Regard

Does the narrative allow Indic sacred ideas, deities, rituals and metaphysical claims to have dignity and genuine meaning? Criticism is allowed; contempt or lazy superstition-coding is different.

### 4.2 Civilizational Continuity

Does the film understand contemporary India as connected to older civilizational memory, or does it treat inherited civilization mainly as something to be escaped, mocked or deconstructed?

### 4.3 Rashtra / National Belonging

How are India, sovereignty, national cohesion, service and belonging framed?

### 4.4 Itihasa / Historical Memory

How does the film treat epics, history, colonialism, invasions, historical memory and indigenous institutions? For factual/biographical works, historical claims must be separated from ideological compatibility.

### 4.5 Parampara / Inherited Tradition

How are family, temple, community obligations, festivals, gurus, inherited practice and intergenerational continuity treated?

### 4.6 Local Roots / Regional Cultural Literacy

Does the film understand its own Kannada/Tamil/Telugu/Malayalam/Hindi/etc. world on its own terms? Local traditions must not be flattened into imported culture-war categories.

### 4.7 Raksha / Service and Security

Where applicable: how are the armed forces, intelligence services, terrorism, sovereignty, duty and sacrifice framed?

### 4.8 Social Dharma (interpretive dimension)

How does the film handle caste, gender, poverty, injustice and reform? The critical rule is:

> **Criticism of a social practice is not automatically criticism of Indic civilization.**

The evaluator asks whether reform is argued within/alongside the civilization, against a particular practice, or through wholesale contempt for the civilization itself.

## 5. Certification states

Do **not** expose a pseudo-precise 0–100 public score until enough films have been calibrated.

Initial states:

- **Sanghi Certified** — clear positive alignment through at least one strong route, with no verified major blocker.
- **Sanghi Compatible** — meaningful alignment, but evidence or breadth is not yet sufficient for certification.
- **Mixed / Contested** — substantial positive and negative signals coexist.
- **Not Certified** — the film's core treatment is materially in tension with the lens, or a verified major blocker dominates.
- **Unrated** — insufficient evidence.

A practical v0.1 certification gate:

1. At least **two relevant core dimensions at 4–5**, or one dimension at 5 plus another at 3+.
2. No **verified severity-4/5 integrity blocker** that reverses the meaning of the work.
3. Evidence confidence is at least **Medium**.
4. For disputed films, the public verdict must expose the dispute rather than silently resolve it.

## 6. Narrative Integrity Audit

Certification and narrative integrity are separate. A movie can be Sanghi Certified and still carry an integrity warning.

### Detectors

1. **Adaptation Delta** — what was changed, added, omitted or compressed versus a public source record?
2. **Identity Asymmetry** — are comparable religious/caste/community identities treated differently without an evident narrative reason?
3. **Caricature** — are identity markers repeatedly used as shorthand for stupidity, hypocrisy, villainy or ridicule?
4. **Selective Historicity** — are inconvenient facts retained for one group but rewritten/omitted for another?
5. **Religious Valence** — when sacred symbols or identities appear, are they sacred, neutral, comic, sinister, irrational, hypocritical, etc.?
6. **Narrative Agency** — which groups receive heroes, victims, fools, villains and moral authorities?
7. **Contempt Signal** — does the film invite the audience to laugh at or despise a community/belief rather than an individual character?
8. **Source Fidelity** — for biopics/history, how does the portrayal compare with books, records, family testimony and reliable reporting?

### Integrity finding states

- `VERIFIED`
- `SUPPORTED`
- `DISPUTED`
- `UNVERIFIED`
- `NOT_FOUND`

### Critical rule

> **Identity of a villain is not evidence of prejudice. Weaponization of identity as shorthand for villainy/ridicule can be.**

Apply the same evidentiary rule to Brahmins, Hindus, Muslims, Christians, Sikhs, Dalits, tribal communities, regional identities and other groups.

## 7. Facts, interpretation and intent must never be collapsed

Every contentious finding should be stored in three layers:

### Facts

What can be directly established from the film and reliable public record?

### Interpretation

What does the scene/narrative plausibly imply? Multiple interpretations may coexist.

### Intent

Was the filmmaker deliberately trying to advance or suppress a view? **Intent requires stronger evidence and must not be inferred merely from effect.**

Example structure:

```text
Finding: Identity asymmetry
Facts confidence: HIGH
Interpretation confidence: MEDIUM
Intent confidence: LOW / NOT ESTABLISHED
```

## 8. Evidence hierarchy

Evidence should be consumed in this order:

1. **Film evidence** — timed subtitles/transcript, scene description, visual markers, dialogue and narrative context where legally available.
2. **Source-of-truth material** — biography, court/public record, historical documents, source books, family testimony.
3. **Creator explanation** — director/writer/producer interviews and production notes.
4. **Viewpoint-diverse criticism** — reviews across ideological/editorial perspectives, used as witnesses to claims, not as judges.
5. **Public discussion** — X/Twitter, Reddit, YouTube and other communities used as a radar for scene-level claims.

### Social-media rule

Social volume does **not** establish truth. A viral allegation becomes a lead:

`claim -> scene/source verification -> finding`

not:

`many posts -> verdict`.

## 9. Scene-level forensic pipeline

For every film, build a claim/evidence graph:

```text
Film
  -> character
  -> identity marker
  -> scene/timestamp
  -> claim
  -> corroborating/contradicting source
  -> finding
  -> dimension impact
  -> certification verdict
```

Where subtitles/transcripts are available, construct indices for:

- caste/community references
- religion/deity/ritual references
- India/nation/army/security references
- historical figures/events
- identity-linked insults, jokes and stereotypes
- identity changes in adaptations

Frequency alone never proves bias; it only selects scenes for review.

## 10. Adaptation Delta for true stories and historical films

For works marketed as based on/inspired by real events, compare:

```text
REAL/PUBLIC RECORD            FILM
identity                 ->   retained / omitted / changed
religion                 ->   retained / omitted / changed
community/caste          ->   retained / omitted / changed
name                     ->   retained / fictionalised
political affiliation    ->   retained / altered
victim/perpetrator role  ->   retained / altered
chronology               ->   compressed / altered
statement/action         ->   retained / reassigned / invented
```

Classify changes as:

- omission
- compression
- composite character
- fictional addition
- identity substitution
- historical inversion

A change is not automatically malicious. Creator/family explanations and narrative necessity must be recorded.

## 11. Regional grounding requirement

A pan-Indian model is insufficient by itself. Each film needs:

1. **Regional context layer** — e.g. coastal Karnataka/Tulu traditions, Kerala social/religious context, Tamil political/caste vocabulary, Telugu historical/mythological conventions.
2. **Bharatiya/civilizational layer** — the cross-regional framework above.

The system must preserve contested boundaries. Example: a local daiva tradition can be simultaneously locally specific and connected to broader Hindu practice; the classifier should document disagreement rather than silently impose one ontology.

## 12. Reviewer handling

Reviews are evidence discovery tools, not truth labels.

Instead of averaging critic sentiment, extract:

- exact factual allegation
- scene/event referenced
- ideological interpretation
- source cited by critic

Then verify independently where possible.

The system should deliberately consume critics from different viewpoints to discover different claims.

## 13. Public UX contract

A movie card/detail page can eventually expose:

```text
🪷 SANGHI CERTIFIED
Confidence: High

Strongest signals:
- Dharma
- Civilizational Continuity
- Local Roots

Why certified?
1. Evidence-backed reason
2. Evidence-backed reason
3. Evidence-backed reason

Narrative Integrity
⚠ 1 disputed representation issue
```

The badge should be drillable:

`badge -> dimension -> finding -> scene/evidence -> source`

## 14. Community evidence feature

Future feature:

**Did we miss something? Submit a scene.**

User supplies:

- film
- timestamp
- short claim
- optional source

Users submit evidence, not ideological votes. Submissions enter a verification queue and cannot directly alter certification.

## 15. Data model (draft)

```ts
interface SanghiProfile {
  tmdbId: number;
  methodologyVersion: string;
  status: 'certified' | 'compatible' | 'mixed' | 'not-certified' | 'unrated';
  confidence: 'high' | 'medium' | 'low';

  dimensions: {
    dharma?: number;
    civilizationalContinuity?: number;
    rashtra?: number;
    itihasa?: number;
    parampara?: number;
    localRoots?: number;
    raksha?: number;
    socialDharma?: number;
  };

  reasons: string[];
  findings: IntegrityFinding[];
  reviewedAt: string;
}

interface IntegrityFinding {
  id: string;
  category: 'adaptation-delta' | 'identity-asymmetry' | 'caricature' |
            'selective-historicity' | 'religious-valence' |
            'narrative-agency' | 'contempt' | 'source-fidelity';
  status: 'verified' | 'supported' | 'disputed' | 'unverified' | 'not-found';
  severity: 0 | 1 | 2 | 3 | 4 | 5;
  facts: string[];
  interpretation: string[];
  intent: 'established' | 'supported' | 'not-established' | 'unknown';
  confidence: 'high' | 'medium' | 'low';
  evidence: EvidenceRef[];
}
```

## 16. Pilot rules

The first pilot intentionally includes films that stress different parts of the methodology. Desk research can produce a **provisional editorial verdict**, but contested scene-level integrity allegations must remain provisional until the film/subtitle evidence is inspected directly.

### Five-film pilot

- Kannada: **Kantara: Chapter 1** — local sacred tradition / mythological action
- Telugu: **Kalki 2898 AD** — mythological science fiction
- Tamil: **Amaran** — military biopic / adaptation-integrity test
- Hindi: **Article 370** — political/national-security thriller / factuality test
- Malayalam: **The Great Indian Kitchen** — social-reform drama / sacred-practice criticism test

See `PILOT_5_FILMS_V0.1.md`.

## 17. Pilot success criteria

The methodology passes the pilot if it can demonstrate all of the following:

1. It does not classify tribal resistance/anti-tyranny automatically as Western-progressive.
2. It recognizes civilizational architecture even when a film also critiques hierarchy or inequality.
3. It can certify a military/national film through Rashtra/Raksha without requiring overt religious content.
4. It separates historical/factual accuracy from worldview compatibility.
5. It does not label social reform or criticism of a Hindu practice as anti-Hindu without evidence of broader contempt/generalization.
6. It can surface subtle identity/asymmetry allegations without presenting unproven intent as fact.
7. It produces a reason a user can inspect rather than a black-box label.

## 18. Engineering roadmap after pilot acceptance

### Phase A — Editorial foundation

- Freeze methodology v0.1.
- Create 25–30 manually adjudicated gold films: obvious positive, obvious negative and difficult/mixed.
- Add regional context notes per language.

### Phase B — Evidence ingestion

- TMDb ID join layer.
- source/review/creator interview ingestion.
- legal subtitle/transcript ingestion where available.
- claim extraction and deduplication.

### Phase C — Forensic analysis

- scene index.
- adaptation-delta detector.
- identity/caricature/religious-valence detectors.
- fact/interpretation/intent adjudication.

### Phase D — FlickPick integration

- Sanghi profile store keyed by TMDb ID.
- `Certified only / Compatible+ / Everything` filter.
- badge on movie card.
- detailed `Why certified?` view.
- integrity warning surface.

### Phase E — Community evidence

- timestamp/scene submission.
- moderation/verification queue.
- methodology/version history.

## 19. Versioning and editorial integrity

Every verdict must record:

- methodology version
- evidence version/date
- reviewer/model run
- confidence
- unresolved disputes
- previous verdict when changed
- reason for change

No silent retroactive edits.

## 20. Current v0.1 principle set

1. **India is not reducible to a Western Left/Right axis.**
2. **Social reform is not automatically anti-civilizational.**
3. **A villain's identity is not evidence of group hostility.**
4. **Caricature requires use of identity markers as narrative shorthand for contempt/ridicule.**
5. **Facts, interpretation and intent are separate claims.**
6. **Social media discovers allegations; it does not prove them.**
7. **Reviews are witnesses, not judges.**
8. **Local/regional context is mandatory.**
9. **Certification and Narrative Integrity are independent outputs.**
10. **Every significant verdict must be explainable down to evidence.**

---

This document is deliberately versioned as **v0.1**. Changes should be made when pilot films expose a repeatable failure mode, not merely because an individual verdict is unpopular.
