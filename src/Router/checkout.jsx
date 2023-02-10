import { useContext } from "react";
import { CartContext } from "../Store-contex/Cart.context";
import CheckoutItem from "../Component/checkout/CheckoutI-tem";
import "./checkout.scss";

const HEADER_BLOCK = ["Product", "Description", "Quantity", "Price", "Remove"];
export default function Checkout() {
  const { cartItem, cartTotal, setIsCartOpen } = useContext(CartContext);
  setIsCartOpen(false);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {HEADER_BLOCK.map((block) => (
          <div className="header-block">
            <span>{block}</span>
          </div>
        ))}
      </div>
      {cartItem.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
}
