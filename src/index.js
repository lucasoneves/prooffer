import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";

// Provider inject the Store into react components
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
// import counterReducer from "./store/reducers/counter";
import reducer from './store/reducers/offers';

// Create the Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[MIDDLEWARE] Dispatching', action)
      const result = next(action);
      console.log('[MIDDLEWARE] next state', store.getState())
      return result;
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
