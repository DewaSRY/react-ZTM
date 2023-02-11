import { createAction } from "../../Utils/Reducer";
import { CATAGORIES_ACTION_TYPES } from "./Catagories-taypes";
import { get_CatagoriesAndDocument_m2 } from "../../Utils/Firebase";

export const setCatagoriesArray = (catagories) =>
  createAction(CATAGORIES_ACTION_TYPES.SET_CATAGORIES_START, catagories);

export const fetchCategoriesStart = () =>
  createAction(CATAGORIES_ACTION_TYPES.SET_CATAGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(
    CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_SUCCESS,
    categoriesArray
  );
export const fetchCategoriesFailure = (error) =>
  createAction(CATAGORIES_ACTION_TYPES.FETCH_CATAGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await get_CatagoriesAndDocument_m2("categories");
      dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailure(error));
    }
  };
};
