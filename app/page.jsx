import Link from 'next/link';
import ArticleCard from '../components/ArticleCard.jsx';
import { getAllPosts } from '../lib/posts.js';
import { CATEGORIES } from '../lib/categories.js';

export const metadata = {
  title: 'Beyond the Algorithm | Technology Publication',
  description:
    'An independent technology blog documenting concepts, projects, experiments and learning in Data Science, Artificial Intelligence, Machine Learning and programming by Syed Mohammad Hamzah.',
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
          <div className="hero-badge">Independent Technology Publication &bull; Personal Engineering &amp; Data Journal</div>
          <h1 className="hero-title">
            Exploring Data, Artificial Intelligence, Machine Learning and the ideas behind them.
          </h1>
          <p className="hero-description">
            Welcome to <strong>Beyond the Algorithm</strong>, an independent publication by <strong>Syed Mohammad Hamzah</strong>—a 3rd-year Computer Science student documenting concepts, projects, experiments, mathematical foundations, and ongoing learning across Data Science, Artificial Intelligence, Machine Learning, and software engineering.
          </p>
          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">
              Browse All Articles &rarr;
            </Link>
            <Link href="/about" className="btn btn-outline">
              About the Publication
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
            <div className="about-card-badge">Editorial Philosophy</div>
            <h2 className="about-card-title">Why Beyond the Algorithm?</h2>
            <p>
              Too much of technology media is optimized for superficial buzzwords, marketing hype, and copy-pasted tutorials. <strong>Beyond the Algorithm</strong> is dedicated to examining what lies beneath the surface—exploring mathematical foundations, analyzing messy real-world data, building functional software, and documenting technical experiments with intellectual honesty.
            </p>
            <p>
              From linear algebra in high-dimensional vector spaces and statistical learning theory to practical Python pipelines, hackathon post-mortems, and preparation for GATE DA 2027, every article published here focuses on <strong>understanding from first principles</strong>.
            </p>
            <div className="about-card-footer">
              <Link href="/about" className="btn btn-outline">
                About the Publication &rarr;
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

