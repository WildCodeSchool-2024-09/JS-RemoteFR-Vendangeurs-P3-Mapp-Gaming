import ProfilInformations from "../components/ProfilInformations";

const ProfilePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-title mb-4">Mes informations</h1>
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary text-color-text-primary">
        <div className="w-full max-w-md flex flex-col items-center gap-4">
          <ProfilInformations />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
