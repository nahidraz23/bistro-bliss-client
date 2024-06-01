import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = useCart();
    const price = cart.reduce( (total, item) => total + item.price,0);

    return (
        <div>
            <div>
                <SectionHeading
                    heading={"payment"}
                ></SectionHeading>
            </div>
            <div>
                <h1 className="text-3xl font-bold badge badge-outline p-5">You have to pay: ${price}</h1>
            </div>
            <div className="">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;