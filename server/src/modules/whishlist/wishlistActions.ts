import type { RequestHandler } from "express";
import wishlistRepository from "./wishlistRepository";

const getwishlist: RequestHandler = async (req, res, next) => {
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

const addwishlist: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const { gameId } = req.body;

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

const removeGameFromWishlist: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const { gameId } = req.body;

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
    await wishlistRepository.removeGameFromWishlist(userId, gameIdNumber);
    res.status(200).json({ message: "Jeu supprimé de la wishlist !" });
  } catch (err) {
    console.error("Erreur suppression wishlist :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export default { getwishlist, addwishlist, removeGameFromWishlist };
