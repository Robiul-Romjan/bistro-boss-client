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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";


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
        element:<PrivateRoute><Order /></PrivateRoute>
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
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "my-cart",
        element: <MyCart />
      },
      {
        path: "payment-history",
        element: <PaymentHistory />
      },
      {
        path: "all-users",
        element: <AllUsers />
      },
      {
        path: "add-item",
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: "manage-items",
        element: <AdminRoute><ManageItems /></AdminRoute>
      }
    ]
  }
]);