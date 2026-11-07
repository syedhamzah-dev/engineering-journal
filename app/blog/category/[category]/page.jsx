import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '../../../../components/ArticleCard.jsx';
import { getAllPosts } from '../../../../lib/posts.js';
import { CATEGORIES, getCategoryBySlug } from '../../../../lib/categories.js';

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const categoryInfo = getCategoryBySlug(categorySlug);

  if (!categoryInfo) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${categoryInfo.name} | Category Archive`,
    description: categoryInfo.description,
  };
}

export default async function CategoryArchivePage({ params }) {
  const { category: categorySlug } = await params;
  const categoryInfo = getCategoryBySlug(categorySlug);

  if (!categoryInfo) {
    notFound();
  }

  const allPosts = getAllPosts(false);
  const posts = allPosts.filter(
    (p) => p.categorySlug === categorySlug || p.category.toLowerCase() === categoryInfo.name.toLowerCase()
  );

  return (
    <div className="container container-wide category-page">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className="sep">/</span>
        <Link href="/blog">Articles</Link>
        <span className="sep">/</span>
        <span className="current">Category: {categoryInfo.name}</span>
      </nav>

      {/* Category Header */}
      <header className="category-header">
        <div className="category-badge-top">Category Archive</div>
        <h1 className="category-title">{categoryInfo.name}</h1>
        <p className="category-desc">{categoryInfo.description}</p>
        <div className="category-count">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this collection
        </div>
      </header>

      {/* Other Categories Navigation */}
      <div className="other-categories-bar">
        <span className="bar-title">Other categories:</span>
        <div className="chips-container">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog/category/${cat.slug}`}
              className={`cat-chip ${cat.slug === categorySlug ? 'active' : ''}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Articles Feed */}
      <div className="articles-list">
        {posts.length === 0 ? (
          <div className="no-posts">
            <p>No articles published in this category yet. Stay tuned!</p>
            <Link href="/blog" className="btn btn-outline">
              &larr; Back to all articles
            </Link>
          </div>
        ) : (
          posts.map((post) => (
            <ArticleCard
              key={post.slug}
              title={post.title}
              description={post.description}
              pubDate={post.pubDate}
              category={post.category}
              readingTime={post.readingTime}
              slug={post.slug}
              tags={post.tags}
            />
          ))
        )}
      </div>
    </div>
  );
}

