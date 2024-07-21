import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HrDashboard from "./hr_onboard";


export default function MainApp() {
  return (
    <BrowserRouter>
    <App/>
  </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp />);
