# MainOrch Restart Handoff — OCC

**Date:** 2026-06-23
**Purpose:** Clean restart for the next MainOrch chat following B1 completion and stale-context failure in the prior MainOrch chat. This document carries verified state across the restart boundary. `_system` remains canonical; read the full `_system` file set for authoritative detail.

---

## 1. Verified B1 completion

`B1 — Router Scenario Corpus [OCC]` is complete and durable.

- **Artifact:** `_research\benchmarks\B1-ROUTER-SCENARIO-CORPUS.md`
- **Handoff:** `_handoffs\B1-ROUTER-SCENARIO-CORPUS-HANDOFF.md`
- **Completion commit:** `d3c4450`, pushed to `origin/main`, clean working tree confirmed.

B1 establishes observable pass/fail routing behavior across five areas: customer-outcome routing, evidence-confidence visibility, state-changing recovery safety, truthful provenance, and protected-context routing.

B1 does not ratify router architecture, scoring model, storage, recovery mechanics, connector implementation, privacy packaging, credentials, B2 scope, D1 scope, or router code.

---

## 2. SubOrch#5 closure

`(Base UX command thread) SubOrch#5 [OCC]` is formally closed.

Jonathan performed the final manual acceptance check:

- Enter sends. ✓
- Shift+Enter inserts a newline. ✓

SubOrch#5's original task is finished. It must not receive unrelated work. The Command Thread is presentation-only, static, and local — the strict implementation boundary in `_architecture\BASE-UX-SHELL-BOUNDARY.md` is preserved.

---

## 3. TaskRunner#3 status

TaskRunner#3 completed B1. It remains open as the operational research/benchmark lane and is waiting for its next contained assignment.

**Proposed next assignment: `A7 — Router Governance Decision Brief [OCC]`**

A7 is internal decision support only. It should translate existing R7/A3, R8/A4, R9/A5, founder direction, and B1 scenarios into founder-readable alternatives, defaults, risks, and consequences for:

- Split-gate interpretation (how uncertain or potentially better alternatives are treated at execution boundaries)
- Semantic-feedback governance (whether and how task-specific semantic-quality evidence eventually propagates to route confidence)

A7 constraints:
- No external research launch
- No code
- No architecture ratification
- No ratification of B2 scope or D1 scope
- A7 is not started by this restart handoff

---

## 4. Two unresolved decisions and why they remain unresolved

### Split-gate interpretation

How OCC treats uncertain or potentially better alternative routes at execution boundaries is unresolved. B1 establishes pass/fail scenarios but deliberately does not define gate logic. No technical design, scoring model, or routing pipeline has been approved. MainOrch must decide this before B2 benchmark planning and D1 can proceed.

### Semantic-feedback governance

Whether and how task-specific semantic-quality evidence eventually propagates to route confidence is unresolved. B1 scenario B9 explicitly notes this remains an open MainOrch decision. The founder briefing cycle surfaced strong customer-outcome and truthfulness requirements but did not ratify a feedback mechanism. MainOrch must decide this before B2 and D1 can proceed.

Both decisions require the A7 decision brief before they can be settled by MainOrch.

---

## 5. Research queue status

**Complete:** R1–R5, R7, R8, R9, and R15.

**Deferred:** R6, pending a future live provider-capacity check. R6 did not run because Gemini reached its daily Deep Research limit before it could start. R6 must not displace build-critical research when capacity returns.

**Conditional / not launched:** R10–R14 and R16–R21. None of these are launched or approved. None may be treated as active research runs.

No external research was launched during this reconciliation. No conditional item is approved for automatic launch.

---

## 6. New non-binding research candidate (seventh)

A seventh non-binding founder-derived research candidate has been added to `_system\RESEARCH-DIRECTION.md`:

**Self-updating intelligence governance, privacy tiers, and local-versus-shared operational learning.**

Governing principles preserved in the document:

- OCC Global may distribute centrally researched public/provider intelligence updates.
- A local OCC compares those updates against its own local reality (hardware, models, observed latency/cost, privacy posture, user budget, preferences, verified evidence). Global intelligence informs local routing; it never silently overrides the user's local reality.
- A private/local-only user can receive public intelligence updates without contributing project content, prompts, outputs, credentials, filenames, logs, or work history back to OCC.
- Any shared operational learning is a separate, explicit future opt-in requiring data minimization, clear explanation, privacy review, and user control.
- Frequent refresh for popular fast-moving providers/models is a future operational possibility, potentially daily from public/official sources; exact cadence is not a ratified current requirement.

This candidate is non-binding. It does not delay A7, B2 definition, D1, or router implementation. It requires a dedicated research packet and approval before launch. It is not a current implementation commitment or a finalized privacy-tier product design.

---

## 7. Next sequencing

```
A7 (decision brief) →
MainOrch decisions on split-gate and semantic-feedback governance →
Define B2 if needed (no approved scope yet) →
D1 (Router Build Package) →
Bounded router implementation
```

Do not skip or reorder this sequence. D1 and router-core implementation remain blocked until the unresolved decisions and any required benchmark and acceptance work are complete.

---

## 8. What was not authorized in this reconciliation

- No router code was written or authorized.
- No external research was launched.
- No new architecture was designed or ratified.
- No B2 scope was defined.
- No D1 scope was defined.
- A7 was proposed but not started.
- No conditional research items (R10–R14, R16–R21) were approved for launch.

---

*Canonical detail: `_system\CURRENT-STATE.md`, `_system\MAINORCH-HANDOFF.md`, `_system\DECISIONS.md`*
*B1 artifact: `_research\benchmarks\B1-ROUTER-SCENARIO-CORPUS.md`*
*B1 handoff: `_handoffs\B1-ROUTER-SCENARIO-CORPUS-HANDOFF.md`*
*Base UX completion: `_handoffs\BASE-UX-COMMAND-THREAD-COMPLETION-HANDOFF.md`*
