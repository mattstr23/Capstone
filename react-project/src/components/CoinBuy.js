import React from "react";
import ReactDOM from "react-dom";
import "../Styling/CoinBuy.css";
import NavLogo from "../assets/NavLogo.png";
import { useState } from "react";
import { useEffect } from "react";

export default function CoinBuy({ open, close, coin }) {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState();
  const [totalPrice, setTotalPrice] = useState();

  function setThePrice() {
    let newNum = coin.current_price.split("");
    let newResult = newNum.filter((word) => word != "$" && word != ",");
    let newNewResult = newResult.join("");
    let num = parseFloat(newNewResult);

    setPrice(num);
  }

  function getQty(value) {
    let newNum = coin.current_price.split("");
    let newResult = newNum.filter((word) => word != "$" && word != ",");
    let newNewResult = newResult.join("");
    let num = parseFloat(newNewResult);
    setPrice(num);
    let amount = parseFloat(value);
    setQty(amount);
    let final = price * qty;
    console.log(price);
    console.log(qty);
    // let finalFinal = parseInt(final);
    console.log(final);
    let finalFinal = final.toString();
    setTotalPrice(finalFinal);
  }

  //   useEffect(() => {
  //     setThePrice();
  //   }, []);

  if (!open) return null;

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
          <input
            onChange={(e) => getQty(e.target.value)}
            className="purchaseQty"
            type="number"
            min="1"
            max=""
            placeholder="Qty"
            required
          />
          <p>Order Total: $ {totalPrice}</p>
          <button className="purchaseButton">Buy</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
