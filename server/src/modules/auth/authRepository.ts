import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import { isDatabaseError } from "../../helpers/isDatabaseError";

type User = {
  id?: number;
  email: string;
  password: string;
  is_admin?: boolean;
};

class AuthRepository {
  async create(user: User) {
    try {
      const result = await databaseClient.query<Result>(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [user.email, user.password],
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

  async readOneByEmail(email: string) {
    const [row] = await databaseClient.query<Rows>(
      "SELECT id, email, password FROM users WHERE email = ? LIMIT 1",
      [email],
    );
    return row[0] as User;
  }

  async readOneByID(id: number) {
    const [row] = await databaseClient.query<Rows>(
      "SELECT id, email, password FROM users WHERE email = ? LIMIT 1",
      [id],
    );
    return row[0] as User;
  }
}

export default new AuthRepository();
