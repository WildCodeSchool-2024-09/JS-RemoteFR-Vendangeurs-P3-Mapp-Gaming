import { useParams } from "react-router-dom";
import About from "../components/SoloGame/About";
import GameBanner from "../components/SoloGame/GameBanner";
// import Opinions from "../components/SoloGame/Opinions";

export default function SoloGamePage() {
  const { id } = useParams<{ id: string }>(); // Récupération de l'ID dans l'URL

  return (
    <div className="bg-slate-400 p-14">
      <GameBanner gameId={id} />
      <About gameId={id} />
      {/* <Opinions gameId={id} /> */}
    </div>
  );
}
