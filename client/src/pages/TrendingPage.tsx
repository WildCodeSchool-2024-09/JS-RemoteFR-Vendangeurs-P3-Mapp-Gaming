import TrendingSelection from "../components/Games/TrendingSelection";
import { useTheme } from "../contexts/ColorsContext";

const TrendingPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen`}
    >
      <TrendingSelection />
    </div>
  );
};

export default TrendingPage;
