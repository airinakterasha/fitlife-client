import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Subscribe = () => {
  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    const subsInfo = {
      subsName : data.subscriberName,
      subsEmail: data.subscriberEmail
    }

    axiosPublic.post('/subscribe', subsInfo)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        console.log('User profile info updated to database')
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "You completed the subscription successfully",
            showConfirmButton: false,
            timer: 2500
        });
        navigate('/')
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <>
        <div className="">
            <div className="hero " style={{backgroundImage: 'url(https://images.pexels.com/photos/4056726/pexels-photo-4056726.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="py-20">
                      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex text-black">
                          <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                            <input type="text"  {...register("subscriberName", { required: true })} placeholder="Your name" className="grow bg-transparent" />
                            { errors.subscriberName && <p className="text-red-500 capitalize">name is required</p>}
                          </label>
                          <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input type="email"  {...register("subscriberEmail", { required: true })} placeholder="Your email" className="grow " />
                            { errors.subscriberEmail && <p className="text-red-500 capitalize">name is required</p>}
                          </label>
                          <input type="submit" value="Subscribe Now" className="btn bg-[#F23B3F] text-white border-none"/>
                        </div>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Subscribe