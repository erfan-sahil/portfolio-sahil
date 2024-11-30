import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster className="text-gray-700 bg-black" style={{ fontFamily: "Caudex, serif" }}  />
  </React.StrictMode>,
)
