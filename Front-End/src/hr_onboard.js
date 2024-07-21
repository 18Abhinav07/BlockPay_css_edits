import React, { useEffect, useState } from "react";
import "./styles.css";
import Dashboard from "./Dashboard";
import Sidebar from "./components/Sidebar";
import Content from "./components/content";
import TransactionHistory from "./components/TransactionHistory";
import blockPayLogo from "./icons/blockpay-logo.png";
import axios from "axios";
import domain from "./domain";
import sidebarClick from "./utils/sidebarClick";
import { useNavigate } from "react-router-dom";

const HrDashboard = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Dashboard");
  const [totalSalary, setTotalSalary] = useState("0");

  useEffect(() => {
    const fetchTotalSalary = async () => {
      try {
        const token = localStorage.getItem("token");
        const url = `${domain}/admin/total-salary`;
        const res = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = res.data;

        if (data.data) {
          setTotalSalary(data.data);
        }
      } catch (err) {
        console.log("fetch total salary error");
      }
    };

    fetchTotalSalary();
  });
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
          overflow-y: scroll;
          /* Allow scrolling */
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
           /* Align bullet to the right */
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
        
        .summary-cards {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .card {
          flex: 1;
        
          padding: 20px;
          width: 350px;
          background: #eff2f41a;
          border-radius: 10px;
          position: relative;
        }
        
        .card h2 {
          margin: 0 0 10px;
          font-size: 15px;
        }
        
        .card p {
          font-size: 20px;
          margin: 0 0 10px;
        }
        
        .card-icon {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 30px;
          height: 30px;
        }
        
        .card-icons {
          position: absolute;
          top: 20px;
          right: 5px;
          width: 30px;
          height: 30px;
        }
        
        .chart {
          margin-top: 20px;
        }
        
        .progress-bar {
          background-color: #d9d9d9;
          border-radius: 10px;
          overflow: hidden;
          height: 20px;
          margin-top: 10px;
          position: relative;
        }
        
        .progress {
          background-color: #4caf50;
          height: 100%;
          text-align: center;
          color: white;
          line-height: 20px;
          font-size: 14px;
        }
        
        .all-projects-card {
          display: flex;
          align-items: center;
        }
        
        .all-projects-content {
          display: flex;
          align-items: center;
        }
        
        .circular-graph {
          margin-right: 20px;
        }
        
        .project-status {
          display: flex;
          align-items: center;
          margin-top: 10px;
        }
        
        .status-icon {
          width: 15px;
          height: 15px;
          margin-right: 5px;
        }
        .main-overview {
          display: flex;
          gap: 20px;
        }
        
        .work-overview {
          flex: 1;
          padding: 20px;
          background: #eff2f41a;
          border-radius: 10px;
        }
        
        .transaction-list {
          display: flex;
          flex-direction: column;
        }
        
        .transaction-history {
          background-color: #eff2f41a;
          font-size: 15px;
          border-radius: 10px;
          padding: 10px;
          width: 500px;
          overflow-y: scroll;
          /* Allow scrolling */
        }
        
        .transaction-history::-webkit-scrollbar {
          display: none; /* Hide the scrollbar */
        }
        
        .transaction {
          display: flex;
        
          flex-direction: column;
          padding: 10px 0;
          border-bottom: 1px solid #333;
        }
        
        .transaction .transaction-header {
          display: flex;
        
          justify-content: space-between;
          align-items: left;
        }
        
        .transaction .transaction-header img {
          width: 113px; /* Adjust width accordingly */
          height: 26px;
        
          justify-content: left;
        }
        
        .transaction .transaction-amount {
          font-size: 18px;
          color: #fff;
          font-weight: bold;
          text-align: right;
        }
        
        .transaction .transaction-id {
          margin-top: 5px;
          color: #b3b3b3;
          font-size: 12px; /* Small font size for better look */
        }
        
        .transaction .transaction-date {
          margin-top: 5px;
          color: #b3b3b3;
        }
        .work-overview-bitcoin {
          background-color: #eff2f41a;
          color: white;
          padding: 20px;
          border-radius: 10px;
          width: 500px;
          margin: 0 auto;
        }
        
        .header-bitcoin {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .bitcoin-icon-bitcoin {
          width: 40px;
          height: 40px;
        }
        
        .header-bitcoin h2 {
          flex: 1;
          font-family: Inter;
          font-size: 23px;
          font-weight: 500;
          line-height: 28px;
          text-align: left;
          margin-left: 10px;
        }
        
        .currency-button-bitcoin button {
          background: #eff2f40a;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          border-width: 10px;
          border-color: #007bff;
          cursor: pointer;
          font-family: Poppins;
          font-size: 13.01px;
          font-weight: 400;
          line-height: 18px;
          text-align: center;
        }
        #rank {
          padding: 5px;
          background-color: #eff2f40a;
          height: 20px;
        }
        
        .watchlist-bitcoin {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
          color: #32ade6;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          text-align: left;
          height: 60px;
        }
        
        .price-bitcoin {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 10px;
          height: 90px;
        }
        
        .price-bitcoin h1 {
          margin: 0 10px 0 0;
          font-size: 2em;
          text-align: center;
        }
        
        .price-change-bitcoin {
          color: #00ff00;
          font-family: Inter;
          font-size: 14px;
          font-weight: 500;
          line-height: 17px;
          text-align: center;
        }
        
        .high-low-price-bitcoin {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          color: #32ade6;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          text-align: left;
        }
        
        .price-range-bitcoin {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        
        .stats-bitcoin {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 300px;
          gap: 10px;
          margin-top: 20px;
          text-align: left;
        }
        
        .stats-bitcoin div {
          background-color: #eff2f40a;
          padding: 10px;
          border-radius: 5px;
        }
        
        .stats-bitcoin h3 {
          margin: 0 0 5px;
          font-size: 1em;
        }
        
        .stats-bitcoin span {
          font-size: 1.2em;
        }
        
        .heading-stats {
          color: #32ade6;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          text-align: left;
        }
        .header-bitcoin h3 {
          background-color: #eff2f40a;
          color: #0083f8;
          //styleName: Paragraph/P1/Regular;
          font-family: Inter;
          font-size: 14px;
          font-weight: 400;
          line-height: 17px;
          text-align: left;
          padding: 10px;
          gap: 10px;
          margin-right: 140px;
        }
        
        `}
      </style>
      <div className="dashboard">
        <Sidebar selected={selected} handleItemClick={handleItemClick} />
        <Content logo={blockPayLogo} name={"Dashboard"}>
          <Dashboard totalSalary={totalSalary} />
        </Content>
      </div>
    </div>
  );
};

export default HrDashboard;
