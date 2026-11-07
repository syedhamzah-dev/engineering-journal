---
title: "Why I Became Interested in AI and Machine Learning"
description: "How moving from deterministic rules to probabilistic learning sparked my obsession with artificial intelligence and machine learning."
pubDate: 2025-11-26
category: "Artificial Intelligence"
tags: ["ai", "machine-learning", "curiosity", "probabilistic-thinking"]
draft: false
author: "Syed Mohammad Hamzah"
---

Traditional software engineering is fundamentally deterministic. A human programmer conceives an explicit set of rules:

$$\text{Input} + \text{Explicit Rules} \longrightarrow \text{Output}$$

If the input is $X$, execute condition $Y$, otherwise return $Z$. This paradigm powers compilers, databases, operating systems, and banking backends. It is extraordinary in its precision.

However, many of the most valuable problems in the real world defy explicit rules. How do you write conditional statements to detect a handwritten digit '7' across thousands of distinct handwriting styles? How do you write explicit rules to transcribe audio phonemes through background noise?

That is where Machine Learning turns the equation inside out:

$$\text{Input} + \text{Output (Observations)} \longrightarrow \text{Learned Rules / Model}$$

The computer infers the optimal parameters by minimizing error over empirical data. When that concept first crystallized for me, it felt like discovering a different branch of computing altogether.

---

## The Beauty of Mathematical Optimization

Many popular narratives treat Artificial Intelligence as a mysterious, conscious black box. As I delved into the mathematical foundations, the mystique dissolved into something far more elegant: **mathematics in action**.

- **Linear Algebra:** Vector spaces, projections, matrix decompositions, eigenvalues, and dot products determining directional similarity.
- **Multivariate Calculus:** Partial derivatives, gradients, and backpropagation computing how every weight in a network contributed to the loss.
- **Probability & Statistics:** Bayes' theorem, maximum likelihood estimation, Gaussian distributions, and hypothesis testing.
- **Optimization Theory:** Gradient descent, convex vs. non-convex landscapes, learning rates, and momentum.

Seeing abstract formulas from first-year math suddenly come alive to train a classification boundary was exhilarating.

> **Personal Reflection Placeholder:**  
> *[Author's Note: Add a note on the specific book, online lecture series, or professor who first helped you connect the dots between mathematics and machine learning—e.g., 3Blue1Brown's neural network series, Andrew Ng's lectures, or an IIT NPTEL course.]*

---

## Why I Prioritize Theory Over Framework Chasing

It is easy to become a "framework jockey"—someone who can import PyTorch, copy-paste a ResNet script, and call `.fit()`, but has no intuition for why the gradient vanished or why the model is severely overfitting.

My commitment in this learning journey is to prioritize foundational understanding over trendy tools:
- Understanding loss functions from first principles.
- Implementing fundamental algorithms from scratch before reaching for high-level wrappers.
- Rigorously evaluating test/train splits, bias-variance tradeoffs, and data leakage.

In the next article, we will break down the precise operational distinctions between Data Science, AI, and Machine Learning.

