import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React,{useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { dispatchMarketInfo } from './redux/actions/MarketActions';
import Markets from './components/Markets';
import Landing from './components/Landing'; 
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import CoinDetail from './components/CoinDetail';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    fetchMarkets();
  }, []);
    const fetchMarkets = async () => {
        const getMarkets = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        const jsonMarkets = await getMarkets.json();
        dispatchMarketInfo(dispatch, jsonMarkets)
    };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/markets" exact>
            <Nav />
            <Markets />
          </Route>
          <Route path="/portfolio">
            <Nav />
            <Portfolio/>
          </Route>
          <Route path="/markets/:id">
            <Nav/>
            <CoinDetail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
