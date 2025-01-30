import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportsChoice from "./components/SupportsChoice";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <div>
      <NavBar />
      {!isAdminPage && <SupportsChoice />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
