# OCC Deferred Work Inventory

**Purpose:** Preserve ideas, risks, defects, research candidates, enhancements, validation cases, design opportunities, and future architecture work without blocking the Functional Core.

**This is a preservation and re-entry system, not an active sprint queue or approval gate.**

Existing source documents remain canonical. Entries here point to existing sources rather than duplicate them. When a deferred item becomes ready, move it to the active work order via the normal MainOrch approval process.

---

## Entry format

```markdown
## [Short human name]

- Type: Idea / Bug / Safety follow-up / Validation / Research candidate / Design / Architecture
- Source or context:
- Why deferred:
- Revisit trigger:
- Dependency or related source:
- Status: Parked / Monitor / Ready after Functional Core / Resolved
```

---

## Deferred entries

---

### Post-Build Router Validation Inventory

- Type: Validation
- Source or context: Formerly the required pre-build gate before D1. Ratified router governance decisions in A7 cover the behavioral claims this would test. B1 Router Scenario Corpus and A7 Router Governance Decisions are key inputs.
- Why deferred: OCC must be internally usable before comprehensive validation is meaningful. Pre-build benchmarking adds coordination burden without advancing the build.
- Revisit trigger: OCC is internally usable (Functional Core stage 10 complete).
- Dependency or related source: `_research\benchmarks\B1-ROUTER-SCENARIO-CORPUS.md`; `_research\findings\A7-ROUTER-GOVERNANCE-DECISION-BRIEF.md`; `_system\DECISIONS.md` (split-gate and semantic-feedback governance).
- Status: Ready after Functional Core

---

### Advanced Provider Expansion

- Type: Architecture
- Source or context: Functional Core stage 4 connects only the first routes Jonathan actually uses. All other providers are deferred.
- Why deferred: Wide provider coverage is not required for initial internal use. Breadth before depth would stall the build.
- Revisit trigger: First real adapter set is stable and OCC is in active internal use.
- Dependency or related source: `_system\DECISIONS.md` (cost-aware legitimate access, standardized connector direction); `_system\RESEARCH-OPERATIONS.md`.
- Status: Parked

---

### Full Credential-Storage Design and Expert Review

- Type: Safety follow-up / Research candidate
- Source or context: No credential-storage solution is currently approved. Credential storage and handling require dedicated research plus expert-grade implementation and review before any build commitment.
- Why deferred: Not required for initial Functional Core internal use. Cannot be skipped when credentials become live — expert review is mandatory before any implementation.
- Revisit trigger: Any route that will handle live credentials approaches build readiness.
- Dependency or related source: `_system\DECISIONS.md` (Protected / Smart Default privacy; no credential-storage solution approved).
- Status: Monitor

---

### Advanced Secret Detection, Privacy Packaging, and Remote-Egress Controls

