import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Fibonacci from "./Fibonacci";
import Docs from "./Docs";

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Router>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="fibonacci" element={<Fibonacci />} />
        <Route path="docs" element={<Docs />} />
    </Routes>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
