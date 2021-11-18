import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dispatchMarketInfo } from "./redux/actions/MarketActions";
import Markets from "./components/Markets";
import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import CoinDetail from "./components/CoinDetail";
import Login from "./components/Login";
import AccountsPage from "./components/AccountsPage";
import UpdateAccountsPage from "./components/UpdateAccountsPage";
import Registration from "./components/Registration";
import CoinTable from "./components/CoinTable";
import { requireAuth } from "./functions/GeneralFunctions";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		fetchMarkets();
	}, []);
	const fetchMarkets = async () => {
		const getMarkets = await fetch(
			"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d"
		);
		const jsonMarkets = await getMarkets.json();
		dispatchMarketInfo(dispatch, jsonMarkets);
	};

	return (
		<Router>
			<div className="App">
				<Switch>
					{requireAuth ? (
						<>
							<Route path="/markets" exact>
								<Nav />
								<CoinTable />
							</Route>
							<Route path="/extra">
								<Nav />
								<Markets />
							</Route>
							<Route path="/portfolio">
								<Nav />
								<Portfolio />
							</Route>
							<Route path="/markets/:id">
								<Nav />
								<CoinDetail />
							</Route>
							<Route path="/accounts">
								<Nav />
								<AccountsPage />
							</Route>
							<Route path="/updateaccounts">
								<Nav />
								<UpdateAccountsPage />
							</Route>
						</>
					) : (
						<>
							<Route path="/" exact component={Landing} />
							<Route path="/login" component={Login} />
							<Route path="/register" component={Registration} />
						</>
					)}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
