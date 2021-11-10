import React from 'react'
import "../Styling/Login.css"

export default function Login() {
    return (
        <div className="logincomp">
            <div className="loginCont">
                <div className="emailArea">
                    <h3 className="emailTitle">Email</h3>
                    <input className="logEmail" placeholder="@Email"></input>
                </div>
                <div className="passArea">
                    <h3 className="emailTitle">Password</h3>
                    <input className="logPass" placeholder="Password"></input>
                </div>
                    <button class="logSub">Login</button>
                <p className="registry">Not a member? Register <a>here</a></p>
            </div>
        </div>
    )
}
