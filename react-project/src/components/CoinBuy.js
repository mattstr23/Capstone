import React from "react";
import ReactDOM from "react-dom";
import "../Styling/CoinBuy.css";
import NavLogo from "../assets/NavLogo.png";
import { useState } from "react";
import { useEffect } from "react";
import { buyCrypto } from "../functions/GeneralFunctions";

export default function CoinBuy({ open, close, coin }) {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coins, setCoins] = useState(coin);
  // console.log(coin);

  // function setThePrice() {
  //   let newNum = coin.current_price.split("");
  //   let newResult = newNum.filter((word) => word != "$" && word != ",");
  //   let newNewResult = newResult.join("");
  //   let num = parseFloat(newNewResult);

  //   setPrice(num);
  // }

  useEffect(() => {
    let final = qty * price;
    let finalFormat = final.toString();
    setTotalPrice(finalFormat);
  }, [qty]);
  //

  const resetPricesOnClose = (close) => {
    setQty(0);
    setPrice(0);
    setTotalPrice(0);
    close();
  };

  const formatNumbers = (coinPrice) => {
    let newNum = coinPrice.split("");
    let newResult = newNum.filter((word) => word != "$" && word != ",");
    let newNewResult = newResult.join("");
    let num = parseInt(newNewResult);
    return num;
  };
  function getQty(value, coinPrice) {
    // console.log({ value });

    const num = formatNumbers(coinPrice);
    let amount = parseInt(value);

    let final = price * qty;

    let finalFinal = final.toString();
    setPrice(num);
    // console.log({ amount });
    if (!value) {
      setQty(0);
    } else {
      setQty(amount);
    }
  }
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
            <i
              onClick={() => resetPricesOnClose(close)}
              class="fas fa-times"
            ></i>
          </div>
        </div>
        <div className="purchaseInfo">
          <div className="purchaseCoinInfo">
            <img src={coin.image} alt="Crypto"></img>
            <h2>{coin.name}</h2>
          </div>
          <p>Current Price: {coin.current_price}</p>
          <input
            onChange={(e) => getQty(e.target.value, coin.current_price)}
            className="purchaseQty"
            type="number"
            min="1"
            max=""
            placeholder="Qty"
            required
          />
          <p>Order Total</p>
          <p>${totalPrice}</p>
          <button onClick={() => buyCrypto(coin)} className="purchaseButton">
            Buy
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
