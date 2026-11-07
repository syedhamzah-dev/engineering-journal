# Learning in Progress — Personal Technology Journal

> *"An engineering student documenting the journey from curiosity to code, data and intelligence."*

An independent, editorial-grade personal blogging platform custom-crafted for **Syed Mohammad Hamzah**, a third-year B.Tech Computer Science and Engineering student. 

This website documents hands-on explorations, algorithmic breakdowns, practical mistakes, data investigations, and structured academic preparation for the **GATE Data Science and Artificial Intelligence (DA) 2027** examination.

---

## 1. Project Overview

*Learning in Progress* is a custom personal technology publication built to move beyond superficial tutorials and generic tech news. It acts as an open laboratory notebook where the author records the unfiltered reality of learning complex computer science disciplines from first principles.

The website is engineered with a modern editorial aesthetic: warm off-white backgrounds, dark charcoal typography, muted forest green accents, generous whitespace, and responsive layouts designed for reading long-form technical prose comfortably.

---

## 2. Motivation

In computer science education, there is an overwhelming incentive toward passive consumption and performative expertise. The purpose of this journal is:

1. **Active Synthesis:** Explaining technical concepts—from vector projections in Linear Algebra to cost functions in Machine Learning—to test genuine understanding.
2. **Honest Engineering Records:** Documenting real bugs, debugging methodologies, design choices, and post-mortems of student projects.
3. **Structured Examination Preparation:** Serving as a transparent accountability log for multi-semester preparation toward the **GATE DA 2027** examination.
4. **Independent Personal Brand:** Building a self-owned, long-term technical identity uncoupled from third-party social algorithms.

---

## 3. Features Implemented

- **Modern Editorial Design:** Custom plain CSS styling with warm off-white background (`#fbfaf6`), dark charcoal typography (`#1d2125`), and muted forest green accents (`#28543e`).
- **Dynamic Content Engine:** Local Markdown article loading with YAML frontmatter parsing via `gray-matter`.
- **Instant Client-Side Search:** Real-time search filtering on the articles archive by title, description, or tag with zero page reloads.
- **Category Taxonomy:** 7 dedicated engineering categories with dedicated archive pages and related article recommendations.
- **Dynamic Table of Contents:** Automatic extraction of `h2` and `h3` heading anchors with in-page navigation.
- **Reading Progress Indicator:** Hairline scroll progress bar fixed to the top of long-form articles.
- **Estimated Reading Time:** Automated reading duration calculated at 200 words per minute.
- **Adjacent Article Navigation:** Chronological previous and next article links connecting published posts.
- **Interactive Code Copying:** One-click clipboard copy button on preformatted code blocks.
- **Native Social Sharing:** Integrated links for X (Twitter), LinkedIn, Reddit, and clipboard URL copying.
- **Strict Draft Filtering:** Articles marked with `draft: true` are completely excluded from public listings, static generation, search, and the sitemap.
- **Accessible Mobile Navigation:** Responsive hamburger drawer menu designed with pure semantic HTML, CSS, and minimal React state.
- **Technical SEO:** Native Next.js sitemap (`/sitemap.xml`), robots directives (`/robots.txt`), Open Graph metadata, Twitter card tags, and Schema.org `BlogPosting` structured data.
- **RSS 2.0 Syndication:** Dynamic XML feed available at `/rss.xml`.
- **Monetization Readiness:** Non-intrusive `AdSlot` component prepared for future Google AdSense integration once traffic matures.

---

