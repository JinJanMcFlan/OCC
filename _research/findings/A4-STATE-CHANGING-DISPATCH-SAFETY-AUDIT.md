# A4 — State-Changing Dispatch Safety Audit [OCC]

**Source raw file:** `_research/findings/R8-SAFE-STATE-CHANGING-DISPATCH-AND-RECOVERY-PATTERNS-RAW.md`
**Classification:** A — Internal audit
**Status:** Accepted as research input with corrections
**Downstream use:** B1 safety scenarios; D1 execution constraints

---

## What it supports

- State-changing actions require known idempotency, reversibility, recovery behavior, and execution-state visibility before automation proceeds. An action without those properties known in advance must not be dispatched under an assumption that recovery is available.
- An ambiguous timeout must not justify a blind retry. A timeout leaves the prior attempt's outcome unknown; re-dispatching without confirmed idempotency risks duplicate side effects.
- Preview, dry run, explicit approval, block, escalate, and uncertain are valid candidate safety outcomes for the router when a state-changing action cannot be safely automated. These outcomes are not architecture yet; they are candidate states for B1 scenario testing.
- Known idempotency support — where the destination explicitly documents and supports it — can enable a carefully bounded retry path using a stable key and payload fingerprint.

---

## Corrections and boundaries

- OCC's ratified no-blind-retry boundary is unchanged. This audit reviews patterns and failure modes; it does not reopen, narrow, or extend that ratified decision.
- HTTP verbs alone do not prove semantic safety for a particular external system. A PUT or DELETE that is idempotent by HTTP specification may not be idempotent in the semantic behavior of a specific third-party service.
- Idempotency keys may only be used where the destination explicitly documents and supports them. OCC must not assume key support; it must verify it from capability registry evidence before relying on it.
- The raw decision matrix — mapping evaluation dimensions to execution states — is candidate benchmark material for B1, not approved router architecture.
- Saga, 2PC, outbox/inbox, and workflow engine references in the raw report are background patterns and transferable lessons, not selected implementations.
- No final task-state schema or execution engine is selected by this audit.

---

## What can feed B1

The following are scenario-ready inputs for the B1 safety scenario set:

- **Completed action but lost response.** The external system executed and committed; OCC received a timeout. The router must determine whether idempotency is confirmed before considering any retry.
- **Changed payload after an earlier attempt.** A user modified task parameters after a prior attempt failed. Re-dispatching with the same key but a different payload must not proceed silently.
- **Duplicate concurrent dispatch.** Two execution threads attempt to dispatch the same action simultaneously. The system must detect and halt the duplicate without crashing or corrupting task state.
- **Partial multi-step action with known compensation.** An earlier step succeeded but a later step failed. The system must execute the defined compensating action for the successful step rather than leaving state partially committed.
- **Cancellation requested while external work may still be running.** A cancellation signal was sent but not confirmed. Compensation must not execute until the external action's actual halt is verified.

---

## Beyond the Current Guardrail

**LLM-generated compensating actions**
Using a constrained LLM agent to synthesize compensating payloads dynamically for external systems without pre-mapped reversal logic. Requires benchmark evidence of 100% syntactic and semantic correctness across diverse undocumented APIs with no hallucinated parameters.
Status: Parked.
Revisit trigger: Benchmark evidence meeting correctness and safety thresholds.

**Semantic circuit breakers**
Monitoring the logical quality of state-changing outputs over a rolling window and tripping a circuit when outputs are syntactically valid but logically destructive. Requires a proven low-latency evaluation mechanism with acceptable false-positive rates.
Status: Monitor.
Revisit trigger: A low-latency semantic evaluation mechanism is available and validated.

**Multi-agent consensus for high-risk commits**
Requiring a quorum of independent specialist agents to evaluate and approve a high-risk state-changing payload before dispatch. Requires proof that latency and cost overhead are acceptable and that evaluating agents do not suffer from correlated hallucination.
Status: Parked.
Revisit trigger: Core routing is stable and an independent evaluation latency benchmark is available.

---

## Conclusion

R8 surfaced a well-grounded set of distributed systems safety patterns and AI-specific failure modes relevant to state-changing dispatch. The core conclusions — that idempotency and reversibility must be known before automation, that ambiguous timeouts never justify a blind retry, and that a set of candidate safety outcomes is useful for B1 scenario design — are accepted as research inputs. The raw decision matrix, saga references, and execution engine mentions are transferable lessons and benchmark candidates, not selected architecture. OCC's ratified no-blind-retry boundary is not reopened by this audit. No final task-state schema or execution engine is chosen here.
