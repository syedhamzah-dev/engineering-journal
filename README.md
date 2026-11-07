# Learning in Progress — Personal Technology Journal

> *"An engineering student documenting the journey from curiosity to code, data, and intelligence."*

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ESM-f7df1e?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/Styling-Plain_CSS3-1572b6?style=flat-square&logo=css3)](https://www.w3.org/Style/CSS/)
[![License: MIT](https://img.shields.io/badge/License-MIT-28543e?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production_Ready-brightgreen?style=flat-square)](#)

---

## Quick Navigation

- [Project Overview](#-project-overview)
- [Why This Journal Exists](#-why-this-journal-exists)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture & Directory Structure](#-architecture--directory-structure)
- [Local Setup & Development](#-local-setup--development)
- [Writing & Publishing Workflow](#-writing--publishing-workflow)
- [Zero-Cost Live Deployment (Vercel)](#-zero-cost-live-deployment-vercel)
- [About the Author](#-about-the-author)
- [AI Assistance & Academic Transparency](#-ai-assistance--academic-transparency)
- [License](#-license)

---

## 📌 Project Overview

| Attribute | Details |
| :--- | :--- |
| **Publication** | **Learning in Progress** |
| **Author** | **Syed Mohammad Hamzah** (3rd-Year B.Tech CSE, Integral University, Lucknow) |
| **Target Exam** | **GATE Data Science & Artificial Intelligence (DA) 2027** |
| **Architecture** | Next.js 15 App Router &bull; Static Site Generation (SSG) &bull; React 19 |
| **Design Language** | Editorial parchment (`#fbfaf6`), deep charcoal (`#1d2125`), muted forest green (`#28543e`) |
| **Repository** | [`syedhamzah-dev/engineering-journal`](https://github.com/syedhamzah-dev/engineering-journal) |
| **Live Demo** | Deployable on [Vercel](https://vercel.com/) / Cloudflare Pages |

*Learning in Progress* is a custom, editorial-grade personal blogging platform and digital laboratory journal. Built from the ground up without heavy templates or utility frameworks, it chronicles the unfiltered process of learning computer science, programming, Data Science, and Machine Learning from first principles.

---

## 🎯 Why This Journal Exists

In modern computer science education, there is a strong temptation toward passive tutorial consumption and collecting online certificates without achieving true conceptual depth. 

This publication is built around three core commitments:

1. **Active Synthesis & First Principles:** Writing down derivations, algorithms, and models in clear prose to verify genuine understanding rather than relying on black-box libraries.
2. **Transparent Engineering Post-Mortems:** Documenting real bugs, hackathon challenges (such as building *ResourceBridge*), and design trade-offs without fabricated metrics.
3. **Structured Exam Accountability:** Serving as a multi-semester public log of rigorous preparation for the **GATE Data Science and AI (DA) 2027** examination.

---

## ✨ Key Features

### 📖 Editorial Reading Experience
- **Typographic Craftsmanship:** Paired with **Newsreader** (for high-legibility editorial serif prose) and **JetBrains Mono** (for clean code readability).
- **Table of Contents (TOC):** Automatic extraction of `h2` and `h3` heading anchors with smooth in-page jumping.
- **Reading Progress Bar:** Fixed hairline progress indicator tracking scroll position across long-form articles.
- **Estimated Reading Times:** Calculated dynamically at 200 words per minute.
- **Adjacent Article Navigation:** Chronological previous and next article links connecting published posts.
- **Code Block Copy:** One-click clipboard copy button on preformatted code blocks.

### 🔍 Dynamic Content & Discovery
- **Instant Client-Side Search:** Real-time filtering across titles, descriptions, and tags with zero page reloads.
- **Category Taxonomy:** 7 curated engineering domains with dedicated static archive routes:
  1. `My Engineering Journey`
  2. `Programming`
  3. `Data Science`
  4. `Artificial Intelligence`
  5. `Machine Learning`
  6. `Projects and Experiments`
  7. `Career and Learning`
- **Draft Protection:** Articles marked `draft: true` are strictly excluded from production listings, search, and sitemaps.

### 🚀 Performance & Technical SEO
- **Static Site Generation (SSG):** All 28 routes pre-rendered at build time for near-instant page loads.
- **Full SEO & Social Meta:** Open Graph cards, Twitter cards, canonical tags, and Schema.org `BlogPosting` structured data.
- **Automated Sitemaps & Feeds:** Dynamic `/sitemap.xml`, `/robots.txt`, and RSS 2.0 syndication at `/rss.xml`.
- **Monetization Readiness:** Non-intrusive `AdSlot` components ready for future Google AdSense activation.
- **Accessibility:** Semantic HTML5, WCAG AAA color contrast ratios, keyboard-navigable drawer, and mobile-friendly responsive layout.

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15.5](https://nextjs.org/) (App Router) | High-performance Static Site Generation, optimized assets, and edge readiness. |
| **UI Library** | [React 19](https://react.dev/) | Component modularity with modern Server and Client component patterns. |
| **Language** | JavaScript (ESM) | Pure, standard JavaScript. Keeps the codebase accessible and understandable for students. |
| **Styling** | Plain CSS3 (`app/globals.css`) | Semantic CSS custom properties, responsive flexbox/grid, and zero utility framework bloat. |
| **Content Engine** | `gray-matter`, `remark`, `remark-html`, `remark-gfm` | Robust Markdown parsing, frontmatter extraction, tables, and anchor injection. |
| **CI / CD** | GitHub Actions (`.github/workflows/ci.yml`) | Automated build verification on every push and pull request. |

> **Note on Architecture:** This project intentionally avoids TypeScript, Tailwind CSS, or third-party UI component libraries to maintain absolute clarity, fast build times, and straightforward code maintainability.

---

## 📂 Architecture & Directory Structure

```text
engineering-journal/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI automated build workflow
├── app/
│   ├── globals.css              # Editorial design system, typography & variables
│   ├── layout.jsx               # Root layout (Metadata, Google Fonts, Header, Footer)
│   ├── page.jsx                 # Homepage (Hero, Category Bar, Featured & Recent Posts)
│   ├── not-found.jsx            # Custom 404 error page
│   ├── sitemap.js               # Dynamic XML sitemap generator (/sitemap.xml)
│   ├── robots.js                # Dynamic robots.txt generator (/robots.txt)
│   ├── about/
│   │   └── page.jsx             # Author background, Integral University & GATE DA focus
│   ├── contact/
│   │   └── page.jsx             # Contact channels (Email, GitHub, LinkedIn, Inquiry Form)
│   ├── privacy/
│   │   └── page.jsx             # Privacy Policy (AdSense & data compliance)
│   ├── rss.xml/
│   │   └── route.js             # RSS 2.0 syndication feed handler (/rss.xml)
│   └── blog/
│       ├── page.jsx             # Articles catalogue with interactive search & filter
│       ├── [slug]/
│       │   └── page.jsx         # Dynamic article page (SSG, TOC, Prev/Next, Share)
│       └── category/
│           └── [category]/
│               └── page.jsx     # Static category archive routes
├── components/
│   ├── AdSlot.jsx               # Future Google AdSense container
│   ├── ArticleCard.jsx          # Editorial article preview card
│   ├── BlogListingClient.jsx    # Interactive client-side search & category filter
│   ├── CategoryBadge.jsx        # Clickable category pill badge
│   ├── CopyCodeButton.jsx       # Progressive enhancement code block copy button
│   ├── Footer.jsx               # Site footer with navigation & LinkedIn profile
│   ├── Header.jsx               # Responsive header with mobile drawer
│   ├── ReadingProgressBar.jsx   # Fixed hairline scroll progress bar
│   ├── ShareButtons.jsx         # Social sharing (X, LinkedIn, Reddit, Clipboard)
│   └── TableOfContents.jsx      # Sticky heading anchor navigation
├── content/
│   └── blog/                    # Markdown (.md) articles
├── lib/
│   ├── categories.js            # 7 canonical domains, descriptions, and slugs
│   ├── date.js                  # Editorial date formatting utilities
│   ├── posts.js                 # Markdown parser, frontmatter reader, TOC extractor
│   └── readingTime.js           # Reading time estimator (200 wpm)
├── public/
│   ├── favicon.svg              # Custom SVG publication monogram
│   └── images/
│       └── og-default.svg       # High-resolution (1200x630) social share card
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies & scripts
└── README.md                    # Project documentation
```

---

## 💻 Local Setup & Development

### Prerequisites
- **Node.js:** `v20.0.0` or higher (tested on Node `v22.x` and `v24.x`)
- **npm:** `v10.0.0` or higher
- **Git**

### 1. Clone the repository
```bash
git clone https://github.com/syedhamzah-dev/engineering-journal.git
cd engineering-journal
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## ✍️ Writing & Publishing Workflow

All articles live in [`content/blog/`](content/blog/) as Markdown files. Adding a new publication requires zero code changes:

### Step 1: Create a Markdown File
Create a new file: `content/blog/your-article-slug.md`

### Step 2: Add Frontmatter Metadata
```markdown
---
title: "Understanding Eigenvalues and Eigenvectors in Machine Learning"
description: "A geometric intuition behind matrix transformations and how Principal Component Analysis utilizes eigenvectors."
pubDate: "2026-03-15"
category: "Machine Learning"
tags: ["linear-algebra", "pca", "math", "machine-learning"]
draft: false
author: "Syed Mohammad Hamzah"
---

Your markdown article content begins here.

## 1. Geometric Intuition

Explain concepts using standard markdown, KaTeX math notation, or code blocks:

```python
import numpy as np

matrix = np.array([[4, 2], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(matrix)
print("Eigenvalues:", eigenvalues)
```
```

### Step 3: Manage Draft Status
- Set `draft: true` while drafting. The article is completely hidden from public listings and sitemaps.
- Set `draft: false` when ready to publish. Next.js will automatically index it across the homepage, catalogue, category pages, sitemap, and RSS feed.

---

## 🌐 Zero-Cost Live Deployment (Vercel)

This repository is optimized for one-click deployment on [Vercel](https://vercel.com/):

1. Push your latest code to your GitHub repository (`main` branch).
2. Go to [**vercel.com**](https://vercel.com/) and log in with your GitHub account.
3. Click **Add New…** &rarr; **Project** and import `engineering-journal`.
4. Vercel automatically detects the **Next.js** framework preset.
5. Click **Deploy**. Your site will be live with free global CDN and SSL in under 1 minute.
6. Every future `git push` to `main` automatically triggers a zero-downtime deployment.

---

## 👨‍💻 About the Author

**Syed Mohammad Hamzah** is a third-year B.Tech Computer Science and Engineering student at **Integral University, Lucknow, India**.

- **Focus Areas:** Programming (Python), Data Science, Artificial Intelligence, and Machine Learning.
- **Projects:** Built [*ResourceBridge*](content/blog/my-experience-building-technical-projects.md) (a community supply-matching web platform built with Python, Flask, HTML, CSS, and JavaScript).
- **Academic Goal:** Preparing systematically for the **GATE Data Science and Artificial Intelligence (DA) 2027** examination.
- **Connect:**
  - 💼 **LinkedIn:** [linkedin.com/in/syedmohdhamzah](https://www.linkedin.com/in/syedmohdhamzah/)
  - 🐙 **GitHub:** [github.com/syedhamzah-dev](https://www.github.com/syedhamzah-dev)
  - ✉️ **Email:** `mohdhamzah1308@gmail.com`

---

## 🤖 AI Assistance & Academic Transparency

This project was developed with AI assistance through prompt-based pair programming using **Google Antigravity**.

In the spirit of academic integrity and technical transparency:
- AI tools were utilized for structural scaffolding, layout recommendations, Next.js App Router migration, build troubleshooting, and editorial assistance.
- All technical architecture, components, and articles were reviewed, tested, and validated by the author.
- All personal reflections, project post-mortems, and GATE DA 2027 preparation plans reflect genuine experiences without fabricated claims or inflated metrics.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
