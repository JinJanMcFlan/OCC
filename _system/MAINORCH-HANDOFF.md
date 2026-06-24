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
- Customer-outcome advocacy is ratified: OCC optimizes for customer privacy, cost, quality, control, and reliable completion, not OCC revenue or hidden margin. OCC must not become merely an API manager.
- Protected / Smart Default privacy is ratified: OCC is agentic inside user-selected privacy rules, protected secrets must not become ordinary model context or be silently sent remotely, and credential storage is not approved.
- Local-first deep memory is approved direction and remains distinct from truthful provenance/work history.
- One canonical project lives on the user's disk; connected-tool access must be explicit and scoped.
- Cost-aware legitimate access is approved direction: recognize customer-owned API keys, local models, legitimate subscription-backed routes, and coding tools while preserving manual model choice for normal chat.
- Standardized connector direction is approved, with auditability, revocation, scoped permissions, safe task delivery, result ingestion, and official-interface boundaries.
- **State-changing retry boundary (ratified):** OCC must not blindly retry state-changing work. For state-changing actions, validate outcomes through cheap deterministic or provider-native checks where available, retry only with verified idempotency or approved recovery support, stay within bounded limits, and escalate only after approved paths are exhausted or the outcome remains materially unknown.

**Pending — not yet ratified:**
- Split-gate interpretation (see `_system\DECISIONS.md` pending section). Must be resolved before B2 and D1.
- Semantic-feedback governance (see `_system\DECISIONS.md` pending section). Must be resolved before B2 and D1.

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
- `[Complete] (operational research) TaskRunner#2 [OCC]` — closed after managing Wave 1 external research (R7, R8, R9, R15) and producing internal audits A3–A6. Succeeded by TaskRunner#3.
- `(app visuals) SubOrch#1 [OCC]` — **creative exploration lane only.** Not a build-spec or implementation chat. Raw handoff at `_design\OCC-UI-Visual-Direction-Handoff.txt`; summary at `_system\APP-VISUAL-DIRECTION.md`.
- `Main ResearchOrch [OCC]` — **high-level frontier and research direction only.** Does not operate the working research queue; does not write worker research prompts. Preserve chat history.
- `[Complete] Founder Research Briefings [OCC]` — completed the Wave 1 R7/R8/R9/R15 founder-briefing cycle and returned approved founder-level product and policy direction. Outcome handoff: `_handoffs\FOUNDER-BRIEFINGS-WAVE-1-OUTCOME-HANDOFF.md`.
- `[In Progress] (operational research) TaskRunner#3 [OCC]` — authorized to create `B1 — Router Scenario Corpus`. B1 must cover customer-outcome routing, evidence freshness/uncertainty, protected-context handling, safe state-changing recovery, and truthful provenance requirements.
- `[In Progress] (Base UX command thread) SubOrch#5 [OCC]` — Command Thread is complete and mounted. Ready for formal closeout pending only the short manual keyboard acceptance check (Enter/Shift+Enter). Implementation lane must not begin unrelated new work before closeout.
- Fresh `MainOrch [OCC]` — next overall project-control chat (the recipient of this document).

---

## Orchestration environment

ChatGPT is the only current orchestration environment. Claude Code is execution-only; it receives task-specific execution prompts and does not receive a full project-source mirror.

---

## Research status

**Wave 1 external research is complete.** R7, R8, R9, and R15 are finished, audited, committed, and pushed.

Completed research:

- R7 → A3: Capability Evidence Freshness and Update Governance
- R8 → A4: Safe State-Changing Dispatch and Recovery Patterns
- R9 → A5: Lightweight Work Provenance and Replay Design
- R15 → A6: Folder Context and Local-First Privacy Boundary

Commits:

- `513b108` — raw-research preservation
- `8972d23` — audit commit

R6 is deferred; Gemini reached its daily Deep Research limit before R6 could start. R6 must not displace build-critical research when capacity returns. R10–R21 remain conditional and must not be treated as launched or approved.

Founder Research Briefings Wave 1 also produced a non-binding future research candidate portfolio:

1. Privacy-preserving task packaging and data-egress controls.
2. Local-first memory and privacy-aware retrieval.
3. Recovery reliability and low-cost deterministic validation.
4. Subscription-native workspace interoperability and canonical project sync.
5. Extensible connector/provider onboarding and verification.
6. Enterprise internal delivery mode and future multi-OCC federation.

These candidates are not active research runs, not router implementation scope, and do not delay B1 or D1 by default. Each requires a dedicated approved research lane and Research Packet Declaration before launch. Credential security/storage requires separate expert-grade research and review. Multi-OCC federation remains disabled-by-default future research and is separate from ordinary company/internal delivery.

Earlier checkpoints:

- Router-research completion checkpoint: commit `099b9ae`
- Final synthesis audit: `_research\findings\ROUTER-RESEARCH-SYNTHESIS-AUDIT.md`
- Router completion handoff: `_handoffs\ROUTER-RESEARCH-COMPLETION-HANDOFF.md`

Detailed Wave 1 handoff: `_handoffs\WAVE-1-RESEARCH-STATUS-HANDOFF.md`

## App-shell status

An isolated, locally runnable Base UX desktop shell exists at `apps\occ-desktop\` (Electron Forge, Vite, React, TypeScript). All benchmarks passed. Accepted initial app-shell checkpoint: commit `28384c2`. Boundary document: `_architecture\BASE-UX-SHELL-BOUNDARY.md`.

The Base UX Command Thread is complete and mounted. Launch the development shell at any time through `._Human\OCC Dev Launch.cmd`. The thread provides: compact project/conversation context bar; persistent truthful status line (`UI preview — response engine not connected`); local preview thread; local loading/empty/unavailable states; standard keyboard behavior (Enter sends, Shift+Enter inserts newline, IME-safe, empty-input guard). Local send appends user text to temporary in-memory UI state only — no routing, provider, task, IPC, persistence, or external-action behavior. TypeScript and lint passed; visual launch confirmed. Commits: `534e113`, `9fbc25c`, `19a2fb8`, `a20e851`, `62fd02e`.

One brief manual keyboard acceptance check remains: launch the app, confirm Enter sends and Shift+Enter inserts a newline. SubOrch#5 is ready for formal closeout only after that check. Its implementation lane must not begin unrelated new work.

---

## Direct execution lane

When a task is fully specified, bounded, and needs one execution pass, MainOrch, SubOrch, or TaskOrch may send an execution prompt directly to Claude Code or another VS Code agent. A TaskRunner is only needed when multiple execution rounds, prompt revisions, or active checking are actually required.

Before every copyable prompt, provide a separate plain-text destination block outside the prompt: exact destination, platform, purpose, and where not to paste it.

Full workflow: `_system\WORKFLOW-ROLES.md`

---

## Next work order

1. Re-upload changed `_system` files to the ChatGPT OCC project sources.
2. Complete the short Command Thread keyboard acceptance check (launch via `._Human\OCC Dev Launch.cmd`; confirm Enter sends and Shift+Enter inserts a newline). Formally close SubOrch#5 after this check passes.
3. TaskRunner#3 may now create `B1 — Router Scenario Corpus`.
4. Resolve split-gate interpretation and semantic-feedback governance before B2 and D1.
5. Do not code core router architecture until an approved `D1 — Router Build Package [OCC]` exists.
6. Do not automatically launch any candidate research.
