import { all } from "redux-saga/effects";
import {
  reducer as articleReducer,
  saga as articleSaga,
} from "./articles/index";

export const reducers = {
  articles: articleReducer,
};

export function* sagas() {
  yield all([...articleSaga]);
}
