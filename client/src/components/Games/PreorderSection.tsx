import axios from "axios";
import react, { useEffect } from "react";

interface videoGames {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  category: string;
}

const PreorderSection = () => {
  const [videoGames, setVideoGames] = react.useState<videoGames[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/preorder")
      .then((response) => {
        setVideoGames(response.data);
        console.info(response.data);
      });
  }, []);

  return (
    <div className="Preorder-section">
      <h2>Precommande</h2>
      <div className="Preorder-container">
        {videoGames.map((videoGame) => {
          return (
            <div key={videoGame.id} className="Preorder-card">
              <h3>{videoGame.title}</h3>
              <p>{videoGame.price} €</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreorderSection;
