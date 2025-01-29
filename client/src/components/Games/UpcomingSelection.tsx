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

const UpcomingSelection = () => {
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/upcoming")
      .then((response) => {
        setVideoGames(response.data);
      });
  }, []);

  return (
    <div className="Upcoming-section p-6">
      <Link to="/upcoming">
        <h2 className="text-2xl font-title mb-6">À venir</h2>
      </Link>

      <section className="flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-4 gap-6 w-full">
          {videoGames.map((game) => (
            <Link
              to={`/SoloGame/${game.id}`}
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

export default UpcomingSelection;
