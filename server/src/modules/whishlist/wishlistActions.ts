import type { RequestHandler } from "express";
import wishlistRepository from "./wishlistRepository";

// read operation for Wishlist
const getWishlist: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  const profilId = Number.parseInt(id);

  try {
    const wishlistGames = await wishlistRepository.readWishlist(profilId);
    res.json(wishlistGames);
  } catch (err) {
    next(err);
  }
};

export default { getWishlist };
