import Link from 'next/link';
import { notFound } from 'next/navigation';
import CategoryBadge from '../../../components/CategoryBadge.jsx';
import ReadingProgressBar from '../../../components/ReadingProgressBar.jsx';
import TableOfContents from '../../../components/TableOfContents.jsx';
import ShareButtons from '../../../components/ShareButtons.jsx';
import CopyCodeButton from '../../../components/CopyCodeButton.jsx';
import AdSlot from '../../../components/AdSlot.jsx';
import {
  getPostBySlug,
  getAllPostSlugs,
  getAdjacentPosts,
  getRelatedPosts,
} from '../../../lib/posts.js';
import { formatDate } from '../../../lib/date.js';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.draft) {
    return {
      title: 'Article Not Found',
    };
  }

  const siteUrl = 'https://engineering-journal.pages.dev';
  const url = `${siteUrl}/blog/${slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.pubDate,
      modifiedTime: post.updatedDate || post.pubDate,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: '/images/og-default.svg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: ['/images/og-default.svg'],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.draft) {
    notFound();
  }

  const { prevPost, nextPost } = getAdjacentPosts(slug);
  const relatedPosts = getRelatedPosts(slug, post.category);
  const siteUrl = 'https://engineering-journal.pages.dev';
  const postUrl = `${siteUrl}/blog/${slug}`;

  // Structured Data (JSON-LD) for Schema.org BlogPosting
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `${siteUrl}/images/og-default.svg`,
    datePublished: post.pubDate,
    dateModified: post.updatedDate || post.pubDate,
    author: {
      '@type': 'Person',
      name: post.author,
      url: `${siteUrl}/about`,
    },
    publisher: {
      '@type': 'Person',
      name: post.author,
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };

  return (
    <>
      <ReadingProgressBar />
      <CopyCodeButton />

      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="article-wrapper container-narrow">
        {/* Breadcrumb Navigation */}
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className="sep">/</span>
          <Link href="/blog">Articles</Link>
          <span className="sep">/</span>
          <Link href={`/blog/category/${post.categorySlug}`}>{post.category}</Link>
        </nav>

        {/* Article Header */}
        <header className="article-header">
          <div className="header-meta">
            <CategoryBadge category={post.category} />
            <span className="meta-dot">&bull;</span>
            <span className="reading-time">{post.readingTime}</span>
          </div>

          <h1 className="article-title">{post.title}</h1>
          <p className="article-lead">{post.description}</p>

          <div className="article-byline">
            <div className="author-avatar" aria-hidden="true">
              <span>SH</span>
            </div>
            <div className="byline-details">
              <div className="author-name">
                <Link href="/about">{post.author}</Link>
              </div>
              <div className="publication-dates">
                <time dateTime={post.pubDate}>
                  Published on {formatDate(post.pubDate)}
                </time>
                {post.updatedDate && (
                  <span className="updated-date">
                    {' '}&bull; Updated on {formatDate(post.updatedDate)}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Table of Contents */}
        {post.headings && post.headings.length > 0 && (
          <TableOfContents headings={post.headings} />
        )}

        {/* Article Content Rendered from Markdown */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Tags List */}
        {post.tags && post.tags.length > 0 && (
          <div className="article-tags-section">
            <span className="tags-heading">Tags:</span>
            <div className="tags-container">
              {post.tags.map((tag) => (
                <span key={tag} className="article-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Social Sharing */}
        <ShareButtons title={post.title} url={postUrl} />

        {/* AdSense Placement Ready */}
        <AdSlot slotId="article-bottom-slot" format="auto" />

        {/* Author Callout Box */}
        <aside className="author-callout">
          <div className="callout-avatar" aria-hidden="true">
            <span>SH</span>
          </div>
          <div className="callout-text">
            <h4>About the Author</h4>
            <p>
              <strong>Syed Mohammad Hamzah</strong> is a 3rd-year B.Tech Computer Science and Engineering student. He is documenting his hands-on explorations in Data Science, Machine Learning, Artificial Intelligence, and his preparations for GATE DA 2027. You can follow his open-source work on{' '}
              <a
                href="https://github.com/syedhamzah-dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub (@syedhamzah-dev)
              </a>.
            </p>
            <p className="callout-sub">
              Have feedback or spot a mistake in this article? Feel free to{' '}
              <Link href="/contact">reach out</Link>. Constructive critique helps everyone grow.
            </p>
          </div>
        </aside>

        {/* Post Navigation: Previous & Next */}
        {(prevPost || nextPost) && (
          <nav className="post-navigation" aria-label="Adjacent articles">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="nav-card prev-card">
                <span className="nav-direction">&larr; Previous Article</span>
                <span className="nav-title">{prevPost.title}</span>
              </Link>
            ) : (
              <div className="nav-card placeholder" />
            )}

            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="nav-card next-card">
                <span className="nav-direction">Next Article &rarr;</span>
                <span className="nav-title">{nextPost.title}</span>
              </Link>
            ) : (
              <div className="nav-card placeholder" />
            )}
          </nav>
        )}

        {/* Related Articles in same Category */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="related-articles-section">
            <h3 className="related-heading">Related Articles in {post.category}</h3>
            <div className="related-grid">
              {relatedPosts.map((related) => (
                <div key={related.slug} className="related-item">
                  <span className="related-date">{formatDate(related.pubDate)}</span>
                  <h4 className="related-title">
                    <Link href={`/blog/${related.slug}`}>{related.title}</Link>
                  </h4>
                  <p className="related-desc">{related.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}

