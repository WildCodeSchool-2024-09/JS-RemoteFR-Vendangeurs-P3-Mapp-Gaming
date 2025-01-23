import PreorderSection from "../components/Games/PreorderSection";
import TrendingSection from "../components/Games/TrendingSection.tsx";
import UpcomingSection from "../components/Games/UpcomingSection";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <TrendingSection />
      <PreorderSection />
      <UpcomingSection />
    </div>
  );
};

export default HomePage;
