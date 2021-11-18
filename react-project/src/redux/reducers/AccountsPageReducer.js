import { GET_USER_ACCOUNT_INFO } from "../action-types/ActionTypes";

const initialState = [];

const UserInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ACCOUNT_INFO:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default UserInfo;
