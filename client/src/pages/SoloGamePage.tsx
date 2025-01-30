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
      {/* 🟡 Arrière-plan arrondi (fixés en bas sans chevaucher le footer) */}

      {/* Premier demi-cercle (grand et plus sombre) */}
      <div className="fixed bottom-[-50px] left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-primary opacity-30 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Deuxième demi-cercle (plus petit et lumineux) */}
      <div className="fixed bottom-[-30px] left-1/2 -translate-x-1/2 w-[80vw] h-[30vh] bg-primary opacity-90 rounded-full blur-[60px] z-0 pointer-events-none" />
    </div>
  );
}

export default SoloGamePage;
