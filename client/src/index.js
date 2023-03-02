import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// creating a root by including a div
const root = ReactDOM.createRoot(document.getElementById('root'));

// creating and rendering a react app with App component being rendered
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
