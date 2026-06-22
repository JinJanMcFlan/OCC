# A6 — Folder Context and Local-First Privacy Audit [OCC]

**Source raw file:** `_research/findings/R15-FOLDER-CONTEXT-AND-LOCAL-FIRST-PRIVACY-BOUNDARY-RAW.md`
**Classification:** A — Internal audit
**Status:** Accepted as build-accelerating research input with corrections
**Downstream use:** Folder binding and Base UX context planning. Does not block D1.

---

## What it supports

- Folder binding should start from explicit user intent through an OS-native folder picker. Programmatic or renderer-driven path ingestion must not be used as an alternative.
- The renderer must remain separated from privileged filesystem access through controlled IPC. The main process is the only process that may act on filesystem paths, and it must validate all inputs from the renderer before acting.
- OCC needs clear controls over local folder context, external transmission, revocation, and disconnected folders. Users must be able to see what is bound, understand when a binding has been lost, and initiate re-binding deliberately.
- Separating lightweight folder topology — paths, names, sizes, timestamps — from semantic file content is a useful candidate privacy model. Topology can inform routing decisions without exposing file contents to the LLM context or to external providers.
- Silent external transmission of local semantic content is incompatible with local-first trust. Any route that sends local file contents to a remote provider requires an explicit user acknowledgment at that point in time, not a session-level assumption.

---

## Corrections and boundaries

- Electron, OS, and CVE claims in the raw report (contextIsolation defaults, security-scoped bookmark behavior, CVE-2025-31191, CVE-2026-34926, CVE-2026-26462) require verification against current official sources before any become accepted facts in design or implementation decisions.
- The proposed topology, semantic, network, and revocation layers are candidate design patterns from the raw report. They are not approved architecture.
- A hardcoded secret-file blocklist is a useful layer of defense-in-depth. It is not a complete secret-detection system. File extension matching does not cover all paths by which secrets can appear in a context window.
- Split-gate behavior is not approved. References to a "Split-Gate" or "R3 Split-Gate" in the raw report reflect candidate patterns tied to that pending MainOrch decision.
- No final filesystem scanner, storage model, connector contract, or provider-sharing policy is selected by this audit.

---

## What can feed next

- **Native-picker-only folder binding.** Folder binding must be initiated exclusively through an OS-native file dialog. This is the starting constraint for any folder-binding implementation.
- **Explicitly visible bound-folder and disconnected states.** The Base UX must make it clear to the user which folders are bound, when a binding becomes stale or disconnected, and what action is required to restore it. Auto-recovery attempts that bypass user intent are not acceptable.
- **Privileged main-process IPC validation.** All file-path inputs arriving from the renderer must be validated in the main process before any filesystem operation proceeds.
- **Context visibility and transmission controls that keep the default Base UX calm while making risk visible when needed.** The default experience should not generate constant friction; visible risk signals should appear when an action would cross a meaningful privacy boundary, such as sending local file contents to an external provider.
- **Folder context must remain independent from D1 router blocking work.** Implementation of folder-binding capabilities is a separate track that does not gate the D1 Router Build Package.

---

## Beyond the Current Guardrail

**Local secret/exfiltration scanner**
A local regex or entropy-based scanner that monitors the output stream for high-entropy strings resembling credentials before they reach an external network interface. Requires validation of false-positive rates and processing overhead before it could serve as a reliable control.
Status: Parked.
Revisit trigger: False-positive rate and latency benchmarks are available for a candidate local scanner.

**Context hashes for stale-file detection**
Computing lightweight hashes of relevant files at task ingestion time and re-checking them before execution begins, to detect external modifications that would invalidate routing assumptions made against earlier file state. Deferred under current architecture boundaries.
Status: Monitor.
Revisit trigger: File-staleness issues appear in practice during routing or execution testing.

**Native zero-disk secret management**
Integrating with a native secure enclave or a secret-management service to broker credentials directly into memory for authorized child processes, eliminating the need for secrets to exist on disk in project directories. Aligns with the cognitive consolidation hypothesis and the execution sandbox direction.
Status: Escalate after D1 if a bounded execution-sandbox lane is approved.
Revisit trigger: MainOrch approves a bounded execution-sandbox lane after D1.

---

## Conclusion

R15 surfaced a useful set of OS, framework, and application-level patterns relevant to safe folder binding in a local-first desktop orchestration application. The core conclusions — that binding must start from explicit user intent through a native picker, that the renderer must be separated from privileged filesystem access, that topology and semantic content should be treated as distinct layers, and that silent external transmission of local file content violates local-first trust — are accepted as research inputs. Electron, OS, and CVE-specific claims in the raw report remain leads pending official-source verification. The layered envelope model is a candidate pattern, not approved architecture. This audit accelerates folder-binding and Base UX context planning without blocking D1 router work.
