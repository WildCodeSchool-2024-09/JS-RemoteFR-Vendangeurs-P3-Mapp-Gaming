import argon2 from "argon2";
import express from "express";
import jwt from "jsonwebtoken";
import { DatabaseClient } from "../database/client";

const router = express.Router();

import videoGamesAction from "./modules/videoGames/videoGamesAction";

router.get("/api/videoGames", videoGamesAction.browse);
router.get("/api/videoGames/:id", videoGamesAction.read);
router.put("/api/videoGames/:id", videoGamesAction.edit);
router.post("/api/videoGames", videoGamesAction.add);
router.delete("/api/videoGames/:id", videoGamesAction.remove);

/***********
 * ********************* */
import validateDatas from "../middlewares/validateDatas";
import userAction from "./modules/User/userAction";

router.get("/api/user", userAction.browse);
router.get("/api/user/:id", userAction.read);
router.put("/api/user/:id", userAction.edit);
router.post("/api/user", userAction.add);
router.delete("/api/user/:id", userAction.remove);


export default router;
