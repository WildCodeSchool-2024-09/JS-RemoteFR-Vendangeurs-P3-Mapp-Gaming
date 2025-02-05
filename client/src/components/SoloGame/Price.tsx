import axios from "axios";
import { useEffect, useState } from "react";
import Favorite from "../../assets/icons/Favorite.svg";
import FavoriteP from "../../assets/icons/FavoriteP.svg";
import basket from "../../assets/icons/basket.svg";
import { useAuth } from "../../contexts/AuthContext";

interface Game {
  id: number;
  price: number;
}

export default function Price({ gameId }: { gameId: string | undefined }) {
  const [game, setGame] = useState<Game | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (!gameId) return;

    axios
      .get(`http://localhost:3310/api/videoGames/${gameId}`)
      .then((response) => {
        setGame(response.data);
      });

    if (user) {
      axios
        .get(`http://localhost:3310/api/user/${user.id}/wishlist`)
        .then((response) => {
          const wishlistGames = response.data;
          setIsFavorite(
            wishlistGames.some((g: Game) => g.id === Number(gameId)),
          );
        });
    }
  }, [gameId, user]);

  const handleFavoriteClick = () => {
    if (!user) {
      alert("Vous devez être connecté pour ajouter à votre wishlist !");
      return;
    }

    const url = `http://localhost:3310/api/user/${user.id}/wishlist`;

    if (isFavorite) {
      axios
        .delete(url, { data: { gameId } })
        .then(() => {
          setIsFavorite(false);
        })
        .catch((err) => console.error("Erreur suppression :", err));
    } else {
      axios
        .post(url, { gameId })
        .then(() => {
          setIsFavorite(true);
        })
        .catch((err) => console.error("Erreur ajout :", err));
    }
  };

  if (!game) return <p>Chargement...</p>;

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-title">{game.price}€</h2>
      <div className="flex gap-4">
        <button
          type="button"
          className="border border-primary p-3 rounded-lg"
          onClick={handleFavoriteClick}
        >
          <img src={isFavorite ? FavoriteP : Favorite} alt="Favorite" />
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
