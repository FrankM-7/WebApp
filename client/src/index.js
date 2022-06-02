import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Register } from './Register';
import { Login } from './Login';
import { Prelogin } from './Prelogin';
import { Home } from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path='' element={< Prelogin />} />
          <Route path="register" element={< Register />} />
          <Route path="login" element={< Login />} />
          <Route path='home' element={< Home /> } />
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
