import { useState } from "react";

const BoutonConnexion = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info("Vous êtes connecté!");
  };

  return (
    <>
      <div className="bg-gradient-to-b from-black via-[#1a1a2e] to-[#ff8c00] m-0 flex items-center justify-center relative">
        <h2 className="text-3xl font-bold text-white absolute top-4">
          Connectez-vous ou inscrivez-vous ici 🕹️
        </h2>

        <form onSubmit={handleSubmit}>
          <button
            onClick={() => {
              console.info("Vous êtes connecté!");
            }}
            type="submit"
            className="w-1/2 mr-2 px-4 py-2 bg-transparent border-purple-500 border-2 text-white font-bold rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            CONNEXION
          </button>
        </form>
      </div>
    </>
  );
};

export default BoutonConnexion;
