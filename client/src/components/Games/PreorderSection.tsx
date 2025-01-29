import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/icons/arrowLeft.svg";
import arrowRight from "../../assets/icons/arrowRight.svg";

interface VideoGame {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  category: string;
  image1: string;
}

const PreorderSection = () => {
  const [videoGames, setVideoGames] = useState<VideoGame[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios
      .get("http://localhost:3310/api/videoGames/preorder")
      .then((response) => {
        setVideoGames(response.data);
      });
  }, []);

  // Fonction pour scroller vers la gauche ou la droite
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="Preorder-section px-6">
      <Link to="/preorder">
        <h2 className="text-2xl font-title mb-6">Précommandes</h2>
      </Link>

      <div className="relative">
        {/* Bouton gauche */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary bg-opacity-30 text-white rounded-full shadow-md z-10 hidden md:flex"
        >
          <img src={arrowLeft} alt="Précédent" />
        </button>

        {/* Scroll horizontal avec barre de défilement cachée */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 py-4 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videoGames.map((videoGame) => (
            <Link
              to={`/SoloGame/${videoGame.id}`}
              key={videoGame.id}
              className="snap-center flex-shrink-0"
            >
              <div className="relative w-72 h-72 rounded-2xl overflow-hidden">
                <img
                  src={videoGame.image1}
                  alt={videoGame.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />

                {/* Conteneur du texte avec effet flouté */}
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-30 text-white text-center p-2 backdrop-blur-md">
                  <h3 className="text-sm font-title overflow-hidden whitespace-nowrap text-ellipsis w-full">
                    {videoGame.title}
                  </h3>
                  <span className=" font-text">{videoGame.price} €</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bouton droit */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full shadow-md z-10 hidden md:flex"
        >
          <img src={arrowRight} alt="Suivant" />
        </button>
      </div>
    </div>
  );
};

export default PreorderSection;
