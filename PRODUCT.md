# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated for this launch artifact: static HTML, CSS, and JavaScript on a
Hugging Face static Space. The same files can be linked from GitHub and
embedded in launch material without an always-on GPU.

## Users

- AI builders evaluating whether typed decisions belong in an agentic commerce
  workflow.
- Technical founders, researchers, and potential users finding Commerce-1
  through Hugging Face, GitHub, or a social post.
- Non-specialists who should understand the product after one short game.

## Product Purpose

Commerce-1 accepts structured state and ordered Choice, Noul, or Score
questions, then returns typed answers and probability distributions rather
than generated prose. “Dinner Run” makes that mechanism understandable through
one bounded decision: a person and Commerce-1 choose from the same four complete
dinners under the same budget, time, dietary, and household constraints.

## Positioning

Commerce-1 is a self-hosted 27B decision model for agentic commerce. It scores
supplied options directly, exposes calibrated probabilities, and generates no
explanation text.

## Operating Context

The model is used inside commerce-agent workflows for proceed/review/block
gates, action and tool routing, fulfillment choices, approval-policy checks,
and risk or priority scoring. Dinner Run uses an original fictional European
online supermarket; it does not copy a retailer's brand, product photography,
or interface.

## Capabilities and Constraints

- The public demo uses real, precomputed Commerce-1 outputs so it requires no
  always-on GPU and never implies that the static Space is live inference.
- The model produces a Choice distribution; deterministic code separately
  decides whether the selected basket may proceed under the hard rules.
- Decisions are Choice, Noul, and Score outputs with probability distributions.
- The model does not generate explanations, retrieve live facts, process
  payments, inspect images, or replace consequential human or policy review.
- Demonstration cases and prices are synthetic and labeled as such.
- The frozen public source release records a self-hosted Decision Index 0.2.1
  score of 60.99 with 150,317/150,317 merged rows complete.
- A separate Decision Index 0.3 submission records a 61.69 public-component
  score with 140,178/140,178 scoreable requests complete. It is not an official
  Full Score or leaderboard rank.

## Brand Commitments

- Product name: Commerce-1.
- Publisher: InferCrane.
- Demo name: Dinner Run — Human vs Commerce-1.
- Voice: direct, technically honest, and energetic enough for a public launch.

## Evidence on Hand

- Public source and runtime: `https://github.com/infercrane/commerce-1`.
- Public model: `https://huggingface.co/infercrane/Commerce-1`.
- Public Decision Index evidence:
  `https://huggingface.co/datasets/infercrane/commerce-1-decision-index`.
- Frozen release result: 60.99 on Decision Index 0.2.1 with
  150,317/150,317 merged rows complete.
- Separate submission result: 61.69 on the Decision Index 0.3 public component
  with 140,178/140,178 scoreable requests complete and zero unsupported or
  error rows. Maintainer Full Score and rank remain pending.
- No customer testimonials, production outcome claims, or official private
  benchmark score exist and none may be invented.

## Product Principles

1. Demonstrate the decision contract before describing it.
2. Make uncertainty visible instead of narrating confidence away.
3. Label synthetic scenarios and precomputed outputs plainly.
4. Keep consequential decisions behind explicit code and user controls.
5. One click to understand, one screenshot to share.

## Accessibility & Inclusion

The game remains keyboard operable, readable without motion, usable on mobile,
and never encodes status through color alone.
