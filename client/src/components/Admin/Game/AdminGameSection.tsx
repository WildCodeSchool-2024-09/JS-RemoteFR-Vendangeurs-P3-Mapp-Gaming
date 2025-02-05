import axios from "axios";
import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface videoGame {
  id: number;
  title: string;
  image1: string;
}

const AdminGameSection = () => {
  const [videoGames, setVideoGames] = react.useState<videoGame[]>([]);
  const [searchTerm, setSearchTerm] = react.useState("");
  const [filteredGames, setFilteredGames] = react.useState<videoGame[]>([]);
  const [highlightedIndex, setHighlightedIndex] = react.useState(-1);
  const itemsRef = react.useRef<(HTMLLIElement | null)[]>([]);

  // Nouvelle variable pour la largeur maximale
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3310/api/videoGames").then((response) => {
      console.info(response.data);
      setVideoGames(response.data);
    });
  }, []);

  const deleteGame = (id: number) => {
    axios
      .delete(`http://localhost:3310/api/videoGames/${id}`)
      .then((response) => {
        console.info(response);
        setVideoGames(videoGames.filter((videoGame) => videoGame.id !== id));
      });
  };

  // Search functionality
  useEffect(() => {
    const lowerSearch = searchTerm.trim().toLowerCase();
    if (lowerSearch === "") {
      setFilteredGames([]);
      setHighlightedIndex(-1);
      return;
    }

    const suggestions = videoGames.filter((videoGame) =>
      videoGame.title?.toLowerCase().startsWith(lowerSearch),
    );

    setFilteredGames(suggestions);
    setHighlightedIndex(-1);
  }, [searchTerm, videoGames]);

  useEffect(() => {
    if (highlightedIndex >= 0 && itemsRef.current[highlightedIndex]) {
      itemsRef.current[highlightedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  const handleRef = (index: number) => (el: HTMLLIElement | null) => {
    itemsRef.current[index] = el;
  };

  const validateSearch = () => {
    if (filteredGames.length > 0) {
      setVideoGames(filteredGames);
      setSearchTerm(""); // Clear the search bar
      setFilteredGames([]); // Clear suggestions
    }
  };

  // Fonction pour tronquer le titre si nécessaire
  const truncateTitle = (title: string, maxLength = 20) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  // Calculer la largeur du titre le plus large pour l'adapter à tous les jeux
  useEffect(() => {
    const calculateMaxWidth = () => {
      const maxWidth = Math.max(...videoGames.map((game) => game.title.length));
      setMaxWidth(maxWidth);
    };

    if (videoGames.length > 0) {
      calculateMaxWidth();
    }
  }, [videoGames]);

  return (
    <div className="z-10">
      <div className="flex flex-col items-center relative w-full max-w-md mx-auto">
        <div className="flex w-full">
          <input
            type="text"
            placeholder="Rechercher un jeu"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md text-black"
          />
          <button
            type="button"
            onClick={validateSearch}
            className="ml-2 p-2 bg-primary text-color-text-primary rounded-md"
          >
            Valider
          </button>
        </div>

        {filteredGames.length > 0 && (
          <ul className="absolute top-full mt-2 w-full bg-white border border-gray-300 shadow-lg rounded-md z-50">
            {filteredGames.map((videoGame, index) => (
              <li
                key={videoGame.id}
                ref={handleRef(index)}
                className={`text-black p-2 hover:bg-gray-200 cursor-pointer ${
                  index === highlightedIndex ? "bg-gray-300" : ""
                }`}
              >
                {videoGame.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex justify-between mt-6">
        <h2>Tous les jeux</h2>
        <Link to="/admin/creation-jeu">Créer un jeu</Link>
      </div>
      <div className="border-2 border-primary bg-slate-900/50 p-4 rounded-lg mt-10">
        <div className="flex flex-col justify-center items-start gap-6">
          {videoGames.map((videoGame) => (
            <div
              key={videoGame.id}
              className="flex flex-row justify-between items-center gap-6 p-4 hover:bg-slate-700/15 rounded-lg"
              style={{ width: `${maxWidth * 1}rem` }}
            >
              <div className="flex flex-row items-center gap-4">
                <div className="w-32 h-32">
                  <img
                    src={videoGame.image1}
                    alt={videoGame.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div>
                  <h3 className="text-lg">{truncateTitle(videoGame.title)}</h3>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <div className="border border-primary p-2 rounded-lg">
                  <Link to={`/admin/modification-jeu/${videoGame.id}`}>
                    Modifier
                  </Link>
                </div>
                <div>
                  <button
                    className="border border-primary p-2 rounded-lg"
                    type="button"
                    onClick={() => deleteGame(videoGame.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGameSection;
