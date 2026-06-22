# OCC Research Operations Protocol

This document defines OCC's research artifact system, packet requirements, provider-fit research routing, queue lifecycle, and validation flow. It is an OCC-specific operational layer that works within the role boundaries defined in `WORKFLOW-ROLES.md` and the research direction defined in `RESEARCH-DIRECTION.md`.

---

## Artifact labels

| Label | Type | Description |
|---|---|---|
| `R#` | External discovery research | A research run conducted in an external research system (e.g., Gemini Deep Research, Grok). Queue ID is stable and permanent. |
| `A#` | Internal audit, synthesis, reconciliation, or posture review | An internal record produced by OCC's own orchestrators. Does not require an external chat. |
| `B#` | Internal benchmark or experiment | A structured internal test or measurement. Does not require an external chat. |
| `D#` | Internal decision-ready or implementation-ready package | A distilled artifact ready for MainOrch review and ratification. Does not require an external chat. |

A/B/D artifacts are durable internal records by default. They do not receive external research chat titles. R-runs receive stable external titles (see below).

---

## R-run stable title format

`R{queue ID} — {short plain-English title} [OCC]`

Example: `R6 — Latent Coordination Mechanisms in Multi-Agent Systems [OCC]`

Rules:
- The queue ID must match the approved research queue and must not change.
- Use the same queue ID and core title in the external research chat, the returned-result handoff, and the related disk research record.
- Keep provider name, model name, date, and status labels out of the stable title. Those belong in queue records or result metadata.
- A follow-up run keeps the original ID and title, then adds a clear suffix: `R6 — Latent Coordination Mechanisms in Multi-Agent Systems — Follow-up 1 [OCC]`.

---

## Required Research Packet Declaration

Every external research run (R#) must declare the following before launch. See `RESEARCH-DIRECTION.md` for the authoritative definition.

1. **Existing mechanism, approach, or state of knowledge.**
2. **What it does well.**
3. **Limitations, failure modes, contradictions, or unresolved questions.**
4. **Candidate OCC improvement or invention hypothesis.**
5. **Linked prior or parallel OCC research.**
6. **Evidence, benchmark, or experiment that could support or disprove the hypothesis.**
7. **Proposed validation path and follow-up trigger.**

Where an item is not yet known, the packet must state that directly. Candidate hypotheses must remain distinguishable from evidence-backed findings, active decisions, and future possibilities.

---

## Every artifact records

- Stable identity (label, queue ID, title)
- Classification (R / A / B / D)
- Required inputs
- Dependencies (what must exist before this runs)
- Decision owner
- Intended downstream use
- Audit owner
- Status (draft / active / complete / parked / invalidated)
- Revisit or launch trigger

---

## Provider-fit research routing

Select the research destination by fit:

| Use case | Preferred destination |
|---|---|
| Broad synthesis and mechanism-heavy research | Gemini Deep Research |
| Current market or provider intelligence | Grok or equivalent |
| Current provider-specific facts | Official documentation (check publication date) |
| Scientific or technical claims | Primary papers, repositories, technical documentation |
| Execution and code work | Claude Code |

Claude Code is execution-only. It is not an appropriate destination for broad external research.

External tools receive only named required inputs. They do not receive the full project by default. Context is distilled before it reaches an external tool.

---

## Queue lifecycle

```
Define → Duplication check → Attach inputs → Select destination → Run → Preserve raw output → Audit → Create/update A/B/D artifact → Queue justified follow-up
```

1. **Define.** Write a stable identity, classification, purpose, required inputs, and dependencies. Assign a queue ID.
2. **Duplication check.** Confirm no prior R/A/B/D artifact already covers this question.
3. **Attach inputs.** Identify and prepare only the named required inputs.
4. **Select destination.** Choose the appropriate research provider or tool by fit (see above).
5. **Run.** Launch the research run using the stable title format. Preserve the title exactly.
6. **Preserve raw output.** Save the returned result to disk before any auditing begins. Do not discard raw output.
7. **Audit.** The responsible TaskRunner reviews the returned result against the packet declaration: evidence quality, gaps, contradictions, and whether the hypothesis was supported, revised, or disproved.
8. **Create/update A/B/D artifact.** Produce or update the appropriate internal artifact. An A# audit reconciles findings. A B# benchmark records measured results. A D# package is decision-ready.
9. **Queue justified follow-up.** A discovery may create a candidate follow-up run. Follow-ups require a stable title, reason, dependency, expected value, and launch trigger. A justified discovery does not silently expand active scope.

---

## Research-to-decision flow

```
Raw research → Audit/evaluation → Accepted evidence → Decision/build package → MainOrch ratification where required
```

Raw research, a promising mechanism, or a candidate hypothesis does not automatically become architecture, product direction, implementation scope, or current build instruction. The D# artifact is the decision-ready layer. MainOrch ratification is required before any change to product direction, architecture, active scope, or implementation boundary.

---

## Beyond the Current Guardrail

The `Beyond the Current Guardrail` section in `RESEARCH-DIRECTION.md` is for preserving credible adjacent observations, contradictions, opportunities, and possible breakthroughs that are relevant enough to retain but not active enough to change current work.

An item recorded there remains outside active work until the appropriate review moves it into an approved research or build lane. Recording an item in that section does not alter the active queue, architecture, implementation scope, or current build instructions.

---

## Roles in research operations

| Role | Research operations responsibility |
|---|---|
| **MainOrch** | Product, architecture, portfolio, and staffing authority. Ratifies changes to product direction, architecture, active scope, and implementation boundaries. |
| **Main ResearchOrch** | High-level research direction and frontier framing. Hypothesis review and synthesis. Decision-ready handoffs to MainOrch. Does not write worker research prompts. |
| **Operational Research TaskRunner** | Queue operation: prompt drafting, input preparation, destination selection, result auditing, artifact creation, and sequencing. Does not make architecture decisions. |
| **Execution agent** | Approved filesystem or code work only. Receives one self-contained, bounded prompt. Does not conduct broad research, alter architecture, or expand scope without orchestrator authorization. |

Research direction stays with ResearchOrch. Prompt drafting and returned-result auditing stay with TaskRunners. Execution agents are execution-only.
