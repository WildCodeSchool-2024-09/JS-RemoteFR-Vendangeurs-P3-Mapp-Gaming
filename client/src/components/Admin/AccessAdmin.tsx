import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const AccessAdmin = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/connexion" replace />;
  }

  if (user.is_admin === false) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AccessAdmin;
