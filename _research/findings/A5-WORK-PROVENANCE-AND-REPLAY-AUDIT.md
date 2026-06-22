# A5 — Work Provenance and Replay Audit [OCC]

**Source raw file:** `_research/findings/R9-LIGHTWEIGHT-WORK-PROVENANCE-AND-REPLAY-DESIGN-RAW.md`
**Classification:** A — Internal audit
**Status:** Accepted as research input with corrections
**Downstream use:** B1 replay cases; later D1 provenance boundary

---

## What it supports

- OCC needs preserved task-fact changes, routing rationale, decision-time capability snapshots, execution attempts, approvals, outputs, and outcomes. A provenance record that captures only the final output is insufficient for explainability or diagnosis.
- Historical records must not be silently rewritten when current capability facts change. A routing decision made with a particular evidence state must remain explainable against that evidence state, not against whatever the registry says today.
- External inputs and outputs can be recorded for controlled replay and testing of deterministic router behavior. Capturing the request and response at each external boundary enables offline replay without live API calls or non-deterministic model outputs.
- Real relationships must be captured as work occurs. Links between a task, its execution attempts, approvals, outputs, and supporting evidence must be recorded at creation time, not reconstructed after the fact, for queue, graph, and later visual views to be truthful.

---

## Corrections and boundaries

- JSON Patch, PROV, replay tapes, and the named "Tripartite Provenance Envelope" are candidate patterns from the raw report. None is a selected implementation or required schema.
- No final shared-record schema, event architecture, graph model, graph database, content-addressed storage, or persistence architecture is chosen by this audit.
- JSON/in-memory is the current storage direction per the active DECISIONS.md entry. This audit does not change that direction, and it is not proof that restart-safe replay is already a requirement for the initial build.
- Claiming immutability on the basis of content hashing or chronological recording is not warranted. Application-level governance, not cryptographic guarantees alone, is what a JSON/in-memory system can truthfully claim.
- Split-gate behavior remains a pending MainOrch decision. This audit does not ratify it.
- Provenance does not authorize automatic semantic feedback changes. Recorded outcomes feed an operational log; altering semantic capability confidence requires a separate, human-governed review process.

---

## What can feed B1

The following are scenario-ready inputs for the B1 replay case set:

- **Task fact changes while preserving original facts.** A user updates task parameters after initial submission; the original baseline must remain intact and reconstructable.
- **Capability changes after route selection without rewriting decision history.** A capability's registry entry changes after a route has been committed; the rationale record must reflect the evidence that existed at decision time.
- **Offline replay using recorded external responses, with no live calls.** A historical execution can be replayed through modified router logic using captured I/O stubs, without contacting external providers.
- **Missing decision context or rejected-capability explanation.** The system must be able to show which capabilities were eliminated before scoring and why, not just the winning route.
- **Relationship integrity between task, attempt, approval, output, and evidence.** The links connecting these records must be factually present in the data, not inferred by the UI layer after the fact.

---

## Beyond the Current Guardrail

**Replay-driven semantic loop detection**
Using recorded execution traces to train or drive a local classifier that detects semantic looping — where an agent repeatedly invokes tools with mutated incorrect parameters while returning HTTP 200. Requires a local evaluation mechanism and validated detection thresholds.
Status: Monitor.
Revisit trigger: A suitable local classification or embedding approach is validated for loop detection.

**Parallel multi-agent state merge mechanisms**
Resolving merge conflicts when multiple autonomous agents produce concurrent modifications to shared task facts. Linear JSON patch arrays handle sequential mutations well; parallel swarm scenarios may outgrow them. Content-addressed and graph-based alternatives are excluded from the current build.
Status: Parked.
Revisit trigger: OCC formally adopts parallel multi-agent execution that produces concurrent task-fact mutations.

**Counterfactual replay for research experiments**
The Research Engine autonomously forking a replay tape at a failure point, modifying the routing logic or prompt, and replaying the execution to explore alternative outcomes. Transforms replay from a passive debugging tool into an active research capability.
Status: Escalate to Main ResearchOrch when the automated hypothesis testing lane becomes active.
Revisit trigger: Main ResearchOrch opens a formal lane for automated hypothesis testing.

---

## Conclusion

R9 surfaced a well-grounded set of provenance and replay patterns relevant to OCC's JSON/in-memory architecture and the explainability requirements of its deterministic router. The core conclusions — that task-fact changes, routing rationale, capability snapshots, execution attempts, approvals, and outcomes must all be preserved, that historical records must not be rewritten by later registry changes, and that captured external I/O enables offline replay — are accepted as research inputs. The Tripartite Provenance Envelope, PROV serializations, JSON Patch, and replay tape structures are candidate patterns only. No schema, event architecture, graph model, or persistence approach is selected here. This audit feeds B1 replay scenario design and informs later D1 provenance boundary work; it does not alter the current JSON/in-memory storage direction or expand build scope.
