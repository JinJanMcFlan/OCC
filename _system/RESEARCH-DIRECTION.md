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

### Solve and improve posture

OCC research does not only look for existing solutions. It studies adjacent systems, companies, and research for transferable mechanisms; identifies limitations and weaknesses in those approaches; proposes evidence-backed OCC improvement hypotheses; and requires validation before treating any improvement as product direction or architecture.

This posture does not authorize unsupported claims, automatic architecture commitments, or unrestricted implementation. An improvement hypothesis becomes product direction only after MainOrch review and ratification.

---

## Cumulative-Invention Operating Doctrine

OCC research is cumulative. It studies existing mechanisms, approaches, and state of knowledge; records what they do well; identifies their limitations, failure modes, contradictions, and unresolved questions; and turns those findings into candidate OCC improvement or invention hypotheses.

OCC does not treat novelty as value by itself. A candidate improvement or invention hypothesis must identify a meaningful limitation or opportunity, state the expected OCC advantage or tradeoff, and remain open to confirmation, revision, parking, or rejection through evidence.

Negative results are useful evidence. Contradictions, failed validations, dead ends, and parked hypotheses must be retained and linked to the relevant research question where practical. Their purpose is to prevent repeated work, expose boundary conditions, and improve later hypotheses. A parked hypothesis is not a product commitment or a failure; it is an unresolved possibility with a defined revisit condition.

### Research scope separation

**Build-critical research** addresses a live decision, benchmark, or uncertainty that materially affects an approved or pending build boundary. It must identify the relevant decision owner, current boundary, and evidence needed for a decision. It does not independently expand that boundary.

**Frontier cognitive-consolidation research** investigates the longer-horizon founder hypothesis, including coordination across models, tools, memory, evaluators, research systems, and owned compute. It may inform future direction and surface promising mechanisms, but it does not block, redefine, or become a dependency of an active build unless MainOrch explicitly elevates it.

Both lanes may inform one another. They must remain visibly distinct in research records, handoffs, and recommendations.

### Research-to-decision boundary

Raw research, a promising mechanism, or a candidate hypothesis does not automatically become architecture, product direction, implementation scope, or current build instruction.

Research may support a decision-ready recommendation. The responsible orchestration review must make the evidence, assumptions, limitations, alternatives, and build implication visible. MainOrch remains the authority that reviews and ratifies any change to product direction, architecture, active scope, or implementation boundary.

### Required Research Packet Declaration

Every future research packet must declare:

1. **Existing mechanism, approach, or state of knowledge.**
2. **What it does well.**
3. **Limitations, failure modes, contradictions, or unresolved questions.**
4. **Candidate OCC improvement or invention hypothesis.**
5. **Linked prior or parallel OCC research.**
6. **Evidence, benchmark, or experiment that could support or disprove the hypothesis.**
7. **Proposed validation path and follow-up trigger.**

Where an item is not yet known, the packet must state that directly rather than infer certainty. A candidate hypothesis must remain distinguishable from evidence-backed findings, active decisions, and future possibilities.

## Beyond the Current Guardrail

This section is optional. Include it only when there is a credible adjacent observation, contradiction, opportunity, or possible breakthrough that is relevant enough to preserve but not active enough to alter current work. Limit it to three items unless MainOrch authorizes otherwise.

Governing principle:

Current build boundaries, research priorities, and unratified decisions are not walls. Research may surface credible adjacent opportunities, contradictions, and possible breakthroughs. However, identifying them does not automatically alter the active queue, architecture, implementation scope, or current build instructions.

For each item, record:

* **Observation, hypothesis, or adjacent opportunity**
* **Why it may matter to OCC**
* **Current evidence strength**
* **Why it is not active work now**
* **Status:** `Monitor`, `Parked`, `Invalidated for now`, or `Escalate`
* **Specific revisit trigger or evidence needed**

An item in this section remains outside active work until the appropriate review moves it into an approved research or build lane.

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
