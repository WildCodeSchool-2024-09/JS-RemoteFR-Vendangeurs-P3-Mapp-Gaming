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

// Fonction pour générer un slug à partir du titre
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[\s_]+/g, "-") // Remplace espaces et underscores par des tirets
    .replace(/[^\w-]+/g, ""); // Supprime les caractères spéciaux
};

const TrendingSection = () => {
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/trending")
      .then((response) => {
        setVideoGames(response.data);
      });
  }, []);

  return (
    <div className="tendance-section p-6">
      <Link to="/tendance">
        <h2 className="text-2xl font-title mb-6">Tendance</h2>
      </Link>

      {videoGames.length >= 7 && (
        <section className="flex flex-col items-center justify-center gap-4">
          <div className="grid grid-cols-5 grid-rows-2 gap-6 w-3/4">
            <Link
              to={`/${generateSlug(videoGames[0].title)}/${videoGames[0].id}`}
              className="col-span-2 row-span-2"
            >
              <div className="relative overflow-hidden rounded-2xl h-full w-full">
                <img
                  src={videoGames[0].image1}
                  alt={videoGames[0].title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-20 text-white text-center p-3 backdrop-blur-md">
                  <h3 className="text-lg font-title overflow-hidden whitespace-nowrap text-ellipsis">
                    {videoGames[0].title}
                  </h3>
                  <span className="font-text">{videoGames[0].price} €</span>
                </div>
              </div>
            </Link>

            {videoGames.slice(1, 7).map((game, index) => {
              const positions = [
                { col: 3, row: 1 },
                { col: 3, row: 2 },
                { col: 4, row: 1 },
                { col: 4, row: 2 },
                { col: 5, row: 1 },
                { col: 5, row: 2 },
              ];

              return (
                <Link
                  to={`/${generateSlug(game.title)}/${game.id}`}
                  key={game.id}
                  className={`col-start-${positions[index].col} row-start-${positions[index].row} h-full w-full`}
                >
                  <div className="relative overflow-hidden rounded-2xl h-full w-full">
                    <img
                      src={game.image1}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-20 text-white text-center p-2 backdrop-blur-md">
                      <h3 className="text-sm font-title overflow-hidden whitespace-nowrap text-ellipsis">
                        {game.title}
                      </h3>
                      <span className="font-text">{game.price} €</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default TrendingSection;
