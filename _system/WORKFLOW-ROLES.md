# Workflow Roles — How Work Flows Through a Project

This document defines roles, lanes, and handoff protocols for any project using this orchestration system. It is written to be read by an AI with zero prior context — it states the obvious on purpose. Collapsing these lanes is what breaks projects.

This document is project-agnostic and drag-and-drop reusable across projects.

---

## Source of truth

Disk is the source of truth. ChatGPT project sources are mirrors. Only the disk copy is edited. When a file changes on disk, the human manually re-uploads it to the relevant AI project containers. This is a deliberate manual step.

Claude Code is an execution agent. It receives task-specific execution prompts only. It is not an orchestration chat and does not receive a full project-source mirror.

Work flows down. Problems flow up.

Default flat. Deepen only on overflow.

---

## Roles

### MainOrch

The top orchestrator for the project. One per project. Holds the full project direction. Decides what is delegated and to what level. Direction-deciding work (where the project is going, course-correction, final calls) stays here — it is not delegated down.

MainOrch is the final project and product authority.

### SubOrch

Handles one focused design, planning, or research problem too large for MainOrch to hold alongside everything else. Produces a clear output (a doc, a spec, a decision, a synthesis) and hands it back up to MainOrch.

A SubOrch may remain one focused chat. A TaskManager layer is only needed when there are two or more TaskOrchs that need coordination. A one-chat task can remain at MainOrch, SubOrch, TaskOrch, or direct-execution level depending on its actual scale.

### TaskManager

Exists only when a task is big enough to need two or more TaskOrchestrators that must be coordinated. Do not create a TaskManager unless that threshold is met.

### TaskOrch

The chat the human converses in about a specific task. Manages its TaskRunners. Makes decisions within its task scope.

### TaskRunner

Writes the actual prompts to execution agents. One task. Iterates with the execution agent (prompt → result → check → next prompt) until the task is fully done, then writes a summary and closes.

TaskRunner-owned work must not be delegated to an execution agent:
- Prompt writing
- Research-prompt drafting
- Orchestration planning
- Returned-result auditing
- Next-step sequencing

These stay in the correct orchestrator chat. A TaskRunner is a prompt writer and result auditor — it is not an execution agent.

### ResearchOrch (optional)

A specialized SubOrch for high-level research direction. Handles hypothesis framing, evidence review, synthesis, decision-ready handoffs, and research department coordination.

ResearchOrch does not write worker research prompts itself. Named research TaskRunners do that. ResearchOrch stays at the direction and synthesis level.

### Execution agents

Execution-only. Receive one self-contained prompt, do the file or code work, and return the result as evidence.

Execution agents must not be handed broad orchestration docs and told to figure out the mission. Context is distilled by the orchestrator before it reaches the agent.

Named chats are orchestration chats only. VS Code agent runs are unnamed execution prompts. Claude Code is one execution-agent option; it is not an orchestration chat or project-source mirror.

---

## The direct execution lane

When a task is fully specified, bounded, and needs one execution pass, MainOrch, SubOrch, or TaskOrch may send an execution prompt directly to a VS Code agent without creating a TaskRunner.

Use a TaskRunner only when the task genuinely requires multiple execution rounds, prompt revisions, or active result-checking between rounds.

---

## Mandatory prompt-delivery protocol

Before every copyable prompt, the orchestrator must provide a separate plain-text destination block.

The destination block must state:
- Exact destination (which tool, which chat, which agent)
- Platform (VS Code, ChatGPT, etc.)
- Purpose of this specific prompt
- Where not to paste it

The destination block must remain outside the copyable prompt. It is context for the human, not content for the agent.

---

## External research-run naming and retrieval

When a human manually launches research in an external research system that has its own project, folder, or chat history, the research run must receive a stable, searchable title before it is launched.

Use this format:

`R{queue ID} — {short plain-English research title} [{Project Code}]`

Example:

`R1 — General Router Task Facts [OCC]`

Rules:

- The queue ID must match the approved research queue and must not change later.
- Use the same queue ID and core title in the external research chat, the returned-result handoff, and the related disk research record. Adjust only file-safe characters when needed for filenames.
- Keep temporary status, provider name, model name, and date out of the title. Those belong in the queue record or result metadata, not the stable research title.
- A follow-up run keeps the original ID and title, then adds a clear suffix before the project code. Example: `R1 — General Router Task Facts — Follow-up 1 [OCC]`.
- The title must describe the research question in plain language so a human can find the run later without opening it.

---

## How a task flows

1. Orient. A fresh chat reads the project files to confirm where the project is. State lives in files; the chat is today's working memory.
2. MainOrch decides whether work is direction (stays here) or production (goes down).
3. MainOrch breaks down a production task and decides whether it stays flat or needs a SubOrch.
4. SubOrch (only if needed) works one focused problem, produces its output, hands back up.
5. TaskOrch (only if needed) manages runners under it.
6. TaskRunner writes a self-contained prompt, sends it to an execution agent, and iterates until the task is done. Then writes a summary and closes.
7. Execution agent executes and returns the result.
8. Results flow back up. The orchestrator checks returned work against project direction. Approval is the signal for the human to authorize any repository or deployment actions.

---

## Failure mode this prevents

Collapsing the lanes. An orchestrator chat writing a prompt as if it is the execution agent. An execution agent handed the orchestration brain files and told to figure out the mission. Each layer hands down a distilled instruction and hands up a result. Context is not inherited wholesale across layers.
