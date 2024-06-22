import { useEffect, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {Link} from 'react-router-dom'





const AllClassComp = ({singleClass}) => {
    const {_id, classImage, className, classDetails } = singleClass;
    const [trainers, setTrainers] = useState([]);
    //console.log(trainers)
    
    const descriptionWords = classDetails.split(' ');
    const shortDescription = descriptionWords.slice(0, 15).join(' ');
    const truncatedDescription = descriptionWords.length > 15 ? `${shortDescription}` : shortDescription;

    const axiosPublic = useAxiosPublic();
    useEffect(()=>{
        // axios start
        axiosPublic.get('/slot')
        .then(res => {
            //console.log(res.data);
            const slots = res.data;
            const relatedTrainers = slots.filter(slot => slot.classes.some(cls => cls.label === className)).map(slot => {
                console.log(slot);
                return {trainerImage: slot.trainerImage, trainerId:slot.trainerId}
            });

            console.log(relatedTrainers);
            const uniqueTrainers = Array.from(new Set(relatedTrainers)).slice(0, 5);
            setTrainers(uniqueTrainers);
            
        })
        .catch(err => {
            console.log(err);
        })
        // axios end
    },[axiosPublic, className])
    


    return (
        <>
            <div className="">
                <div className=" p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                    <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                        <img src={classImage} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h2 className="text-2xl font-semibold">{className}</h2>
                        </div>
                        <div className="">
                            <span>{truncatedDescription} </span> <Link to={`/all-classes/${_id}`} className="text-[#F23B3F]">...View More</Link>
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold">Relevent Trainers who took this class:</p>
                            <div className="flex flex-col items-start justify-center">
                                <div className="flex space-x-5">
                                    {trainers.length > 0 ? (
                                        trainers.map((trainer, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <Link to={`/all-trainers/${trainer.trainerId}`}>
                                                    <img src={trainer.trainerImage} 
                                                    alt="" 
                                                    className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"/>
                                                </Link>
                                            </div>
                                        ))
                                        ) : (
                                        <p>No trainers available for this class.</p>
                                        )
                                    }
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllClassComp