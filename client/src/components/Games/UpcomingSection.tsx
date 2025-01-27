import axios from "axios";
import react, { useEffect } from "react";
import { Link } from "react-router-dom";

interface videoGames {
  id: number;
  title: string;
  price: number;
  releaseDate: string;
  platform: string;
  category: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  description: string;
}

const UpcomingSection = () => {
  const [videoGames, setVideoGames] = react.useState<videoGames[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/upcoming")
      .then((response) => {
        setVideoGames(response.data);
        console.info(response.data);
      });
  }, []);

  return (
    <div className="Upcoming-section">
      <Link to="/upcoming">
        <h2>A venir</h2>
      </Link>
      <div className="flex justify-center items-center gap-6">
        {videoGames.map((videoGame) => (
          <Link to={`/SoloGame/${videoGame.id}`} key={videoGame.id}>
            <div className="flex flex-col items-center gap-3">
              <div className="w-72 h-72">
                <img
                  src={videoGame.image1}
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <h3>{videoGame.title}</h3>
              <p>{videoGame.price} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSection;
