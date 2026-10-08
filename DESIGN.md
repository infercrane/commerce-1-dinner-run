---
name: "Checkout Rush"
description: "A fifteen-second commerce arcade that separates policy-safe game scoring from Commerce-1 model agreement."
colors:
  ink: "#17151f"
  ink-soft: "#514d5b"
  lavender-ground: "#f2f0ff"
  answer-paper: "#fffdf8"
  warm-paper: "#f8f5ed"
  action-violet: "#6d5dfc"
  model-violet: "#4938df"
  constraint-lime: "#d9ff67"
  focus-coral: "#ff775f"
  hairline: "#d7d2df"
  white: "#ffffff"
  on-ink-muted: "#afaab9"
  data-muted: "#746e7b"
  result-muted: "#403a47"
  warning-red: "#b43827"
  pass-green: "#287a3f"
  block-red: "#c53d29"
  block-paper: "#fff0ec"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(3rem, 5.6vw, 5.4rem)"
    fontWeight: 700
    lineHeight: 0.91
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.9rem, 3vw, 2.85rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.65rem, 2.4vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.06em"
rounded:
  square: "0px"
  console: "16px"
  console-mobile: "13px"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "6px"
  sm: "10px"
  md: "15px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  game-console:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.console}"
  brief-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "clamp(27px, 3.1vw, 44px)"
  start-button:
    backgroundColor: "{colors.action-violet}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 21px"
    height: "54px"
  answer-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "14px 13px"
  answer-row-hover:
    backgroundColor: "{colors.action-violet}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "14px 13px"
  model-pick:
    backgroundColor: "{colors.model-violet}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "14px 15px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "42px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "42px"
  policy-pass:
    backgroundColor: "{colors.answer-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "14px 15px"
  policy-block:
    backgroundColor: "{colors.block-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "14px 15px"
---

# Design System: Checkout Rush

## Overview

**Creative North Star: "The Fifteen-Second Checkout Cabinet"**

Checkout Rush turns one bounded commerce decision into a short arcade mission.
A lavender floor holds a single ink game console: receipt-like mission telemetry
on top, Maya's fixed customer brief at left, and a paper start/choice/result deck
at right. Bricolage Grotesque supplies the game-show urgency; DM Sans and IBM
Plex Mono keep constraints, time, points, and model probability inspectable.

The loop has three explicit states. Ready explains the mission and starts no
clock. Playing exposes four candidate actions and a 15-second countdown. Result
shows policy outcome and game points, then compares the player's action with
Commerce-1's frozen Choice distribution. Commerce-1 remains sealed until the
player commits or times out.

The arcade layer is subordinate to product truth. Points reward only clearing
five deterministic checkout rules and responding before the clock expires.
Model agreement is displayed separately, never treated as correctness, and
never changes the score. Synthetic scenario data and precomputed inference stay
visible in the result evidence.

**Key Characteristics:**

- One elevated console containing HUD, timer, brief, play deck, and result.
- An explicit Start action before any time pressure begins.
- Four full-row candidate buttons with A–D shortcuts.
- Policy outcome and points as the game result; model agreement as comparison.
- Violet action and clock motion, lime constraints, coral urgency/focus.
- Full Choice probabilities, scoring rules, and provenance behind one disclosure.

**The Explicit Start Rule.** The clock never begins on page load; the player starts the mission deliberately.

**The Score Is Not the Model Rule.** Policy compliance and remaining time determine points. Commerce-1 agreement never changes them.

**The Model Stays Sealed Rule.** Do not reveal the model choice or probabilities before the player commits or times out.

## Colors

The palette combines a calm lavender page with an ink arcade cabinet, warm paper
play surfaces, vivid violet action, electric lime constraints, and coral urgency.

### Primary

- **Decision Ink** (`ink`): console HUD, customer brief, primary text, replay action, comparison marker, toast, and brand mark.
- **Action Violet** (`action-violet`): hero emphasis, Start action, answer hover/focus fill, timer track, result headline, and winning probability bar.
- **Model Violet** (`model-violet`): Commerce-1 comparison surface with explicit probability text.
- **Lavender Floor** (`lavender-ground`): page-level atmosphere around the console.

### Secondary

- **Constraint Lime** (`constraint-lime`): active clock, mission bolt, customer marker, requirement icons, cart limit, text selection, and one color in the model-match burst.
- **Focus Coral** (`focus-coral`): global focus ring, last-five-seconds timer, blocked probability cue, and one burst accent.
- **Warning Red** (`warning-red`): explicit “contains cashew” and “ineligible” text.
- **Pass Green** (`pass-green`): checkout-code pass icon, always paired with “Safe to continue.”
- **Block Red** (`block-red`): policy-trap headline and block icon, paired with written failure language.

