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

      <div className="fixed bottom-[-50px] left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-primary opacity-30 rounded-full blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[-30px] left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-primary opacity-90 rounded-full blur-[60px] pointer-events-none" />
    </div>
  );
}

export default App;
