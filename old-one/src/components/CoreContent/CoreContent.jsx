import "./CoreContent.css";
import CV from "../../assets/CV_AXEL_MANGUIAN.pdf";

function CoreContent() {
  return (
    <section className="hero" id="home" data-section="01 — ACCUEIL">
      <div className="hero-content">
        <div className="hero-intro">
          <span className="hero-greeting">Bonjour, je suis</span>
        </div>

        <h1 className="hero-title">
          <span className="hero-title-line">Axel</span>
          <span className="hero-title-line hero-title-accent">Manguian</span>
        </h1>

        <div className="hero-description">
          <p className="hero-role">
            <span className="hero-role-highlight">Développeur Full-Stack</span>
            <span className="hero-role-separator">/</span>
            <span className="hero-role-location">Marseille</span>
          </p>
          <p className="hero-tagline">
            Avec l’envie constante d’apprendre et d’innover, je me spécialise dans le développement web full-stack.
          </p>
        </div>

        <div className="hero-actions">
          <a href="#about" className="hero-cta hero-cta-primary">
            <span className="hero-cta-text">Découvrir mon parcours</span>
            <span className="hero-cta-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
          <a href={CV} download className="hero-cta hero-cta-secondary">
            <span className="hero-cta-text">Télécharger CV</span>
          </a>
        </div>
      </div>

      <div className="hero-decoration" aria-hidden="true">
        <div className="hero-decoration-circle"></div>
        <div className="hero-decoration-grid"></div>
      </div>
    </section>
  );
}

export default CoreContent;
