import { ReactComponent as ShoppingIcon } from "../../Assets/Cart.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Store-contex/Cart.context";
import "./Cart-Icon.scss";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const navigate = useNavigate();
  function CartHeandler() {
    if (!cartCount) {
      return navigate("/checkout");
    }
    setIsCartOpen(!isCartOpen);
  }
  return (
    <div className="cart-icon-container" onClick={CartHeandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
