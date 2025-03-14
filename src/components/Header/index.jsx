import { Link } from "react-router-dom";

function Header() {
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
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
