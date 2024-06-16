import TitleSection from "../../../components/TitleSection/TitleSection";
import useTrainer from "../../../hooks/useTrainer";
import AppliedTrainerComp from "./AppliedTrainerComp";
import { Helmet } from "react-helmet-async"

const AppliedTrainer = () => {
  const [betrainer, loading, refetch] = useTrainer();
  const appliedTrainer = betrainer.filter(trainer => trainer.status === 'pending');
  console.log(appliedTrainer);


  return (
    <>
        <Helmet>
              <title>FitLife | All Applied Trainer</title>
        </Helmet>
        <div className="">
            <div className="">
                <div className="">
                    <TitleSection heading={'Applied trainer'} subHeading={'All applied trainer are here'}></TitleSection>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                      {
                        appliedTrainer.map(trainer =><AppliedTrainerComp key={trainer._id} trainer={trainer} refetch={refetch}></AppliedTrainerComp>)
                      }
                      
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default AppliedTrainer