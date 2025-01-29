import { useBasket } from "../contexts/BasketContext";

function BasketPage() {
  const { basket } = useBasket();

  return (
    <div id="BasketPageContainer">
      <h1>BasketPage</h1>

      <p>Panier de l'utilisateur {basket.userId}</p>

      {basket.videoGames.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <ul>
          {basket.videoGames.map((videoGame) => (
            <li key={videoGame.id}>
              {videoGame.title} - {videoGame.price} €
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BasketPage;
