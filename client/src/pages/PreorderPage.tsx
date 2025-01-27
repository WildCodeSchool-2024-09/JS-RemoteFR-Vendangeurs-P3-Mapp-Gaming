import PreorderSection from "../components/Games/PreorderSection";
import { useTheme } from "../contexts/ColorsContext";

const PreorderPage = () => {
  const { theme } = useTheme();
  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen`}
    >
      <PreorderSection />
    </div>
  );
};

export default PreorderPage;
