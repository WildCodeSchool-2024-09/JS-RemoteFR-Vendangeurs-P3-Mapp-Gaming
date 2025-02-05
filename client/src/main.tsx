import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";
import AdminGameSection from "./components/Admin/Game/AdminGameSection";
import AdminUserSection from "./components/Admin/User/AdminUserSection";
import NotFound from "./components/NotFound/NotFound";

import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";
import { ThemeProvider } from "./contexts/ColorsContext";
import AdminCreateGamePage from "./pages/AdminCreateGamePage";
import AdminCreateUserPage from "./pages/AdminCreateUserPage";
import AdminEditGamePage from "./pages/AdminEditGamePage";
import AdminEditUserPage from "./pages/AdminEditUserPage";
import AdminPage from "./pages/AdminPage";
import BasketPage from "./pages/BasketPage";
import ConnexionPage from "./pages/ConnexionPage";
import HomePage from "./pages/HomePage";
import PreorderPage from "./pages/PreorderPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import SoloGamePage from "./pages/SoloGamePage";
import TrendingPage from "./pages/TrendingPage";
import UpcomingPage from "./pages/UpcomingPage";
import WishlistPage from "./pages/WishlistPage";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "connexion", element: <ConnexionPage /> },
      { path: "inscription", element: <RegisterPage /> },
      { path: "achetez-votre-jeu-ici/:id", element: <SoloGamePage /> },
      { path: "profile/:id", element: <ProfilePage /> },
      { path: "*", element: <NotFound /> },
      { path: "tendance", element: <TrendingPage /> },
      { path: "precommande", element: <PreorderPage /> },
      { path: "a-venir", element: <UpcomingPage /> },
      { path: "users/:id/basket", element: <BasketPage /> },
      { path: "user/:id/wishlist", element: <WishlistPage /> },

      {
        path: "admin",
        element: <AdminPage />,
        children: [
          { path: "utilisateurs", element: <AdminUserSection /> },
          { path: "creation-utilisateur", element: <AdminCreateUserPage /> },
          {
            path: "modification-utilisateur/:id",
            element: <AdminEditUserPage />,
          },

          { path: "tous-les-jeux", element: <AdminGameSection /> },
          { path: "creation-jeu", element: <AdminCreateGamePage /> },
          { path: "modification-jeu/:id", element: <AdminEditGamePage /> },
        ],
      },
    ],
  },
]);

/* ************************************************************************* */

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <BasketProvider>
          <RouterProvider router={router} />
        </BasketProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
