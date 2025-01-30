import { Link, useNavigate } from "react-router-dom";
import Favorite from "../assets/Icons/Favorite.svg";
import User from "../assets/Icons/User.svg";
import basket from "../assets/Icons/basket.svg";
import logoB from "../assets/icons/logoB.svg";
import { useAuth } from "../contexts/AuthContext"; // Importer le useAuth pour accéder à l'utilisateur

export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useAuth(); // Accéder à l'utilisateur depuis le contexte
  const itemCount = 0; // Nombre d'articles dans le panier, à adapter

  const handleUserClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault(); // Empêche la navigation vers le profil si l'utilisateur n'est pas connecté
      navigate("/connexion"); // Redirige vers la page de connexion
    }
  };

  const handleWishlistClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!user) {
      e.preventDefault(); // Empêche la navigation vers la wishlist si l'utilisateur n'est pas connecté
      navigate("/connexion"); // Redirige vers la page de connexion
    }
  };

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
          {/* Affichage conditionnel de l'username ou de "CONNEXION" */}
          <Link
            to={user ? `/profile/${user.id}` : "/connexion"}
            className="flex items-center gap-2"
          >
            <span className="font-title">
              {user ? user.username : "CONNEXION"}
            </span>
          </Link>

          {/* Image de l'utilisateur avec redirection conditionnelle */}
          <a href="/profile" onClick={handleUserClick}>
            <img src={User} alt="User" className="w-9 h-9" />
          </a>

          {/* Bouton Wishlist */}
          <div className="relative">
            <a
              href={`/users/${user?.id}/wishlist`} // Utilisation de <a> pour éviter une double navigation
              onClick={handleWishlistClick} // Gestion de clic
            >
              <img
                src={Favorite}
                alt="Favorite"
                className="w-7 h-7 cursor-pointer"
              />
            </a>
          </div>

          {/* Bouton Basket */}
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
