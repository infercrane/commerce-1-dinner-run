---
name: "The €18 Agent Test"
description: "A one-question shopping-agent quick draw that reveals a typed Commerce-1 decision only after the human commits."
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
    fontSize: "clamp(3.2rem, 6.2vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.85rem, 3vw, 3rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.65rem, 2.5vw, 2.5rem)"
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
  stage: "16px"
  stage-mobile: "13px"
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
  decision-stage:
    backgroundColor: "{colors.answer-paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stage}"
  brief-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "clamp(28px, 3.3vw, 48px)"
  answer-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "15px 2px"
  answer-row-hover:
    backgroundColor: "{colors.action-violet}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "15px 2px"
  model-pick:
    backgroundColor: "{colors.model-violet}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "16px"
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
  button-hover:
    backgroundColor: "{colors.action-violet}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "0 15px"
    height: "42px"
  policy-pass:
    backgroundColor: "{colors.answer-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "15px 16px"
  policy-block:
    backgroundColor: "{colors.block-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "15px 16px"
---

# Design System: The €18 Agent Test

## Overview

**Creative North Star: "The Checkout Quick Draw"**

The €18 Agent Test makes one bounded AI decision feel like a twenty-second human game, not a model dashboard. A spacious lavender ground holds one elevated decision stage. Inside it, a near-black customer brief states the stakes and non-negotiable constraints; a warm paper answer sheet asks one plain-language recommendation question. Bricolage Grotesque brings game-show immediacy, while receipt-like mono facts keep price, time, state, and probability precise.

The interaction is intentionally sequential. The first state contains the scenario and four complete answers but no model output. A user commits to one basket, the answer sheet changes in place, and only then does Commerce-1 appear alongside the code-owned checkout result. Violet signals action and revealed model material; electric lime calls out fixed constraints and budget; neither is allowed to blur model probability with policy authority.

The system is playful, candid, and materially simple: lavender tabletop, ink brief, paper answer/result panel, violet action, lime constraints. It rejects model-control-room density, retailer imitation, product photography, and decorative data visualization. The interface should remain understandable from the first question and evidentiary after the reveal.

**Key Characteristics:**

- One large, softly elevated decision stage on a quiet lavender field.
- An ink brief paired with a paper answer sheet, like a note beside a checkout form.
- Bricolage Grotesque for the human game voice; DM Sans and IBM Plex Mono for operational facts.
- Violet reserved for action, comparison, and revealed model emphasis.
- Lime reserved for people, constraints, budget, and text selection—not model confidence.
- A one-question choice-to-reveal flow with the full probability distribution kept in an evidence drawer.

**The Human Commits First Rule.** Do not show Commerce-1's answer, probability, or policy result until the user chooses one supplied basket.

**The One Question Rule.** Keep the primary flow to one scenario, one four-option question, one reveal, and one reset; explanation lives after the decision.

## Colors

The palette is a deliberate collision of calm lavender, paper neutrals, near-black ink, vivid action violet, and electric constraint lime.

### Primary

- **Decision Ink** (`ink`): the household brief, primary text, first result action, comparison marker, toast, and brand mark. It supplies authority without looking like a technical terminal.
- **Action Violet** (`action-violet`): the second line of the hero, answer-row hover, result headline, winning probability bar, and interactive hover state.
- **Model Violet** (`model-violet`): the Commerce-1 half of the revealed comparison. Its darker value keeps white captions and the 82.99% probability legible.
- **Lavender Tabletop** (`lavender-ground`): the page-level atmosphere around the decision object. It creates separation without becoming a card fill.

### Secondary

- **Constraint Lime** (`constraint-lime`): avatar, requirement icons, budget amount, selection highlight, and the decorative brief-ring trace. It marks fixed human constraints, not AI quality.
- **Focus Coral** (`focus-coral`): the visible focus outline and blocked probability cue. It is a high-attention operational signal, not a general brand accent.
- **Warning Red** (`warning-red`): the “contains cashew” answer fact and `ineligible` evidence tag; it always appears as text, never as an unlabeled swatch.
- **Pass Green** (`pass-green`): the positive checkout-code icon, always paired with explicit “Safe to continue” language.
- **Block Red** (`block-red`): the negative checkout-code icon, always paired with explicit block language and the block-paper surface.

