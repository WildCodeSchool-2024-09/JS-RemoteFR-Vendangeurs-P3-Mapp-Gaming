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
import AdminPage from "./pages/AdminPage";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ColorsContext";
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
      { path: "login", element: <ConnexionPage /> },
      { path: "soloGame/:id", element: <SoloGamePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "*", element: <NotFound /> },
      { path: "trending", element: <TrendingPage /> },
      { path: "preorder", element: <PreorderPage /> },
      { path: "upcoming", element: <UpcomingPage /> },
      { path: "users/:id/basket", element: <BasketPage /> },
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          { path: "user", element: <AdminUserSection /> },
          { path: "videoGames", element: <AdminGameSection /> },
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
    <BasketProvider>
      <RouterProvider router={router} />
    </BasketProvider>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
);
