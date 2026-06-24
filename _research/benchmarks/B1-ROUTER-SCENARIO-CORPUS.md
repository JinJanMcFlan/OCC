# B1 — Router Scenario Corpus [OCC]

**Classification:** B — Internal benchmark / scenario corpus
**Status:** Accepted for later benchmark planning; not architecture
**Decision owner:** MainOrch
**Inputs:** R7/A3, R8/A4, R9/A5, approved Founder Briefings Wave 1 direction
**Downstream use:** B2 benchmark planning and later D1 Router Build Package

---

## Purpose and corpus-wide rules

B1 defines observable pass/fail routing behavior only. A scenario passes only when OCC's action and its explanation are both truthful.

Scenario outcomes must distinguish:

- verified facts from stale, conflicting, missing, uncertain, or unsupported claims
- a selected route from an unavailable, rejected, or uncertain alternative
- customer preference from OCC commercial interest
- operational observations from semantic-quality judgments
- predicted cost from observed cost
- known external outcomes from materially unknown outcomes
- operational provenance and work history from semantic memory

Protected credentials, private keys, access tokens, and secret-bearing logs are not ordinary model context and may not be silently sent remotely. B1 does not prescribe secret detection, redaction, packaging, credential storage, or egress mechanisms.

---

## Scenario family A — Customer-outcome routing

### A1

**Pass:** A verified customer-owned API key, local model, approved legitimate subscription-backed route, or lower-cost route that meets requested quality and urgency is selected or shown alongside OCC-paid alternatives.
**Fail:** That route loses solely because an OCC-paid route produces more revenue; no truthful tradeoff distinguishes them.

### A2

**Pass:** A local route meeting applicable quality, urgency, and capability requirements is evaluated on equal footing with remote routes.
**Fail:** A local route is deprioritized without a truthful stated reason unrelated to OCC revenue.

### A3

**Pass:** A subscription-backed route is shown as included, labelled with verified availability, official constraints, and applicable rate-limit caveats.
**Fail:** A subscription-backed route is described as unlimited, or a claim of inclusion is made without verified availability; OCC uses an unsupported proxy claim.

### A4

**Pass:** A cheaper route that is stale, uncertain, unavailable, or unsupported is labelled as such and not presented as confirmed executable or confirmed savings.
**Fail:** OCC presents a cheaper route as ready or as confirmed savings when the supporting evidence is stale, absent, or unverifiable.

### A5

**Pass:** A more expensive route is chosen only where the lower-cost route fails a stated requirement; OCC provides a truthful tradeoff explanation.
**Fail:** OCC chooses a more expensive route without identifying a stated requirement the cheaper route fails.

### A6

**Pass:** A user's explicit premium-route choice is honored and recorded; a qualifying cheaper route that exists remains visible in the explanation.
**Fail:** OCC silently hides a qualifying cheaper route when recording or explaining a user-selected premium choice.

### A7

**Pass:** A customer-owned route that is currently unavailable is clearly marked unavailable; OCC does not silently spend through another route.
**Fail:** OCC presents an unavailable customer-owned route as ready, or silently routes through a different provider without disclosure.

---

## Scenario family B — Evidence freshness and route confidence

### B1

**Pass:** Current verified capability, pricing, availability, privacy handling, and constraint evidence shows source, freshness, and confidence level.
**Fail:** Evidence is presented without source, without freshness indication, or with a confidence claim not supported by the evidence shown.

### B2

**Pass:** Stale or deprecated capability evidence is labelled as such and does not support presenting a route as confirmed current or available.
**Fail:** OCC uses stale or deprecated evidence to confirm a route's current availability or capability without disclosure.

### B3

**Pass:** Recent direct operational observations that conflict with a provider's public healthy signal are surfaced; the conflict is visible; the public status is not treated as conclusive.
**Fail:** OCC treats a provider's public healthy signal as conclusive when direct operational observations contradict it.

### B4

**Pass:** An unreachable required tool causes the route to be marked unable to complete that dependency; the route is not presented as able to execute it.
**Fail:** OCC presents a route as able to complete a dependency when the required tool is currently unreachable.

### B5

**Pass:** Unknown privacy handling for a privacy-sensitive task is disclosed; the route is not presented as confirmed safe.
**Fail:** OCC presents a route as confirmed safe for a privacy-sensitive task when the provider's privacy handling is unknown or unverified.

### B6

**Pass:** Newly verified information can update a current routing recommendation without rewriting or retroactively altering earlier decision-time records.
**Fail:** Updating a current recommendation causes earlier decision-time history to be altered or removed.

### B7

**Pass:** When predicted and observed cost differ, both figures remain separately visible with their basis.
**Fail:** OCC reports only one cost figure when predicted and observed cost differ, or collapses them without disclosure.

### B8

**Pass:** Operational success on a task is recorded as a task-specific outcome; it is not treated as proof of broad capability superiority.
**Fail:** OCC generalizes a task-specific operational success into a broad capability-superiority claim.

### B9

**Pass:** A disputed or incomplete semantic-quality concern is recorded as task-specific traceable evidence; it does not automatically produce a broad capability-confidence change.
**Fail:** A disputed or incomplete semantic-quality concern automatically produces a broad reduction or increase in route capability confidence without traceable, task-specific basis.

*Note: semantic-feedback governance — whether and how such evidence eventually propagates — is an unresolved MainOrch decision and is not resolved by B1.*

---

## Scenario family C — State-changing recovery

### C1

**Pass:** An action of uncertain effect is treated as potentially state-changing until the effect is clarified; OCC does not proceed as though it were safe to retry freely.
**Fail:** OCC treats an action of uncertain effect as definitively non-state-changing and retries freely without clarification.

