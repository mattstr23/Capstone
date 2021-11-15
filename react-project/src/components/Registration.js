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
		<div className="registrationcomp">
			<div className="registrationCont">
				<div className="registrationform">
					<div className="logodiv">
						<img src={Logo} className="Logo" alt="Logo"></img>
						<h1>Join our community!</h1>
					</div>
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
						<button className="registerbtn" type="submit" onClick={() => sendData(registrationInfo, history)}>
							Create Account
						</button>
					</div>
					<div>
						<h3>
							Already a member? <a>Log In Here</a>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}
