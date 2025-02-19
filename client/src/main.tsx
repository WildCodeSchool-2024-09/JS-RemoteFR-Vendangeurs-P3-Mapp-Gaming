import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";

import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";
import { ThemeProvider } from "./contexts/ColorsContext";
import ConnexionPage from "./pages/Common/ConnexionPage";
import HomePage from "./pages/Common/HomePage";
import PreorderPage from "./pages/Common/PreorderPage";
import PlatformGamesPage from "./pages/PlatformGamesPage";

import AccessAdmin from "./components/Admin/AccessAdmin";

import AdminManageGamePage from "./pages/AdminManageGamePage";
import AdminManageUserPage from "./pages/AdminManageUserPage";

import AdminPage from "./pages/AdminPage";

import RegisterPage from "./pages/Common/RegisterPage";
import SoloGamePage from "./pages/Common/SoloGamePage";
import TrendingPage from "./pages/Common/TrendingPage";
import UpcomingPage from "./pages/Common/UpcomingPage";
import BasketPage from "./pages/User/BasketPage";
import ProfilePage from "./pages/User/ProfilePage";
import WishlistPage from "./pages/User/WishlistPage";

import AdminGameSection from "./components/Admin/AdminGameSection";
import AdminUserSection from "./components/Admin/AdminUserSection";
import NotFoundPage from "./pages/Common/NotFoundPage";
/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // ROUTES PUBLIQUES
      { path: "", element: <HomePage /> },
      { path: "connexion", element: <ConnexionPage /> },
      { path: "inscription", element: <RegisterPage /> },
      { path: ":jeux/:id", element: <SoloGamePage /> },
      { path: "tendance", element: <TrendingPage /> },
      { path: "precommande", element: <PreorderPage /> },
      { path: "a-venir", element: <UpcomingPage /> },
      { path: "profile/:id", element: <ProfilePage /> },
      { path: "users/:id/basket", element: <BasketPage /> },
      { path: "user/:id/wishlist", element: <WishlistPage /> },
      { path: "platform/:platform_Id", element: <PlatformGamesPage /> },
      { path: "*", element: <NotFoundPage /> },

      // ROUTES USERS
      {
        path: "admin",
        element: <AccessAdmin />,
        children: [
          {
            path: "",
            element: <AdminPage />,
            children: [
              { path: "mon-profile", element: <ProfilePage /> },
              { path: "utilisateurs", element: <AdminUserSection /> },
              { path: "gestion-utilisateur", element: <AdminManageUserPage /> },
              {
                path: "gestion-utilisateur/:id",
                element: <AdminManageUserPage />,
              },
              { path: "tous-les-jeux", element: <AdminGameSection /> },
              { path: "gestion-jeu", element: <AdminManageGamePage /> },
              { path: "gestion-jeu/:id", element: <AdminManageGamePage /> },
            ],
          },
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
