import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const AdminCreateUser: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [membership, setMembership] = useState<"Basic" | "Premium">("Basic");
  const [isAdmin, setIsAdmin] = useState(false);

  const addUser = async () => {
    if (!firstname || !lastname || !username || !email || !password) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    const newUser = {
      firstname,
      lastname,
      username,
      email,
      password,
      date_of_creation: new Date().toISOString(),
      membership,
      is_admin: isAdmin,
    };

    try {
      const response = await axios.post(
        "http://localhost:3310/api/user",
        newUser,
      );

      // Réinitialisation du formulaire après l'ajout
      console.info(response.data);
      setFirstname("");
      setLastname("");
      setUsername("");
      setEmail("");
      setPassword("");
      setMembership("Basic");
      setIsAdmin(false);
    } catch (error) {
      console.error("erreur lors de la création de l'utilisateur!", error);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-center">
        <h1>Créer un utilisateur</h1>
      </div>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          addUser(); // Appeler la fonction addUser lors de la soumission du formulaire
        }}
      >
        <label htmlFor="firstname">Firstname :</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          className="text-black"
          onChange={(e) => setFirstname(e.target.value)}
          required
        />

        <label htmlFor="lastname">Lastname :</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          className="text-black"
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          className="text-black"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          className="text-black"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          className="text-black"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="membership">Membership :</label>
        <select
          id="membership"
          value={membership}
          className="bg-slate-600 text-slate-200"
          onChange={(e) => setMembership(e.target.value as "Basic" | "Premium")}
          required
        >
          <option value="Basic">Standard</option>
          <option value="Premium">Premium</option>
        </select>

        <label htmlFor="isAdmin">Is Admin :</label>
        <input
          type="checkbox"
          id="isAdmin"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        <div className="flex justify-center gap-10">
          <button type="submit">Ajouter</button>
          <Link to="/admin/utilisateurs">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateUser;
