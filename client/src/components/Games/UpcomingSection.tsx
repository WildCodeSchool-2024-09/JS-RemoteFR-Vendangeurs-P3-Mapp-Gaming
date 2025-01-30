import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";

interface VideoGame {
  id: number;
  title: string;
  price: number;
  releaseDate: string;
  platform: string;
  category: string;
  image1: string;
  description: string;
}

const UpcomingSection = () => {
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/upcoming")
      .then((response) => {
        setVideoGames(response.data);
      });
  }, []);

  const nextGame = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videoGames.length);
  };

  const prevGame = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videoGames.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="mt-10 px-6">
      <Link to="/a-venir">
        <h2 className="text-2xl font-title mb-6">À Venir</h2>
      </Link>
      <div className="Upcoming-section flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
          {/* Bouton Gauche */}
          <button
            type="button"
            onClick={prevGame}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full shadow-md z-10 hidden md:flex"
          >
            <img src={arrowLeft} alt="" />
          </button>

          {/* Carrousel */}
          <div className="relative flex w-[900px] h-[400px] items-center justify-center overflow-hidden">
            {videoGames.map((game, index) => {
              const position =
                (index - currentIndex + videoGames.length) % videoGames.length;

              const translateX = (position - 2) * 250; // Ajustement horizontal + plus d'espace
              let scale = 0.7; // Jeux éloignés sont plus petits
              let opacity = 0.5;
              let zIndex = 5; // Jeux en arrière-plan

              if (position === 2) {
                // Jeu central
                scale = 1.3;
                opacity = 1;
                zIndex = 10; // Toujours au-dessus
              } else if (position === 1 || position === 3) {
                // Jeux juste à côté
                scale = 1;
                opacity = 0.8;
                zIndex = 6;
              }

              return (
                <Link
                  to={`/achetez-votre-jeu-ici/${game.id}`}
                  key={game.id}
                  className="absolute transition-all duration-500"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                  }}
                >
                  <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={game.image1}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-center p-2 backdrop-blur-md">
                      <h3 className="text-sm font-title">{game.title}</h3>
                      <span className="font-text">{game.price} €</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bouton Droite */}
          <button
            type="button"
            onClick={nextGame}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full shadow-md z-10 hidden md:flex"
          >
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingSection;
