# Founder Briefings Wave 1 Outcome Handoff

## Purpose and date

Date: 2026-06-23.

Purpose: preserve the approved founder-level product and policy direction returned by Founder Research Briefings Wave 1, so MainOrch and TaskRunner#3 can use it without reopening the briefing cycle.

## Briefing inputs

- R7/A3 — Capability Evidence Freshness and Update Governance.
- R8/A4 — Safe State-Changing Dispatch and Recovery Patterns.
- R9/A5 — Lightweight Work Provenance and Replay Design.
- R15/A6 — Folder Context and Local-First Privacy Boundary.

## Ratified founder product and policy directions

- OCC optimizes for the customer's actual outcome: privacy, cost, quality, control, and reliable completion, not OCC revenue.
- OCC must not steer users toward OCC-paid API usage merely because OCC makes more money, and must not become merely an API manager.
- OCC uses a Protected / Smart Default privacy posture: it is agentic inside user-selected privacy rules, avoids routine privacy popups, and treats credentials, private keys, access tokens, and secret-bearing logs as protected context.
- Sensitive project context should prefer local processing or verified safer remote routes. A rare exception prompt is appropriate only when a genuinely heavy or important task cannot reasonably complete locally and would require remote processing of identified sensitive context.
- State-changing work must keep the no-blind-retry boundary, validate outcomes through cheap deterministic or provider-native checks where available, retry only with verified idempotency or approved recovery support, remain bounded, and escalate only when approved recovery paths are exhausted or the outcome remains materially unknown.
- OCC's intended memory direction is persistent, local-first continuity across chats, providers, projects, and task history.
- Semantic/RAG memory and truthful provenance/work history are distinct concepts and must remain distinct in later design.
- One canonical project lives on the user's disk. OCC coordinates connected-tool access through explicit, scoped permissions and must never assume a connected tool receives the whole project.
- OCC should recognize customer-owned API keys, local models, legitimate subscription-backed routes, and coding tools. Normal chat should preserve manual model choice and show honest cost expectations for API-backed choices.
- OCC should move toward a standardized connector/provider framework with capability description, scoped permissions, auditability, revocation, safe task delivery, result ingestion, and official-interface boundaries.

## Direction versus open mechanics

The directions above are ratified product and policy direction. They do not decide credential storage, memory storage or indexing, retention/deletion design, recovery ladder details, idempotency registry design, connector protocol design, subscription integration mechanics, telemetry policy, or router-core implementation.

No credential-storage solution is approved. Credential storage and handling require dedicated research plus expert-grade implementation and review before any build commitment.

## B1 scenario requirements from R7-R9

B1 should include scenarios for:

- customer-outcome routing;
- freshness, uncertainty, and evidence visibility;
- protected-context handling;
- state-changing validation and bounded recovery;
- truthful provenance separate from memory.

## Non-binding research candidates

The briefing cycle preserved six future research candidates:

1. Privacy-preserving task packaging and data-egress controls.
2. Local-first memory and privacy-aware retrieval.
3. Recovery reliability and low-cost deterministic validation.
4. Subscription-native workspace interoperability and canonical project sync.
5. Extensible connector/provider onboarding and verification.
6. Enterprise internal delivery mode and future multi-OCC federation.

Each candidate requires a dedicated approved research lane and Research Packet Declaration before launch. None is current router implementation scope.

Company/internal delivery is a future direction for work, outputs, and delegated tasks to colleagues or approved internal applications, with identity, permissions, audit, and revocation. Multi-OCC federation is a separate advanced future direction, disabled by default and never encouraged for ordinary users. Future federation requires explicit high-consequence confirmation and clear warnings about compounding API spend, conflicting changes, file damage, data exposure, and recovery limits. Legal wording and liability treatment require separate professional review.

## What must not delay B1 or D1

The six research candidates do not delay B1 or D1 by default. Privacy-preserving task packaging, memory retrieval design, recovery reliability research, subscription-native interoperability, connector/provider onboarding, enterprise internal delivery, and multi-OCC federation all require later dedicated approval before launch.

## Remaining MainOrch decisions

- Split-gate interpretation.
- Semantic-feedback governance.

Both remain unresolved and must be resolved before B2 and D1.

## Explicit non-approvals

This handoff does not approve router code, credential storage, connector implementation, telemetry, subscription proxying, or federation.
