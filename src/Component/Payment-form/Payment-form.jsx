import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selecctCartTotal } from "../../Store-Reducer/Cart/Cart-select";
import { selectCurrentUser } from "../../Store-Reducer/User-contex/User-select";
import Button from "../../Ui/Button-ui";
import "./Payment-form.scss";
export default function PatmentForm() {
  const stripe = useStripe();
  const element = useElements();
  const amount = useSelector(selecctCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProsesingPayment, setIsProsesingPayment] = useState(false);

  const PaymentHeandler = async (event) => {
    event.preventDefault();
    if (!stripe || !element) return;
    setIsProsesingPayment(true);
    const response = await fetch("/.netlify/functions/create-payment-intens", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());
    console.log(response);
    const {
      paymentIntent: { client_secret },
    } = response;
    console.log(client_secret);
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: element.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "gues",
        },
      },
    });
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded")
        alert("payment successful");
    }
  };
  setIsProsesingPayment(false);

  return (
    <div className="PaymentFormContainer">
      <form className="FormContainer" onSubmit={PaymentHeandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button disabled={isProsesingPayment} buttonType={"inverted"}>
          Pay now
        </Button>
      </form>
    </div>
  );
}
