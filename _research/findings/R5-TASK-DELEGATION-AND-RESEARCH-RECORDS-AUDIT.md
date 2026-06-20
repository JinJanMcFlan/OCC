# R5 — Task, Delegation, and Research Records — Audit

**Research run title:** `R5 — Task, Delegation, and Research Records [OCC]`  
**Research status:** Complete  
**Audit status:** Accepted as research input with corrections  
**Raw result location:** `_research\findings\R5-TASK-DELEGATION-AND-RESEARCH-RECORDS-RAW.md`  
**Related architecture source:** `_architecture\ROUTER-RECONCILIATION.md`  
**Related research:** R1, R2, and R3 router research audits

---

## What R5 supports

R5 supports OCC using one connected work history for normal tasks and internal research work.

The Router remains the only system that:

- Routes bounded work
- Assigns available capabilities
- Schedules work
- Applies approval and safety rules
- Tracks execution state and cost
- Records execution outcomes

The Research Engine remains responsible for:

- Research objectives
- Hypotheses and questions
- Evidence and contradictions
- Experiments
- Research findings
- Decision-ready handoffs

When the Research Engine needs work completed, it creates a bounded task for the Router. It does not create a second scheduler, capability registry, cost system, or execution pathway.

R5 also supports preserving the difference between:

- A raw output or source artifact
- An audit
- Accepted evidence
- A proposed decision handoff
- A ratified MainOrch decision
- A later correction or reversal

R5 supports recording real relationships as work happens so queue and graph views reflect actual work history.

Useful candidate relationships include:

- Parent and child tasks
- Dependencies and blockers
- Task to execution attempt
- Execution attempt to capability assignment
- Execution attempt to approval
- Execution attempt to output
- Research objective to research run
- Research run to evidence
- Evidence to contradiction
- Evidence to decision handoff
- Ratified decision to later implementation work

---

## Accepted corrections

### 1. Record types and names are not yet locked

R5 identifies a useful candidate record model.

It does not lock final record names, final fields, exact schemas, or an implementation data model.

Final implementation detail remains blocked until all router research is synthesized and MainOrch reviews genuine decisions.

### 2. Event history and graph patterns are candidates, not commitments

R5 recommends immutable event history, directed acyclic graph relationships, and content-addressed artifacts.

These are useful research examples.

OCC has not selected event sourcing, append-only storage, a graph database, a directed acyclic graph architecture, or content-addressed storage.

The current JSON / in-memory direction remains unchanged unless later evidence and MainOrch direction change it.

### 3. Hashes help verify content but do not create immutability

A content hash can help detect whether an output changed.

A hash alone does not make a record immutable or guarantee storage integrity.

OCC must preserve provenance, version history, and reasons for changes without overstating what a technical mechanism proves.

### 4. Decision Handoffs are proposed, not ratified

A Decision Handoff is a decision package supported by evidence and prepared for MainOrch review.

It is not a ratified decision by itself.

Only MainOrch approval makes a decision active project direction.

### 5. Router and Research Engine boundaries remain strict

The Research Engine may read Router task, delegation, output, and cost records when evaluating research.

It must not independently:

- Route or schedule work
- Assign a model, tool, or provider
- Operate a separate Capability Registry
- Maintain a separate cost ledger
- Bypass Router approval or safety rules

### 6. Capability assignments need decision-time evidence snapshots

A capability assignment should preserve the routing rationale and the relevant capability evidence used at the time of the decision.

This may include the applicable tool access, privacy suitability, cost estimate, availability, confidence, and known limitations.

Later registry updates must not rewrite what OCC knew when the original routing decision was made.

---

## What remains unresolved

R5 does not prove:

- The final shared record model
- Final field names or schemas
- The correct storage or event-history architecture
- Whether every graph relationship should be stored directly or derived
- The exact first-build record set
- The final Router and Research Engine interface
- How outcome feedback safely updates routing knowledge

These require R4, final router synthesis, benchmarks where needed, and MainOrch review.

---

## Queue impact

R5 is accepted as active input to the final router synthesis.

The final router research run is:

`R4 — Outcome Feedback and Safe Improvement [OCC]`

R4 must use the accepted findings and corrections from R1, R2, R3, and R5.

After R4 is audited, the router-research lane must produce one synthesis and MainOrch decision package. Builders must not implement directly from raw Gemini research reports.
