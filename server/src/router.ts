import express from "express";

const app = express();
app.use(express.json());

import { checkAuthDatas } from "./middlewares/checkAuthDatas";
import authActions from "./modules/auth/authActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import userAction from "./modules/user/userAction";

router.get("/api/user", userAction.browse);
router.get("/api/user/:id", userAction.read);

router.put("/api/user/:id", userAction.edit);
router.post("/api/user", userAction.add);
router.delete("/api/user/:id", userAction.remove);

// Authentification routes
router.post("/auth/register", authActions.register);
router.post("/auth/login", checkAuthDatas, authActions.login);
router.get("/auth/find/:id", authActions.findCurrentUser);
router.put("/auth/update/:id", authActions.UpdateUser);

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import videoGamesAction from "./modules/videoGames/videoGamesAction";

router.get("/api/videoGames", videoGamesAction.browse);
router.get("/api/videoGames/trending", videoGamesAction.getTrending);
router.get(
  "/api/videoGames/trending-no-limit",
  videoGamesAction.getTrendingNoLimit,
);
router.get("/api/videoGames/preorder", videoGamesAction.getPreorder);
router.get("/api/videoGames/upcoming", videoGamesAction.getUpcoming);
router.get("/api/videoGames/:id", videoGamesAction.read);

router.put("/api/videoGames/:id", videoGamesAction.edit);
router.post("/api/videoGames", videoGamesAction.add);
router.delete("/api/videoGames/:id", videoGamesAction.remove);
/* ************************************************************************* */

import wishlistActions from "./modules/whishlist/wishlistActions";

router.get("/api/user/profile/:id/wishlist", wishlistActions.getWishlist);
//router.get("/api/videoGames/basket", videoGamesAction.getBasket);

/* ************************************************************************* */

export default router;
