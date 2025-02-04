import type { NextFunction, Request, RequestHandler, Response } from "express";
import wishlistRepository from "./wishlistRepository";

// Récupérer la wishlist d'un utilisateur
const getwishlist: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.params;
    const profilId = Number.parseInt(id, 10);

    if (Number.isNaN(profilId)) {
      res.status(400).json({ message: "ID utilisateur invalide" });
      return;
    }

    const wishlistGames = await wishlistRepository.readWishlist(profilId);
    res.status(200).json(wishlistGames);
  } catch (err) {
    console.error("Erreur récupération wishlist :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Ajouter un jeu à la wishlist
const addwishlist: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params; // ID de l'utilisateur
  const { gameId } = req.body; // ID du jeu à ajouter

  if (!gameId) {
    res.status(400).json({ message: "gameId est requis" });
    return;
  }

  const userId = Number.parseInt(id, 10);
  const gameIdNumber = Number.parseInt(gameId, 10);

  if (Number.isNaN(userId) || Number.isNaN(gameIdNumber)) {
    res.status(400).json({ message: "ID utilisateur ou jeu invalide" });
    return;
  }

  try {
    await wishlistRepository.addGameToWishlist(userId, gameIdNumber);
    res.status(201).json({ message: "Jeu ajouté à la wishlist !" });
  } catch (err) {
    console.error("Erreur ajout wishlist :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export default { getwishlist, addwishlist };
