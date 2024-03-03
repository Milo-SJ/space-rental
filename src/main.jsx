import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createStore } from "redux";
import { reducer } from "./redux/reducer.js";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Route>
      <Provider store={store}>
        <App />
      </Provider>
    </Route>
  </React.StrictMode>
);
