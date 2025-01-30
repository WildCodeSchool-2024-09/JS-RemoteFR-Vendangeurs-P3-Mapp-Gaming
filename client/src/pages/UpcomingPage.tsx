import UpcomingSelection from "../components/Games/UpcomingSelection";
import { useTheme } from "../contexts/ColorsContext";

const UpcomingPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen relative overflow-hidden`}
    >
      <div className="relative z-10">
        <UpcomingSelection />
      </div>
    </div>
  );
};

export default UpcomingPage;
