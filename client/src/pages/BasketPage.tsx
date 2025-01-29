import { useBasket } from "../contexts/BasketContext";

function BasketPage() {
  const { basket, addToBasket } = useBasket();
  const userId = 0;

  return (
    <div id="BasketPageContainer">
      <h1>BasketPage</h1>

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
    </div>
  );
}

export default BasketPage;
