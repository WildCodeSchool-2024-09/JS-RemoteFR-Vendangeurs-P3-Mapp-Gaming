import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import trash from "../../assets/Icons/trash.svg";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { useTheme } from "../../contexts/ColorsContext";

interface VideoGame {
  id: number;
  title: string;
  image1: string;
  price: number;
}
const WishList = () => {
  const { theme } = useTheme();
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);
  const { addToBasket } = useBasket();
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.id) {
      alert("Vous devez être connecté pour accéder à votre wishlist !");
      return;
    }

    axios
      .get(`http://localhost:3310/api/user/${user.id}/wishlist`)
      .then((response) => {
        setVideoGames(response.data);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération de la wishlist", err);
        alert("Impossible de récupérer votre wishlist.");
      });
  }, [user?.id]);

  const removeFromWishlist = (gameId: number) => {
    if (!user) {
      alert("Vous devez être connecté pour retirer un jeu de la wishlist !");
      return;
    }

    axios
      .delete(`http://localhost:3310/api/user/${user.id}/wishlist`, {
        data: { gameId },
      })
      .then(() => {
        setVideoGames((prevGames) =>
          prevGames.filter((game) => game.id !== gameId),
        );
      })
      .catch((err) => {
        console.error("Erreur suppression de la wishlist :", err);
      });
  };

  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen p-14 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <section className="px-6">
          <h1 className="text-3xl font-title mb-16">MA WISHLIST</h1>

          <div className="grid w-full max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {videoGames.length > 0 ? (
              videoGames.map((videoGame) => (
                <div key={videoGame.id} className="w-full">
                  <Link
                    to={`/achetez-votre-jeu-ici/${videoGame.id}`}
                    className="block rounded-2xl overflow-hidden bg-gray-800 shadow-md"
                  >
                    <div className="relative group">
                      <img
                        src={videoGame.image1}
                        alt={videoGame.title}
                        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white text-center p-2 backdrop-blur-md">
                        <h3 className="text-sm font-title truncate">
                          {videoGame.title}
                        </h3>
                        <span className="font-text">{videoGame.price} €</span>
                      </div>
                    </div>
                  </Link>

                  {/* Boutons */}
                  <div className="flex justify-center gap-4 mt-4">
                    <button
                      type="button"
                      className="px-4 py-2 text-color-text-primary font-text border border-primary rounded-lg bg-slate-900/25 hover:bg-slate-900/50 transition"
                      onClick={(e) => {
                        e.preventDefault();
                        addToBasket(videoGame, user?.id || 0);
                      }}
                    >
                      Ajouter au panier
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromWishlist(videoGame.id);
                      }}
                      className="flex items-center justify-center w-10 h-10 border border-primary rounded-lg bg-slate-900/25 hover:bg-slate-900/50 transition"
                    >
                      <img src={trash} alt="Supprimer" className="w-7 h-7" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-color-text-primary text-center col-span-3">
                Votre wishlist est vide.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WishList;
