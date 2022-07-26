import * as actions from "../actions/actionTypes";

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default usersReducer;
