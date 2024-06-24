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
import ClassDetails from "../pages/AllClasses/ClassDetails";
import Payment from "../pages/PaymentPage/Payment";



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
          loader: ({params}) => fetch(`https://fitlife-server.vercel.app/betrainer/${params.id}`)
        },
        {
          path: '/booked-trainers/:id',
          element: <PrivateRoute><BookedTrainer></BookedTrainer></PrivateRoute> ,
          loader: ({params}) => fetch(`https://fitlife-server.vercel.app/slot/${params.id}`)
        },
        {
          path: '/be-a-trainer',
          element: <PrivateRoute><BeTrainer></BeTrainer></PrivateRoute>
        },
        {
          path: '/payment',
          element: <PrivateRoute><PaymentPage></PaymentPage></PrivateRoute> 
        },
        {
          path: '/all-classes',
          element: <AllClasses></AllClasses>
        },
        {
          path: '/all-classes/:id',
          element: <ClassDetails></ClassDetails>,
          loader: ({params}) => fetch(`https://fitlife-server.vercel.app/class/${params.id}`)
        },
        {
          path: '/community',
          element: <Community></Community>
        },
        {
          path: '/community/:id',
          element: <CommunityDetails></CommunityDetails>,
          loader: ({params}) => fetch(`https://fitlife-server.vercel.app/forum/${params.id}`)
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
          element: <PrivateRoute><MemberHome></MemberHome></PrivateRoute> 
        },
        {
          path: 'activity-logged',
          element: <PrivateRoute><ActivityLogged></ActivityLogged></PrivateRoute>
        },
        {
          path: 'profile',
          element: <PrivateRoute><Profile></Profile></PrivateRoute> 
        },
        {
          path: 'pay',
          element: <PrivateRoute><Payment></Payment></PrivateRoute> 
        },
        {
          path: 'member-booked-trainer',
          element: <PrivateRoute><DashBookedTrainer></DashBookedTrainer></PrivateRoute> 
        },
        // trainer route
        {
          path: 'trainerHome',
          element: <PrivateRoute><TrainerHome></TrainerHome></PrivateRoute>
        },
        {
          path: 'applied-trainer',
          element: <PrivateRoute><AppliedTrainer></AppliedTrainer></PrivateRoute>
        },
        {
          path: 'manage-slot',
          element: <PrivateRoute><ManageSlot></ManageSlot></PrivateRoute>
        },
        {
          path: 'add-new-slot-trainer',
          element: <PrivateRoute><AddNewSlotTrainer></AddNewSlotTrainer></PrivateRoute> ,
        },
        // admin routes
        {
          path: 'adminHome',
          element: <PrivateRoute><AdminHome></AdminHome></PrivateRoute> 
        },
        {
          path: 'subscribers',
          element: <PrivateRoute><AllSubscribers></AllSubscribers></PrivateRoute>
        },
        {
          path: 'users',
          element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
        },
        {
          path: 'trainers',
          element: <PrivateRoute><AllTrainersDash></AllTrainersDash></PrivateRoute>
        },
        {
          path: 'add-new-class',
          element: <PrivateRoute><AddNewClass></AddNewClass></PrivateRoute>
        },
        // forum start
        {
          path: 'add-forum',
          element: <PrivateRoute><AddForum></AddForum></PrivateRoute>,
        },
        
      ]
    }
]);

export default router