import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CatagoriesContext } from "../Store-contex/Catagories.context";
import ProductCard from "../Component/Shope/Products";
import "./Catagorie.scss";

export default function Catagory() {
  const { cataGoriesMap } = useContext(CatagoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(cataGoriesMap[category]);

  useEffect(() => {
    const product = cataGoriesMap[category];
    setProducts(product);
  }, [category, cataGoriesMap]);
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
