import { combineReducers } from "redux";
import marketData from "./MarketReducer";
import portfolioData from "./PortfolioReducer";
import RegistrationData from "./RegistrationReducer";
import AccountsPageReducer from "./AccountsPageReducer";
import verify from "./AppReducer";

const rootReducer = combineReducers({
  marketData,
  portfolioData,
  RegistrationData,
  AccountsPageReducer,
  verify,
});
export default rootReducer;
