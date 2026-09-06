import "./AboutContent.css";

function AboutContent() {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "JavaScript", "TypeScript", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Python", "FastAPI", "PHP", "Symfony", "Laravel"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Linux", "Bash", "uv", "ty", "Ruff"],
    },
  ];

  return (
    <section className="about" id="about" data-section="02 — À PROPOS">
      <div className="about-content">
        <header className="about-header">
          <span className="about-label">À propos</span>
          <h2 className="about-title">
            Créer des expériences<br />
            <span className="about-title-accent">qui ont du sens.</span>
          </h2>
        </header>

        <div className="about-main">
          <div className="about-bio">
            <p className="about-text">
              Diplômé d'un <strong>BUT Informatique</strong>, je poursuis actuellement un
              <strong> Master of Science à Epitech Marseille</strong>, avec une spécialisation
              en <em>Data</em> et <em>Intelligence Artificielle</em>.
            </p>
            <p className="about-text">
              Curieux et passionné, j'ai développé une expertise en développement web
              full-stack à travers mes expériences professionnelles et scolaires. Mon objectif : participer
              à des projets innovants et créer des solutions qui font la différence.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Experiences pro</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Bac+5</span>
              <span className="stat-label">En cours</span>
            </div>
          </div>
        </div>

        <div className="about-skills">
          <h3 className="skills-heading">Stack technique</h3>
          <div className="skills-grid">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="skill-group">
                <div className="skill-group-content">
                  <span className="skill-group-category">{skillGroup.category}</span>
                  <span className="skill-group-items">
                    {skillGroup.items.join(" · ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;
