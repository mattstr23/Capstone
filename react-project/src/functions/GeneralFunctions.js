import { GET_USER_ACCOUNT_INFO, LOG_IN_USER } from "../redux/action-types/ActionTypes";
import { ADD_CRYPT } from "../redux/action-types/ActionTypes";

// ==================
// for registering
// ==================

export const sendData = async (object, history) => {
	const regUser = await fetch("https://shielded-brook-42429.herokuapp.com/registerUser", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		mode: "cors",
		credentials: "same-origin",
		body: JSON.stringify(object),
	});
	const regUserJson = await regUser.json();
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
	const user = await fetch("https://shielded-brook-42429.herokuapp.com/loginUser", {
		method: "POST",
		headers: { "Content-type": "application/json" },
		body: JSON.stringify(object),
	});

	if (user.status === 200) {
		const userJson = await user.json();

		let token = userJson.token;

		localStorage.setItem("jsonwebtoken", token);
		//dispatch action to set variable to true for logged in or false for not logged in

		history.push("/markets");
	} else {
		alert("Invalid Email And Or Password");
	}
};

// ===========================
// for account info use effect
// ===========================

export const getUsersAccountInfo = async (dispatch) => {
	const token = localStorage.getItem("jsonwebtoken");

	const accountInfo = await fetch(`https://shielded-brook-42429.herokuapp.com/account`, {
		method: "POST",
		headers: { authorization: `Bearer ${token}` },
	});

	const accountInfoJson = await accountInfo.json();
	dispatch({
		type: GET_USER_ACCOUNT_INFO,
		payload: accountInfoJson.rows[0],
	});
};

// ========================
// buying crypto
// ========================

export const buyCrypto = async (object) => {
	const token = localStorage.getItem("jsonwebtoken");
	const placeCrypto = await fetch("https://shielded-brook-42429.herokuapp.com/addCrypto", {
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
			"Content-type": "application/json",
		},
		body: JSON.stringify(object),
	});
};

// =================
// for market
// =================

export const getUserCrypto = async (dispatch) => {
	const token = localStorage.getItem("jsonwebtoken");
	const usersCrypto = await fetch("https://shielded-brook-42429.herokuapp.com/allCrypto", {
		method: "POST",
		headers: { authorization: `Bearer ${token}` },
	});
	const usersCryptoJson = await usersCrypto.json();
	for (let x = 0; x < usersCryptoJson.rows.length; x++) {
		const test2 = JSON.parse(usersCryptoJson.rows[x].crypto);
		const cryptoDbId = usersCryptoJson.rows[x].id;
		dispatch({
			type: ADD_CRYPT,
			payload: { ...test2, cryptoDbId: cryptoDbId },
		});
	}
};

// ====================
// for deleting crypto
// ====================

export const deleteCrypto = async (object) => {
	const token = localStorage.getItem("jsonwebtoken");

	const deletedCrypto = await fetch("https://shielded-brook-42429.herokuapp.com/removeCrypto", {
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
			"Content-type": "application/json",
		},
		body: JSON.stringify({ crypto: object }),
		mode: "cors",
		credentials: "same-origin",
	});

	if (deletedCrypto.status === 200) {
		window.location.reload();
	}
};

// ==============================
// for updating user account info
// ==============================

export const updateUser = async (object) => {
	const token = localStorage.getItem("jsonwebtoken");

	const updateInfo = await fetch("https://shielded-brook-42429.herokuapp.com/updateUser", {
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
			"Content-type": "application/json",
		},
		mode: "cors",
		credentials: "same-origin",
		body: JSON.stringify(object),
	});

	if (updateInfo.status === 200) {
		window.alert("Account successfully updated!");
	}
};
export const checkLoggedIn = async (token) => {
	const loggedIn = await fetch("https://shielded-brook-42429.herokuapp.com/authenticateToken", {
		method: "POST",
		headers: {
			authorization: `Bearer ${token}`,
			"Content-type": "application/json",
		},
		mode: "cors",
		credentials: "same-origin",
	});

	if (loggedIn.status === 200) {
		return true;
	} else {
		return false;
	}
};
