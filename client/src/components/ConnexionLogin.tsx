import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const ConnexionLogin = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useAuth();

  const navigate = useNavigate();

  const handleInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await axios.post(
      `${import.meta.env.VITE_API_URL}/auth/login`,
      login,
      { withCredentials: true },
    );

    const currentUser = await axios.get(
      `${import.meta.env.VITE_API_URL}/auth/find/${result.data.userId}`,
      { withCredentials: true },
    );

    setUser(currentUser.data);

    setLogin({
      email: "",
      password: "",
    });

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a2e] to-[#ff8c00] m-0 flex items-center justify-center relative">
      {/* H2 */}
      <h2 className="text-3xl font-bold text-white absolute top-4 left-4">
        CONNEXION
      </h2>

      {/* FORMULAIE */}
      <div className="justify-center w-full max-w-md p-8 bg-[#1a1a2e] border border-orange-500 rounded-lg shadow-lg">
        <form onSubmit={handleFormSubmit}>
          {/* <div className="flex flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              PRÉNOM
            </label>{" "}
            <input
              id="firstName"
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre prénom"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              NOM
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre nom"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div> */}
          <div className="flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre email"
              value={login.email}
              onChange={handleInputsChange}
              required
            />
          </div>
          <div className="flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              MOT DE PASSE
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
              placeholder="Entrez votre mot de passe"
              value={login.password}
              onChange={handleInputsChange}
            />
          </div>

          {/* BOUTONS */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 mr-2 px-4 py-2 bg-transparent border-purple-500 border-2 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              CONNEXION
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnexionLogin;
