//
import { useContext } from "react";
import { CatagoriesContext } from "../Store-contex/Catagories.context";
import CatagoriesPreview from "../Component/Catagories/Catagories-preview";

export default function Catagories() {
  const { cataGoriesMap } = useContext(CatagoriesContext);
  return (
    <>
      {Object.keys(cataGoriesMap).map((key) => {
        const products = cataGoriesMap[key];
        return <CatagoriesPreview key={key} title={key} products={products} />;
      })}
    </>
  );
}
