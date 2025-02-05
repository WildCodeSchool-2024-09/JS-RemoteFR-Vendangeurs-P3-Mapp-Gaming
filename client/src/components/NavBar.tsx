import { Link, useNavigate } from "react-router-dom";
import Favorite from "../assets/Icons/Favorite.svg";
import User from "../assets/Icons/User.svg";
import basket from "../assets/Icons/basket.svg";
import logoB from "../assets/icons/logoB.svg";
import { useAuth } from "../contexts/AuthContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const itemCount = 0;

  return (
    <>
      <header className="bg-background text-xs flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={logoB} alt="Logo" className="w-h-14 h-14" />
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
            to={
              user
                ? user.is_admin
                  ? "/admin"
                  : `/profile/${user.id}`
                : "/connexion"
            }
            className="flex items-center gap-2"
          >
            <span className="font-title">
              {user ? user.username : "CONNEXION"}
            </span>
            <img src={User} alt="User" className="w-10 h-10" />
          </Link>

          <Link
            to={user ? `/user/${user.id}/wishlist` : "/connexion"}
            onClick={(e) => {
              if (!user) {
                e.preventDefault();
                navigate("/connexion");
              }
            }}
          >
            <img
              src={Favorite}
              alt="Favorite"
              className="w-9 h-9 cursor-pointer"
            />
          </Link>

          <Link to={`/users/${user?.id}/basket`} className="relative">
            <img src={basket} alt="Basket" className="w-8 h-8 cursor-pointer" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-9 h-9 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </header>
    </>
  );
}
