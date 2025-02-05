import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiPoliceBadgeLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CommunityComp = ({forum, refetch}) => {
    const {_id, frumAuthor, frumAuthorImage, forumTitle, forumImage, forumDescription, role, forumCreated, upVote, downVote } = forum;

    const descriptionWords = forumDescription.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ');
    const truncatedDescription = descriptionWords.length > 15 ? `${shortDescription}` : shortDescription;
    const axiosSecure = useAxiosSecure()

    const handleVotingUpdate = (vote) => {
        axiosSecure.patch(`/voting/${_id}`, {vote})
        .then(res => {
            console.log(res, 'voting');
            refetch();  
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your voting added successfully",
                showConfirmButton: false,
                timer: 2500
            });          
        })
        .catch(err =>{
            console.log(err);
        })


    }

    return (
        <>
            
                <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row p-10 md:p-0">
                    {/*  <!-- Image --> */}
                    <figure className="flex-1">
                        <Link to={`/community/${_id}`}>
                            <img
                                src={forumImage}
                                alt="card image"
                                className="object-cover min-h-full aspect-auto"
                            />
                        </Link>
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="flex-1 p-6">
                        <header className="flex justify-between">
                            <div className="flex gap-4">
                                <a
                                href="#"
                                className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                                >
                                <img
                                    src={ frumAuthorImage}
                                    alt={frumAuthor}
                                    title={frumAuthor}
                                    width="48"
                                    height="48"
                                    className="max-w-full rounded-full"
                                />
                                </a>
                                <div>
                                    <h3 className="text-xl font-medium text-slate-700">
                                        {frumAuthor}
                                    </h3>
                                    <p className="text-sm text-slate-400"> {forumCreated}</p>
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
                            
                            
                        </header>
                        <div className="mt-5">
                            <h2 className="text-xl font-bold"><Link to={`/community/${_id}`}>{forumTitle}</Link></h2>
                            <p className="">
                                {truncatedDescription} <Link to={`/community/${_id}`} className="text-[#F23B3F]">See details .... </Link>
                            </p>
                        </div>
                        <div className="flex justify-around mt-5">
                            <div className="">
                                <button 
                                onClick={() =>handleVotingUpdate("upvote")}
                                className="btn bg-emerald-500 text-white"> Up-vote {upVote}</button>
    
                            </div>
                            <div className="">
                                <button 
                                onClick={() =>handleVotingUpdate("downvote")}
                                className="btn bg-emerald-500 text-white">Down-vote {downVote}</button>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CommunityComp