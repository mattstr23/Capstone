import React from 'react'
import '../Styling/AccountsPage.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function AccountsPage() {

    const [accountDetails, setAccountDetails] = useState({})

    return (
        <div className="mainAccountsPageDiv">
            <div className="mainAccountsInfoDiv">
            <div className="accountInfoHeader"><h1>Account Info</h1></div>

            <div className="infoDiv" id="username"><h2>First Name: </h2> 
            </div>

            <div className="infoDiv" id="email"><h2>Last Name: </h2> 
            </div>

            <div className="infoDiv" id="password"><h2>Email: </h2> 
            </div>

            <div className="updateButtonDiv"><Link to="updateaccounts"><button className="updateButton">Update</button></Link></div>

            </div>
        </div>
    )
}
