import { useBasket } from "../contexts/BasketContext";

function BasketPage() {
  const { basket, addToBasket, getTotalPrice } = useBasket();
  const userId = 0;

  return (
    <div
      id="BasketPageContainer"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-orange-900 text-white p-6"
    >
      <h1 className="text-3xl font-bold text-orange-400 mb-6">PANIER</h1>

      <p>Panier de l'utilisateur {userId}</p>

      {basket.videoGames.length === 0 ? (
        <p>Rien à voir pour l'instant 👻</p>
      ) : (
        <ul>
          {basket.videoGames.map((videoGame) => (
            <li key={videoGame.id}>
              {videoGame.title} - {videoGame.price} €
            </li>
          ))}
        </ul>
      )}
      <div>
        <p>Tomb Raider</p>
        <button
          type="button"
          onClick={() =>
            addToBasket(
              {
                id: 1,
                title: "Tomb Raider",
                price: 20,
              },
              1,
            )
          }
        >
          Ajouter
        </button>
      </div>

      <div>
        <p>The Witcher</p>
        <button
          type="button"
          onClick={() =>
            addToBasket(
              {
                id: 4,
                title: "The Witcher",
                price: 30,
              },
              1,
            )
          }
        >
          Ajouter
        </button>
      </div>
      {/* Total et bouton commande */}
      <div className="mt-6 flex justify-between items-center text-xl font-bold">
        <span>Total :</span>
        <span>{getTotalPrice().toFixed(2)} €</span>{" "}
        {/* Total dynamique */}
      </div>

      <button
        type="button"
        className="mt-4 w-full bg-orange-600 hover:bg-orange-500 text-white py-2 rounded flex justify-center items-center gap-2"
      >
        PASSER COMMANDE 🛒
      </button>
    </div>
  );
}

export default BasketPage;
