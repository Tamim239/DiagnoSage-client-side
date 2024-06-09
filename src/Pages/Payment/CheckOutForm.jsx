import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hook/useAxiosSecure";
import { useAuth } from "../../Hook/useAuth";
import { useBannerActive } from "../../Hook/useBannerActive";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

export const CheckOutForm = ({singleData}) => {
  const { _id, name, title, description, price, imageURL } = singleData;
  const axiosSecure = useAxiosSecure();
  const [error, setError] = useState("");
  const [secretClient, setSecretClient] = useState("");
  const [transaction, setTransaction] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user, couponData = null} = useAuth();
  const {data} = useBannerActive();
  let totalPrice = parseFloat(price);
  if( data?.couponCode === couponData){
    totalPrice = parseFloat(price * data?.couponRate / 100);
  }

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setSecretClient(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTransaction('');
    setSecretClient('');
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment method error", error);
      setError(error.message);
    } else {
      console.log("payment method success", paymentMethod);
      setError("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(secretClient, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransaction(paymentIntent.id);
      
      const booking = {
        _id,
        name,
        imageURL,
        title,
        description,
        totalPrice,
        status: 'pending'
      }
       axios.post(`http://localhost:5000/bookList`,booking)
       .then((res)=>{
          console.log(res.data)
          toast.success("insert successfully")
          Navigate(-1)
       })
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        className="mt-8 inline-block w-full bg-black py-4 text-sm font-bold uppercase tracking-widest text-white"
        type="submit"
        disabled={!stripe || !secretClient}
      >
        Pay
      </button>
      <p className="text-rose-500">{error}</p>
      {transaction && (
        <p className="text-green-500">Your Transaction Id : {transaction}</p>
      )}
    </form>
  );
};
