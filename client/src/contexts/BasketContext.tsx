import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type VideoGame = { id: number; title: string; price: number };
type Basket = { videoGames: VideoGame[]; userId: number };

type BasketContextType = {
  basket: Basket;
  addToBasket: (videogame: VideoGame) => void;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Basket>({ videoGames: [], userId: 0 });

  const addToBasket = (videoGame: VideoGame) => {
    setBasket({
      videoGames: [...basket.videoGames, videoGame],
      userId: basket.userId,
    });
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (context === undefined) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export default BasketContext;
