import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const AccessAdmin = () => {
  const { user } = useAuth();

  console.info("AccessAdmin → Utilisateur :", user);

  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  if (!user.is_admin) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AccessAdmin;
