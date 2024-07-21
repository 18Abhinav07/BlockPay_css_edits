import React, { useState } from "react";
import Sidebar from "./components3/Sidebar";
import MainContent from "./components3/MainContent";
import { useNavigate } from "react-router-dom";
import sidebarClick from "./utils/sidebarClick";

const Dashboard = () => {
  const navigate = useNavigate();
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




          .employees-section {
            background-color: #eff2f41a;
            padding: 10px 40px 30px 40px;
            border-radius: 10px;
            margin-bottom: 20px;
          }
          
          .employees-section h2 {
            margin-bottom: 10px;
          }
          
          .add-employee-btn {
            width: 132px;
            height: 30px;
            background: #0D99FF;
            border: 1px;
            color: #fff;
            border-radius: 4px;
            padding: 6px, 11.97px, 6px, 13px
            cursor: pointer;
            margin-bottom: 10px;
          }

          .update-employee-btn {
            width: 141px;
            height: 30px;
            background: #2C2C2C;
            border: 1px;
            color: #fff;
            border-radius: 4px;
            padding: 6px, 11.97px, 6px, 13px
            cursor: pointer;
            margin-bottom: 10px;
            margin-right: 10px;
          }
          
          .employees-table {
            width: 100%;
            border-collapse: collapse;
          }

          .table-header{
            background: #EFF2F41A;
          }

          

          
          .employees-table th,
          .employees-table td {
            padding: 10px;
            border-bottom: 1px solid #333;
            text-align: left;
          }
          
          .employees-table .senior {
            color: #4caf50;
          }
          
          .employees-table .intern {
            color: #ff9800;
          }







          .images {
            display: flex;
            justify-content: space-between;
            align-itmes: center;
            width: 100%;
          }
          
          .mapImage, .countriesImage {
            height: auto;
            border: 1px solid #444444;
          }
          
          .mapImage {
            width: 60%;
            border-radius: 6px 0px 0px 6px;
          }
          
          .countriesImage {
            width: 35%;
            border-radius: 0px 6px 6px 0px;
          }

          .employee-image {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            vertical-align: middle;
          }

          .employees-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
              
        `}
      </style>
      <div className="dashboard">
        <Sidebar selected={selected} handleItemClick={handleItemClick} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
