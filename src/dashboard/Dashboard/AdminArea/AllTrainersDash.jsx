import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import useTrainer from "../../../hooks/useTrainer"
import AllTrainersDashComp from "./AllTrainersDashComp"


const AllTrainersDash = () => {
    const [betrainer] = useTrainer();
    const trainersAll = betrainer.filter(trainer => trainer.status === 'approved' && trainer.role === 'trainer');
    console.log(trainersAll);


    return (
        <>
            <Helmet>
                <title>FitLife | Dashboard | All Trainers</title>
            </Helmet>
            <div className="">
                <div className="">
                <TitleSection heading={'All trainer'} subHeading={'all Our trainers'}></TitleSection>
                </div>
                {/* table start */}
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                                {
                                    trainersAll.map((trainer, index) =><AllTrainersDashComp key={trainer._id} trainer={trainer} index={index}></AllTrainersDashComp>)
                                }
                            </tbody> 
                        </table>
                    </div>
                </div>
                {/* table end */}
            </div>
        </>
    )
}

export default AllTrainersDash