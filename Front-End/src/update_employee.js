import React, { useState } from "react";
import Sidebar from "./components3/Sidebar";
import MainContent from "./components2/MainContent";
import { useLocation, useNavigate } from "react-router-dom";
import sidebarClick from "./utils/sidebarClick";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state || {};
  const [selected, setSelected] = useState("Dashboard");

  const handleItemClick = (item) => {
    sidebarClick(item, setSelected, navigate);
  };

  return (
    <div>
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
          }
          
          .dashboard {
            display: flex;
            width: 100%;
            height: 100vh;
            background: #021011;
            overflow: hidden; /* Prevent double scrollbar */
          }
          
          .sidebar-container {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            display: flex;
            flex-direction: column;
            transition: transform 0.3s ease-in-out;
          }
          
          .sidebar-container.collapsed .sidebar {
            transform: translateX(-180px);
          }
          
          .sidebar-container .sidebar-toggle-button {
            position: fixed;
            top: 20px;
            left: 10px;
            background: #0d99ff;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            z-index: 1000;
          }
          
          .sidebar {
            width: 180px;
            height: 100%;
            border-right: 1px solid #444444;
            background: #eff2f41a;
            color: #b3b3b3;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow-y: scroll; /* Allow scrolling */
          }
          
          .sidebar::-webkit-scrollbar {
            display: none; /* Hide the scrollbar */
          }
          
          .company-name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            padding: 20px;
          }
          
          .toggle-button {
            background: none;
            border: none;
            color: #b3b3b3;
            font-size: 20px;
            cursor: pointer;
          }
          
          .sidebar-header,
          .sidebar-header-2 {
            padding: 20px;
            font-size: 14px;
            color: #0d99ff;
            font-weight: 500;
          }
          
          .blockpay-logo {
            width: 100%;
          }
          
          .sidebar-menu ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          
          .sidebar-menu ul li {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            cursor: pointer;
          }
          
          .sidebar-menu ul li:hover,
          .sidebar-menu ul li.active {
            background: #0d99ff0d;
            color: white;
          }
          
          .sidebar-menu ul li .icon {
            margin-right: 10px;
            width: 20px;
            height: 20px;
          }
          
          .features-list li {
            display: flex;
            justify-content: space-between; /* Align bullet to the right */
            position: relative;
          }
          
          .features-list li .diamond-bullet {
            position: absolute;
            right: 10px;
            color: #0d99ff;
            font-size: 12px;
          }
          
          .help-desk {
            padding: 10px;
            background: #0d99ff;
            text-align: center;
            font-size: 14px;
            color: white;
            cursor: pointer;
            margin: 20px;
          }
          
          .main-content {
            flex: 1;
            padding: 20px;
            background: #021011;
            color: #fff;
            overflow-y: auto; /* Ensure single scrollbar */
          }
          
          .logohome {
            font-size: 20px;
            font-weight: bold;
          }
          
          .main-header {
            display: flex;
            justify-content: space-between; /* Align to the right */
            align-items: center;
          }
          
          .user-profile {
            display: flex;
            align-items: center;
          }
          
          .user-profile button {
            margin-right: 20px;
            padding: 10px 20px;
            background: #1e90ff;
            border: none;
            color: #fff;
            cursor: pointer;
            border-radius: 5px;
          }
          
          .user-info {
            margin-left: 10px;
            text-align: right;
          }
          
          .user-info span {
            display: block;
          }
          
          .icon {
            width: 24px; /* Adjust size as needed */
            height: 24px; /* Adjust size as needed */
            margin-right: 20px; /* Spacing between icons */
            cursor: pointer; /* Pointer cursor for icons */
          }
          
          .user-profile .notification-icon {
            margin-right: 20px; /* Extra spacing between notification and logout */
          }
          
          .dashboard-header {
            background-color: #eff2f41a;
            display: flex;
            justify-content: baseline;
            align-items: center; /* Align items vertically in the center */
            margin: 20px 0;
            padding: 8px;
            border-radius: 10px;
          }
          
          .dashboard-header h1 {
            margin: 0;
            font-size: 18px;
            margin-right: 20px; /* Add space between the heading and the breadcrumb */
          }
          
          .breadcrumb {
            font-size: 14px;
            color: #7d7d7d;
          }
          
          .main-contentsUpdateE {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #eff2f41a;
            padding: 20px;
            border-radius: 8px;
            width: 95%;
            margin: 20px auto;
          }
          
          .profile-headerUpdateE {
            display: flex;
            align-items: center;
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #ddd;
          }
          
          .profile-imgUpdateE {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-right: 20px;
          }
          
          .profile-infoUpdateE {
            flex-grow: 1;
          }
          
          .profile-infoUpdateE h2 {
            margin: 0;
            font-size: 24px;
          }
          
          .profile-actionsUpdateE {
            display: flex;
            align-items: center;
          }
          
          .edit-profileUpdateE,
          .remove-employeeUpdateE {
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            margin-left: 10px;
            cursor: pointer;
          }
          
          .edit-profileUpdateE {
            background-color: #007bff;
            color: #fff;
          }
          
          .remove-employeeUpdateE {
            background-color: transparent;
            border: 1px solid #dc3545;
            color: #dc3545;
          }
          
          .main-content-wrapperUpdateE {
            display: flex;
            width: 100%;
            gap: 5px;
            margin-top: 20px;
          }
          
          .sidebarUpdateE {
            display: flex;
            flex-direction: column;
            width: 450px;
            border: 1px solid #a2a1a833;
            margin-right: 20px;
          }
          
          .tabUpdateE {
            padding: 15px 20px;
            cursor: pointer;
            color: #ffffff;
            font-family: Inter;
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
            align-content: center;
          }
          
          .tabUpdateE:hover {
            background-color: #0d99ff;
          }
          
          .profile-detailsUpdateE {
            width: 2100px;
            flex-grow: 1;
            border: 1px solid #a2a1a833;
            border-radius: 8px;
            padding: 20px;
          }
          
          .personal-infoUpdateE {
            display: flex;
            flex-direction: column;
          }
          
          .personal-infoUpdateE h3 {
            margin-bottom: 20px;
            color: #007bff;
          }
          
          .info-rowUpdateE {
            display: flex;
            flex-wrap: wrap;
          }
          
          .info-itemUpdateE {
            width: 45%;
            margin-bottom: 15px;
          }
          
          .info-itemUpdateE input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
          }
          
          .save-profileUpdateE {
            background-color: #28a745;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            align-self: flex-end;
          }
          
          .tabsUpdateE {
            display: flex;
            border-bottom: 1px solid #ddd;
            margin-bottom: 20px;
          }
          
          .tabUpdateE.active {
            color: cyan;
          }
          
          .tab-contentUpdateE {
            border: 1px solid #a2a1a833;
            border-radius: 8px;
            padding: 20px;
          }
          
          .Img-icons {
            margin-right: 10px;
            width: 18px;
            height: 20px;
            top: 2px;
            left: 3px;
            border: 1.5px 0px 0px 0px;
          }
          
          .editing-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px; /* Reduce gap between items */
          }
          
          .editing-input {
            background-color: #eff2f41a;
            color: white;
            border: 1px solid #00f;
            padding: 5px;
            width: 100%; /* Ensure the input takes full width of the grid cell */
            margin-top: 5px; /* Add small margin to input fields to reduce gap */
          }
          
          .info-labelUpdateE,
          .info-valueUpdateE {
            display: inline-block;
          }
          
          .editable-form {
            display: flex;
            flex-direction: column;
          }
          
          .info-labelUpdateE {
            height: 30px;
            font-weight: bold;
            margin-right: 5px;
            font-family: Inter;
            color: #a2a1a8;
            font-size: 12px;
          }
          
        `}
      </style>
      <div className="dashboard">
        <Sidebar selected={selected} handleItemClick={handleItemClick} />
        <MainContent employee={data} />
      </div>
    </div>
  );
};

export default Dashboard;
