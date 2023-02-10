import ProductCard from "../Shope/Products";
import { Link } from "react-router-dom";
import "./Catagories-preview.scss";

export default function CatagoriesPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <Link to={title}>
        <span className="title">{title.toUpperCase()}</span>
      </Link>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
