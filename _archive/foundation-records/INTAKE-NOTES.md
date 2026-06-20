# OCC Intake — Notes & Corrections (transitional)

**Created:** 2026-06-18
**Status:** Working notes. **NOTHING in `_Intake` is locked.** Any "Vision Lock / Approved Foundation / locked" line inside these files is inaccurate and is overridden by this note. These are pre-launch reference inputs that will feed the real VISION / BUILD files during consolidation (after HKB is finished). This file gets absorbed into a proper CURRENT-STATE / DECISIONS / VISION set at that time — it is not the final structure.

**Why this exists:** to make the intake info accurate and current so the HKB-finishing research (running in a separate chat) doesn't get steered in a wrong direction.

---

## What OCC is (confirmed direction)

- **Name:** OCC = **Overseer Command Center.** (The "Orchestration and Creation Core" expansion is wrong — it appears only in the PRS pitch doc and is a PRS-side fix, not an intake fact.)
- **Purpose:** an AI orchestration tool Jonathan is building because it didn't exist yet — unified control across all AI providers (chat / code / research), automatic routing, task delegation, budget tracking, bring-your-own-API-keys. Built for himself first, sellable to founders/builders. VS Code-first; Electron/browser later.

## Architecture (the vision doc had this right — keep it)

- **The brain is in the APP.** The app holds the intelligence: routing logic, delegation frameworks, budget rules, provider registry. That is the product and the proprietary value.
- **The model is a swappable DRIVER behind the brain.** Any model can drive it. Jonathan drives it with his **local LLM.**
- The vision-v3 doc's "the app is the brain, the AI is the engine" framing is correct and stays.

## What HKB is (and isn't)

- **HKB is the VS Code plugin** — a rough, manual prototype currently acting as a "terrible OCC" (manual delegation: paste prompts to agents, copy results back).
- **HKB is NOT the brain** and is not a proprietary agentic engine.
- **HKB → OCC = prototype → real app.** HKB is being used to *build* OCC, and OCC is based off it. HKB is being finished/aligned in a separate active chat right now.

## Corrections to carry back to PRS (parked — not today's job)

The PRS pitch (`CORE-NARRATIVE.md`) is out of line on three points; fix on the PRS side:

1. Calls OCC "Orchestration and Creation Core" → should be **Overseer Command Center**.
2. Frames HKB as the proprietary brain/engine OCC is built on → HKB is just the bootstrap prototype; **the brain is in the app**.
3. Says "OCC autonomously generates and launches vertical applications by month 4–6" → overstates it. Reality: Jonathan will *use* OCC to build other things. **OCC is not an autonomous app-shipping product.**

## Known staleness / contradictions to resolve at consolidation

So the research doesn't get misled:

- **Storage:** vision-v3 + build-plan say SQLite; the later (May 7) ChatGPT handoff says **no SQLite — JSON / in-memory only**, and names **LiteLLM** as the likely provider/budget layer. The May 7 decision is current.
- **Model registry is stale and inconsistent:** vision-v3 lists GPT-5.4 / Opus 4.6 / Gemini 3.1 / Grok 4.x; the build-plan's `registry.json` lists 2024-era IDs (`gpt-4o`, `claude-sonnet-4-20250514`, `gemini-2.5-flash`, `grok-3-mini`). Refresh to the current lineup at research/build time (e.g. Anthropic is on Opus 4.8 now, not 4.6).
- **Document recency / supersession:** vision-v3 + build-plan are **Apr 23**; the ChatGPT handoff is **May 7** and explicitly *parks* the big-vision Phase 1 in favor of a tighter **"OCC v1"** — and states the v1 feature scope still needs to be defined. So: the later doc wins on conflicts, and **v1 scope is an open item**, not locked.
- **Vision coverage:** vision IS already covered — `OVERSEER-COMMAND-CENTER-VISION-v3-FINAL.md` is the vision doc. At consolidation it becomes the basis for the real VISION.md, reconciled with the May 7 v1 scope.

## New feature to develop during OCC build (CONCEPTUAL — app-phase)

A storage/history system like the major AI chat apps, but more customizable and user-friendly:

- **Left-side panel = a log of all chats.** Each chat expands to show the sub-chats OCC delegated under it — every prompt and every interaction visible and retrievable.
- **Projects** can be created in the panel (like ChatGPT/Claude projects).
- **Differentiator: projects bind to real disk folders.** Make a folder on the computer and it shows up as a project in OCC, with file access — not a cloud sandbox.
- **Local-first** for now; recommend a git / Google Drive (or whatever works) backup. **Cloud services** offered eventually.
- Hardware-gated (no dedicated-server budget yet) → needs research.
- This evolves/replaces the vision-v3 "Multi-Session System," "Data Storage and History," and "File Access for All AIs" sections into a single familiar projects-and-chats UX. To be fully specced during the OCC build.

## New feature to develop during OCC build — automated debugging (CONCEPTUAL — app-phase, last-5%)

The capability that would let OCC actually replace the studio's coding department. Today the loop is "AI debugging AI work" with a **manual step in the middle** — Jonathan screenshots what's broken and describes it to the AI. The goal is to automate that middle step away.

- **Close the observation loop.** Instead of a human seeing and describing the break, feed the system the real signals directly: stack traces, console errors, failed-test output, runtime logs, and **automated screenshot capture** the agent reads itself for UI bugs.
- **Then an agentic debug loop:** detect error → hypothesize cause → reproduce → fix → re-test → repeat, with human approval gates as desired.
- **Seed already exists in research.** The 2026-05-01 delegation synthesis (`D:\_research\ai-orchestration\synthesized\`) has a Failure Recovery section — anomaly detection, a diagnostic feedback loop that turns a failure into a specific actionable reason, and fallback routing. That is the starting point for OCC's debugging brain.
- **Needs its own OCC research thread** (alongside auto-delegation): how to capture and feed these signals automatically, and how the agent identifies the actual bug rather than guessing. To be specced during the OCC build.

---

*Transitional file. Delete or fold into CURRENT-STATE / DECISIONS / VISION when the intake is converted into the working OCC project (post-HKB).*
