import { useContext } from "react";
import { CartContext } from "../../Store-contex/Cart.context";
import Button from "../../Ui/Button-ui";
import "./Products.scss";

export default function ProductCard({ product }) {
  const { imageUrl, price, name } = product;
  const { addItemToCart } = useContext(CartContext);

  const addItemHeandler = () => addItemToCart(product);

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
