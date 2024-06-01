import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";

const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();
    const price = cart.reduce( (total, item) => total + item.price,0)

    useEffect( () => {
        axiosSecure.post("/create-payment-intent", {price})
        .then(res => {
            setClientSecret(res.data.clientSecret)
        })
    }, [axiosSecure, price])
    console.log(clientSecret)

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
            setError(error.message)
        } else{
            setError('')
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
            </form>

        </div>
    );
};

export default CheckoutForm;