import About from "../components/SoloGame/About";
import GameBanner from "../components/SoloGame/GameBanner";
import Opinions from "../components/SoloGame/Opinions";

export default function SoloGamePage() {
  return (
    <div className="bg-slate-400 p-14">
      <GameBanner />
      <About />
      <Opinions />
    </div>
  );
}
