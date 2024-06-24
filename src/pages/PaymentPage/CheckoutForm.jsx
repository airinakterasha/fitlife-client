import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + parseFloat(item.packPrice.split('$')[1]), 0);

    useEffect(()=>{
        if(totalPrice > 0){
            axiosSecure.post('/create-payment-intent', {price: totalPrice})
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch()
        }
    },[axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        console.log(clientSecret);
        // confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'anonymous',
                },
            },
        })
        if(confirmError){
            console.log('confirm error')
        } else {
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // Now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    cartInformation: cart,
                    status: 'pending',
                }

                const res = await axiosSecure.post('/payments', payment)
                console.log('payment saved', res.data);
                if(res.data?.paymentResult?.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for your payment",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            }
        }
        // stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: card,
        //         billing_details: {
        //           name: user?.displayName || 'anonymous',
        //           email: user?.email || 'anonymous',
        //         },
        //     },
        // })
        
    }

    return (
        <>
            <div className="p-10">
                <div className="lg:w-1/2">
                    <form onSubmit={handleSubmit}>
                        <CardElement
                            options={{
                            style: {
                                base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                },
                                invalid: {
                                color: '#9e2146',
                                },
                            },
                            }}
                        />
                        <button type="submit" className="btn btn-sm bg-[#F23B3F] text-white mt-10">
                            Pay
                        </button>
                        <p className="text-red-600">{error}</p>
                        {
                            transactionId && <p className="text-green-500">Your transaction id: {transactionId}</p>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckoutForm