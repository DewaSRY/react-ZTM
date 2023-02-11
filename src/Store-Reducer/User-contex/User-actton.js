import { USER_ACTION_TYPES } from "./User-types";
import { createAction } from "../../Utils/Reducer";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
