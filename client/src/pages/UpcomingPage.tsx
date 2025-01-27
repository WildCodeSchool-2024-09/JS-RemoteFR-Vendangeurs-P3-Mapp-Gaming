import UpcomingSection from "../components/Games/UpcomingSection";
import { useTheme } from "../contexts/ColorsContext";

const UpcomingPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen`}
    >
      <UpcomingSection />
    </div>
  );
};

export default UpcomingPage;
