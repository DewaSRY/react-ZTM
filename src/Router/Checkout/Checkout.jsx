import CheckoutItem from "../../Component/Checkout/CheckoutI-tem";

import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selecctCartTotal,
} from "../../Store-Reducer/Cart/Cart-select";
import { setIsCartOpen } from "../../Store-Reducer/Cart/Cart-reducer";
import "./Checkout.scss";

const HEADER_BLOCK = ["Product", "Description", "Quantity", "Price", "Remove"];
export default function Checkout() {
  const dispatch = useDispatch();
  const cartTotal = useSelector(selecctCartTotal);
  const cartItems = useSelector(selectCartItems);

  dispatch(setIsCartOpen(false));
  const CheckOutItem = () =>
    cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />);
  const MassageToShope = () => <h1>Sope noww</h1>;
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {HEADER_BLOCK.map((block) => (
          <div key={block} className="header-block">
            <span>{block}</span>
          </div>
        ))}
      </div>
      {cartItems.length > 0 ? <CheckOutItem /> : <MassageToShope />}

      <div className="total">TOTAL: ${cartTotal}</div>
    </div>
  );
}
