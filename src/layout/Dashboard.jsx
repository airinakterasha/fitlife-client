import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FaUserCog } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  return (
    <>
      <div className="">
        <div className="flex">
          {/* side bar */}
          <div className="w-72 min-h-screen bg-[#F23B3F] py-10 px-5">
            <div className=" text-white">
              <h1 className="text-3xl font-bold pb-5 text-center">Dashboard</h1>

              {
                isAdmin ? <>
                    <ul className="py-10">
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
                      <NavLink to='/dashboard/balance'>
                        <li className="flex mb-2">
                          <div className="p-1 mr-1">
                            <FaUserCog></FaUserCog>
                          </div>
                          <p className="capitalize">Balance</p>
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
                    <ul className="py-10"> 
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
                    {/* Trainer links finished */}
                </>
              }
                            
               {/* Shared links */}
              <div className="divider">OR</div>
              <ul className="py-10">
                <NavLink to='/dashboard/be-a-trainer'>
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
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex text-xl mb-2">
                    <div className="p-1 mr-3 ">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p>Be A Trainer</p>
                  </li>
                </NavLink>
              </ul>

            </div>
          </div>
          {/* side bar end */}
          <div className="flex-1 p-12">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard