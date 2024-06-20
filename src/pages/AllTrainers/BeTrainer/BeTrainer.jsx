import TitleSection from "../../../components/TitleSection/TitleSection"
import { Controller, useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// react select
import Select from 'react-select'

const skillsOptions = [
  { value: 'yoga', label: 'Yoga' },
  { value: 'gym', label: 'Gym' },
  { value: 'box class', label: 'Box Class' },
  { value: 'dance cardio', label: 'Dance Cardio' },
  { value: 'strength training workshop', label: 'Strength Training Workshop' },
  { value: 'cardio tone', label: 'Cardio Tone' },
  { value: 'trampoline', label: 'Trampoline' },
  { value: 'tone', label: 'Tone' },
  { value: 'low impact cardio', label: 'Low Impact Cardio' },
];

const availableDay = [
  { value: 'saturday', label: 'Saturday' },
  { value: 'sunday', label: 'Sunday' },
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
]


const BeTrainer = () => {
  const {user} = useAuth();
  console.log(user);
  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()
  const onSubmit = (data) => {
    console.log(data);
    const {trainerName=(data.NameTrainer ? data.NameTrainer : user?.displayName), email=`${user?.email}`, age, experience, profileImage, trainerDetails, skills, role='pending', availableDay, availableTimeSlot, status='pending', feedback=''} = data;
    const beATrainer = {trainerName, email, age, experience, profileImage, trainerDetails, skills, role, availableDay, availableTimeSlot, status, feedback};
    console.log(beATrainer);

    axiosSecure.post('/betrainer', beATrainer)
    .then((res)=>{
      console.log(res.data);
      if(res.data.insertedId){
        console.log('User profile info updated to database')
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You submition is pending. Please wait for a while for approved by admin",
            showConfirmButton: false,
            timer: 2500
        });
        navigate('/')

    }
    // if end
    })
    .catch(errors=> {
      console.log(errors);
    })
    

  }

  return (
    <>
        <Helmet>
              <title>FitLife | Be A Trainer</title>
        </Helmet>
        <div className="container mx-auto">
            <div className="">
              <TitleSection heading={'Be a trainer'} subHeading={'If train your passion'}></TitleSection>
            </div>
            <div className="">
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                  {/*  */}
                  <div className="flex gap-5">
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Full name</span>
                      </div>
                      <input type="text" defaultValue={user?.displayName} {...register("NameTrainer", { required: !user?.displayName })} placeholder="Your name" className="input input-bordered w-full" />
                      {user?.displayName && errors.NameTrainer && <p className="text-red-500 capitalize">name required</p>}
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Email</span>
                      </div>
                      <input type="email" defaultValue={user?.email} disabled {...register("email", { required: !user?.email })} placeholder="email address" className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Age</span>
                      </div>
                      <input type="number" {...register("age", { required: true })} placeholder="Your age" className="input input-bordered w-full" />
                      {errors.age && <p className="text-red-500 capitalize">age required</p>}
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">years of Experience</span>
                      </div>
                      <input type="number" {...register("experience", { required: true })} placeholder="Your years of experience" className="input input-bordered w-full" />
                      {errors.experience && <p className="text-red-500 capitalize">years experience is required</p>}
                    </label>
                  </div>
                  <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Profile Image</span>
                      </div>
                      <input type="text" defaultValue={user?.photoURL} {...register("profileImage", { required: !user?.photoURL })} placeholder="Years of experience" className="input input-bordered w-full" />
                      {!user?.photoURL && errors.profileImage && <p className="text-red-500 capitalize">Profile Image required</p>}
                  </label>
                  <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">details about yourself</span>
                      </div>
                      <input type="text" {...register("trainerDetails", { required: true })} placeholder="write a little more about yourself" className="input input-bordered w-full"  />
                      {errors.trainerDetails && <p className="text-red-500 capitalize">trainer Details required</p>}
                  </label>

                 

                  <div className="flex gap-5">

                     {/* react select */}
                     <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Skills</span>
                        </div>
                        {
                          skillsOptions.map((skill) => (
                            <div key={skill.value} className="flex items-center">
                              <input type="checkbox" value={skill.value} {...register("skills", { required: true })} className="mr-2" />
                              <label>{skill.label}</label>
                            </div>
                          ))
                        }
                        {errors.skills && <p className="text-red-500 capitalize">Skills required</p>}


                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Available Day</span>
                        </div>
                        <Controller
                          name="availableDay"
                          control={control}
                          defaultValue={[]}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={availableDay}
                              isMulti
                              placeholder='Select Available Day'
                              isSearchable
                              autoFocus
                            />
                          )}
                        />
                    </label>
                    {/* react select */}

                  </div>
                  <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Your Available time Slot</span>
                      </div>
                      <input type="text" {...register("availableTimeSlot", { required: true })} placeholder="Which time you are available" className="input input-bordered w-full" />
                      {errors.availableTimeSlot && <p className="text-red-500 capitalize">Available time slot is required</p>}
                  </label>
                  
                  <input type="submit" value="Applied For Be A Trainer" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                  
                  {/*  */}
                </form>
              </div>
            </div>
        </div>
    </>
  )
}

export default BeTrainer