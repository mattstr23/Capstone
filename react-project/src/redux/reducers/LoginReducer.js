import { LOG_IN_USER } from "../action-types/ActionTypes";

const initialState = "";

const logInData = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_USER:
      return action.payload;

    default:
      return state;
  }
};

export default logInData;
