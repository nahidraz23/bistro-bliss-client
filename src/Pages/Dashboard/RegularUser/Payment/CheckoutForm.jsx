import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import useAuth from "../../../../hooks/useAuth";
import moment from 'moment';
import { data } from "autoprefixer";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransectionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [cart] = useCart();
    const price = cart.reduce( (total, item) => total + item.price,0);

    useEffect( () => {
        axiosSecure.post("/create-payment-intent", {price})
        .then(res => {
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, price])

    const handleSubmit = async e => {
        e.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            setError(error.message);
        } else{
            setError('');
        }

        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error', confirmError.message)
        }else{
            if(paymentIntent.status === 'succeeded'){
                setTransectionId(paymentIntent.id);

                // Now save the payment in database
                const payment = {
                    email: user?.email,
                    price: price,
                    date: moment().subtract(10, 'days').calendar(),
                    transactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuIds: cart.map(item => item.menuId),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', payment);
                console.log("Payment saved",res.data)
            }
        }

    }
    
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <CardElement
                className="p-32"
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
                <button className="btn btn-primary" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                <p className="text-red-500 text-2xl font-semibold">{error}</p>
                {
                    transactionId && <p className="text-green-500 text-2xl py-4">Your transactionId is: {transactionId}</p>
                }
            </form>

        </div>
    );
};

export default CheckoutForm;