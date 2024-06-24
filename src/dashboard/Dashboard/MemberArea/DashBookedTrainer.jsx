import { Helmet } from "react-helmet-async"
import TitleSection from "../../../components/TitleSection/TitleSection"
import DashBookedTrainerComp from "./DashBookedTrainerComp";
import usePayment from "../../../hooks/usePayment";


const DashBookedTrainer = () => {
  const [payments] = usePayment();
  //const [cart] = useCart();
  console.log('payment',payments);
  console.log('card information', payments.cartInformation);

  const cartInfo = payments.map(pay => pay.cartInformation);
  // console.log('card information', cartInfo);
  // console.log('card information', cartInfo.flat());
  //console.log('card information', cartInfo.flat(2));
  


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
                cartInfo?.flat()?.map(cartBooked =><DashBookedTrainerComp key={cartBooked._id} cartBooked={cartBooked}></DashBookedTrainerComp>)
              }
            </div>
        </div>
    </>
  )
}

export default DashBookedTrainer