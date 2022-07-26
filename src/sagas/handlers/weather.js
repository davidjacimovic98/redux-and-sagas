import { call, put } from "redux-saga/effects";
import { setCity } from "../../actions";
import { requestGetWeather } from "../requests/weather";

export function* handleGetWeather(action) {
  try {
    const city = action.payload;
    const response = yield call(requestGetWeather, city);
    const { data } = response;

    yield put(setCity(data));
  } catch (error) {
    console.log(error);
  }
}
