import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const TeamSingle = ({team}) => {
    const {_id, trainerName, email, age, experience, profileImage, trainerDetails, skills, role, availableDay, availableTimeSlot, status} = team;
    const descriptionWords = trainerDetails.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ');
    const truncatedDescription = descriptionWords.length > 15 ? `${shortDescription}` : shortDescription;
    return (
        <>
            <div className="">
                <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={profileImage} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold">{trainerName}</h2>
            
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-600">{email}</span>
                            </span>
                            <div className="flex items-center space-x-2 text-xl pt-3">
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaTwitter /></a>
                                <a href=""><FaInstagramSquare /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 lg:px-1">
                    <div className="">
                        <p className="font-bold">Expertise Area: </p>
                        <p className="font-medium text-slate-700">
                            <span>Classes: </span>
                            {
                                skills.map((skill, index) => <span key={index}>{skill} || </span>)
                            }
                        </p>
                    </div>
                    <div className="mt-2">
                        <p><span className="font-bold">Brief biography: </span>{truncatedDescription}</p> <Link to={`/all-trainers/${_id}`} className="text-[#F23B3F]">More Details...</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamSingle