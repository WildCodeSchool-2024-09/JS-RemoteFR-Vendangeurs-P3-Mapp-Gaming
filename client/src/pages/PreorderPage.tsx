import PreorderSelection from "../components/Games/PreorderSelection";
import { useTheme } from "../contexts/ColorsContext";

const PreorderPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen`}
    >
      <PreorderSelection />
    </div>
  );
};

export default PreorderPage;
