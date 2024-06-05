import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home/Home";
import { Login } from "../Shared/Login/Login";
import { Register } from "../Shared/Register/Register";
import { Dashboard } from "../Layout/Dashboard";
import { MyProfile } from "../Components/Dashboard/MyProfile/MyProfile";
import { MyUpcomingAppointments } from "../Components/Dashboard/MyUpcomingAppointments/MyUpcomingAppointments";
import { TestResult } from "../Components/Dashboard/TestResult/TestResult";

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
      path: "/login",
      element: <Login />
    },
    {
      path: "register",
      element: <Register />
    },
      ],
    },


    // dashboard 
    {
      path: "dashboard",
      element: (
 
          <Dashboard />
      ),
      children: [
        // normal user
        {
          path: "myProfile",
          element: <MyProfile />,
        },
        {
          path: 'myUpcomingAppointments',
          element: <MyUpcomingAppointments />
        },
        {
          path: 'testResult',
          element: <TestResult />
        },
  
        // admin routes
        {
          path: "addItems",
          element: (

              <p>Hello admin</p>
   
          ),
        },
        {
          path: "manageItems",
          element: 
           <p>admin protected</p>
           
  
        },
        {
          path: "allUsers",
          element: (
            
             <p>admin see all user</p>
          
          ),
        },
      ],
    },
  ]);