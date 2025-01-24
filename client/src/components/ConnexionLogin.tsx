// import { Link } from "react-router-dom";

const ConnexionLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a2e] to-[#ff8c00] m-0 flex items-center justify-center relative">
      {/* H2 */}
      <h2 className="text-3xl font-bold text-white absolute top-4 left-4">
        CONNEXION
      </h2>

      {/* FORMULAIE */}
      <div className="justify-center w-full max-w-md p-8 bg-[#1a1a2e] border border-orange-500 rounded-lg shadow-lg">
        <form>
          <div className="flex flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              Prénom
            </label>{" "}
            <input
              id="firstName"
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre prénom"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Nom
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre nom"
            />
          </div>
          <div className="flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              eMail
            </label>
            <input
              id="email"
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              placeholder="Entrez votre email"
            />
          </div>
          <div className="flex-col">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="text"
              className="w-full px-3 py-2 bg-black text-white border border-purple-500 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
              placeholder="Entrez votre mot de passe"
            />
          </div>

          {/* BOUTONS */}
          <div className="flex justify-center">
            <button
              type="button"
              className="w-1/2 mr-2 px-4 py-2 bg-transparent border-purple-500 border-2 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              S'INSCRIRE
            </button>
            {/* <Link to="/"> */}
            <button
              type="button"
              className="w-1/2 mr-2 px-4 py-2 bg-transparent border-purple-500 border-2 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              CONNEXION
            </button>
            {/* </Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConnexionLogin;
