import WishList from "../components/WishList";

const ProfilePage = () => {
  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8">
        Bienvenue sur ta page de profil
      </h1>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Ta Wishlist</h2>
        <WishList games={wishlistGames} />
      </div>
    </div>
  );
};
const wishlistGames = [
  {
    id: 1,
    title: "The Witcher 3",
    price: 30,
    imageUrl: "client/src/assets/images/witcher1.jpg",
  },
  {
    id: 2,
    title: "The Legend of Zelda: Breath of the Wild",
    price: 59.99,
    imageUrl: "client/src/assets/images/zelda1.png",
  },
  {
    id: 3,
    title: "God of War",
    price: 49.99,
    imageUrl: "client/src/assets/images/gow1.jpg",
  },
];

export default ProfilePage;
