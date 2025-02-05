import axios from "axios";
import react, { useEffect } from "react";
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

  return (
    <div className="z-10">
      {/* recherche */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Rechercher un jeu"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="button" onClick={validateSearch}>
          Valider
        </button>
        {/* Suggestions */}
        {filteredGames.length > 0 && (
          <ul>
            {filteredGames.map((videoGame, index) => (
              <li
                key={videoGame.id}
                ref={handleRef(index)}
                className={index === highlightedIndex ? "highlighted" : ""}
              >
                {videoGame.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* tous les jeux*/}
      <div className="flex justify-between">
        <h2>Tous les jeux</h2>
        <Link to="/admin/creation-jeu"> Créer un jeu</Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 border-2 border-orange-500">
        {videoGames.map((videoGame) => (
          <div key={videoGame.id}>
            <div className="flex flex-row items-center gap-10">
              <div className="w-80 h-20">
                <img
                  src={videoGame.image1}
                  alt={videoGame.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div>
                <h3>{videoGame.title}</h3>
              </div>
              <div className="flex flex-row gap-2">
                <div>
                  <Link to={`/admin/modification-jeu/${videoGame.id}`}>
                    Modifier
                  </Link>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => deleteGame(videoGame.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminGameSection;
