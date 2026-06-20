# OCC Base UX Shell — Boundary Document

**Created:** 2026-06-20
**Scope:** Defines what the Base UX desktop shell builds now, what is explicitly deferred, and the benchmarks confirming this slice is ready for the next implementation step.

---

## What the Base UX shell builds now

A locally runnable, isolated desktop UI built with Electron Forge, Vite, React, and TypeScript, located at `apps\occ-desktop\`.

### Implemented regions

- **Left panel** — project list (DemoProject fixtures) and expandable conversation tree (DemoConversation fixtures), selectable by click
- **Center panel** — command thread showing local-draft entries, plus a command composer with keyboard shortcut (Ctrl+Enter)
- **Right panel** — local-only autonomy toggles, budget/cost display placeholders, folder-binding placeholder, context placeholder, and provider/model status placeholders
- **Bottom panel** — horizontal-scroll queue showing DemoQueueItem entries with five clearly labelled visual states: running, waiting, deferred, completed, and local draft

### Implemented local interactions

1. Select a demo project from the left panel
2. Select a demo conversation from the conversation tree
3. Type a command into the composer
4. Submit it (button or Ctrl+Enter) — appears immediately as a `draft` queue item in the bottom panel and as a local-draft thread entry in the center panel
5. Toggle autonomy/control settings (three local-only toggles in the right panel)
6. Focus one major region at a time using the focus bar (all / left / center / right / bottom), then return to full layout by clicking the active region again or selecting "all"

### Security posture

- `contextIsolation: true`
- `nodeIntegration: false`
- `sandbox: true`
- No IPC handlers added
- No live network calls
- No filesystem access from renderer

### Demo-only fixture naming

All fixture types and data are prefixed or labelled to make their demo-only status explicit:
- `DemoProject`, `DemoConversation`, `DemoQueueItem`, `DemoQueueState`, `DemoMessage`
- Queue items label themselves `local draft · unsent · unrouted · no provider`
- Persistent banner: `Local Base UX demo — no live routing or provider connection`

---

## What must wait for R5 (final MainOrch router decisions)

- Router logic, scoring, gates, or policy of any kind
- Queue ordering driven by real work relationships
- Real approval or gate routing behavior
- Shared task/delegation/research record structures
- Outcome feedback or automatic adaptation
- Any IPC wiring to real routing decisions

---

## What must wait for R4

- Real provider, model, cost, or API integration
- Actual budget tracking or spend calculation
- Real model and provider registry
- Real context loading from disk
- VS Code connector behavior
- HKB imports or salvage

---

## What must wait for final MainOrch router decisions

- Shared record schema (task, delegation, research record)
- Graph or queue relationships based on real work history
- Research Engine behavior wired to UI
- Auto-delegation trigger logic
- Router plan structures surfaced in UI

---

## User journey proven by this shell

> **Open OCC → select a local demo project → enter a command → see a local unsent queue item → inspect local controls and queue state**

Step-by-step:
1. Desktop window opens showing the four-panel layout with the demo banner
2. User clicks `DemoProject Alpha` in the left panel — it highlights and shows two demo conversations below it
3. User types a command in the composer (e.g., "Draft a component outline")
4. User presses Ctrl+Enter or clicks "Add to queue"
5. The command appears in the center thread labeled `Local demo entry · unsent · unrouted`
6. A new `draft` state queue item labeled `DemoQueueItem: Draft a component outline` appears in the bottom queue with the label `local draft · unsent · unrouted · no provider`
7. User examines the right panel: autonomy toggles are functional, cost/provider fields show "demo" placeholders
8. User clicks "right" in the focus bar — only the right panel is visible; clicking "right" again restores full layout

---

## Benchmarks confirming this slice is ready for the next step

| Benchmark | Result |
|---|---|
| TypeScript typecheck (`tsc --noEmit`) | Pass — zero errors |
| ESLint (`npm run lint`) | Pass — zero errors |
| Electron Forge package (win32 x64) | Pass — packaged successfully |
| Electron Forge start (dev) | Pass — Vite targets built, Electron launched |
| Four regions render | Confirmed by build + visual structure |
| Command composer adds draft queue item | Confirmed by component logic |
| No renderer-side Node access | Confirmed: `nodeIntegration: false`, `sandbox: true`, no IPC |
| No live network calls | Confirmed: no fetch, WebSocket, or network API in renderer |
| Demo fixtures correctly labelled | Confirmed by naming convention and persistent banner |
| Focus control operates per region | Confirmed by `focusRegion` state logic |

---

## Files introduced by this slice

```
apps\occ-desktop\                        Electron Forge + React shell
apps\occ-desktop\src\App.tsx             Four-panel UI with all interactions
apps\occ-desktop\src\renderer.tsx        React entry point
apps\occ-desktop\src\index.css           Shell styles
apps\occ-desktop\src\main.ts             Electron main process (secure defaults)
apps\occ-desktop\src\preload.ts          Preload (intentionally empty)
apps\occ-desktop\package.json            Dependencies and scripts
apps\occ-desktop\package-lock.json       Committed lockfile
apps\occ-desktop\tsconfig.json           TypeScript 5 + JSX config
apps\occ-desktop\vite.renderer.config.ts Vite renderer config with React plugin
apps\occ-desktop\forge.config.ts         Electron Forge config (unmodified)
_architecture\BASE-UX-SHELL-BOUNDARY.md  This document
```
