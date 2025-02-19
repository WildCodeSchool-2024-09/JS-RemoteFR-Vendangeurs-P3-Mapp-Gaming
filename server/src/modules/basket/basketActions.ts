import type { RequestHandler } from "express";
import basketRepository from "./basketRepository";

const getBasket: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const profilId = Number.parseInt(id, 10);

    if (Number.isNaN(profilId)) {
      res.status(400).json({ message: "ID utilisateur invalide" });
      return;
    }

    const basketGames = await basketRepository.readBasket(profilId);
    res.status(200).json(basketGames);
  } catch (err) {
    console.error("Erreur récupération basket :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const addBasket: RequestHandler = async (req, res, next) => {
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
    await basketRepository.addGameToBasket(userId, gameIdNumber);
    res.status(201).json({ message: "Jeu ajouté à la panier !" });
  } catch (err) {
    console.error("Erreur ajout panier :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

const removeGameFromBasket: RequestHandler = async (req, res, next) => {
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
    await basketRepository.removeGameFromBasket(userId, gameIdNumber);
    res.status(200).json({ message: "Jeu supprimé du panier !" });
  } catch (err) {
    console.error("Erreur suppression panier :", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export default { getBasket, addBasket, removeGameFromBasket };
