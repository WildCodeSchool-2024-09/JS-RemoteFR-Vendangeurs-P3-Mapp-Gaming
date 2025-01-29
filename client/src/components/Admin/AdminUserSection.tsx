import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
}

const AdminUserSection = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [membership, setMembership] = useState<"Basic" | "Premium">("Basic");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3310/api/user").then((response) => {
      console.info(response.data);
      setUsers(response.data);
    });
  }, []);

  const deleteUser = (id: number) => {
    axios.delete(`http://localhost:3310/api/user/${id}`).then((response) => {
      console.info(response);
      setUsers(users.filter((user) => user.id !== id));
    });
  };

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
      setUsers((prevUsers) => [...prevUsers, response.data]);
      console.info("Utilisateur ajouté avec succès", response.data);
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'utilisateur :", error);
    }
  };

  const editUser = (id: number) => {
    const updatedUser = {
      firstname: "Updated",
      lastname: "User",
      username: "updated_user",
    };

    axios
      .put(`http://localhost:3310/api/user/${id}`, updatedUser)
      .then((response) => {
        console.info(response);
        setUsers(users.map((user) => (user.id === id ? response.data : user)));
      })
      .catch((error) => {
        console.error("Error editing user:", error);
      });
  };

  // Search functionality
  useEffect(() => {
    const lowerSearch = searchTerm.trim().toLowerCase();
    if (lowerSearch === "") {
      setFilteredUsers([]);
      setHighlightedIndex(-1);
      return;
    }

    const suggestions = users.filter(
      (user) =>
        user.username?.toLowerCase().startsWith(lowerSearch) ||
        user.firstname?.toLowerCase().startsWith(lowerSearch) ||
        user.lastname?.toLowerCase().startsWith(lowerSearch),
    );

    setFilteredUsers(suggestions);
    setHighlightedIndex(-1);
  }, [searchTerm, users]);

  useEffect(() => {
    if (highlightedIndex >= 0 && itemsRef.current[highlightedIndex]) {
      itemsRef.current[highlightedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  const handleRef = (index: number) => (el: HTMLLIElement | null) => {
    itemsRef.current[index] = el;
  };

  const validateSearch = () => {
    if (filteredUsers.length > 0) {
      setUsers(filteredUsers);
      setSearchTerm(""); // Clear the search bar
      setFilteredUsers([]); // Clear suggestions
    }
  };

  return (
    <div className="AdminUserSection">
      {/* recherche */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Rechercher un utilisateur"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={validateSearch}>
          Valider
        </button>
        {/* Suggestions */}
        {filteredUsers.length > 0 && (
          <ul>
            {filteredUsers.map((user, index) => (
              <li
                key={user.id}
                ref={handleRef(index)}
                className={index === highlightedIndex ? "highlighted" : ""}
              >
                {user.username}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* tout les utilisateurs */}
      <h2>Tout les utilisateurs</h2>
      <div className="flex flex-col justify-center items-center gap-2 border-2 border-orange-500">
        {users.map((user) => (
          <div key={user.id}>
            <div className="flex flex-row items-center gap-10">
              <div>
                <h3>{user.firstname}</h3>
              </div>
              <div>
                <h3>{user.lastname}</h3>
              </div>
              <div>
                <h3>{user.username}</h3>
              </div>
              <div className="flex flex-row gap-2">
                <div>
                  <button type="button" onClick={() => editUser(user.id)}>
                    Edit
                  </button>
                </div>
                <div>
                  <button type="button" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Formulaire d'ajout d'utilisateur */}
      <h2>Ajouter un utilisateur</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addUser(); // Appeler la fonction addUser lors de la soumission du formulaire
        }}
      >
        <div>
          <label htmlFor="firstname">Firstname</label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="membership">Membership</label>
          <select
            id="membership"
            value={membership}
            onChange={(e) =>
              setMembership(e.target.value as "Basic" | "Premium")
            }
            required
          >
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>
        </div>
        <div>
          <label htmlFor="isAdmin">Is Admin</label>
          <input
            type="checkbox"
            id="isAdmin"
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AdminUserSection;
