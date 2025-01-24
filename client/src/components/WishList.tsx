interface Game {
    id: number;
    title: string;
    imageUrl: string;
}

interface WishListProps {
    games: Game[];
}

const WishList: React.FC<WishListProps> = ({ games }) => {
    return (
        <div className="text-white flex flex-col items-center p-6 bg-[#1a1a2e] border border-orange-500 rounded-lg shadow-lg ">
             <h1 className="text-3xl font-bold mb-6">ET POURQUOI PAS TA WISHLIST ?</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {games.length > 0 ? (
          games.map((game) => (
            <div
              key={game.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transform transition duration-300"
            >
              <img
                src={game.imageUrl}
                alt={game.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{game.title}</h2>
                <button
                  type="button"
                  className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
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

  