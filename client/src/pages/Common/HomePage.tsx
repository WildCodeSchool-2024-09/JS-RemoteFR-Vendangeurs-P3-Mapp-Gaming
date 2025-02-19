import PreorderSection from "../../components/Common/PreorderSection";
import TrendingSection from "../../components/Common/TrendingSection";
import UpcomingSection from "../../components/Common/UpcomingSection";
import { useTheme } from "../../contexts/ColorsContext";

const HomePage = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen relative overflow-hidden`}
    >
      <div className="relative z-10">
        <TrendingSection />
        <PreorderSection />
        <UpcomingSection />
      </div>
    </div>
  );
};

export default HomePage;
