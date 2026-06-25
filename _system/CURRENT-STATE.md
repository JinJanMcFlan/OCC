# OCC — Current State

**Last updated:** 2026-06-24 (Functional Core fast-track; B2 deferred)
**Read order:** `OCC-ALIGNMENT.md` (identity) → this file (where we are) → `DECISIONS.md` (active calls).

---

## Foundation

`_system` is the canonical disk source for documents mirrored manually into ChatGPT project sources. Claude Code receives task-specific execution prompts only; it does not receive a full project-source mirror.

---

## Completed work

**Router reconciliation** is complete. The architecture decision document lives at:
`D:\studio-tools\OCC\_architecture\ROUTER-RECONCILIATION.md`

**App Visuals** produced major working direction. The raw design handoff is preserved at:
`D:\studio-tools\OCC\_design\OCC-UI-Visual-Direction-Handoff.txt`
A consolidated shared-source summary lives at `_system\APP-VISUAL-DIRECTION.md`.

**App Visuals direction has expanded into a documented Living Workspace direction.** The founder's intent is now preserved verbatim and distilled into internal principles at `_system\FOUNDER-DIRECTION.md`. The detailed visual and product direction handoff lives at `_design\OCC-LIVING-WORKSPACE-DIRECTION.md`. Concept-image exploration is the next creative step for this lane. This is unbuilt visual and product direction — it is not current functional app behavior and does not affect the static shell boundary. B2 remains the next router-governance work item and is a separate lane.

