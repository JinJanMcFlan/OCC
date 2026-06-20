# OCC — Decisions Log

Active, still-true calls only. Overruled decisions are removed. History lives in git and the archive, not here.

---

## Active decisions

### HKB is a candidate parts donor, not OCC's destination

HKB is deconstructed and evaluated purely on OCC-fit. Take whatever genuinely helps build OCC well; leave the rest. No salvage for its own sake. OCC-fit is the only test.

### Auto-delegation must generalize

The router must handle any complex multi-part request. It must not be tuned to a specific example or task shape. The auto-delegation system is general by design.

### The five routing factors

The deciding logic weighs five inputs, each a user-adjustable weight on top of a schedule system that is peak-hour and batch-API aware:

1. Cost
2. Time / urgency
3. User presence (awake and reviewing vs. asleep and autonomous)
4. Model fit
5. Output quality tier

Non-urgent work can be deferred to off-peak windows or batch-API runs when that improves cost efficiency without violating user urgency or autonomy settings.

### The app is the brain; models are swappable drivers

The intelligence — routing, delegation, capability and pricing library, budget rules — lives in OCC. Any model can sit in any role. Model-agnostic by design.

### Routing is deterministic and capability-driven

Decided by a classifier and rule layer over a knowledge base of what each agent is good at and costs — not a large model rolling dice. Which agents exist is decoupled from how routing decides.

### OCC is standalone; it ships a VS Code connector plugin

OCC is IDE-scale and standalone. It reaches into the editor via an installable connector plugin, not by living inside VS Code.

### Storage direction: JSON / in-memory

No SQLite commitment. Current storage direction is JSON / in-memory.

### LiteLLM is not OCC product architecture

LiteLLM is a personal cost-saving config for the founder's own orchestrator slot — not a product requirement and not baked into OCC.

### No timelines. No "MVP" language. Acronyms uppercase.

Timelines are the founder's call alone — never suggested. Use benchmarks and milestones. All acronyms uppercase (OCC, HKB).

### `_system` is the canonical disk folder

`_system` is the canonical disk folder for active project-source docs mirrored manually into ChatGPT project sources. Changes on disk are manually re-uploaded. The disk is the source of truth.

### OCC's research engine covers two domains

OCC's research engine includes both market and capability intelligence (providers, models, pricing, tools, benchmarks, APIs, opportunities) and frontier solution research (longer-running objectives, hypotheses, evidence, contradictions, experiments, and research lanes).

### Cognitive consolidation is a living founder hypothesis

Cognitive consolidation — that useful general intelligence may emerge from consolidating fragmented models, tools, memory, evaluators, research engines, and execution environments into a coordinated system — is a research pillar and working hypothesis. It is not a proven claim and not a locked implementation dependency.

### Research direction is evidence-governed

Research direction may deepen, redirect, park, or integrate based on findings. No arbitrary ceiling on hypotheses; no architecture dependency without evidence.

### Initial app-shell runtime: Electron Forge, Vite, React, TypeScript

OCC's first standalone desktop shell uses Electron Forge, Vite, React, and TypeScript. This selects the initial desktop application runtime only; it does not lock provider, model, router, storage, connector, or shared-record architecture.
