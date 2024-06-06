import TitleSection from "../../../components/TitleSection/TitleSection";
import AppliedTrainerComp from "./AppliedTrainerComp";
import { Helmet } from "react-helmet-async"

const AppliedTrainer = () => {
  return (
    <>
        <Helmet>
              <title>FitLife | All Applied Trainer</title>
        </Helmet>
        <div className="">
            <div className="">
                <div className="">
                    <TitleSection heading={'Applied trainer'} subHeading={'All applied trainer are here'}></TitleSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                      <AppliedTrainerComp></AppliedTrainerComp>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppliedTrainer