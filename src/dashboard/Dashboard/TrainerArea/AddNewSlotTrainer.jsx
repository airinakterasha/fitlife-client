import { Controller, useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Select from 'react-select'
import useClass from "../../../hooks/useClass";
import useTrainerByEmail from "../../../hooks/useTrainerByEmail";



const AddNewSlotTrainer = () => {
  const [trainerOne] = useTrainerByEmail();
  console.log(trainerOne);
  const {availableDay} = trainerOne
  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();

  const [classes] = useClass();
  console.log(classes);
  console.log(classes.className);
  const {_id} = classes;
  const uniqueClassNames = [...new Set(classes.map(cls => cls.className))].map(className => ({
    label: className,
    value: className
  }));

  // axiosSecure('/slot')
  // const [trainer, isLoading] = useTrainer()
  
 

  const onSubmit = (data) => {
    console.log(data);
    const {email, slotName, slotTime, classes, availableDay } = data;
    const slotTrainer =  {email, slotName, slotTime, classes, availableDay };

    axiosSecure.post('/slot', slotTrainer)
    .then(res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })

  }

  return (
    <>
        <div className="">
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="p-10">

                {/* slot Information start */}
                <div className="">
                      <div className="">
                        <h1 className="text-2xl text-[#F23B3F]">Slot Information</h1>
                      </div>
                      <div className="flex gap-5">
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Slot name (example: morning)</span>
                            </div>
                            <input type="text"  {...register("slotName")} className="input input-bordered w-full" placeholder="morning slot"/>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                              <span className="label-text capitalize">Slot Time</span>
                            </div>
                            <input type="number"  {...register("slotTime")} className="input input-bordered w-full" />
                        </label>
                      </div>
                </div>
                {/* slot Information end */}
                {/* class Information start */}
                <div className="">
                  <div className="">
                      <div className="">
                        <h1 className="text-2xl text-[#F23B3F]">Class Information</h1>
                      </div>
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
                              <span className="label-text capitalize">Select days</span>
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