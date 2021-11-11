import React from "react";
import "../Styling/Login.css";
import { useState } from "react";
import { sendLoginData } from "../functions/GeneralFunctions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Login() {
  let history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const userData = {
    email,
    password,
  };

  return (
    <div className="logincomp">
      <div className="loginCont">
        <div className="emailArea">
          <h3 className="emailTitle">Email</h3>
          <input
            className="logEmail"
            placeholder="@Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="passArea">
          <h3 className="emailTitle">Password</h3>
          <input
            className="logPass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          class="logSub"
          onClick={() => sendLoginData(userData, history, dispatch)}
        >
          Login
        </button>
        <p className="registry">
          Not a member? Register <a>here</a>
        </p>
      </div>
    </div>
  );
}
