import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type videoGames = {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  platform: string;
  category: string;
};

class videoGamesRepository {
  // The C of CRUD - Create operation
  async create(videoGames: Omit<videoGames, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO videoGames (title, price, release_date, platform, category) VALUES (?, ?, ?, ?, ?)",
      [
        videoGames.title,
        videoGames.price,
        videoGames.releaseDate,
        videoGames.platform,
        videoGames.category,
      ],
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM videoGames WHERE id = ?",
      [id],
    );
    return rows[0] as videoGames;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM videoGames");
    return rows as videoGames[];
  }

  // The U of CRUD - Update operation
  async update(videoGames: videoGames) {
    // Execute the SQL UPDATE query to update an existing videoGames in the "videoGames" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE videoGames SET title = ?, price = ?, release_date = ?, platform = ?, category = ? WHERE id = ?",
      [
        videoGames.title,
        videoGames.price,
        videoGames.releaseDate,
        videoGames.platform,
        videoGames.category,
        videoGames.id,
      ],
    );
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM videoGames WHERE id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new videoGamesRepository();
