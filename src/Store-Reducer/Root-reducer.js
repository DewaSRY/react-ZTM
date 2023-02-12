import { combineReducers } from "redux";

import { userReducer } from "./User-contex/User-reducer";
import { categoriesReducer } from "./Catagories/Catagories-reducer";
import { cartReducer } from "./Cart/Cart-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  catagories: categoriesReducer,
  cart: cartReducer,
});
