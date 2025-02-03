import { Outlet, matchPath, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportsChoice from "./components/SupportsChoice";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isConnexionPage = location.pathname.startsWith("/connexion");
  const isWishlistPage = matchPath("/users/:id/wishlist", location.pathname);
  const isBasketPage = matchPath("/users/:id/basket", location.pathname);
  const isProfilePage = matchPath("/profile/:id", location.pathname);
  const isRegister = location.pathname.startsWith("/inscription");

  return (
    <div>
      <NavBar />
      {!isAdminPage &&
        !isConnexionPage &&
        !isWishlistPage &&
        !isBasketPage &&
        !isProfilePage &&
        !isRegister && <SupportsChoice />}

      <Outlet />
      <Footer />

      <div className="fixed bottom-[-50px] left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-primary opacity-30 rounded-full blur-[100px] pointer-events-none !z-0" />
      <div className="fixed bottom-[-30px] left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-primary opacity-90 rounded-full blur-[60px] pointer-events-none !z-0" />
    </div>
  );
}

export default App;
