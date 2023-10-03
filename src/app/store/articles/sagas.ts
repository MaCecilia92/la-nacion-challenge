import { call, takeLatest, put } from "redux-saga/effects";
import * as actions from "./reducer";
import { type PayloadAction } from "@reduxjs/toolkit";
import { getArticlesData } from "@/app/service/articles";

function* getArticlesFromApi(): Generator<any, void, any> {
  try {
    const data = yield call(getArticlesData);
    yield put(actions.setDataArticlesSuceeded(data.articles));
  } catch (err) {
    yield put(actions.setDataArticlesError(err as string));
    console.error("Error getting data:", err);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default [takeLatest(actions.setDataArticlesRequest, getArticlesFromApi)];
