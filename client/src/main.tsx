// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

import App from "./App";
import NotFound from "./components/NotFound/NotFound";
import ConnectionPage from "./pages/ConnectionPage";
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
      { path: "login", element: <ConnectionPage /> },
      { path: "soloGame/:id", element: <SoloGamePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "*", element: <NotFound /> },
      { path: "trending", element: <TrendingPage /> },
      { path: "preorder", element: <PreorderPage /> },
      { path: "upcoming", element: <UpcomingPage /> },
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
