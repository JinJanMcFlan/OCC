# R3 Router Policy Decision Handoff

## Decision needed from MainOrch

Should OCC formally interpret hard-rule gates as two stages?

1. **Pre-scoring eligibility filters** remove options that cannot meet non-negotiable task requirements.
2. **Post-selection commitment gates** verify the chosen route is still available, within final cost limits, and approved before execution.

## Recommended decision

Approve the split-gate principle as a clarification of the existing router direction.

Do not select a specific scoring formula yet.

The router should remain deterministic and explainable using the five locked routing factors, while the exact scoring mathematics stays open for evidence and benchmark testing.

## Why this matters

The current router direction places weighted scoring before hard-rule gates.

R3 found that scoring an option that lacks required privacy handling, tools, permissions, context capacity, or a hard budget fit is wasteful and can distort comparison.

The decision changes logical interpretation only. It does not select a provider, framework, database, protocol, or implementation.
