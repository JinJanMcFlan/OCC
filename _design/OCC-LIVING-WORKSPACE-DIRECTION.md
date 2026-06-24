# OCC — Living Workspace Direction

**Status:** Visual and product direction handoff.

> This document is visual and product direction. It is not approved implementation scope, an architecture specification, or a claim that these behaviors are already built.

**Last updated:** 2026-06-24

Related sources:
- `_system\FOUNDER-DIRECTION.md` — founder intent and internal principles
- `_system\APP-VISUAL-DIRECTION.md` — shared-source summary

---

## Core design language

**Design mottos:**
- `Simple structure. Deep behavior. Invisible craftsmanship.`
- `Quiet precision with a living substrate.`

OCC draws visual inspiration from high-end work — specifically the direction of Jonathan's Deuterium3D / ProjectARC work — translated into a distinct precision-software identity.

**Foundation:**
- Dark cinematic graphite / near-black as the base
- Fine material depth and subtle micro-texture throughout
- Precise typography, thin architectural lines, restrained glow
- Color language favors blue → indigo → purple over a blue-heavy palette

**What OCC is not:**
- Flat black with harsh contrast
- Permanent bright-purple cyberpunk gamer UI
- Generic glassmorphism or translucency effects
- A generic Electron dev shell or IDE clone

**The target experience:** Familiar and immediately usable. Unusually alive, premium, and deep over time. A user should be oriented from the first moment and surprised by the quality of the space as they spend more time in it.

---

## Base shell and hierarchy

The current four-region foundation is preserved:

- **Left:** Projects and conversation tree
- **Center:** Command thread
- **Right:** Inspector / controls
- **Bottom:** Queue

**Visual hierarchy rules:**

- The center thread is the visual anchor. It has the strongest presence.
- Left and bottom are quieter, recessed infrastructure — they support without competing.
- Right is a more raised inspector surface, present but subordinate to center.
- Panels must not all carry equal visual weight. Hierarchy is an intentional design property, not a failure of consistency.

**Top bar direction:**

A custom minimal top bar carries: OCC mark, active workspace/project context, Work / Flow / Presentation mode selectors, ambient status, command/search, and desktop window controls.

Traditional native menus must not dominate the permanent surface. Any native-menu change remains a deliberate decision (see `_system\APP-VISUAL-DIRECTION.md`).

The current Electron shell is a layout reference. It is not a visual ceiling.

---

## Living Ambient Intelligence Field

The Living Ambient Intelligence Field is OCC's subtle abstract visual body language. It expresses work state and the user's selected workspace style. It is a core visual concept, not a fixed gradient.

**What it is:**

It is a quiet, living layer beneath the workspace — a field that breathes with the state of the work. It is ambient, not decorative. It does not demand attention; it rewards it.

**Potential movement languages** (inspiration references, not literal effects):
- Distant murmuration or swarms
- Silk or ink diffusing in water
- Aurora diffusion
- Magnetic-fluid behavior
- Watercolor flow
- Calm waves
- Wind through grass

These are aesthetic directions. Implementation must not treat them as prescriptive effects.

**What it is not:**
- Animated wallpaper
- A random gradient blob cycling through colors
- Visual noise or motion for its own sake

**Intensity by mode:** It becomes calmer and more localized in Work Mode and Flow View. It can occupy the full spatial environment in Presentation Mode.

**Example state behavior:**

| State | Visual expression |
|---|---|
| Resting / available | Midnight blue, indigo, soft purple depth |
| Reading / thinking | Subtle inward concentration; energy gathers rather than spreads |
| Delegating / parallel work | Layered blue-purple activity; faint directional current |
| Waiting for the user | Calm green-blue waves; the workspace is calmly holding something |
| High focus | Active work gains clarity; irrelevant work softens and darkens; gentle vignette directs attention |
| Friction / stress | Reduced noise, slower movement, more breathing room for the active task |
| Completion | Work exhales; some visual energy remains as proof; most redistributes; completed clusters settle into calm harmonious background states rather than dead weight |

**Near-term adaptation boundary:**

