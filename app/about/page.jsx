import Link from 'next/link';

export const metadata = {
  title: 'About the Author & Publication',
  description:
    'About Syed Mohammad Hamzah and Beyond the Algorithm — an independent technology blog exploring Data Science, Artificial Intelligence, Machine Learning and programming.',
};

export default function AboutPage() {
  return (
    <div className="container container-narrow about-page">
      <header className="about-header">
        <div className="about-badge">Background &amp; Purpose</div>
        <h1 className="about-title">About Syed Mohammad Hamzah</h1>
        <p className="about-tagline">
          &ldquo;Exploring Data, Artificial Intelligence, Machine Learning and the ideas behind them.&rdquo;
        </p>
      </header>

      <div className="about-content">
        <section className="bio-intro">
          <p>
            Hello and welcome. I am <strong>Syed Mohammad Hamzah</strong>, currently a third-year undergraduate student pursuing a Bachelor of Technology (B.Tech) in <strong>Computer Science and Engineering</strong>.
          </p>
          <p>
            I started this website not to present myself as a seasoned industry veteran or a guru with all the answers, but to create an authentic, public record of my education. In an age where social media incentivizes performative expertise, I believe there is immense value in showing the unvarnished reality of learning complex technical fields from the ground up.
          </p>
        </section>

        <hr className="section-divider" />

        <section className="about-section">
          <h2>My Path Through Engineering</h2>
          <p>
            Like many students, my journey began with broad curiosity. When I first stepped into engineering, computer science was an expansive, somewhat mysterious terrain. Over my initial semesters, I experimented across different areas—writing foundational code, building web prototypes, exploring databases, and dissecting computer architecture.
          </p>
          <p>
            Through this experimentation, my intellectual curiosity gradually anchored itself around four deeply interconnected disciplines:
          </p>
          <ul className="interests-list">
            <li>
              <strong>Data Science &amp; Analytics:</strong> Exploring how raw, messy real-world data can be collected, cleaned, statistically evaluated, and translated into meaningful insights.
            </li>
            <li>
              <strong>Machine Learning:</strong> Demystifying algorithms that learn from empirical observations rather than rigid rules, from regression models to deep neural networks.
            </li>
            <li>
              <strong>Artificial Intelligence:</strong> Understanding the theoretical foundations of intelligent agents, search heuristics, probabilistic reasoning, and knowledge representation.
            </li>
            <li>
              <strong>Clean Programming &amp; Python:</strong> Writing maintainable, modular, and performant code that stands up to production rigor.
            </li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Preparing for GATE DA 2027</h2>
          <p>
            A cornerstone of my current academic focus is preparing for the <strong>GATE Data Science and Artificial Intelligence (DA) 2027</strong> examination.
          </p>
          <p>
            I view GATE DA not merely as a qualifying competitive exam for premier postgraduate institutions, but as a rigorous, standardized curriculum that forces me to master the core mathematical pillars that underpin modern artificial intelligence:
          </p>
          <div className="pillars-grid">
            <div className="pillar-box">
              <h4>Linear Algebra</h4>
              <p>Vector spaces, orthogonal projections, matrix decompositions, eigenvalues, and SVD.</p>
            </div>
            <div className="pillar-box">
              <h4>Probability &amp; Statistics</h4>
              <p>Bayesian inference, probability distributions, expectation, hypothesis testing, and CLT.</p>
            </div>
            <div className="pillar-box">
              <h4>Calculus &amp; Optimization</h4>
              <p>Multivariate gradients, convex optimization, directional derivatives, and gradient descent.</p>
            </div>
            <div className="pillar-box">
              <h4>Algorithms &amp; Data Structures</h4>
              <p>Asymptotic complexity, sorting, tree/graph traversals, dynamic programming, and Python fluency.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Why &ldquo;Beyond the Algorithm&rdquo;?</h2>
          <p>
            The name of this publication reflects a deliberate philosophy. In computer science and modern artificial intelligence, an algorithm is never just lines of code or an API call. Behind every algorithm lies mathematical structure, human assumptions, empirical data, and real-world consequences.
          </p>
          <p>
            Writing articles forces me to explore what happens beyond the surface syntax. If I cannot explain a concept clearly in plain prose, with working code and rigorous mathematical notation, it means I have not truly understood it. <em>Beyond the Algorithm</em> is an ongoing commitment to depth, technical honesty, and genuine learning.
          </p>
        </section>

        <section className="about-section">
          <h2>Let&apos;s Connect</h2>
          <p>
            I welcome conversations with fellow students, developers, researchers, and mentors. Whether you have feedback on an article, want to collaborate on a data project, or simply want to discuss GATE preparation:
          </p>
          <div className="about-actions">
            <Link href="/contact" className="btn btn-primary">
              Send a Message &rarr;
            </Link>
            <a
              href="https://github.com/syedhamzah-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              GitHub (@syedhamzah-dev)
            </a>
            <Link href="/blog" className="btn btn-outline">
              Read the Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

