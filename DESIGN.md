---
name: "Dinner Run — Commerce-1"
description: "A supermarket shelf-edge decision arcade that makes one bounded model choice and its evidence legible at a glance."
colors:
  ink: "#13241c"
  muted: "#617068"
  paper: "#f4f0e7"
  paper-bright: "#fffdf7"
  decision-green: "#173f2d"
  pass-green: "#2f6c4b"
  reveal-lime: "#c9f05b"
  focus-orange: "#f28b38"
  constraint-red: "#b8322a"
  rule-line: "#c9c7bd"
  white: "#ffffff"
  blocked-soft: "#ffd2cd"
typography:
  display:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(3rem, 5.6vw, 6.2rem)"
    fontWeight: 400
    lineHeight: 0.91
    letterSpacing: "-0.065em"
  headline:
    fontFamily: "Archivo Black, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.05em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
  data:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
rounded:
  square: "0px"
  shell: "13px 13px 0 0"
  pill: "999px"
  circle: "50%"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "28px"
  xl: "60px"
components:
  topbar:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.shell}"
    padding: "0 22px"
    height: "66px"
  runtime-pill:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.data}"
    rounded: "{rounded.pill}"
    padding: "9px 12px"
  dinner-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "14px"
  dinner-card-selected:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "14px"
  action-button:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 14px"
    height: "42px"
  action-button-hover:
    backgroundColor: "{colors.reveal-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 14px"
    height: "42px"
  rule-result:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "15px"
  state-pill-revealed:
    backgroundColor: "{colors.reveal-lime}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
---

# Design System: Dinner Run — Commerce-1

## Overview

**Creative North Star: "The Supermarket Shelf-Edge Decision Arcade"**

Dinner Run turns a bounded AI choice into a compact, tactile game board. The warm paper half is the shopper's familiar decision surface; the deep green half is the sealed machine readout. Shelf labels, price tickets, lettered options, geometric plate illustrations, and terse mono data make the interaction feel like a fictional supermarket without imitating a real retailer.

The system is energetic but evidentiary. Oversized black display type creates the arcade invitation, while quiet body copy and mono labels specify what is synthetic, what is precomputed, and what deterministic code controls. The reveal is not spectacle for its own sake: it exposes the complete Choice distribution, identifies the human selection, and keeps the hard-rule result visually and semantically separate from model probability.

This is an Operate surface with a one-click path: choose one complete basket, see Commerce-1's choice, inspect policy, then share or reset. The finish-contract seed is `6c956125`. The current visual regression anchors are `assets/dinner-run-sealed.png`, `assets/dinner-run-result.png`, and `assets/dinner-run-mobile.png`; implementation tokens and behavior remain the source of truth.

**Key Characteristics:**

- A near-equal paper/green split that reads as human choice versus model evidence.
- Bold, tightly tracked display typography paired with restrained sans copy and mono facts.
- Flat, rule-led surfaces with only a small hover lift and inset selection emphasis.
- Original geometric dinner illustrations instead of product photography or retailer mimicry.
- Claim boundaries embedded in the interface, not deferred to a legal footer.
- A sealed-to-revealed state change that works with keyboard, touch, and reduced motion.

**The Choice-Before-Reveal Rule.** Commerce-1's answer stays sealed until the user selects one of the same four frozen baskets.

**The Evidence-After-Action Rule.** The first interaction earns the reveal; the resulting view must expose model probabilities, the code-owned hard-rule result, and a direct evidence-receipt link together.

## Colors

The palette combines warm grocery paper with a dark institutional green, then uses lime, orange, and red as rare operational signals.

### Primary

- **Decision Green** (`decision-green`): owns the model half, sealed state, and evidence environment. It should feel authoritative without suggesting that the model controls checkout.
- **Receipt Ink** (`ink`): primary text, structural borders, and the top application bar. It replaces generic black with a green-black that keeps both halves related.
- **Reveal Lime** (`reveal-lime`): marks live/precomputed status, revealed state, the winning probability bar, and result-side focus. Its rarity gives the reveal its charge.

