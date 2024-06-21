import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
//import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserSingle from "../../../hooks/useUserSingle";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Profile = () => {
    const {user, updateUserProfile} = useAuth();
    const {singleuser} = useUserSingle();
    console.log(singleuser);
    console.log(user);
    const navigate = useNavigate();

    const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
    //const axiosSecure = useAxiosSecure();


    const onSubmit = (data) => {
        console.log(data);
        updateUserProfile(data.NameTrainer, data.profileImage)
        .then(() => {
          toast('You updated your profile successfully');
          navigate('/')
        })
        .catch(()=>{
            toast('Your profile is not updated');
        }) 
    }
  return (
    <>
        <div className="">
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="p-10">
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
                        <span className="label-text capitalize">Last Login time</span>
                      </div>
                      <input type="text" defaultValue={user?.metadata.lastSignInTime} disabled {...register("lastLogin", { required: !user?.metadata.lastSignInTime })}  className="input input-bordered w-full" />
                      {!user?.metadata.lastSignInTime && errors.lastLogin && <p className="text-red-500 capitalize">Profile Image required</p>}
                    </label>
                    
                    <input type="submit" value="Update Profile" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                </form>
            </div>
        </div>
    </>
  )
}

export default Profile