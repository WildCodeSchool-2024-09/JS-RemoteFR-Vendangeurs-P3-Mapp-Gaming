import { Outlet, matchPath, useLocation } from "react-router-dom";
import "./App.css";
import Copyright from "./assets/Icons/Copyright.svg";
import NavBar from "./components/Common/NavBar";
import SupportsChoice from "./components/Common/SupportsChoice";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isConnexionPage = location.pathname.startsWith("/connexion");
  const isWishlistPage = matchPath("/user/:id/wishlist", location.pathname);
  const isBasketPage = matchPath("/users/:id/basket", location.pathname);
  const isProfilePage = matchPath("/profile/:id", location.pathname);
  const isSoloGamePage = matchPath("/:slug/:id", location.pathname);
  const isRegister = location.pathname.startsWith("/inscription");

  return (
    <div>
      <NavBar />

      {!isAdminPage &&
        !isConnexionPage &&
        !isWishlistPage &&
        !isBasketPage &&
        !isProfilePage &&
        !isSoloGamePage &&
        !isRegister && <SupportsChoice />}

      <Outlet />

      {/* <Footer /> */}

      <div className="bg-bg-primary text-primary text-xs flex justify-center items-center gap-2 p-4">
        <img src={Copyright} alt="" />
        <span className="font-text">Mapp Gaming 2024</span>
      </div>

      <div className="fixed bottom-[-50px] left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-primary opacity-30 rounded-full blur-[100px] pointer-events-none !z-0" />
      <div className="fixed bottom-[-30px] left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-primary opacity-90 rounded-full blur-[60px] pointer-events-none !z-0" />
    </div>
  );
}

export default App;
