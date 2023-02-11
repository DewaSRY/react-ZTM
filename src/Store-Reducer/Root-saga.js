import { all, call } from "redux-saga/effects";

import { catagoriesSaga } from "./Catagories/Catagories-saga";
import { userSagas } from "./User-contex/User-saga";
export function* RootSaga() {
  yield all([call(catagoriesSaga), call(userSagas)]);
}
