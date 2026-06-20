# R2 — Capability Registry Evidence — Audit

**Research run title:** `R2 — Capability Registry Evidence [OCC]`  
**Research status:** Complete  
**Audit status:** Accepted as research input with corrections  
**Raw result location:** `_research\findings\R2-CAPABILITY-REGISTRY-EVIDENCE-RAW.md`  
**Related research:** `_research\findings\R1-GENERAL-ROUTER-TASK-FACTS-AUDIT.md`  
**Related architecture source:** `_architecture\ROUTER-RECONCILIATION.md`

---

## What R2 supports

R2 supports OCC maintaining a provider-neutral Capability Registry.

The Capability Registry is OCC's best current evidence record of what available models, tools, machines, execution environments, and services can do.

It should help OCC determine:

- Which options can meet a task's non-negotiable requirements
- Which remaining options best fit the task
- What each option is expected to cost
- Whether an option is currently available and healthy
- How current and trustworthy the supporting evidence is
- What completed work has shown about that option over time

R2 also supports separating hard restrictions from normal tradeoffs.

Hard restrictions can eliminate an option before scoring. Examples include missing required tool access, unsuitable privacy handling, unavailable file access, insufficient input capacity, or a budget limit.

The remaining eligible options can then be compared using OCC's five locked routing factors:

1. Cost
2. Time / urgency
3. User presence
4. Model fit
5. Output quality tier

---

## Accepted corrections

### 1. The registry holds best current evidence, not absolute truth

The Capability Registry is not an unquestionable source of truth.

It is OCC's best current, traceable evidence record. Every meaningful registry fact should retain:

- Source
- Date checked
- Confidence
- Known contradictions
- Whether the fact is directly observed, officially claimed, independently tested, inferred, or unknown

### 2. Unknown privacy handling means unverified, not automatically unsafe by claim

When privacy handling is unknown, OCC must treat the capability as unverified and ineligible for sensitive tasks until appropriate evidence exists.

Do not state as fact that an unknown provider trains on user data unless evidence specifically supports that claim.

OCC remains local-first where useful, not local-only by default.

### 3. Health and failure handling are staged

Basic availability, recent operational failures, and stale information should affect routing.

However, advanced concepts such as automatic detection of semantic output degradation and semantic circuit breakers remain future research and experimentation topics.

They are not current implementation requirements or proven mechanisms.

### 4. Named systems are examples, not commitments

R2 references systems and ideas associated with Kubernetes, HTCondor, OpenTelemetry, NATO evidence practices, and other external systems.

These are research examples only.

They are not approved OCC framework choices, provider dependencies, protocol requirements, or implementation commitments.

### 5. Storage direction remains unchanged

R2 raises a legitimate future question about growing telemetry and evidence history.

This does not change OCC's current storage direction of JSON / in-memory and does not create a SQLite or database commitment.

A future benchmark may produce evidence for a storage decision. Until then, no storage change is approved.

### 6. Quality evidence must be task-specific

A capability should not receive one universal "best model" rating.

Its quality evidence should be connected to task-relevant conditions, observed outcomes, confidence, and known limits.

A strong result in one task type does not automatically prove strong performance in every other task type.

---

## What remains unresolved

R2 does not prove:

- The exact registry schema
- Exact evidence expiry periods
- Exact scoring formulas
- How quality should be evaluated reliably
- How to detect semantic degradation automatically
- Which storage system OCC should use
- What real-world cost, speed, or routing-quality improvement OCC will achieve

These require later research, benchmarks, and evidence.

---

## Queue impact

R2 is accepted as active input to router research.

The next approved research question is:

`R3 — Deterministic Routing Policy and Scheduling [OCC]`

R3 must use the accepted findings and corrections from both R1 and R2.

The original R2 Gemini result must remain preserved separately as a raw research artifact. This audit does not replace or rewrite it.
