import { useForm } from "react-hook-form";
import TitleSection from "../../../components/TitleSection/TitleSection"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useTrainer from "../../../hooks/useTrainer";
import useClass from "../../../hooks/useClass";


const AddNewSlot = () => {
  const [betrainer] = useTrainer();
  const [classes] = useClass();
  console.log(betrainer);
  console.log(classes);
  const {register, handleSubmit, reset, control, formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();

  

  // axiosSecure.get(`/betrainer/${_id}`)
  // .then(res => {
  //   console.log(res.data)
  // })
  // .catch(err=>{
  //   console.log(err);
  // })

  const onSubmit = (data) => {}

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
                  
                </div>
                {/* trainer Information end */}
                <hr className="bg-[#F23B3F] text-[#F23B3F]" />
              </div>
            </div>
        </div>
    </>
  )
}

export default AddNewSlot