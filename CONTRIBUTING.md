# Contributing Guidelines

Thank you for your interest in contributing to *Learning in Progress*!

Because this is a personal engineering journal by Syed Mohammad Hamzah, external contributions usually focus on:
1. Fixing typos, grammatical issues, or broken links in published articles.
2. Correcting technical errata or mathematical inaccuracies in derivations.
3. Suggesting accessibility or performance improvements to the Astro codebase.

---

## How to Submit an Errata or Improvement

1. **Fork the Repository:** Create your own fork of `engineering-journal`.
2. **Create a Feature Branch:**
   ```bash
   git checkout -b fix/article-typo
   ```
3. **Commit Your Changes:** Write descriptive, imperative commit messages:
   ```bash
   git commit -m "docs: correct matrix transposition notation in PCA article"
   ```
4. **Run Quality Checks:**
   ```bash
   npx astro check
   npm run build
   ```
5. **Open a Pull Request:** Describe the correction clearly, citing standard references or textbooks if resolving a mathematical discrepancy.

---

## Article Content Notice

New articles represent the personal learning reflections of the author. We do not accept sponsored guest posts or promotional submissions.

