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
      release_date: req.body.releaseDate,
      category: req.body.category,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
      description: req.body.description,
      is_upcoming: req.body.isUpcoming,
      is_preorder: req.body.isPreorder,
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
      release_date: req.body.releaseDate,
      category: req.body.category,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      image4: req.body.image4,
      image5: req.body.image5,
      description: req.body.description,
      is_upcoming: req.body.isUpcoming,
      is_preorder: req.body.isPreorder,
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

// Read operation for trending
const getTrending: RequestHandler = async (req, res, next) => {
  try {
    const trendingGames = await videoGamesRepository.readTrending;
    res.json(trendingGames);
  } catch (err) {
    next(err);
  }
};

// Read operation for preorders
const getPreorder: RequestHandler = async (req, res, next) => {
  try {
    const preorderGames = await videoGamesRepository.readPreorder();
    res.json(preorderGames);
  } catch (err) {
    next(err);
  }
};

// Read operation for upcoming
const getUpcoming: RequestHandler = async (req, res, next) => {
  try {
    const upcomingGames = await videoGamesRepository.readUpcoming();
    res.json(upcomingGames);
  } catch (err) {
    next(err);
  }
};

export default {
  browse,
  read,
  edit,
  add,
  remove,
  getTrending,
  getPreorder,
  getUpcoming,
};
