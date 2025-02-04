import { useState } from "react";
import { useBasket } from "../contexts/BasketContext";

function BasketPage() {
  const { basket, getTotalPrice } = useBasket();
  const userId = 0;
  const [isOrderValidated, setIsOrderValidated] = useState(false);

  const handleOrder = () => {
    setIsOrderValidated(true);
    setTimeout(() => setIsOrderValidated(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-orange-900 text-white p-6">
      <h1 className="text-center text-3xl font-bold text-orange-400 mb-6">
        PANIER
      </h1>

      <p>Panier de l'utilisateur {userId}</p>

      {basket.videoGames.length === 0 ? (
        <p className="text-center text-lg font-semibold mt-10">
          Rien à voir pour l'instant 👻
        </p>
      ) : (
        <ul>
          {basket.videoGames.map((videoGame) => (
            <li key={videoGame.id}>
              {videoGame.title} - {videoGame.price} €
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex justify-between items-center text-xl font-bold">
        <span>Total :</span>
        <span>{getTotalPrice().toFixed(2) || "0.00"} €</span>
      </div>

      <button
        type="button"
        className={`mt-4 w-full py-2 rounded flex justify-center items-center gap-2 transition ${
          isOrderValidated
            ? "bg-grey-700"
            : "bg-orange-600 hover:bg-orange-500"
        }`}
        onClick={handleOrder}
      >
        {isOrderValidated ? "✅ Commande validée !" : "PASSER COMMANDE 🛒"}
      </button>

      {isOrderValidated && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-grey-600 text-white py-2 px-4 rounded shadow-lg">
          Félicitations ! 🎉
        </div>
      )}
    </div>
  );
}

export default BasketPage;
