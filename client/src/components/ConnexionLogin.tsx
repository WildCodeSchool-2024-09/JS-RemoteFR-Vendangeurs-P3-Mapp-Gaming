import axios from "axios";
import { useState } from "react";

const ConnexionLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [firstname, setFirstname] = useState("");
  // const [lastname, setLastname] = useState("");
  const [user, setUser] = useState<User | null>(null);
  interface User {
    email: string;
    password: string;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.info("debut de connexion");

      console.info(`url back : ${import.meta.env.VITE_SERVER_URL}`);

      const user: User = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/login`,
        {
          email: email,
          password: password,
        },
      );

      setUser(user);
    } catch (error) {
      console.error(error);
    }
    console.info(user);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a2e] to-[#ff8c00] m-0 flex items-center justify-center relative">
      {/* H2 */}
      <h2 className="text-3xl font-bold text-white absolute top-4 left-4">
        CONNEXION
      </h2>

      {/* FORMULAIE */}
      <div className="justify-center w-full max-w-md p-8 bg-[#1a1a2e] border border-orange-500 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
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
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            <button
              type="button"
              className="w-1/2 mr-2 px-4 py-2 bg-transparent border-purple-500 border-2 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              S'INSCRIRE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnexionLogin;
