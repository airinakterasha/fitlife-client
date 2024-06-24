

const CartProduct = ( {cartOne} ) => {
    //console.log(cartOne);
    const {clientName, clientEmail, trainerName, trainerEmail, slotTimeDuration, slotName, packName, packPrice, packHour} = cartOne
    return (
            <div  className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 mt-5">
                <div className="p-6">
                    <p>trainer name : {trainerName}</p>
                    <p>trainer email : {trainerEmail}</p>
                    <p>trainer class time duration : {slotTimeDuration}</p>
                    <p>Slot Name : {slotName}</p>
                    <p>User name : {clientName}</p>
                    <p>User email : {clientEmail}</p>
                    <p>PackageInformation - </p>
                    <p>Selected Package : {packName}</p>
                    <p>Selected Package Price : {packPrice} </p>
                    <p>Selected Package time duration : {packHour} </p>

                </div>
            </div>
    )
}

export default CartProduct