import { Helmet } from "react-helmet-async"
import TitleSection from "../../components/TitleSection/TitleSection"
import { useLoaderData } from "react-router-dom";


const CommunityDetails = () => {
    const forumDetails = useLoaderData();
    const {frumAuthor, frumAuthorImage, forumTitle, forumImage, forumDescription, forumCreated } = forumDetails;

    return (
        <>
            <Helmet>
                <title>FitLife | {forumTitle} </title>
            </Helmet>
            <div className="">
                <div className="">
                    <div className="">
                        <TitleSection heading={"forum details"} subHeading={`By ${frumAuthor}`}></TitleSection>
                    </div>
                    <div className="p-10">
                        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
                            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                                <div className="space-y-6">
                                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{forumTitle}</h1>
                                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                                        <div className="flex items-center gap-5">
                                            <img src={frumAuthorImage} alt="" className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
                                            <div className="">
                                                <p className="text-sm">{frumAuthor}</p>
                                                <p className="text-sm">{forumCreated}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="dark:text-gray-800">
                                    <p>{forumDescription}</p>
                                    <br />
                                    <div className="">
                                        <img 
                                            src={forumImage} 
                                            alt="" 
                                        />
                                    </div> 
                                    <br />
                                    
                                </div>
                            </article>
                     
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityDetails