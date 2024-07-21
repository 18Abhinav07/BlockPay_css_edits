import React from "react";
import "../styles.css";
import Employer from "./images/employer.png";
import Employee from "./images/employee.png";

const ReadyToGetStartedSection = () => {
  return (
    <section className="ready-to-get-started-sectionhome">
      <h2>Ready To Get Started?</h2>
      <p>The future of payrolls is here!</p>
      <div className="cardshome">
        <div className="cardhome">
          <img className="emprhome" src={Employer} alt="" />
          <h3>Are you an employer?</h3>
          <p>
            Enjoy real-time transactions, immutable records, and effortless
            compliance.
          </p>
          <button className="get-started-btnhome">Get Started</button>
        </div>
        <div className="cardhome">
          <br />
          <img className="emprhome" src={Employee} alt="" />
          <h3>Are you an employee?</h3>
          <p>
            Enjoy real-time transactions, immutable records, and effortless
            compliance.
          </p>
          <button className="learn-more-btnhome">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToGetStartedSection;
