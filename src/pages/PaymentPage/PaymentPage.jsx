import useCart from "../../hooks/useCart"
import CartProduct from "./CartProduct";


const PaymentPage = () => {
    const [cart] = useCart();
    console.log(cart);
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.packPrice.split('$')[1]), 0);
    console.log(totalPrice);

    return (
        <>
            <div className="container mx-auto">
                <div className="">
                    {
                        cart.map(cartOne => <CartProduct key={cartOne._id} cartOne={cartOne}></CartProduct>)
                    }
                  
                    
                </div>
                <div className="">
                    <p className="mt-5 font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
                </div>
                <div className="text-center">
                    <button className="btn bg-[#F23B3F] text-white mt-5"> Payment Confirm</button>
                </div>
            </div>
        </>
    )
}

export default PaymentPage