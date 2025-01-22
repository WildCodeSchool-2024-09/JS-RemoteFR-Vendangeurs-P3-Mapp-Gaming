import axios from "axios";
import react, { useEffect } from "react";

interface Precommande {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  platform: string;
  category: string;
}

const Precommande = () => {
  const [videoGames, setVideoGames] = react.useState<Precommande[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3310/api/videoGames").then((response) => {
      setVideoGames(response.data);
      console.info(response.data);
    });
  }, []);

  return (
    <div className="Precommande-section">
      <h2>Precommande</h2>
      <div className="Precommande-container">
        {videoGames.map((videoGame) => {
          return (
            <div key={videoGame.id} className="Precommande-card">
              <h3>{videoGame.title}</h3>
              <p>{videoGame.price} €</p>
              <p>{videoGame.platform}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Precommande;
