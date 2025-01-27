import TrendingSection from "../components/Games/TrendingSection";
import { useTheme } from "../contexts/ColorsContext";

const TrendingPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen`}
    >
      <TrendingSection />
    </div>
  );
};

export default TrendingPage;
