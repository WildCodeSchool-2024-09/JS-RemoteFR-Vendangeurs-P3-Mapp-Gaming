import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  is_admin: boolean;
}

const AdminUserSection = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3310/api/user").then((response) => {
      const formattedUsers = response.data.map((user: User) => ({
        ...user,
        is_admin: Boolean(user.is_admin),
      }));
      setUsers(formattedUsers);
    });
  }, []);

  const deleteUser = (id: number) => {
    axios.delete(`http://localhost:3310/api/user/${id}`).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

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
      setSearchTerm("");
      setFilteredUsers([]);
    }
  };

  const standardUsers = users.filter((user) => !user.is_admin);
  const adminUsers = users.filter((user) => user.is_admin);

  return (
    <div className="min-h-screen flex flex-col z-10">
      <div className="flex flex-col items-center relative w-full max-w-md mx-auto">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Rechercher un utilisateur"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md text-black"
          />
          <button
            type="button"
            onClick={validateSearch}
            className="ml-2 p-2 bg-primary text-color-text-primary rounded-md"
          >
            Valider
          </button>
        </div>

        {filteredUsers.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white border border-gray-300 shadow-lg rounded-md z-50">
            {filteredUsers.map((user, index) => (
              <li
                key={user.id}
                ref={handleRef(index)}
                className={`text-black p-2 hover:bg-gray-200 cursor-pointer ${
                  index === highlightedIndex ? "bg-gray-300" : ""
                }`}
              >
                {user.firstname} {user.lastname} ({user.username})
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-row gap-10 my-6">
        <Link
          to="/admin/creation-utilisateur"
          className="border border-primary p-2 bg-slate-800/70 rounded-lg"
        >
          Ajouter un utilisateur
        </Link>
      </div>

      <div className="flex-grow">
        {" "}
        {/* Added flex-grow to ensure remaining space is used */}
        {[
          {
            title: "Utilisateurs Standard",
            users: standardUsers,
            border: "border-orange-500",
          },
          {
            title: "Administrateurs",
            users: adminUsers,
            border: "border-blue-500",
          },
        ].map((group) => (
          <div key={group.title}>
            <h2>{group.title}</h2>
            {group.users.length === 0 ? (
              <p>Aucun {group.title.toLowerCase()} trouvé.</p>
            ) : (
              <div
                className={`flex flex-col justify-center items-center gap-2 border-2 ${group.border}`}
              >
                {group.users.map((user) => (
                  <div key={user.id} className="w-full px-4 py-6">
                    <div className="flex flex-row justify-between items-center w-full gap-20">
                      <div className="flex flex-row gap-4">
                        <h3>{user.firstname}</h3>
                        <h3>{user.lastname}</h3>
                        <h3>{user.username}</h3>
                      </div>
                      <div className="flex flex-row gap-2">
                        <Link
                          to={`/admin/modification-utilisateur/${user.id}`}
                          className="border border-primary p-2 rounded-lg"
                        >
                          Modifier
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteUser(user.id)}
                          className="border border-red-500 p-2 rounded-lg"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminUserSection;
