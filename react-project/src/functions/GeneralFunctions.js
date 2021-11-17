import { LOG_IN_USER } from "../redux/action-types/ActionTypes";
import { ADD_CRYPT } from "../redux/action-types/ActionTypes";

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
    console.log(user);
    const userJson = await user.json();

    console.log(userJson);
    let token = userJson.token;
    // token = JSON.stringify(token);

    localStorage.setItem("jsonwebtoken", token);

    // console.log(userJson);
    history.push("/markets");
  } else {
    alert("Invalid Email And Or Password");
  }
};

// ===========================
// for account info use effect
// ===========================

export const getUsersAccountInfo = async () => {
  const token = localStorage.getItem("jsonwebtoken");
  const id = token.id;

  const accountInfo = await fetch(`http://localhost:3001/accounts/${id}`, {
    method: "GET",
    headers: { authorization: `Bearer ${token}` },
  });
};

// ========================
// buying crypto
// ========================

export const buyCrypto = async (object) => {
  const token = localStorage.getItem("jsonwebtoken");
  const placeCrypto = await fetch("http://localhost:3001/addCrypto", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(object),
  });
  console.log(placeCrypto);
};

// =================
// for market
// =================

export const getUserCrypto = async (dispatch) => {
  const token = localStorage.getItem("jsonwebtoken");
  const usersCrypto = await fetch("http://localhost:3001/allCrypto", {
    method: "POST",
    headers: { authorization: `Bearer ${token}` },
  });
  const usersCryptoJson = await usersCrypto.json();
  console.log(usersCryptoJson);
  for (let x = 0; x < usersCryptoJson.rows.length; x++) {
    const test2 = JSON.parse(usersCryptoJson.rows[x].crypto);
    const cryptoDbId = usersCryptoJson.rows[x].id;
    dispatch({
      type: ADD_CRYPT,
      payload: { ...test2, cryptoDbId: cryptoDbId },
    });
  }
};

// =================
// for deleting crypto
// =================

export const deleteCrypto = async (object) => {
  const token = localStorage.getItem("jsonwebtoken");

  console.log(object);
  const deletedCrypto = await fetch("http://localhost:3001/removeCrypto", {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ crypto: object }),
    mode: "cors",
    credentials: "same-origin",
  });

  console.log(deletedCrypto);
  if (deletedCrypto.status === 200) {
    window.location.reload();
  }
};
