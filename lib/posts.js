import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { getReadingTime } from './readingTime.js';
import { slugifyCategory } from './categories.js';

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

/**
 * Slugs a heading string into a URL-friendly anchor id.
 */
function slugifyHeading(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

/**
 * Extracts h2 and h3 headings from raw markdown for the Table of Contents.
 */
function extractHeadings(rawContent) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(rawContent)) !== null) {
    const depth = match[1].length;
    const rawText = match[2].trim();
    // Strip bold/italic/links formatting in heading text
    const cleanText = rawText.replace(/[*_`]/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    const slug = slugifyHeading(cleanText);

    headings.push({
      depth,
      text: cleanText,
      slug,
    });
  }

  return headings;
}

/**
 * Adds id attributes to <h2> and <h3> tags in the generated HTML
 * so that Table of Contents anchor links jump to the correct place.
 */
function injectHeadingIds(htmlContent, headings) {
  let updatedHtml = htmlContent;

  headings.forEach(({ depth, text, slug }) => {
    const tag = `h${depth}`;
    // Replace the first occurrence of <tag>text</tag> with <tag id="slug">text</tag>
    const escapedText = text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    const regex = new RegExp(`<${tag}>(.*?${escapedText}.*?)<\\/${tag}>`, 'i');
    updatedHtml = updatedHtml.replace(regex, `<${tag} id="${slug}">$1</${tag}>`);
  });

  return updatedHtml;
}

/**
 * Retrieves all published blog posts, sorted by publication date descending.
 * Automatically excludes draft posts unless explicitly specified.
 */
export function getAllPosts(includeDrafts = false) {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md') && !fileName.endsWith('.mdx')) continue;

    const slug = fileName.replace(/\.(md|mdx)$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const isDraft = Boolean(data.draft);
    if (!includeDrafts && isDraft) {
      continue;
    }

    const pubDate = data.pubDate ? new Date(data.pubDate) : new Date();
    const updatedDate = data.updatedDate ? new Date(data.updatedDate) : null;

    posts.push({
      slug,
      title: data.title || 'Untitled Article',
      description: data.description || '',
      pubDate: pubDate.toISOString(),
      updatedDate: updatedDate ? updatedDate.toISOString() : null,
      category: data.category || 'General',
      categorySlug: slugifyCategory(data.category || 'General'),
      tags: Array.isArray(data.tags) ? data.tags : [],
      draft: isDraft,
      author: data.author || 'Syed Mohammad Hamzah',
      readingTime: getReadingTime(content),
      content,
    });
  }

  // Sort by pubDate descending
  return posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
}

/**
 * Retrieves a single post by slug, converting markdown to HTML and extracting TOC headings.
 */
export async function getPostBySlug(slug) {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const fullPath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const isDraft = Boolean(data.draft);
  const pubDate = data.pubDate ? new Date(data.pubDate) : new Date();
  const updatedDate = data.updatedDate ? new Date(data.updatedDate) : null;
  const headings = extractHeadings(content);

  // Process markdown into HTML with GitHub Flavored Markdown (tables, autolinks)
  const processedContent = await remark()
    .use(gfm)
    .use(html, { sanitize: false })
    .process(content);

  const rawHtml = processedContent.toString();
  const contentHtml = injectHeadingIds(rawHtml, headings);

  return {
    slug,
    title: data.title || 'Untitled Article',
    description: data.description || '',
    pubDate: pubDate.toISOString(),
    updatedDate: updatedDate ? updatedDate.toISOString() : null,
    category: data.category || 'General',
    categorySlug: slugifyCategory(data.category || 'General'),
    tags: Array.isArray(data.tags) ? data.tags : [],
    draft: isDraft,
    author: data.author || 'Syed Mohammad Hamzah',
    readingTime: getReadingTime(content),
    contentHtml,
    headings,
    rawContent: content,
  };
}

/**
 * Retrieves all published slugs for static generation.
 */
export function getAllPostSlugs() {
  const posts = getAllPosts(false);
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Retrieves adjacent (previous and next) articles based on chronological order.
 */
export function getAdjacentPosts(currentSlug) {
  const posts = getAllPosts(false);
  // Sort ascending chronologically
  const chronological = [...posts].sort((a, b) => new Date(a.pubDate) - new Date(b.pubDate));
  const currentIndex = chronological.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return { prevPost: null, nextPost: null };
  }

  const prevPost = currentIndex > 0 ? {
    title: chronological[currentIndex - 1].title,
    slug: chronological[currentIndex - 1].slug,
  } : null;

  const nextPost = currentIndex < chronological.length - 1 ? {
    title: chronological[currentIndex + 1].title,
    slug: chronological[currentIndex + 1].slug,
  } : null;

  return { prevPost, nextPost };
}

/**
 * Retrieves related articles in the same category (excluding current post).
 */
export function getRelatedPosts(currentSlug, category, limit = 2) {
  const posts = getAllPosts(false);
  return posts
    .filter((p) => p.slug !== currentSlug && p.category.toLowerCase() === (category || '').toLowerCase())
    .slice(0, limit)
    .map((p) => ({
      title: p.title,
      description: p.description,
      slug: p.slug,
      pubDate: p.pubDate,
      readingTime: p.readingTime,
    }));
}

