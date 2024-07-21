import React from "react";
import "../styles.css";
import Ellipse from "./images/Ellipse.png";
import EllipseR from "./images/EllipseR.png";

const ReformSection = () => {
  return (
    <section className="reform-sectionhome">
      <h2>Reforming Your Current Payroll System Is Literally This Easy</h2>
      <p>Everything you need right in your hands</p>
      <div className="stepshome">
        <div className="stephome">Step 1</div>
        <div className="connectorhome">
          <img src={Ellipse} alt="Connectorhome" />
        </div>
        <div className="stephome">Step 2</div>
        <div className="connectorRhome">
          <img src={EllipseR} alt="ConnectorRhome" />
        </div>
        <div className="stephome">Step 3</div>
        <div className="connector">
          <img src={Ellipse} alt="Connectorhome" />
        </div>
        <div className="stephome">Step 4</div>
      </div>
    </section>
  );
};

export default ReformSection;
