import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Home/Home";
import Category from "../components/Category/Category";
import Order from "../components/Order/Order";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
// import Secret from "../components/Secret/Secret";
// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
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
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/login",
        element: <SignUp />,
      },
      // {
      //   path: "/secret",
      //   element: <PrivateRoute><Secret /></PrivateRoute>,
      // },
    ],
  },
]);

export default router;
