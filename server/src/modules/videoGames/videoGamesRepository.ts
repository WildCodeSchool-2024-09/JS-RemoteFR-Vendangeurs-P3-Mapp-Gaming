import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type videoGames = {
  id: number;
  title: string;
  price: number;
  releaseDate: Date;
  platform: string;
  category: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  description: string;
};

class videoGamesRepository {
  // The C of CRUD - Create operation
  async create(videoGames: Omit<videoGames, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO videoGames (title, price, release_date, platform, category, image1, image2, image3, image4, image5, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        videoGames.title,
        videoGames.price,
        videoGames.releaseDate,
        videoGames.platform,
        videoGames.category,
        videoGames.image1,
        videoGames.image2,
        videoGames.image3,
        videoGames.image4,
        videoGames.image5,
        videoGames.description,
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
      "UPDATE videoGames SET title = ?, price = ?, release_date = ?, platform = ?, category = ? image1 = ? image2 = ? image3 = ? image4 = ? image5 = ? description = ? WHERE id = ?",
      [
        videoGames.title,
        videoGames.price,
        videoGames.releaseDate,
        videoGames.platform,
        videoGames.category,
        videoGames.image1,
        videoGames.image2,
        videoGames.image3,
        videoGames.image4,
        videoGames.image5,
        videoGames.description,
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
