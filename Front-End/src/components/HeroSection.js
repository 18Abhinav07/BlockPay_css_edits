import React from "react";
import "../styles.css"; // Make sure the correct path is used
import globe from "./images/backglobeimg.png"; // Path to your image
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="Herobabyhome">
      <div className="hero-sectionhome">
        <h1>EMPOWER YOUR PAYROLL WITH BLOCKCHAIN</h1>
        <h2>Unleashing future of payroll system</h2>
        <p>
          Simplify your payroll process with our decentralized solution. Enjoy
          real-time transactions, immutable records, and effortless compliance,
          all while empowering your workforce with transparent and timely
          payments.
        </p>
        <button
          className="get-started-btnhome"
          onClick={() => navigate("/register")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
