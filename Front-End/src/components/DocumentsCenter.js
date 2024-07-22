import React from "react";
import PaySlip from "../icons/pay-slip.avif";
import Download from "../icons/document-download.png";
import Form16 from "../icons/form16-icon.jpeg";
import ItDecleartion from "../icons/it-decleartion.png";
import FBP from "../icons/fbp-declaration.jpeg";

function DocumentsCenter({ salaries, account }) {
  const downloadCSV = (csvData, name) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      csvData.map((e) => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${name}.csv`);
    document.body.appendChild(link); // Required for FF

    link.click();
    document.body.removeChild(link);
  };

  const csvForPaySlip = () => {
    const cols = ["Account address", "Salary Deposit", "Date"];
    const data = [cols];
    const scale = 1e18;

    for (const salary of salaries) {
      data.push([account, salary / scale, "20/8/23"]);
    }

    return data;
  };

  const csvForForm16 = () => {
    const cols = ["Employee ID", "Financial Year", "Gross Income", "Tax Paid"];
    const data = [cols];
    // Dummy data
    data.push(["E12345", "2023-2024", "500,000", "50,000"]);
    return data;
  };

  const csvForITDeclaration = () => {
    const cols = ["Employee ID", "Declaration Type", "Amount"];
    const data = [cols];
    // Dummy data
    data.push(["E12345", "Investment", "100,000"]);
    return data;
  };

  const csvForFBPDeclaration = () => {
    const cols = ["Employee ID", "FBP Component", "Amount"];
    const data = [cols];
    // Dummy data
    data.push(["E12345", "Meal Coupons", "12,000"]);
    return data;
  };

  return (
    <div className="document-center">
      <h2>Document Center</h2>
      <div className="documents-list">
        <div className="document">
          <div className="document-header">
            <img src={PaySlip} alt={"image"} className="document-icon" />
            <h1>Payslip</h1>
            <img
              src={Download}
              alt="image"
              className="document-icon"
              onClick={() => downloadCSV(csvForPaySlip(), "payslip")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="document-header">
            <img src={Form16} alt={"image"} className="document-icon" />
            <h1>Form 16</h1>
            <img
              src={Download}
              alt="image"
              className="document-icon"
              onClick={() => downloadCSV(csvForForm16(), "form16")}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="document-header">
            <img src={ItDecleartion} alt={"image"} className="document-icon" />
            <h1>IT Declaration</h1>
            <img
              src={Download}
              alt="image"
              className="document-icon"
              onClick={() =>
                downloadCSV(csvForITDeclaration(), "it_declaration")
              }
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="document-header">
            <img src={FBP} alt={"image"} className="document-icon" />
            <h1>FBP Declaration</h1>
            <img
              src={Download}
              alt="image"
              className="document-icon"
              onClick={() =>
                downloadCSV(csvForFBPDeclaration(), "fbp_declaration")
              }
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentsCenter;
