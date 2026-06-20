# OCC Architecture Decision — Router Reconciliation

**Status:** Active architecture direction. Research queue paused pending research portfolio reconciliation.

---

## Controlling principle

The 2026-05-01 delegation synthesis is useful input, not doctrine. It predates OCC's current framing and contains overbuilt assumptions, framework commitments, and stale model references that OCC does not adopt. Where it is useful, it is incorporated. Where it overreaches, it is cut.

OCC's router must be a general auto-delegation system for any complex multi-part request. It must never be designed around one example, one test, one provider, one model, one workflow, or one hardcoded task shape.

---

## Router direction

OCC should use a hybrid deterministic router with this pipeline:

```
Classifier → Capability Registry → Cost Layer → Scheduler → Weighted Scoring → Hard-Rule Gates → Decision Logging → Outcome Feedback
```

1. **Classifier** extracts structured task facts from the request.
2. **Capability Registry** provides what each agent, model, and tool can do, its costs, and its current availability.
3. **Cost Layer** estimates spend and tracks actual spend against estimates.
4. **Scheduler** decides timing: run now, defer, batch, queue for user presence, hold for dependency, or split live vs. deferred. The scheduler is peak-hour and batch-API aware. Non-urgent work can be deferred to off-peak windows or batch-API runs when that improves cost efficiency without violating user urgency or autonomy settings.
5. **Weighted Scoring** scores candidate routes using the five routing factors.
6. **Hard-Rule Gates** override scoring when required: tool access, file access, budget cap, context limit, reversibility limit, required approval, or provider availability.
7. **Decision Logging** records every routing decision as structured data.
8. **Outcome Feedback** uses results, failures, and corrections to update the Capability Registry over time.

---

## The five routing factors

These are locked. Each is a user-adjustable weight on top of the schedule system:

1. Cost
2. Time / urgency
3. User presence (awake and reviewing vs. asleep and autonomous)
4. Model fit
5. Output quality tier

---

## What is not mandatory

No named framework, provider, model list, or protocol is required by this document. The pipeline above defines logical components and their order. Implementation choices — specific libraries, classification methods, storage format, scheduling engine — are open decisions to be made when evidence supports them.

Cut from prior research packets:
- RouteLLM, LangGraph, MCP, RAG-Reflect, SimRAG, NIST compliance framing as first-build requirements
- Fixed model names or pricing as hardcoded values
- Enterprise compliance framing as a core product requirement
- "Mathematically guaranteed" determinism claims

---

## UI and graph data implications

The router's decision log must support graph-based display. Task and delegation records must capture:

- Parent/child relationships
- Dependency and blocker relationships
- Approval state and approval requirement
- Task state (queued, running, waiting for user, waiting for dependency, deferred, blocked, failed, complete, cancelled)
- Output and input references
- Agent run assignments
- Cost estimate and actual cost
- Routing rationale

Presentation Mode, Mind Map View, and queue views must all read from this same underlying task/delegation data. If the router does not log real relationships now, the graph view becomes decoration later.

---

## Research queue status

The targeted research queue from the prior version of this document has been archived outside the OCC repository at:
`D:\studio-tools\_orchestrator-only\OCC\historical-records\superseded-router-prompt-drafts\`

Research is paused pending broader research portfolio reconciliation. The next step is to reconcile the router architecture direction with OCC's expanded research-engine direction before deciding the revised bounded research queue.

No research prompts belong in this document.
