import React from "react";
import ReactDOM from "react-dom";
import "../Styling/CoinBuy.css";
import NavLogo from "../assets/NavLogo.png";

export default function CoinBuy({ open, close, coin }) {
	if (!open) return null;
	console.log(coin);

	return ReactDOM.createPortal(
		<div className="purchaseOverlay">
			<div className="purchaseCont">
				<div className="modalHeader">
					<div className="headerTitle">
						<img src={NavLogo} alt="logo"></img>
						<h3>Transaction</h3>
					</div>
					<div className="modalClose">
						<i onClick={close} class="fas fa-times"></i>
					</div>
				</div>
				<div className="purchaseInfo">
					<div className="purchaseCoinInfo">
						<img src={coin.image} alt="Crypto"></img>
						<h2>{coin.name}</h2>
					</div>
					<p>Current Price: {coin.current_price}</p>
					<input className="purchaseQty" type="number" min="1" max="" placeholder="Qty" required />
					<p>Order Total: $ 123123123123</p>
					<button className="purchaseButton">Buy</button>
				</div>
			</div>
		</div>,
		document.getElementById("portal")
	);
}
