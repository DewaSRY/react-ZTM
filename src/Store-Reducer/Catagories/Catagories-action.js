import { createAction } from "../../Utils/Reducer";
import { CATAGORIES_ACTION_TYPES } from "./Catagories-taypes";

export const setCatagoriesArray = (catagories) =>
  createAction(CATAGORIES_ACTION_TYPES.SET_CATAGORIES_ARRAY, catagories);
