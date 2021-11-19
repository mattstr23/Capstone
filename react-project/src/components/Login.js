import React from "react";
import "../Styling/Login.css";
import Logo from "../assets/LandingLogo.png";
import { useState } from "react";
import { sendLoginData } from "../functions/GeneralFunctions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
	let history = useHistory();
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const userData = {
		email,
		password,
	};

	return (
		<div className="logincomp">
			<div className="loginCont">
				<img src={Logo} className="loginLogo" alt="Logo"></img>
				<h1>Login</h1>
				<div className="emailArea">
					<input
						className="logEmail"
						placeholder="@Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div className="passArea">
					<input
						className="logPass"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<button className="loginbtn" onClick={() => sendLoginData(userData, history, dispatch)}>
					LOGIN
				</button>
				<p className="registry">
					Not a member? Register <a href="/register"> Here</a>
				</p>
			</div>
		</div>
	);
}
