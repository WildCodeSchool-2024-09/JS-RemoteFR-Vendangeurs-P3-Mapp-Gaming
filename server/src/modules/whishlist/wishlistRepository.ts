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

class WishlistRepository {
  // Récupérer la liste des jeux dans la wishlist d'un utilisateur
  async readWishlist(profilId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
      SELECT vg.*
      FROM wishlist w
      JOIN videoGames vg ON w.game_id = vg.id
      WHERE w.user_id = ?
      `,
      [profilId],
    );
    return rows as VideoGame[];
  }

  async addGameToWishlist(userId: number, gameId: number) {
    await databaseClient.query<Rows>(
      "INSERT INTO wishlist (user_id, game_id) VALUES (?, ?)",
      [userId, gameId],
    );
  }
}

export default new WishlistRepository();
