# A3 — Capability Evidence Freshness Audit [OCC]

**Source raw file:** `_research/findings/R7-CAPABILITY-EVIDENCE-FRESHNESS-AND-UPDATE-GOVERNANCE-RAW.md`
**Classification:** A — Internal audit
**Status:** Accepted as research input with corrections
**Downstream use:** B1 Router Scenario Corpus; later D1 Router Build Package

---

## What it supports

- Capability facts require source provenance, date checked, confidence, contradiction state, freshness state, and decision-time evidence preservation. These are necessary attributes, not optional enhancements.
- Direct local operational telemetry may outweigh delayed official health information when making immediate availability decisions. An orchestrator that trusts a provider's "healthy" status page over its own observed connection failures is taking on avoidable routing risk.
- Operational reliability and semantic quality must remain separate. A model returning HTTP 200 is not evidence of semantic correctness, and circuit-breaking on network errors must not touch semantic capability scores.
- Unknown privacy handling is unverified and ineligible for sensitive tasks. A capability with no confirmed data-retention or privacy posture must be treated as a hard-gate failure for any task with a privacy sensitivity flag, regardless of other scoring factors.

---

## Corrections and boundaries

- Split-gate behavior — the relationship between hard-blocking constraints and weighted trade-off scoring — remains a pending MainOrch decision. This audit does not ratify it.
- No database architecture is adopted or rejected. The raw report's references to registry schemas, tiered evidence stores, and lifecycle state machines are candidate patterns only.
- Provider-specific privacy, deprecation, and pricing claims in the raw report (Anthropic policy update, OpenAI deprecation schedule, Vertex IAM issues) remain leads until verified against current official sources at the time of use. They are not accepted facts as of this audit.
- Freshness states and contextual decay thresholds are candidate mechanisms, not a final registry schema.
- This audit must not ratify semantic-feedback governance or automatic semantic capability updates. The raw report's proposals for human-governed semantic confidence channels are noted as candidate patterns; they are not approved governance policy.

---

## What can feed B1

The following are scenario-ready inputs for the B1 Router Scenario Corpus:

- **Unknown privacy versus strict-sensitive-task case.** A capability whose privacy posture is unverified must be rejected at the eligibility gate before any weighted scoring begins.
- **Direct outage telemetry versus "healthy" official status case.** OCC's observed failures contradict a provider's public status claim; the router must act on its own telemetry.
- **Stale/deprecated capability case.** A capability has passed its official deprecation date or has timed out its freshness threshold; the router must not route to it.
- **Required tool unavailable case.** A task depends on a specific MCP tool that has gone unreachable; routing must not proceed as if the tool is present.
- **Cost estimate versus later observed cost case.** Pre-execution cost estimation diverges from observed consumption; the audit trail must preserve both figures for later comparison.

---

## Beyond the Current Guardrail

**Semantic failure prediction**
Predicting model hallucination or context collapse using small local evaluators before routing executes. Requires benchmark evidence that local evaluators can predict large-model failures with high precision and sub-50ms latency.
Status: Parked.
Revisit trigger: Benchmark evidence meeting the precision and latency threshold.

**Cross-OCC reputation sharing**
Pooling operational telemetry across independent OCC instances via a lightweight peer-to-peer mechanism to produce a shared capability health picture. Requires an OCC install base at sufficient scale and a privacy-safe aggregation design.
Status: Monitor.
Revisit trigger: Install base reaches a scale where anonymous aggregation becomes statistically meaningful.

**Parallel pre-execution variants**
Proactively spawning execution across multiple capabilities when evidence is uncertain, then adopting the best result. Requires core deterministic routing to be stable and explicit MainOrch approval.
Status: Escalate only after core routing is stable.
Revisit trigger: Core routing is validated and MainOrch opens a parallel-execution lane.

---

## Conclusion

R7 surfaced a useful set of transferable patterns and AI-specific failure modes for capability evidence management. The core conclusions — that capability facts must carry provenance and freshness metadata, that operational and semantic confidence must remain separate channels, and that unknown privacy state is a hard gate — are accepted as research inputs. Provider-specific claims in the raw report are leads, not verified facts. No registry schema, database choice, or governance policy is ratified here. This audit feeds B1 scenario design and informs later D1 packaging; it does not independently alter router architecture or implementation scope.
