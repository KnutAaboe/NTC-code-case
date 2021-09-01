import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import App from './App';
import store from "./store"


//Bruker provider hvor vi legger inn store for at react components får tilgang
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


