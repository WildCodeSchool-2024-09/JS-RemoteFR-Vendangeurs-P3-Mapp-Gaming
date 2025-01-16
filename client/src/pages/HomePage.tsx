import Avenir from "../components/AvenirSection";
import Precommande from "../components/PrecommandeSection";
import Tendance from "../components/TendanceSection";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Tendance />
      <Precommande />
      <Avenir />
    </div>
  );
};

export default HomePage;
