import React from "react";
import "../styles.css";
import globe from "./images/backglobe.svg"; // Path to your image
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="Herobabyhome">
        <img className="top-globe" src={globe} alt="Globe" />
        <div className="hero-sectionhome">
          <h1>INFINITE PAY POSSIBILITIES</h1>
          <h2>with Blockchain Precision</h2>
          <p>
            Simplify your payroll process with our decentralized solution. Enjoy
            real-time transactions, immutable records, and effortless
            compliance, all while empowering your workforce with transparent and
            timely payments.
          </p>
          <button
            className="get-started-btnhome"
            onClick={() => navigate("/register")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="video-sectionhome">
        <iframe
          src="https://www.youtube.com/embed/5pfac1x3Fb8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          
          ></iframe>
      </div>
      <div className="bottom-sectionhome">
        <img className="bottom-globe" src={globe} alt="Globe" />
        <div className="bottom-text">
          <h2 style={{ width: "550px" }}>
            The Only Payroll Platform You Will Ever Need
          </h2>
          <h4 style={{ width: "550px", width: "263px" }}>
            Everything you need right is in your hands
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
