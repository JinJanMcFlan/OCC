# MainOrch Handoff — OCC

This is a short resume card for the next MainOrch chat. It is not a second source of truth. `_system` is canonical — read the full `_system` file set for authoritative detail.

---

## OCC identity

OCC (Overseer Command Center) is a standalone, IDE-scale AI orchestration app. It can ship an installable VS Code connector plugin, but does not live inside VS Code. The app is the brain; models are swappable drivers. Routing is deterministic and capability-driven. OCC is provider-agnostic and local-first where useful. It is a stable survival layer over a changing AI landscape.

Full identity: `_system\OCC-ALIGNMENT.md`

---

## Live decisions (summary)

- HKB is a parts donor, not a destination. Take good, leave bad.
- Auto-delegation must generalize across any complex multi-part request; must not be tuned to a specific example.
- The five routing factors: cost, time/urgency, user presence, model fit, output quality tier — on top of a peak-hour and batch-API aware schedule system.
- Storage direction: JSON / in-memory. No SQLite commitment.
- LiteLLM is not OCC product architecture.
- No timelines. No "MVP" language. Acronyms uppercase.
- `_system` is the canonical disk source; ChatGPT project sources are mirrors.
- OCC's research engine covers market/capability intelligence and frontier solution research.
- Cognitive consolidation is a living founder hypothesis and research pillar — not proven, not a locked dependency.
- Research direction is evidence-governed and may deepen, redirect, park, or integrate.
- **State-changing retry boundary (ratified):** OCC must not blindly retry state-changing work or claim automatic rollback unless idempotency, rollback behavior, or an explicit approved recovery plan is known before execution.

**Pending — not yet ratified:**
- Split-gate interpretation (see `_system\DECISIONS.md` pending section).
- Semantic-feedback governance (see `_system\DECISIONS.md` pending section).

Full decisions: `_system\DECISIONS.md`

---

## Folder structure

```
D:\studio-tools\OCC\
├── _architecture\     Architecture decision records
├── _archive\          Non-restricted historical OCC records
├── _design\           Raw design handoffs
├── _research\         Research prompts and findings
├── _system\           Active project-source documents (canonical disk source)
└── _handoffs\         Inter-chat and inter-session handoffs
```

Restricted orchestration-only historical material is stored outside the OCC repository at:
`D:\studio-tools\_orchestrator-only\OCC\historical-records\`

---

## Active source documents

See `_system\PROJECT-SOURCE-MANIFEST.md` for the full list and purpose of each file.

---

## Chat map

- `[Complete] (project setup) TaskRunner#1 [OCC]` — closed after folder setup and initial consolidation.
- `[Complete] (router reconciliation) SubOrch#2 [OCC]` — closed after producing router reconciliation and direct research-prompt drafts.
- `[Complete] (router research management) SubOrch#3 [OCC]` — closed after managing and completing the bounded router research queue R1–R5.
- `(app visuals) SubOrch#1 [OCC]` — **creative exploration lane only.** Not a build-spec or implementation chat. Raw handoff at `_design\OCC-UI-Visual-Direction-Handoff.txt`; summary at `_system\APP-VISUAL-DIRECTION.md`.
- `Main ResearchOrch [OCC]` — **high-level frontier and research direction only.** Does not operate the working research queue; does not write worker research prompts. Preserve chat history.
- A future **operational research TaskRunner** will manage approved external research runs: their order, why each run exists, and returned-result auditing. This does not exist yet.
- Fresh `MainOrch [OCC]` — next overall project-control chat (the recipient of this document).

---

## Orchestration environment

ChatGPT is the only current orchestration environment. Claude Code is execution-only; it receives task-specific execution prompts and does not receive a full project-source mirror.

---

## Research status

`_research\prompts\` contains only `README.md`. No active research prompts are approved yet.

**Router research is complete.** R1–R5 are finished, audited, preserved, committed, and pushed. Checkpoints:

- Router-research completion checkpoint: commit `099b9ae`
- Final synthesis audit: `_research\findings\ROUTER-RESEARCH-SYNTHESIS-AUDIT.md`
- Router completion handoff: `_handoffs\ROUTER-RESEARCH-COMPLETION-HANDOFF.md`

The next operational research queue must be planned by an approved operational research TaskRunner. Main ResearchOrch stays at direction level only.

## App-shell status

An isolated, locally runnable Base UX desktop shell exists at `apps\occ-desktop\` (Electron Forge, Vite, React, TypeScript). All benchmarks passed. Accepted initial app-shell checkpoint: commit `28384c2`. Boundary document: `_architecture\BASE-UX-SHELL-BOUNDARY.md`.

---

## Direct execution lane

When a task is fully specified, bounded, and needs one execution pass, MainOrch, SubOrch, or TaskOrch may send an execution prompt directly to Claude Code or another VS Code agent. A TaskRunner is only needed when multiple execution rounds, prompt revisions, or active checking are actually required.

Before every copyable prompt, provide a separate plain-text destination block outside the prompt: exact destination, platform, purpose, and where not to paste it.

Full workflow: `_system\WORKFLOW-ROLES.md`

---

## Next work order

1. Re-upload changed `_system` files to the ChatGPT OCC project sources.
2. Open one operational research TaskRunner to prepare the next bounded research queue.
3. Review the live Base UX shell against visual direction.
4. Create a separate build-planning SubOrch only when there is a concrete need to turn approved work into parallel code slices.
5. Do not code core router architecture until an approved Router Build Package exists.
