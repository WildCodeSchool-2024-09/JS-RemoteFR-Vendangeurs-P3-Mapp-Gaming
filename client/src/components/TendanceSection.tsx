import axios from "axios";
import react, { useEffect } from "react";

interface Tendance {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  platform: string;
  category: string;
}

const Tendance = () => {
  const [videoGames, setVideoGames] = react.useState<Tendance[]>([]);

  useEffect(() => {
    axios.get("https://localhost:3310/api/videoGames").then((response) => {
      setVideoGames(response.data);
      console.info(response.data);
    });
  }, []);

  return (
    <div className="tendance-section">
      <h2>Tendance</h2>
      <div className="tendance-container">
        {videoGames.map((videoGame) => {
          return (
            <div key={videoGame.id} className="tendance-card">
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

export default Tendance;
