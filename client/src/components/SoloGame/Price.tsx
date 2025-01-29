import axios from "axios";
import { useEffect, useState } from "react";
import Favorite from "../../assets/icons/Favorite.svg";
import basket from "../../assets/icons/basket.svg";

interface Game {
  id: number;
  price: number;
}

export default function Price({ gameId }: { gameId: string | undefined }) {
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
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-title">{game.price}€</h2>
      <div className="flex gap-4">
        <button type="button" className="border border-primary p-3 rounded-lg">
          <img src={Favorite} alt="Favorite" />
        </button>
        <button
          type="button"
          className="border border-primary p-3 rounded-lg flex items-center gap-4"
        >
          <span className="font-text">AJOUTER AU PANIER</span>
          <img src={basket} alt="basket" />
        </button>
      </div>
    </section>
  );
}
