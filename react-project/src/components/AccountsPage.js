import React from "react";
import "../Styling/AccountsPage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getUsersAccountInfo } from "../functions/GeneralFunctions";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../assets/LandingLogo.png";


export default function AccountsPage() {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.AccountsPageReducer);

  useEffect(() => {
    getUsersAccountInfo(dispatch);
  }, []);

  return (
    <div className="mainAccountsPageDiv">
      <div className="mainAccountsInfoDiv">
        <div className="accountInfoHeader">
          <h1>Account Info</h1>
          <img className="Logo" src={Logo} alt="Logo"></img>
        </div>

        <div className="infoDiv" id="username">
          <h2>First Name: {info.firstName}</h2>
        </div>

        <div className="infoDiv" id="email">
          <h2>Last Name: {info.lastName}</h2>
        </div>

        <div className="infoDiv" id="password">
          <h2>Email: {info.email}</h2>
        </div>

        <div className="updateButtonDiv">
          <Link to="updateaccounts">
            <button className="updateButton">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
