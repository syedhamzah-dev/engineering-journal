import Link from 'next/link';
import ArticleCard from '../components/ArticleCard.jsx';
import { getAllPosts } from '../lib/posts.js';
import { CATEGORIES } from '../lib/categories.js';

export const metadata = {
  title: 'Learning in Progress | Personal Technology Blog',
  description:
    'An engineering student documenting the journey from curiosity to code, data and intelligence. Articles on Data Science, AI, Machine Learning, and programming by Syed Mohammad Hamzah.',
};

export default function HomePage() {
  const allPosts = getAllPosts(false);
  const featuredPost = allPosts[0];
  const recentPosts = allPosts.slice(1, 5);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-inner">
          <div className="hero-badge">Personal Journal &bull; 3rd Year B.Tech CSE</div>
          <h1 className="hero-title">
            Documenting the journey from curiosity to code, data and intelligence.
          </h1>
          <p className="hero-description">
            Welcome to <em>Learning in Progress</em>. I am <strong>Syed Mohammad Hamzah</strong>, a third-year Computer Science and Engineering student. This website is an independent personal publication where I document my hands-on experiments, conceptual breakthroughs, mistakes, and preparation for GATE DA 2027.
          </p>
          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">
              Browse All Articles &rarr;
            </Link>
            <Link href="/about" className="btn btn-outline">
              About My Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="categories-bar-section">
        <div className="container">
          <div className="categories-bar-header">
            <span className="bar-title">Explore by Domain:</span>
          </div>
          <div className="categories-pill-row">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="category-pill"
              >
                <span className="pill-name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured & Latest Articles */}
      <section className="articles-section container">
        {featuredPost && (
          <div className="featured-block">
            <div className="section-label">
              <span>Featured Publication</span>
            </div>
            <ArticleCard
              title={featuredPost.title}
              description={featuredPost.description}
              pubDate={featuredPost.pubDate}
              category={featuredPost.category}
              readingTime={featuredPost.readingTime}
              slug={featuredPost.slug}
              tags={featuredPost.tags}
              featured={true}
            />
          </div>
        )}

        <div className="latest-block">
          <div className="section-header-row">
            <h2 className="section-heading">Recent Articles</h2>
            <Link href="/blog" className="view-all-link">
              View all {allPosts.length} articles &rarr;
            </Link>
          </div>

          <div className="articles-list">
            {recentPosts.map((post) => (
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
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview-section">
        <div className="container container-narrow">
          <div className="about-card">
            <div className="about-card-badge">The Philosophy Behind This Blog</div>
            <h2 className="about-card-title">Why an honest, public engineering journal?</h2>
            <p>
              Too much of technology media is optimized for shallow buzzwords and fabricated expertise. As a student entering the critical second half of my undergraduate studies, I wanted a forum that values depth, intellectual honesty, and the actual learning struggle.
            </p>
            <p>
              Whether analyzing high-dimensional vector spaces in Linear Algebra, building Python pipelines for data analytics, or breaking down loss functions in Machine Learning, every article here is written with one goal: <strong>understanding from first principles</strong>.
            </p>
            <div className="about-card-footer">
              <Link href="/about" className="btn btn-outline">
                Read my full background &rarr;
              </Link>
              <a
                href="https://github.com/syedhamzah-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-subtle"
              >
                GitHub Profile &rarr;
              </a>
              <Link href="/contact" className="btn-subtle">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

