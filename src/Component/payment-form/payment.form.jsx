import { useSelector } from "react-redux";
import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { selecctCartTotal } from "../../Store-Reducer/Cart/Cart-select";
import { selectCurrentUser } from "../../Store-Reducer/User-contex/User-select";
import Button from "../../Ui/Button-ui";

import classes from "./payment.form.module.css";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selecctCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHeandler = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return console.log("failed");
    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(response);
    const clientSecret = response.paymentIntent.client_secret;
    console.log(clientSecret);
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Dewa Surya",
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }
    }
  };
  return (
    <div className={classes.paymentFormContainer}>
      <form className={classes.formContainer} onSubmit={paymentHeandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button isLoading={isProcessingPayment}>Pay now</Button>
      </form>
    </div>
  );
};

export default PaymentForm;
