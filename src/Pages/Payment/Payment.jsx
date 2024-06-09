import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckOutForm } from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
export const Payment = ({singleData}) => {
  return (
    <div>
         <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm singleData={singleData}/>
        </Elements>
      </div>
    </div>
  )
}
