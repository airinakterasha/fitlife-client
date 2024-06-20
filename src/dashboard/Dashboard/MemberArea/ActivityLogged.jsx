import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import useTrainerByEmail from "../../../hooks/useTrainerByEmail"
import { IoIosEye } from "react-icons/io";


const ActivityLogged = () => {
    const [trainerOne] = useTrainerByEmail();
    console.log(trainerOne);
    const {trainerName, email, profileImage, role, status, feedback} = trainerOne;

    return (
        <>
            <Helmet>
                <title>FitLife | Activity Log</title>
            </Helmet>
            <div className="">
                <div className="">
                <TitleSection heading={'Activity Logged page'} subHeading={'your activity'}></TitleSection>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200 mt-14">
                        {/*  <!-- Image --> */}
                        <figure className="p-6 pb-0">
                            <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                                <img
                                src={profileImage}
                                alt={trainerName}
                                title={trainerName}
                                width="80"
                                height="80"
                                className="max-w-full rounded-full"
                                />
                            </span>
                        </figure>
                        {/*  <!-- Body--> */}
                        <div className="p-6">
                        <header className="mb-4">
                            <h3 className="text-xl font-medium text-slate-700">
                                {trainerName}
                            </h3>
                            <p className=" text-slate-400">{role}</p>
                            <h3 className="text-xl font-medium text-slate-700 capitalize">
                                Status: You are <span className="text-[#F23B3F]">{status}</span>
                            </h3>
                        </header>
                        </div>
                        {/*  <!-- Action base sized with lead icon buttons  --> */}
                        <div className="flex justify-end gap-2 p-6 pt-0">
                            <button 
                                onClick={()=>document.getElementById('my_modal_7').showModal()}
                                className="btn inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                            >
                                <span className="order-2">See activity</span>
                                <span className="relative only:-mx-5 text-2xl">
                                    <IoIosEye />
                                </span>
                            </button>
                            <dialog id="my_modal_7" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <div className="">
                                        <h3 className="font-bold text-lg">Feedback :</h3>
                                        {
                                            feedback ? <h3 className="font-bold text-lg">
                                                {feedback}
                                            </h3> : <h3 className="font-bold text-lg">
                                                No feedback yet!
                                            </h3>
                                        }
                                        
                                    </div>
                                    
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityLogged