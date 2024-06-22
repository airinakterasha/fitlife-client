import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Select from 'react-select'
import useClass from "../../../hooks/useClass";
import useTrainerByEmail from "../../../hooks/useTrainerByEmail";
import { Helmet } from "react-helmet-async";
import TitleSection from "../../../components/TitleSection/TitleSection";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";




const AddNewSlotTrainer = () => {
  
  const [trainerOne, loading, refetch] = useTrainerByEmail();
  console.log(loading, refetch);
  console.log(trainerOne);
  const {trainerName, email, availableDay } = trainerOne ;
  
  
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [classes] = useClass();
  console.log(classes);
  //console.log(classes.className);
  // const uniqueClassNames = [...new Set(classes.map(cls => cls.className))].map(className => ({
  //   label: className,
  //   value: className
  // }));

  const uniqueClassNames = [...new Set(classes.map(cls =>  JSON.stringify({classId: cls._id, className: cls.className, })))]
  .map(str => JSON.parse(str))
  .map(cls => ({
    label: cls.className,
    value: cls.classId
  }));


  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
 
  const onSubmit = (data) => {
    console.log(data);

    const slotTrainerInfo = {
      nameTrainer: trainerOne?.trainerName,
      email: trainerOne?.email,
      trainerId: trainerOne?._id,
      trainerImage: trainerOne?.profileImage,
      slotName: data.slotName,
      slotTime: data.slotTime, 
      slotDuration: data.slotDuration,
      classes: data.classes, 
      availableDay: data.availableDay
    }
    console.log(slotTrainerInfo)
   
    axiosSecure.post('/slot', slotTrainerInfo)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your slot added successfully",
            showConfirmButton: false,
            timer: 2500
        });
        navigate('/dashboard/manage-slot')
        
      }
    })
    .catch(error => {
      console.log(error);
    })
    
  }



  return (
    <>
        <Helmet>
              <title>FitLife | Dashboard | Add New Slot</title>
        </Helmet>
        <div className="">
            <div className="mb-10">
                <TitleSection heading={'Add new Slot'} subHeading={'Fill the form to add new slot'}></TitleSection>
            </div>
          
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="p-10">

                {/* slot Information start */}
                <div className="">
                      <div className="flex gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Trainer name </span>
                            </div>
                            <input type="text" defaultValue={trainerName}  {...register('trainerName')} readOnly className="input input-bordered w-full" placeholder="" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Trainer email</span>
                            </div>
                            <input type="email" defaultValue={email} readOnly {...register('email')} className="input input-bordered w-full"/>
                        </label>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Slot name (example: morning slot)</span>
                            </div>
                            <input type="text"  {...register("slotName")} className="input input-bordered w-full capitalize" placeholder="Morning"/>
                            {errors.slotName && <p className="text-red-500 capitalize">Slot name required</p>} 
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Available Slot hour </span>
                            </div>
                            <input type="number"  {...register("slotTime")} className="input input-bordered w-full" placeholder="Slot Time"/>
                            {errors.slotTime && <p className="text-red-500 capitalize">Slot hour required</p>} 
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Slot duration(Example:10am-11am) </span>
                            </div>
                            <input type="text"  {...register("slotDuration")} className="input input-bordered w-full" placeholder="10am - 11am"/>
                            {errors.slotDuration && <p className="text-red-500 capitalize">Slot duration required</p>} 
                        </label>
                      </div>
                </div>
                {/* slot Information end */}
                {/* class Information start */}
                <div className="">
                  <div className="">
                      <div className="">
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Select days</span>
                            </div>
                            <Controller
                                name="availableDay"
                                control={control}
                                defaultValue={[]}
                                rules={{ required: true }}
                                render={({ field }) => (
                                  <Select
                                    {...field}
                                    options={availableDay}   //availableDay trainerOne
                                    isMulti
                                    placeholder='Select Available Day'
                                    isSearchable
                                    autoFocus
                                   />
                                )}
                             />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Select Class</span>
                            </div>
                            <Controller
                                name="classes"
                                control={control}
                                defaultValue={[]}
                                rules={{ required: true }}
                                render={({ field }) => (
                                  <Select
                                    {...field}
                                    options={uniqueClassNames}
                                    isMulti
                                    placeholder='Select Available Class'
                                    isSearchable
                                    autoFocus
                                   />
                                )}
                             />
                        </label>
                      </div>
                  </div>
                </div>
                {/* class Information end */}

                

               <input type="submit" value="Add New Slot" className="btn bg-[#F23B3F] text-white mt-5 w-full" />

              </form>
            </div>
        </div>
    </>
  )
}

export default AddNewSlotTrainer