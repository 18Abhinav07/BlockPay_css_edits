const Company = require("../models/companySchema");
const web3Utils = require("../solidity/web3");

const getEmployeeDetails = async (req, res) => {
  try {
    const companyName = req.user.companyName;
    const account = req.user.account;

    const companyObj = await Company.findOne({ companyName });

    const employee = await web3Utils.getEmployeeDetails(
      companyObj.deployAccount,
      account
    );

    const result = {
      account: employee[0],
      salary: employee[1].toString(),
      payStartDate: employee[2].toString(),
      payStartEnd: employee[3].toString(),
    };

    return res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

const getEmployeeSalaryHistory = async (req, res) => {
  try {
    const companyName = req.user.companyName;
    const account = req.user.account;

    const companyObj = await Company.findOne({ companyName });
    let empSalary = await web3Utils.getHistory(
      companyObj.deployAccount,
      account
    );

    empSalary = empSalary.map((salary) => salary.toString()); // converting bigint to string

    res.status(200).json({
      status: "success",
      data: empSalary,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = { getEmployeeDetails, getEmployeeSalaryHistory };
