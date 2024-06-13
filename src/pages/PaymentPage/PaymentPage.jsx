

const PaymentPage = () => {

    return (
        <>
            <div className="container mx-auto">
                <div className="">
                    <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
                        <div className="p-6">
                            <p>trainer name : </p>
                            <p>Slot name : </p>
                            <p>Available Slot : </p>
                            <p>User name : </p>
                            <p>Selected Package : </p>
                            <p>Selected Package Price : </p>
                        </div>
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