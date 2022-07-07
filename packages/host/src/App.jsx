import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'

import "./index.css";

import Theme from './theme'
import { store } from "./store";

import { BrowserRouter } from 'react-router-dom'
const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Theme />
    </Provider>
  </BrowserRouter >
);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
