import { Link } from "react-router-dom";

const FeaturedClassComp = ({featurClass}) => {
    const {_id, className, classImage, classDetails } = featurClass;

    const descriptionWords = classDetails.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ');
    const truncatedDescription = descriptionWords.length > 15 ? `${shortDescription}` : shortDescription;

    return (
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            {/*  <!--  Image --> */}
            <figure>
            <img
                src={classImage}
                alt="card image"
                className="aspect-video w-full"
            />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6">
            <header className="">
                <h3 className="text-xl font-medium text-slate-700">
                    {className}
                </h3>
                <p className="text-sm text-slate-400"> 
                    {truncatedDescription}<Link to={`/all-classes/${_id}`} className="text-[#F23B3F]"> See details... </Link>
                </p>
            </header>
            </div>
        </div>
    )
}

export default FeaturedClassComp