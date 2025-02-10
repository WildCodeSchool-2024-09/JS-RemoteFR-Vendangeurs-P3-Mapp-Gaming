import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import Favorite from "../../assets/icons/Favorite.svg";
import FavoriteP from "../../assets/icons/FavoriteP.svg";
import basket from "../../assets/icons/basket.svg";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import SupportsMenu from "./SupportsMenu";

interface Game {
  id: number;
  price: number;
  title: string;
  image1: string;
}

export default function Price({ gameId }: { gameId: string | undefined }) {
  const [game, setGame] = useState<Game | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();
  const { addToBasket } = useBasket();
  const [addedToBasket, setAddedToBasket] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedConsole, setSelectedConsole] = useState<string | null>(null);

  useEffect(() => {
    if (!gameId) return;

    const fetchData = async () => {
      try {
        const gameRes = await axios.get(
          `http://localhost:3310/api/videoGames/${gameId}`,
        );
        setGame(gameRes.data);

        if (user?.id) {
          const wishlistRes = await axios.get(
            `http://localhost:3310/api/user/${user.id}/wishlist`,
          );
          setIsFavorite(
            wishlistRes.data.some((g: Game) => g.id === Number(gameId)),
          );
        }
      } catch (error) {
        console.error("Erreur lors du chargement des données :", error);
      }
    };

    fetchData();
  }, [gameId, user?.id]);

  const handleFavoriteClick = useCallback(async () => {
    if (!user) {
      setShowPopup(true);
      return;
    }

    const url = `http://localhost:3310/api/user/${user.id}/wishlist`;

    try {
      if (isFavorite) {
        await axios.delete(url, { data: { gameId: Number(gameId) } });
        setIsFavorite(false);
      } else {
        await axios.post(url, { gameId: Number(gameId) });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Erreur lors de la modification de la wishlist :", error);
      alert("Impossible de mettre à jour votre wishlist.");
    }
  }, [isFavorite, gameId, user]);

  const handleAddToBasket = () => {
    if (!selectedConsole) {
      alert("Veuillez sélectionner un support avant d'ajouter au panier.");
      return;
    }

    if (game) {
      const gameWithConsole = { ...game, console: selectedConsole } as Game & {
        console: string;
      };
      addToBasket(gameWithConsole, user?.id ?? 0);
      setAddedToBasket(true);
      setTimeout(() => setAddedToBasket(false), 3000);
    }
  };

  if (!game) return <p>Chargement...</p>;

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <SupportsMenu onSelect={setSelectedConsole} />
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
          onClick={handleAddToBasket}
        >
          <span className="font-text">
            {addedToBasket ? "Ajouté au panier !" : "AJOUTER AU PANIER"}
          </span>
          <img src={basket} alt="basket" />
        </button>
      </div>

      {/* Pop-up pour les utilisateurs non connectés */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-slate-900/85 border border-primary p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">
              Vous devez être connecté pour ajouter un jeu à votre wishlist !
            </p>
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
