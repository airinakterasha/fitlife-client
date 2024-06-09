import { useForm, Controller } from "react-hook-form";
import TitleSection from "../../../components/TitleSection/TitleSection"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTrainer from "../../../hooks/useTrainer";
import useClass from "../../../hooks/useClass";
import Select from 'react-select'


const AddNewSlot = () => {
  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();

  const [betrainer] = useTrainer();
  const {_id, name, email, age, profileImage, skills, role, availableDay, availableTime, status} = betrainer;

  const [classes] = useClass();
  // console.log(betrainer);
  // console.log(classes);
  

  const onSubmit = (data) => {
    const slotData = {
      ...data,
      trainerId: _id,
    };

    axiosSecure.post('/slot', slotData)
    .then(res => {
      console.log(res.data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <>
        <div className="">
            <div className="">
              <div className="">
                <TitleSection heading={'Add New Slot'} subHeading={'Fill the form to add new slot'}></TitleSection>
              </div>
              <div className="">
                {/* trainer Information */}
                <div className="">
                  <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                    {/*  */}
                    <div className="flex gap-5">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Full name</span>
                        </div>
                        <input type="text" defaultValue={name} {...register("name")} className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Email</span>
                        </div>
                        <input type="email" defaultValue={email} disabled {...register("email")} placeholder="email address" className="input input-bordered w-full" />
                      </label>
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Age</span>
                        </div>
                        <input type="number" defaultValue={age} readOnly {...register("age")} placeholder="Your age" className="input input-bordered w-full" />
                      </label>
                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Profile Image</span>
                        </div>
                        <input type="text" defaultValue={profileImage} {...register("profileImage")} placeholder="Your age" className="input input-bordered w-full" />
                    </label>

                  

                    <div className="flex gap-5">

                      {/* react select */}
                      <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text capitalize">Skills</span>
                          </div>
                          {/* {
                            skillsOptions.map((skill) => (
                              <div key={skill.value} className="flex items-center">
                                <input type="checkbox" value={skill.value} {...register("skills", { required: true })} className="mr-2" />
                                <label>{skill.label}</label>
                              </div>
                            ))
                          } */}


                      </label>

                      <label className="form-control w-full">
                          <div className="label">
                            <span className="label-text capitalize">Available Day</span>
                          </div>
                          {/* <Controller
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
                          /> */}
                      </label>
                      {/* react select */}

                    </div>
                    <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text capitalize">Your Available time</span>
                        </div>
                        <input type="text" defaultValue={profileImage} {...register("availableTime")} className="input input-bordered w-full" />
                    </label>
                    
                    <input type="submit" value="Applied For Be A Trainer" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                    
                    {/*  */}
                  </form>
                  
                </div>
                {/* trainer Information end */}
                <hr/>
              </div>
            </div>
        </div>
    </>
  )
}

export default AddNewSlot