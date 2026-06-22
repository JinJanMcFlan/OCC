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

**Wave 1 external research (R7, R8, R9, R15)** is complete, internally audited, committed, and pushed.

- R7 — Capability Evidence Freshness and Update Governance [OCC], audited as A3
- R8 — Safe State-Changing Dispatch and Recovery Patterns [OCC], audited as A4
- R9 — Lightweight Work Provenance and Replay Design [OCC], audited as A5
- R15 — Folder Context and Local-First Privacy Boundary [OCC], audited as A6

Raw-research preservation commit: `513b108`. Audit commit: `8972d23`. R6 did not start because Gemini reached its daily Deep Research limit before R6 could run; R6 is deferred pending restored external capacity. R10–R21 remain conditional and none are launched or approved.

Detailed handoff: `_handoffs\WAVE-1-RESEARCH-STATUS-HANDOFF.md`

**Base UX desktop shell** is built and validated. An isolated, locally runnable desktop shell exists at `apps\occ-desktop\` using Electron Forge, Vite, React, and TypeScript. It implements the four-panel Base UX layout (left: projects and conversation tree; center: command thread and composer; right: local controls and status placeholders; bottom: queue with five visual states). This shell is intentionally isolated from router, data, and provider architecture — all of which remain unimplemented and locked pending research. Accepted initial app-shell checkpoint: commit `28384c2`. Boundary document: `_architecture\BASE-UX-SHELL-BOUNDARY.md`.

---

## Active direction

**Main ResearchOrch direction** is active. OCC's research engine covers both market and capability intelligence and longer-running frontier solution research.

**Research Direction v1.1 and `RESEARCH-OPERATIONS.md` are active** and mirrored into the ChatGPT OCC project sources. Wave 1 external research (R7, R8, R9, R15) is complete and audited. R6 is deferred pending restored external capacity. R10–R21 are conditional and must not be treated as launched or approved.

**Founder Research Briefings [OCC]** is an authorized conversational lane. It begins with R7/A3 (privacy and provider-evidence governance), covers one research topic at a time, and produces concise founder-position handoffs. It does not launch research, write external prompts, edit files, or ratify architecture.

---

## What can continue now

Core router implementation remains blocked pending a MainOrch-approved Router Build Package (`D1 — Router Build Package [OCC]`). Work that may proceed:

- Static and mock Base UX work within the approved app-shell boundary
- Routing test-case preparation
- Folder-binding and connector planning
- Benchmark preparation
- Reversible scaffolding that does not lock core router architecture

---

## Current work order

1. Manually re-upload changed `_system` files to the ChatGPT OCC project sources.
2. Run `Founder Research Briefings [OCC]` — discuss R7, R8, and R9 findings (one topic per session; produce founder-position handoffs).
3. Open `[In Progress] (operational research) TaskRunner#3 [OCC]` after founder discussions to create `B1 — Router Scenario Corpus`.
4. Resolve split-gate interpretation and semantic-feedback governance before B2 and D1.
5. Do not launch R10–R21 without explicit MainOrch approval.

---

## What is not yet built

- Router-core architecture is unimplemented and locked pending a MainOrch-approved `D1 — Router Build Package [OCC]`.
- `B1 — Router Scenario Corpus` is not yet created. It requires founder discussion of R7, R8, and R9 first.
- Final router logic, shared record model, scoring formula, storage changes, automatic rerouting, and automatic semantic confidence updates are not approved.
- Split-gate interpretation and semantic-feedback governance are unresolved MainOrch decisions; both must be resolved before B2 and D1.
- No OCC v1 scope has been defined.
- Model and provider registry is stale; refresh at build time.
- No real provider, model, cost, or API integration.
- No real filesystem folder binding.
- No VS Code connector.
- No persistence or database.
- OCC's ChatGPT project container must be kept in sync with `_system` on disk.
