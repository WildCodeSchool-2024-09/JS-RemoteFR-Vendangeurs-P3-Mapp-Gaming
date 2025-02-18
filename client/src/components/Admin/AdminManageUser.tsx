import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AdminManageUser = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    membership: "Basic" as "Basic" | "Premium",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3310/api/user/${id}`)
        .then((response) => setUserData(response.data))
        .catch((error) =>
          console.error(
            "Erreur lors du chargement des données de l'utilisateur :",
            error,
          ),
        );
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !userData.firstname ||
      !userData.lastname ||
      !userData.username ||
      !userData.email ||
      !userData.password
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    try {
      if (id) {
        // Si un ID existe, on fait une mise à jour (édition)
        await axios.put(`http://localhost:3310/api/user/${id}`, userData);
      } else {
        // Sinon, on crée un nouvel utilisateur
        await axios.post("http://localhost:3310/api/user", userData);
      }

      // Réinitialiser le formulaire après la soumission (pour un nouvel utilisateur)
      if (!id) {
        setUserData({
          firstname: "",
          lastname: "",
          username: "",
          email: "",
          password: "",
          membership: "Basic",
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
    }
  };

  return (
    <div className="AdminManageUser flex flex-col gap-10 p-9 relative z-10 bg-slate-900/50 border border-primary rounded-lg mb-6">
      <h2>{id ? "Modifier un utilisateur" : "Créer un utilisateur"}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstname"
          value={userData.firstname}
          className="text-black p-2 rounded-lg"
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
        <input
          type="text"
          name="lastname"
          value={userData.lastname}
          className="text-black p-2 rounded-lg"
          onChange={handleChange}
          placeholder="Nom"
          required
        />
        <input
          type="text"
          name="username"
          value={userData.username}
          className="text-black p-2 rounded-lg"
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          required
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          className="text-black p-2 rounded-lg"
          onChange={handleChange}
          placeholder="Adresse email"
          required
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          className="text-black p-2 rounded-lg"
          onChange={handleChange}
          placeholder="Mot de passe"
          required={!id} // Le mot de passe est obligatoire en création
        />
        <select
          name="membership"
          value={userData.membership}
          className="bg-slate-600 text-slate-200 p-2 rounded-lg"
          onChange={handleChange}
          required
        >
          <option value="Basic">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        <div className="flex gap-10">
          <button type="submit">{id ? "Mettre à jour" : "Ajouter"}</button>
          <Link to="/admin/utilisateurs">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminManageUser;
