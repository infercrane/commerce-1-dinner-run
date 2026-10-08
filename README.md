---
title: Dinner Run — Human vs Commerce-1
emoji: 🛒
colorFrom: green
colorTo: yellow
sdk: static
pinned: false
license: apache-2.0
short_description: Pick dinner, then reveal Commerce-1's typed decision.
---

# Dinner Run — Human vs Commerce-1

Can you make the same dinner decision as a 27B commerce decision model?

Four complete dinner baskets. One €18 budget. One strict nut allergy. Pick a
dinner, then reveal the basket chosen by Commerce-1 and the model's complete
probability distribution.

Commerce-1 does not browse a store or generate a recipe in this demo. It ranks
the same four frozen candidate baskets shown to the user and returns a typed
Choice distribution. Separate deterministic code enforces budget, diet, time,
and allergy rules.

The model output is a real, precomputed H200 inference from the immutable public
Commerce-1 artifact. The store, products, prices, and mission are synthetic.

- [Commerce-1 weights](https://huggingface.co/infercrane/Commerce-1)
- [Source and local runtime](https://github.com/infercrane/commerce-1)
- [Decision Index evidence](https://huggingface.co/datasets/infercrane/Commerce-1-Decision-Index)

## Boundaries

This is an interactive product demonstration, not a benchmark, nutrition tool,
allergy guarantee, or autonomous checkout. Commerce-1 proposes; deterministic
code enforces hard constraints; the user remains the authority for checkout.
