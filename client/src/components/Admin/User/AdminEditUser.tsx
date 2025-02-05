import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AdminEditUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    membership: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/user/${id}`)
      .then((response) => setUserData(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement de l'utilisateur:", error),
      );
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3310/api/user/${id}`, userData)
      .catch((error) => console.error("Erreur lors de la mise à jour:", error));
  };

  return (
    <div className="AdminEditUser">
      <h2>Modifier l'utilisateur</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstname"
          value={userData.firstname}
          className="text-black"
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
        <input
          type="text"
          name="lastname"
          value={userData.lastname}
          className="text-black"
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <input
          type="text"
          name="username"
          value={userData.username}
          className="text-black"
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          className="text-black"
          onChange={handleChange}
          placeholder="Adresse email"
          required
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          className="text-black"
          onChange={handleChange}
          placeholder="Mot de passe"
        />
        <select
          name="membership"
          value={userData.membership}
          className="bg-slate-600 text-slate-200"
          onChange={(e) =>
            setUserData((prevData) => ({
              ...prevData,
              membership: e.target.value as "Basic" | "Premium",
            }))
          }
          required
        >
          <option value="Basic">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        <div className="flex gap-10">
          <button type="submit">Enregistrer</button>
          <Link to="/admin/utilisateurs">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminEditUser;
