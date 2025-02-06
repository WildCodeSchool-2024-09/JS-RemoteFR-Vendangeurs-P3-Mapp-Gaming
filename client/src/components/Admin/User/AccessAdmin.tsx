import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const AccessAdmin = () => {
  const { user } = useAuth();

  // Si aucun utilisateur n'est connecté, on le renvoie vers la page de connexion
  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  // Si l'utilisateur est connecté mais n'est pas admin, on le redirige vers la page d'accueil
  if (!user.is_admin) {
    return <Navigate to="/" replace />;
  }

  // Si l'utilisateur est admin, on affiche la page demandée
  return <Outlet />;
};

export default AccessAdmin;
