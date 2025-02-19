import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import { isDatabaseError } from "../../helpers/isDatabaseError";

type User = {
  id?: number;
  email: string;
  password: string;
  username: string;
  hashedPassword: string;
  is_admin?: boolean;
};

type UpdateUser = {
  id?: number;
  email: string;
  username: string;
};

class AuthRepository {
  async create(user: User) {
    try {
      const result = await databaseClient.query<Result>(
        "INSERT INTO user (username, email, password) VALUES (?, ?, ?)",
        [user.username, user.email, user.hashedPassword],
      );
      return { id: result[0].insertId };
    } catch (error: unknown) {
      if (
        isDatabaseError(error) &&
        error.code === "ER_DUP_ENTRY" &&
        error.sqlMessage?.includes("email")
      ) {
        throw new Error("Email already exists");
      }
      throw error;
    }
  }

  async update(user: UpdateUser) {
    if (user.id === undefined || user.id === null) {
      throw new Error("User ID is required");
    }
    const existingUser = await this.readOneById(user.id);
    if (!existingUser) throw new Error("User not found");

    const newUsername = user.username || existingUser.username;
    const newEmail = user.email || existingUser.email;

    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET username = ?, email = ? WHERE id = ?",
      [newUsername, newEmail, user.id],
    );

    return result.affectedRows;
  }

  async readOneByEmail(email: string) {
    const [row] = await databaseClient.query<Rows>(
      "SELECT id, email, password, username, is_admin FROM user WHERE email = ? LIMIT 1",
      [email],
    );
    return row[0] as User;
  }

  async readOneById(id: number) {
    const [row] = await databaseClient.query<Rows>(
      "SELECT id, email, username, is_admin FROM user WHERE id = ? LIMIT 1",
      [id],
    );
    return row[0] as User;
  }
}

export default new AuthRepository();
