---
title: The €18 Agent Test — Commerce-1
emoji: 🛒
colorFrom: purple
colorTo: yellow
sdk: static
pinned: false
license: apache-2.0
short_description: Make one shopping-agent recommendation, then compare it with Commerce-1.
---

# The €18 Agent Test

Run a shopping agent for one decision: recommend a dinner basket, then compare your call with Commerce-1.

**[Play the live demo](https://huggingface.co/spaces/infercrane/commerce-1-dinner-run)** · [Get Commerce-1](https://huggingface.co/infercrane/Commerce-1) · [Inspect the model runtime](https://github.com/infercrane/commerce-1)

![The Dinner Test comparing a human choice with Commerce-1](https://raw.githubusercontent.com/infercrane/commerce-1-dinner-run/main/assets/dinner-run-result.png)

You are the shopping agent for four friends, one strict nut allergy, thirty
minutes, and an €18 budget. Pick one fictional basket. Then compare your call
with Commerce-1 and the separate checkout rule.

Commerce-1 does not browse a store or generate a recipe in this demo. It ranks
the same four frozen candidate baskets shown to the user and returns a typed
Choice distribution. Separate deterministic code enforces budget, diet, time,
and allergy rules.

```text
four frozen baskets → Commerce-1 Choice distribution → deterministic policy → user
```

The model output is a real, precomputed H200 inference from the immutable public
Commerce-1 artifact. The store, products, prices, and mission are synthetic.

- [Commerce-1 weights](https://huggingface.co/infercrane/Commerce-1)
- [Source and local runtime](https://github.com/infercrane/commerce-1)
- [Decision Index evidence](https://huggingface.co/datasets/infercrane/Commerce-1-Decision-Index)

## Boundaries

This is an interactive product demonstration, not a benchmark, nutrition tool,
allergy guarantee, or autonomous checkout. Commerce-1 ranks the frozen actions;
deterministic code enforces hard constraints; the user remains the authority for
checkout.
