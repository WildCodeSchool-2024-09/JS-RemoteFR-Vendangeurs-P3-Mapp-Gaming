import argon2 from "argon2";
import type { RequestHandler } from "express";
import { generateToken, passwordsMatch } from "../../helpers/authTools";
import authRepository from "./authRepository";

const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await authRepository.readOneByEmail(email);

    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const isPasswordValid = await passwordsMatch(user.password, password);

    if (!isPasswordValid) {
      res.status(401).json({
        message: "Invalid email or password",
      });
      return;
    }
    const token = generateToken({ user });

    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60,
      })
      .status(200)
      .json({
        message: "Connexion réussie",
        userId: user.id,
      });
  } catch (error) {
    console.error("Unexpected error: ", error);
    res.status(500).json({ message: "An unexpected error occurred" });
    return;
  }
};

const findCurrentUser: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const user = await authRepository.readOneById(Number(id));

  res.status(200).json(user);
};

const register: RequestHandler = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await argon2.hash(password);

    const datasToRegister = { username, email, hashedPassword, password };

    const registeredUser = await authRepository.create(datasToRegister);

    res.status(201).json({
      userId: registeredUser.id,
      message: "Utilisateur correctement créé",
    });
  } catch (error: unknown) {
    if (error instanceof Error && error.message === "Email already exists") {
      res.status(409).json({ message: "This email is already taken" });
    } else {
      console.error("Unexpected error: ", error);
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

const UpdateUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    const existingUser = await authRepository.readOneById(Number(id));
    const affectedRows = await authRepository.update({
      id: Number(id),
      username,
      email,
    });

    if (affectedRows === 0) {
      res.status(404).json({ message: "Utilisateur non trouvé" });
      return;
    }

    // Renvoyer les nouvelles données mises à jour
    const updatedUser = await authRepository.readOneById(Number(id));
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export default { login, findCurrentUser, register, UpdateUser };
