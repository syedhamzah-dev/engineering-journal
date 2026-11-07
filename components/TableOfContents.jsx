export default function TableOfContents({ headings = [] }) {
  const toc = headings.filter((h) => h.depth === 2 || h.depth === 3);

  if (toc.length <= 1) {
    return null;
  }

  return (
    <nav className="toc-wrapper" aria-label="Table of contents">
      <div className="toc-header">
        <span className="toc-title">Table of Contents</span>
      </div>
      <ul className="toc-list">
        {toc.map((heading) => (
          <li
            key={heading.slug}
            className={`toc-item depth-${heading.depth}`}
          >
            <a href={`#${heading.slug}`} className="toc-link">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

