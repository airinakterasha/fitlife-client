import { Helmet } from "react-helmet-async"
import TitleSection from "../../components/TitleSection/TitleSection"
import CommunityComp from "./CommunityComp"
import useForums from "./../../hooks/useForums"


const Community = () => {
  const [forums] = useForums();
  

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
              {
                forums.map(forum => <CommunityComp key={forum._id} forum={forum}></CommunityComp>)
              } 
            </div>
        </div>
    </>
  )
}

export default Community