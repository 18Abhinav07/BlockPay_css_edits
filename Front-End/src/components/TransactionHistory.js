import React from "react";
import bonusIcon from "../icons/bonus.svg";
import salaryDepositIcon from "../icons/salary-deposit.svg";

const TransactionHistory = ({ salaries, account }) => {
  const scale = 1e18;
  return (
    <div className="transaction-history">
      <h2>Transaction History</h2>
      <div className="transaction-list">
        {salaries.map((salary, index) => (
          <div className="transaction" key={index}>
            <div className="transaction-header">
              <img
                src={salaryDepositIcon}
                alt={"image"}
                className="transaction-icon"
              />
              <div className="transaction-amount">{`${salary / scale} ether`}</div>
            </div>
            <div className="transaction-id">{account}</div>
            <div className="transaction-date">{"20/8/23"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
