import { combineReducers } from "redux";
import weatherReducer from "./weather";
import usersReducer from "./users";

const allReducers = combineReducers({
  weather: weatherReducer,
  users: usersReducer,
});

export default allReducers;
