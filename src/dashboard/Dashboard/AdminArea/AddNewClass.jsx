
import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AddNewClass = () => {
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.log(data);
        data.bookedCount = 0;
        axiosSecure.post('/class', data)
        .then(res=>{
          console.log(res.data)
          if(res.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class has beed added",
                showConfirmButton: false,
                timer: 2500
            });
            navigate('/')
          }
        })
        .catch(err=>{
          console.log(err)
        })
    }

  return (
    <>
        <Helmet>
              <title>FitLife | Add New Class</title>
        </Helmet>
        <div className="">
            <div className="">
              <TitleSection heading={'Add a class'} subHeading={'Fill the from to add class'}></TitleSection>
            </div>
            <div className="">
              <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                  {/*  */}
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Class name</span>
                      </div>
                      <input type="text" {...register("className", { required: true })} placeholder="Class name" className="input input-bordered w-full" />
                      { errors.className && <p className="text-red-500 capitalize">Class name required</p>}
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Class Image</span>
                      </div>
                      <input type="text" {...register("classImage", { required: true })} placeholder="Class image" className="input input-bordered w-full" />
                      { errors.classImage && <p className="text-red-500 capitalize">Class Image required</p>}
                    </label>
                    <label className="form-control w-full">
                      <div className="label">
                        <span className="label-text capitalize">Class Details</span>
                      </div>
                      <input type="text" {...register("classDetails", { required: true })} placeholder="Class details" className="input input-bordered w-full" />
                      { errors.classDetails && <p className="text-red-500 capitalize">Class Image required</p>}
                    </label>
                    <input type="submit" value="Add Class" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                  
                  {/*  */}
                </form>
              </div>
            </div>
        </div>
    </>
  )
}

export default AddNewClass