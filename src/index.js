import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InstagramApp from './InstagramApp';

const instagramRoot = ReactDOM.createRoot(document.getElementById('instagram-root'));
instagramRoot.render(
  <React.StrictMode>
    <InstagramApp />
  </React.StrictMode>
);

// Crear la raíz principal para App
const cartRoot = ReactDOM.createRoot(document.getElementById('root'));
cartRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