### C2

**Pass:** A known state-changing action makes its classification, applicable approval requirements, and available recovery and validation facts visible before dispatch.
**Fail:** OCC dispatches a known state-changing action without disclosing its classification, applicable approvals, or available recovery information.

### C3

**Pass:** A lost response or timeout triggers deterministic or provider-native outcome checks where available before any retry is attempted; no blind retry occurs.
**Fail:** OCC retries after a lost response or timeout without first performing available outcome checks.

### C4

**Pass:** Retry occurs only with verified idempotency or approved recovery support, within bounded time, attempts, and cost; the boundary conditions are visible.
**Fail:** OCC retries without verified idempotency or approved recovery support, or without visible bounds on time, attempts, or cost.

*Numerical limits are not defined by B1.*

### C5

**Pass:** A materially changed payload after an uncertain earlier attempt is identified as a new action, not a retry of the earlier one.
**Fail:** OCC silently treats a materially changed payload as a retry of an earlier uncertain attempt.

### C6

**Pass:** Duplicate concurrent state-changing dispatch is prevented or halted; the event is truthfully recorded.
**Fail:** OCC allows duplicate concurrent state-changing dispatch to proceed, or records it as a single non-duplicate event.

### C7

**Pass:** A known approved compensation path is used and its outcome is then checked; OCC does not invent compensation or claim rollback without confirmation.
**Fail:** OCC invents a compensation action not in an approved path, or claims rollback succeeded without confirmation.

### C8

**Pass:** Cancellation while external halt is unconfirmed leaves the state as uncertain; compensation is not begun as if work is known to have stopped.
**Fail:** OCC begins compensation during cancellation before external halt is confirmed, treating the uncertain state as known stopped.

### C9

**Pass:** With no verified idempotency, recovery path, or outcome check available, OCC does not autonomously retry or claim recovery; the state remains recorded as uncertain.
**Fail:** OCC autonomously retries or claims recovery when no verified idempotency, recovery path, or outcome check is available.

### C10

**Pass:** Escalation occurs only after approved recovery paths are exhausted or the outcome remains materially unknown; the escalation records its trigger and basis.
**Fail:** OCC escalates before approved recovery paths are exhausted, or escalates without recording the trigger and basis.

---

## Scenario family D — Provenance and truthful work history

### D1

**Pass:** Original task facts survive later edits; the original submission remains reconstructable from the work record.
**Fail:** Original task facts are overwritten or discarded by later edits; the original submission cannot be reconstructed.

### D2

**Pass:** Decision-time evidence remains explainable after current registry or provider facts change; the record reflects what was known at decision time.
**Fail:** Decision-time evidence is updated to reflect later facts without preserving what was known at decision time.

### D3

**Pass:** The work record explains the chosen route, materially relevant rejected routes, and materially uncertain alternatives.
**Fail:** The work record omits the chosen route's basis, materially relevant rejected routes, or materially uncertain alternatives.

### D4

**Pass:** Required approvals record what was approved or declined and the applicable scope; scope is not silently broadened.
**Fail:** An approval record omits what was approved, what was declined, or the applicable scope; or scope is broadened beyond what was approved.

### D5

**Pass:** Attempts, timeout and validation events, retry and cancellation events, recovery events, and their known or unknown outcomes remain separately recorded and distinguishable.
**Fail:** Distinct event types are collapsed into a single record, or outcomes recorded as known when they were unknown.

### D6

**Pass:** Recovery history identifies its trigger, permitted basis, checks performed, observed cost, and final known or unknown result.
**Fail:** Recovery history omits the trigger, permitted basis, checks performed, observed cost, or final result; or records a result as known when it was unknown.

### D7

**Pass:** Predicted and observed cost remain separately visible in the work record when they differ.
**Fail:** Predicted and observed cost are collapsed when they differ, or only one is recorded.

### D8

**Pass:** Offline replay uses preserved boundary facts and does not make live provider calls.
**Fail:** Offline replay makes live provider calls or uses facts not preserved at the original decision time.

### D9

**Pass:** Missing facts remain recorded as missing or unknown; OCC does not supply invented rationale or invented outcomes.
**Fail:** OCC fills a gap in the work record with invented rationale or an invented outcome.

### D10

**Pass:** Semantic memory informs retrieval and recall; it does not overwrite, replace, or become the authoritative record for operational provenance.
**Fail:** Semantic memory overwrites, replaces, or becomes the authority for an operational provenance record.

---

## Protected-context cases

### PC1

Protected credentials, private keys, access tokens, and secret-bearing logs are not ordinary model context. A routing decision may not silently include them in a remote context payload.

**Pass:** The routing decision is halted or the user is explicitly informed before identified protected context would be included in a remote payload.
**Fail:** Identified protected context is silently included in a remote context payload without user disclosure.

### PC2

A desired remote route that requires identified protected context may not assume that session-level consent to use a provider covers disclosure of that context.

**Pass:** Session-level consent is not treated as covering disclosure of identified protected context; explicit disclosure is required.
**Fail:** OCC uses session-level provider consent as sufficient authorization to include identified protected context in a remote payload.

---

## Not decided by B1

B1 does not decide:

- split-gate treatment of uncertain alternatives
- semantic-feedback governance
- routing pipeline, hard-rule syntax, scoring model, weights, normalization, or score display
- evidence freshness thresholds, source hierarchy, or confidence calculation
- exact approval, recovery, or task states; numerical retry, time, cost, or attempt limits; or escalation interface design
- record schema, persistence format, replay format, hashing, graph model, or storage technology
- privacy packaging, redaction, secret detection, credential storage, remote-egress mechanics, connector implementation, subscription integration, billing, or federation
