import { useState } from "react";

const ConnexionLogin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Conditions de validation du MDP
    setError("Le mot de passe doit contenir entre 8 et 16 caractères.");
    if (!/\d/.test(password)) {
      setError("Le mot de passe doit contenir au moins un chiffre.");
    }
    if (!/[A-Z]/.test(password)) {
      setError("Le mot de passe doit contenir au moins une majuscule.");
      return;
    }
    // Si toutes les conditions sont ok ""
    setError("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a1a2e] to-[#ff8c00] m-0 flex items-center justify-center relative">
      {/* H2 */}
      <h2 className="text-3xl font-bold text-white absolute top-4 left-4">
        CONNEXION
      </h2>

      {/* FORMULAIRE */}
      <div className="justify-center w-full max-w-md p-8 bg-[#1a1a2e] border border-orange-500 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
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
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
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
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
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
              value={mail}
              onChange={(e) => setMail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* BOUTONS */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="flex justify-center">
            <button
              type="button"
              className="w-1/2 mr-2 px-4 py-2 bg-transparent border-purple-500 border-2 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              S'INSCRIRE
            </button>
            <button
              type="button"
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
