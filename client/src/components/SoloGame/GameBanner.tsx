import axios from "axios";
import { useEffect, useState } from "react";
import Check from "../../assets/icons/Check.svg";
import StarP from "../../assets/icons/StarP.svg";
import StarV from "../../assets/icons/StarV.svg";
import pc from "../../assets/icons/pc.svg";
import playstation from "../../assets/icons/playstation.svg";
import switchIcon from "../../assets/icons/switch.svg";
import xbox from "../../assets/icons/xbox.svg";

interface Game {
  id: number;
  title: string;
  price: number;
  releaseDate: string;
  platform: string;
  category: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  description: string;
}

export default function GameBanner({ gameId }: { gameId: string | undefined }) {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/videoGames/${gameId}`)
      .then((response) => {
        setGame(response.data);
      });
  }, [gameId]);

  if (!game) return <p>Chargement...</p>;

  return (
    <>
      {/* Bannière principale */}
      <section className="flex items-center justify-between mb-4">
        <div className="flex gap-5">
          <h1 className="text-3xl font-bold font-title">{game.title}</h1>
          <div className="flex items-center gap-4">
            <span className="text-lg font-text">{game.category}</span>
            <img src={Check} alt="check" />
          </div>
          <div className="flex items-center gap-3">
            <img src={pc} alt="pc" />
            <img src={playstation} alt="playstation" />
            <img src={xbox} alt="xbox" />
            <img src={switchIcon} alt="switch" />
          </div>
        </div>
        <div className="flex items-center">
          <img src={StarP} alt="star" />
          <img src={StarP} alt="star" />
          <img src={StarP} alt="star" />
          <img src={StarP} alt="star" />
          <img src={StarV} alt="star" />
        </div>
      </section>

      {/* Images */}
      <section className="flex flex-col items-center justify-center gap-4">
        <div className="grid grid-cols-4 grid-rows-2 gap-4 w-3/4">
          <div className="row-span-2 col-span-2">
            <img
              src={game.image1}
              alt={game.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          {[game.image2, game.image3, game.image4, game.image5].map(
            (image, index) => (
              <div key={`${game.id}-${index}`}>
                <img
                  src={image}
                  alt={`${game.title} - Screenshot ${index + 2}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ),
          )}
        </div>
      </section>
    </>
  );
}
