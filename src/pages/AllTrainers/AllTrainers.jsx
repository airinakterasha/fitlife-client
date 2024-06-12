import { Helmet } from "react-helmet-async"
import AllTrainerComp from "./AllTrainerComp"
import useTrainer from "../../hooks/useTrainer"
import TitleSection from "../../components/TitleSection/TitleSection"
import useAxiosPublic from "../../hooks/useAxiosPublic"
import { useEffect, useState } from "react"



const AllTrainers = () => {
  const [trainerSlot, settrainerSlot] = useState();
  const [betrainer] = useTrainer()
  console.log(betrainer);
  const axiosPublic = useAxiosPublic();
  const trainersAll = betrainer.filter(trainer => trainer.status === 'approved' && trainer.role === 'trainer');
  console.log(trainersAll);

  useEffect(()=> {
    axiosPublic.get('/slot')
    .then(res => {
      console.log(res.data);
      if(res.data.email === betrainer.email){
        settrainerSlot(trainerSlot);
        console.log(trainerSlot);
        console.log('aa');

      }
    })
    .catch()

  }, [axiosPublic, betrainer.email, trainerSlot])

  

  return (
    <>
      <Helmet>
              <title>FitLife | All Trainers</title>
      </Helmet>
      <div className="container mx-auto">
        <div className="py-10">
          <div className="mb-10">
              <TitleSection heading={'All valuable trainer'} subHeading={'Our trainers are our strength'}></TitleSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
              trainersAll.map(trainer =><AllTrainerComp key={trainer._id} trainer={trainer}></AllTrainerComp>)
            }
            
          </div>
        </div>
      </div>
    </>
  )
}

export default AllTrainers