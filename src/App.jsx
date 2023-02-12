//
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onAuth_StateChangedListener,
  create_UserDocumentFromAuth,
} from "./Utils/Firebase";
import { setCurrentUser } from "./Store-Reducer/User-contex/User-reducer";
import { Routes, Route } from "react-router-dom";
import HomeDirectory from "./Router/Home/HomeDirectory";
import Navigation from "./Router/Navigation";
import Shope from "./Router/Shope/Shope";
import Autentication from "./Router/Autentication/Autentication";
import Checkout from "./Router/Checkout/Checkout";
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuth_StateChangedListener((user) => {
      if (user) {
        create_UserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
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
