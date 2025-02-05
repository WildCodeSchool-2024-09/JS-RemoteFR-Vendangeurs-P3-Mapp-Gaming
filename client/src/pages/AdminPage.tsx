import { Link, Outlet } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <nav>
        <div className="flex flex-row gap-10">
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
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
