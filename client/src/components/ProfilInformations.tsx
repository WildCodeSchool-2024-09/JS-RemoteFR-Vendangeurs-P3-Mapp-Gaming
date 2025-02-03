import { useAuth } from "../contexts/AuthContext";
import Deconnexion from "./Deconnexion";

export default function ProfilInformations() {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center relative z-10 gap-6">
      <div className="w-96 max-w-lg p-8 bg-slate-900/50 border border-primary rounded-lg shadow-lg">
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
          <input
            id="username"
            type="text"
            value={user?.username}
            readOnly
            className="w-full px-4 py-3 bg-bg-primary text-color-text-primary border border-primary rounded focus:outline-none"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="block text-color-text-primary text-sm font-title mb-2"
          >
            EMAIL
          </label>
          <input
            id="email"
            type="text"
            value={user?.email}
            readOnly
            className="w-full px-4 py-3 bg-bg-primary text-color-text-primary border border-primary rounded focus:outline-none"
          />
        </div>

        {user?.is_admin && (
          <div className="flex flex-col">
            <label
              htmlFor="status"
              className="block text-color-text-primary text-sm font-title mb-2"
            >
              STATUT
            </label>
            <input
              id="status"
              type="text"
              value="Administrateur"
              readOnly
              className="w-full px-4 py-3 bg-bg-primary text-color-text-primary border border-primary rounded focus:outline-none"
            />
          </div>
        )}
      </div>
      <Deconnexion />
    </div>
  );
}
