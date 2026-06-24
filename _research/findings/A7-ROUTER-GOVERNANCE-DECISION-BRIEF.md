# A7 — Router Governance Decision Brief [OCC]

**Classification:** A — internal governance decision brief.
**Status:** Ratified by MainOrch and Jonathan. 2026-06-24.

---

## Purpose

This brief is the durable record of two governance decisions that control how OCC routes tasks at execution time. They were developed through R7/A3, R8/A4, R9/A5, founder direction, and B1 scenario review, and are now ratified. They must not be changed without a new MainOrch decision.

---

## Ratified Decision 1 — Adaptive Split-Gate Governance

OCC may execute only a verified route that currently meets the task's binding requirements, customer-outcome needs, applicable privacy rules, budget ceilings, and existing approval scope.

Materially relevant alternatives that are cheaper, local, customer-owned, subscription-backed, explicitly user-preferred, or potentially better must remain visible when they are blocked, uncertain, stale, unavailable, unconnected, or otherwise not executable. OCC must show the reason. It must not hide such routes or present them as ready.

When a currently unavailable route has an equal-or-better verified substitute for the actual task against the binding requirements and user-selected priorities, and that substitute remains within the task's existing approval, privacy, and budget boundaries, OCC should show a visible "about to continue" decision in the Command Thread with a 10-second override countdown. The user can stop, hold, or choose a different route. If the user does not intervene, OCC may proceed with the verified substitute rather than silently waiting forever.

An explicitly user-selected or user-controlled route is treated as likely preferred by default. This includes a high-value local model, a customer-owned route, or an unconfirmed subscription connection. OCC must give the user a meaningful opportunity to restore or confirm that route before abandoning it, then follow the user-configured, context-sensitive continuation policy rather than stalling indefinitely.

A substitution may not override an explicit route lock, a required new approval, protected-context rules, state-changing safeguards, or a hard budget limit.

Exact timer lengths beyond the 10-second safe-substitution default, notification channels, messaging or call behavior, and implementation mechanics remain open.

### Alternatives considered

- **Hide blocked routes:** rejected — users must see why a preferred route is unavailable.
- **Allow uncertain routes to execute:** rejected — OCC may only execute a verified route meeting binding constraints.
- **Retain visible non-executable alternatives without a countdown:** considered; insufficient alone — silent indefinite stalling when a verified substitute exists is also not acceptable.

---

## Ratified Decision 2 — Adaptive Task-Fit and Semantic-Feedback Governance

OCC begins from evidence-backed model and task-fit guidance, but may make small, reversible, task- or project-local routing adjustments during active work based on observed progress, error burden, troubleshooting burden, rescue by other routes, time, predicted and observed cost, quality needs, and the user's settings.

These active-work adjustments must remain traceable and must stay within binding requirements, user route locks, privacy rules, approval scope, and budget ceilings. They are not durable global claims that a model is broadly good or bad.

A single difficult task, subjective complaint, disputed reviewer judgment, isolated API success or failure, or unverified rescue outcome must not silently rewrite broad capability guidance. Direct operational facts and semantic-quality judgments remain distinct.

Durable cross-project capability guidance may change only after meaningful accumulated drift is validated during user-designated low-priority or idle time. That validation must preserve traceability, distinguish operational facts from semantic judgments, consider whether the project rather than the model caused the difficulty, and remain inside existing privacy boundaries.

Users must eventually be able to leave task-fit behavior adaptive, adjust it manually, or lock it to their chosen preference. System defaults must support project-level overrides.

A budget is a ceiling, not a spending target. A higher budget may permit faster or higher-quality choices when the user asks for them, but budget size alone must not cause unnecessary spending.

Exact weights, scoring formulas, validation thresholds, research cadence, UI design, and technical mechanisms remain open.

### Alternatives considered

- **Automatic broad updates:** rejected — a single data point must not silently rewrite capability guidance.
- **No learning (fully static):** rejected — small, traceable, task-local adjustments based on observed evidence are permitted.
- **Bounded adaptive local adjustment with validation:** ratified — active-work adjustments are local, traceable, and bounded; durable changes require accumulated drift and idle-time validation.

---

## What remains deliberately open

- Exact timer lengths beyond the 10-second safe-substitution default.
- Notification channels, in-app notice, message, or call behavior.
- Scoring weights, formulas, validation thresholds, research cadence.
- UI and implementation mechanics.
- Continuation policy configuration interface.

---

## Founder-direction capture

The following are high-priority, non-binding future product/governance direction only. They are not active research, approved implementation, autonomous external research, self-updating intelligence, credential handling, connector scope, or shared learning.

- **Richer continuation and escalation mechanics**, including future in-app notice, message, or call channels where permissions allow.
- **User-customizable assistant profiles and working-style/system-prompt preferences.**
- **Future progress-aware validation and low-priority/idle-time validation mechanics.**

---

## Why B2 is required

The two decisions are ratified and define behavioral intent for split-gate and semantic-feedback governance. B2 is required to turn their behavior claims into bounded measurable tests before D1 can proceed. B2 has no approved scope yet.

---

## Scope limits of this document

A7 does not authorize B2 work, D1 work, router-core implementation, or external research. It does not authorize credential handling, connector design, federation, privacy-tier design, or shared-learning implementation.
