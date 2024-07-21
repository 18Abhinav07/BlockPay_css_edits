import React from "react";

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "./Dashboard.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const Dashboard = ({ totalSalary }) => {
  const options = {
    title: {
      text: "My chart",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };
  return (
    <>
      <div className="UpperStats">
        <div className="inner">
          <div className="number">Total number of Deposits</div>
          <div className="subheading">
            <div className="fifteen">15</div>
            <div className="icon"></div>
          </div>
          <div className="bar"></div>
        </div>
        <div className="inner">
          <div>Amount statistics</div>
          <div className="stats">
            <div className="stats1"></div>
            <div className="stats2"></div>
          </div>
        </div>
        <div className="inner">
          <div>This month Deposit</div>
          <div className="deposit">
            <div className="amount">{totalSalary}</div>
            <div className="dollar"></div>
          </div>

          <div className="graph"></div>
        </div>
      </div>
      <div className="LowerStats">
        <div className="inner">
          <div className="one">
            <div>Work Overview</div>
            <div className="twentyfour">2024</div>
          </div>
          <div className="statistics"></div>
        </div>
        <div className="inner">
          <div>Upcoming Schedules</div>
          <div className="calendar"></div>

          {/* <DatePicker defaultValue={new Date('2022-04-17')} /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
