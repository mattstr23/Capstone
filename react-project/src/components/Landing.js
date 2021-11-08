import React from 'react'
import '../Styling/Landing.css'
import Logo from '../assets/LandingLogo.png'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <div className="Landing">
            <div className="landingCont">
                <div className="landingLogoArea">
                    <img src={Logo} className="Logo" alt="Logo"></img>
                    <h1 className="LogoName">LUNAR<br></br>EXCHANGE</h1>
                    <h3 className="InfoTxt">A crypto exchange market place</h3>
                </div>
                <div className="userAreaCont">
                    <p className="pageInfo"> Lunar Exchange is your all in one crypto portfolio builder and market watcher!<br></br>
                    Register an account below and take your portfolio TO THE MOON!</p>
                    <div className="landingButCont">
                        <Link to="/login">
                            <button className="loginBut">LOGIN</button>
                        </Link>
                        <Link to="/register">
                            <button className="regBut">REGISTER</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
