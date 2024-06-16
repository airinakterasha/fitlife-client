
import { FaTrashAlt } from "react-icons/fa";


const AllTrainersDashComp = ({trainer, index, handleDeleteTrainer}) => {
    const  {trainerName, age, profileImage, skills,  availableDay, availableTime} = trainer
    
    return (
        <>
            <tr>
                <th>
                    {index + 1}
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={profileImage} />
                        </div>
                        </div>
                        <div>
                        <div className="font-bold">{trainerName}</div>
                        <div className="text-sm opacity-50">{age} years experience</div>
                        </div>
                    </div>
                </td>
                <td className="space-x-3 space-y-3 w-[400px]">
                    {
                        skills.map((skill, index) => <p key={index} className="btn btn-sm">
                            {skill}
                        </p>)
                    }
                </td>
                <td className="space-x-3 space-y-3 w-[400px]">
                    {
                        availableDay.map((dayavail) => <span key={dayavail.value} className="mr-2 btn btn-sm">
                            {dayavail.label}
                        </span>)
                    }
                </td>
                <td>{availableTime}</td>
                
                <th>
                    <button onClick={() => handleDeleteTrainer(trainer)} className="btn btn-ghost btn-xs">
                        <FaTrashAlt></FaTrashAlt>
                    </button>
                </th>
            </tr>
        </>
    )
    }

export default AllTrainersDashComp