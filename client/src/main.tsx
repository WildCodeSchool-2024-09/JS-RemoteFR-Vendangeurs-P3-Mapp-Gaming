import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";

import NotFoundPage from "./pages/Common/NotFoundPage";

import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";
import { ThemeProvider } from "./contexts/ColorsContext";

// import AdminCreateGamePage from "./pages/Admin/AdminCreateGamePage";
// import AdminCreateUserPage from "./pages/Admin/AdminCreateUserPage";
// import AdminEditGamePage from "./pages/Admin/AdminEditGamePage";
// import AdminEditUserPage from "./pages/User";
// import AdminPage from "./pages/AdminPage";
import ConnexionPage from "./pages/Common/ConnexionPage";
import HomePage from "./pages/Common/HomePage";
import PreorderPage from "./pages/Common/PreorderPage";
import RegisterPage from "./pages/Common/RegisterPage";
import SoloGamePage from "./pages/Common/SoloGamePage";
import TrendingPage from "./pages/Common/TrendingPage";
import UpcomingPage from "./pages/Common/UpcomingPage";
import BasketPage from "./pages/User/BasketPage";
import ProfilePage from "./pages/User/ProfilePage";
import WishlistPage from "./pages/User/WishlistPage";

// import AccessAdmin from "./components/Admin/AccessAdmin";
import AccessUser from "./components/User/AccessUser";
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
      { path: "*", element: <NotFoundPage /> },

      // ROUTES USERS
      {
        path: "utilisateurs",
        element: <AccessUser />,
        children: [
          { path: ":id/profil", element: <ProfilePage /> },
          { path: ":id/panier", element: <BasketPage /> },
          { path: ":id/liste-de-souhaits", element: <WishlistPage /> },
        ],
      },

      // ROUTES ADMIN
      // {
      //   path: "admin",
      //   element: <AccessAdmin />,
      //   children: [
      //     { path: "utilisateurs", element: <AdminUserSection /> },
      //     { path: "utilisateurs/creation", element: <AdminCreateUserPage /> },
      //     {
      //       path: "utilisateurs/:id/edition",
      //       element: <AdminEditUserPage />,
      //     },
      //     { path: "jeux", element: <AdminGameSection /> },
      //     { path: "jeux/creation", element: <AdminCreateGamePage /> },
      //     { path: ":jeux/:id/edition", element: <AdminEditGamePage /> },
      //   ],
      // },
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
