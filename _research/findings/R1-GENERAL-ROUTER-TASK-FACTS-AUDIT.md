# R1 — General Router Task Facts — Audit

**Research run title:** `R1 — General Router Task Facts [OCC]`  
**Research status:** Complete  
**Audit status:** Accepted as research input with corrections  
**Raw result location:** `_research\findings\R1-GENERAL-ROUTER-TASK-FACTS-RAW.md`  
**Related architecture source:** `_architecture\ROUTER-RECONCILIATION.md`

---

## What R1 supports

R1 supports OCC using a structured task-fact record before it makes a routing decision.

The router needs to understand the actual structure and constraints of a request, rather than using broad labels such as "coding" or "research."

The useful task facts identified by R1 include:

- User goal
- Expected result
- Urgency
- User presence
- Output quality requirement
- Cost sensitivity
- Required tools and files
- Permissions
- Risk and reversibility
- Human approval needs
- Privacy sensitivity
- Missing information or ambiguity
- Dependencies
- Likely work size
- Whether work can safely be split

R1 also supports using adjacent systems as sources of transferable ideas. Examples include scheduling systems, workflow systems, approval systems, and resource-allocation systems.

These are reference examples only. OCC does not adopt any named framework or provider because it appeared in this research.

---

## Accepted corrections

### 1. Urgency and user presence remain separate

A user being active does not automatically make a task urgent.

- **Urgency** means how quickly the result loses value.
- **User presence** means whether the user is available to review, answer questions, or wait for the result.

They are separate OCC routing factors and must remain separate in future research and design.

### 2. Output quality requirement must be included

R1's proposed task-fact record did not clearly include output quality requirement.

OCC's five locked routing factors include:

1. Cost
2. Time / urgency
3. User presence
4. Model fit
5. Output quality tier

The task-fact record must include the requested or inferred output quality tier so the router can apply the five-factor decision process correctly.

### 3. Task facts are versioned, not permanently frozen

The first task-fact record is an initial classification, not an unchangeable object.

OCC should preserve the original classification for auditability, then create versioned updates when new facts emerge during clarification, planning, execution, review, or a user correction.

The router must be able to explain:

- What it originally believed
- What later changed
- Why that change altered the route, schedule, approval state, or assigned capability

### 4. Named systems are examples, not commitments

R1 mentions systems and ideas associated with Slurm, Temporal, Kubernetes, RouteLLM, and others.

These are useful examples and research references only.

They are not OCC framework choices, implementation requirements, provider dependencies, or product commitments.

OCC remains provider-neutral. Implementation choices remain open until evidence supports a later architecture decision.

### 5. Claims must remain evidence-governed

Do not use claims such as:

- "mathematically safe"
- "guaranteed"
- "highest-tier model"
- "optimal route"

OCC can make repeatable and explainable decisions under its configured rules and available evidence. It cannot claim certainty where the evidence does not support certainty.

---

## What remains unresolved

R1 does not prove:

- Which classifier approach should be used
- Whether a local classifier is accurate enough or fast enough
- Which storage, scheduling, or workflow system OCC should use
- Whether task splitting produces better results for a given task shape
- What real-world routing accuracy or savings OCC will achieve

These require later evidence and testing.

---

## Queue impact

R1 is accepted as input to the router task-fact design.

The next approved research question is:

`R2 — Capability Registry Evidence [OCC]`

R2 must use the corrections in this audit as active context.

The original R1 Gemini result must be preserved separately as a raw research artifact. Do not overwrite, rewrite, or treat this audit as a replacement for the original result.
