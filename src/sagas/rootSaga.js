import { takeLatest } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";
import { handleGetWeather } from "./handlers/weather";

export function* watcherSaga() {
  yield takeLatest(actions.GET_CITY, handleGetWeather);
}
