import TitleSection from "../../../components/TitleSection/TitleSection"
import { useForm } from "react-hook-form"
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async"

const BeTrainer = () => {
  const {user} = useAuth();
  console.log(user);
  const {register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const {name, email, age, profileImage, skill, role='trainer', dayName, availableTime, status='pending'} = data;
    const beATrainer = {name, email, age, profileImage, skill, role, dayName, availableTime, status};
    console.log(beATrainer);
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
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Select your skill</span>
                      </div>
                      <select defaultValue='default' {...register("skill" , { required: true })} className="select select-bordered">
                      <option disabled value='default'>Select A Skill</option>
                        <option value="salad">Salad</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                      </select>
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text">Pick the day suitable for you</span>
                      </div>
                      <select defaultValue='default' {...register("dayName" , { required: true })} className="select select-bordered">
                      <option disabled value='default'>Pick A Day</option>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                      </select>
                    </label>
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