### Secondary

- **Constraint Red** (`constraint-red`): marks the maximum-budget ticket and a blocked/ineligible probability bar. Pair it with explicit text or an icon.
- **Focus Orange** (`focus-orange`): provides the high-visibility focus ring on light surfaces; it is not a general decorative accent.
- **Pass Green** (`pass-green`): colors the positive hard-rule icon. The adjacent “Eligible to continue” copy carries the meaning.

### Neutral

- **Grocery Paper** (`paper`): the human decision field and default choice-card surface.
- **Bright Slip** (`paper-bright`): selected cards, rule-result slips, and high-contrast light content nested inside green.
- **Quiet Copy** (`muted`): supporting explanations and secondary navigation.
- **Shelf Rule** (`rule-line`): card dividers and secondary structural rules.
- **White** (`white`): model-panel text and topbar content.
- **Blocked Soft** (`blocked-soft`): the textual “ineligible” cue on the model panel, where plain red would lose contrast.

**The Dark Green Is Evidence Rule.** Reserve the large green field for model state, probabilities, and policy outcome; do not let it become a generic marketing background.

**The Signal Needs Language Rule.** Lime, red, and green never carry pass, block, selected, or revealed meaning alone; pair them with labels, icons, border changes, or state copy.

## Typography

**Display Font:** Archivo Black (with `sans-serif` fallback)  
**Body Font:** DM Sans (with `sans-serif` fallback)  
**Label/Mono Font:** IBM Plex Mono (with `monospace` fallback)

**Character:** Archivo Black gives the game its blunt supermarket-poster confidence. DM Sans keeps the scenario conversational, while IBM Plex Mono turns budgets, timing, runtimes, option indices, percentages, and state labels into inspectable facts.

### Hierarchy

- **Display** (400, `clamp(3rem, 5.6vw, 6.2rem)`, 0.91): the mission only. Keep the tight negative tracking and deliberate line break.
- **Headline** (400, `clamp(2rem, 3.4vw, 3.8rem)`, 0.95): the model-panel title and comparable section-level reveal statements.
- **Title** (700, 17px, 1.2): strong result names and action-level messages.
- **Body** (400, 14px, 1.5): instructions and explanatory copy. Keep operational passages short; the current sealed-state measure is about 330px.
- **Label** (600, 10px, 0.1em letter spacing, uppercase): eyebrows and state/context labels.
- **Data** (500, 9–10px): prices, timing, option indices, runtime, probability values, and footer doctrine.

**The Facts Use Mono Rule.** Use IBM Plex Mono for bounded facts and system state, not for narrative paragraphs or primary calls to action.

**The Display Stays Blunt Rule.** Archivo Black is for the mission and reveal hierarchy; never use it as body copy or shrink it into dense utility labels.

## Layout

The application sits in a centered shell with an 18px desktop inset and a 1500px maximum width. A 66px three-part topbar leads into a game board whose viewport-aware height is `calc(100svh - 174px)` with a 650px minimum. On wide screens the board divides into `1.12fr / 0.88fr`: choices on warm paper, evidence on decision green. Both halves use fluid padding from 28px to 60px.

The choice area has three rows: mission, vertically centered 2×2 dinner grid, and disclosure hint. Dinner cards have a 12px gutter and preserve a stable 94px illustration column. The model side is a vertical state machine: header, sealed or revealed content, probability list, rule slip, actions, and evidence link. The method disclosure and footer sit below the board so the primary decision remains complete in one desktop viewport.

At 980px and below, the board becomes one column, the model panel follows the choice panel, and the four-part method disclosure becomes 2×2. At 620px and below, the shell inset falls to 10px, the topbar becomes two columns, the demo title hides, choices become a single list with 72px dish illustrations, the budget ticket joins document flow, the model panel keeps at least 590px, the method disclosure stacks, and footer links wrap below the doctrine. Do not hide the runtime provenance pill or evidence link on small screens.

