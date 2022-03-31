import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from "react-router-dom";
import {Store} from './store/Store';
import {Provider} from 'react-redux'
Store.subscribe(()=>console.log(Store.getState()))

ReactDOM.render(
  <Router>
    <Provider store={Store}>
    <App />
</Provider>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
