# B1 — Router Scenario Corpus Handoff [OCC]

**Date:** 2026-06-23
**Artifact:** `_research\benchmarks\B1-ROUTER-SCENARIO-CORPUS.md`
**Status:** Complete — scenario-level behavior corpus, not architecture

---

## What B1 is

B1 is a scenario corpus that defines observable pass/fail routing behavior for the OCC router. It is not an architecture document and does not authorize router-core implementation.

B1 establishes behavior boundaries across five areas:

- **Customer-outcome routing** — OCC must not steer toward revenue-favored routes over verified customer-owned, local, or lower-cost routes that meet requirements; subscription-backed routes require verified availability and honest constraint labelling; unavailable customer routes are disclosed rather than silently bypassed.
- **Evidence-confidence visibility** — routing decisions must show the source, freshness, and confidence of capability, pricing, availability, and privacy evidence; stale or conflicting evidence does not support confirmed-route claims; operational observations and semantic-quality judgments remain distinct.
- **State-changing recovery safety** — uncertain-effect actions are treated as potentially state-changing; outcome checks precede any retry; retry is bounded and requires verified idempotency or approved recovery support; escalation follows exhausted approved paths.
- **Truthful provenance** — original task facts, decision-time evidence, approval scope, attempt and recovery events, and predicted versus observed cost remain separately recorded and reconstructable; semantic memory does not overwrite operational provenance.
- **Protected-context routing** — identified protected credentials, keys, tokens, and secret-bearing logs may not be silently included in remote context payloads; session-level consent is not sufficient authorization for disclosure.

---

## What B1 does not resolve

Two MainOrch decisions remain open and are explicitly outside B1's scope:

- **Split-gate interpretation** — how uncertain or potentially better alternative routes are treated at execution boundaries is not ratified.
- **Semantic-feedback governance** — whether and how task-specific semantic-quality evidence eventually propagates to route confidence is not ratified.

Both must be resolved before B2 and D1 can proceed.

---

## What D1 still requires before router-core implementation

1. MainOrch decisions on split-gate interpretation and semantic-feedback governance.
2. Translation of B1 scenarios into measurable test cases through B2 benchmark planning.
3. Current capability and provider evidence at build time — the registry is stale and must be refreshed.
4. MainOrch-approved technical and build boundary choices covering routing pipeline, scoring, record schema, storage, recovery ladder, and escalation interface.

---

## B1 does not authorize router-core implementation.
