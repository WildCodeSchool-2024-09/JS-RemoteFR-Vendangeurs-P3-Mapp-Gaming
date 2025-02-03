import TrendingSelection from "../components/Games/TrendingSelection";
import { useTheme } from "../contexts/ColorsContext";

const TrendingPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen relative`}
    >
      {/* 📌 Contenu principal */}
      <div className="relative z-10">
        <TrendingSelection />
      </div>
    </div>
  );
};

export default TrendingPage;
