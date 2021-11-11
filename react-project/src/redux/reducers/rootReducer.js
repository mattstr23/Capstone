import { combineReducers } from "redux";
import marketData from "./MarketReducer";
import portfolioData from "./PortfolioReducer";
import RegistrationData from "./RegistrationReducer";
import logInData from "./LoginReducer";

const rootReducer = combineReducers({
  marketData,
  portfolioData,
  RegistrationData,
  logInData,
});
export default rootReducer;
