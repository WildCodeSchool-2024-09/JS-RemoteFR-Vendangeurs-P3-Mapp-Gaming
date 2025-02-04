import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type videoGames = {
  id: number;
  title: string;
  price: number;
  release_date: Date;
  category: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  description: string;
  is_upcoming: boolean;
  is_preorder: boolean;
  views: number;
  average_rating: number;
};

class videoGamesRepository {
  // The C of CRUD - Create operation
  async create(videoGame: Omit<videoGames, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO videoGames 
        (title, price, release_date, category, image1, image2, image3, image4, image5, description, is_upcoming, is_preorder, views, average_rating) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        videoGame.title,
        videoGame.price,
        videoGame.release_date,
        videoGame.category,
        videoGame.image1,
        videoGame.image2,
        videoGame.image3,
        videoGame.image4,
        videoGame.image5,
        videoGame.description,
        videoGame.is_upcoming ? 1 : 0,
        videoGame.is_preorder ? 1 : 0,
        videoGame.views,
        videoGame.average_rating ?? 0,
      ],
    );
    return result.insertId;
  }

  // The Rs of CRUD - Read operations
  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific videoGame by its ID
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM videoGames WHERE id = ?",
      [id],
    );
    return rows[0] as videoGames;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all videoGames from the "videoGames" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM videoGames");
    return rows as videoGames[];
  }

  // The U of CRUD - Update operation
  async update(videoGames: videoGames) {
    // Execute the SQL UPDATE query to update an existing videoGames in the "videoGames" table
    const [result] = await databaseClient.query<Result>(
      "UPDATE videoGames SET title = ?, price = ?, release_date = ?, category = ?, image1 = ?, image2 = ?, image3 = ?, image4 = ?, image5 = ?, description = ?, is_upcoming = ?, is_preorder = ? WHERE id = ?",
      [
        videoGames.title,
        videoGames.price,
        videoGames.release_date,
        videoGames.category,
        videoGames.image1,
        videoGames.image2,
        videoGames.image3,
        videoGames.image4,
        videoGames.image5,
        videoGames.description,
        videoGames.is_upcoming ? 1 : 0,
        videoGames.is_preorder ? 1 : 0,
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

  // Rechercher les jeux précommandes basé sur le champ is_preorder
  async readPreorder() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM videoGames WHERE is_preorder = 1",
    );
    return rows as videoGames[];
  }

  // Rechercher les jeux à venir basé sur le champ is_upcoming
  async readUpcoming() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM videoGames WHERE is_upcoming = 1",
    );
    return rows as videoGames[];
  }

  // Rechercher les jeux tendances (basé sur le nombre de vues)
  async readTrending() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM videoGames ORDER BY views DESC LIMIT 7",
    );
    return rows as videoGames[];
  }

  async readTrendingNoLimit() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM videoGames ORDER BY views DESC",
    );
    return rows as videoGames[];
  }
}
// afficher le contenu du basket

export default new videoGamesRepository();
