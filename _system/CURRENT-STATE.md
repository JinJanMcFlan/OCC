# OCC — Current State

**Last updated:** 2026-06-21
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

**Documentation consolidation and Git baseline** are complete. All active `_system` documents have been rewritten. Historical foundation records are archived at `_archive\foundation-records\`. Restricted orchestration-only historical material is stored outside the OCC repository.

**Bounded router research queue R1–R5** is complete, audited, preserved, committed, and pushed. All five research runs are preserved under `_research\findings\`. The final synthesis audit is at `_research\findings\ROUTER-RESEARCH-SYNTHESIS-AUDIT.md`. The router completion handoff is at `_handoffs\ROUTER-RESEARCH-COMPLETION-HANDOFF.md`. Router-research completion checkpoint: commit `099b9ae`.

**Base UX desktop shell** is built and validated. An isolated, locally runnable desktop shell exists at `apps\occ-desktop\` using Electron Forge, Vite, React, and TypeScript. It implements the four-panel Base UX layout (left: projects and conversation tree; center: command thread and composer; right: local controls and status placeholders; bottom: queue with five visual states). This shell is intentionally isolated from router, data, and provider architecture — all of which remain unimplemented and locked pending research. Accepted initial app-shell checkpoint: commit `28384c2`. Boundary document: `_architecture\BASE-UX-SHELL-BOUNDARY.md`.

---

## Active direction

**Main ResearchOrch direction** is active. OCC's research engine covers both market and capability intelligence and longer-running frontier solution research.

**Research Direction v1.1 and the Research Operations protocol are now active.** External research remains paused pending `A2 — R1–R5 Research Posture Audit [OCC]`. `_research\prompts\` contains only a README; no active research prompts are approved yet. New bounded research prompts must be produced by the responsible orchestrator chat.

---

## What can continue now

Core router implementation remains blocked pending a MainOrch-approved Router Build Package. Work that may proceed:

- Static and mock Base UX work within the approved app-shell boundary
- Routing test-case preparation
- Folder-binding and connector planning
- Benchmark preparation
- Reversible scaffolding that does not lock core router architecture

---

## Current work order

1. Manually re-upload changed `_system` files to the ChatGPT OCC project sources.
2. Run `A2 — R1–R5 Research Posture Audit [OCC]`.
3. Revise and seek approval for the dependency-aware R6–R21 portfolio.
4. Create the approved human dependency map.
5. Launch approved independent research waves while reversible Base UX work continues.

---

## What is not yet built

- Router-core architecture is unimplemented and locked pending a MainOrch-approved Router Build Package.
- Final router logic, shared record model, scoring formula, storage changes, automatic rerouting, and automatic semantic confidence updates are not approved.
- No OCC v1 scope has been defined.
- Model and provider registry is stale; refresh at build time.
- No real provider, model, cost, or API integration.
- No real filesystem folder binding.
- No VS Code connector.
- No persistence or database.
- OCC's ChatGPT project container must be kept in sync with `_system` on disk.
