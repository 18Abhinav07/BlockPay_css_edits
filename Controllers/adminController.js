const Company = require("../models/companySchema");
const Employee = require("../models/employeeSchema");
const web3Utils = require("../solidity/web3");

const addEmployee = async (req, res) => {
  try {
    const {
      account,
      salary,
      payStartDate,
      payEndDate,
      name,
      department,
      designation,
    } = req.body;

    const companyName = req.user.companyName;
    // ToDO
    const password = "123";

    const employee = new Employee({
      name,
      salary,
      designation,
      password,
      account,
    });

    await employee.save();

    const companyObj = await Company.findOne({ companyName });

    await web3Utils.addEmployee(
      companyObj.deployAccount,
      account,
      salary,
      payStartDate,
      payEndDate
    );

    // Add the new employee to the company's employees array
    companyObj.emps.push(employee);

    // Save the updated company document
    await companyObj.save();

    res.status(200).json({
      status: "success",
      message: "Employee added",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

const removeEmployee = async (req, res) => {
  try {
    const { account } = req.params;

    const companyName = req.user.companyName;

    const companyObj = await Company.findOne({ companyName }).populate("emps");

    await web3Utils.removeEmployee(companyObj.deployAccount, account);
    // remove company
    companyObj.emps = companyObj.emps.filter((emp) => emp.account !== account);

    await companyObj.save();
    await Employee.deleteOne({ account });

    res.status(200).json({
      status: "success",
      message: "Employee deleted",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { account } = req.params;

    const companyName = req.user.companyName;

    const companyObj = await Company.findOne({ companyName }).populate("emps");

    const employeeObj = await Employee.findOne({ account });

    employeeObj.name = req.body.name || employeeObj.name;
    employeeObj.salary = req.body.salary || employeeObj.salary;
    employeeObj.account = req.body.account || employeeObj.account;
    employeeObj.designation = req.body.designation || employeeObj.designation;

    await employeeObj.save();

    res.status(200).json({
      status: "success",
      message: "Employee updated",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  addEmployee,
  removeEmployee,
  updateEmployee,
};
