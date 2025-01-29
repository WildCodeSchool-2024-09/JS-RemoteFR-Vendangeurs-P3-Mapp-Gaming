import express from "express";

const app = express();
app.use(express.json());

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

/* ************************************************************************* */

import videoGamesAction from "./modules/videoGames/videoGamesAction";

router.get("/api/videoGames", videoGamesAction.browse);
router.get("/api/videoGames/trending", videoGamesAction.getTrending);
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
