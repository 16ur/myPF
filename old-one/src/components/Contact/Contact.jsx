import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" data-section="05 — CONTACT">
      <div className="contact-content">
        <div className="contact-main">
          <header className="contact-header">
            <span className="contact-label">Contact</span>
            <h2 className="contact-title">
              Envie d'échanger<br />
              <span className="contact-title-accent">sur un projet ?</span>
            </h2>
          </header>

          <div className="contact-cta">
            <a href="mailto:axelmanguian@gmail.com" className="contact-email-link">
              <span className="contact-email-text">axelmanguian@gmail.com</span>
              <span className="contact-email-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
            <p className="contact-note">
              N'hésitez pas à me contacter pour discuter de vos idées.
            </p>
          </div>
        </div>

        <div className="contact-details">
          <div className="contact-block">
            <span className="contact-block-label">Localisation</span>
            <span className="contact-block-value">Marseille, France</span>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/16ur"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/axel-manguian/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">
            <span className="footer-year">{new Date().getFullYear()}</span>
            <span className="footer-separator">—</span>
            <span className="footer-name">Axel Manguian</span>
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Contact;
