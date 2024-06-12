import { useLoaderData } from "react-router-dom"
import useAuth from "../../hooks/useAuth";


const PaymentPage = () => {
    const {user, packageone, setPackage} = useAuth();

    const slotInform = useLoaderData();
    console.log(slotInform);
    const {_id, trainerName, slotName, trainerImage, slotTime, classes, email, age, profileImage, skills, role, availableDay, availableTime, status} = slotInform;
    return (
        <>
            <div className="container mx-auto">
                <div className="">
                    <div className="">
                        <p>trainer name : {trainerName}</p>
                        <p>Slot name : {slotName}</p>
                        <p>User name : {slotTime}</p>
                        <p>User name : {user?.displayName}</p>
                    </div>
                    <div className="text-center">
                        <button className="btn bg-[#F23B3F] text-white mt-5"> Payment Confirm</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage