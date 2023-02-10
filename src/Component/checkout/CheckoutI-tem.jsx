import { useContext } from "react";
import { CartContext } from "../../Store-contex/Cart.context";
import "./CheckoutI-tem.scss";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemfromCart, clearItemfromCart } =
    useContext(CartContext);

  const clearItemHandler = () => clearItemfromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemfromCart(cartItem);

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
