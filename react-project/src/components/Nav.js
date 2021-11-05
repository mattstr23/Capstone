import React, {useState} from "react";
import NavLogo from "../assets/NavLogo.png";
import { NavLink } from "react-router-dom";
import "../Styling/Navbar.css";

export default function Nav() {
    const [ clicked, setClick ] = useState(false);

    const handleClick = () => setClick(!clicked);
	return (
		<>
		    <nav className="navbar">
                <div className="navbarCont">
				    <div className="logoArea">
                        <h2 className="siteName">DIGITAL<br></br>CRYPT</h2>
				    	<img src={NavLogo} className="navLogo" alt="Digital Crypt"></img>
				    </div>
				    <ul className={clicked ? "navItems active" : "navItems"}>
				    	<li className="navLinks">
				    		<NavLink exact to="/markets" activeClassName="active"className="navLink" onClick={handleClick}>
				    			<i class="fas fa-money-bill"></i>
				    			Markets
				    		</NavLink>
				    	</li>
				    	<li className="navLinks">
				    		<NavLink exact to="/portfolio" activeClassName="active"className="navLink" onClick={handleClick}>
				    			<i class="fas fa-money-check-alt"></i>
				    			Portfolio
				    		</NavLink>
				    	</li>
						<li className="navLinks">
				    		<NavLink exact to="/registration" activeClassName="active"className="navLink" onClick={handleClick}>
				    			<i class="fas fa-money-check-alt"></i>
				    			Register
				    		</NavLink>
				    	</li>
				    </ul>
                    <div className="menuButtons" onClick={handleClick}>
                        <i className={clicked ? "fas fa-times": "fas fa-bars"}></i>
                    </div>
                </div>
			</nav>
		</>
	);
}
