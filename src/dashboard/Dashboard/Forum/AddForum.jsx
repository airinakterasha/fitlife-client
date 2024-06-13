import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import TitleSection from "../../../components/TitleSection/TitleSection";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const AddForum = () => {
    const {user} = useAuth();
    console.log(user);
    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure();

    const onSubmit = (data) => {
        console.log(data);
        const forumInfo = {
            frumAuthor:user?.displayName, 
            frumAuthorImage:user?.photoURL, 
            forumEmail:user?.email,
            forumTitle: data.forumTitle,
            forumImage: data.forumImage,
            forumDescription: data.forumDesc,
            forumCreated: new Date()
        }

        axiosSecure.post('/forum', forumInfo)
        .then((res)=>{
        console.log(res.data);
        if(res.data.insertedId){
            console.log('posted forum successfully')
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You posted forum successfully",
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
                    <title>FitLife | Add New Forum</title>
            </Helmet>
            <div className="">
                <div className="">
                    <TitleSection heading={'Add new forum'} subHeading={'Be part of our community'}></TitleSection>
                </div>
                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text capitalize">Forum title</span>
                            </div>
                            <input type="text"  {...register("forumTitle", { required: true })} placeholder="Forum title" className="input input-bordered w-full" />
                            { errors.forumTitle && <p className="text-red-500 capitalize">Forum title required</p>}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text capitalize">Forum Image</span>
                            </div>
                            <input type="text"  {...register("forumImage", { required: true })} placeholder="Forum Image" className="input input-bordered w-full" />
                            { errors.forumImage && <p className="text-red-500 capitalize">Forum forumImage required</p>}
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text capitalize">Forum Description</span>
                            </div>
                            <input type="text"  {...register("forumDesc", { required: true })} placeholder="Forum Description" className="input input-bordered w-full" />
                            { errors.forumDesc && <p className="text-red-500 capitalize">Forum description required</p>}
                        </label>
                        <input type="submit" value="Add Forum" className="btn bg-[#F23B3F] text-white mt-5 w-full" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddForum