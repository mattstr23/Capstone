import React from "react";
import { useDispatch } from "react-redux";
import { deleteCrypt } from "../redux/actions/PortfolioActions";
import "../Styling/Crypt.css";
import { Link } from "react-router-dom";

export default function Crypt(props) {
  console.log(props);
  const dispatch = useDispatch();
  return (
    <div className="cryptCont">
      <div className="mainCryptInfo">
        <img className="portLogo" src={props.crypt.image} alt="Crypto"></img>
        <h1 className="cryptName">
          <Link to={`/markets/${props.crypt.id}`}>{props.crypt.name}</Link>
        </h1>
        <h2 className="cryptSymb">Sym: {props.crypt.symbol}</h2>
      </div>
      <div className="otherInfo">
        <p className="crypCurrent">
          Current Price: ${props.crypt.current_price}
        </p>
        <p className="crypPriceChange">
          Price Change (24hr): ${props.crypt.price_change_24h}
        </p>
        <p className="cryptPerChange">
          Percent Change (24hr): {props.crypt.price_change_percentage_24h}%
        </p>
        <p className="cryptVolume">Volume: {props.crypt.total_volume}</p>
        <button
          className="crypDelete"
          onClick={() => deleteCrypt(dispatch, props.crypt.id)}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
