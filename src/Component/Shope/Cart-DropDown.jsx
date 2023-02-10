import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Store-contex/Cart.context";
import Button from "../../Ui/Button-ui";
import CartItem from "./Cart-item";
import "./Cart-DropDown.scss";

export default function CartDropDown() {
  const { cartItem } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
}
