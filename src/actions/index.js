import * as actions from "./actionTypes";

export const addUser = (firstName, lastName, email, city) => {
  return {
    type: actions.ADD_USER,
    payload: {
      id: Math.random(),
      firstName,
      lastName,
      email,
      city,
    },
  };
};

export const getCity = (city) => {
  return {
    type: actions.GET_CITY,
    payload: city,
  };
};

export const setCity = (city) => {
  return {
    type: actions.SET_CITY,
    city,
  };
};