**The Same Decision on Every Width Rule.** Responsive changes may reflow the four baskets, but may not reorder, omit, or summarize them differently from desktop.

**The Paired Halves Rule.** On desktop, paper and green must read as one bordered instrument; on mobile, preserve their sequence and shared outer frame rather than turning them into unrelated cards.

## Elevation & Depth

The system is flat by default. Hierarchy comes from tonal fields, one-pixel rules, typography, and adjacency rather than ambient card shadows. Dinner-card hover lifts by 2px, selection uses a 2px inset ink ring, and illustrated plates use only a tiny grounding shadow (`0 2px 0 rgba(19,36,28,.13)`). Toasts move vertically into view, but the primary board does not float above the page.

### Shadow Vocabulary

- **Selected inset** (`inset 0 0 0 2px #13241c`): reinforces the radio's selected state without changing layout.
- **Plate contact** (`0 2px 0 rgba(19,36,28,.13)`): grounds the geometric food illustration inside its circular plate.

**The Flat Instrument Rule.** Do not add generic drop shadows, glass effects, or layered marketing cards; the board should feel printed, bounded, and directly operable.

**The State Motion Rule.** Use short 180–200ms transitions for hover, focus, and toast state only, and collapse them to near-zero under `prefers-reduced-motion`.

## Shapes

Most interactive surfaces are square and rule-bound. Dinner cards, action buttons, the method region, probability tracks, and rule slips use zero radius. The shell allows one soft gesture: a 13px radius on the top corners of the dark topbar. Full pills are reserved for compact state metadata such as runtime and sealed/revealed status. Circles belong to plate illustrations and tiny status lights, not general-purpose containers.

The original dish illustrations are deliberately diagrammatic: nested circles form plate and rim, while a few flat geometric marks suggest pasta, tofu, pesto, or tacos. Preserve the 1px shelf-rule outline and warm plate ground. Do not replace these with third-party food photography, emoji, or a real retailer's package language.

**The Square Surface, Round Status Rule.** Content and actions stay rectilinear; only food plates and compact status indicators become circular or pill-shaped.

## Components

### Topbar and Runtime Pill

The topbar is the frame, not a marketing nav. It holds the InferCrane mark at left, demo identity in the center on wide screens, and the precomputed H200 runtime pill at right. The runtime pill's lime dot indicates state but the text carries the factual disclosure. On small screens the center label may hide; provenance may not.

### Dinner Choice Cards

- **Shape:** square card, 1px shelf-rule border, 14px padding, and a fixed illustration/text split.
- **Default:** grocery paper on the human side, with an A–D mono index, dinner title, and time/price line.
- **Hover:** ink border plus a 2px upward lift.
- **Focus:** 3px focus-orange outline with 2px offset around the label via `:focus-within`.
- **Selected:** bright-slip surface, ink border, and 2px inset ink ring. The native radio remains the semantic control even though it is visually hidden.
- **Keyboard:** arrow keys cycle through the same ordered set and update the reveal; selecting moves focus to the model heading so screen-reader and keyboard users land at the changed region.

### Geometric Dish Illustrations

Each choice uses an original CSS-built plate with a distinct food silhouette. Treat the four illustrations as identifiers, never evidence. Their colors may vary, but their 88px desktop / 72px mobile plate structure and simplified diagram language should remain consistent.

### Sealed and Revealed Model States

The sealed state centers a lime lock, “Pick first,” and one explanatory sentence. After selection, the status pill changes from outlined “Sealed” to lime “Revealed,” the human result appears first, and the complete probability distribution follows. The result region shares the model heading as its accessible label; programmatic focus moves there on direct selection.

### Probability Distribution

Rows use a stable three-column structure: option label, proportional track, and right-aligned mono percentage. The chosen model option uses reveal lime. The cashew option pairs a red bar with the textual `ineligible` tag. Always show all four baskets plus `None`, retain exact two-decimal percentages, and label this as Commerce-1 Choice probabilities.

