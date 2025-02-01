import Deconnexion from "../components/Deconnexion";
import ProfilInformations from "../components/ProfilInformations";

const ProfilePage = () => {
  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">
      <h1 className="mb-4 text-2xl font-semibold">Mes informations</h1>
      <div>
        <ProfilInformations />
        <Deconnexion />
      </div>
    </div>
  );
};

export default ProfilePage;
