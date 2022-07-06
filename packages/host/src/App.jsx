import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import "./index.css";
const Avatar = React.lazy(() => import("components/Avatar"));

import Theme from './theme'
import { store } from "./store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Theme />
    </Provider>
  </BrowserRouter >
);
ReactDOM.render(<App />, document.getElementById("app"));
