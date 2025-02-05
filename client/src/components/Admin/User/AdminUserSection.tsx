import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="z-10">
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
                  <Link to={`/admin/modification-utilisateur/${user.id}`}>
                    Modifier
                  </Link>
                </div>
                <div>
                  <button type="button" onClick={() => deleteUser(user.id)}>
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Link to="/admin/creation-utilisateur">Ajouter un utilisateur</Link>
      </div>
    </div>
  );
};

export default AdminUserSection;
