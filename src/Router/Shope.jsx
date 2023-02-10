import { Routes, Route } from "react-router-dom";
import Catagories from "./Catagories-preview";
import Catagory from "./Catagorie";
import "./Shope.scss";

export default function Shope() {
  return (
    <Routes>
      <Route index element={<Catagories />} />
      <Route path=":category" element={<Catagory />} />
    </Routes>
  );
}
