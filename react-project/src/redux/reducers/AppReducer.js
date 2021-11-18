const initialState = [];

const verify = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGEDIN":
      return action.payload;

    case "NOTLOGGEDIN":
      return action.payload;

    default:
      return state;
  }
};

export default verify;