### Neutral

- **Answer Paper** (`answer-paper`): the main choice and result surface.
- **Warm Comparison Paper** (`warm-paper`): the human half of the revealed side-by-side comparison.
- **Soft Ink** (`ink-soft`): supporting copy and lower-emphasis navigation.
- **Hairline** (`hairline`): answer separators, evidence boundaries, and policy borders.
- **White** (`white`): text on ink and violet.
- **On-Ink Muted** (`on-ink-muted`): timestamps and secondary constraint descriptions on the dark brief.
- **Data Muted** (`data-muted`): secondary answer facts and result metadata on paper.
- **Result Muted** (`result-muted`): higher-contrast captions and rationale inside the revealed comparison and policy result.
- **Block Paper** (`block-paper`): the tinted surface for an explicit deterministic block.

**The Lavender Is Atmosphere Rule.** Use lavender around the decision object, not inside every component; paper and ink must keep the central stage legible.

**The Violet Means Reveal Rule.** Violet carries action or revealed model emphasis. It must not imply policy approval, allergy safety, or model correctness.

**The Lime Means Constraint Rule.** Lime marks the human brief and its fixed limits. Never use it as a probability winner color or a generic success badge.

## Typography

**Display Font:** Bricolage Grotesque (with `sans-serif` fallback)
**Body Font:** DM Sans (with `sans-serif` fallback)  
**Label/Mono Font:** IBM Plex Mono (with `monospace` fallback)

**Character:** Bricolage Grotesque makes the prompt feel like a friendly game card rather than a form or benchmark. DM Sans stays neutral and conversational; IBM Plex Mono turns prices, timings, category labels, probabilities, and small doctrine into receipt facts.

### Hierarchy

- **Display** (700, `clamp(3.2rem, 6.2vw, 5.75rem)`, 0.9): the two-line invitation only. Keep the second line violet and preserve the balanced wrap.
- **Headline** (600, `clamp(1.85rem, 3vw, 3rem)`, 1): question and result-section hierarchy.
- **Title** (600, `clamp(1.65rem, 2.5vw, 2.5rem)`, 1.08): the quoted household brief.
- **Body** (400, typically 12–20px, 1.4–1.55): instructions, supporting facts, policy rationale, explainer copy, and disclosure.
- **Label** (500–600, 9–11px, 0.06–0.08em letter spacing, uppercase where categorical): budget labels, choice letters, checkout-code labels, comparison captions, probabilities, and footer doctrine.

**The Game Voice Leads Rule.** Use Bricolage Grotesque for the invitation, question, quoted brief, price emphasis, and reveal headline; never use it for dense evidence copy.

**The Receipt Facts Rule.** Use IBM Plex Mono only for bounded labels and values that benefit from a factual, scanned quality.

## Layout

The application shell is centered at a 1260px maximum width with a 40px desktop gutter. A 68px three-column topbar holds brand, centered demo name, and model link. The main introduction begins 30–58px below it and keeps the hero within a 790px measure; the supporting sentence stays within 620px.

The decision stage is one 545px-minimum two-part object. On wide screens, the ink brief takes `0.72fr` with a 310px minimum and the paper play panel takes `1.28fr`. The brief uses fluid 28–48px padding; the play panel uses 28–52px. The brief stacks sender, quote, a 2×2 constraint matrix, then pushes the €18 ticket to the bottom. The play panel leads with a two-column question header and four full-width answer rows.

The result replaces the choice view inside the same paper panel; the brief remains fixed so the revealed decision is still visibly grounded in the original constraints. Comparison, policy, actions, and the evidence drawer follow in one vertical sequence. The model explainer sits directly below the stage, then the footer closes the shell.

