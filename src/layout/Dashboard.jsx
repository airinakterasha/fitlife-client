import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Dashboard = () => {
  return (
    <>
      <div className="">
        <div className="flex">
          {/* side bar */}
          <div className="w-64 min-h-screen">
            <div className="">
              <ul>
                <li className="flex">
                    <div className="p-1"></div>
                    <NavLink to='/dashboard/be-a-trainer'>Be A Trainer</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* side bar end */}
          <div className="flex-1">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard