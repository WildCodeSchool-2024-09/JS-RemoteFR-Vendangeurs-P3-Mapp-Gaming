import { useTheme } from "../contexts/ColorsContext";

export default function SupportsChoice() {
  const { changeTheme } = useTheme();

  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold text-primary mb-6">
        VIENS DÉCOUVRIR UN LARGE CHOIX DE JEUX SUR NOS DIFFÉRENTES PLATEFORMES !
      </h1>

      <div className="flex gap-4">
        <button
          type="button"
          className="px-6 py-3 bg-primary text-color-text-primary font-bold rounded-lg transition hover:scale-105"
          onClick={() => changeTheme("theme-red")}
        >
          NINTENDO
        </button>

        <button
          type="button"
          className="px-6 py-3 bg-primary text-color-text-primary font-bold rounded-lg transition hover:scale-105"
          onClick={() => changeTheme("theme-blue")}
        >
          PLAYSTATION
        </button>

        <button
          type="button"
          className="px-6 py-3 bg-primary text-color-text-primary font-bold rounded-lg transition hover:scale-105"
          onClick={() => changeTheme("theme-green")}
        >
          XBOX
        </button>

        <button
          type="button"
          className="px-6 py-3 bg-primary text-color-text-primary font-bold rounded-lg transition hover:scale-105"
          onClick={() => changeTheme("theme-purple")}
        >
          PC
        </button>
      </div>
    </section>
  );
}
