import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/HOME/Home";
import Builder from "../pages/BUILDER/Builder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor/:pageId",
    element: <Builder />,
  },
]);

export default router;
