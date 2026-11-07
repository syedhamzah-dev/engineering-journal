# Learning in Progress — Personal Technology Journal

> *"An engineering student documenting the journey from curiosity to code, data and intelligence."*

An independent, editorial-grade personal blogging platform custom-crafted from scratch for **Syed Mohammad Hamzah**, a 3rd-year B.Tech Computer Science & Engineering student. 

This website documents hands-on explorations, algorithmic breakthroughs, practical mistakes, data investigations, and structured academic preparations for the **GATE Data Science and Artificial Intelligence (DA) 2027** examination.

---

## 1. Project Overview & Philosophy

Unlike generic technology news portals or AI-generated card dashboards, *Learning in Progress* is designed to evoke a carefully typeset, independent intellectual journal.

- **Authentic Learning in Public:** Honest reflections and technical deep-dives rather than exaggerated expert personas.
- **Zero-Budget Architecture (₹0):** Custom-coded using modern static site generation with free-tier hosting on Cloudflare Pages.
- **Privacy & AdSense Ready:** Clean navigation, comprehensive privacy policy, direct contact channels, and zero intrusive ads.

---

## 2. Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | [Astro 5](https://astro.build/) | Industry-leading static site generator (SSG) with zero runtime JavaScript overhead for content pages. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Strict compile-time type validation across content schemas, navigation, and utilities. |
| **Content Layer** | Markdown & [MDX](https://mdxjs.com/) | Structured Content Collections with runtime Zod schema validation. |
| **Styling** | Custom CSS3 Design System | Responsive custom properties, editorial serif headings, and charcoal/sage color palette. |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) | High-speed global edge network, automated Git CI/CD, unlimited bandwidth on free tier. |
| **SEO & Feeds** | `@astrojs/sitemap` & `@astrojs/rss` | Automated XML sitemap generation, RSS 2.0 syndication, and schema.org JSON-LD metadata. |

---

## 3. Key Features

- **Editorial Design System:** Warm off-white background (`#fbfaf6`), deep charcoal typography (`#1d2125`), and muted forest green accents (`#28543e`).
- **Dynamic Table of Contents:** Automatically parses `h2` and `h3` heading anchors with smooth navigation.
- **Reading Progress Bar:** Hairline fixed scroll progress indicator at the top of article layouts.
- **Estimated Reading Time:** Dynamic word count calculation (200 words/min) executed during build time.
- **Category & Tag Taxonomy:** 7 core engineering categories with dedicated archive pages and related article recommendations.
- **Adjacent Post Navigation:** Dynamic previous/next article cards connecting your chronological writing timeline.
- **Interactive Social Sharing:** One-click sharing to X (Twitter), LinkedIn, Reddit, and instant clipboard copy.
- **Strict Draft Filtering:** Any article with `draft: true` is strictly filtered out from the production build, listings, RSS feed, and sitemap.
- **Mobile Responsive Drawer Menu:** Pure, accessible navigation that adapts smoothly from desktop to mobile screens.
- **Built-in Monetization Readiness:** Includes an `AdSlot.astro` placeholder component configured for future Google AdSense integration upon traffic maturation.

---

## 4. Directory Structure

```text
engineering-journal/
├── public/
│   ├── favicon.svg             # Custom SVG publication monogram
│   ├── robots.txt              # Search engine crawler instructions & sitemap link
│   └── images/
│       └── og-default.svg      # High-resolution 1200x630 Open Graph preview
├── src/
│   ├── content/
│   │   └── blog/               # Markdown article files
│   ├── content.config.ts       # Astro 5 Content Collections Zod schema
│   ├── components/
│   │   ├── AdSlot.astro        # Google AdSense placeholder container
│   │   ├── ArticleCard.astro   # Editorial article listing card
│   │   ├── CategoryBadge.astro # Category badge with slug routing
│   │   ├── Footer.astro        # Site footer with brand info and links
│   │   ├── Header.astro        # Responsive navigation header and drawer
│   │   ├── ReadingProgressBar.astro # Article scroll progress indicator
│   │   ├── SeoHead.astro       # Open Graph, Twitter, and JSON-LD metadata
│   │   ├── ShareButtons.astro  # Social sharing & copy link buttons
│   │   └── TableOfContents.astro # Headings navigation
│   ├── layouts/
│   │   ├── BaseLayout.astro    # Common HTML scaffold and font links
│   │   └── ArticleLayout.astro # Long-form editorial article layout
│   ├── pages/
│   │   ├── index.astro         # Homepage (Hero, categories, featured, latest)
│   │   ├── about.astro         # Author background and GATE DA context
│   │   ├── contact.astro       # Direct contact channels and message form
│   │   ├── privacy.astro       # Privacy policy (AdSense requirement)
│   │   ├── 404.astro           # Custom 404 error page
│   │   ├── rss.xml.ts          # RSS 2.0 feed generator
│   │   └── blog/
│   │       ├── index.astro     # Chronological article archive
│   │       ├── [slug].astro    # Dynamic individual article page
│   │       └── category/
│   │           └── [category].astro # Category archive views
│   ├── styles/
│   │   └── global.css          # Design system CSS variables and typography
│   └── utils/
│       ├── categories.ts       # Central category taxonomy & slugification
│       ├── date.ts             # Formatting utilities for editorial dates
│       └── readingTime.ts      # Reading time estimator
├── astro.config.mjs            # Astro configuration with sitemap & MDX
├── package.json                # Project dependencies and npm scripts
└── tsconfig.json               # Strict TypeScript configuration
```

---

## 5. Local Development & Build Commands

