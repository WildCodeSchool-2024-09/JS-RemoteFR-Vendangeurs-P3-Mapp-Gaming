import axios from "axios";
import { useEffect, useState } from "react";
import Price from "./Price";
import SupportsMenu from "./SupportsMenu";

interface Game {
  id: number;
  description: string;
}

export default function About({ gameId }: { gameId: string | undefined }) {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3310/api/videoGames/${gameId}`)
      .then((response) => {
        setGame(response.data);
      });
  }, [gameId]);

  if (!game) return <p>Chargement...</p>;

  return (
    <div className="text-lg !bg-slate-900 !bg-opacity-40 p-7 rounded-2xl mt-10">
      <h2 className="mt-8 mb-4 font-title">À PROPOS</h2>
      <section className="flex gap-4 justify-center items-center">
        <p className="font-text">{game.description}</p>
        <div className="flex flex-col gap-4 items-center">
          <SupportsMenu />
          <Price gameId={gameId} />
        </div>
      </section>
    </div>
  );
}
