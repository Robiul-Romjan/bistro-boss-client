import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import MainMenu from "../pages/OurMainMenu/MainMenu/MainMenu"
import Order from "../pages/Order/Order/Order";

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
          element: <Order />
        }
      ]
    },
  ]);