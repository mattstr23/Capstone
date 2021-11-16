import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Styling/CoinDetail.css";
import { formatCurrency } from "@coingecko/cryptoformat";
import PriceChange from "./PriceChange";
import Moment from "moment";

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

	const price = formatCurrency(info?.market_data?.current_price?.usd, "USD", "en", false);

	console.log(info);
	return (
		<div className="detailCont">
			<div className="cryptoInfo">
				<div className="mainDetailCont">
					<div className="cryptoMainInfo">
						<img className="coinImg" src={info?.image?.large} alt="Crypto"></img>
						<div className="nameInfo">
							<h2>{info?.name}</h2>
							<h3>{info?.symbol?.toUpperCase()}</h3>
							<p className="ranker">Market Rank #{info?.market_cap_rank}</p>
						</div>
					</div>
					<h2 className="currentPrice">{price}</h2>
					<h4 className="priceDifferenceHeader">24H High/Low</h4>
					<div className="priceDifferenceCont">
						<p className="differenceHigh">${info?.market_data?.high_24h?.usd?.toLocaleString()}</p>
						<p className="differenceLow">${info?.market_data?.low_24h?.usd?.toLocaleString()}</p>
					</div>
				</div>
				<div className="marketInfoCont">
					<div className="secondaryInfo">
						<div>
							<p>Market Cap</p>
							<p>${info?.market_data?.market_cap?.usd?.toLocaleString()}</p>
						</div>
						<div>
							<p>24H Cap Change</p>
							{info?.market_data?.market_cap_change_24h < 0 ? (
								<p className="red">${info?.market_data?.market_cap_change_24h?.toLocaleString()}</p>
							) : (
								<p>${info?.market_data?.market_cap_change_24h?.toLocaleString()}</p>
							)}
						</div>
						<div>
							<p>Volume</p>
							<p>${info?.market_data?.total_volume?.usd?.toLocaleString()}</p>
						</div>
						<div>
							<p>All Time High</p>
							<p>${info?.market_data?.ath?.usd?.toLocaleString()}</p>
						</div>
						<div>
							<p>All Time Low</p>
							<p>${info?.market_data?.atl?.usd?.toLocaleString()}</p>
						</div>
						<div>
							<p>Circulating Supply</p>
							<p>{info?.market_data?.circulating_supply?.toLocaleString()}</p>
						</div>
						<div>
							<p>Total Supply</p>
							<p>{info?.market_data?.total_supply?.toLocaleString()}</p>
						</div>
					</div>
					<PriceChange info={info} />
				</div>
			</div>
			<Link to="/markets">
				<button className="returnButton">
					<i class="fas fa-backward"></i>
				</button>
			</Link>
		</div>
	);
}
