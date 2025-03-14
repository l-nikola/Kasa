import { Link } from "react-router-dom";

function Error() {
  return (
    <main className="error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link className="error__button" to="/">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default Error;
