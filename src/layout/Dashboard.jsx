import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FaUserCog } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import useUserSingle from "../hooks/useUserSingle";
import useTrainerByEmail from "../hooks/useTrainerByEmail";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const {user} = useAuth();
  const {singleuser} = useUserSingle();
  const [trainerOne] = useTrainerByEmail();
  console.log(trainerOne);
  return (
    <>
      <div className="">
        <div className="flex flex-col md:flex-row">
          {/* side bar */}
          <div className="m-10 md:m-0 md:w-72 md:min-h-screen bg-[#F23B3F] py-10 px-5">
            <div className=" text-white">
              <h1 className="text-xl md:text-3xl font-bold pb-5 text-center">Dashboard</h1>

              {
                isAdmin ? <>
                    <ul className="py-10">
                    <NavLink to='/dashboard/adminHome'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Admin Home</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/subscribers'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">All Newsletter subscribers</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/users'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">All Users</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/trainers'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">All Trainers</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/applied-trainer'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Applied Trainer</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/add-new-class'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Add new class</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/add-forum'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Add new forum</p>
                        </li>
                    </NavLink>
                    </ul>                   
                    {/* Admin links finished */}
                </> : <>
                  {/* Trainer links start */}
                  {
                    user && singleuser?.role=='trainer' && <ul className="py-10"> 
                      <NavLink to='/dashboard/trainerHome'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Trainer Home</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/manage-slot'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Manage slot</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/add-new-slot-trainer'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Add new slot</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/add-forum'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Add new forum</p>
                        </li>
                      </NavLink>
                    </ul>
                  } 
                  {/* Trainer links finished */}

                  {
                    user && singleuser?.role=='member' && <ul className="py-10">
                      <NavLink to='/dashboard/memberHome'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Member Home</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/activity-logged'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Activity log page</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/profile'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">profile page</p>
                        </li>
                      </NavLink>
                      <NavLink to='/dashboard/member-booked-trainer'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Booked Trainer page</p>
                        </li>
                      </NavLink>
                    </ul>
                  }
                </>
              } 
            </div>
          </div>
          {/* side bar end */}
          <div className="flex-1 md:p-12">
            <ToastContainer />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard