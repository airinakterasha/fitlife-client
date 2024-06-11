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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../dashboard/Dashboard/AdminArea/AllUsers";
import Trainers from "../dashboard/Trainers/Trainers";
import Balance from "../dashboard/Dashboard/AdminArea/Balance";
import AddNewClass from "../dashboard/Dashboard/AdminArea/AddNewClass";
import ManageSlot from "../dashboard/Dashboard/TrainerArea/ManageSlot";
import AddNewSlot from "../dashboard/Dashboard/TrainerArea/AddNewSlot";
import AddNewSlotTrainer from "../dashboard/Dashboard/TrainerArea/AddNewSlotTrainer";
import TrainerDetails from "../pages/AllTrainers/TrainerDetails";


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
          path: '/all-trainers/:id',
          element: <TrainerDetails></TrainerDetails>,
          loader: ({params}) => fetch(`http://localhost:5555/betrainer/${params.id}`)
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
          element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
        },
        {
          path: 'applied-trainer',
          element: <AppliedTrainer></AppliedTrainer>
        },
        {
          path: 'manage-slot',
          element: <ManageSlot></ManageSlot>
        },
        {
          path: 'add-new-slot',
          element: <AddNewSlot></AddNewSlot>,
        },
        {
          path: 'add-new-slot-trainer',
          element: <AddNewSlotTrainer></AddNewSlotTrainer>,
        },
        // admin routes
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'alltrainers-dash',
          element: <Trainers></Trainers>
        },
        {
          path: 'balance',
          element: <Balance></Balance>
        },
        {
          path: 'add-new-class',
          element: <AddNewClass></AddNewClass>
        },
      ]
    }
]);

export default router