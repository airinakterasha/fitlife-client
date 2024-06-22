import { Link } from "react-router-dom";

//rating
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

function getRating(rating) {
    switch (rating) {
      case 1:
        return 'Poor';
      case 2:
        return 'Nothing special';
      case 3:
        return 'Average';
      case 4:
        return 'Very good';
      case 5:
        return 'Excellent';
      default:
        return 'None';
    }
}

const DashBookedTrainerComp = ({cartBooked}) => {
    const {user} = useAuth();
    const {_id, trainerName, trainerEmail, trainerImage, trainerClass, availday, slotTimeDuration, packHour, packName, packPrice} = cartBooked;
    // Rating
    const [rating, setRating] = useState(3);
    const [hoveredRating, setHoveredRating] = useState(0);
    const axiosSecure = useAxiosSecure();
    console.log(rating);

    const handleFeedback = (e) => {
        e.preventDefault();
        const form = e.target;
        const feedbackText = form.feedbackText.value;
        console.log(feedbackText);
        const feedbackRating = {
            reviewRating: rating,
            reviewFeedback: feedbackText,
            reviewUser: user?.displayName,
            reviewerMail: user?.email,
            reviewerImage: user?.photoURL,
        }

        axiosSecure.post('/review', feedbackRating)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                console.log('You added review succesfully')
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "review added successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 mt-5 overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
            <div className="col-span-4">
                <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure className="p-6 pb-0">
                    <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                        <img
                        src={trainerImage}
                        alt="user name"
                        title="user name"
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
                        <p className=" text-slate-400">{trainerEmail}</p>
                    </header>
                    </div>
                    {/*  <!-- Action base sized with lead icon buttons  --> */}
                    <Link to={`/all-trainers/${_id}`}>
                        <div className="flex justify-end gap-2 p-6 pt-0">
                            <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                                <span className="order-2 capitalize">See details about the trainer</span>
                                <span className="relative only:-mx-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    role="graphics-symbol"
                                    aria-labelledby="title-06 desc-06"
                                >
                                    <title id="title-06">Icon title</title>
                                    <desc id="desc-06">
                                    A more detailed description of the icon
                                    </desc>
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                    />
                                </svg>
                                </span>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>
            {/* 2nd col start */}
            <div className="col-span-5">
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 flex justify-around">
                    <div className="py-12">
                        <div className="">
                            <p className="font-bold">Classes: </p>
                            {
                                trainerClass.map(trainClass => <p key={trainClass.value} className="">{trainClass.label}</p>)
                            }
                        </div>
                        <div className="">
                            <p className="font-bold">Class Schedule: </p>
                            <div className="">
                                <p>Available day: </p>
                                {
                                    availday.map(availableday => <p key={availableday.value} className="">{availableday.label}</p>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="py-12">
                        <div className="">
                            <p className="font-bold">Class Time: </p>
                            <p className="">{slotTimeDuration}</p>
                        </div>
                        <div className="">
                            <p className="font-bold">Available Slot: </p>
                            <p className="">{packHour}</p>
                        </div>
                        <div className="">
                            <p className="font-bold">Package Name: </p>
                            <p className="">{packName}</p>
                        </div>
                        <div className="">
                            <p className="font-bold">Package Price: </p>
                            <p className="">{packPrice}</p>
                        </div>
                    </div>
                </div>
                
                

            </div>
            {/* 2nd col end */}
            {/* 3rd col start */}
            <div className="col-span-2 flex content-center place-items-center">
                <button 
                    onClick={()=>document.getElementById('my_modal_4').showModal()}
                    className="btn bg-[#F23B3F] text-white mt-5 w-full m-10"
                >
                    Review
                </button>
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Review!</h3>
                    <div className="">
                        <div style={{ maxWidth: 180, width: '100%' }}>
                            <Rating value={rating} onChange={setRating} onHoverChange={setHoveredRating} />
                            <div>
                                <div>{`Selected: ${getRating(rating)}`}</div>
                                <div>{`Hovered: ${getRating(hoveredRating)}`}</div>
                            </div>
                        </div>
                        <form onSubmit={handleFeedback}>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text">Feedback</span>
                                </div>
                                <textarea name="feedbackText" className="textarea textarea-bordered h-24" placeholder="Feedback"></textarea>
                            </label>
                            <input type="submit" value="Submit Reject" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
                </dialog>
            </div>
            {/* 3rd col end */}
        </div>
    )
}

export default DashBookedTrainerComp