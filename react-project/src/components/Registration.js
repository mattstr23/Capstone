import React from "react";
import "../Styling/Registration.css"
import Logo from '../assets/LandingLogo.png'

export default function Registration() {
    
    function handleChange(event){
        console.log(event.target.value)
    }
    return (
        <div className="registrationcomp">
            <div className ="registrationCont">
                <div className="registrationform">
                    <div className="logodiv">
                        <img src={Logo} className="Logo" alt="Logo"></img>
                        <h1>Join our community!</h1>
                    </div>
                    <div className="inputFields">
                    <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    />
                    <input
                    type="text"
                    placeholder="E-mail"
                    onChange={handleChange}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    />
                    <button className="registerbtn" type="submit">Create Account</button>
                    </div>
                    <div>
                        <h3>Already a member? <a href="http://localhost:3000/login">Log In Here</a></h3>
                    </div> 
                </div>
                

                 
                             
            </div>                       
        </div>
    )
}
