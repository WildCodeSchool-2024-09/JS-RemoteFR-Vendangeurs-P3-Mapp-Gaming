import { useEffect, useState } from "react";

export default function LoadingText() {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev < 3 ? prev + 1 : 0));
    }, 350); // Change les points toutes les 350ms

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="mt-10 text-4xl font-title">
      Chargement du thème
      <span className={dots >= 1 ? "opacity-100" : "opacity-0"}>.</span>
      <span className={dots >= 2 ? "opacity-100" : "opacity-0"}>.</span>
      <span className={dots >= 3 ? "opacity-100" : "opacity-0"}>.</span>
    </p>
  );
}
