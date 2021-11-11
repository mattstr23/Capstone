import { LOG_IN_USER } from "../redux/action-types/ActionTypes";

// ==================
// for registering
// ==================

export const sendData = async (object, history) => {
  const regUser = await fetch("http://localhost:3001/registerUser", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    mode: "cors",
    credentials: "same-origin",
    body: JSON.stringify(object),
  });
  const regUserJson = await regUser.json();
  console.log(regUser);
  if (regUser.status === 200) {
    history.push("/login");
  } else {
    window.alert("Something was wrong with your registration.", regUserJson);
  }
};

// ===============
// for logging in
// ===============

export const sendLoginData = async (object, history, dispatch) => {
  const user = await fetch("http://localhost:3001/loginUser", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(object),
  });
  const userJson = await user.json();
  if (user.status === 200) {
    history.push("/markets");
  } else {
    window.alert("Something went wrong", userJson);
  }
  const userID = userJson.id;
  console.log(userJson);
  dispatch({ type: LOG_IN_USER, payload: userID });
};
