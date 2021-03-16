import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";

// Provider inject the Store into react components
import { createStore } from "redux";
import { Provider } from "react-redux";
// import counterReducer from "./store/reducers/counter";
import reducer from './store/reducers/offers';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