The displayed 82.99% is the model probability for `lentil_pasta`, rounded from the canonical value in `evidence/mission-1-public.json`. It is not a deterministic policy score, eligibility probability, accuracy measure, benchmark result, confidence narrative, or authority to transact.

### Hard-Rule Result

The hard-rule slip sits after probabilities to show that policy is a separate code-owned layer. Pass uses a check icon, pass-green, “Eligible to continue,” and a sentence enumerating budget, vegetarian, time, and declared nut-warning checks. Block uses an X icon, constraint red, “Blocked before checkout,” and the concrete cashew reason. Never infer the hard-rule result from probability color or model ranking.

### Result Actions and Toast

Share and Try again are equal outlined buttons on green. Hover and keyboard focus invert to reveal lime with ink text. Share prefers the native share sheet, falls back to clipboard, and uses the polite toast for success or unavailability. Reset reseals the result, clears card selection, and returns focus to the first radio.

### Method Disclosure and Footer

The native details disclosure contains four fixed claim-boundary statements: same options, typed Choice rather than prose, deterministic rules, and real precomputed output over fictional data. The footer closes with “Commerce-1 proposes. Code enforces. You decide.” and direct Weights, Source, and Evidence links. Keep these boundaries available in the initial sealed state.

### Evidence and Claim Contract

The durable source for the demonstrated inference is `evidence/mission-1-public.json`, including H200 execution context and immutable artifact/runtime hashes. UI claims must preserve the following distinctions:

- The user and model choose from the identical frozen set of four synthetic baskets.
- Commerce-1 returns a typed Choice distribution; it does not generate the meal copy or a rationale.
- Probabilities are real precomputed model output; the store, prices, plates, and mission are fictional.
- Budget, diet, time, and allergy proceed/block checks belong to deterministic code.
- “Eligible to continue” is not checkout or purchase authorization; the user remains the authority.
- The demo is not a benchmark, nutrition tool, allergy guarantee, autonomous purchase, or live inference claim.

## Do's and Don'ts

### Do:

- **Do** preserve the paper-left / green-right decision-and-evidence relationship on wide screens and the same order on narrow screens.
- **Do** show all four candidate baskets plus `None` whenever the Choice distribution is shown.
- **Do** label 82.99% as a model Choice probability and keep the hard-rule result in its own light slip.
- **Do** keep synthetic-data and precomputed-output disclosures visible before selection, then link the exact inference receipt after reveal.
- **Do** use text, icons, border changes, and state labels alongside color for selected, revealed, eligible, and blocked states.
- **Do** preserve visible focus, radio semantics, arrow-key operation, focus transfer to changed content, live toast status, and reduced-motion behavior.
- **Do** use “basket,” “choice,” “continue,” “blocked,” or “reveal” language for the interaction; reserve “checkout” for the explicit authority boundary.
- **Do** maintain `assets/PROVENANCE.json` whenever a shipping screenshot is added or recaptured; record its hash, pixel dimensions, UI state, selected basket, source hashes, and evidence receipt.

### Don't:

- **Don't** present the 82.99% probability as a score, policy verdict, success rate, benchmark, or explanation generated by Commerce-1.
- **Don't** imply live inference, store browsing, recipe generation, payment processing, or autonomous checkout.
- **Don't** collapse the model output and deterministic hard-rule check into one pass/fail message.
- **Don't** use red, lime, or green as the sole carrier of meaning, especially for the nut-allergy block.
- **Don't** replace the original geometric meals with food photography, emoji, retailer assets, or realistic branded packaging.
- **Don't** add generic rounded cards, gradients, glassmorphism, ambient shadows, or decorative dashboards that weaken the shelf-edge instrument character.
- **Don't** remove the precomputed H200 pill, the initial disclosure hint, the method boundaries, or the inference-receipt link to gain visual space.
- **Don't** treat the screenshots as stronger evidence than code and `evidence/mission-1-public.json`; they are audited presentation artifacts, not the claim source.