At 900px and below, the decision stage stacks brief above paper, the brief keeps a 440px minimum, and the explainer becomes two columns. At 620px and below, the shell gutter falls to 10px per side, the topbar becomes two columns and hides the centered demo name, the stage radius tightens, brief and play padding compact, the four constraint cells keep their 2×2 grid but hide secondary descriptions, and answer rows hide only protein/vegetable detail—not price, time, or allergy status. The comparison stacks, actions share width, and the explainer and footer reflow.

**The Brief Persists Rule.** The household constraints remain visible while the result replaces the answer list; do not navigate to a detached result page.

**The Safety Facts Survive Rule.** Responsive compression may hide secondary nutrition detail, but never price, time, nut-status, the €18 limit, or the checkout-code result.

## Elevation & Depth

Depth is concentrated in the decision stage, which floats as one object above the lavender ground. Its desktop shadow is broad and violet-tinted (`0 24px 65px rgba(58, 46, 111, .14)`); the compact version becomes `0 18px 45px rgba(58, 46, 111, .13)`. Internal surfaces stay flat and use tonal contrast and one-pixel rules instead of nested shadows. A faint oversized lime ring is clipped into the brief as a single atmospheric gesture.

### Shadow Vocabulary

- **Decision-stage lift** (`0 24px 65px rgba(58, 46, 111, .14)`): the only large ambient shadow; it binds brief and answer sheet into one object.
- **Compact-stage lift** (`0 18px 45px rgba(58, 46, 111, .13)`): the mobile-equivalent stage shadow.

**The One Elevated Object Rule.** Elevate the complete decision stage, not its rows, comparison blocks, policy slips, or evidence details.

**The Reveal Motion Rule.** Choice exit lasts 180ms; result entry lasts 440ms with a short downward-to-rest reveal. Reduced-motion mode collapses both animation and the JavaScript handoff delay.

## Shapes

The decision stage has a soft 16px outer radius, reduced to 13px on compact screens, and clips its dark/light split. Inside, form language is mostly rectilinear: answer rows are separator-led with no boxes, action buttons are square, comparison blocks are square, and policy results are square bordered slips.

Circles identify small, human-scale markers: Maya's avatar, A–D answer letters, and the “vs” comparison marker. Small explainer facts use full pills. The InferCrane mark keeps its three skewed bars. Icons remain thin outlined strokes with rounded line caps; no filled icon library or illustrated food imagery belongs in this world.

**The Soft Frame, Sharp Answer Rule.** Round the enclosing stage and compact markers; keep answer, result, evidence, and action surfaces square and direct.

## Components

### Topbar and Model Link

The topbar is a transparent structural line on lavender. The InferCrane mark and wordmark anchor left, the demo name centers on wide screens, and “Open model” anchors right with a thin arrow that moves 3px on hover. On mobile the center name hides, but brand and model access remain.

### Intro

The invitation is two lines: “One customer. Four baskets.” in ink and “Make the agent's call.” in action violet. One sentence asks the user to recommend as a shopping agent before comparing with Commerce-1. Keep the intro plain; badges, dashboards, and model metrics would spoil the quick-draw premise.

### Ink Brief

The brief is the scenario anchor. A lime avatar identifies Maya, who briefed her fictional shopping agent; Bricolage renders the household quote, a ruled 2×2 matrix lists four hard constraints with lime outline icons, and the oversized lime €18 closes the panel. The decorative lime ring remains faint, clipped, and non-interactive.

### Answer Rows

- **Structure:** native radio inside a full-row label; circular A–D marker; name/nutrition; price/time/allergy; arrow.
- **Default:** transparent on answer paper with a hairline bottom separator.
- **Hover:** full action-violet field, white foreground, and a 3px rightward arrow shift.
- **Focus:** 3px focus-coral outline with 3px offset around the row.
- **Selection:** the user sees the reveal immediately, so selection is not treated as a persistent visual card state.
- **Keyboard:** Up/Down moves focus cyclically through the four radios; native radio activation triggers the reveal.
- **Mobile:** preserve name, price, time, and nut status; hide the secondary protein/vegetable line only.

