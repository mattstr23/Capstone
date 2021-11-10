import React from 'react'
import "../Styling/Login.css"

export default function Login() {
    function handleChange(event){
        console.log(event.target.value);
    }
    return (
        <div className="logincomp">
            <div className="loginCont">
                <div className="emailArea">
                    <h3 className="emailTitle">Email</h3>
                    <input className="logEmail" placeholder="@Email" onChange={handleChange}></input>
                </div>
                <div className="passArea">
                    <h3 className="emailTitle">Password</h3>
                    <input className="logPass" type="password" placeholder="Password" onChange={handleChange}></input>
                </div>
                    <button class="logSub">Login</button>
                <p className="registry">Not a member? <a href="http://localhost:3000/register">Register Here</a></p>
            </div>
        </div>
    )
}
