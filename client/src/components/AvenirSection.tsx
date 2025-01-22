import axios from "axios";
import react, { useEffect } from "react";

interface Avenir {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  platform: string;
  category: string;
}

const Avenir = () => {
  const [videoGames, setVideoGames] = react.useState<Avenir[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3310/api/videoGames").then((response) => {
      setVideoGames(response.data);
      console.info(response.data);
    });
  }, []);

  return (
    <div className="Avenir-section">
      <h2>A venir</h2>
      <div className="Avenir-container">
        {videoGames.map((videoGame) => {
          return (
            <div key={videoGame.id} className="Avenir-card">
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

export default Avenir;