### Result Reveal

The choice view fades and slides 18px left over 180ms. The result then reveals downward-to-rest over 440ms using opacity, clip-path, and a 12px vertical offset. The result heading receives programmatic focus and a coral focus outline, announcing “Same call.” or “Different call.” before the comparison.

### Human-versus-Model Comparison

“Your agent recommends” uses warm comparison paper; “Commerce-1 recommends” uses model violet with high-contrast white text and an explicit 82.99% probability. A small ink “vs” circle separates them on wide screens and becomes a plain inline label when stacked. This is a comparison of recommendations, not scores.

### Checkout-Code Result

The policy result is visually separate from the model comparison. Pass uses a green check plus “Safe to continue” and lists budget, time, vegetarian, servings, and declared nut-free rules. Block uses a tinted block-paper field, red border and X, “Blocked: contains cashew,” and states that policy stops the basket independently of the model. Neither variant authorizes checkout.

### Result Buttons and Toast

Play again is ink-filled; Share result is transparent with an ink border. Both become violet with white text on hover or focus. Reset restores the answer sheet and returns focus to the first radio. Share prefers the platform share sheet, falls back to clipboard, and reports outcome through the polite ink toast.

### Evidence Drawer and Probability Rows

The native details drawer follows the primary result. Opening it reveals all four supplied baskets plus `None`, exact two-decimal percentages, the precomputed H200 disclosure, and the inference-receipt link. Tracks use quiet gray by default, violet for the model's chosen option, and coral for the ineligible cashew option.

The displayed 82.99% is Commerce-1's model probability for `lentil_pasta`, rounded from `evidence/mission-1-public.json`. It is not a policy score, eligibility result, benchmark, accuracy claim, explanation, or permission to purchase.

### Model Explainer, Fact Pills, and Footer

The explainer answers “What just happened?” in one compact row, describes Commerce-1 as an open decision model for commerce agents, and names inventory alongside allergies, budgets, permissions, and checkout as code-owned concerns. It closes with three outlined mono pills: Open weights, Typed decisions, and 0 generated tokens. The footer repeats “Commerce-1 proposes. Code enforces. You decide.” and offers Model, GitHub, and Launch article links.

## Do's and Don'ts

### Do:

- **Do** keep the lavender ground, ink brief, and paper answer/result panel as the three dominant material layers.
- **Do** preserve the one-question flow: human choice first, result second, detailed probabilities on demand.
- **Do** keep the household brief visible beside or above the result so policy remains grounded in the original constraints.
- **Do** use violet for action and revealed model emphasis, lime for fixed brief constraints, and coral for focus or blocked evidence.
- **Do** preserve native radio semantics, Up/Down keyboard focus, programmatic focus on the result headline, reset focus, polite share feedback, and reduced-motion handling.
- **Do** show price, time, nut status, checkout-code result, and the €18 limit at every supported width.
- **Do** label 82.99% as model probability and keep the checkout-code result visually and verbally separate.
- **Do** keep the public inference receipt reachable from the revealed state and disclose that the scenario is synthetic and the output precomputed.

### Don't:

- **Don't** show Commerce-1's choice before the user commits or turn the opening state into a model dashboard.
- **Don't** use lime as model confidence, violet as policy approval, or color alone as the carrier of safety meaning.
- **Don't** call 82.99% a score, pass rate, policy verdict, benchmark, generated rationale, or checkout authority.
- **Don't** imply live inference, autonomous purchase, real-store facts, nutrition advice, or an allergy guarantee.
- **Don't** detach the result from the brief, merge model probability with deterministic policy, or hide the block reason inside the evidence drawer.
- **Don't** add food photography, retailer branding, gradients, glass effects, nested card shadows, or dashboard chrome.
- **Don't** round answer rows, comparison blocks, policy slips, or action buttons; the outer stage owns the softness.
- **Don't** hide the Open model link, evidence receipt, project links, or core claim boundaries to save space.
