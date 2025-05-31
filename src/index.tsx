import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement); // Debugging line
if (!rootElement) {
  throw new Error("Root element with id 'root' not found. Ensure 'index.html' contains <div id='root'></div>.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
