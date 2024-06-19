import { Link } from "react-router-dom";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";

const ForumSecSingle = ({forum}) => {
    const {_id, frumAuthor, frumAuthorImage, forumTitle, forumImage, forumDescription, forumCreated, role } = forum;

    const descriptionWords = forumDescription.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ');
    const truncatedDescription = descriptionWords.length > 15 ? `${shortDescription}` : shortDescription;

    return (
        <>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex justify-between">
                        <div className="flex space-x-4">
                            <img alt="" src={frumAuthorImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                            <div className="flex flex-col space-y-1">
                                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{frumAuthor}</a>
                                <span className="text-xs dark:text-gray-600">{forumCreated}</span>
                            </div>
                        </div>
                        <div className="flex text-[#F23B3F]">
                            <div className="m-1 text-xl ">
                                {
                                    role === 'admin' ? <RiPoliceBadgeLine /> : <SlBadge />
                                }
                            </div>
                            <p className="capitalize">{role}</p>
                        </div>
                    </div>
                    <div>
                        <img src={forumImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                        <h2 className="mb-1 text-xl font-semibold">{forumTitle}</h2>
                        <p className="text-sm dark:text-gray-600">
                            {truncatedDescription} <Link to={`/community/${_id}`} className="text-[#F23B3F]">Read More...</Link>
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-between">
                        <div className="space-x-2">
                            <Link to={`/community/${_id}`}>
                                <button aria-label="Share this post" type="button" className="p-2 text-center btn bg-[#F23B3F] text-white">
                                    See Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ForumSecSingle