import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface videoGames {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  category: string;
  image1: string;
}

// Fonction pour générer un slug à partir du titre
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[\s_]+/g, "-") // Remplace espaces et underscores par des tirets
    .replace(/[^\w-]+/g, ""); // Supprime les caractères spéciaux
};

export default function PlatformGamesPage() {
  const { platform_Id } = useParams();
  const [videoGames, setVideoGames] = useState<videoGames[]>([]);

  useEffect(() => {
    if (platform_Id) {
      axios
        .get(`http://localhost:3310/api/videoGames/platform/${platform_Id}`)
        .then((response) => {
          setVideoGames(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des jeux :", error);
        });
    }
  }, [platform_Id]);

  return (
    <div className="platform-section p-6 relative z-10">
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
}
