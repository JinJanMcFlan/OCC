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

### Sellable alpha and customer trust direction

Sellable alpha means a user can pay because OCC saves meaningful time and generates real outputs worth paying for.

The internal quality bar is that a user can request a bounded build, such as a creatively distinct simple game based on a reference, and OCC should materially progress or complete it autonomously while the user is away. This is not a promise of an already-completed capability and does not force a fuller v1 specification now.

Preferred customer experience is one OCC account, one setup, managed multi-provider access, and a clear customer-controlled spending budget.

Optional customer API keys and local AI are supported direction. Customer-owned capacity should lower OCC's fee/take for that usage and may be preferentially weighted by the user.

Routing must serve customer budget, quality, outcome, and stated preference rather than hidden margin.

Budget controls are launch-critical: visible spend, forecasts and explanations, limits at user/project/task/workspace levels, approval gates, alerts, hard stops, and kill-switch behavior.

OCC must not promise unlimited managed frontier-model usage.

This is approved direction, not finalized pricing, architecture, legal terms, security certification, or implemented capability.

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

### State-changing retry boundary

OCC must not blindly retry state-changing work or claim automatic rollback unless idempotency, rollback behavior, or an explicit approved recovery plan is known before execution. Read-only and reversible work may use later-approved cautious fallback behavior.

### Composer keyboard convention: Enter sends; Shift+Enter inserts a newline

Enter sends the message; Shift+Enter inserts a newline. This is OCC's default familiar AI-chat interaction pattern. Ctrl/Cmd+Enter is not the primary required send shortcut. A user preference toggle for this basic behavior must not be added at this stage.

### Security is phased, not a completed assurance claim

Security must be developed as costed phases later: founder/alpha baseline, launch hardening, then high-security local/infrastructure operations.

Current known baseline gaps include password-management and broader operational-security maturity.

Security direction must not be turned into current marketing language, a completed assurance claim, or a certification claim without later evidence and approval.

---

## Pending MainOrch decisions — not architecture yet

- **Split-gate interpretation:** binding execution constraints may block a route, while uncertain or potentially better alternatives must remain visible as exploration candidates rather than silently disappearing. Not ratified.
- **Semantic-feedback governance:** direct operational facts may update automatically; semantic capability judgments remain task-specific, traceable, gradual, and review-supported. Not ratified.
