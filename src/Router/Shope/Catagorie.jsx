import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectCatagoriesArray } from "../../Store-Reducer/Catagories/Catagories-select";
import ProductCard from "../../Component/Shope/Products";
import "./Catagorie.scss";

export default function Catagory() {
  const catagories = useSelector(selectCatagoriesArray);

  const { category } = useParams();
  const [products, setProducts] = useState(catagories[category]);

  useEffect(() => {
    const product = catagories[category];
    setProducts(product);
  }, [category, catagories]);
  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
