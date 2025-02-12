import { useParams } from "react-router-dom";
import GameDetails from "../../components/Game/GameDetails";
import GameInfos from "../../components/Game/GameInfos";
import { useTheme } from "../../contexts/ColorsContext";

export default function SoloGamePage() {
  const { id } = useParams<{ id: string }>();
  const { theme } = useTheme();

  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary min-h-screen p-14 relative overflow-hidden`}
    >
      <div className="relative z-10">
        <GameInfos gameId={id} /> {/* doit s'appeler gameinfos */}
        <GameDetails gameId={id} /> {/* doit s'appeler gamedetails */}
      </div>
    </div>
  );
}
