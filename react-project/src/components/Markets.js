import React from 'react';
import {useSelector} from 'react-redux';
import Coin from './Coin';
import "../Styling/Markets.css"
import { useState } from 'react';

export default function Markets() {
    const markets = useSelector((state) => state.marketData);

    const [searchValue, SetSearchValue] = useState('')

    const searchHandle = (e) => {SetSearchValue(e.target.value)}
    const cryptoFilter = markets?.data?.filter(coin => 
        coin.name.toLowerCase().includes(searchValue.toLowerCase()))

    


    return (
        <div className="marketsPage">
            
            <div className="infoArea">
                <h1 className="welcome">Welcome to Digital Crypt</h1>
                <h4 className="greeting">Browse the markets below, click the name of the Crypto to see more on it</h4>
                <h1 className="infoTitle">MARKETS</h1>
            </div>
            <div className="searchCont">
                <input className="searchBar"onChange={searchHandle} type="search" placeholder="Lookup Crypto"/>
            </div>
            <div className="coinCont">
                {cryptoFilter?.map((coin) => <Coin key={coin.id}coin={coin}/>)}
            </div>

        </div>
    )
}
