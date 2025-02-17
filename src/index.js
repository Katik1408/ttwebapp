import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './Redux/Store/Store';
import { Tooltip } from 'react-tooltip';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store} >
    <App />
    <Tooltip id="my-tooltip" />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
);
reportWebVitals();
