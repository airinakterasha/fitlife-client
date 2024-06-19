import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom"
import TitleSection from "../../components/TitleSection/TitleSection";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";



const TrainerDetails = () => {
  const [trainerSlot, setTrainerSlot] = useState([]);
  const [slotTotal, setSlotTotal] = useState(0);
  const detailsTrainer = useLoaderData();
  const {trainerName, email, age, experience, profileImage, trainerDetails, skills} = detailsTrainer;
  console.log(skills);
  console.log(detailsTrainer);
  const axiosPublic = useAxiosPublic();


  useEffect(() => {
    axiosPublic.get(`/trainerlot/${email}`)
    .then(res=>{
      console.log(res.data);
      const data = res.data;
      setTrainerSlot(data);
      console.log(data, 'inside');
      // const {slotName, slotTime} = data
      // console.log(slotName, 'inside data');

      const slotTotalCount = data.reduce((slotingTime,item) => slotingTime + parseInt(item.slotTime), 0);
      console.log(slotTotalCount, 'slottime');
      setSlotTotal(slotTotalCount);

    })
    .catch(error =>{
      console.log(error);
    })
  }, [axiosPublic, email])


  
  
  return (
    <>
        <Helmet>
              <title>FitLife | about {trainerName}</title>
        </Helmet>
        <div className="container mx-auto">
            <div className="pt-10">
              <TitleSection heading={`About ${trainerName}`} subHeading={`know details about our trainer`}></TitleSection>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="col-span-7 md:px-20">
                {/* Trainer Information */}
                <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                  {/*  <!-- Image --> */}
                  <figure>
                    <img
                      src={profileImage}
                      alt="card image"
                      className="aspect-video w-full p-10"
                    />
                  </figure>
                  {/*  <!-- Body--> */}
                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-700">
                        {trainerName}
                      </h3>
                      <p className="text-sm text-slate-400"> {email}</p>
                      <p className="text-sm text-slate-400"> {age} years old</p>
                      <p className="text-sm text-slate-400"> {experience} years experience</p>
                    </header>

                    <p> 
                      <span className="font-bold capitalize">Details : </span>
                      {trainerDetails}.
                    </p>
                    <div className="">

                      <div className="space-x-3">
                        <span className="font-bold capitalize">Expertise: </span>
                        {
                          skills.map((skill, index) => <p key={index} 
                          className=" my-1 inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none"
                          >
                            {skill}
                          </p>)
                        }
                      </div>
                    </div>
                    {/* be a trainer */}
                    <div className="">
                      <Link to='/be-a-trainer'>
                        <button className="btn bg-[#F23B3F] text-white mt-5"> Be A Trainer</button>
                      </Link>
                    </div>
                    {/* be a trainer */}
                  </div>
                </div>
                {/* Trainer Information end */}
              </div>
              {/* Trainer Information end */}
              {/* slot Information start */}
              <div className="col-span-5">
                <div className="pt-10">
                  <span className="font-bold">Slot details:</span>
                </div>
                
                {/* slot details will here */}
                {
                      trainerSlot.map(slotTrainer => <div key={slotTrainer._id} className="">

                        <div className="space-y-5 my-10">
                          <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                            <header className="mb-4 space-y-2 ps-10 py-5">
                              <h3 className="text-xl font-medium text-slate-700">
                                <span>Classes: </span>
                                {
                                  slotTrainer.classes.map((slotClass, index) => <span key={index}>{slotClass.label} || </span>)
                                }
                              </h3>
                              <p className=" text-slate-400"> 
                                <span>Available Day: </span>
                                {
                                  slotTrainer.availableDay.map((slotDay, index) => <span key={index}>{slotDay.label}, </span>)
                                }
                              </p>
                              <div className="">
                                <Link to={`/booked-trainers/${slotTrainer._id}`}>
                                  <button
                                  className="capitalize inline-flex h-10 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
                                  >
                                    Available Slot: {slotTrainer.slotName} - {slotTrainer.slotDuration} - {slotTrainer.slotTime} Slots.
                                  </button>
                                </Link>
                              </div>
                            </header>
                          </div>
                        </div>
                          
                      </div>)
                }
                <div className="space-y-5 my-10">
                  <div className="ps-10">
                    <h3 className="capitalize">Available total slot: {slotTotal}</h3>
                  </div>
                  {/* <div className="">{slotTotal}</div> */}
                </div>
                <div className="ps-10">
                  <p>Want to become a trainer?</p>
                  <Link to='/be-a-trainer'>
                    <button className="btn bg-[#F23B3F] text-white mt-5 w-full"> Be A Trainer</button>
                  </Link>
                </div>
                

                {/* end */}
              </div>
              {/* slot Information end */}
            </div>
        </div>
    </>
  )
}

export default TrainerDetails