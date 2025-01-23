import axios from "axios";
import react, { useEffect } from "react";

interface videoGames {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  category: string;
  image1: string;
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
      <div className="flex justify-center items-center gap-6">
        {videoGames.map((videoGame) => {
          return (
            <div
              key={videoGame.id}
              className="flex flex-col items-center gap-3"
            >
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
          );
        })}
      </div>
    </div>
    // <section>
    //   <div className="flex items-center">
    //     <h2 className="text-lg font-bold">PRÉCOMMANDE</h2>
    //     <a href="/preorders" className="text-orange-500 text-sm">
    //       ➤
    //     </a>
    //   </div>
    //   <div className="grid grid-cols-5 gap-4 mt-4">
    //     <div className="bg-gray-700 aspect-video rounded-lg" />
    //     <div className="bg-gray-700 aspect-video rounded-lg" />
    //     <div className="bg-gray-700 aspect-video rounded-lg" />
    //     <div className="bg-gray-700 aspect-video rounded-lg" />
    //     <div className="bg-gray-700 aspect-video rounded-lg" />
    //   </div>
    // </section>
  );
};

export default PreorderSection;