Near-term adaptation must rely on explicit settings, task state, interaction context, and user-controlled intensity. Any more personalized focus or mood-support behavior requires evidence, transparency, opt-in, easy disablement, privacy protections, and non-diagnostic boundaries.

---

## Work Physics and adaptive workspace

> You do not merely navigate the UI. You move the center of gravity of your work.

**Micro-presence behaviors:**

- Hovering a panel creates a tiny screen-relative bloom
- Clicking makes it slightly more present
- These effects scale by display size and resolution: restrained on small displays, more spatial on ultrawide / 8K
- Manual resize and full-screen always override automatic behavior

**Attention transfer behaviors:**

- Related work gently wakes and makes space when attention transfers
- Hovering down a dependency chain previews focus and lets surrounding items shift before the user commits to selecting
- Active work pulls attention
- Blocked work has tension
- Waiting work is held
- Completed work drifts
- Pinned work becomes a gravity anchor
- Urgent work has sharper presence
- Approved background work remains quiet

**Customization through use, not settings complexity:**

Customization should emerge naturally from how the user works, not from a settings page they must configure:

- Drag a project, chat, task, or window anywhere
- Pin it as a major anchor
- Move the pin and let surrounding work reorganize around the new center
- Minimize a window into a panel or bubble
- Scale it larger or smaller
- Allow related work to flow into or out of that anchor

The workspace self-organizes while remaining user-directed. The user is always in control of the gravity.

---

## Three living modes

All three modes are alive. They differ in arrangement, visual intensity, and permitted expression — not in whether the workspace is present.

---

### Work Mode

The normal daily driver.

- Familiar, premium, adaptive, and restrained
- Living field remains nearly subconscious — it is present but does not compete
- Panel bloom, focus gravity, mouse wake, subtle response animation, and OCC's small presence are all active but quiet
- No fake dependency graph in normal chat — real relationships belong in Flow View and Presentation Mode, backed by shared work data
- Must be immediately understandable to a first-time user

Work Mode is where most work happens. It must not feel like the lesser version of something else.

---

### Flow View

The technical worktable.

- Grey-blue, flatter, structured, calm
- More like a table OCC uses than a diagram the user is trapped inside
- Clean 2D dependency and parent/child navigation
- Supports technical users who want clear logical structure without the full intensity of Presentation Mode
- OCC's representation can exist beside or above the worktable, as a presence rather than a node

Flow View is a tool for understanding, not a theater for complexity.

---

### Presentation Mode

Full-screen spatial living workspace.

**Spatial layout:**
- Central view remains minimal: chat focal point(s), projects, task chains, dependencies, and Overseer
- Side panels retreat to edge-hover tabs by default
- Panels can be pulled out, dragged, resized, pinned, minimized, or turned into bubbles

**Project and work organization:**
- Multiple projects coexist as spatial territories, each with a readable consistent root
- Projects and their chats cluster nearby
- Distant delegations may approach when space is constrained
- New projects retain a consistent root size regardless of when they were added
- Work weight affects node size and prominence
- Completed clusters reduce in weight and settle into harmonious background states
- Active chains gain movement, visual pull, and more spatial room

**Screen and scale:**
- Multiple local states can coexist while the overall screen remains harmonious
- Designed to reward large ultrawide displays — particularly a 57-inch monitor
- Presentation Mode should become a serious full-time habitat for power users, not merely a showcase or demo mode

---

## Visual intensity

Layout mode and visual intensity are separate controls. A user may be in Work Mode at high intensity or Presentation Mode at low intensity. These are independent.

**Illustrative progression** (percentages are illustrative, not locked values):

| Setting | Approximate intensity |
|---|---|
| Work Mode default | ~10% |
| Flow View default | ~40% |
| Presentation Mode default | ~80% |
| High-intensity personal use | ~95% |
| "Unbound" / art-forward mode | ~110% — intentionally ridiculous and beautiful |

**Requirements:**
- Users must be able to reduce intensity substantially or nearly disable it
- Advanced users may choose high intensity
- "Unbound" mode is an optional, intentionally expressive setting — not the default

---

## Overseer presence

