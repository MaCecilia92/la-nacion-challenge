/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { all } from 'redux-saga/effects';
import {reducer as articleReducer, saga as articleSaga } from './articles/index';

export const reducers = {
  session: articleReducer
}

export function* sagas() {
  yield all([...articleSaga]);
}