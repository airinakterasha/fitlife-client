import { Helmet } from "react-helmet-async";
import useClass from "../../hooks/useClass";
import AllClassComp from "./AllClassComp";
import TitleSection from "../../components/TitleSection/TitleSection";


const AllClasses = () => {
  const [classes] = useClass();
  return (
    <>
      <Helmet>
            <title>FitLife | All Classes</title>
      </Helmet>
      <div className="">
          <div className="py-10">
            <TitleSection heading={`Booked `} subHeading={`Book the trainer`}></TitleSection>
          </div>
          <div className="grid grid-col-1 md:grid-cols-3">
            {
              classes.map(singleClass => <AllClassComp key={singleClass._id} singleClass={singleClass}></AllClassComp>)
            }
          </div>

      </div>
    </>
  )
}

export default AllClasses