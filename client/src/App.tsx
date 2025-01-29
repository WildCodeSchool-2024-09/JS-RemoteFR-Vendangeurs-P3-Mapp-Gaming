import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportsChoice from "./components/SupportsChoice";

function App() {
  return (
    <div>
      <NavBar />
      <SupportsChoice />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
