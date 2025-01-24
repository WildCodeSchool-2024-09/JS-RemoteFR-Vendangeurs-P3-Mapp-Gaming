import express from "express";
import { checkAuthDatas } from "./middlewares/checkAuthDatas";
import authActions from "./modules/auth/authActions";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Authentification routes
router.post("/auth/register", authActions.register);
router.post("/auth/login", checkAuthDatas, authActions.login);
router.get("/auth/find/:id", authActions.findCurrentUser);

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

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
