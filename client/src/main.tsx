// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";
import AdminGameSection from "./components/Admin/AdminGameSection";
import AdminUserSection from "./components/Admin/AdminUserSection";
import NotFound from "./components/NotFound/NotFound";

import { BasketProvider } from "./contexts/BasketContext";
import BasketPage from "./pages/BasketPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ColorsContext";
import AdminCreateUserPage from "./pages/AdminCreateUserPage";
import AdminPage from "./pages/AdminPage";
import ConnexionPage from "./pages/ConnexionPage";
import HomePage from "./pages/HomePage";
import PreorderPage from "./pages/PreorderPage";
import ProfilePage from "./pages/ProfilePage";
import SoloGamePage from "./pages/SoloGamePage";
import TrendingPage from "./pages/TrendingPage";
import UpcomingPage from "./pages/UpcomingPage";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "connexion", element: <ConnexionPage /> },
      { path: "achetez-votre-jeu-ici/:id", element: <SoloGamePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "*", element: <NotFound /> },
      { path: "tendance", element: <TrendingPage /> },
      { path: "precommande", element: <PreorderPage /> },
      { path: "a-venir", element: <UpcomingPage /> },
      { path: "users/:id/basket", element: <BasketPage /> },

      {
        path: "admin",
        element: <AdminPage />,
        children: [
          {
            path: "utilisateurs",
            element: <AdminUserSection />,
            children: [
              {
                path: "creation-utilisateur",
                element: <AdminCreateUserPage />,
              },
            ],
          },
          { path: "tout-les-jeux", element: <AdminGameSection /> },
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
