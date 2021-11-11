import React from 'react'
import "../Styling/Coin.css"
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCrypt } from '../redux/actions/PortfolioActions';

export default function Coin(props) {
    const priceChangePer = props.coin.price_change_percentage_24h;
    const priceChange = props.coin.price_change_24h;
    const dispatch = useDispatch();
    return (
        <div className="coinTick">
            <div className="mainCoinInfo">
                <div className="subCoinFo">
                    <img className="coinLogo" src={props.coin.image} alt="Crypto"></img>
                    <h4 className="coinSym">{props.coin.symbol.toUpperCase()}</h4>
                </div>
                <h3 className="coinName"><Link to={`/markets/${props.coin.id}`}>{props.coin.name}</Link></h3>
            </div>          
            <p className="coinPrice">${props.coin.current_price}</p>
            {priceChangePer < 0 ? (
                <p className="coinChange red">${priceChange.toFixed(5)}</p>
            ) : (
                <p className="coinChange green">${priceChange.toFixed(5)}</p>
            )}
            {priceChange < 0 ? (
                <p className="coinPer red">{priceChangePer.toFixed(2)}%</p>
            ) : (
                <p className="coinPer green">{priceChangePer.toFixed(2)}%</p>
            )}
            <button className="addBut" onClick={() => addCrypt(dispatch, props.coin)}>ADD</button>
        </div>
    )
}