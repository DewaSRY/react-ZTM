//
import { selectCatagoriesArray } from "../../Store-Reducer/Catagories/Catagories-select";
import { useSelector } from "react-redux";
import CatagoriesPreview from "../../Component/Catagories/Catagories-preview";

export default function Catagories() {
  const catagories = useSelector(selectCatagoriesArray);
  return (
    <>
      {Object.keys(catagories).map((key) => {
        const products = catagories[key];
        return <CatagoriesPreview key={key} title={key} products={products} />;
      })}
    </>
  );
}
