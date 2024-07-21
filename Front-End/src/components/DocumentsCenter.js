import React from "react";
import PaySlip from "../icons/pay-slip.avif";
import Download from "../icons/document-download.png";
import Form16 from "../icons/form16-icon.jpeg";
import ItDecleartion from "../icons/it-decleartion.png";
import FBP from "../icons/fbp-declaration.jpeg";

function DocumentsCenter() {
  return (
    <div className="document-center">
      <h2>Document Center</h2>
      <div className="documents-list">
        <div className="document">
          <div className="document-header">
            <img src={PaySlip} alt={"image"} className="document-icon" />
            <h1>Payslip</h1>
            <img src={Download} alt="image" className="document-icon" />
          </div>
          <div className="document-header">
            <img src={Form16} alt={"image"} className="document-icon" />
            <h1>Form 16</h1>
            <img src={Download} alt="image" className="document-icon" />
          </div>
          <div className="document-header">
            <img src={ItDecleartion} alt={"image"} className="document-icon" />
            <h1>IT Decleration</h1>
            <img src={Download} alt="image" className="document-icon" />
          </div>
          <div className="document-header">
            <img src={FBP} alt={"image"} className="document-icon" />
            <h1>FBP Decleration</h1>
            <img src={Download} alt="image" className="document-icon" />
          </div>
          {/* <div className="document-header">
            <img src={PaySlip} alt={"image"} className="document-icon" />
            <h1>YTD Reports</h1>
            <img src={Download} alt="image" className="document-icon"/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default DocumentsCenter;
