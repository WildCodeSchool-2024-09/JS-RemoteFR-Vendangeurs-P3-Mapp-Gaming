import videoGamesRepository from "./videoGamesRepository";

// Declare the action

import type { RequestHandler } from "express";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const videoGames = await videoGamesRepository.readAll();
    res.json(videoGames);
  } catch (err) {
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    const videoGameId = Number(req.params.id);
    const videoGame = await videoGamesRepository.read(videoGameId);

    if (videoGame == null) {
      res.sendStatus(404);
    } else {
      res.json(videoGame);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    const videoGame = {
      id: Number(req.params.id),
      title: req.body.title,
      price: req.body.price,
      releaseDate: req.body.releaseDate,
      platform: req.body.platform,
      category: req.body.category,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
      description: req.body.description,
    };

    const affectedRows = await videoGamesRepository.update(videoGame);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add operation
const add: RequestHandler = async (req, res, next) => {
  try {
    const newVideoGame = {
      title: req.body.title,
      price: req.body.price,
      releaseDate: req.body.releaseDate,
      platform: req.body.platform,
      category: req.body.category,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
      description: req.body.description,
    };

    const insertId = await videoGamesRepository.create(newVideoGame);
    res.status(201).json({ id: insertId });
  } catch (err) {
    next(err);
  }
};

// The D of BREAD - Delete operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    const videoGameId = Number(req.params.id);

    await videoGamesRepository.delete(videoGameId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, remove };
