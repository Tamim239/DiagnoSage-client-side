import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home/Home";
import { Login } from "../Shared/Login/Login";
import { Register } from "../Shared/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },

    // intro point
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    }
  ]);