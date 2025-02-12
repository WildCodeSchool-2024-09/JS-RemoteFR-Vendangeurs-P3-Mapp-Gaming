import { useState } from "react";
import PcNeon from "../../assets/Icons/PcNeon.svg";
import PlaystationNeon from "../../assets/Icons/PlaystationNeon.svg";
import SwitchNeon from "../../assets/Icons/SwitchNeon.svg";
import XboxNeon from "../../assets/Icons/XboxNeon.svg";
import { useTheme } from "../../contexts/ColorsContext";
import LoadingText from "../Common/LoadingText";

type Theme = "theme-red" | "theme-blue" | "theme-green" | "theme-purple";

export default function SupportsChoice() {
  const { changeTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [logo, setLogo] = useState<string | null>(null);

  const handleThemeChange = (theme: Theme, platformLogo: string) => {
    setShowModal(true);
    setLogo(platformLogo);

    setTimeout(() => {
      changeTheme(theme);
      setShowModal(false);
    }, 1200);
  };
  return (
    <div>
      {/* Modale de chargement */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-md flex justify-center items-center z-50">
          <div className="flex flex-col items-center text-center w-full h-full justify-center">
            {/* Affichage du logo en fonction de la plateforme */}
            {logo && (
              <img src={logo} alt="Logo plateforme" className="w-h-24 h-24" />
            )}
            <LoadingText />
          </div>
        </div>
      )}

      <section className="flex flex-col items-center justify-center text-center mt-10">
        <h1 className="text-3xl font-title text-primary mb-6">
          VIENS DÉCOUVRIR UN LARGE CHOIX DE JEUX SUR NOS DIFFÉRENTES PLATEFORMES
          !
        </h1>

        <div className="flex gap-4">
          <button
            type="button"
            className="px-6 py-3 bg-primary text-color-text-primary font-title rounded-lg transition hover:scale-105"
            onClick={() => handleThemeChange("theme-red", SwitchNeon)}
          >
            NINTENDO
          </button>

          <button
            type="button"
            className="px-6 py-3 bg-primary text-color-text-primary font-title rounded-lg transition hover:scale-105"
            onClick={() => handleThemeChange("theme-blue", PlaystationNeon)}
          >
            PLAYSTATION
          </button>

          <button
            type="button"
            className="px-6 py-3 bg-primary text-color-text-primary font-title rounded-lg transition hover:scale-105"
            onClick={() => handleThemeChange("theme-green", XboxNeon)}
          >
            XBOX
          </button>

          <button
            type="button"
            className="px-6 py-3 bg-primary text-color-text-primary font-title rounded-lg transition hover:scale-105"
            onClick={() => handleThemeChange("theme-purple", PcNeon)}
          >
            PC
          </button>
        </div>
      </section>
    </div>
  );
}