"Overseer" is the current placeholder identity. It is subject to later renaming and user customization. The exact form requires extensive visual exploration and must not be locked prematurely.

**Core direction:**

- Tiny, refined, computer-native abstract presence
- Small floating form with expressive optical / keycap-like eyes or lenses
- Tech-inspired-into-human expression — not human-inspired-into-tech realism
- Not a meme mascot, not a humanized robot, not Clippy 2.0

**Behavioral presence:**

- Replaces generic loading spinners with a visible, subtle intelligence presence
- Lives in empty Command Thread space without dominating it
- Looks toward the prompt while the user types
- Moves toward a quiet corner while thinking
- May show subtle micro-text such as "mapping this…", "checking the route…", or "holding for you…"
- Uses the user's chosen name, not generic placeholder language
- Fades back during deep work; becomes quietly visible when awaiting the user
- Has idle behavior and can rest in calm completion states
- May be playfully dragged with tasteful micro-reactions

**When the user is away:**

Overseer may only act within already-authorized background objectives, approved monitoring, approved update checks, already-authorized organization, or waiting on dependencies. It must never invent work or broaden scope in order to appear alive.

---

## Personalization intake and first-run experience

**Label:** Future product direction only. Not current architecture, not billing, not provider integration, and not an approved build scope.

**Direction:**

- Optional Personalization Intake as part of first-run
- User may answer questions to form a personalized working prompt/profile
- User may optionally upload supporting documents or existing prompt/context exports
- OCC confirms what it understood, asks targeted follow-ups, and lets the user review, edit, and confirm their profile
- Handle sensitive content local-first where practical
- Require clear consent and explain retention and routing

**Handling boundaries:**

Credentials, private keys, access tokens, and secret-bearing logs must never be treated as normal profile material.

**Desired greeting example:**

> James receives his first copy of OCC. The clean app opens, recognizes his chosen name through intake, and greets him personally: "Nice to meet you, James."

This should feel personally tailored from the first moment — not generic onboarding copy.

**Budget and economics:**

The founder's intention is that friendly conversation and basic intake should avoid consuming paid task budget where possible. Founder-hosted local capacity or a subsidized low-cost/free intake route are possibilities only. Economics, infrastructure, privacy model, capacity, pricing, and provider choice for intake remain entirely undecided.

---

## Parked commercial idea

The following is preserved as non-binding commercial exploration only.

Possible visual-style packs, premium Living Ambient Intelligence Field looks, or optional microtransactions for cosmetic workspace aesthetics may be worth exploring at a future point.

**This is not:**
- A monetization decision
- A product requirement
- An investor claim
- A pricing plan
- An implementation task
- Permission for dark patterns

The default visual experience must not be weakened to create a tier above it. Any commercial exploration in this area requires separate deliberate founder review.

---

## Future evidence needs

The following areas require evidence before the relevant direction moves to implementation. This is recorded for future reference — it is not a launch of research, not an approved research lane, and not a work item.

- Color theory and focus: how color environment affects concentration
- Movement, cognitive load, peripheral attention, and visual fatigue
- Focus recovery and friction reduction in digital environments
- Accessibility: reduced motion, contrast, seizure safety, and user-controlled disablement
- Consent, privacy, and interaction boundaries for personalized or adaptive behavior
- Technical performance of ambient visual systems across monitor sizes and hardware configurations

---

## Creative continuation boundary

The next App Visuals continuation chat carries a specific character. Record it here so future chats can match it:

- It is high-energy, creatively passionate, personal, excited, and collaborative
- It is a "hype chat" and creative passion-builder — not a dry implementation-planning session
- It must stay truthful about concept, built state, evidence needs, privacy requirements, cost realities, and project boundaries at all times
- It must not generate images directly in the discussion chat
- It must not write image-generation prompts until Jonathan explicitly asks

Once Jonathan asks, it prepares prompts for separate image-generation chats or tools.

**First concept-image batch** (eventual, not immediate — requires Jonathan to ask):

1. OCC at rest in a personalized empty workspace — the space before work begins.
2. OCC mid-orchestration, with active work visibly pulling the environment into shape.
