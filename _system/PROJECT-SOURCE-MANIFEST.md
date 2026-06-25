# OCC Project Source Manifest

This manifest lists every active `_system` file and its purpose.

---

## Active `_system` files

| File | Purpose |
|---|---|
| `OCC-ALIGNMENT.md` | Identity and non-negotiable principles. Drop into any chat to establish what OCC is. |
| `CURRENT-STATE.md` | Where the project is right now: what is complete, what is active, current work order. |
| `DECISIONS.md` | Active, still-true architectural and product decisions with rationale. |
| `WORKFLOW-ROLES.md` | Role definitions, lanes, handoff protocol, and the direct execution lane. |
| `GIT-WORKFLOW.md` | Safe git rules for any agent touching a repository. |
| `RESEARCH-DIRECTION.md` | High-level research department source: domains, hypotheses, posture, research map. |
| `APP-VISUAL-DIRECTION.md` | Consolidated visual direction for Base UX, Presentation Mode, and related views. |
| `FOUNDER-DIRECTION.md` | Internal founder source: preserved founder intent, distilled product/experience principles, candidate messaging, and communication boundaries. |
| `PROJECT-SOURCE-MANIFEST.md` | This file. Lists all active project-source documents and their purposes. |
| `MAINORCH-HANDOFF.md` | Handoff document for the next MainOrch chat. Includes live decisions, folder structure, and next work order. |
| `RESEARCH-OPERATIONS.md` | Defines OCC's research artifact system (R/A/B/D labels), packet requirements, provider-fit research routing, queue lifecycle, and validation flow. |
| `OCC-FUNCTIONAL-CORE-FAST-TRACK-ROADMAP.md` | Active build-sequencing source for the real internal OCC Functional Core and its minimal safety spine. |
| `OCC-DEFERRED-WORK-INVENTORY.md` | Preserved parking lot for deferred validation, risks, ideas, research candidates, polish, and future improvements. |

---

## Mirror policy

`_system` files are manually mirrored into ChatGPT project sources by the human. When a `_system` file changes on disk, re-upload it to the ChatGPT project container.

Claude Code is execution-only. It does not receive a full project-source mirror. It receives task-specific execution prompts only.

Specialized disk documents from `_architecture`, `_design`, `_research`, `_archive`, and `_handoffs` are attached to execution work only when directly relevant to the task at hand.

---

## Disk working areas — not automatic mirrors

These folders are disk working areas. Their contents are not automatically mirrored into AI project sources.

| Folder | Purpose |
|---|---|
| `_architecture\` | Architecture decision records (router, system structure). |
| `_design\` | Raw design handoffs and working visual direction documents. |
| `_research\` | Research prompts, findings, and synthesis documents. |
| `_archive\` | Non-restricted historical OCC records. Restricted material is stored outside the repo. |
| `_handoffs\` | Inter-chat and inter-session handoff documents. |
