import { combineReducers } from "redux";
import marketData from "./MarketReducer";
import portfolioData from "./PortfolioReducer";
import RegistrationData from "./RegistrationReducer";

const rootReducer = combineReducers({
    marketData,
    portfolioData,
    RegistrationData,
})
export default rootReducer