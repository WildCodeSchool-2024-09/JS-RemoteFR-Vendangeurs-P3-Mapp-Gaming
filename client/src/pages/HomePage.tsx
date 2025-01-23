import PreorderSection from "../components/Games/PreorderSection";
import TrendingSection from "../components/Games/TrendingSection";
import UpcomingSection from "../components/Games/UpcomingSection";

const HomePage = () => {
  return (
    <div className="bg-slate-300">
      <TrendingSection />
      <PreorderSection />
      <UpcomingSection />
    </div>
  );
};

export default HomePage;
