# R3 — Deterministic Routing Policy and Scheduling — Audit

**Research run title:** `R3 — Deterministic Routing Policy and Scheduling [OCC]`  
**Research status:** Complete  
**Audit status:** Accepted as research input with corrections and MainOrch decision required  
**Raw result location:** `_research\findings\R3-DETERMINISTIC-ROUTING-POLICY-RAW.md`  
**Related research:** R1 and R2 router research audits  
**Related architecture source:** `_architecture\ROUTER-RECONCILIATION.md`

---

## What R3 supports

R3 supports separating routing decisions into three plain-language stages:

1. Remove options that cannot meet the task's non-negotiable requirements.
2. Compare the valid options using OCC's five routing factors.
3. Verify the selected route immediately before execution and hold for required human approval.

R3 also supports:

- Keeping urgency and user presence separate
- Recording why options were rejected or selected
- Treating approval, dependencies, clarification, deferral, and failure as real task states
- Avoiding uncontrolled automatic retries after actions that may have changed files or external systems

---

## Accepted corrections

### 1. Split gates are proposed direction, not yet ratified architecture

R3 identifies a real question in the active router pipeline.

Some restrictions appear to belong before scoring, such as:

- Required tool access
- Required file access
- Privacy restrictions
- Input or context limits
- Explicit hard budget caps
- Current availability

Some checks belong after a route is selected but before work begins, such as:

- Final availability verification
- Final cost estimate verification
- Required approval for the specific proposed action

MainOrch must decide whether to formally adopt this split-gate interpretation.

Until then, the existing router architecture remains active.

### 2. No scoring formula is approved

R3 proposes a specific weighted-points formula.

OCC has not selected that formula.

The required direction remains: routing must be deterministic, explainable, and based on the five locked routing factors.

The exact scoring mathematics must remain open until it is tested against realistic cases and produces evidence that it gives understandable results.

### 3. Missing information should trigger proportional handling

Missing information does not always require a hard stop.

OCC should ask the user when a missing fact materially changes safety, privacy, approval, available routes, cost exposure, or the result needed.

For lower-risk situations with safe defaults, OCC may continue while recording uncertainty.

### 4. Rollback cannot be assumed

OCC must not promise that every failed action can be automatically undone.

For external or irreversible actions, rollback capability must be known and planned before execution.

Where safe rollback is unavailable, OCC should use approval gates, previews, dry runs, or a blocked state instead.

### 5. Approval waits are not automatic cancellation

When approval is required but not yet given, the normal state is waiting for user review or deferred.

Automatic cancellation requires an explicit user or system policy. It is not a default behavior.

### 6. Named systems are examples, not commitments

R3 references external systems, methods, and frameworks as research examples only.

They are not approved OCC dependencies, framework choices, provider requirements, or implementation commitments.

---

## What remains unresolved

R3 does not prove:

- The exact final router order
- The exact scoring formula
- Default user weighting values
- How much routing overhead users will tolerate
- Whether routing rules produce intuitive decisions in real use
- Which scheduling engine, workflow system, or rollback mechanism OCC should use

These require MainOrch direction, later benchmarks, and real-world evidence.

---

## Queue impact

R3 is accepted as input.

The next bounded research run is:

`R5 — Task, Delegation, and Research Records [OCC]`

R5 must treat split gates as a proposed direction only. It must not assume MainOrch has ratified a new router pipeline or selected a scoring formula.

R4 remains after R5.
