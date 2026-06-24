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

### Customer-outcome advocacy and cost integrity

OCC optimizes for the customer's actual outcome: privacy, cost, quality, control, and reliable completion, not OCC revenue or hidden margin.

OCC must not steer users toward OCC-paid API usage merely because OCC makes more money. It should favor customer-owned API keys, local models, existing legitimate subscriptions, and other lower-cost legitimate routes whenever those genuinely serve the user better.

OCC must not become merely an API manager. This is approved product direction, while exact pricing, routing weights, billing treatment, and implementation mechanics remain open.

### Sellable alpha and customer trust direction

Sellable alpha means a user can pay because OCC saves meaningful time and generates real outputs worth paying for.

The internal quality bar is that a user can request a bounded build, such as a creatively distinct simple game based on a reference, and OCC should materially progress or complete it autonomously while the user is away. This is not a promise of an already-completed capability and does not force a fuller v1 specification now.

Preferred customer experience is one OCC account, one setup, managed multi-provider access, and a clear customer-controlled spending budget.

Optional customer API keys and local AI are supported direction. Customer-owned capacity should lower OCC's fee/take for that usage and may be preferentially weighted by the user.

Routing must serve customer budget, quality, outcome, and stated preference rather than hidden margin.

Budget controls are launch-critical: visible spend, forecasts and explanations, limits at user/project/task/workspace levels, approval gates, alerts, hard stops, and kill-switch behavior.

OCC must not promise unlimited managed frontier-model usage.

This is approved direction, not finalized pricing, architecture, legal terms, security certification, or implemented capability.

### Protected / Smart Default privacy posture

OCC is agentic inside the privacy rules selected by the user. It should not constantly interrupt users with routine privacy popups.

Sensitive project context should prefer local processing or verified safer remote routes. Highly sensitive credentials, private keys, access tokens, and secret-bearing logs are protected context: they must never be treated as ordinary model context or silently sent remotely.

A rare, clear exception prompt is appropriate only when a genuinely heavy or important task cannot reasonably complete locally and would require remote processing of identified sensitive context.

Local redaction, tokenization, privacy-preserving task packaging, and data-egress controls remain future research. Replacing names does not automatically make a task safe.

No credential-storage solution is approved. Credential storage and handling require dedicated research plus expert-grade implementation and review before any build commitment.

### Local-first deep memory and truthful provenance

OCC's intended direction is persistent, local-first continuity across chats, providers, projects, and task history, so changing models does not erase useful context.

Deep memory is the expected default. Users must later be able to reduce its scope, erase it, or disable it.

Keep semantic/RAG memory distinct from provenance and work history. Semantic/RAG memory supports useful recall; provenance records what was requested, what changed, why OCC routed work, what was sent, what happened, what it cost, and what was approved.

Exact storage, index, retention, deletion, and retrieval choices remain open. Customer contribution of content or diagnostic patterns to improve OCC must be voluntary, honest, plainly explained, and opt-in whenever meaningful user content is involved. This is future policy and research work, not an approved telemetry program.

### The app is the brain; models are swappable drivers

The intelligence — routing, delegation, capability and pricing library, budget rules — lives in OCC. Any model can sit in any role. Model-agnostic by design.

### Routing is deterministic and capability-driven

Decided by a classifier and rule layer over a knowledge base of what each agent is good at and costs — not a large model rolling dice. Which agents exist is decoupled from how routing decides.

### OCC is standalone; it ships a VS Code connector plugin

OCC is IDE-scale and standalone. It reaches into the editor via an installable connector plugin, not by living inside VS Code.

### Canonical project context and scoped connector access

One canonical project lives on the user's disk. OCC coordinates how connected AI tools see that project, reducing repeated manual upload into separate AI tools.

Candidate access model: controlled task packages are the normal safe baseline; trusted native workspace connectors may receive user-approved scoped project access; managed sync/publish routes may be used where an official platform supports them; bounded task-package handoff remains the fallback where direct access or sync is unavailable.

OCC must never assume a connected tool receives the whole project. Explicit connector permissions include project scope for one selected project and system scope across eligible OCC projects and broader delegated work.

System scope requires stronger intentional confirmation: a clear consequence screen, required acknowledgement checkbox, and a final deliberate action. Even broad connector scope does not automatically include credentials, private keys, or protected secret areas.

These are approved access principles; connector protocol design, sync implementation, and storage mechanics remain open.

### Storage direction: JSON / in-memory

No SQLite commitment. Current storage direction is JSON / in-memory.

### LiteLLM is not OCC product architecture

LiteLLM is a personal cost-saving config for the founder's own orchestrator slot — not a product requirement and not baked into OCC.

### Cost-aware legitimate access and manual model choice

OCC should recognize approved customer-owned API keys, local models, legitimate subscription-backed routes, and coding tools.

For normal chat, users should retain manual model choice. API-backed choices should show an honest predicted cost based on prompt, context, and output estimates. Subscription-backed routes should be labelled as included under the user's subscription, subject to provider availability, official constraints, and rate limits.

OCC must not promise unlimited subscription access or imply that OCC may legally proxy third-party subscriptions. Subscription integration details remain open.

### Standardized connector direction and official-interface boundary

OCC should move toward a standardized connector/provider framework covering capability description, scoped permissions, auditability, revocation, safe task delivery, result ingestion, and official-interface boundaries.

OCC research may discover and recommend possible connectors. OCC must not silently install unverified connectors, grant itself permissions, bypass official interfaces, or broaden user access without authorization.

This is approved direction for future connector evaluation; it is not a connector implementation, protocol commitment, or source-code authorization.

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

OCC must not blindly retry state-changing work or claim automatic rollback unless idempotency, rollback behavior, or an explicit approved recovery plan is known before execution.

For state-changing actions, OCC should validate what actually happened through cheap deterministic or provider-native checks where available; retry only when verified idempotency or approved recovery support exists; avoid spending model tokens on routine validation; remain within bounded time, attempt, and cost limits; and escalate to the user only after approved recovery paths are exhausted or the outcome remains materially unknown.

The exact recovery ladder, limits, idempotency registry, and technical architecture remain open. This direction shapes B1 scenarios but does not authorize implementation.

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
