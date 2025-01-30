import { Link } from "react-router-dom";
import Favorite from "../assets/Icons/Favorite.svg";
import User from "../assets/Icons/User.svg";
import basket from "../assets/Icons/basket.svg";
import logoB from "../assets/icons/logoB.svg";
import { useAuth } from "../contexts/AuthContext";
import { useBasket } from "../contexts/BasketContext";

export default function NavBar() {
  const { itemCount } = useBasket();
  const { user } = useAuth();

  return (
    <>
      <header className="bg-background text-xs flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logoB} alt="Logo" className="w-12 h-12" />
          </Link>
          <Link to="/" className="transition hover:scale-105">
            <span className="font-title">ACCUEIL</span>
          </Link>
          <Link to="/tendance" className="transition hover:scale-105">
            <span className="font-title">TENDANCES</span>
          </Link>
          <Link to="/precommande" className="transition hover:scale-105">
            <span className="font-title">PRÉCOMMANDES</span>
          </Link>
          <Link to="/a-venir" className="transition hover:scale-105">
            <span className="font-title">À VENIR</span>
          </Link>
        </div>

        <div className="flex items-center gap-4 text-primary">
          <Link
            to={user ? `/profile/${user.id}` : "/connexion"}
            className="flex items-center gap-2"
          >
            <span className="font-title">
              {user ? user.username : "CONNEXION"}
            </span>
            <img src={User} alt="User" className="w-9 h-9" />
          </Link>

          {/* Bouton Wishlist */}
          <div className="relative">
            <Link to={`/users/${user?.id}/wishlist`}>
              <img
                src={Favorite}
                alt="Favorite"
                className="w-7 h-7 cursor-pointer"
              />
            </Link>
          </div>

          {/* Bouton Basket avec compteur */}
          <div className="relative">
            <Link to={`/users/${user?.id}/basket`}>
              <img
                src={basket}
                alt="Basket"
                className="w-7 h-7 cursor-pointer"
              />
            </Link>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