**Documentation consolidation and Git baseline** are complete. All active `_system` documents have been rewritten. Historical foundation records are archived at `_archive\foundation-records\`. Restricted orchestration-only historical material is stored outside the OCC repository.

**Bounded router research queue R1–R5** is complete, audited, preserved, committed, and pushed. All five research runs are preserved under `_research\findings\`. The final synthesis audit is at `_research\findings\ROUTER-RESEARCH-SYNTHESIS-AUDIT.md`. The router completion handoff is at `_handoffs\ROUTER-RESEARCH-COMPLETION-HANDOFF.md`. Router-research completion checkpoint: commit `099b9ae`.

**Wave 1 external research (R7, R8, R9, R15)** is complete, internally audited, committed, and pushed.

- R7 — Capability Evidence Freshness and Update Governance [OCC], audited as A3
- R8 — Safe State-Changing Dispatch and Recovery Patterns [OCC], audited as A4
- R9 — Lightweight Work Provenance and Replay Design [OCC], audited as A5
- R15 — Folder Context and Local-First Privacy Boundary [OCC], audited as A6

Raw-research preservation commit: `513b108`. Audit commit: `8972d23`. R6 did not start because Gemini reached its daily Deep Research limit before R6 could run; R6 is deferred pending restored external capacity. R10–R14 and R16–R21 remain conditional and must not be treated as launched or approved.

Detailed handoff: `_handoffs\WAVE-1-RESEARCH-STATUS-HANDOFF.md`

**Founder Research Briefings Wave 1** is complete for R7, R8, R9, and R15. The briefing cycle produced approved founder-level product and policy direction covering customer-outcome advocacy, Protected / Smart Default privacy, state-changing recovery, local-first deep memory, truthful provenance, canonical project context, scoped connector access, cost-aware legitimate access, and standardized connector direction. Outcome handoff: `_handoffs\FOUNDER-BRIEFINGS-WAVE-1-OUTCOME-HANDOFF.md`.

**B1 — Router Scenario Corpus [OCC]** is complete and durable. Artifact: `_research\benchmarks\B1-ROUTER-SCENARIO-CORPUS.md`. Handoff: `_handoffs\B1-ROUTER-SCENARIO-CORPUS-HANDOFF.md`. Completion commit: `d3c4450`, pushed to `origin/main`. B1 establishes behavior-level scenarios only. It does not ratify router architecture, scoring, storage, recovery mechanics, connector implementation, privacy packaging, credentials, B2, D1, or router code.

**A7 — Router Governance Decision Brief [OCC]** is complete and ratified. Artifact: `_research\findings\A7-ROUTER-GOVERNANCE-DECISION-BRIEF.md`. Split-gate governance and semantic-feedback governance decisions are both ratified by MainOrch and Jonathan. B2 is required next to turn the ratified behavior claims into bounded measurable tests before D1, but B2 has no approved scope yet. D1 and router-core remain blocked pending B2 and later MainOrch approval. No candidate research item has been launched or authorized.

**Base UX desktop shell** is built and validated. An isolated, locally runnable desktop shell exists at `apps\occ-desktop\` using Electron Forge, Vite, React, and TypeScript. It implements the four-panel Base UX layout (left: projects and conversation tree; center: command thread and composer; right: local controls and status placeholders; bottom: queue with five visual states). This shell is intentionally isolated from router, data, and provider architecture — all of which remain unimplemented and locked pending research. Accepted initial app-shell checkpoint: commit `28384c2`. Boundary document: `_architecture\BASE-UX-SHELL-BOUNDARY.md`.

**Base UX Command Thread** is complete and mounted in the live Electron shell. The development shell can be launched at any time through `._Human\OCC Dev Launch.cmd` (resolves to `apps\occ-desktop` and runs `npm run start`; terminal stays open while the app is running). The mounted Command Thread provides a compact project/conversation context bar, a persistent truthful status line (`UI preview — response engine not connected`), a selected local preview thread, local loading/empty/unavailable states, and a composer with standard keyboard behavior (Enter sends; Shift+Enter inserts a newline; IME composition does not accidentally send; empty or whitespace-only input disables Send). Local send appends only the user's text to temporary in-memory UI state and clears the composer. The thread is intentionally presentation-only, static, and local — no routing, provider, task, file, background-work, network, IPC, persistence, or external-action behavior. TypeScript and lint both passed. Visual launch was confirmed before the final shortcut correction. Jonathan performed the final manual keyboard acceptance check: Enter sends; Shift+Enter inserts a newline. SubOrch#5 is formally closed. Commits: `534e113`, `9fbc25c`, `19a2fb8`, `a20e851`, `62fd02e`.

Known intentionally unbuilt Base UX areas (not defects; not approved build scope):

- Meaningful Project and Conversation Navigator
- Real project and conversation data
- Resizable shell-panel layout
- Functional Controls/Status content
- Meaningful Queue content
- Provider and inference connection
- Router, persistence, filesystem/folder binding, task semantics, approvals, real history, and cross-thread dependency behavior

---

## Active direction

**Main ResearchOrch direction** is active. OCC's research engine covers both market and capability intelligence and longer-running frontier solution research.

**Research Direction v1.1 and `RESEARCH-OPERATIONS.md` are active** and mirrored into the ChatGPT OCC project sources. Wave 1 external research (R7, R8, R9, R15) is complete and audited. R6 is deferred pending restored external capacity. R10–R14 and R16–R21 are conditional and must not be treated as launched or approved.

**Founder Research Briefings [OCC]** completed its Wave 1 R7/R8/R9/R15 founder-briefing cycle and returned approved founder-level product and policy direction. It did not launch research, write external prompts, edit files, or ratify technical architecture.

Approved founder-level direction now includes customer-outcome advocacy over OCC revenue; Protected / Smart Default privacy with protected-secret handling; no blind retry for state-changing work plus bounded validation and recovery; local-first deep memory distinct from truthful provenance; canonical project context on disk with scoped connected-tool access; cost-aware legitimate access with manual model choice; and standardized connector direction that respects official interfaces.

These directions shape B1 scenarios and later decision work. Implementation mechanisms remain open unless explicitly decided in `DECISIONS.md`.

**Sellable-alpha, budget, and trust direction** is approved direction. OCC alpha should save meaningful time and generate real outputs worth paying for. The internal quality bar is that a user can request a bounded build, such as a creatively distinct simple game based on a reference, and OCC should materially progress or complete it autonomously while the user is away.

This quality bar is not a promise of an already-completed capability, not a finalized v1 specification, and not public capability language.

Preferred customer experience is one OCC account, one setup, managed multi-provider access, and a clear customer-controlled spending budget. Optional customer API keys and local AI are supported direction. Customer-owned capacity should lower OCC's fee/take for that usage and may be preferentially weighted by the user.

Routing must serve customer budget, quality, outcome, and stated preference rather than hidden margin. Budget controls are launch-critical: visible spend, forecasts and explanations, limits at user/project/task/workspace levels, approval gates for costly work, alerts, hard stops, and kill-switch behavior.

There is no unlimited managed frontier-model promise.

Security must be developed as costed phases later: founder/alpha baseline, launch hardening, then high-security local/infrastructure operations. Current known baseline gaps include password-management and broader operational-security maturity.

The distinction stays explicit: this is approved direction, not finalized pricing, architecture, legal terms, security certification, or implemented capability.

---

## What can continue now

`D1 — OCC Functional Core Build Plan` may now be prepared. Router-core implementation is no longer blocked by B2. All work remains subject to the limited safety spine defined in `_system\OCC-FUNCTIONAL-CORE-FAST-TRACK-ROADMAP.md` and the forthcoming Functional Core Build Plan.

- Functional Core Build Plan (D1) preparation
- Static and mock Base UX work within the approved app-shell boundary
- App Visuals creative lane (separate, does not consume Functional Core resources)

---

## Current work order

1. Manually re-upload the updated `_system` folder to the ChatGPT OCC project sources.
2. SubOrch#5 is complete and closed.
3. B1 is complete and durable.
4. A7 is complete and ratified. Split-gate and semantic-feedback governance are resolved.
5. Pre-build router benchmark planning is superseded. `B2 — Post-Build Router Validation Inventory` is deferred until OCC is internally usable.
6. `D1 — OCC Functional Core Build Plan` may now be prepared. Router-core implementation is no longer blocked by B2, but remains subject to the limited safety spine and the forthcoming Functional Core Build Plan.
7. App Visuals remains a separate creative lane and is unaffected by the fast-track.
8. No candidate research item was automatically launched.

---

## What is not yet built

- Router-core architecture is unimplemented and locked pending a MainOrch-approved `D1 — Router Build Package [OCC]`.
- `A7 — Router Governance Decision Brief [OCC]` is complete. Split-gate and semantic-feedback governance are ratified.
- Final router logic, shared record model, scoring formula, storage changes, automatic rerouting, and automatic semantic confidence updates are not approved.
- B2 is deferred as the post-build validation inventory; it does not gate D1 or router-core implementation.
- The seven founder-derived research candidates are not active research runs, not router implementation scope, and do not delay A7, B2, D1, or router implementation by default.
- No OCC v1 scope has been defined.
- Model and provider registry is stale; refresh at build time.
- No real provider, model, cost, or API integration.
- No real filesystem folder binding.
- No VS Code connector.
- No persistence or database.
- Managed multi-provider access, BYOK/local-AI usage treatment, customer-visible budget controls, and kill-switch behavior are not implemented yet.
- Pricing, packaging, legal terms, security certification, and external security language are not finalized.
- OCC's ChatGPT project container must be kept in sync with `_system` on disk.
