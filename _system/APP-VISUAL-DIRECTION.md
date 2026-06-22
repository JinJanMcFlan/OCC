# OCC App Visual Direction — Shared Source Summary

Derived from: `D:\studio-tools\OCC\_design\OCC-UI-Visual-Direction-Handoff.txt`

This is the consolidated shared-source summary. The raw handoff is preserved at the path above.

---

## Core principle

Power is always available. Clutter is optional.

OCC should be powerful but visually calm. The default state is minimal and quiet. Complexity opens only when the user wants it.

---

## Base UX — Interaction principles

OCC's Base UX follows familiar modern AI-chat and IDE workspace interaction patterns. The goal is immediate orientation, a readable central thread, strong project and conversation context, practical keyboard-first interaction, and a low learning curve — with OCC improving on familiar patterns rather than merely cloning them.

Normal chat is a calm, legible detail surface. Real multi-thread, multi-provider, and dependency relationships belong in future Presentation Mode and Mind Map / Flow views backed by shared work data. Decorative fake graphs or simulated dependency visualizations must not appear in normal Base UX chat.

Native shell-menu treatment remains an open shell-chrome question. Custom OCC command surfaces and minimized legacy Electron/native menus are directionally preferred, especially in Presentation and Mind Map modes. No Base UX component pass may silently remove or redesign native menus; any native-menu change requires an explicit decision.

---

## Base UX — Daily working interface

Calm, minimal, stable. Four regions:

- **Left:** Projects and chat log tree
- **Center:** Main OCC command thread
- **Right:** Controls, cost tracking, autonomy settings, folder binding, context, model and provider status
- **Bottom:** Queue — running tasks, waiting tasks, deferred tasks

Every major panel or tab can go full screen. Floating internal windows can be opened over any view, dragged, resized, and closed — like browser windows contained inside OCC.

**Immediate priority: lock Base UX before implementing advanced view details.**

---

## Presentation Mode — Cinematic command-center view

Spatial, interactive, graph-based workspace. OCC/Overseer stays near the center as the command source. Tasks, agents, sub-tasks, review items, and outputs expand outward as bubbles, cards, or nodes.

Supports:
- Zooming, panning, and free graph navigation
- Slightly 3D depth through scale, blur, spacing, and motion
- Color per task type; status dots per task state
- Collapsible legend for colors, lines, dots, and states
- "Focus back to Overseer" button to recenter

Relationships shown by lines:
- Task created this task
- This task depends on that research
- This review is blocking that implementation
- This human question came from that agent
- This completed result feeds into that final output

Lines use gradient glow between the colors of connected nodes. Hovering illuminates the hovered segment. Clicking a line shows relationship context.

New task bubbles spawn with a rainbow border glow that settles into the task's color. Persistent glow only for hovered, selected, attention-needed, failed, or rate-limited items.

Floating internal windows work inside Presentation Mode — the user can open files, chat, cost dashboard, queue, approvals, or logs over the canvas and work full time in this view.

---

## Human Review Zone

Dedicated top-right zone in Presentation Mode. When OCC needs human input, approval, or review, the related bubble moves there.

The zone shows:
- The active item and its question or approval request
- A text box or action area for the user's response
- A queue of waiting items below

When the user answers, the bubble flies back to its graph position. Dependency lines from the original task remain visible during review so the user understands what is waiting on their input.

---

## Freeform Mode vs. Lock Mode

**Freeform Mode:** Nodes drift, breathe, and reorganize based on task weight, relevance, activity, and dependencies. Visually alive; better for demos.

**Lock Mode:** Nodes spawn into stable positions and stay there. Better for active work and monitoring.

The user can switch between modes at any time.

---

## Mind Map / Flow View

A cleaner 2D view separate from Presentation Mode. Flatter, more structured, easier to read. The selected item appears in the center; parents appear above or to the left; dependencies and children appear around it. The user can navigate up and down the chain.

Working names under consideration: Mind Map View, Flow View, Task Tree View, Dependency Map. Not locked yet; needs more design development.

---

## AR / VR — Future direction only

Presentation Mode should be designed so it could eventually translate into AR: spatial graph, depth-based focus, floating task objects, dependency lines, pinned objects, voice or gesture navigation, human approval cards in space.

This is pre-release future-function territory. Do not let AR/VR complicate the first usable app; preserve the design direction so the interface does not paint itself into a corner.
