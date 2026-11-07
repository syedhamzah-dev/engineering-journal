---
title: "How I Started Exploring Programming"
description: "My early experiences learning to write code, navigating syntax vs problem-solving, and how Python became my primary language of exploration."
pubDate: 2025-10-28
category: "Programming"
tags: ["python", "programming", "coding-foundations", "logic-building"]
draft: false
author: "Syed Mohammad Hamzah"
---

Every programmer remembers the first time a terminal responded exactly as intended. Whether it is a trivial `"Hello, World!"` or a tiny script that automates a mundane calculation, that spark of control over a machine is what hooks you.

However, moving from writing five-line practice scripts to understanding how programs truly work under the hood is an intimidating leap. Here is how I approached my early programming education, the mistakes I encountered, and the principles that helped me build confidence.

---

## The Syntax Trap vs. Algorithmic Thinking

When beginners start learning a language like C, C++, or Python, the natural inclination is to obsess over syntax:
- Remembering semicolon rules.
- Memorizing specific function names.
- Watching endless tutorial videos and copying line-by-line.

I fell into this trap early on. I could follow along with a video tutorial and feel productive, but the moment I faced a blank code editor with a novel problem, my mind drew a blank.

The shift happened when I stopped treating programming as "learning syntax" and began treating it as **translating structured thinking into precise instructions**. 

```python
# A simple example: moving from brute force to understanding data flow
def calculate_moving_average(values: list[float], window_size: int) -> list[float]:
    """Calculates simple moving average over a sliding window."""
    if window_size <= 0 or window_size > len(values):
        return []
    
    averages = []
    current_sum = sum(values[:window_size])
    averages.append(current_sum / window_size)
    
    for i in range(window_size, len(values)):
        current_sum += values[i] - values[i - window_size]
        averages.append(current_sum / window_size)
        
    return averages
```

> **Personal Reflection Placeholder:**  
> *[Author's Note: Mention your first programming language—e.g., C in first year or Python in self-study. Add a note on the first small problem or script you built that felt genuinely rewarding.]*

---

## Why Python Became My Foundation

While introductory college courses often start with C or C++ (which are phenomenal for understanding memory allocation, pointers, and compilation cycles), **Python** became my home for higher-level experimentation.

Python’s clean, pseudocode-like readability removed friction. Instead of spending twenty minutes debugging memory leaks or complex header files, I could focus entirely on:
- Problem decomposition.
- Data structures (lists, dictionaries, sets, tuples).
- Writing clean, modular functions.
- Exploring standard libraries and external packages.

This low barrier to experimentation made Python the ideal bridge when I later discovered Data Science and Machine Learning.

---

## Three Practices That Improved My Code Quality

1. **Write Pseudocode with Pen and Paper First:** Never start typing directly into your IDE. Sketch the input, the desired output, the intermediate states, and edge cases on paper.
2. **Read Error Logs Carefully:** Rather than instantly copying and pasting an error message into a search engine, spend two minutes reading the traceback line by line. Most bugs tell you exactly what went wrong if you take the time to listen.
3. **Refactor for Readability:** Once a solution works, spend ten minutes cleaning it up. Rename ambiguous variables, add clear docstrings, and eliminate redundant logic.

Building these habits early has paid compounding dividends as project sizes have grown.

