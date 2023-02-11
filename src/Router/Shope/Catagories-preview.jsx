//
import {
  selectCatagoriesArray,
  selecIsLoading,
} from "../../Store-Reducer/Catagories/Catagories-select";
import { useSelector } from "react-redux";
import CatagoriesPreview from "../../Component/Catagories/Catagories-preview";
import Spiner from "../../Component/Spinner/Spiner";
export default function Catagories() {
  const catagories = useSelector(selectCatagoriesArray);
  const isLoading = useSelector(selecIsLoading);

  const CatagoriesPreviewitems = () => {
    return (
      <>
        {Object.keys(catagories).map((key) => {
          const products = catagories[key];
          return (
            <CatagoriesPreview key={key} title={key} products={products} />
          );
        })}
      </>
    );
  };

  return <>{isLoading ? <Spiner /> : <CatagoriesPreviewitems />}</>;
}
