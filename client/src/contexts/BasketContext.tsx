import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type VideoGame = { id: number; title: string; price: number; image1: string };
type Basket = { videoGames: VideoGame[]; userId: number };

type BasketContextType = {
  basket: Basket;
  itemCount: number;
  addToBasket: (videogame: VideoGame, userId: number) => void;
  getTotalPrice: () => number;
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<Basket>({ videoGames: [], userId: 0 });

  const addToBasket = (videoGame: VideoGame, userId: number) => {
    setBasket((prevBasket) => {
      const alreadyInBasket = prevBasket.videoGames.some(
        (game) => game.id === videoGame.id,
      );
      if (alreadyInBasket) {
        return prevBasket; // Pas d'ajout si déjà dans le panier
      }
      return {
        videoGames: [...prevBasket.videoGames, videoGame],
        userId: userId,
      };
    });
  };

  const getTotalPrice = () => {
    // Assurez-vous que chaque prix est un nombre valide avant de l'ajouter
    const total = basket.videoGames.reduce((total, game) => {
      // Si le prix du jeu n'est pas un nombre valide, ne l'ajoutez pas
      const gamePrice = Number(game.price);
      if (!Number.isNaN(gamePrice)) {
        return total + gamePrice;
      }
      return total;
    }, 0);

    return total; // Retourne le total de manière sûre
  };

  const itemCount = basket.videoGames.length;

  return (
    <BasketContext.Provider
      value={{ basket, itemCount, addToBasket, getTotalPrice }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};

export default BasketContext;
