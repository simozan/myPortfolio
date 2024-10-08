import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";
import './index.css'


import "@fontsource/outfit"
import "@fontsource/roboto"


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);