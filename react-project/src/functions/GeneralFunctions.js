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

  if (user.status === 200) {
    const userJson = await user.json();
    const token = userJson.accessToken;
    const id = userJson.id;
    localStorage.setItem("jsonwebtoken", token);
    localStorage.setItem("id", id);
    console.log(userJson);
    // history.push("/markets");
  } else {
    alert("Invalid Email And Or Password");
  }
};

// ===========================
// for account info use effect
// ===========================

export const getUsersAccountInfo = async () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("jswonwebtoken");

  const accountInfo = await fetch(`http://localhost:3001/accounts/${id}`, {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });
};
