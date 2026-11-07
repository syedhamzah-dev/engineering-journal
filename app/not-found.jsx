import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found (404)',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <div className="container container-narrow error-page">
      <div className="error-badge">404 Error</div>
      <h1 className="error-title">Page Not Found</h1>
      <p className="error-lead">
        The article or page you are looking for does not exist, has been moved, or the URL was mistyped.
      </p>

      <div className="error-box">
        <h3>Looking for something specific?</h3>
        <p>Here are a few places to continue reading:</p>
        <ul className="error-links">
          <li>
            <Link href="/">&larr; Return to Homepage</Link>
          </li>
          <li>
            <Link href="/blog">Browse All Articles</Link>
          </li>
          <li>
            <Link href="/about">About the Author</Link>
          </li>
          <li>
            <Link href="/contact">Report a Broken Link</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

