import Link from 'next/link';
import { slugifyCategory } from '../lib/categories.js';

export default function CategoryBadge({ category, className = '' }) {
  if (!category) return null;
  const slug = slugifyCategory(category);

  return (
    <Link href={`/blog/category/${slug}`} className={`category-badge ${className}`}>
      {category}
    </Link>
  );
}

