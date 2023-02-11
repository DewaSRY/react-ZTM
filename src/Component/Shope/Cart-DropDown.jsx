import { useNavigate } from "react-router-dom";
import Button from "../../Ui/Button-ui";
import CartItem from "./Cart-item";
import "./Cart-DropDown.scss";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../Store-Reducer/Cart/Cart-select";

export default function CartDropDown() {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  const CartDropdownItems = () =>
    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <CartDropdownItems />
      </div>
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
}
