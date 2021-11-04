import React from 'react'
import '../Styling/AccountsPage.css'
import { Link } from 'react-router-dom'

export default function AccountsPage() {
    return (
        <div className="mainAccountsPageDiv">
            <div className="mainAccountsInfoDiv">
            <div className="accountInfoHeader"><h1>Account Info</h1></div>

            <div className="infoDiv" id="username"><h2>Username: </h2> 
            </div>

            <div className="infoDiv" id="email"><h2>Email: </h2> 
            </div>

            <div className="infoDiv" id="password"><h2>Password: </h2> 
            </div>

            <div className="updateButtonDiv"><Link to="updateaccounts"><button className="updateButton">Update</button></Link></div>

            </div>
        </div>
    )
}
