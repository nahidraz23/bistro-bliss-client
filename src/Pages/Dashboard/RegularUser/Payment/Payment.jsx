import { loadStripe } from "@stripe/stripe-js";
import SectionHeading from "../../../../Components/shared/SectionHeading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div>
            <div>
                <SectionHeading
                    heading={"payment"}
                ></SectionHeading>
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