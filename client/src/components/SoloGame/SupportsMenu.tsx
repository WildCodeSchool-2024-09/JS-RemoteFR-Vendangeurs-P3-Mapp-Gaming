import { useState } from "react";
import ArrowDown from "../../assets/Icons/ArrowDown.svg";
import ArrowUp from "../../assets/Icons/ArrowUp.svg";

export default function SupportsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const supports = [
    { id: 1, title: "PlayStation 5" },
    { id: 2, title: "Xbox Series X" },
    { id: 3, title: "Nintendo Switch" },
    { id: 4, title: "PC" },
  ];
  return (
    <div className="text-primary bg-background p-4 w-96">
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="text-lg font-bold"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          SELECTIONNER MA CONSOLE
        </button>
        <img
          src={!isOpen ? ArrowDown : ArrowUp}
          alt={!isOpen ? "Arrow Up" : "Arrow Down"}
          className="ml-2"
        />
      </div>

      {isOpen && (
        <div className="mt-4">
          {supports.map((support) => (
            <div key={support.id} className="p-2 border-b">
              <button type="button">{support.title}</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
