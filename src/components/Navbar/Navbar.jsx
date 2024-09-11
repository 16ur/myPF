import "./Navbar.css";
import amLogo from "../../assets/am-logo.png";
function Navbar() {
  return (
    <>
      <nav className="navBar">
        <div className="navbarLeft">
          <img src={amLogo} className="amLogoClass" alt="am-logo" />
        </div>

        <div className="navbarRight">
          <ul className="navLinks"></ul>
          <li>
            <a href="/about">about</a>
          </li>

          <li>
            <a href="/parcours">parcours</a>
          </li>
          <li>
            <a href="/projets">projets</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
