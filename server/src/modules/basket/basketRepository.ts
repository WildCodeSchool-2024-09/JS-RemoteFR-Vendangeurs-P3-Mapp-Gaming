import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

type VideoGame = {
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
};

class BasketRepository {
  async readBasket(profilId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT vg.*
      FROM basket b
      JOIN videoGames vg ON b.game_id = vg.id
      WHERE b.user_id = ?
      `,
      [profilId],
    );
    return rows as VideoGame[];
  }

  async addGameToBasket(userId: number, gameId: number) {
    await databaseClient.query<Rows>(
      "INSERT INTO basket (user_id, game_id) VALUES (?, ?)",
      [userId, gameId],
    );
  }

  async removeGameFromBasket(userId: number, gameId: number) {
    await databaseClient.query<Rows>(
      "DELETE FROM basket WHERE user_id = ? AND game_id = ?",
      [userId, gameId],
    );
  }
}

export default new BasketRepository();
