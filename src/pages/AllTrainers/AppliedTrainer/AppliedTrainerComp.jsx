import { RiPassPendingFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { TbPlayerEjectFilled } from "react-icons/tb";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AppliedTrainerComp = ({trainer}) => {
    const {_id, name, email, age, profileImage, skill, dayName, availableTime} = trainer;
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const handleConfirm = () => {
        axiosSecure.get(`/betrainer/${_id}`)
        .then((response)=>{
            console.log(response.data);
            console.log(response.data.status);
            axiosSecure.patch(`/betrainer/${_id}`)
            .then(res => {
                console.log(res, 'update');
                if(res.data.modifiedCount > 0){
                    console.log('User profile info updated to database')
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} approved as a trainer`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/applied-trainer')
                }
            
            })
            .catch()
        })
        .catch ((error)=> {
            console.error("Failed to update trainer status:", error);
        })
    };

    // const handleReject = () => {
    //     ///delete function will here.
    // }


    return (
        <>
            <div className="">
                <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                    <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                        {
                            profileImage ? <img
                            src={profileImage}
                            alt="user name"
                            title="user name"
                            width="80"
                            height="80"
                            className="max-w-full rounded-full"
                            /> : <img
                            src="https://p.kindpng.com/picc/s/24-248600_contact-profile-user-default-female-suit-comments-female.png"
                            alt="user name"
                            title="user name"
                            width="80"
                            height="80"
                            className="max-w-full rounded-full"
                            />
                        }
                        
                    </span>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                            {name}
                        </h3>
                        <p className=" text-slate-400">Pending for Trainer</p>
                    </header>
                    </div>
                    {/*  <!-- Action base sized with lead icon buttons  --> */}
                    <div className="flex justify-end gap-2 p-6 pt-0">
                    <button 
                    // onClick={()=>document.getElementById('my_modal_3').showModal()}
                    onClick={()=>document.getElementById(_id).showModal()}
                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                        <span className="order-2">Pending Action</span>
                        <span className="relative only:-mx-5">
                            <FaEye></FaEye>                        
                        </span>
                    </button>
                    <dialog id={_id} className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className="">
                                <img src={profileImage} className="w-24 h-20" alt="" />
                                <h2 className="font-bold text-xl">{name}</h2>
                                <h3 className="font-bold text-md">{email}</h3>
                                <div className="flex justify-around my-4">
                                    <div className="text-start space-y-2">
                                        <p className="capitalize"><span className="font-bold">Available day:</span> {dayName}</p>
                                        <p className="capitalize"><span className="font-bold">Available Time:</span> {availableTime}</p>
                                    </div>
                                    <div className="text-start  space-y-2">
                                        <p className="capitalize"><span className="font-bold">Skill:</span> {skill} years</p>
                                        <p className="capitalize"><span className="font-bold">Age:</span> {age} years</p>
                                    </div>
                                </div>
                                <div className="space-x-5">
                                    <button 
                                    onClick={handleConfirm}
                                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                        <span className="order-2">Confirm</span>
                                        <span className="relative only:-mx-5">
                                            <RiPassPendingFill></RiPassPendingFill>
                                        </span>
                                    </button>
                                    <button 
                                    className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                                        <span className="order-2">Reject</span>
                                        <span className="relative only:-mx-5">
                                            <TbPlayerEjectFilled></TbPlayerEjectFilled>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </dialog>
                    
                    </div>
                </div>
                {/*<!-- End User profile card --> */}
            </div>
        </>
    )
}

export default AppliedTrainerComp