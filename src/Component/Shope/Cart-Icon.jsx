import { ReactComponent as ShoppingIcon } from "../../Assets/Cart.svg";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setIsCartOpen } from "../../Store-Reducer/Cart/Cart-action";
import {
  selectCarOpen,
  selecctCartCount,
} from "../../Store-Reducer/Cart/Cart-select";
import "./Cart-Icon.scss";

export default function CartIcon() {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectCarOpen);
  const cartCount = useSelector(selecctCartCount);

  const navigate = useNavigate();
  function CartHeandler() {
    if (!cartCount) {
      return navigate("/checkout");
    }
    dispatch(setIsCartOpen(!isCartOpen));
  }
  return (
    <div className="cart-icon-container" onClick={CartHeandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
