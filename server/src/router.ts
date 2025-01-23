import express from "express";
// import { checkAuthDatas } from "./middlewares/checkAuthDatas";
// import authActions from "./modules/auth/authActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Authentification routes
// router.post("/auth/register", authActions.register);
// router.post("/auth/login", checkAuthDatas, authActions.login);
// router.get("/auth/find/:id", authActions.findCurrentUser);

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

import videoGamesAction from "./modules/videoGames/videoGamesAction";

router.get("/api/videoGames", videoGamesAction.browse);
router.get("/api/videoGames/:id", videoGamesAction.read);
router.put("/api/videoGames/:id", videoGamesAction.edit);
router.post("/api/videoGames", videoGamesAction.add);
router.delete("/api/videoGames/:id", videoGamesAction.remove);

export default router;
