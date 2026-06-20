# R4 — Outcome Feedback and Safe Improvement — Audit

**Research run title:** `R4 — Outcome Feedback and Safe Improvement [OCC]`  
**Research status:** Complete  
**Audit status:** Accepted as research input with corrections  
**Raw result location:** `_research\findings\R4-OUTCOME-FEEDBACK-AND-SAFE-IMPROVEMENT-RAW.md`  
**Related research:** R1, R2, R3, and R5 router research audits  
**Related architecture source:** `_architecture\ROUTER-RECONCILIATION.md`

---

## What R4 supports

R4 supports OCC recording clear outcomes after each execution attempt.

Useful outcome information includes:

- Whether the task technically completed
- Whether required tools and dependencies worked
- Actual time and cost compared with estimates
- Whether the output met deterministic requirements
- Whether the user or another evaluator accepted, corrected, or rejected the result
- Whether retries or human intervention were needed
- The likely cause of failure, including capability limits, unclear instructions, unavailable tools, or external conditions
- Who or what evaluated the result

R4 also supports keeping operational reliability separate from result quality.

For example:

- An outage, rate limit, or timeout affects current availability.
- A poor result on an otherwise healthy service may affect confidence in its fit for that specific task shape.
- A bad prompt or missing task facts must not automatically count as a model failure.

---

## Accepted corrections

### 1. No named rating or evidence formula is approved

R4 references Glicko-2, Dempster-Shafer theory, SPRT, multi-window burn rates, Query-by-Committee, Co-Teaching, and other methods.

These are useful research references only.

OCC has not selected a mathematical rating system, statistical test, automatic confidence formula, or evaluator architecture.

The first build should use understandable, auditable evidence rules before any advanced automatic scoring is considered.

### 2. Deterministic checks have limited authority

A deterministic check can prove a specific technical fact.

Examples:

- A file exists
- A command returned successfully
- A format is valid
- A cost cap was exceeded

It does not prove that the overall result was useful, accurate, safe, or high quality.

A valid JSON response proves format compliance, not that the content was correct.

### 3. Secondary model evaluation is advisory at first

A second model may provide useful review evidence.

It must not become final authority or automatically change semantic routing knowledge in the first build.

Conflicting evaluations, high-risk tasks, and uncertain quality judgments should remain visible for human review.

### 4. User feedback is high-value evidence, not universal truth

A user acceptance, rejection, or rewrite is important evidence for that task and context.

It must still be interpreted alongside task facts, ambiguity, the requested result, and the evaluator's stated reason.

One user preference or one rejected result must not automatically become a general conclusion about a capability.

### 5. Operational updates can be automatic; semantic updates stay cautious

OCC can automatically record and use directly measured operational facts, such as:

- Actual cost
- Actual time
- Rate-limit errors
- Tool availability
- Confirmed execution errors
- Temporary capability availability

Semantic quality and model-fit changes should remain gradual, task-specific, traceable, and review-supported until OCC has benchmark evidence that automatic evaluation is reliable enough.

### 6. Temporary availability control is not permanent capability judgment

A capability may be temporarily avoided when direct evidence shows an outage, rate-limit condition, or repeated operational failure.

This does not prove that the capability is poor at the work itself.

Permanent bans, global eligibility changes, or system-wide routing policy changes require a defined human-governed process. MainOrch ratifies system-wide architecture and policy changes; it does not need to personally approve every temporary operational health change.

### 7. Split-gate evidence is supportive, not a final decision

R4 provides further support for the proposed R3 split-gate interpretation.

It does not ratify a new router pipeline.

The final split-gate decision remains part of the R1–R5 synthesis and MainOrch decision package.

---

## What remains unresolved

R4 does not prove:

- The final outcome-record schema
- The correct sample size before semantic confidence changes
- The correct automatic confidence formula
- The reliability of secondary model evaluation
- Exact health thresholds or retry rules
- When a capability should be permanently restricted
- The final feedback interface or governance workflow

These require the final router synthesis, later benchmarks, and MainOrch review.

---

## Queue impact

R1, R2, R3, R5, and R4 are complete as audited router research inputs.

No further Gemini research run is currently required for the router-research queue.

The next required work is:

`Router Research Synthesis and MainOrch Decision Package`

That synthesis must:

- Use the accepted findings and corrections from all five audits
- Separate evidence-supported direction from open questions
- Identify only genuine MainOrch decisions
- Create a build-ready package without implementing directly from raw Gemini research
