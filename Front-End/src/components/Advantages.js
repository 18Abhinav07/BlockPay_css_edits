import React from "react";
import "../styles.css"; // Ensure this file contains your CSS
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";
import image4 from "./images/image4.svg";
import image5 from "./images/image5.svg";
import image6 from "./images/image6.svg";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="row">
        <div className="card">
          <div className="image-container">
            <img src={image1} alt="Currency Exchange Icon" />
          </div>
          <h3>Enjoy Lower Transaction Fees For Global Workforce</h3>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={image2} alt="Salary Payment Icon" />
          </div>
          <h3>Pay Your Entire Workforce Instantly In A Single Transaction.</h3>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={image3} alt="Money Wastage Icon" />
          </div>
          <h3>
            Smart Contracts Ensure Accuracy, Automate Processes Reducing
            Administrative Work.
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <div className="image-container">
            <img src={image4} alt="Performance Icon" />
          </div>
          <h3>
            Stablecoins Minimising Currency Fluctuations And Ensuring Reliable
            Payments.
          </h3>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={image5} alt="Finance Management Icon" />
          </div>
          <h3>Compliance Simplified Through Automation</h3>
        </div>
        <div className="card">
          <div className="image-container">
            <img src={image6} alt="Payroll Handling Icon" />
          </div>
          <h3>Real-time Reporting and Analytics</h3>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
