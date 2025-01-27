import { useState } from "react";
import ArrowDown from "../../assets/Icons/ArrowDown.svg";
import ArrowUp from "../../assets/Icons/ArrowUp.svg";
import { useTheme } from "../../contexts/ColorsContext";

export default function SupportsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, changeTheme } = useTheme();

  const supports = [
    { id: 1, title: "PlayStation 5", theme: "theme-blue" },
    { id: 2, title: "Xbox", theme: "theme-green" },
    { id: 3, title: "Nintendo", theme: "theme-red" },
    { id: 4, title: "PC", theme: "theme-purple" },
  ];

  return (
    <div
      className={`${theme} bg-bg-primary text-color-text-primary p-4 w-96 rounded-lg shadow-lg transition-all`}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="text-lg font-bold text-primary"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          SÉLECTIONNER MA CONSOLE
        </button>
        <img
          src={!isOpen ? ArrowDown : ArrowUp}
          alt={!isOpen ? "Arrow Down" : "Arrow Up"}
          className="ml-2"
        />
      </div>

      {isOpen && (
        <div className="mt-4 border-t border-secondary">
          {supports.map((support) => (
            <div key={support.id} className="p-2 border-b border-secondary">
              <button
                type="button"
                className="text-primary hover:text-secondary transition w-full text-left"
                onClick={() => {
                  changeTheme(support.theme);
                  setIsOpen(false);
                }}
              >
                {support.title}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
