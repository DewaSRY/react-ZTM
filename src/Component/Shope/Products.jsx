import Button from "../../Ui/Button-ui";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../Store-Reducer/Cart/Cart-select";
import { addItemToCart } from "../../Store-Reducer/Cart/Cart-reducer";
import "./Products.scss";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const { imageUrl, price, name } = product;

  const addItemHeandler = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType={"inverted"} onClick={addItemHeandler}>
        Add Item
      </Button>
    </div>
  );
}
