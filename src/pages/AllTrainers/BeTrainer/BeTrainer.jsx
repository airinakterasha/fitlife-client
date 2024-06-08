import TitleSection from "../../../components/TitleSection/TitleSection"
import { Controller, useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// react select
import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';

const skillsOptions = [
  { value: 'yoga', label: 'Yoga' },
  { value: 'gym', label: 'Gym' },
  { value: 'vanilla', label: 'Vanilla' }
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
    const {name, email=`${user?.email}`, age, profileImage, skills, role='pending', availableDay, availableTime, status='pending'} = data;
    const beATrainer = {name, email, age, profileImage, skills, role, availableDay, availableTime, status};
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
    

  }

  return (
    <>
        <Helmet>
              <title>FitLife | Be A Trainer</title>
        </Helmet>
        <div className="">
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
                      <input type="text" defaultValue={user?.displayName} {...register("name", { required: !user?.displayName })} placeholder="Your name" className="input input-bordered w-full" />
                      {user?.displayName && errors.name && <p className="text-red-500 capitalize">name required</p>}
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
                  </div>
                  <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Profile Image</span>
                      </div>
                      <input type="text" defaultValue={user?.photoURL} {...register("profileImage", { required: !user?.photoURL })} placeholder="Your age" className="input input-bordered w-full" />
                      {!user?.photoURL && errors.profileImage && <p className="text-red-500 capitalize">Profile Image required</p>}
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
                        <span className="label-text capitalize">Your Available time</span>
                      </div>
                      <input type="text" {...register("availableTime", { required: true })} placeholder="Which time you are available" className="input input-bordered w-full" />
                      {errors.availableTime && <p className="text-red-500 capitalize">time required</p>}
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