// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";
import NotFound from "./components/NotFound/NotFound";
import ConnectionPage from "./pages/ConnectionPage";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SoloGamePage from "./pages/SoloGamePage";

/* ************************************************************************* */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <ConnectionPage /> },
      { path: "/game", element: <GamePage /> },
      { path: "/sologame", element: <SoloGamePage /> },
      { path: "/profile", element: <ProfilePage /> },
      { path: "*", element: <NotFound /> },
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
    <RouterProvider router={router} />
  </StrictMode>,
);
