import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { rootReducers } from './redux/reducer';
import { applyMiddleware, createStore} from 'redux';
import {thunk} from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

const bookStore = createStore(
  rootReducers,
  applyMiddleware(thunk)
);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={bookStore} >
    <BrowserRouter basename='/Capston-Project-Book-Store'>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
