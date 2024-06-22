import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom"
import TitleSection from "../../components/TitleSection/TitleSection";


const ClassDetails = () => {
    const singleClass = useLoaderData();
    console.log(singleClass);
    const {classImage, className, classDetails } = singleClass;
    return (
        <>
            <Helmet>
                <title>FitLife | Class details</title>
            </Helmet>
            <div className="">
              <TitleSection heading={className} subHeading={'class details'}></TitleSection>
            </div>
            <div className="container mx-auto my-10 p-10">
                <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
                    {/*  <!-- Image --> */}
                    <figure className="flex-1">
                    <img
                        src={classImage}
                        alt="card image"
                        className="object-cover w-full min-h-full aspect-auto"
                    />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="flex-1 p-6 sm:mx-6 sm:px-0">
                        <header className="flex gap-4 mb-4">
                            <div>
                                <h3 className="text-xl font-medium text-slate-700">
                                    {className}
                                </h3>
                            </div>
                        </header>
                        <p>
                            {classDetails}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClassDetails