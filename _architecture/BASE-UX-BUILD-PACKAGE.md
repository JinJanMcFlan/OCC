# Base UX Build Package — Approved Implementation Contract

## Status

Approved for implementation planning and bounded static UI work.

This document is the durable build contract for the first Base UX code wave. It applies only to the existing Electron Forge + Vite + React + TypeScript shell at:

```text
apps\occ-desktop\
```

The runtime stack is already chosen and must not be redesigned.

## Required implementation inputs

Every first-wave implementation task must receive these documents alongside this build package:

```text
_architecture\BASE-UX-SHELL-BOUNDARY.md
_design\OCC-UI-Visual-Direction-Handoff.txt
```

## Hard scope boundary

Build a presentation-only Base UX using immutable demo fixtures and local renderer state only.

Do not add:

* Router logic, routing recommendations, task classification, scoring, delegation, or approval behavior.
* Providers, model selection, account connections, API calls, usage, rate-limit, or live cost behavior.
* Filesystem access, folder binding, folder selection, indexing, context collection, or project creation from a disk path.
* VS Code connector behavior.
* Persistence, local storage, database, JSON storage, IPC, background processes, network calls, or state libraries.
* Presentation Mode, graph/mind-map views, AR/VR, freeform/lock modes, or human-review-zone behavior.

All demo state is ephemeral and discarded on refresh or relaunch.

## Approved user-visible demo loop

On launch, OCC opens into a seeded Base UX Demo workspace.

The user may:

1. Select a project or conversation in the left tree.
2. View its local demo thread in the center panel.
3. Inspect matching static status and control summaries in the right panel.
4. Select and filter queue items in the bottom panel.
5. Enter text and press Send or `Ctrl/Cmd + Enter`.

Sending must append the user text locally, then append this explicit truthful acknowledgment:

> Demo only — no provider, router, task, file action, or external request was used.

The UI must never imply that live OCC intelligence, routing, provider activity, task execution, file actions, or background work occurred.

## Layout contract

Base UX contains four regions:

* Left: projects and conversation tree.
* Center: command thread and composer.
* Right: controls and status inspector.
* Bottom: queue.

Use a maximum 40px application chrome strip for the OCC label and a persistent `Demo data — local only` badge.

Use a three-column layout above a queue that spans the full width:

* Left panel: 248px fixed.
* Center panel: flexible, minimum 520px.
* Right panel: 320px fixed.
* Bottom queue: 220px fixed height.
* Outer spacing: 8px.
* Gap between regions: 8px.

The renderer owns scrolling. The document body must not scroll.

At 1280×800 minimum desktop size, all four regions must remain visible. There is no mobile or tablet reflow in this code wave.

Internal scroll ownership:

* Left tree scrolls internally.
* Center thread scrolls internally; composer stays pinned at its bottom.
* Right inspector scrolls internally.
* Bottom queue scrolls internally.
* Focus mode gives scroll ownership only to the focused panel.

Panel widths and queue height are not user-resizable in this wave.

## Focus behavior

Every primary panel header has a `Focus` action.

When focused:

* The selected panel fills the workspace below application chrome.
* Other panels are hidden but remain mounted.
* Existing selection and draft input remain available after focus exit.
* The header action changes to `Exit focus`.
* `Esc` exits focus when no floating window is active.
* Focus is temporary and not persisted.

## Approved floating-window policy

Only these three floating internal windows are approved:

1. Cost Detail.
2. Context Detail.
3. Queue Item Detail.

Each floating window:

* Exists inside the OCC renderer only; it is not a native OS window.
* Opens above normal or focused layout.
* Can be dragged by its header.
* Can be resized from its lower-right corner.
* Has a minimum size of 360×220.
* Cannot leave visible workspace bounds.
* Has close only; no minimize, pinning, docking, tabs, persistence, or multi-monitor behavior.
* Supports a maximum of two simultaneous open windows.
* Refocuses an already-open float instead of duplicating it.
* Closes the topmost active float on `Esc` before focus mode exits.

## Exact panel requirements

### Left — Projects and conversation tree

Show:

* `Projects` title.
* Two seeded demo projects.
* Expand/collapse chevrons.
* Conversation rows, including one nested child row.
* Active-row treatment.
* Small fixture count or status badges.

Allow:

* Local expand/collapse.
* Local project/conversation selection.
* Selection updates to center content and selected-session summary in the right inspector.

Do not add create, rename, delete, search, drag-and-drop, or folder binding.

Empty state:

> Select a demo project to view its conversations.

### Center — OCC command thread

Show:

* Active project and conversation name.
* Persistent `Demo only` badge.
* Chronological local message cards.
* Multiline composer.
* Send button.
* Keyboard hint.
* Small local status row while sending.

Allow:

* Conversation selection.
* Short local skeleton transition before fixture content appears.
* `Ctrl/Cmd + Enter` to send.
* Enter to add a line break.
* Send disabled for empty input.
* Approved truthful local acknowledgment after send.

Include renderable states:

* Default seeded conversation.
* Loading with four neutral message skeletons.
* Empty: `No commands in this demo conversation yet.`
* Unavailable/error: `Demo error state — no external action was attempted.`
* Persistent demo indicator.

### Right — Controls and status inspector

Show these sections in this order:

1. `Operating mode` — static `Human review required`.
2. `Cost snapshot` — static demo total and `Open detail`.
3. `Folder status` — `No folder bound`; `Bind folder` visibly disabled with `Future folder-binding work.`
4. `Context` — static item/token summary and `Open detail`.
5. `Provider status` — `No providers connected in demo`.
6. `Model status` — `No live model selected`.

