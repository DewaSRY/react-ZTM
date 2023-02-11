import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../Store-Reducer/Cart/Cart-select";
import {
  addItemToCart,
  removeItemfromCart,
  clearItemfromCart,
} from "../../Store-Reducer/Cart/Cart-action";

import "./CheckoutI-tem.scss";

export default function CheckoutItem({ cartItem }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, imageUrl, price, quantity } = cartItem;

  const clearItemHandler = () =>
    dispatch(clearItemfromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () =>
    dispatch(removeItemfromCart(cartItems, cartItem));

  const IcontButton = ({ value, onHeandler, className }) => {
    return (
      <div className={(className = "arrow")} onClick={onHeandler}>
        {value}
      </div>
    );
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <IcontButton
          className="arrow"
          value="&#10094;"
          onHeandler={removeItemHandler}
        />
        <span className="value">{quantity}</span>
        <IcontButton
          className="arrow"
          value="&#10095;"
          onHeandler={addItemHandler}
        />
      </span>
      <span className="price"> {price}</span>
      <IcontButton
        className="remove-button"
        value="&#10005;"
        onHeandler={clearItemHandler}
      />
    </div>
  );
}
