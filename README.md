---
title: Checkout Rush — Commerce-1
emoji: 🛒
colorFrom: purple
colorTo: yellow
sdk: static
pinned: false
license: apache-2.0
short_description: Make a policy-safe shopping-agent call in 15 seconds.
---

# Checkout Rush

Make one shopping-agent recommendation before the 15-second clock expires,
then compare the result with Commerce-1 and the separate checkout policy.

**[Play Checkout Rush](https://huggingface.co/spaces/infercrane/commerce-1-dinner-run)** ·
[Open Commerce-1](https://huggingface.co/infercrane/Commerce-1) ·
[Inspect the model runtime](https://github.com/infercrane/commerce-1) ·
[Read the launch article](https://infercrane.com/blog/commerce-1)

## Game loop

1. Read Maya's synthetic customer brief and its five hard rules.
2. Start the mission; the 15-second clock begins only after you press Start.
3. Choose one of four frozen candidate baskets.
4. See whether deterministic checkout code clears or blocks the basket.
5. Compare your call with Commerce-1's precomputed Choice distribution, inspect
   the inference receipt, share the score, or play again.

If the clock reaches zero, the round ends with no checkout attempt and 0 points.

## Scoring

- A basket that clears all five hard rules earns **1,000 base points**.
- A safe basket also earns **up to 300 speed points**, based on time remaining.
- A policy-blocked basket or timeout earns **0 points**.
- Matching Commerce-1 does **not** add points and does not make a choice
  “correct.” The model comparison is a separate readout.

The five rules are: four adult servings, no more than 30 minutes, vegetarian,
declared nut-free, and no more than €18 total.

## Controls

- **Start:** activate the Start button, or press `S` or `Enter` while ready.
- **Choose:** tap/click a basket, use standard `Tab` plus `Enter`/`Space`, or
  press `A`, `B`, `C`, or `D` while the mission is running.
- **Replay:** activate Play again, or press `R` from the result state.
- **Evidence:** open the result disclosure to see all probabilities, scoring
  rules, the precomputed-output disclosure, and the inference-receipt link.

## What is real

Commerce-1 ranks the same four supplied actions shown in the game and returns a
typed Choice distribution. The displayed values are real, precomputed output
from the immutable public Commerce-1 artifact on NVIDIA H200; the top Choice is
tomato lentil spaghetti at 82.99% after display rounding.

The customer, store, baskets, products, prices, and mission are synthetic.
Checkout policy and game scoring are deterministic JavaScript, not model
outputs. Commerce-1 does not browse a store, generate a recipe, or perform a
purchase in this demo.

- [Inference receipt](evidence/mission-1-public.json)
- [Commerce-1 weights](https://huggingface.co/infercrane/Commerce-1)
- [Source and local runtime](https://github.com/infercrane/commerce-1)
- [Decision Index evidence](https://huggingface.co/datasets/infercrane/commerce-1-decision-index)

## Boundaries

Checkout Rush is an interactive product demonstration, not a benchmark,
nutrition tool, allergy guarantee, or autonomous checkout. The score measures
only this synthetic game's frozen rules and response time. Commerce-1 ranks the
supplied actions; deterministic code enforces hard constraints; the user remains
the authority for checkout.
