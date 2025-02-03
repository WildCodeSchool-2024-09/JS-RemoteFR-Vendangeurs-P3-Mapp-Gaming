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
    <div className="flex justify-center relative z-10">
      <button
        type="button"
        onClick={handleLogout}
        className="w-44 px-4 py-2 border-primary border text-color-text-primary font-title rounded hover:bg-slate-900/50 focus:outline-none"
      >
        Me déconnecter
      </button>
    </div>
  );
}
