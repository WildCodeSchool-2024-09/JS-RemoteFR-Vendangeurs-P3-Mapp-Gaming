import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  date_of_creation: Date;
  membership: string;
  is_admin: boolean;
};

class userRepository {
  // The C of CRUD - Create operation
  async create(user: Omit<User, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (first_name, last_name, username, email, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.password,
        user.date_of_creation,
        user.membership,
      ],
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE id = ?",
      [id],
    );
    return rows[0] as User;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");
    return rows as User[];
  }

  // The U of CRUD - Update operation
  async update(user: User) {
    // Execute the SQL UPDATE query to update an existing user in the "user" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET first_name = ?, last_name = ?, username = ?, email = ?, password = ?, date_of_creation = ?, membership = ? WHERE id = ?",
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.password,
        user.date_of_creation,
        user.membership,
        user.id,
      ],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    // Execute the SQL DELETE query to remove the user from the "user" table
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM user WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new userRepository();
