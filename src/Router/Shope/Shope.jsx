import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCatagoriesArray } from "../../Store-Reducer/Catagories/Catagories-action";
import {
  //  get_CatagoriesAndDocument,
  get_CatagoriesAndDocument_m2,
} from "../../Utils/Firebase";
import { Routes, Route } from "react-router-dom";
import Catagories from "./Catagories-preview";
import Catagory from "./Catagorie";
import "./Shope.scss";
export default function Shope() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCatagoriesArray = async () => {
      const catagoriesArray = await get_CatagoriesAndDocument_m2();
      console.log(catagoriesArray);
      dispatch(setCatagoriesArray(catagoriesArray));
    };
    getCatagoriesArray();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<Catagories />} />
      <Route path=":category" element={<Catagory />} />
    </Routes>
  );
}
