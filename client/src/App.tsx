import { Outlet } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SupportsMenu from "./components/SoloGame/SupportsMenu";
function App() {
  return (
    <div>
      <NavBar />
      <SupportsMenu />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
