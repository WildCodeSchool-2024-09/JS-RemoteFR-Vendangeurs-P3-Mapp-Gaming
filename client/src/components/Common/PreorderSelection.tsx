import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface VideoGame {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  category: string;
  image1: string;
}

// Fonction pour générer le slug à partir du titre
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[\s_]+/g, "-") // Remplace les espaces et underscores par des tirets
    .replace(/[^\w-]+/g, ""); // Supprime les caractères spéciaux
};

const PreorderSection = () => {
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/preorder")
      .then((response) => {
        setVideoGames(response.data);
      });
  }, []);

  return (
    <div className="Preorder-section p-6">
      <Link to="/precommande">
        <h2 className="text-2xl font-title mb-6">Précommandes</h2>
      </Link>

      <section className="flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-4 gap-6 w-full">
          {videoGames.map((game) => (
            <Link
              to={`/${generateSlug(game.title)}/${game.id}`}
              key={game.id}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                <img
                  src={game.image1}
                  alt={game.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white text-center p-2 backdrop-blur-md">
                  <h3 className="text-sm font-title overflow-hidden whitespace-nowrap text-ellipsis">
                    {game.title}
                  </h3>
                  <span className="font-text">{game.price} €</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PreorderSection;
