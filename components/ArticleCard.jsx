import Link from 'next/link';
import { formatDate } from '../lib/date.js';
import CategoryBadge from './CategoryBadge.jsx';

export default function ArticleCard({
  title,
  description,
  pubDate,
  category,
  readingTime,
  slug,
  tags = [],
  featured = false,
}) {
  const formattedDate = formatDate(pubDate);

  return (
    <article className={`article-entry ${featured ? 'featured-entry' : ''}`}>
      <div className="entry-meta">
        <CategoryBadge category={category} />
        <span className="meta-dot">&bull;</span>
        <time dateTime={pubDate} className="entry-date">
          {formattedDate}
        </time>
        <span className="meta-dot">&bull;</span>
        <span className="reading-time">{readingTime}</span>
      </div>

      <h3 className="entry-title">
        <Link href={`/blog/${slug}`} className="entry-title-link">
          {title}
        </Link>
      </h3>

      <p className="entry-description">{description}</p>

      <div className="entry-footer">
        <Link href={`/blog/${slug}`} className="read-more-link">
          Read article <span className="arrow">&rarr;</span>
        </Link>
        {tags && tags.length > 0 && (
          <div className="entry-tags">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="tag-pill">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