## 4. Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Version 15)
- **Library:** [React](https://react.dev/) (Version 19)
- **Language:** JavaScript (ES Modules, strictly no TypeScript)
- **Markup:** HTML5 through JSX
- **Styling:** Plain CSS3 (Custom CSS properties, semantic selectors, no utility frameworks)
- **Content Parsing:** `gray-matter`, `remark`, `remark-html`, `remark-gfm`
- **Version Control:** Git & GitHub

---

## 5. Project Structure

```text
engineering-journal/
├── app/
│   ├── globals.css             # Design system variables, typography, and responsive styles
│   ├── layout.jsx              # Root layout with metadata, Google Fonts, Header, and Footer
│   ├── page.jsx                # Homepage (Hero, categories, featured post, recent posts)
│   ├── not-found.jsx           # Custom 404 error page
│   ├── sitemap.js              # Native Next.js sitemap generator (/sitemap.xml)
│   ├── robots.js               # Native Next.js robots generator (/robots.txt)
│   ├── about/
│   │   └── page.jsx            # Author background and GATE DA preparation context
│   ├── contact/
│   │   └── page.jsx            # Direct channels and mailto inquiry form
│   ├── privacy/
│   │   └── page.jsx            # Privacy Policy (AdSense & compliance ready)
│   ├── rss.xml/
│   │   └── route.js            # RSS 2.0 XML route handler
│   └── blog/
│       ├── page.jsx            # Articles archive with interactive search and category filter
│       ├── [slug]/
│       │   └── page.jsx        # Dynamic article page (SSG, TOC, prev/next, related posts)
│       └── category/
│           └── [category]/
│               └── page.jsx    # Dedicated category archive pages (SSG)
├── components/
│   ├── AdSlot.jsx              # Future Google AdSense placeholder container
│   ├── ArticleCard.jsx         # Editorial article listing card
│   ├── BlogListingClient.jsx   # Interactive search and filter client component
│   ├── CategoryBadge.jsx       # Category badge linking to category archive
│   ├── CopyCodeButton.jsx      # Progressive enhancement for code block copying
│   ├── Footer.jsx              # Publication footer with brand philosophy and links
│   ├── Header.jsx              # Responsive header and navigation drawer
│   ├── ReadingProgressBar.jsx  # Fixed scroll progress indicator
│   ├── ShareButtons.jsx        # Social sharing and copy link buttons
│   └── TableOfContents.jsx     # Anchor links for h2/h3 headings
├── content/
│   └── blog/                   # Markdown (.md) article files
├── lib/
│   ├── categories.js           # 7 canonical domains, descriptions, and slugification
│   ├── date.js                 # Editorial date formatting utilities
│   ├── posts.js                # Markdown parser, frontmatter reader, draft filter, TOC
│   └── readingTime.js          # Reading time estimator
├── public/
│   ├── favicon.svg             # Custom SVG publication monogram
│   └── images/
│       └── og-default.svg      # High-resolution 1200x630 Open Graph preview
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and npm scripts
└── README.md                   # Project documentation
```

---

## 6. Installation and Local Development

### Prerequisites
- Node.js `v20.0.0` or higher (tested on Node `v24.20.0`)
- npm `v10.0.0` or higher (tested on npm `12.0.1`)
- Git

### Steps:
```bash
# 1. Clone the repository
git clone https://github.com/syedhamzah-dev/engineering-journal.git

# 2. Navigate to the project directory
cd engineering-journal

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the website locally.

---

## 7. Creating a Blog Post

Articles are stored as Markdown files inside the `content/blog/` directory. Adding an article requires zero component modifications.

### Step-by-Step:
1. Create a new file: `content/blog/your-article-slug.md`
2. Add the required frontmatter metadata at the top:

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

Explain the concepts in plain text, with lists, blockquotes, or code blocks:

```python
import numpy as np

# Compute eigenvalues and eigenvectors
matrix = np.array([[4, 2], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(matrix)
print("Eigenvalues:", eigenvalues)
```
```

### Supported Categories:
Articles must be categorized under one of the 7 core domains:
1. `My Engineering Journey`
2. `Programming`
3. `Data Science`
4. `Artificial Intelligence`
5. `Machine Learning`
6. `Projects and Experiments`
7. `Career and Learning`

### Draft Status:
To keep an article private while writing, set `draft: true`. Draft articles are automatically excluded from the public blog listing, category archives, search index, and sitemap. To publish, set `draft: false`.

---

## 8. Build and Deployment

### Production Build Commands:
To test and create an optimized production build locally:

```bash
# Build the production application
npm run build

# Start the production server locally
npm run start
```

### Deploying to Vercel (Recommended):
Because this project is built on Next.js, [Vercel](https://vercel.com/) provides zero-configuration, native edge hosting:

1. Push your latest code to your GitHub repository (`main` branch).
2. Go to [vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. Click **Add New** &rarr; **Project** and import `engineering-journal`.
4. Vercel automatically detects the **Next.js** framework preset.
5. Keep default settings (`Build Command: npm run build`, `Output Directory: .next`).
6. Click **Deploy**.
7. Vercel will build the project and provide a live production URL (with automatic deployments on every future `git push`).

---

## 9. Future Improvements

The following items represent potential future additions and are clearly distinguished from the completed features above:

- [ ] **Newsletter Integration:** Adding a minimal email subscription box (e.g., Buttondown or Substack embed) for new article notifications.
- [ ] **Interactive Visualizations:** Embedding interactive React charts (e.g., Chart.js or D3) for data analytics articles.
- [ ] **Dark Mode Toggle:** Providing a manual switch between the warm editorial parchment theme and a soft charcoal dark mode.
- [ ] **Custom Domain Setup:** Connecting a personal domain name (e.g., `hamzah.dev`).
- [ ] **Monetization Introduction:** Enabling Google AdSense slots once the site reaches 25+ comprehensive original articles and consistent organic readership.

---

## 10. AI Assistance & Transparency

This website was developed with AI assistance through prompt-based pair programming using **Google Antigravity** as an AI-assisted development environment.

Transparency and academic integrity are core principles of this publication. AI assistance was utilized where applicable for:
- Initial project structure and directory architecture setup.
- Frontend design and typography recommendations for an editorial reading experience.
- Code generation and implementation of Next.js App Router components.
- Migration from an initial Astro prototype to pure JavaScript Next.js.
- Debugging and resolving framework-specific build issues.
- Quality assurance testing and verification scripts.
- Technical documentation structure and README preparation.

### Author's Statement:
- This is my personal engineering project.
- AI tools served as developmental and coding assistants throughout the workflow.
- I personally review, test, understand, and take full responsibility for the code and architecture published in this repository.
- I am actively learning the technologies used across this stack (Next.js, React, JavaScript, and Data Science fundamentals).
- All personal reflections, academic plans (such as GATE DA 2027 preparation), and learning insights represent my authentic personal journey.
- Any future AI-assisted writing or research incorporated into articles will be thoroughly reviewed, validated, and explicitly disclosed.

---

## 11. License

This project is licensed under the [MIT License](LICENSE).
