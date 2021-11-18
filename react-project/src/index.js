import React from "react";
import ReactDOM from "react-dom";
import "../src/Styling/index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./redux/reducers/rootReducer";
import { checkLoggedIn } from "./functions/GeneralFunctions";
const store = createStore(rootReducer, applyMiddleware(logger));
// const token = localStorage.getItem("jsonwebtoken");
// console.log(token);
// const loggedIn = checkLoggedIn(token);
// console.log(loggedIn);
// if (loggedIn) {
//   store.dispatch({ type: "LOGGEDIN" });
// } else {
//   store.dispatch({ type: "NOTLOGGEDIN" });
// }
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
