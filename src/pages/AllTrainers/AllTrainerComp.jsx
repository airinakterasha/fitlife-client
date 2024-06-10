import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

const AllTrainerComp = ({trainer}) => {
    const {name, email, age, profileImage, skills,  availableDay, availableTime, status} = trainer;
    
    return (
        <>
            <div className="">
                {/* trainer card start */}
                <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex items-center justify-between p-3">
                        <div className="flex items-center space-x-2">
                            <div className="-space-y-1">
                                <h2 className="text-sm font-semibold leading-none">{name}</h2>
                                <span className="inline-block text-xs leading-none dark:text-gray-600 capitalize">{age} years experience</span>
                            </div>
                        </div>
                        <button title="Open options" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                                <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                                <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                            </svg>
                        </button>
                    </div>
                    <img src={profileImage} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="p-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <button type="button" title="Like post" className="flex items-center justify-center">
                                    <FaFacebookF />
                                </button>
                                <button type="button" title="Add a comment" className="flex items-center justify-center">
                                    <IoLogoTwitter />
                                </button>
                                <button type="button" title="Share post" className="flex items-center justify-center">
                                    <FaGoogle />
                                </button>
                            </div>
                        </div>
                    </div>
                    <button className="btn bg-[#F23B3F] text-white mt-5">Know More</button>
                </div>
                {/* trainer card end */}
            </div>
        </>
    )
}

export default AllTrainerComp