- Type: Research candidate / Safety follow-up
- Source or context: R15 / A6 (Folder Context and Local-First Privacy Boundary). Local redaction, tokenization, privacy-preserving task packaging, and data-egress controls are identified as future research.
- Why deferred: The Functional Core safety spine already prevents protected-context exposure. Advanced packaging research can follow after core architecture is stable.
- Revisit trigger: Functional Core context-package layer (stage 5) is built and in use.
- Dependency or related source: `_research\findings\` (A6 audit); `_system\DECISIONS.md` (Protected / Smart Default privacy).
- Status: Parked

---

### Expanded Recovery Automation and Idempotency Mechanisms

- Type: Research candidate / Architecture
- Source or context: R8 / A4 (Safe State-Changing Dispatch and Recovery Patterns). The state-changing retry boundary is ratified; the exact recovery ladder, limits, idempotency registry, and technical architecture remain open.
- Why deferred: Basic state-changing safeguards (no blind retry) are already in the Functional Core safety spine. Full recovery automation is not needed for initial internal use.
- Revisit trigger: Functional Core dispatch layer (stage 7) is built and in active use.
- Dependency or related source: `_research\findings\` (A4 audit); `_system\DECISIONS.md` (state-changing retry boundary).
- Status: Parked

---

### Deep Semantic Memory, Provenance Replay, and Long-Term Retrieval

- Type: Research candidate / Architecture
- Source or context: R9 / A5 (Lightweight Work Provenance and Replay Design). Local-first deep memory and truthful provenance are approved direction; exact storage, index, retention, deletion, and retrieval choices remain open.
- Why deferred: Functional Core stage 2 builds truthful task event history. Full semantic/RAG memory and provenance replay are expansion work beyond the core.
- Revisit trigger: Functional Core history layer (stage 2) is built and stable.
- Dependency or related source: `_research\findings\` (A5 audit); `_system\DECISIONS.md` (local-first deep memory, truthful provenance).
- Status: Parked

---

### Living Workspace Advanced Behavior, Adaptive Visuals, and Overseer Exploration

- Type: Design / Idea
- Source or context: Founder direction and Living Workspace direction are the canonical sources. This is a separate creative exploration lane.
- Why deferred: Living Workspace is a creative exploration lane independent of the Functional Core build. It does not compete for Functional Core resources.
- Revisit trigger: After the Functional Core is internally usable; or in parallel as a creative lane if it does not consume Functional Core resources.
- Dependency or related source: `_system\FOUNDER-DIRECTION.md`; `_design\OCC-LIVING-WORKSPACE-DIRECTION.md`; `_system\APP-VISUAL-DIRECTION.md`.
- Status: Parked (parallel creative lane permitted)

---

### Visual-Style Packs and Optional Cosmetic Workspace Aesthetics

- Type: Idea
- Source or context: A parked commercial idea — optional purchasable or bundled cosmetic workspace aesthetics beyond the core Living Workspace direction.
- Why deferred: No product or commercial framework is in place. Not on the Functional Core critical path.
- Revisit trigger: OCC reaches sellable-alpha readiness and commercial packaging is under active discussion.
- Dependency or related source: `_system\FOUNDER-DIRECTION.md`; `_system\DECISIONS.md` (sellable-alpha direction).
- Status: Parked

---

### Enterprise / Internal Delivery and Multi-OCC Federation

- Type: Architecture / Idea
- Source or context: Research candidate 6 from Founder Research Briefings Wave 1. Multi-OCC federation is disabled-by-default future research; enterprise/internal delivery is a separate future direction.
- Why deferred: Requires dedicated expert research and significant architecture investment. Not on the Functional Core critical path.
- Revisit trigger: OCC is in active commercial use and enterprise demand is confirmed.
- Dependency or related source: `_handoffs\FOUNDER-BRIEFINGS-WAVE-1-OUTCOME-HANDOFF.md`; `_system\DECISIONS.md`.
- Status: Parked

---

### Self-Updating Intelligence, Privacy Tiers, and Optional Shared Operational Learning

- Type: Research candidate / Architecture
- Source or context: Research candidate 7 from Founder Research Briefings Wave 1. Customer contribution of content or diagnostic patterns must be voluntary, honest, plainly explained, and opt-in.
- Why deferred: Requires a dedicated approved research lane and privacy-policy groundwork. Not on the Functional Core critical path.
- Revisit trigger: Functional Core is complete and in active use; privacy policy framework is established.
- Dependency or related source: `_handoffs\FOUNDER-BRIEFINGS-WAVE-1-OUTCOME-HANDOFF.md`; `_system\DECISIONS.md` (local-first deep memory, truthful provenance).
- Status: Parked

---

### Accessibility, Motion, Contrast, and Performance Hardening for Living Workspace

- Type: Design / Safety follow-up
- Source or context: Living Workspace direction includes adaptive visuals and rich ambient behavior that will require accessibility and performance review before external use.
- Why deferred: No Living Workspace behavior is implemented yet. Hardening follows implementation.
- Revisit trigger: Living Workspace behavior is implemented and approaching internal or external use.
- Dependency or related source: `_design\OCC-LIVING-WORKSPACE-DIRECTION.md`; `_system\APP-VISUAL-DIRECTION.md`.
- Status: Parked

---

## Preserved source map

These existing documents remain canonical for their respective domains. New deferred entries should link to them rather than duplicating their content.

| Document | Domain |
|---|---|
| `_system\FOUNDER-DIRECTION.md` | Founder intent, product principles, candidate messaging, communication boundaries |
| `_system\DECISIONS.md` | All active ratified architectural and product decisions |
| `_system\APP-VISUAL-DIRECTION.md` | Visual direction, Base UX, Presentation Mode |
| `_design\OCC-LIVING-WORKSPACE-DIRECTION.md` | Full Living Workspace and adaptive visual direction |
| `_system\RESEARCH-DIRECTION.md` | Research domains, hypotheses, research posture, research map |
| `_system\RESEARCH-OPERATIONS.md` | Research artifact system, packet requirements, queue lifecycle, validation flow |
| `_research\benchmarks\B1-ROUTER-SCENARIO-CORPUS.md` | Router behavior scenarios (key B2 input) |
| `_research\findings\A7-ROUTER-GOVERNANCE-DECISION-BRIEF.md` | Ratified split-gate and semantic-feedback governance |
| `_handoffs\FOUNDER-BRIEFINGS-WAVE-1-OUTCOME-HANDOFF.md` | Founder-briefing cycle outcomes and future research candidate portfolio |
| `_research\findings\ROUTER-RESEARCH-SYNTHESIS-AUDIT.md` | Final synthesis of router research R1–R5 |
| `_system\OCC-FUNCTIONAL-CORE-FAST-TRACK-ROADMAP.md` | Active build sequencing; three-test threshold for deferral decisions |
