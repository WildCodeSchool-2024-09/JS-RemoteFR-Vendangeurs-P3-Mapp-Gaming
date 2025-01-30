import { useParams } from "react-router-dom";
import About from "../components/SoloGame/About";
import GameBanner from "../components/SoloGame/GameBanner";
import { useTheme } from "../contexts/ColorsContext";

export default function SoloGamePage() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen p-14 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <GameBanner gameId={id} />
        <About gameId={id} />
      </div>
    </div>
  );
}
