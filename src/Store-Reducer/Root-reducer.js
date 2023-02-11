import { combineReducers } from "redux";

import { UserReducer } from "./User-contex/User-reducer";
import { CatagoriesReducer } from "./Catagories/Catagories-reducer";
import { CartReducer } from "./Cart/Cart-reducer";
export const RootReducer = combineReducers({
  user: UserReducer,
  catagories: CatagoriesReducer,
  cart: CartReducer,
});