Only Cost Detail and Context Detail may open floating windows.

The inspector is informational. It must not create live autonomy, budgets, provider, model, folder, or context settings.

Disabled actions must explain why they are unavailable.

### Bottom — Queue

Show:

* `Queue` title.
* Filters: `All`, `Working`, `Waiting`, `Deferred`, `Completed`, `Attention`.
* Five seeded visual examples, one per status.
* Selected-row treatment.
* `Open detail` for the selected row.

Queue labels are visual demo labels only:

* Working.
* Waiting.
* Deferred.
* Completed.
* Attention.

Allow:

* Local filtering.
* Local row selection.
* Queue Item Detail floating window.

Do not add run, cancel, retry, approve, reject, reorder, or dispatch controls.

Empty state:

> No demo queue items match this filter.

Include a `Show all` reset action.

## Visual constraints

Use the existing shell's typography, spacing, borders, shadows, and color tokens.

Do not introduce a new visual language, graph canvas, gradients, decorative ambient animation, simulated agent thinking, or effects that imply real execution.

Visual hierarchy:

1. Selected work and current input.
2. Attention or unavailable state.
3. Supporting controls.
4. Background structure.

Motion is limited to local skeleton transition, float open/close, focus transition, hover, active, and keyboard-focus feedback.

## Required feature boundary

Create the implementation feature boundary under the existing renderer source root:

```text
features/base-ux/
```

Expected first-wave file responsibilities:

* `BaseUxDemoScreen.tsx`
  Sole owner of ephemeral selected project, selected conversation, queue filter, focused panel, draft text, and floating-window state.

* `baseUxDemoData.ts`
  Immutable fixture-only projects, conversations, status summaries, queue examples, and detail content.

* `baseUxPresentationTypes.ts`
  UI-only presentation shapes. Do not model final router, provider, task, delegation, scoring, persistence, or capability records.

* `components/PanelFrame.tsx`
  Shared panel header, title, demo badge, focus action, and scroll boundary.

* `components/ProjectTreePanel.tsx`
  Left region.

* `components/CommandThreadPanel.tsx`
  Center region.

* `components/ControlInspectorPanel.tsx`
  Right region.

* `components/QueuePanel.tsx`
  Bottom region.

* `components/FloatingWindowLayer.tsx`
  Approved floating windows only.

* `components/DemoStateCard.tsx`
  Shared empty, loading, unavailable, and demo-state messaging.

* `baseUx.css`
  Base UX grid, focused layout, float geometry, and component-level styles.

Use the shell boundary document to identify the exact existing renderer integration seam. Do not rename, relocate, or replace Electron/Vite configuration.

## Approved implementation order

1. Complete the sequential foundation slice.
2. Freeze shared contracts, layout contract, callback contract, and file ownership.
3. Implement approved independent UI slices in parallel.
4. Integrate all slices sequentially.
5. Validate the full static/demo-only Base UX behavior.
6. Create a focused stable Git checkpoint.

## Sequential foundation slice

One implementation owner establishes and freezes:

* Actual renderer integration seam.
* Feature boundary.
* Immutable demo fixture shapes.
* UI-only presentation types.
* `BaseUxDemoScreen` as sole owner of local state.
* `PanelFrame`.
* Shared four-region layout and scroll ownership.
* Minimum supported native window size.
* Focus-mode contract.
* Floating-window descriptor, bounds, z-order, close behavior, maximum count, and `Esc` priority.
* Approved local composer-send behavior.
* Shared state card.
* Shared CSS contract.
* Explicit later file ownership.

Do not begin parallel slices until the foundation is accepted and frozen.

## Safely parallel slices after foundation freeze

Only these slices may be implemented in parallel:

1. Project Tree slice.
2. Command Thread slice.
3. Control Inspector slice.
4. Queue slice.
5. Floating Window slice.

Each slice may edit only its owned component files and isolated style block.

No parallel slice may edit:

* Renderer entry.
* Shared demo types.
* Fixture shapes.
* `BaseUxDemoScreen`.
* `PanelFrame`.
* Shared grid CSS.
* Focus behavior.
* Another slice's component files.

## Sequential integration and validation

One integration owner must:

1. Wire all approved local selection, focus, float, filter, and demo-send behaviors through `BaseUxDemoScreen`.
2. Resolve style collisions.
3. Validate the UI at 1280×800, 1920×1080, and a high-density desktop display.
4. Confirm no page-level scrolling or overlapping controls.
5. Confirm visible keyboard-focus states.
6. Confirm `Esc` closes the topmost float before exiting focus.
7. Run existing build, lint, and test commands.
8. Confirm no infrastructure dependency, storage layer, provider integration, IPC surface, or runtime-stack change was introduced.

## Acceptance checklist

The Base UX slice is complete only when:

* The app opens into the seeded four-region Base UX Demo.
* No network calls, IPC calls, filesystem reads, local-storage writes, provider calls, or persistence occur.
* Project/conversation selection updates center and right UI.
* Local tree expand/collapse works.
* Composer appends only the explicit truthful demo acknowledgment.
* Default, loading, empty, unavailable/error, and demo states are renderable and visually distinct.
* All five queue status examples are visible.
* Queue filtering, selection, no-results state, and detail float opening work.
* All primary panels can enter and exit focus mode.
* Cost, Context, and Queue Item Detail floats open, drag, resize, remain bounded, stack correctly, and close correctly.
* `Esc` priority works.
* Required desktop-size checks pass.
* Existing checks remain green.
* No forbidden architecture or integration work is added.
