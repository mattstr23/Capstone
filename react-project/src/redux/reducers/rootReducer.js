import { combineReducers } from "redux";
import marketData from "./MarketReducer";
import portfolioData from "./PortfolioReducer";
import RegistrationData from "./RegistrationReducer";
import AccountsPageReducer from "./AccountsPageReducer";

const rootReducer = combineReducers({
  marketData,
  portfolioData,
  RegistrationData,
  AccountsPageReducer,
});
export default rootReducer;
