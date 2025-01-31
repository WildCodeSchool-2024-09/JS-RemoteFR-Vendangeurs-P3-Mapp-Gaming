import Deconnexion from "../components/Deconnexion";

const ProfilePage = () => {
  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">
      <h1 className="mb-8 text-3xl font-bold">
        Bienvenue sur ta page de profil
      </h1>
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Mes informations</h2>
        <Deconnexion />
      </div>
    </div>
  );
};

export default ProfilePage;
