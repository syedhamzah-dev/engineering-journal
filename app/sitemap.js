import { getAllPosts } from '../lib/posts.js';
import { CATEGORIES } from '../lib/categories.js';

export default function sitemap() {
  const siteUrl = 'https://engineering-journal.pages.dev';
  // Strictly non-draft posts only
  const posts = getAllPosts(false);

  const staticRoutes = ['', '/blog', '/about', '/contact', '/privacy'].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
    })
  );

  const categoryRoutes = CATEGORIES.map((cat) => ({
    url: `${siteUrl}/blog/category/${cat.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const articleRoutes = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedDate || post.pubDate,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}

