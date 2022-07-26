import * as actions from "../actions/actionTypes";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SET_CITY:
      const { city } = action;
      const cityName = city.name;
      state[cityName] = city;
      return { ...state };
    default:
      return state;
  }
};

export default weatherReducer;
