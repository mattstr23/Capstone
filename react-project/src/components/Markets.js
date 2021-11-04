import React from 'react';
import {useSelector} from 'react-redux';
import Coin from './Coin';
import "../Styling/Markets.css"
import { useState } from 'react';

export default function Markets() {
    const markets = useSelector((state) => state.marketData);

    const [searchValue, SetSearchValue] = useState('')

    async function SearchCoins(name){
        const lowerCaseName = name.toLowerCase()
        const coinData = await fetch(`https://api.coingecko.com/api/v3/coins/${lowerCaseName}`)
        const jsonCoinData = await coinData.json()
        console.log(jsonCoinData)
    }

    return (
        <div className="marketsPage">
            
            <div className="infoArea">
                <h1 className="welcome">Welcome to Digital Crypt</h1>
                <h4 className="greeting">Browse the markets below, click the name of the Crypto to see more on it</h4>
                <h1 className="infoTitle">MARKETS</h1>
            </div>
            <div><input onChange={(e) => SetSearchValue(e.target.value)}type="search" placeholder="Search by Coin"/>
            <button onClick={()=> SearchCoins(searchValue)}>Search</button>
            </div>
            <div className="coinCont">
                {markets?.data?.map((coin) => <Coin key={coin.id}coin={coin}/>)}
            </div>

        </div>
    )
}
