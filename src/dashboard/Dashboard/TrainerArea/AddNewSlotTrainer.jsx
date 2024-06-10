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
  const [trainerOne] = useTrainerByEmail();
  console.log(trainerOne);
  const {name, email, availableDay} = trainerOne
  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [classes] = useClass();
  console.log(classes);
  console.log(classes.className);
  const uniqueClassNames = [...new Set(classes.map(cls => cls.className))].map(className => ({
    label: className,
    value: className
  }));

  // axiosSecure('/slot')
  // const [trainer, isLoading] = useTrainer()
  
 

  const onSubmit = (data) => {
    console.log(data);
    const {name, email, slotName, slotTime, classes, availableDay } = data;
    const slotTrainer =  {name, email, slotName, slotTime, classes, availableDay };

    axiosSecure.post('/slot', slotTrainer)
    .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
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
                              <span className="label-text capitalize">Trainer name {name}</span>
                            </div>
                            <input type="text" defaultValue={name} readOnly  {...register("name")} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Trainer email</span>
                            </div>
                            <input type="email" defaultValue={email} readOnly  {...register("email")} className="input input-bordered w-full"/>
                        </label>
                      </div>
                      <div className="flex gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Slot name (example: morning slot)</span>
                            </div>
                            <input type="text"  {...register("slotName")} className="input input-bordered w-full capitalize" placeholder="Morning"/>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Slot Time</span>
                            </div>
                            <input type="number"  {...register("slotTime")} className="input input-bordered w-full" placeholder="Slot Time"/>
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

                

               <input type="submit" value="Applied For Be A Trainer" className="btn bg-[#F23B3F] text-white mt-5 w-full" />

              </form>
            </div>
        </div>
    </>
  )
}

export default AddNewSlotTrainer