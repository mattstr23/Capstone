import React, { useState } from "react";
import { dispatchUserInfo } from "../redux/actions/RegistrationActions";
import { useDispatch as dispatch } from "react-redux";
import "../Styling/Registration.css";
import Logo from "../assets/LandingLogo.png";
import { sendData } from "../functions/GeneralFunctions";
import { useHistory } from "react-router-dom";

export default function Registration() {
	let history = useHistory();
	const [firstName, setFirstName] = useState([]);
	const [lastName, setLastName] = useState([]);
	const [email, setEmail] = useState([]);
	const [password, setPassword] = useState([]);

	const registrationInfo = {
		firstName,
		lastName,
		email,
		password,
	};

	console.log(registrationInfo);
	return (
		<div className="registration">
			<div className="registrationCont">
				<img src={Logo} className="registerLogo" alt="Logo"></img>
				<h1>REGISTER</h1>
				<div className="inputFields">
					<input
						type="text"
						placeholder="First Name"
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
					<input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="registerbtn" type="submit" onClick={() => sendData(registrationInfo, history)}>
					REGISTER
				</button>
				<p className="loginRedirect">
					Already a member? Log In <a href="/login">Here</a>
				</p>
			</div>
		</div>
	);
}
