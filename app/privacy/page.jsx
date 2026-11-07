export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy and transparency statement for Beyond the Algorithm by Syed Mohammad Hamzah.',
};

export default function PrivacyPage() {
  return (
    <div className="container container-narrow privacy-page">
      <header className="privacy-header">
        <div className="privacy-badge">Legal &amp; Transparency</div>
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-meta">Last updated: October 2025 &bull; Effective immediately</p>
      </header>

      <div className="privacy-content">
        <p className="lead-text">
          Welcome to <em>Beyond the Algorithm</em>. Your privacy is respected. This Privacy Policy details the types of information that may be gathered when you browse this personal publication, and how that information is handled.
        </p>

        <h2>1. Overview of the Website</h2>
        <p>
          <em>Beyond the Algorithm</em> is an independent personal educational blog maintained by <strong>Syed Mohammad Hamzah</strong>, a student pursuing a B.Tech in Computer Science and Engineering. The primary purpose of this website is to publish technical articles, personal reflections, and study materials regarding computer science, data science, artificial intelligence, and engineering education.
        </p>

        <h2>2. Information We Do Not Collect</h2>
        <p>
          This website does not require account creation, registration, or login. We do not maintain a database of personal accounts, passwords, or payment credentials.
        </p>

        <h2>3. Log Files and Web Hosting</h2>
        <p>
          Like most websites hosted on global cloud infrastructure (such as Vercel or Cloudflare), standard server access logs may be collected automatically by the hosting infrastructure. These logs may include:
        </p>
        <ul>
          <li>Internet Protocol (IP) addresses (anonymized where possible)</li>
          <li>Browser type and version</li>
          <li>Referring and exit pages</li>
          <li>Date and time stamps</li>
          <li>Pages viewed</li>
        </ul>
        <p>
          This data is used exclusively for site maintenance, bandwidth diagnostics, network security, and preventing malicious DDoS attacks. It is not linked to personally identifiable individual profiles.
        </p>

        <h2>4. Cookies and Web Analytics</h2>
        <p>
          Currently, this website operates with minimal cookies strictly necessary for core performance and hosting security. We do not currently run tracking scripts, cross-site trackers, or marketing pixels. If privacy-respecting analytics are introduced in the future, this policy will be updated accordingly.
        </p>

        <h2>5. Future Advertising &amp; Google AdSense Readiness</h2>
        <p>
          This website is structured to comply with Google AdSense quality and transparency guidelines. When advertising is enabled in the future:
        </p>
        <ul>
          <li>Third-party vendors, including Google, may use cookies (such as the DoubleClick cookie) to serve relevant advertisements based on a user’s prior visits to this or other websites.</li>
          <li>Users may opt out of personalized advertising by visiting Google Ads Settings or through AboutAds.info.</li>
          <li>We will never engage in misleading click prompts, intrusive popups, or deceptive ad placement.</li>
        </ul>

        <h2>6. External Links</h2>
        <p>
          Articles on this website frequently link to external sources, such as official Python documentation, research papers, GitHub repositories, and educational platforms. We have no control over the privacy policies or practices of external websites and encourage readers to review their independent privacy terms.
        </p>

        <h2>7. Children&apos;s Privacy</h2>
        <p>
          This website does not knowingly collect any personally identifiable information from children under the age of 13.
        </p>

        <h2>8. Changes to This Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated periodically to reflect changes in site functionality or legal compliance. Any updates will be reflected on this page with a revised &ldquo;Last updated&rdquo; date.
        </p>

        <h2>9. Contact for Privacy Inquiries</h2>
        <p>
          If you have any questions, comments, or concerns regarding this Privacy Policy, please contact:
        </p>
        <div className="contact-box">
          <p><strong>Syed Mohammad Hamzah</strong></p>
          <p>Email: <a href="mailto:mohdhamzah1308@gmail.com">mohdhamzah1308@gmail.com</a></p>
          <p>Publication: <em>Beyond the Algorithm</em></p>
        </div>
      </div>
    </div>
  );
}

