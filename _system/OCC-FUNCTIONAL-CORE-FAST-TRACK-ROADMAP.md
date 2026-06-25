# OCC Functional Core Fast-Track Roadmap

**Status:** Active internal build-sequencing source. Not an implementation specification and not a claim that the app is built.

**Purpose:** Build a real internal OCC functional core in critical-path order, without temporary throwaway systems or pre-build bureaucracy. OCC must reduce coordination burden — orchestrators and agents should converge on the simplest executable path.

---

## Non-negotiable safety spine

The following constraints apply during all Functional Core build stages. They cannot be waived by orchestrators or agents:

- Build, type, and lint checks remain green.
- No uncontrolled external spend.
- No protected-context exposure (credentials, private keys, and secret-bearing content must not become ordinary model context or be silently sent remotely).
- No blind retry of state-changing work.
- No silent override of an explicit route lock or hard budget boundary.

Comprehensive validation beyond the safety spine is deferred to `B2 — Post-Build Router Validation Inventory`. It does not gate Functional Core implementation.

---

## Build sequence

These are real systems built in dependency order, not temporary prototypes.

1. **Core Project and Task State** — real projects, tasks, task lifecycle, local persistence, and folders in scope.

2. **OCC Event and Work History** — truthful task events, results, costs, approvals, and known/unknown state records.

3. **Route and Worker Capability Layer** — route descriptors, capability records, constraints, and availability state.

4. **Provider and Worker Adapters** — one real adapter contract, initially connected only to the first routes Jonathan actually uses. Verification scope for this stage: interface, authentication, pricing/rate limits, and retry/state-changing constraints for the actual routes chosen. Broad provider architecture research is not required at this stage.

5. **Context Packages and Permission Boundaries** — explicit scoped task packages and known protected-context exclusions. OCC must never assume a connected tool receives the whole project.

6. **Router and User Controls** — real route selection using the five ratified routing factors, route locks, project-level preferences, budgets, and approval boundaries.

7. **Dispatch, Queue, and Task Lifecycle** — real send/start/wait/fail/complete/needs-user states and transitions.

8. **Command Thread and Core Workspace Wiring** — real task status, route explanation, approvals, queue, and history visible in the existing shell.

9. **Restart Continuity** — reopen OCC without losing task state, history, preferences, or pending work.

10. **Internal Use and Critical-Path Fixes** — use OCC on actual OCC work; fix only blockers and immediate hard failures. No speculative scope expansion.

11. **Post-Build Router Validation Inventory** — comprehensive validation and expansion into the large internal test checklist. This is `B2 — Post-Build Router Validation Inventory`, superseding the former pre-build benchmark gate.

---

## Human-facing name conventions

- `D1` is referred to in human-facing text as **D1 — OCC Functional Core Build Plan**. It contains the detailed implementation specification; this roadmap provides the sequencing direction.
- `B2` is referred to in human-facing text as **B2 — Post-Build Router Validation Inventory**. It is no longer a pre-build gate.

---

## New work must meet one of three tests

Every proposed task must either:

1. Advance the Functional Core critical path (the build sequence above); or
2. Prevent an immediate hard failure; or
3. Enter the Deferred Work Inventory.

Planning loops, duplicate approvals, speculative test bureaucracy, and unnecessary AI-to-AI coordination are product and workflow failure modes.

---

## What is deliberately deferred

All work that does not meet the three-test threshold above is preserved — not deleted — in the Deferred Work Inventory at `_system\OCC-DEFERRED-WORK-INVENTORY.md`.

Existing research, founder direction, governance decisions, visual direction, and future ideas remain preserved. The fast-track changes sequencing, not scope.