### Prerequisites
- Node.js `v20.0.0` or later (tested on Node `v24.20.0`)
- npm `v10.0.0` or later (tested on npm `12.0.1`)
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/syedhamzah-dev/engineering-journal.git
cd engineering-journal

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open your browser to `http://localhost:4321` to see the live site with hot-module reloading.

### Type Check & Production Build
```bash
# Type check all components and content collections
npx astro check

# Generate optimized static production files in /dist
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 6. How to Write and Publish an Article

Adding an article requires zero component edits. Simply create a new `.md` file inside `src/content/blog/`:

### Example: `src/content/blog/my-new-article.md`

```markdown
---
title: "Understanding Eigenvalues and Eigenvectors in Machine Learning"
description: "A geometric intuition behind matrix transformations and how PCA utilizes eigenvectors."
pubDate: 2026-03-15
category: "Machine Learning"
tags: ["linear-algebra", "pca", "math", "machine-learning"]
draft: false
author: "Syed Mohammad Hamzah"
---

Your markdown content starts here.

## Heading 2 Example

Write your paragraphs, code snippets, or mathematical formulas:

```python
import numpy as np

# Compute eigenvalues and eigenvectors
matrix = np.array([[4, 2], [1, 3]])
eigenvalues, eigenvectors = np.linalg.eig(matrix)
print("Eigenvalues:", eigenvalues)
```
```

### Supported Categories
Always use one of the 7 standardized categories:
1. `My Engineering Journey`
2. `Programming`
3. `Data Science`
4. `Artificial Intelligence`
5. `Machine Learning`
6. `Projects and Experiments`
7. `Career and Learning`

### Draft Mode
Set `draft: true` while working on an unfinished post. Draft articles are automatically omitted from production builds, RSS feeds, category archives, and sitemaps. When ready, switch to `draft: false`.

---

## 7. Cloudflare Pages Deployment (100% Free)

Cloudflare Pages provides blazing-fast edge hosting with unlimited bandwidth and automated Git deployments at zero cost.

### Step-by-Step Instructions:
1. **Push your code to GitHub** (see Section 8 below).
2. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) (sign up for free if you haven't).
3. Navigate to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
4. Select your `engineering-journal` repository.
5. In the **Set up builds and deployments** screen:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:**
     - `NODE_VERSION` = `24.20.0` (or `20`)
     - `ASTRO_TELEMETRY_DISABLED` = `1`
6. Click **Save and Deploy**.
7. Cloudflare will automatically build the site and provide a free `*.pages.dev` domain (e.g., `https://engineering-journal.pages.dev`).

### Free-Tier Capabilities & Limitations:
- **Cost:** ₹0 ($0.00 / month forever).
- **Bandwidth:** Unlimited.
- **Builds:** 500 build runs per month (more than enough for daily publishing).
- **Custom Domains:** Free SSL certificate and custom apex domain support (e.g., `yourname.com`).
- **CDN:** Cloudflare's global anycast edge caching in 300+ cities worldwide.

---

## 8. GitHub Push Instructions

If you haven't yet connected your local repository to GitHub, follow these exact commands in your terminal:

```bash
# 1. Ensure you are in the project folder
cd "c:\Users\mohdh\Desktop\Projects\My Blog Website"

# 2. Create a new public repository on GitHub named: engineering-journal
# (Visit https://github.com/new and create "engineering-journal")

# 3. Add the GitHub remote (replace with your GitHub URL)
git remote add origin https://github.com/syedhamzah-dev/engineering-journal.git

# 4. Set the branch to main and push
git branch -M main
git push -u origin main
```

---

## 9. Search Engine Optimization (SEO) & Verification

The site is built with technical SEO baked in:
- **Sitemap:** Automatically generated at `/sitemap-index.xml`.
- **Robots.txt:** Configured at `/robots.txt` pointing crawlers to your sitemap.
- **Canonical URLs:** Self-referencing canonical links prevent duplicate indexing.
- **Structured Data:** Schema.org JSON-LD (`BlogPosting`, `WebSite`, `Person`) embedded in `<head>`.

### Connecting Google Search Console:
1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add your property URL (`https://engineering-journal.pages.dev` or custom domain).
3. Choose the **HTML tag** verification method.
4. Copy the verification code and paste it into `src/components/SeoHead.astro` in the verification hook line:
   ```html
   <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
   ```
5. Deploy and click **Verify** in Google Search Console.
6. Submit your sitemap URL: `https://engineering-journal.pages.dev/sitemap-index.xml`.

---

## 10. Future Monetization Setup (Google AdSense)

To prepare for future monetization without compromising editorial integrity:
1. Write 20–30 high-quality, original articles.
2. Ensure consistent organic traffic from search engines and community sharing.
3. Apply for [Google AdSense](https://www.google.com/adsense/).
4. Once approved, open `src/components/AdSlot.astro`:
   - Set `isAdEnabled = true;`
   - Insert your publisher ID: `const adsenseClient = 'ca-pub-XXXXXXXXXXXXXXXX';`
5. Place `<AdSlot slotId="your-slot-id" />` in components or articles where desired.

---

## 11. Author

**Syed Mohammad Hamzah**  
3rd-Year B.Tech Computer Science & Engineering Student  
- GitHub: [@syedhamzah-dev](https://github.com/syedhamzah-dev)  
- Email: [mohdhamzah1308@gmail.com](mailto:mohdhamzah1308@gmail.com)

---

## 12. License

This project is open-source under the [MIT License](LICENSE). Feel free to adapt the design system and architecture for your own personal writing journal.

