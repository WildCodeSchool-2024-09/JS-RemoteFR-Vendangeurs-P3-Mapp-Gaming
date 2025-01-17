import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Test() {
  const [theme, setTheme] = useState("theme-orange");

  const changeTheme = (newTheme: string) => {
    document.documentElement.className = newTheme;
    setTheme(newTheme);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-color-text-primary">
      <ThemeToggle changeTheme={changeTheme} currentTheme={theme} />
      <header className="p-4 text-center">
        <h1 className="font-title text-color-text-secondary text-4xl">
          Bienvenue dans mon application
        </h1>
        <p className="font-text text-lg mt-2">
          Changez les thèmes et admirez la magie de Tailwind CSS !
        </p>
      </header>
      <main className="p-4">
        <p className="font-text text-base">
          Ceci est un exemple de contenu utilisant Tailwind CSS avec des thèmes
          et des polices personnalisés.
        </p>
      </main>
    </div>
  );
}

export default Test;
