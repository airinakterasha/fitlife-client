import { Helmet } from "react-helmet-async"

import AllTrainerComp from "./AllTrainerComp"

const AllTrainers = () => {
  
  return (
    <>
      <Helmet>
              <title>FitLife | All Trainers</title>
      </Helmet>
      <div className="">
        <div className="">
          <div className="">
            <AllTrainerComp></AllTrainerComp>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllTrainers