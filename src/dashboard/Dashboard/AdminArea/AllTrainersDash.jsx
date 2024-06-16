import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import useTrainer from "../../../hooks/useTrainer"
import AllTrainersDashComp from "./AllTrainersDashComp"
import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import { FaTrashAlt } from "react-icons/fa";



const AllTrainersDash = () => {
    const [betrainer, loading, refetch] = useTrainer();
    const trainersAll = betrainer.filter(trainer => trainer.status === 'approved' && trainer.role === 'trainer');
    console.log(trainersAll);
    const axiosSecure = useAxiosSecure();


    const handleDeleteTrainer = (trainer) => {
        Swal.fire({
            title: `Are you sure you want to delete ${trainer.trainerName}?`,
            text: `You won't be able to revert ${trainer.trainerName}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, delete ${trainer.trainerName}!`
          }).then((result) => {
            if (result.isConfirmed) { 
              axiosSecure.delete(`/betrainer/${trainer._id}`)
              .then(res => {
                if(res.data.deletedCount > 0){
                  refetch();
                  Swal.fire({
                    title: "Deleted!",
                    text: `${trainer.trainerName} has been deleted.`,
                    icon: "success"
                  });
                }
              })
            }
        });
    }


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
                                    <th>Available Slot Time</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                                {
                                    trainersAll.map((trainer, index) =><tr key={trainer._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={trainer.profileImage} />
                                            </div>
                                            </div>
                                            <div>
                                            <div className="font-bold">{trainer.trainerName}</div>
                                            <div className="text-sm opacity-50">{trainer.age} years experience</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="space-x-3 space-y-3 w-[400px]">
                                        {
                                            trainer.skills.map((skill, index) => <p key={index} className="btn btn-sm">
                                                {skill}
                                            </p>)
                                        }
                                    </td>
                                    <td className="space-x-3 space-y-3 w-[400px]">
                                        {
                                            trainer.availableDay.map((dayavail) => <span key={dayavail.value} className="mr-2 btn btn-sm">
                                                {dayavail.label}
                                            </span>)
                                        }
                                    </td>
                                    <td>{trainer.availableTime}</td>
                                    
                                    <th>
                                        <button onClick={() => handleDeleteTrainer(trainer)} className="btn btn-ghost btn-xs">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                                }
                                {/* <AllTrainersDashComp key={trainer._id} trainer={trainer} index={index} handleDeleteTrainer={handleDeleteTrainer}></AllTrainersDashComp> */}
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