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
      console.info(response.data);
      setFirstname("");
      setLastname("");
      setUsername("");
      setEmail("");
      setPassword("");
      setMembership("Basic");
      setIsAdmin(false);
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  return (
    <div>
      <h2>Ajouter un utilisateur</h2>
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
          onChange={(e) => setFirstname(e.target.value)}
          required
        />

        <label htmlFor="lastname">Lastname :</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
        />

        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="membership">Membership :</label>
        <select
          id="membership"
          value={membership}
          onChange={(e) => setMembership(e.target.value as "Basic" | "Premium")}
          required
        >
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
        </select>

        <label htmlFor="isAdmin">Is Admin :</label>
        <input
          type="checkbox"
          id="isAdmin"
          checked={isAdmin}
          onChange={(e) => setIsAdmin(e.target.checked)}
        />
        <div>
          <button type="submit">Ajouter</button>
          <Link to="/admin/utilisateurs">Retour</Link>
        </div>
      </form>
    </div>
  );
};

export default AdminCreateUser;
