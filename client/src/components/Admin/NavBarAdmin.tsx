import { Link } from "react-router-dom";

export default function NavBarAdmin() {
  return (
    <nav>
      <div className="flex flex-row mt-10 mb-10 justify-center gap-10">
        <Link to="/admin">
          <h1>Page d'administration</h1>
        </Link>
        <Link to="tous-les-jeux">
          <button type="button">Tous les jeux</button>
        </Link>
        <Link to="utilisateurs">
          <button type="button">Tous les utilisateurs</button>
        </Link>
      </div>
    </nav>
  );
}
