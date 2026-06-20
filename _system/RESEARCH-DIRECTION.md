# OCC Research Direction — High-Level Shared Source

This document is the shared source for OCC's research department. It defines what we are investigating, why, and under what posture. All research orchestrators and research TaskRunners operate within this direction.

---

## Two research domains

### 1. Market and capability intelligence

Ongoing monitoring and analysis of the AI landscape:

- Provider changes, model releases, deprecations, and migrations
- Pricing, rate limits, and API changes
- New tools, frameworks, and integrations
- Benchmarks and capability comparisons
- Emerging opportunities relevant to OCC's product direction

This domain produces routing table updates, capability registry refreshes, and product-relevant signals.

### 2. Frontier solution research

Longer-running research objectives:

- Active hypotheses with evidence registers
- Contradicting evidence and unresolved tensions
- Planned and completed experiments
- Research lanes under investigation
- Decision-ready findings handed off to MainOrch

---

## Founder hypothesis

Useful general intelligence may emerge from consolidating fragmented models, tools, memory, evaluators, research engines, and execution environments into a coordinated system.

This is a working hypothesis that needs evidence. It is not proven. It is not a customer promise. It is not a locked implementation dependency.

OCC is both a useful commercial product now and a proof environment for this longer research program.

---

## Research posture

- No arbitrary ceiling on hypotheses.
- No architecture dependency without evidence.
- Bounded experiments with clear questions and success criteria.
- Reproducibility: methods and findings must be documentable.
- Budget awareness: research runs must justify their cost.
- Auditability: findings feed decision-ready handoffs, not informal impressions.

---

## RecursiveMAS

RecursiveMAS is a high-priority research input. It is not an immediate implementation mandate. Findings from RecursiveMAS research inform OCC's architecture direction but do not lock it.

---

## Research map (active lanes)

- Latent coordination between models
- Representation bridges across model families
- Structured memory and persistent state
- Specialist swarms and role assignment
- Evaluator design and scoring
- Topology optimization for multi-agent systems
- Local model clusters and owned-compute integration
- Observability, replay, and predictive debugging
- Adjacent legitimate paths as the landscape evolves

---

## On closed providers vs. local and open-weight models

Closed-provider work must respect observable and official interfaces. Do not reverse-engineer or exploit undocumented behaviors.

Local and open-weight models enable deeper experimentation: latent-state access, link training, evaluation at scale, custom routing, and integration experiments that closed APIs cannot support.

---

## Research Engine capabilities

OCC's Research Engine is a product capability, not just an internal process:

- Persistent research objectives
- Hypothesis registers with evidence and contradictions
- Experiment backlog and scheduling
- Bounded research task execution
- Decision-ready findings delivered to orchestrators

## OCC as a dogfood environment

OCC's internal Research Engine is an internal dogfood capability: OCC uses it to research, test, and improve OCC itself. The founder's use of OCC to run OCC's own research pipeline is a proving ground for the product.

Later, related capabilities may become a user-facing product family — such as Research Mode or Continuous Research Mode — that external users can adopt for their own research programs.

This is product evolution direction, not a first-build commitment. The internal dogfood lane comes first; a user-facing research product follows after the internal capability is proven.

---

## Investor-safe statements (use verbatim)

> OCC needs an owned-compute lane capable of running the largest useful local models, multiple simultaneous specialist roles, latent-state experimentation, link training, evaluation at scale, and eventually customer-serving inference.

> OCC is provider-agnostic at the control layer, while developing proprietary locally hosted cognitive execution packages that can make multi-model work more efficient, private, and controllable than ordinary text-based orchestration.

---

## Clarity on claim levels

| Type | Examples |
|---|---|
| Product claims | OCC routes tasks deterministically; OCC tracks cost across providers |
| Working hypotheses | Cognitive consolidation may produce emergent capability |
| Research questions | Does latent-state sharing improve specialist coordination? |
| Future possibilities | Owned-compute inference; AR/VR command-center interface |

Keep these categories distinct in all documents, prompts, and external communications.
