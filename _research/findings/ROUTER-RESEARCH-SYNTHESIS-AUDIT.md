# Router Research Synthesis — Audit

**Source:** `_research\findings\ROUTER-RESEARCH-SYNTHESIS-RAW.md`  
**Status:** Accepted as final router-research synthesis input with corrections  
**Scope:** R1, R2, R3, R4, and R5 audited router research  
**Authority:** This audit does not ratify architecture. MainOrch remains the final authority.

---

## What the synthesis gets right

The five router research runs are complete.

The audited research supports OCC having:

- A deterministic, capability-driven Router
- Structured task facts before routing
- A Capability Registry based on current evidence
- Separate handling for operational reliability and semantic result quality
- One shared work history for tasks, delegations, approvals, outputs, costs, and research evidence
- A Research Engine that organizes objectives, hypotheses, evidence, contradictions, and decision handoffs
- A Router that remains the only system that routes, schedules, assigns capabilities, and executes bounded work
- Real task and dependency relationships that later support truthful queue, graph, and Presentation Mode views

The research also reinforces OCC's standing principle:

OCC does not copy adjacent systems. It studies what they do well, identifies their weaknesses, proposes an OCC improvement hypothesis, and requires evidence before adopting that improvement.

---

## Corrections before MainOrch review

### 1. Research completion is not architecture ratification

R1 through R5 are complete as audited research inputs.

The synthesis is a candidate build package and decision package.

It is not itself approved architecture, implementation scope, or permission to build core router logic.

### 2. Split gates remain a MainOrch decision

The synthesis treats split gates as effectively resolved.

They are not yet ratified.

The proposed interpretation is:

- Pre-scoring eligibility filters remove options that cannot meet non-negotiable requirements.
- Post-selection commitment checks verify final availability, final cost, and approval before execution.

MainOrch must approve, reject, or revise this interpretation before the final router pipeline is locked.

### 3. No exact record model, event system, graph model, or hash mechanism is approved

The synthesis mentions immutable event histories, directed acyclic graphs, content hashes, and specific record structures.

These are useful candidate patterns.

They are not approved OCC architecture, storage choices, or implementation requirements.

OCC may need version history, provenance, and real relationships. The exact technical mechanism remains open pending MainOrch review and later benchmarks.

### 4. JSON and in-memory storage is already active direction

JSON and in-memory remain the current OCC storage direction.

This is not a new decision requiring re-ratification.

No database migration, graph database, event store, or external storage system is approved by this synthesis.

### 5. No scoring formula or score-display format is approved

OCC must explain routing decisions.

It does not yet have an approved scoring formula, normalization method, default weights, point system, or exact score presentation format.

The router may later show factor inputs, hard restrictions, evidence snapshots, and route rationale. The exact mathematical representation must be benchmarked before it is locked.

### 6. Outcome feedback remains cautious

OCC may automatically record direct operational facts, including cost, time, tool failures, rate limits, and temporary availability.

OCC must not automatically make broad semantic capability judgments from one result, one user rejection, or one secondary-model evaluation.

Semantic quality evidence remains task-specific, traceable, gradual, and review-supported until later benchmark evidence proves a safe automatic method.

### 7. Raw outputs do not automatically become evidence

The correct progression is:

Raw output or source artifact → audit or evaluation → accepted evidence item → proposed decision handoff → ratified MainOrch decision.

A routed research result is not accepted product direction merely because an AI produced it.

### 8. State-changing work must not use blind retry or assumed rollback

For state-changing actions, OCC must not blindly retry or claim an automatic rollback unless idempotency, rollback behavior, or an explicit approved recovery plan is known before execution.

Read-only and reversible work may use cautious fallback behavior under later approved rules.

### 9. Benchmark thresholds are not locked

The synthesis proposes benchmark sizes and success percentages.

Those exact numbers are provisional examples only.

Each benchmark must define its evaluation method, test set, success threshold, failure condition, and decision owner before it is used to lock architecture.

### 10. Build-readiness work remains bounded

The synthesis does not authorize direct implementation of core router logic.

BuildReadinessOrch may continue only with approved no-regret planning, static or mock interface work, test-case planning, folder-binding and connector preparation, and other reversible work within its MainOrch charter.

---

## Genuine MainOrch decisions

### Decision 1 — Split-gate interpretation

Decide whether OCC formally uses:

1. Pre-scoring eligibility filters for non-negotiable requirements.
2. Weighted comparison of eligible options using the five routing factors.
3. Post-selection commitment checks for final availability, final cost, and approval.

**Recommended choice:** Approve this as a clarification of the existing deterministic router direction.

**Still open after approval:** Exact hard-rule syntax, scoring formula, normalization method, and implementation approach.

### Decision 2 — Initial semantic-feedback governance

Decide whether the first OCC build may automatically update direct operational facts but must keep semantic capability changes review-supported.

**Recommended choice:** Approve.

Automatic operational facts may include measured cost, time, tool availability, rate-limit conditions, and temporary outages.

Semantic quality, model-fit changes, permanent restrictions, and routing-policy changes require traceable evidence and human-governed review.

### Decision 3 — State-changing retry and rollback boundary

Decide whether OCC prohibits blind retries and assumed rollback for state-changing work unless an approved recovery plan is known before execution.

**Recommended choice:** Approve.

---

## What is ready after MainOrch review

- A benchmark plan for router behavior
- Static task, capability, outcome, queue, and routing-rationale mock data for interface development
- Build-readiness planning
- Routing test-case design
- Folder-binding and connector preparation
- Reversible app-shell and Base UX work within the approved BuildReadinessOrch charter

---

## What remains blocked

- Final router pipeline implementation
- Shared task, delegation, research, and graph record architecture
- Scoring mathematics
- Automatic rerouting policy
- Automatic semantic confidence updates
- Permanent capability restrictions
- Storage architecture changes
- Any implementation that treats raw external research as approved OCC direction

---

## Next required sequence

1. MainOrch reviews the three genuine decisions.
2. MainOrch updates active architecture and decision records only for ratified decisions.
3. BuildReadinessOrch uses the ratified boundaries to prepare benchmark and implementation sequencing.
4. Main ResearchOrch continues broader Research Engine and frontier portfolio direction separately.
5. Builders receive an approved Router Build Package, not raw Gemini research reports.
