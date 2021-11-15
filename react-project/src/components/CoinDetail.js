import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../Styling/CoinDetail.css";

export default function CoinDetail() {
	let location = useParams();
	useEffect(() => {
		fetchInfo();
	}, []);
	const [info, setInfo] = useState({});
	const fetchInfo = async () => {
		const getCoin = await fetch(`https://api.coingecko.com/api/v3/coins/${location.id}?tickers=true`);
		const details = await getCoin.json();
		setInfo(details);
	};
	console.log(info);
	return (
		<div className="detailCont">
			<div className="mainDetailCont">
				<div className="mainInfo">
					<div className="nameCont">
						<h2>{info?.name}</h2>
						<h3>Symbol: {info?.symbol}</h3>
					</div>
					<img className="coinImg" src={info?.image?.large} alt="Crypto"></img>
				</div>
				<div className="marketInfo">
					<h3 className="marketTitle">Market Info</h3>
					<div className="infoCont">
						<div className="infoSet1">
							<p className="currentPrice">Current Price: ${info?.market_data?.current_price?.usd}</p>
							<p className="marketCapChange">Market Cap Change: {info?.market_data?.market_cap_change_24h}</p>
							<p className="marketCapChangePer">
								Market Cap Change: {info?.market_data?.market_cap_change_percentage_24h}%
							</p>
						</div>
						<div className="infoSet2">
							<p className="24High">24 Hour High: ${info?.market_data?.high_24h?.usd}</p>
							<p className="24Low">24 Hour Low: ${info?.market_data?.low_24h?.usd}</p>
							<p className="24Change">24 Hour Price Change: ${info?.market_data?.price_change_24h}</p>
						</div>
						<div className="infoSet3">
							<p className="supply">Circulating Supply: {info?.market_data?.circulating_supply}</p>
							<p className="maxSupply">Max Supply: {info?.market_data?.max_supply}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
