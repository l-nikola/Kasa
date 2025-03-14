import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header>
      <Link to="/">
        <img
          className="headerLogo"
          src="../public/logo.svg"
          alt="Logo du site"
        />
      </Link>

      <nav>
        <ul className="headerNav">
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
