import axios from "axios";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Deconnexion from "./Deconnexion";

export default function ProfilInformations() {
  const { user, setUser } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/auth/update/${user?.id}`;
    try {
      const response = await axios.put(
        apiUrl,
        {
          username: formData.username || user?.username, // Si inchangé, garde l'ancien
          email: formData.email || user?.email,
        },
        { withCredentials: true },
      );
      setUser(response.data);
      setEditMode(false);
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative z-10 gap-6">
      <div className="w-full max-w-lg p-8 bg-slate-900/50 border border-primary rounded-lg shadow-lg">
        <h2 className="text-xl font-title text-color-text-primary text-center mb-6">
          Profil de {user?.username}
        </h2>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="username"
            className="block text-color-text-primary text-sm font-title mb-2"
          >
            NOM D'UTILISATEUR
          </label>
          {editMode ? (
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 text-color-text-primary border border-primary rounded focus:outline-none"
            />
          ) : (
            <p className="text-color-text-primary text-lg">{user?.username}</p>
          )}
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="block text-color-text-primary text-sm font-title mb-2"
          >
            EMAIL
          </label>
          {editMode ? (
            <input
              id="email"
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800 text-color-text-primary border border-primary rounded focus:outline-none"
            />
          ) : (
            <p className="text-color-text-primary text-lg">{user?.email}</p>
          )}
        </div>

        <div className="flex justify-center">
          {editMode ? (
            <button
              type="button"
              onClick={handleSave}
              className="w-40 mr-2 px-4 mt-9 py-2 bg-transparent border-primary border text-color-text-primary font-title rounded hover:bg-slate-900/50 focus:outline-none"
            >
              Enregistrer
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditMode(true)}
              className="w-40 mr-2 px-4 mt-9 py-2 bg-transparent border-primary border text-color-text-primary font-title rounded hover:bg-slate-900/50 focus:outline-none"
            >
              Modifier
            </button>
          )}
          <Deconnexion />
        </div>
      </div>
    </div>
  );
}
