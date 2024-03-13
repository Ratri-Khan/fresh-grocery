import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";
import Order from "../components/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
    ],
  },
]);

export default router;
