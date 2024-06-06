import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

import AllTrainers from "../pages/AllTrainers/AllTrainers";
import AllClasses from "../pages/AllClasses/AllClasses";
import Dashboard from "../layout/Dashboard";
import Login from "../authenticate/Login/Login";
import SignUp from "../authenticate/SignUp/SignUp";
import BeTrainer from "../pages/AllTrainers/BeTrainer/BeTrainer";
import AppliedTrainer from "../pages/AllTrainers/AppliedTrainer/AppliedTrainer";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/all-trainers',
          element: <AllTrainers></AllTrainers>
        },
        {
          path: '/all-classes',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
      ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: 'be-a-trainer',
          element: <BeTrainer></BeTrainer>
        },
        {
          path: 'applied-trainer',
          element: <AppliedTrainer></AppliedTrainer>
        },
      ]
    }
]);

export default router