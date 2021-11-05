import React from 'react'
import '../Styling/UpdateAccountsPage.css'
import { Link } from 'react-router-dom'

export default function AccountsPage() {
    return (
        <div className="mainUpdateAccountsPageDiv">
            <div className="mainUpdateAccountsInfoDiv">
             <div className="accountInfoHeader"><h1>Update Account</h1>
             </div>

             <div className="infoDiv" id="username"><h2>New Username: </h2> 
             <input type="text" placeholder="Username" className="inputField" id ="usernameInput"></input>
             </div>

             <div className="infoDiv" id="email"><h2>New Email: </h2> 
             <input type="text" placeholder="Email" className="inputField" id="emailInput"></input>
             </div>

             <div className="infoDiv" id="password"><h2>New Password: </h2> 
             <input type="password" placeholder="Password" className="inputField" id="passwordInput"></input>
             </div>

             <div className="saveButtonDiv">
             <button className="button">Save</button>
             <Link to="/accounts"><button className="button">Back</button></Link>
             </div>

            </div>
        </div>
    )
}