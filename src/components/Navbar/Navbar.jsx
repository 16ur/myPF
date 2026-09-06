import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const navItems = [
    { href: "#home",       label: "Accueil",   id: "home" },
    { href: "#about",      label: "À propos",  id: "about" },
    { href: "#experience", label: "Parcours",  id: "experience" },
    { href: "#projects",   label: "Projets",   id: "projects" },
    { href: "#contact",    label: "Contact",   id: "contact" },
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="logo">
            <span className="logo-text">AM</span>
            <span className="logo-dot" />
          </a>

          {/* Nav Links — pill */}
          <nav className="nav-pill">
            {navItems.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Mode sombre" : "Mode clair"}
            >
              <span className="theme-toggle-track">
                <span className="theme-toggle-thumb" />
              </span>
            </button>

            <button
              className={`menu-toggle ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isOpen}
            >
              <span className="menu-toggle-line" />
              <span className="menu-toggle-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
        <nav className="mobile-nav">
          {navItems.map(({ href, label, id }, index) => (
            <a
              key={id}
              href={href}
              className={`mobile-nav-link ${activeSection === id ? "active" : ""}`}
              onClick={closeMenu}
              style={{ "--i": index }}
            >
              <span className="mobile-nav-label">{label}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H9M17 7V15" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </nav>

        <button className="mobile-theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
        </button>
      </div>
    </>
  );
}

export default Navbar;
