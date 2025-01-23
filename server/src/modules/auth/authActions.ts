import argon2 from "argon2";
import type { RequestHandler } from "express";
import { passwordsMatch } from "../../helpers/authTools";
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
      res.status(401).json({ message: "Invalid password" });
      return;
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default { login };
