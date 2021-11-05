import React, { useState } from "react";
import { dispatchUserInfo } from "../redux/actions/RegistrationActions";
import { useDispatch as dispatch } from "react-redux";

export default function Registration() {
    const [firstName, setFirstName]= useState([]);
    const [lastName,setLastName]= useState([]);
    const [email, setEmail]= useState([]);
    const [password, setPassword]= useState([]);

    const registrationInfo =
    {
        firstName,
        lastName,
        email,
        password,
    }
    return (
        <div>
            <form>
                <div>
                    <h1>Join our community!</h1>
                </div>
                <div className="registration-form">
                <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
                <input
                type="text"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input
                type="submit"
                onClick={()=> dispatchUserInfo(dispatch, registrationInfo)}>
                </input>
                </div>                
            </form>                       
        </div>
    )
}
