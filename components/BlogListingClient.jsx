'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard.jsx';
import { CATEGORIES } from '../lib/categories.js';

export default function BlogListingClient({ initialPosts = [] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        post.categorySlug === selectedCategory ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const titleMatch = post.title.toLowerCase().includes(q);
      const descMatch = post.description.toLowerCase().includes(q);
      const tagMatch = post.tags.some((t) => t.toLowerCase().includes(q));

      return titleMatch || descMatch || tagMatch;
    });
  }, [initialPosts, searchQuery, selectedCategory]);

  return (
    <div className="container container-wide blog-listing-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="page-badge">Index of Writings</div>
        <h1 className="page-title">Articles &amp; Field Notes</h1>
        <p className="page-lead">
          A chronological archive of technical explorations, post-mortems, conceptual breakdowns, and study notes. Written from the perspective of an engineering student.
        </p>
      </header>

      {/* Search & Filter Bar */}
      <div className="filter-bar">
        {/* Search Input */}
        <div className="search-box">
          <svg
            className="search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles by title, keyword, or tag..."
            aria-label="Search articles"
          />
        </div>

        <div className="filter-header">
          <span className="filter-label">Filter by Category:</span>
          <span className="count-badge">
            {searchQuery.trim() || selectedCategory !== 'all'
              ? `${filteredPosts.length} of ${initialPosts.length} articles`
              : `${initialPosts.length} articles`}
          </span>
        </div>

        <div className="category-filter-list">
          <button
            type="button"
            className={`filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Categories
          </button>
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.slug}
              className={`filter-chip ${selectedCategory === cat.slug ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Feed */}
      <div className="articles-container">
        {filteredPosts.length === 0 ? (
          <div className="no-articles">
            <p>No articles matched your search. Try different keywords or clear the filter.</p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="articles-feed">
            {filteredPosts.map((post) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