### Neutral

- **Answer Paper** (`answer-paper`): start, choice, result, and policy surfaces.
- **Warm Comparison Paper** (`warm-paper`): the player's half of the result comparison.
- **Soft Ink** (`ink-soft`): supporting copy and lower-emphasis navigation.
- **Hairline** (`hairline`): answer separators, evidence boundaries, and neutral policy borders.
- **White** (`white`): text on ink and violet.
- **On-Ink Muted** (`on-ink-muted`): HUD labels and secondary brief copy.
- **Data Muted** (`data-muted`): timeout state, secondary answer facts, and result metadata.
- **Result Muted** (`result-muted`): comparison captions and policy rationale.
- **Block Paper** (`block-paper`): deterministic block surface.

**The Lavender Is Outside Rule.** Lavender surrounds the console; paper and ink own the game.

**The Signal Needs Language Rule.** Lime, coral, red, and green never carry time, match, pass, or block meaning without text or structure.

**The Violet Is Not Approval Rule.** Violet marks action, time, and model material—not safety or checkout authority.

## Typography

**Display Font:** Bricolage Grotesque (with `sans-serif` fallback)

**Body Font:** DM Sans (with `sans-serif` fallback)

**Label/Mono Font:** IBM Plex Mono (with `monospace` fallback)

**Character:** Bricolage makes the mission feel immediate and playable. DM Sans
keeps operational copy neutral, while IBM Plex Mono turns time, points, status,
prices, keyboard hints, and probabilities into checkout telemetry.

### Hierarchy

- **Display** (700, `clamp(3rem, 5.6vw, 5.4rem)`, 0.91): the two-line invitation.
- **Start Display** (700, `clamp(3.25rem, 5vw, 5.25rem)`, 0.9): “Take the cart.”
- **Headline** (600, `clamp(1.9rem, 3vw, 2.85rem)`, 1): question and result hierarchy.
- **Title** (600, `clamp(1.65rem, 2.4vw, 2.35rem)`, 1.08): the customer quote.
- **Body** (400, typically 12–19px, 1.4–1.55): mission instructions, policy rationale, and disclosure.
- **Label** (500–600, 9–11px, 0.06–0.08em tracking): HUD labels, option letters, state labels, points, probability, and doctrine.

**The Game Voice Leads Rule.** Use Bricolage for mission, prompt, quote, price, points, and result—not dense evidence.

**The Telemetry Uses Mono Rule.** Use IBM Plex Mono for bounded facts and controls, never narrative copy.

## Layout

The application shell is centered at 1260px with a 40px desktop gutter. A 68px
three-column topbar holds brand, centered “Checkout Rush,” and model access.
The introduction begins 26–46px below it and allows a 920px display measure.

The game console is one clipped object: a 70px four-cell HUD, a 5px timer track,
then a 535px-minimum decision stage. On wide screens the brief and paper play
deck use `0.72fr / 1.28fr`. The right deck swaps in place between Start,
Choice, and Result; the customer brief persists throughout.

At 900px and below, the HUD becomes 2×2 and the brief stacks above the play
deck. At 620px and below, the shell gutter becomes 10px, the centered demo name
hides, the console radius tightens, the brief remains a compact 2×2 constraint
grid, nutrition details hide while safety facts remain, and comparison/actions
stack or share width.

**The Brief Persists Rule.** The five hard constraints remain adjacent to every game state.

**The Safety Facts Survive Rule.** Mobile may hide nutrition detail, but never price, time, nut status, cart limit, or policy verdict.

**The HUD Is Game State Rule.** Mission, time, points, and status are the only top-level telemetry; model metrics live after commitment.

## Elevation & Depth

Depth belongs to the complete game console. Desktop uses a broad violet-tinted
lift (`0 24px 65px rgba(58, 46, 111, .16)`); compact screens use
`0 18px 45px rgba(58, 46, 111, .14)`. Internal regions stay flat and depend
on tonal fields and rules. The clipped lime ring is the brief's only atmospheric
decoration.

### Shadow Vocabulary

- **Console lift** (`0 24px 65px rgba(58, 46, 111, .16)`): binds HUD, timer, brief, and paper deck.
- **Compact console lift** (`0 18px 45px rgba(58, 46, 111, .14)`): preserves the same object on mobile.

**The One Cabinet Rule.** Do not elevate rows, comparisons, policy slips, or HUD cells independently.

