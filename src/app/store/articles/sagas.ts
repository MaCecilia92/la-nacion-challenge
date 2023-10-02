/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {call, takeLatest,put} from 'redux-saga/effects'
import * as actions from './reducer';
import { type PayloadAction } from '@reduxjs/toolkit';
import { getArticlesData } from '@/app/service/articles';

function* getArticlesFromApi({payload}: PayloadAction<any>): Generator<any, void, any>  {
  try {
    const data = yield call(getArticlesData);
    console.log(data, 'data')
    
  } catch (err) {
    console.error('Error on getting data:', err);
  }
}

export default [
    takeLatest(actions.setDataArticlesRequest, getArticlesFromApi),
] 