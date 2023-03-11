import { takeLatest, all, call, put } from "redux-saga/effects";
import { get_CatagoriesAndDocument_m2 } from "../../Utils/Firebase";
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "./Catagories-action";
import { CATAGORIES_ACTION_TYPES } from "./Catagories-taypes";

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(
      get_CatagoriesAndDocument_m2,
      "categories"
    );
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* onFetchCatagories() {
  yield takeLatest(
    CATAGORIES_ACTION_TYPES.SET_CATAGORIES_START,
    fetchCategoriesAsync
  );
}

export function* catagoriesSaga() {
  yield all([call(onFetchCatagories)]);
}
