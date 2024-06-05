import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { FaUserCog } from "react-icons/fa";


const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          {/* side bar */}
          <div className="w-72 min-h-screen bg-[#F23B3F] py-10 px-5">
            <div className=" text-white">
              <h1 className="text-3xl font-bold pb-5 text-center">Dashboard</h1>
              <hr />
              <ul className="py-10">
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">All Newsletter subscribers</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">All Trainers</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Applied Trainer</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Balance</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Add new class</p>
                  </li>
                </NavLink>
              </ul>
              {/* Admin links finished */}
              <hr />
              {/* Trainer links start */}
              <ul className="py-10"> 
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Manage slot</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Add new slot</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Add new forum</p>
                  </li>
                </NavLink>
              </ul>
              {/* Trainer links finished */}
              <hr />
              {/* Trainer links finished */}
              <ul className="py-10">
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">Activity log page</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">profile page</p>
                  </li>
                </NavLink>
                <NavLink to='/dashboard/be-a-trainer'>
                  <li className="flex mb-2">
                    <div className="p-1 mr-1">
                      <FaUserCog></FaUserCog>
                    </div>
                    <p className="capitalize">recommended classes page</p>
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
              <hr />
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