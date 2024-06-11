import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom"
import TitleSection from "../../components/TitleSection/TitleSection";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";



const TrainerDetails = () => {
  const [trainerSlot, setTrainerSlot] = useState([]);
  const detailsTrainer = useLoaderData();
  const {name, email, age, profileImage, trainerDetails, skills, role, availableDay, availableTime, status} = detailsTrainer;
  console.log(skills);
  console.log(detailsTrainer);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get(`http://localhost:5555/trainerlot/${email}`)
    .then(res=>{
      console.log(res.data);
      const data = res.data;
      setTrainerSlot(data);
      console.log(data, 'inside');
      // const {slotName, slotTime} = data
      // console.log(slotName, 'inside data');

    })
    .catch(error =>{
      console.log(error);
    })
  }, [email])


  
  
  return (
    <>
        <Helmet>
              <title>FitLife | about {name}</title>
        </Helmet>
        <div className="container mx-auto">
            <div className="py-10">
              <TitleSection heading={`About ${name}`} subHeading={`know details about our trainer`}></TitleSection>
            </div>
            <div className="grid grid-cols-12">
              <div className="col-span-7 md:px-20">
                {/* Trainer Information */}
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                  {/*  <!-- Image --> */}
                  <figure>
                    <img
                      src={profileImage}
                      alt="card image"
                      className="aspect-video w-full"
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-700">
                        {name}
                      </h3>
                      <p className="text-sm text-slate-400"> {email}</p>
                      <p className="text-sm text-slate-400"> {age} years experience</p>
                    </header>
                    <div className="">

                      <p className="space-x-3">
                        <span className="font-bold capitalize">Expertise: </span>
                        {
                          skills.map((skill, index) => <span key={index} className="btn btn-sm bg-[#F23B3F] text-white rounded-3 ">{skill}</span>)
                        }
                      </p>
                    </div>
                    <p> 
                      <span className="font-bold capitalize">Details : </span>
                      {trainerDetails}.
                    </p>
                  </div>
                </div>
                {/* Trainer Information end */}
              </div>
              <div className="col-span-5">
                Slot details
                {/* slot details will here */}
                <div className="bg-green-500">
                  {
                    trainerSlot.map(slotTrainer => <div key={slotTrainer._id} className="">
                      <p>{slotTrainer.slotName}</p>
                      <p>{slotTrainer.slotTime}</p>
                      <p>
                        {
                          slotTrainer.classes.map((slotClass, index) => <span key={index}>{slotClass.label}</span>)
                        }
                      </p>
                      <p>
                        {
                          slotTrainer.availableDay.map((slotDay, index) => <span key={index}>{slotDay.label}</span>)
                        }
                      </p>
                      
                    </div>)
                  }
                  
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default TrainerDetails