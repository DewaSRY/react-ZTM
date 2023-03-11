import { createContext, useState, useEffect } from "react";
import { get_CatagoriesAndDocument } from "../Utils/Firebase";

export const CatagoriesContext = createContext({
  cataGoriesMap: {},
});

export const CatagoriseProvider = ({ children }) => {
  const [cataGoriesMap, setCataGoriesMap] = useState({});
  const value = { cataGoriesMap, setCataGoriesMap };
  useEffect(() => {
    const getCatagoriesMap = async () => {
      const catagorieMap = await get_CatagoriesAndDocument();
      // console.log(catagorieMap);
      setCataGoriesMap(catagorieMap);
    };
    getCatagoriesMap();
  }, []);
  return (
    <CatagoriesContext.Provider value={value}>
      {children}
    </CatagoriesContext.Provider>
  );
};
