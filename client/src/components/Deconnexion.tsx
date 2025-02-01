import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Deconnexion() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/connexion");
  };

  return (
    <button type="button" onClick={handleLogout} className="logout-button mt-8">
      Me déconnecter
    </button>
  );
}
