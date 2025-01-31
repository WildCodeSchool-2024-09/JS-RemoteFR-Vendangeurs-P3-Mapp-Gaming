import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Deconnexion() {
  const { setUser } = useAuth(); // Accéder à la fonction setUser dans le context
  const navigate = useNavigate(); // Utiliser useNavigate pour rediriger après déconnexion

  const handleLogout = () => {
    setUser(null); // Supprimer l'utilisateur du context
    localStorage.removeItem("user"); // Supprimer l'utilisateur du localStorage
    navigate("/connexion"); // Rediriger vers la page de connexion
  };

  return (
    <button type="button" onClick={handleLogout} className="logout-button">
      Se déconnecter
    </button>
  );
}
