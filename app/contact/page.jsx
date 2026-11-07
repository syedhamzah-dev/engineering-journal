export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Syed Mohammad Hamzah for technical feedback, discussions on Data Science, AI, Machine Learning, or GATE DA 2027 preparation.',
};

export default function ContactPage() {
  return (
    <div className="container container-narrow contact-page">
      <header className="contact-header">
        <div className="contact-badge">Communication &amp; Inquiries</div>
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-lead">
          Have feedback on an article, noticed a technical inaccuracy, or want to discuss Data Science, Machine Learning, or GATE DA 2027? I would love to hear from you.
        </p>
      </header>

      <div className="contact-grid">
        {/* Direct Info Column */}
        <div className="contact-info-card">
          <h3>Direct Channels</h3>
          <p className="info-desc">
            Feel free to reach out directly via email or connect through professional networks:
          </p>

          <div className="channel-list">
            <div className="channel-item">
              <span className="channel-label">Email:</span>
              <a href="mailto:mohdhamzah1308@gmail.com" className="channel-link">
                mohdhamzah1308@gmail.com
              </a>
            </div>

            <div className="channel-item">
              <span className="channel-label">GitHub:</span>
              <a
                href="https://github.com/syedhamzah-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
              >
                github.com/syedhamzah-dev
              </a>
            </div>

            <div className="channel-item">
              <span className="channel-label">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/syedmohdhamzah/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
              >
                linkedin.com/in/syedmohdhamzah
              </a>
            </div>

            <div className="channel-item">
              <span className="channel-label">Academic Profile:</span>
              <span className="channel-text">3rd Year B.Tech CSE &bull; India</span>
            </div>
          </div>

          <div className="response-note">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>As an active engineering student, I typically respond within 24–48 hours.</span>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="contact-form-card">
          <h3>Send a Message</h3>
          <p className="form-desc">
            You can use this form to start a conversation or draft an email directly:
          </p>

          <form
            action="mailto:mohdhamzah1308@gmail.com"
            method="GET"
            encType="text/plain"
            className="inquiry-form"
          >
            <div className="form-group">
              <label htmlFor="subject">Subject / Topic</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="e.g., Question regarding GATE DA 2027 Linear Algebra post"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="body">Your Message</label>
              <textarea
                id="body"
                name="body"
                rows="5"
                placeholder="Write your thoughts, critique, question, or feedback here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Send Message &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

