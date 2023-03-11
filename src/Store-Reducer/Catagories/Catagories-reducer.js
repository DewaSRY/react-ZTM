import { CATAGORIES_ACTION_TYPES } from "./Catagories-taypes";

export const CATAGORIES_INITIAL_STATE = {
  catagories: [],
  isLoading: false,
  error: null,
};

export const CatagoriesReducer = (
  state = CATAGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATAGORIES_ACTION_TYPES.SET_CATEGORIES_STARTY:
      return { ...state, isLoading: true };
    case CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_SUCCESS:
      return { ...state, catagories: payload, isLoading: false };
    case CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };

    default:
      return state;
  }
};
