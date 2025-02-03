import PreorderSelection from "../components/Games/PreorderSelection";
import { useTheme } from "../contexts/ColorsContext";

const PreorderPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen relative overflow-hidden`}
    >
      <div className="relative z-10">
        <PreorderSelection />
      </div>
    </div>
  );
};

export default PreorderPage;
