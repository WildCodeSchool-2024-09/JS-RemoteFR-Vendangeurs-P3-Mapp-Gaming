import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Test from "./components/Test";
function App() {
  return (
    <div>
      <NavBar />
      <Test />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
