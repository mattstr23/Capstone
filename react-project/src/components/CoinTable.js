import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../Styling/CoinTable.css";
import { Link } from "react-router-dom";
import { formatCurrency } from "@coingecko/cryptoformat";
import CoinBuy from "./CoinBuy";

export default function CoinTable() {
	const coins = useSelector((state) => state.marketData);

	const [openTransaction, setOpenTransaction] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [currentCoin, setCurrentCoin] = useState({});

	const searchHandle = (e) => {
		setSearchValue(e.target.value);
	};
	// This filters through the coins, formats the price on each coin, replaces coin.current_price to be the new formatted price
	const formatCrypto = (coin) => {
		const format = coins?.data?.map((crypto) => {
			const price = formatCurrency(crypto.current_price, "USD", "en", false);
			let coinFormat = { ...crypto, current_price: price };
			return coinFormat;
		});
		return format;
	};
	// Allows user to search crypto
	const formattedCoins = formatCrypto();
	const cryptoFilter = formattedCoins?.filter((coin) => coin.name.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<div className="tablePageContainer">
			<CoinBuy open={openTransaction} close={() => setOpenTransaction(false)} coin={currentCoin} />
			<div className="marketLandingCont">
				<div className="cryptoTableInfo">
					<div className="cryptoSearchCont">
						<h3 className="searchHeader">
							Market Search <i class="fas fa-search"></i>
						</h3>
						<input className="coinSearch" onChange={searchHandle} type="text" placeholder="Crypto Name" />
					</div>
					<h4>Cryptos Ranked by Market Cap</h4>
				</div>
			</div>
			<table className="coinTable">
				<thead className="tableHeader">
					<tr className="headerRow">
						<th className="rankHeader">
							<i class="fas fa-hashtag"></i>
						</th>
						<th className="nameHeader">
							<i class="fas fa-coins"></i> Coin
						</th>
						<th className="priceHeader">
							<i class="fas fa-dollar-sign"></i>Price
						</th>
						<th className="per1HHeader">
							<i class="fas fa-arrows-alt-v"></i> 1H
						</th>
						<th className="per24Header">
							<i class="fas fa-arrows-alt-v"></i> 24H
						</th>
						<th className="per7DHeader">
							<i class="fas fa-arrows-alt-v"></i> 7D
						</th>
						<th className="volumeHeader">
							<i class="fas fa-balance-scale"></i>Volume
						</th>
						<th className="capHeader">
							<i class="fas fa-balance-scale"></i>Market Cap
						</th>
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
								<Link style={{ textDecoration: "none", color: "inherit" }} to={{ pathname: `/markets/${coin.id}` }}>
									<p className="tickName">{coin.name}</p>
								</Link>
							</td>
							<td className="tickPrice">{coin.current_price}</td>
							{coin?.price_change_percentage_1h_in_currency < 0 ? (
								<td className="tickHourChange red">{coin?.price_change_percentage_1h_in_currency?.toFixed(1)}%</td>
							) : (
								<td className="tickHourChange green">{coin?.price_change_percentage_1h_in_currency?.toFixed(1)}%</td>
							)}
							{coin?.price_change_percentage_24h_in_currency < 0 ? (
								<td className="tick24HChange red">{coin?.price_change_percentage_24h_in_currency?.toFixed(1)}%</td>
							) : (
								<td className="tick24HChange green">{coin?.price_change_percentage_24h_in_currency?.toFixed(1)}%</td>
							)}
							{coin?.price_change_percentage_7d_in_currency < 0 ? (
								<td className="tickDayChange red">{coin?.price_change_percentage_7d_in_currency?.toFixed(1)}%</td>
							) : (
								<td className="tickDayChange green">{coin?.price_change_percentage_7d_in_currency?.toFixed(1)}%</td>
							)}
							<td className="tickVolume">${coin?.total_volume?.toLocaleString()}</td>
							<td className="tickCap">${coin?.market_cap?.toLocaleString()}</td>
							<td className="buttonCell">
								<button
									className="tickButton"
									onClick={() => {
										setOpenTransaction(true);
										setCurrentCoin(coin);
									}}>
									+
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
