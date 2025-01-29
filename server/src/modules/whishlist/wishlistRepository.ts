import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";

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
};

class wishlistRepository {
  // afficher la wishlist sur le profil de l'utilisateur basé
  async readWishlist(profilId: number) {
    const [rows] = await databaseClient.query<Rows>(
      `
    SELECT videoGames.*
    FROM wishlist
    JOIN videoGames ON wishlist.game_id = videoGames.id
    WHERE wishlist.profile_id = ?
    `,
      [profilId],
    );
    return rows as videoGames[];
  }
}

export default new wishlistRepository();
