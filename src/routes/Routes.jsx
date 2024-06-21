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
import Balance from "../dashboard/Dashboard/AdminArea/Balance";
import AddNewClass from "../dashboard/Dashboard/AdminArea/AddNewClass";
import ManageSlot from "../dashboard/Dashboard/TrainerArea/ManageSlot";
import AddNewSlotTrainer from "../dashboard/Dashboard/TrainerArea/AddNewSlotTrainer";
import TrainerDetails from "../pages/AllTrainers/TrainerDetails";
import BookedTrainer from "../pages/AllTrainers/BookedTrainer/BookedTrainer";
import Community from "../pages/Community/Community";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import AddForum from "../dashboard/Dashboard/Forum/AddForum";
import AllTrainersDash from "../dashboard/Dashboard/AdminArea/AllTrainersDash";
import DashBookedTrainer from "../dashboard/Dashboard/MemberArea/DashBookedTrainer";
import AllSubscribers from "../dashboard/Dashboard/AdminArea/AllSubscribers";
import CommunityDetails from "../pages/Community/CommunityDetails";
import ActivityLogged from "../dashboard/Dashboard/MemberArea/ActivityLogged";
import AdminHome from "../dashboard/Dashboard/AdminArea/AdminHome";
import TrainerHome from "../dashboard/Dashboard/TrainerArea/TrainerHome";
import MemberHome from "../dashboard/Dashboard/MemberArea/MemberHome";
import Profile from "../dashboard/Dashboard/MemberArea/Profile";



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
          //loader: ({params}) => fetch(`https://fitlife-server.vercel.app/betrainer/${params.id}`)
        },
        {
          path: '/booked-trainers/:id',
          element: <BookedTrainer></BookedTrainer>,
          loader: ({params}) => fetch(`http://localhost:5555/slot/${params.id}`)
          // loader: ({params}) => fetch(`https://fitlife-server.vercel.app/${params.id}`)
        },
        {
          path: '/be-a-trainer',
          element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
        },
        {
          path: '/payment',
          element: <PaymentPage></PaymentPage>,
        },
        {
          path: '/all-classes',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/community',
          element: <Community></Community>
        },
        {
          path: '/community/:id',
          element: <CommunityDetails></CommunityDetails>,
          loader: ({params}) => fetch(`http://localhost:5555/forum/${params.id}`)
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
        // member route
        {
          path: 'memberHome',
          element: <MemberHome></MemberHome>
        },
        {
          path: 'activity-logged',
          element: <ActivityLogged></ActivityLogged>
        },
        {
          path: 'profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute> 
        },
        {
          path: 'member-booked-trainer',
          element: <DashBookedTrainer></DashBookedTrainer>
        },
        // trainer route
        {
          path: 'trainerHome',
          element: <TrainerHome></TrainerHome>
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
          path: 'add-new-slot-trainer',
          element: <PrivateRoute><AddNewSlotTrainer></AddNewSlotTrainer></PrivateRoute> ,
        },
        // admin routes
        {
          path: 'adminHome',
          element: <AdminHome></AdminHome>
        },
        {
          path: 'subscribers',
          element: <AllSubscribers></AllSubscribers>
        },
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        },
        {
          path: 'trainers',
          element: <AllTrainersDash></AllTrainersDash>
        },
        {
          path: 'balance',
          element: <Balance></Balance>
        },
        {
          path: 'add-new-class',
          element: <AddNewClass></AddNewClass>
        },
        // forum start
        {
          path: 'add-forum',
          element: <PrivateRoute><AddForum></AddForum></PrivateRoute>,
          // loader: ({params}) => fetch(`http://localhost:5555/allusers/${params.id}`)
        },
        // profile
        
      ]
    }
]);

export default router