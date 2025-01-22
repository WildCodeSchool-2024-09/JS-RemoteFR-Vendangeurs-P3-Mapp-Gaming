import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type user = {
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

  async create(user: Omit<user, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, username, email, password, date_of_creation, membership, is_admin) values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.password,
        user.date_of_creation,
        user.membership,
        user.is_admin,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as user;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all user from the "user" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");
    // Return the array of items
    return rows as user[];
  }

  // The U of CRUD - Update operation
  async update(user: user) {
    // Execute the SQL UPDATE query to update an existing user in the "user" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET user_id = ?, firstname = ?, lastname = ?, username = ?, email = ?, password = ?, date_of_creation = ?, membership = ?, is_admin = ? WHERE id = ?",
      [
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user.password,
        user.date_of_creation,
        user.membership,
        user.is_admin,
        user.id,
      ],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM user WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }
}

export default new userRepository();
