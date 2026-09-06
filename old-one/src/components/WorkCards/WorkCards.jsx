import { useState } from "react";
import "./WorkCards.css";

function WorkCards() {
  const [expandedId, setExpandedId] = useState(null);

  const experiences = [
    {
      id: 0,
      period: "Sept 2025 — Present",
      title: "Développeur Full-Stack",
      company: "Free Pro",
      location: "Marseille",
      type: "Alternance",
      description: "Développement d'une plateforme de gestion de réseaux privés.",
      technologies: ["Python", "FastAPI", "React", "MySQL", "Docker"],
      details: [
        "Maintenance d'interfaces avec React-Admin",
        "Refonte de la partie frontend en VueJS",
        "Développement backend avec FastAPI",
        "Scripts d'automatisation",
        "Revues de code et méthodologies agiles",
      ],
    },
    {
      id: 1,
      period: "Fév 2025 — Juin 2025",
      title: "Développeur Full-Stack",
      company: "Albalogic",
      location: "Aubagne",
      type: "Stage",
      description: "Maintenance évolutive et corrective de l'application AutoPrecision.",
      technologies: ["PHP", "Symfony", "React", "MySQL"],
      details: [
        "Développement de fonctionnalités avec Symfony et React",
        "Intégration de l'API Tecdoc",
        "Documentation technique et tests",
      ],
    },
    {
      id: 2,
      period: "Sept 2024 — Déc 2024",
      title: "Développeur Backend",
      company: "Winlink Systems",
      location: "Marseille",
      type: "Alternance",
      description: "Maintenance d'une plateforme de gestion hospitalière.",
      technologies: ["PHP", "Laravel", "React", "MySQL"],
      details: [
        "Développement backend avec Laravel",
        "Optimisation des requêtes SQL",
        "Support technique et résolution d'incidents",
      ],
    },
    {
      id: 3,
      period: "Avr 2024 — Juin 2024",
      title: "Développeur Drupal",
      company: "bluedrop.fr",
      location: "Marseille",
      type: "Stage",
      description: "Développement de modules personnalisés et intégration de maquettes.",
      technologies: ["Drupal", "PHP", "JavaScript"],
      details: [
        "Développement de modules Drupal",
        "Intégration de maquettes",
        "Maintenance de l'intranet",
      ],
    },
  ];

  return (
    <section className="experience" id="experience" data-section="03 — PARCOURS">
      <div className="experience-content">
        <header className="experience-header">
          <span className="experience-label">Parcours</span>
          <h2 className="experience-title">
            Expériences<br />
            <span className="experience-title-accent">professionnelles</span>
          </h2>
        </header>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className={`timeline-item ${expandedId === exp.id ? "expanded" : ""}`}
              style={{ "--index": index }}
            >
              <div className="timeline-marker">
                <span className="timeline-dot"></span>
                {index < experiences.length - 1 && <span className="timeline-line"></span>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-type">{exp.type}</span>
                </div>

                <h3 className="timeline-title">{exp.title}</h3>

                <div className="timeline-company">
                  <span className="company-name">{exp.company}</span>
                  <span className="company-separator">·</span>
                  <span className="company-location">{exp.location}</span>
                </div>

                <p className="timeline-description">{exp.description}</p>

                <div className="timeline-technologies">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {exp.details && (
                  <>
                    <button
                      className="timeline-toggle"
                      onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                      aria-expanded={expandedId === exp.id}
                    >
                      <span>{expandedId === exp.id ? "Masquer" : "Détails"}</span>
                      <svg
                        className="toggle-icon"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div className="timeline-details">
                      <ul className="details-list">
                        {exp.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkCards;
