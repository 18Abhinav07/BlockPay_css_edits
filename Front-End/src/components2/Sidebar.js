import React from "react";
import dashboardIcon from "../icons/Dashboard.svg";
import statusIcon from "../icons/YourStatus.svg";
import hrIcon from "../icons/CoreHR.svg";
import financeIcon from "../icons/Finance.svg";
import tasksIcon from "../icons/Tasks.svg";
import performanceIcon from "../icons/Performance.svg";
import projectsIcon from "../icons/Projects.svg";
import reportsIcon from "../icons/Reports.svg";
import walletIcon from "../icons/ManageWallet.svg";
import appsIcon from "../icons/Apps.svg";
import chartsIcon from "../icons/Charts.svg";
import formsIcon from "../icons/Forms.svg";
import tableIcon from "../icons/Table.svg";
import pagesIcon from "../icons/Pages.svg";

const icons = {
  Dashboard: dashboardIcon,
  "Your Status": statusIcon,
  "Core HR": hrIcon,
  Finance: financeIcon,
  Tasks: tasksIcon,
  Performance: performanceIcon,
  Projects: projectsIcon,
  Reports: reportsIcon,
  "Manage Wallet": walletIcon,
  Apps: appsIcon,
  Charts: chartsIcon,
  Forms: formsIcon,
  Table: tableIcon,
  Pages: pagesIcon,
};

const Sidebar = ({ selected, handleItemClick }) => {
  return (
    <aside className="sidebar">
      <div className="company-name">Your Company</div>
      <nav className="sidebar-menu">
        <ul>
          {[
            "Dashboard",
            "Your Status",
            "Core HR",
            "Finance",
            "Tasks",
            "Performance",
            "Projects",
            "Reports",
            "Manage Wallet",
          ].map((item, index) => (
            <li
              key={index}
              className={selected === item ? "active" : ""}
              onClick={() => handleItemClick(item)}
            >
              <img src={icons[item]} alt={item} className="icon" />
              {item}
            </li>
          ))}
        </ul>
        <div className="sidebar-header-2">
          <p>OUR FEATURES</p>
        </div>
        <ul className="features-list">
          {["Apps", "Charts", "Forms", "Table", "Pages"].map((item, index) => (
            <li
              key={index}
              className={selected === item ? "active" : ""}
              onClick={() => handleItemClick(item)}
            >
              <img src={icons[item]} alt={item} className="icon" />
              {item}
              <span className="diamond-bullet">&#9670;</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="help-desk">Help Desk</div>
    </aside>
  );
};

export default Sidebar;
