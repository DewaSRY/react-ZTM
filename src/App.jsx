//
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { checkUserSesion } from "./Store-Reducer/User-contex/User-actton";
// import { setCurrentUser } from "./Store-Reducer/User-contex/User-actton";
import { Routes, Route } from "react-router-dom";
import HomeDirectory from "./Router/Home/HomeDirectory";
import Navigation from "./Router/Navigation";
import Shope from "./Router/Shope/Shope";
import Autentication from "./Router/Autentication/Autentication";
import Checkout from "./Router/Checkout/Checkout";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSesion());
  }, [dispatch]);
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
