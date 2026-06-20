# OCC — Current State

**Last updated:** 2026-06-20
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

**Base UX desktop shell** is built and validated. An isolated, locally runnable desktop shell exists at `apps\occ-desktop\` using Electron Forge, Vite, React, and TypeScript. It implements the four-panel Base UX layout (left: projects and conversation tree; center: command thread and composer; right: local controls and status placeholders; bottom: queue with five visual states). This shell is intentionally isolated from router, data, and provider architecture — all of which remain unimplemented and locked pending research. Boundary document: `_architecture\BASE-UX-SHELL-BOUNDARY.md`.

---

## Active direction

**Main ResearchOrch direction** is active. OCC's research engine covers both market and capability intelligence and longer-running frontier solution research.

**Targeted research is paused** while the research portfolio is reconciled. `_research\prompts\` contains only a README; no active research prompts are approved yet. New bounded research prompts must be produced by the responsible orchestrator chat.

---

## Current work order

1. Documentation and Git baseline — complete.
2. Research portfolio reconciliation.
3. Revised bounded research queue.
4. Research runs.
5. Build plan using benchmarks, not timelines.
6. Base UX refinement in parallel — initial shell complete.

---

## What is not yet built

- Router-core architecture is unimplemented and locked pending router research completion.
- No OCC v1 scope has been defined.
- Model and provider registry is stale; refresh at build time.
- No real provider, model, cost, or API integration.
- No real filesystem folder binding.
- No VS Code connector.
- No persistence or database.
- OCC's ChatGPT project container must be kept in sync with `_system` on disk.
