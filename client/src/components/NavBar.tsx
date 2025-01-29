import { Link } from "react-router-dom";
import User from "../assets/Icons/User.svg";
import Logo from "../assets/Icons/logoB.svg";

export default function navBar() {
  return (
    <>
      <header className="bg-background text-xs flex justify-between items-center px-4 py-2">
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-12 h-12" />
          </Link>
          <Link to="/" className="transition hover:scale-105">
            <span className="font-title">ACCUEIL</span>
          </Link>
          <Link to="/trending" className="transition hover:scale-105">
            <span className="font-title">TENDANCES</span>
          </Link>
          <Link to="/preorder" className="transition hover:scale-105">
            <span className="font-title">PRÉCOMMANDES</span>
          </Link>
          <Link to="/upcoming" className="transition hover:scale-105">
            <span className="font-title">À VENIR</span>
          </Link>
        </div>

        <div className="flex items-center gap-2 text-primary">
          <Link to="/login">
            <span className="font-title">CONNEXION</span>
          </Link>
          <div>
            <img src={User} alt="User" className="w-9 h-9" />
          </div>
        </div>
      </header>
    </>
  );
}
