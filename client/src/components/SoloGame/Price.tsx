import Favorite from "../../assets/icons/Favorite.svg";
import basket from "../../assets/icons/basket.svg";

export default function Price() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h2>39.95€</h2>
      <div className="flex gap-4">
        <button type="button">
          <img src={Favorite} alt="Favorite" />
        </button>
        <button type="button" className="flex items-center gap-4">
          <span>AJOUTER AU PANIER</span>
          <img src={basket} alt="basket" />
        </button>
      </div>
    </section>
  );
}
