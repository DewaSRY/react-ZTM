import { CATAGORIES_ACTION_TYPES } from "./Catagories-taypes";

export const CATAGORIES_INITIAL_STATE = {
  catagories: [],
};

export const CatagoriesReducer = (
  state = CATAGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATAGORIES_ACTION_TYPES.SET_CATAGORIES_ARRAY:
      return { ...state, catagories: payload };

    default:
      return state;
  }
};
