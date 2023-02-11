import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategoriesStartAsync } from "../../Store-Reducer/Catagories/Catagories-action";

import { Routes, Route } from "react-router-dom";
import Catagories from "./Catagories-preview";
import Catagory from "./Catagorie";
import "./Shope.scss";
export default function Shope() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStartAsync());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<Catagories />} />
      <Route path=":category" element={<Catagory />} />
    </Routes>
  );
}
