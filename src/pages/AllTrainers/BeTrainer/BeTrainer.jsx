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
    //data.status = beTrainer
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
                      <input type="email" defaultValue={user?.email} {...register("email", { required: !user?.email })} placeholder="email address" className="input input-bordered w-full" />
                      {!user?.email && errors.email && <p className="text-red-500 capitalize">email required</p>}
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
                  <label className="form-control w-full">
                    <div className="label">
                      <span className="label-text">Pick the best fantasy franchise</span>
                    </div>
                    <select defaultValue='default' {...register("skill" , { required: true })} className="select select-bordered">
                    <option disabled value='default'>Select a Skill</option>
                      <option value="salad">Salad</option>
                      <option>Star Wars</option>
                      <option>Harry Potter</option>
                      <option>Lord of the Rings</option>
                      <option>Planet of the Apes</option>
                      <option>Star Trek</option>
                    </select>
                  </label>
                  <input type="submit" value="Be A Trainer" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                  
                  {/*  */}
                </form>
              </div>
            </div>
        </div>
    </>
  )
}

export default BeTrainer