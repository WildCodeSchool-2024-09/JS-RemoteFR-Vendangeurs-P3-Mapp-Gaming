import { useState } from "react";
import trash from "../../assets/icons/trash.svg";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { useTheme } from "../../contexts/ColorsContext";

const BasketPage = () => {
  const { theme } = useTheme();
  const { basket, getTotalPrice, removeFromBasket } = useBasket();
  const { user } = useAuth();
  const [isOrderValidated, setIsOrderValidated] = useState(false);

  const handleOrder = () => {
    setIsOrderValidated(true);
    setTimeout(() => setIsOrderValidated(false), 3000); // Cache la popup après 3 sec
  };

  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen p-14 relative overflow-hidden`}
    >
      <div
        id="BasketPageContainer"
        className="min-h-screen text-color-text-primary font-title p-6 relative z-10"
      >
        <h1 className="text-3xl text-color-text-primary mb-10">PANIER</h1>
        {user && <p>Panier de l'utilisateur {user.username}</p>}

        {basket.videoGames.length === 0 ? (
          <p className="text-center text-lg font-semibold mt-10">
            Votre panier est vide
          </p>
        ) : (
          <div className="grid w-full max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {basket.videoGames.map((videoGame) => (
              <div
                key={videoGame.id}
                className="w-full flex flex-col items-center"
              >
                <div className="block rounded-2xl overflow-hidden bg-gray-800 shadow-md">
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
                </div>
                <button
                  type="button"
                  onClick={() => removeFromBasket(videoGame.id)}
                  className="mt-2 flex items-center justify-center w-10 h-10 border border-primary rounded-lg bg-slate-900/25 hover:bg-slate-900/50 transition"
                >
                  <img src={trash} alt="Supprimer" className="w-7 h-7" />
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex justify-between items-center text-xl font-bold">
          <span>Total :</span>
          <span>{Number(getTotalPrice()).toFixed(2) || "0.00"} €</span>
        </div>

        <button
          type="button"
          className={`mt-4 w-full py-3 rounded flex justify-center items-center gap-2 transition ${isOrderValidated ? "bg-primary" : "bg-slate-900/50 hover:bg-slate-700/50 border border-secondary"}`}
          onClick={handleOrder}
        >
          {isOrderValidated ? "✅ Commande validée !" : "PASSER COMMANDE "}
        </button>

        {isOrderValidated && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-primary text-white py-2 px-4 rounded shadow-lg">
            Félicitations ! 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default BasketPage;
