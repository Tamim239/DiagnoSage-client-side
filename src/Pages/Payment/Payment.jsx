import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CheckOutForm } from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);
export const Payment = ({price}) => {
  return (
    <div>
         <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm  price={price}/>
        </Elements>
      </div>
    </div>
  )
}
