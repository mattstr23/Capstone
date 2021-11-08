import React from 'react'
import '../Styling/Landing.css'
import Logo from '../assets/LandingLogo.png'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="Landing">
            <img src={Logo} className="Logo" alt="Logo"></img>
            <h1 className="LogoName">LUNAR<br></br>EXCHANGE</h1>
            <div className="Info">
                <h3 className="InfoTxt">A crypto exchange market place</h3>
                <Link to="/login">
                    <button className="loginBut">LOGIN</button>
                </Link>
                <Link to="/registration">
                    <button className="loginBut">REGISTER</button>
                </Link>
            </div>
            
        </div>
    )
}
