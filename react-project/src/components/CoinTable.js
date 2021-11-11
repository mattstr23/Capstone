import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import "../Styling/CoinTable.css"

export default function CoinTable() {
    const coins = useSelector((state) => state.marketData)
    const [searchValue, SetSearchValue] = useState('')
    const cryptoFilter = coins?.data?.filter(coin => 
        coin.name.toLowerCase().includes(searchValue.toLowerCase()));
    const searchHandle = (e) => {SetSearchValue(e.target.value)}

    return (
        <div className="tableContainer">
            <input className="searchBar"onChange={searchHandle} type="search" placeholder="Lookup Crypto"/>
            <table className="coinTable">
                <thead className="tableHeader">
                    <tr className="headerRow">
                        <th className="rankHeader"><i class="fas fa-hashtag"></i></th>
                        <th className="nameHeader"><i class="fas fa-coins"></i> Coin</th>
                        <th className="priceHeader"><i class="fas fa-dollar-sign"></i>Price</th>
                        <th className="per1HHeader"><i class="fas fa-arrows-alt-v"></i> 1H</th>
                        <th className="per24Header"><i class="fas fa-arrows-alt-v"></i> 24H</th>
                        <th className="per7DHeader"><i class="fas fa-arrows-alt-v"></i> 7D</th>
                        <th className="volumeHeader"><i class="fas fa-balance-scale"></i>Volume</th>
                        <th className="capHeader"><i class="fas fa-balance-scale"></i>Market Cap</th>
                        <th className="emptyHeader"></th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {cryptoFilter?.map((coin) => (
                        <tr className="coinTicker">
                            <td className="tickRank">{coin.market_cap_rank}</td>
                            <td className="tickInfo">
                                <div className="topInfo">
                                    <img className="tickLogo" src={coin.image} alt="Crypto"></img>
                                    <p className="tickSymbol">{coin?.symbol?.toUpperCase()}</p>
                                </div>
                                <p className="tickName">{coin.name}</p>
                            </td>
                            <td className="tickPrice">${coin?.current_price}</td>
                            {coin?.price_change_percentage_1h_in_currency < 0 ? (
                                <td className="tickHourChange red">{coin?.price_change_percentage_1h_in_currency?.toFixed(1)}%</td>) 
                                : (<td className="tickHourChange green">{coin?.price_change_percentage_1h_in_currency?.toFixed(1)}%</td>)}
                            {coin?.price_change_percentage_24h_in_currency < 0 ? (
                                <td className="tick24HChange red">{coin?.price_change_percentage_24h_in_currency?.toFixed(1)}%</td>) 
                                : (<td className="tick24HChange green">{coin?.price_change_percentage_24h_in_currency?.toFixed(1)}%</td>)}
                            {coin?.price_change_percentage_7d_in_currency < 0 ? (
                                <td className="tickDayChange red">{coin?.price_change_percentage_7d_in_currency?.toFixed(1)}%</td>)
                                : (<td className="tickDayChange green">{coin?.price_change_percentage_7d_in_currency?.toFixed(1)}%</td>)}
                            <td className="tickVolume">${coin?.total_volume?.toLocaleString()}</td>
                            <td className="tickCap">${coin?.market_cap?.toLocaleString()}</td>
                            <td className="buttonCell"><button className="tickButton"><i class="fas fa-plus"></i></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

