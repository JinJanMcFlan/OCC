# Base UX Foundation Contract

**Established:** 2026-06-21
**Status:** Frozen — do not edit shared files listed below without coordinating across all panel slices.

---

## Purpose

This file is a developer-facing file-boundary record. It defines what the sequential foundation slice owns and freezes, what is reserved for later independent panel slices, and exactly where parallel work may and may not touch.

---

## Frozen shared files

No parallel slice may edit these files. They are owned by the foundation and shared across all slices:

| File | Owns |
|---|---|
| `BaseUxDemoScreen.tsx` | All ephemeral renderer state; panel composition seam |
| `baseUxPresentationTypes.ts` | All UI-only presentation types and float prop contract |
| `baseUxDemoData.ts` | All immutable demo fixture data |
| `baseUx.css` | Grid contract, focus-mode layout, PanelFrame styles, placeholder styles |
| `components/PanelFrame.tsx` | Shared panel header, title, demo badge, focus action, scroll boundary |
| `components/FloatingWindowLayer.tsx` | Float layer stub and prop contract handoff point |

---

## State anchor in BaseUxDemoScreen

`BaseUxDemoScreen` is the sole owner of all ephemeral renderer state. Panel slices wire into it — they do not own or duplicate this state:

| State variable | Used by |
|---|---|
| `selectedProjectId` | Project Tree slice |
| `selectedConversationId` | Project Tree + Command Thread slices |
| `selectedQueueItemId` | Queue slice |
| `queueFilter` | Queue slice |
| `focusedPanel` | Foundation (focus contract, Esc handler) |
| `draftText` | Command Thread slice |
| `openFloats` | Foundation (Esc handler) + Float Window slice |

---

## Files reserved for later independent panel slices

Each slice may create and edit only its own listed files. No slice may edit another slice's files or any frozen shared file.

| Slice | Owned files |
|---|---|
| Project Tree | `components/ProjectTreePanel.tsx` |
| Command Thread | `components/CommandThreadPanel.tsx` |
| Control Inspector | `components/ControlInspectorPanel.tsx` |
| Queue | `components/QueuePanel.tsx` |
| Floating Window | `components/FloatingWindowLayer.tsx` (implementation only — prop contract is frozen) |

Each slice may also add an isolated CSS block within `baseUx.css` using a clearly-prefixed namespace (e.g., `.pt-` for Project Tree, `.ct-` for Command Thread). Slices must not modify existing CSS rules in that file.

---

## Shared utility reserved for later

`components/DemoStateCard.tsx` — shared empty, loading, unavailable, and demo-state messaging component. To be created and frozen before or during panel slice work. Any panel slice that needs it should coordinate creation with the integration owner.

---

## Integration handoff point

When all panel slices are complete, one integration owner wires:

1. Selection callbacks from `BaseUxDemoScreen` into `ProjectTreePanel`, `CommandThreadPanel`, `QueuePanel`.
2. Float open callbacks from `BaseUxDemoScreen` into `ControlInspectorPanel` and `QueuePanel`.
3. Float implementation into `FloatingWindowLayer`.
4. Style collision resolution across panel CSS blocks.
5. Full behavior validation per the acceptance checklist in `_architecture/BASE-UX-BUILD-PACKAGE.md`.

---

## What this foundation does NOT implement

Explicitly deferred to later slices or later phases:

- Full Project Tree behavior (expand/collapse, selection rendering)
- Command thread content, composer, send behavior
- Control inspector sections and float triggers
- Queue filtering, row selection, queue item detail float
- Floating window drag, resize, stacking, z-order, close animation
- Panel-specific final visuals
- Provider, model, folder, or status logic
- Router or data architecture of any kind
- IPC, network, persistence, or storage

---

## Invariants parallel agents must not break

- `BaseUxDemoScreen` is the sole state owner. Panel components are stateless presentational recipients.
- `baseUxPresentationTypes.ts` contains no final-architecture names (Task, Delegation, ResearchRecord, RouterPlan, CapabilityRegistry, ProviderRecord).
- `baseUxDemoData.ts` imports nothing from Electron, infrastructure, APIs, storage, or router code.
- `baseUx.css` grid, focus-mode, and PanelFrame rules are not overridden by panel slice CSS.
- Body-level scroll remains prevented.
- No IPC, network, filesystem, or persistence is introduced.
