import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"


const DashBookedTrainer = () => {
  return (
    <>
        <Helmet>
            <title>FitLife | Dashboard | Booked Trainer</title>
        </Helmet>
        <div className="">
            <div className="">
                <TitleSection heading={'The Trainer you booked'} subHeading={'Here your booked information'}></TitleSection>
            </div>
            <div className=""></div>
        </div>
    </>
  )
}

export default DashBookedTrainer