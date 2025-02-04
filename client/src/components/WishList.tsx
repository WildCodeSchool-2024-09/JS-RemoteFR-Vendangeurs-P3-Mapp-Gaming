import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useBasket } from "../contexts/BasketContext";

interface videoGames {
  id: number;
  title: string;
  image1: string;
  price: number;
}

const WishList = () => {
  const [videoGames, setVideoGames] = useState<videoGames[]>([]);
  const { addToBasket } = useBasket();
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.id) return;

    axios
      .get(`http://localhost:3310/api/user/${user.id}/wishlist`)
      .then((response) => {
        setVideoGames(response.data);
      });
  }, [user?.id]);

  return (
    <div className="text-white flex flex-col items-center p-6 bg-[#1a1a2e] border border-orange-500 rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">ET POURQUOI PAS TA WISHLIST ?</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {videoGames.length > 0 ? (
          videoGames.map((videoGame) => (
            <div
              key={videoGame.id}
              className="overflow-hidden transition duration-300 transform bg-gray-800 rounded-lg shadow-md hover:scale-105"
            >
              <img
                src={videoGame.image1}
                alt={videoGame.title}
                className="object-cover w-full h-40"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{videoGame.title}</h2>
                <button
                  type="button"
                  className="px-4 py-2 mt-4 text-white bg-orange-500 rounded hover:bg-orange-600"
                  onClick={() => {
                    addToBasket(videoGame, user?.id || 0);
                  }}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">Votre wishlist est vide.</p>
        )}
      </div>
    </div>
  );
};

export default WishList;
