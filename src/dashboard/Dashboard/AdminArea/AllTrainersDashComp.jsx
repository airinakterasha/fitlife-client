

const AllTrainersDashComp = ({trainer, index}) => {
    const  {trainerName, email, age, profileImage, trainerDetails, skills, role, availableDay, availableTime, status} = trainer
  return (
    <>
        <tr>
            <th>
                {index +1}
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
            <td>
                {
                    skills.map((skill, index) => <span key={index} className="mr-2 btn btn-sm">
                        {skill}
                    </span>)
                }
            </td>
            <td>{availableDay}</td>
            <td>{availableTime}</td>
            <th>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    </>
  )
}

export default AllTrainersDashComp