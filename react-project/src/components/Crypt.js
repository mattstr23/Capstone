import React from "react";
import { useDispatch } from "react-redux";
import { deleteCrypt } from "../redux/actions/PortfolioActions";
import "../Styling/Crypt.css";
import { Link } from "react-router-dom";
import { deleteCrypto } from "../functions/GeneralFunctions";

export default function Crypt(props) {
	const cryptId = props.crypt.id;
	console.log(props);
	const dispatch = useDispatch();
	return (
		<div className="cryptCont">
			<div className="mainCryptInfo">
				<Link to={`/markets/${props.crypt.id}`}>
					<img className="portLogo" src={props.crypt.image} alt="Crypto"></img>
				</Link>
				<div className="importantName">
					<h3 className="cryptName">
						<Link to={`/markets/${props.crypt.id}`}>{props.crypt.name}</Link>
					</h3>
					<h4 className="cryptSymb">{props.crypt.symbol.toUpperCase()}</h4>
				</div>
			</div>
			<p className="crypCurrent">{props.crypt.current_price.toLocaleString()}</p>
			<div className="persChange">
				<div>
					<p className="changeTxt">1H: </p>
					{props.crypt.price_change_percentage_1h_in_currency < 0 ? (
						<p className="crypPer1 red">{props.crypt.price_change_percentage_1h_in_currency.toFixed(2)}%</p>
					) : (
						<p className="crypPer1 green">{props.crypt.price_change_percentage_1h_in_currency.toFixed(2)}%</p>
					)}
				</div>
				<div>
					<p className="changeTxt">24H: </p>
					{props.crypt.price_change_percentage_24h < 0 ? (
						<p className="crypPer24 red">{props.crypt.price_change_percentage_24h.toFixed(2)}%</p>
					) : (
						<p className="crypPer24 green">{props.crypt.price_change_percentage_24h.toFixed(2)}%</p>
					)}
				</div>
			</div>

			<button
				className="crypDelete"
				onClick={() => {
					deleteCrypto(props.crypt.cryptoDbId);
					alert("Crypto Removed");
				}}>
				REMOVE
			</button>
		</div>
	);
}
