import React from "react";
import { useSelector } from "react-redux";
import Crypt from "./Crypt";
import "../Styling/Portfolio.css";
import NavLogo from "../assets/NavLogo.png";
import { getUserCrypto } from "../functions/GeneralFunctions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Portfolio() {
	const [cryptos, setCryptos] = useState();
	const dispatch = useDispatch();

	useEffect(() => {
		getUserCrypto(dispatch);
		console.log(cryptos);
	}, []);

	const portfolio = useSelector((state) => state.portfolioData);
	return (
		<div className="portfolio">
			<div className="portHeaderCont">
				<img src={NavLogo} alt="logo"></img>
				<h2>PORTFOLIO</h2>
			</div>
			<div className="portfolioCont">
				{portfolio?.map((crypt) => (
					<Crypt key={crypt.id} crypt={crypt} />
				))}
			</div>
		</div>
	);
}
