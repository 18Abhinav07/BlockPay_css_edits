import React, { useState } from "react";
import profilePicture from "../icons/profile.svg";
import projectManagerIcon from "../icons/projectmanager.svg";
import emailIcon from "../icons/email.svg";
import profileIcon from "../icons/profile.svg";
import attendanceIcon from "../icons/attendance.svg";
import projectsIcon from "../icons/project.svg";
import leaveIcon from "../icons/leave.svg";
import personalInfoIcon from "../icons/profileinfo.svg";
import professionalInfoIcon from "../icons/professionalinfo.svg";
import documentsIcon from "../icons/documents.svg";
import accountAccessIcon from "../icons/accountaccess.svg";
import Dp from "../icons/Dp.svg";
import Emp1 from "../icons/emp1.svg";
import Emp2 from "../icons/emp2.svg";
import Emp3 from "../icons/emp3.svg";

import settingsIcon from "../icons/settings.svg";
import notificationIcon from "../icons/notification.svg";
import domain from "../domain";
import axios from "axios";
const MainContent = ({ employee }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    Name: employee.name,
    Email: "brooklyn.s@example.com",
    Salary: employee.salary,
    Account: employee.account,
    MobileNumber: "(702) 555-0122",
    DateOfBirth: "July 14, 1995",
    PayStartDate: "1",   // TODO
    PayEndDate: "30",
    Gender: "Female",
    MaritalStatus: "Married",
    Nationality: "America",
    Address: "2464 Royal Ln. Mesa, New Jersey",
    State: "California",
    ZipCode: "35624",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const getRandomImage = (account) => {
    const lastChar = account.charAt(account.length - 1);
    if (isNaN(lastChar)) return Emp1;

    const num = Number(lastChar);

    return num % 2 == 0 ? Emp2 : Emp3;
  };

  const handleSaveClick = async () => {
    try {
      const url = `${domain}/admin/update-employee`;
      const token = localStorage.getItem("token");
      const bodyData = {
        "account": "0x670affaBA03808c0c1a0CEFf17820B3d2d4aEfE9",
        "salary": "20000000000000000",
        "payStartDate": "1",
        "payEndDate": "30"
      }
      const res = await axios.put(url, bodyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setIsEditing(false);

    } catch (err) {
      console.log("update emp error");
    }
    
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [activeTab, setActiveTab] = useState("personalInfo");

  const renderTabContent = () => {
    switch (activeTab) {
      case "personalInfo":
        return (
          <div
            className={`info-rowUpdateE ${
              isEditing ? "editing-container" : ""
            }`}
          >
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="info-itemUpdateE">
                <span className="info-labelUpdateE">
                  {key.replace(/([A-Z])/g, " $1").trim()}:{" "}
                </span>
                {isEditing ? (
                  <div className="editable-form">
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="editing-input"
                    />
                  </div>
                ) : (
                  <span className="info-valueUpdateE">{value}</span>
                )}
              </div>
            ))}
          </div>
        );
      case "professionalInfo":
        return <div>Professional Information Content</div>;
      case "documents":
        return <div>Documents Content</div>;
      case "accountAccess":
        return <div>Account Access Content</div>;
      default:
        return null;
    }
  };
  return (
    <main className="main-content">
      <header className="main-header">
        <div className="logohome">BlockPay</div>
        <div className="user-profile">
          <img
            src={settingsIcon}
            alt="Settings"
            className="icon settings-icon"
          />
          <img
            src={notificationIcon}
            alt="Notifications"
            className="icon notification-icon"
          />
          <button>Logout</button>
          <div className="user-info">
            <span>Thomas Fleming</span>
            <span>info@gmail.com</span>
          </div>
        </div>
      </header>
      <div>
        <section className="dashboard-header">
          <h1>Update Employee</h1>

          <div className="breadcrumb">Home / Employee</div>
        </section>
      </div>
      <div className="main-contentsUpdateE">
        <div className="profile-headerUpdateE">
          <img src={getRandomImage(employee.account)} alt="Profile" className="profile-imgUpdateE" />
          <div className="profile-infoUpdateE">
            <h2>{employee.name}</h2>
            <br />
            <span>
              <img src={projectManagerIcon} alt="Email" className="Img-icons" />
              {employee.designation}
            </span>
            <br />
            <span>
              <img src={emailIcon} alt="Email" className="Img-icons" />
              brooklyn.s@example.com
            </span>
          </div>
          <div className="profile-actionsUpdateE">
            <button className="edit-profileUpdateE" onClick={handleEditClick}>
              Edit Profile
            </button>
          </div>
        </div>
        <div className="main-content-wrapperUpdateE">
          <div className="sidebarUpdateE">
            <div className="tabUpdateE">
              <img src={profileIcon} alt="Email" className="Img-icons" />
              Profile
            </div>
            <div className="tabUpdateE">
              <img src={attendanceIcon} alt="Email" className="Img-icons" />
              Attendance
            </div>
            <div className="tabUpdateE">
              <img src={projectsIcon} alt="Email" className="Img-icons" />
              Projects
            </div>
            <div className="tabUpdateE">
              <img src={leaveIcon} className="Img-icons" />
              Leave
            </div>
          </div>
          <div className="profile-detailsUpdateE">
            <div className="tabsUpdateE">
              <div
                className={`tabUpdateE ${
                  activeTab === "personalInfo" ? "active" : ""
                }`}
                onClick={() => setActiveTab("personalInfo")}
              >
                <img src={personalInfoIcon} className="Img-icons" />
                Personal Information
              </div>
              <div
                className={`tabUpdateE ${
                  activeTab === "professionalInfo" ? "active" : ""
                }`}
                onClick={() => setActiveTab("professionalInfo")}
              >
                <img
                  src={professionalInfoIcon}
                  alt="Email"
                  className="Img-icons"
                />
                Professional Information
              </div>
              <div
                className={`tabUpdateE ${
                  activeTab === "documents" ? "active" : ""
                }`}
                onClick={() => setActiveTab("documents")}
              >
                <img src={documentsIcon} alt="Email" className="Img-icons" />{" "}
                Documents
              </div>
              <div
                className={`tabUpdateE ${
                  activeTab === "accountAccess" ? "active" : ""
                }`}
                onClick={() => setActiveTab("accountAccess")}
              >
                <img
                  src={accountAccessIcon}
                  alt="Email"
                  className="Img-icons"
                />{" "}
                Account Access
              </div>
            </div>
            <div className="tab-contentUpdateE">{renderTabContent()}</div>
            {isEditing && (
              <button className="save-profileUpdateE" onClick={handleSaveClick}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
