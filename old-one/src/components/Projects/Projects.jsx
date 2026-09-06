import { useState, useEffect, useCallback } from "react";
import "./Projects.css";
import keycraftedImg from "../../assets/KeyCrafted/keycrafted.webp";
import finderImg from "../../assets/Finder/finder.webp";
import horas_dashboard_employe from "../../assets/Horas/dashboard_employe.webp";
import horas_dashboard_manager from "../../assets/Horas/dashboard_manager.webp";
import horas_absence_employe from "../../assets/Horas/absence_employe.webp";
import horas_gestion_pointages from "../../assets/Horas/gestion_pointages.webp";
import horas_landing_page from "../../assets/Horas/landing_page.webp";
import rawlog_landing_page from "../../assets/Rawlog/rawlog_landing.webp"


function Projects() {
  const [activeId, setActiveId] = useState(1);
  const [slideIndex, setSlideIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "rawlog",
      category: "SaaS",
      year: "2026",
      description:
        "Application SaaS basée sur le suivi des séances d'entraînement, des exercices et des progrès au fil du temps. ",
      technologies: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Docker","Docker Compose", "uv"],
      features: [
        "Architecture RESTful avec versioning API (v1)",
        "Modélisation de données complexes",
        "Containerisation complète de l'application",
        "Gestion des migrations et persistance des données",
        "Documentation API automatique avec Swagger"

      ],
      images: [rawlog_landing_page],
      link: "https://github.com/16ur/rawlog",
      confidential: false,
    },
    {
      id: 2,
      number: "02",
      title: "Horas",
      category: "SaaS",
      year: "2026",
      description:
        "Application SaaS de suivi du temps de travail. Les employés peuvent émarger, consulter leur historique et générer des rapports. Les managers disposent d'un tableau de bord analytique.",
      technologies: ["React.js", "Express.js", "PostgreSQL", "Docker"],
      features: [
        "Émargement avec horodatage sécurisé",
        "Tableau de bord interactif avec graphiques",
        "Génération de rapports et export PDF",
        "Gestion multi-équipes et permissions",
      ],
      images: [horas_landing_page,horas_dashboard_employe, horas_dashboard_manager, horas_absence_employe, horas_gestion_pointages],
      link: "https://github.com/AadiDevv/Horas/",
      confidential: false,
    },
    {
      id: 3,
      number: "03",
      title: "KeyCrafted",
      category: "E-commerce",
      year: "2025",
      description:
        "Plateforme e-commerce complète dédiée aux claviers mécaniques personnalisés. L'utilisateur peut configurer son clavier pièce par pièce et finaliser son achat de manière sécurisée.",
      technologies: ["React.js", "Express.js", "MongoDB", "Docker", "Stripe"],
      features: [
        "Authentification JWT avec sessions persistantes",
        "Intégration Stripe pour les paiements sécurisés",
        "Gestion complète du panier et des commandes",
        "Interface d'administration produits & utilisateurs",
      ],
      images: [keycraftedImg],
      link: "https://github.com/16ur/keycrafted",
      confidential: false,
    },
    {
      id: 4,
      number: "04",
      title: "Finder",
      category: "Marketplace",
      year: "2024",
      description:
        "Plateforme mettant en relation des particuliers et des professionnels pour des services à domicile. Inclut un système de chat temps réel, de notation et de gestion des disponibilités.",
      technologies: ["Laravel", "MySQL", "WebSockets", "Docker"],
      features: [
        "Chat en temps réel via WebSockets",
        "Recherche avancée avec filtres géolocalisés",
        "Système d'évaluation et de notation",
        "Panel admin pour validation des professionnels",
      ],
      images: [finderImg],
      link: null,
      confidential: true,
    },

  ];

  const activeProject = projects.find((p) => p.id === activeId);
  const activeImages = activeProject.images ?? [];

  const selectProject = useCallback((id) => {
    if (id === activeId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveId(id);
      setSlideIndex(0);
      setIsTransitioning(false);
    }, 200);
  }, [activeId]);

  const prevSlide = () => {
    setSlideIndex((i) => (i - 1 + activeImages.length) % activeImages.length);
  };

  const nextSlide = () => {
    setSlideIndex((i) => (i + 1) % activeImages.length);
  };

  useEffect(() => {
    setSlideIndex(0);
  }, [activeId]);

  return (
    <section className="projects" id="projects" data-section="04 — PROJETS">
      <div className="projects-inner">

        {/* Left — Project List */}
        <div className="projects-list">
          <header className="projects-header">
            <span className="projects-label">Projets</span>
            <h2 className="projects-title">
              Mes<br />
              <span className="projects-title-accent">contributions</span>
            </h2>
          </header>

          <nav className="projects-nav">
            {projects.map((project) => (
              <button
                key={project.id}
                className={`project-nav-item ${activeId === project.id ? "active" : ""}`}
                onClick={() => selectProject(project.id)}
              >
                <div className="project-nav-meta">
                  <span className="project-nav-number">{project.number}</span>
                  <span className="project-nav-category">{project.category}</span>
                </div>
                <div className="project-nav-info">
                  <span className="project-nav-title">{project.title}</span>
                  <span className="project-nav-year">{project.year}</span>
                </div>
                <div className="project-nav-bar"></div>
              </button>
            ))}
          </nav>
        </div>

        {/* Right — Project Detail */}
        <div className={`project-detail ${isTransitioning ? "transitioning" : ""}`}>

          {/* Image Slider */}
          <div className="project-slider">
            <div className="project-slider-track">
              {activeImages.length > 0 ? (
                <img
                  key={activeId}
                  src={activeImages[slideIndex]}
                  alt={activeProject.title}
                  className="project-slider-img"
                />
              ) : (
                <div className="project-slider-placeholder">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                  </svg>
                  <span>En cours de développement</span>
                </div>
              )}
              <div className="project-slider-overlay"></div>
            </div>

            {activeImages.length > 1 && (
              <div className="project-slider-controls">
                <button className="slider-btn" onClick={prevSlide} aria-label="Image précédente">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="slider-count">
                  {slideIndex + 1} / {activeImages.length}
                </span>
                <button className="slider-btn" onClick={nextSlide} aria-label="Image suivante">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="project-info">
            <div className="project-info-header">
              <h3 className="project-info-title">{activeProject.title}</h3>
              {activeProject.confidential ? (
                <button
                  className="project-info-link project-info-link--private"
                  onClick={() => setShowModal(true)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round"/>
                  </svg>
                  <span>Confidentiel</span>
                </button>
              ) : (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-info-link"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4 10L10 4M10 4H5M10 4V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              )}
            </div>

            <p className="project-info-description">{activeProject.description}</p>

            <div className="project-info-features">
              <span className="project-info-section-label">Fonctionnalités</span>
              <ul className="project-features-list">
                {activeProject.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-info-tech">
              <span className="project-info-section-label">Stack</span>
              <div className="project-tech-list">
                {activeProject.technologies.map((tech) => (
                  <span key={tech} className="project-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal confidentiel */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
              <h3 className="modal-title">Projet confidentiel</h3>
            </div>
            <div className="modal-body">
              <p>Ce projet a été réalisé dans le cadre de ma formation et ne peut être partagé publiquement pour des raisons de confidentialité.</p>
              <p>Je serais ravi d'en discuter en entretien et de vous présenter des extraits de code si nécessaire.</p>
            </div>
            <button className="modal-close" onClick={() => setShowModal(false)}>Compris</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
