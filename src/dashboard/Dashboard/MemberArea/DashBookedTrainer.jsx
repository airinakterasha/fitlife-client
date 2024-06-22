import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import useCart from "../../../hooks/useCart";
import DashBookedTrainerComp from "./DashBookedTrainerComp";


const DashBookedTrainer = () => {
  const [cart] = useCart();
  console.log(cart);
  return (
    <>
        <Helmet>
            <title>FitLife | Dashboard | Booked Trainer</title>
        </Helmet>
        <div className="">
            <div className="">
                <TitleSection heading={'The Trainer you booked'} subHeading={'Here your booked information'}></TitleSection>
            </div>
            <div className="">
              {
                cart.map(cartBooked =><DashBookedTrainerComp key={cartBooked._id} cartBooked={cartBooked}></DashBookedTrainerComp>)
              }
            </div>
        </div>
    </>
  )
}

export default DashBookedTrainer