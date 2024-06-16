import { Helmet } from "react-helmet-async"
import TitleSection from "../../components/TitleSection/TitleSection"
import CommunityComp from "./CommunityComp"
import useForums from "./../../hooks/useForums"
import useTrainer from "./../../hooks/useTrainer"
import useUsers from "../../hooks/useUsers"



const Community = () => {
  const [forums] = useForums();
  const [users] = useUsers();
  console.log(users);
  // const [betrainer] = useTrainer()
  // console.log(forums);

  //const trainerRole = betrainer.filter(trainer => trainer.status === 'approved' && trainer.role === 'trainer');
  // console.log(trainerRole)
  // console.log(trainerRole.role)
  return (
    <>
        <Helmet>
            <title>FitLife | All Forum</title>
        </Helmet>
        <div className="container mx-auto">
            <div className="">
                <TitleSection heading={'All Forum'} subHeading={'We have strong community'}></TitleSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
              {/* {
                forums.map(forum => <CommunityComp key={forum._id} forum={forum}></CommunityComp>)
              }  */}
            </div>
        </div>
    </>
  )
}

export default Community