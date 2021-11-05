import React from 'react'
import '../Styling/Landing.css'
import Logo from '../assets/LandingLogo.png'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="Landing">
            <img src={Logo} className="Logo" alt="Logo"></img>
            <h1 className="LogoName">DIGITAL CRYPT</h1>
            <div className="Info">
                <h3 className="InfoTxt">Welcome to Digital Crypt<br></br>Check out the markets!</h3>
                <Link to="/login">
                    <button className="loginBut">LOGIN</button>
                </Link>
            </div>
            
        </div>
    )
}
