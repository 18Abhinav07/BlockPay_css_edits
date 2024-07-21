import React from "react";
import "../styles.css";
import earth from "./images/earth.png";

const HeroSection = () => {
  return (
    <div className="Herobabyhome">
      <div className="hero-sectionhome">
        <h1>INFINITE PAY POSSIBILITIES</h1>
        <h2>with Blockchain Precision</h2>
        <p>
          Simplify your payroll process with our decentralized solution. Enjoy
          real-time transactions, immutable records, and effortless compliance,
          all while empowering your workforce with transparent and timely
          payments.
        </p>
        <button className="get-started-btnhome">Get Started</button>
      </div>
      <div className="globe-divhome">
        <img className="globehome" src={earth} alt="Earth" />
      </div>
    </div>
  );
};

export default HeroSection;
