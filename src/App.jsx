//
import { Routes, Route } from "react-router-dom";
import HomeDirectory from "./Router/HomeDirectory";
import Navigation from "./Router/Navigation";
import Shope from "./Router/Shope";
import Autentication from "./Router/Autentication";
import Checkout from "./Router/checkout";
export default function App() {
  return (
    <Routes>
      <Route path="" element={<Navigation />}>
        <Route index element={<HomeDirectory />} />
        <Route path="shop/*" element={<Shope />} />
        <Route path="autentication" element={<Autentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
