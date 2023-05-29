import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MainMenu from "../pages/OurMainMenu/MainMenu/MainMenu"
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/our-menu",
        element: <MainMenu />
      },
      {
        path: "/order/:category",
        element:<Order />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "my-cart",
        element: <MyCart />
      },
      {
        path: "payment-history",
        element: <PaymentHistory />
      }
    ]
  }
]);