import { useAuth } from "../contexts/AuthContext";

export default function ProfilInformations() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profil de {user?.username}</h2>
      <p>
        <strong>Nom d'utilisateur :</strong> {user?.username}
      </p>
      <p>
        <strong>Email :</strong> {user?.email}
      </p>
      {user?.is_admin && (
        <p>
          <strong>Statut :</strong> Administrateur
        </p>
      )}
    </div>
  );
}
