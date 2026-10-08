# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS, and JavaScript for a Hugging Face static Space. Checkout Rush
uses a frozen inference receipt, so the public game does not require an always-on
GPU and can also be linked from GitHub or launch material.

## Users

- AI builders evaluating whether typed decisions belong in an agentic-commerce
  workflow.
- Technical founders, researchers, and potential users finding Commerce-1
  through Hugging Face, GitHub, or a social post.
- Non-specialists who should understand the model/policy boundary after one
  short game.

## Product Purpose

Commerce-1 accepts structured state and ordered Choice, Noul, or Score
questions, then returns typed answers and probability distributions rather
than generated prose. Checkout Rush makes that mechanism tangible through one
15-second commerce decision: choose a dinner basket under five hard checkout
rules, receive a policy-safe game score, and then compare the choice with a
frozen Commerce-1 Choice distribution.

The game score measures only deterministic scenario policy and remaining time.
Agreement with Commerce-1 is shown separately and never changes the score.

## Positioning

Commerce-1 is a self-hosted 27B decision model for agentic commerce. It scores
supplied options directly, exposes calibrated probabilities, and generates no
explanation text.

## Operating Context

The model is used inside commerce-agent workflows for proceed/review/block
gates, action and tool routing, fulfillment choices, approval-policy checks,
and risk or priority scoring. Checkout Rush uses an original fictional European
online supermarket; it does not copy a retailer's brand, product photography,
or interface.

## Capabilities and Constraints

- The public demo uses real, precomputed Commerce-1 output and does not imply
  that the static Space performs live inference.
- Commerce-1 produces the displayed Choice distribution; deterministic game
  code separately evaluates the player's selected basket against five frozen
  rules and computes the game score.
- A policy-safe basket earns 1,000 base points plus up to 300 speed points. A
  blocked basket or timeout earns 0. Model agreement has no scoring effect.
- The five hard rules cover the €18 budget, 30-minute limit, vegetarian diet,
  four-adult serving requirement, and declared nut-free requirement.
- Commerce-1 does not generate explanations, retrieve live facts, process
  payments, inspect images, or replace consequential human or policy review.
- Demonstration baskets, prices, customer, store, and scenario are synthetic
  and labeled as such.
- The frozen public source release records a self-hosted Decision Index 0.2.1
  score of 60.99 with 150,317/150,317 merged rows complete.
- A separate Decision Index 0.3 submission records a 61.69 public-component
  score with 140,178/140,178 scoreable requests complete. It is not an official
  Full Score or leaderboard rank.

## Brand Commitments

- Product name: Commerce-1.
- Publisher: InferCrane.
- Demo name: Checkout Rush.
- Voice: direct, technically honest, and energetic enough for a public launch.

## Evidence on Hand

- Public source and runtime: `https://github.com/infercrane/commerce-1`.
- Public model: `https://huggingface.co/infercrane/Commerce-1`.
- Public Decision Index evidence:
  `https://huggingface.co/datasets/infercrane/commerce-1-decision-index`.
- Checkout Rush inference receipt: `evidence/mission-1-public.json`.
- The receipt records `lentil_pasta` as the top Choice at approximately 82.99%
  from the immutable Commerce-1 artifact on NVIDIA H200.
- Frozen release result: 60.99 on Decision Index 0.2.1 with
  150,317/150,317 merged rows complete.
- Separate submission result: 61.69 on the Decision Index 0.3 public component
  with 140,178/140,178 scoreable requests complete and zero unsupported or
  error rows. Maintainer Full Score and rank remain pending.
- No customer testimonials, production outcome claims, or official private
  benchmark score exist and none may be invented.

## Product Principles

1. Demonstrate the decision contract before describing it.
2. Score policy compliance, never model agreement or model quality.
3. Make uncertainty visible instead of narrating confidence away.
4. Label synthetic scenarios and precomputed outputs plainly.
5. Keep consequential decisions behind explicit code and user controls.
6. One short mission to understand, one result to inspect or share.

## Accessibility & Inclusion

The clock starts only after an explicit action. The mission is operable with
standard button controls or documented keyboard shortcuts, the result receives
programmatic focus, and timeout leaves a stable result rather than removing
content. Reduced-motion preferences collapse animation, mobile retains every
safety-critical fact, and status never depends on color alone.
