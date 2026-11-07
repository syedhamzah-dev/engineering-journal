import Link from 'next/link';
import { CATEGORIES } from '../lib/categories.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-grid">
          {/* Col 1: Brand & Philosophy */}
          <div className="footer-col col-brand">
            <h3 className="footer-brand-title">Beyond the Algorithm</h3>
            <p className="footer-tagline">
              &ldquo;Exploring Data, Artificial Intelligence, Machine Learning and the ideas behind them.&rdquo;
            </p>
            <p className="footer-note">
              An independent technology publication by Syed Mohammad Hamzah. Documenting concepts, projects, experiments, and technical foundations in Data Science, Artificial Intelligence, Machine Learning, and programming.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">All Articles</Link>
              </li>
              <li>
                <Link href="/about">About the Author</Link>
              </li>
              <li>
                <Link href="/contact">Get in Touch</Link>
              </li>
              <li>
                <a
                  href="https://github.com/syedhamzah-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub (@syedhamzah-dev)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/syedmohdhamzah/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <a href="/rss.xml">RSS Feed</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Topics */}
          <div className="footer-col">
            <h4 className="footer-heading">Topics</h4>
            <ul className="footer-links">
              {CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.slug}>
                  <Link href={`/blog/category/${category.slug}`}>
                    {category.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="all-topics-link">
                  Browse all categories &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom hairline */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Syed Mohammad Hamzah &bull; Beyond the Algorithm. Built with Next.js &amp; React. Designed for clarity, performance, and longevity.
          </p>
          <div className="bottom-links">
            <a href="#top" className="back-to-top">
              Back to top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

