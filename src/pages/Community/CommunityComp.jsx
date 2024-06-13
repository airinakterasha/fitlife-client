

const CommunityComp = ({forum}) => {
    const { frumAuthor, frumAuthorImage, forumTitle, forumImage, forumDescription, forumCreated } = forum;

    const descriptionWords = forumDescription.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ');
    const truncatedDescription = descriptionWords.length > 15 ? `${shortDescription}...` : shortDescription;

    return (
        <>
            <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                {/*  <!-- Image --> */}
                <figure className="flex-1">
                <img
                    src={forumImage}
                    alt="card image"
                    className="object-cover min-h-full aspect-auto"
                />
                </figure>
                {/*  <!-- Body--> */}
                <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                    <header className="flex gap-4 mb-4">
                        <a
                        href="#"
                        className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                        >
                        <img
                            src={frumAuthorImage}
                            alt={frumAuthor}
                            title={frumAuthor}
                            width="48"
                            height="48"
                            className="max-w-full rounded-full"
                        />
                        </a>
                        <div>
                            <h3 className="text-xl font-medium text-slate-700">
                                {forumTitle}
                            </h3>
                            <p className="text-sm text-slate-400"> {forumCreated}</p>
                        </div>
                        
                    </header>
                    <p className="mt-8">
                        {truncatedDescription}
                    </p>
                    <div className="flex justify-around mt-2">
                        <div className="">
                            <button> up-vote</button>
                        </div>
                        <div className="">
                            <button>  down-vote</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityComp