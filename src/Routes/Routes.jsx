import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home/Home";
import { Login } from "../Shared/Login/Login";
import { Register } from "../Shared/Register/Register";
import { Dashboard } from "../Layout/Dashboard";
import { MyProfile } from "../Components/Dashboard/MyProfile/MyProfile";
import { MyUpcomingAppointments } from "../Components/Dashboard/MyUpcomingAppointments/MyUpcomingAppointments";
import { TestResult } from "../Components/Dashboard/TestResult/TestResult";
import { PrivateRoute } from "./PrivateRoute";
import { AdminRoute } from "./AdminRoute";
import { AllUser } from "../Components/Dashboard/AllUser/AllUser";
import { AddTest } from "../Components/Dashboard/AddTest/AddTest";
import { AllTest } from "../Components/Dashboard/AllTest/AllTest";
import { Reservation } from "../Components/Dashboard/Reservation/Reservation";
import { AddBanner } from "../Components/Dashboard/AddBanner/AddBanner";
import { AllBanner } from "../Components/Dashboard/AllBanner/AllBanner";
import { StatisticsPage } from "../Components/Dashboard/StatisticsPage/StatisticsPage";
import { AllTests } from "../Pages/AllTests/AllTests";
import { TestDetails } from "../Pages/AllTests/TestDetails";
import { UpdateTests } from "../Components/Dashboard/UpdateTests/UpdateTests";

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
      {
        path: "/allTests",
        element: <AllTests />,
      },
      {
        path: "/testDetails/:id",
        element: <TestDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tests/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  // dashboard
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // normal user
      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "myUpcomingAppointments",
        element: (
          <PrivateRoute>
            {" "}
            <MyUpcomingAppointments />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "testResult",
        element: (
          <PrivateRoute>
            <TestResult />
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser />
          </AdminRoute>
        ),
      },
      {
        path: "addTest",
        element: (
          <AdminRoute>
            <AddTest />
          </AdminRoute>
        ),
      },
      {
        path: "allTest",
        element: (
          <AdminRoute>
            <AllTest />
          </AdminRoute>
        ),
      },
      {
        path: "updateTest/:id",
        element: (
          <AdminRoute>
            <UpdateTests />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tests/${params.id}`),
      },
      {
        path: "reservation",
        element: (
          <AdminRoute>
            <Reservation />
          </AdminRoute>
        ),
      },
      {
        path: "addBanner",
        element: (
          <AdminRoute>
            <AddBanner />
          </AdminRoute>
        ),
      },
      {
        path: "allBanner",
        element: (
          <AdminRoute>
            <AllBanner />
          </AdminRoute>
        ),
      },
      {
        path: "statisticsPage",
        element: (
          <AdminRoute>
            <StatisticsPage />
          </AdminRoute>
        ),
      },
    ],
  },
]);
