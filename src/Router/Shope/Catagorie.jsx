import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  selectCatagoriesArray,
  selecIsLoading,
} from "../../Store-Reducer/Catagories/Catagories-select";
import ProductCard from "../../Component/Shope/Products";
import Spiner from "../../Component/Spinner/Spiner";
import "./Catagorie.scss";

export default function Catagory() {
  const catagories = useSelector(selectCatagoriesArray);
  const isLoading = useSelector(selecIsLoading);

  const { category } = useParams();
  const [products, setProducts] = useState(catagories[category]);

  useEffect(() => {
    const product = catagories[category];
    setProducts(product);
  }, [category, catagories]);

  function CatagoriesItem() {
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

  return <>{isLoading ? <Spiner /> : <CatagoriesItem />}</>;
}