Motion communicates the active mission: the timer track scales continuously,
changes to coral in the final five seconds, answer buttons move 3px on
hover/focus, results reveal over 520ms, and model match triggers a 720ms
six-piece burst. Reduced-motion preferences collapse animation and transition
durations to effectively zero without changing game timing or content.

## Shapes

The outer console has a soft 16px radius, reduced to 13px on compact screens.
Inside, controls and information surfaces are square and ruled. Circles identify
Maya, the start bolt, A–D option markers, the “vs” marker, and some burst pieces.
Small product facts use pills. Icons are consistent thin outline SVGs.

**The Soft Cabinet, Sharp Controls Rule.** Round the enclosing console and compact markers; keep actions, rows, comparison blocks, and policy slips square.

## Components

### Topbar and Model Link

The transparent lavender topbar keeps InferCrane left, Checkout Rush centered
on wide screens, and “Open model” right. The center title hides on mobile; model
access does not.

### Game HUD and Timer

Four ink cells show `Mission 01 / 01`, remaining time to one decimal place,
zero-padded game points, and plain-language status. The violet 5px track scales
from left to right with the clock. In the last five seconds, both track and time
turn coral.

### Start View

A lime bolt, “Take the cart,” a one-paragraph mission, and one 54px violet
button create the ready state. The helper line states that the model is sealed
and names A–D controls. Starting resets HUD values, reveals choices, focuses the
first answer, and starts the clock.

### Ink Customer Brief

Maya's synthetic request, four-row constraint grid, and €18 cart limit define
five hard rules: servings, time, vegetarian diet, declared nut-free status, and
budget. These facts remain visible during choice and result.

### Basket Action Rows

- **Structure:** full-width native buttons; A–D marker; basket/nutrition; price/time/nut status; arrow.
- **Default:** transparent paper with a hairline separator.
- **Hover/Focus:** violet fill, white text, 3px directional movement, and inset coral focus ring.
- **Activation:** click/tap, normal button Enter/Space, or global A–D shortcut.
- **Mobile:** nutrition hides; name, price, time, and nut status stay visible.

### Result and Game Points

The headline leads with policy outcome: five rules cleared, checkout blocked, or
no call made. A separate points block shows the round score. A safe basket earns
1,000 base points plus a rounded fraction of up to 300 based on time remaining;
a blocked basket or timeout earns 0. The HUD status mirrors 5/5, 4/5 blocked, or
timed out.

### Player-versus-Model Comparison

The player action appears on warm paper with lock-in time. Commerce-1 appears on
model violet with its fixed tomato-lentil choice and 82.99% displayed
probability. Agreement is copy and, for a match, a short decorative burst; it
does not alter points or policy.

### Checkout-Code Result

Pass uses a green check and “Safe to continue.” Block uses block paper, red
border/X, and “Blocked: contains cashew.” Timeout uses a neutral clock and “No
checkout attempted.” Each state explains deterministic authority in text.

### Result Actions and Toast

Play again restores Ready and focuses Start. Share score uses the platform share
sheet when available, then clipboard fallback with a polite status toast.
Keyboard `R` also resets from Result.

### Evidence Drawer

The native disclosure contains all four candidate probabilities plus `None`,
the ineligible label, exact game-scoring formula, precomputed H200 disclosure,
synthetic-scenario boundary, and direct inference receipt. The displayed 82.99%
is model probability only—not score, safety, accuracy, or permission.

## Do's and Don'ts

### Do:

- **Do** preserve Ready → Playing → Result and start the clock only on explicit action.
- **Do** keep score tied only to policy-safe eligibility and time remaining.
- **Do** keep model choice/probability sealed until commit or timeout.
- **Do** present policy verdict, game points, and model agreement as separate concepts.
- **Do** preserve button semantics, A–D/S/Enter/R shortcuts, result focus, polite share feedback, and reduced-motion behavior.
- **Do** retain price, prep time, nut status, cart limit, and checkout verdict at every width.
- **Do** disclose synthetic scenario data, precomputed inference, scoring rules, and the public receipt.

### Don't:

- **Don't** award points for matching Commerce-1 or call a match correct.
- **Don't** call 82.99% a game score, policy verdict, benchmark, explanation, or checkout authority.
- **Don't** imply live inference, autonomous purchase, real-store facts, nutrition advice, or an allergy guarantee.
- **Don't** expose model output before commitment or place model metrics in the ready HUD.
- **Don't** detach result from brief, merge policy with probability, or hide the block reason.
- **Don't** add retailer branding, food photography, gradients, glass, nested shadows, or dashboard analytics.
- **Don't** hide the Open model link, inference receipt, project links, or core boundaries to save space.
