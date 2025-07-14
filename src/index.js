import React from 'react';
import ReactDOM from 'react-dom/client';
import './constant/importedCss'
import App from './App';

// main.jsx or index.js
document.documentElement.classList.add("lenis", "lenis-smooth");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

