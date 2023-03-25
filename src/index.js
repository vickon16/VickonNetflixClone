import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import GlobalStyles from './globalStyles';
import "normalize.css";
import FirebaseContextProvider from './context/FirebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContextProvider>
        <GlobalStyles />
        <App />
    </FirebaseContextProvider>
  </React.StrictMode>
);
