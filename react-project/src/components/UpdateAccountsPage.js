import React from "react";
import "../Styling/UpdateAccountsPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "../functions/GeneralFunctions";

export default function AccountsPage() {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  const updatedInfo = {
    firstName,
    lastName,
    email,
    password,
  };

  return (
    <div className="mainUpdateAccountsPageDiv">
      <div className="mainUpdateAccountsInfoDiv">
        <div className="accountInfoHeader">
          <h1>Update Account</h1>
        </div>

        <div className="infoDiv" id="username">
          <h2>New First Name: </h2>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="Username"
            className="inputField"
            id="usernameInput"
          ></input>
        </div>
        <div className="infoDiv" id="username">
          <h2>New Last Name: </h2>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Username"
            className="inputField"
            id="usernameInput"
          ></input>
        </div>

        <div className="infoDiv" id="email">
          <h2>New Email: </h2>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="inputField"
            id="emailInput"
          ></input>
        </div>

        <div className="infoDiv" id="password">
          <h2>New Password: </h2>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="inputField"
            id="passwordInput"
          ></input>
        </div>

        <div className="saveButtonDiv">
          <button onClick={() => updateUser(updatedInfo)} className="button">
            Save
          </button>
          <Link to="/accounts">
            <button className="button">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
