import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportsChoice from "./components/SupportsChoice";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");
  const isConnexionPage = location.pathname.startsWith("/connexion");
  const isWishlistPage = location.pathname.startsWith("/users/:id/wishlist");
  const isRegister = location.pathname.startsWith("/inscription");

  return (
    <div>
      <NavBar />
      {!isAdminPage && !isConnexionPage && !isWishlistPage && !isRegister && (
        <SupportsChoice />
      )}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
