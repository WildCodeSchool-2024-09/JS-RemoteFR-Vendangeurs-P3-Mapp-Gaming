// Import access to data
// Declare the action
import type { RequestHandler } from "express";
import type { NextFunction, Request, Response } from "express";
import userRepository from "./userRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    const users = await userRepository.readAll();
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const userID = Number(req.params.id);
    const user = await userRepository.read(userID);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

// The E of BREAD - Edit operation
const edit: RequestHandler = async (req, res, next) => {
  try {
    const user = {
      id: Number(req.params.id),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      date_of_creation: req.body.date_of_creation,
      membership: req.body.membership,
      is_admin: req.body.is_admin,
    };
    const affectedRows = await userRepository.update(user);

    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    // Extraire les données de la requête
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      membership,
      is_admin,
    } = req.body;
    if (
      !firstname ||
      !lastname ||
      !username ||
      !email ||
      !password ||
      !membership ||
      is_admin === undefined
    ) {
      res.status(400).json({ error: "Tous les champs sont requis." });
      return;
    }

    const newUser = {
      firstname,
      lastname,
      username,
      email,
      password,
      date_of_creation: req.body.date_of_creation || new Date().toISOString(), // Valeur par défaut pour la date
      membership,
      is_admin,
    };

    // Créer l'utilisateur
    const insertId = await userRepository.create(newUser);

    // Répondre avec l'ID de l'utilisateur créé
    res.status(201).json({ insertId });
  } catch (err) {
    next(err); // Passer l'erreur au middleware de gestion d'erreurs
  }
};

// The D of BREAD - Delete operation
const remove: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number(req.params.id);

    await userRepository.delete(userId);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, edit, add, remove };
