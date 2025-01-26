// import argon2 from "argon2";
import express from "express";
// import jwt from "jsonwebtoken";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// import validateDatas from "../middlewares/validateDatas";
// import userAction from "./modules/user/userAction";

// router.get("/api/user", userAction.browse);
// router.get("/api/user/:id", userAction.read);
// router.put("/api/user/:id", userAction.edit);
// router.post("/api/user", userAction.add);
// router.delete("/api/user/:id", userAction.remove);

/* ************************************************************************* */

import videoGamesAction from "./modules/videoGames/videoGamesAction";

router.get("/api/videoGames", videoGamesAction.browse);
router.get("/api/videoGames/trending", videoGamesAction.getTrending);
router.get("/api/videoGames/preorder", videoGamesAction.getPreorder);
router.get("/api/videoGames/upcoming", videoGamesAction.getUpcoming);
router.get("/api/videoGames/:id", videoGamesAction.read);

/* ************************************************************************* */

import wishlistActions from "./modules/whishlist/wishlistActions";

router.get("/api/user/profile/:id/wishlist", wishlistActions.getWishlist);
//router.get("/api/videoGames/basket", videoGamesAction.getBasket);

/* ************************************************************************* */

router.put("/api/videoGames/:id", videoGamesAction.edit);
router.post("/api/videoGames", videoGamesAction.add);
router.delete("/api/videoGames/:id", videoGamesAction.remove);

/* ************************************************************************* */
// router.post(
//   "/infoin",
//   (req, res, next) => {
//     console.info("début de la route infoin", req.body);
//     next();
//   },
//   validateDatas,

//   async (req, res) => {
//     const { email, password } = req.body;

//     try {
//       console.info(
//         "connexion à la db + envoi de la requête pour trouver l'utilisateur",
//       );

//       const user = await db.query("SELECT * FROM users WHERE email = ?", [
//         email,
//       ]);

//       console.info("user : ", user);

//       // s'il existe =>

//       console.info("comparaison des mots de passe");
//       // celui de la BDD est hashé

//       const hashPassword = await argon2.hash(password);

//       console.info("hashPassword : ", hashPassword);
//       console.info("user.password : ", user.password);

//       const passwordsMatch = await argon2.verify(user.password, password);

//       console.info(passwordsMatch);

//       console.info("génération du jeton");

//       const token = jwt.sign({ email: user.email }, "unesuperclésecrète", {
//         expiresIn: "1h",
//       });

//       console.info("génération du cookie");

//       res
//         .cookie("authToken", token, {
//           httpOnly: true,
//           secure: false,
//           sameSite: "lax",
//           maxAge: 1000 * 60 * 60,
//         })
//         .json({ message: "Utilisateur connecté", user: user });
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   },
// );

export default router;
