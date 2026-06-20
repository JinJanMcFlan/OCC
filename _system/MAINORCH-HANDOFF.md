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

- `[Complete] (router reconciliation) SubOrch#2 [OCC]` — closed after producing router reconciliation and direct research-prompt drafts.
- `[Complete] (project setup) TaskRunner#1 [OCC]` — closed after folder setup and initial consolidation.
- `[In Progress] (app visuals) SubOrch#1 [OCC]` — active visual and product-design lane. Raw handoff at `_design\OCC-UI-Visual-Direction-Handoff.txt`; summary at `_system\APP-VISUAL-DIRECTION.md`.
- `Main ResearchOrch [OCC]` — standing high-level research department head. Preserve chat history.
- Fresh `MainOrch [OCC]` — next overall project-control chat (the recipient of this document).

---

## Orchestration environment

ChatGPT is the only current orchestration environment. Claude Code is execution-only; it receives task-specific execution prompts and does not receive a full project-source mirror.

---

## Research status

`_research\prompts\` contains only `README.md`. No active research prompts are approved yet.

The router research queue from SubOrch#2 has been archived outside the repo. It must be revised after research portfolio reconciliation — MainOrch and ResearchOrch decide the revised bounded research queue together.

---

## Direct execution lane

When a task is fully specified, bounded, and needs one execution pass, MainOrch, SubOrch, or TaskOrch may send an execution prompt directly to Claude Code or another VS Code agent. A TaskRunner is only needed when multiple execution rounds, prompt revisions, or active checking are actually required.

Before every copyable prompt, provide a separate plain-text destination block outside the prompt: exact destination, platform, purpose, and where not to paste it.

Full workflow: `_system\WORKFLOW-ROLES.md`

---

## Next work order

1. Verify this documentation consolidation result.
2. Reconcile the expanded research portfolio.
3. Decide the revised bounded research queue.
4. Run research.
5. Build plan using benchmarks, not timelines.
