import { useState } from "react";
import { Link } from "react-router-dom";
import { useBasket } from "../contexts/BasketContext";
import User from "../assets/Icons/User.svg";
import basket from "../assets/Icons/basket.svg";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useBasket(); // Récupération du nombre d'articles

  return (
    <>
      <header className="bg-background text-xs flex justify-between items-center px-4 py-2">
        {/* Section gauche */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <h1 className="text-primary">Map Gaming</h1>
          </Link>

          {/* Menu burger pour mobile */}
          <div className="laptop:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 cursor-pointer flex flex-col items-center justify-center"
            >
              {/* Ligne du haut */}
              <div
                className={`w-full h-[2px] bg-primary rounded-sm transition-transform duration-300 origin-center ${
                  isMenuOpen
                    ? "rotate-45 translate-y-[0.2rem]"
                    : "translate-y-[-0.4rem]"
                }`}
              />
              {/* Ligne du milieu */}
              <div
                className={`w-full h-[2px] bg-primary rounded-sm transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              {/* Ligne du bas */}
              <div
                className={`w-full h-[2px] bg-primary rounded-sm transition-transform duration-300 origin-center ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-[0.2rem]]"
                    : "translate-y-[0.4rem]"
                }`}
              />
            </button>

            {/* Menu déroulant */}
            {isMenuOpen && (
              <div className="absolute top-12 left-0 bg-background text-primary p-4 rounded-md shadow-md flex flex-col gap-4 z-50">
                <span>TENDANCES</span>
                <span>PRÉCOMMANDES</span>
                <span>À VENIR</span>
              </div>
            )}
          </div>
        </div>

        {/* Section centrale pour laptop */}
        <div className="hidden laptop:flex gap-12 text-primary">
          <span>TENDANCES</span>
          <span>PRÉCOMMANDES</span>
          <span>À VENIR</span>
        </div>

        {/* Section droite */}
        <div className="flex items-center gap-2 text-primary">
          <Link to="/login">
            <span>CONNEXION</span>
          </Link>
          <div>
            <img src={User} alt="User" className="w-9 h-9" />
          </div>

          {/* Bouton Basket avec compteur */}
          <div className="relative">
            <Link to="/users/:id/basket">
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
