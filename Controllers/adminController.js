const BigNumber = require("bignumber.js");

const Company = require("../models/companySchema");
const Employee = require("../models/employeeSchema");
const web3Utils = require("../solidity/web3");
const { sendEmail } = require("../utils/nodemailer");
const { generateRandomPassword } = require("../utils/random");

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

    // TODO
    const username = "user@example.com";
    const password = "123";

    const mailOptions = {
      from: `"Your Name" <${process.env.EMAIL_USER}>`,
      email: "sahil.saxena.58555@gmail.com",
      subject: "Your Account Details",
      text: `Hello,\n\nYour account has been created.\n\nUsername: ${username}\nPassword: ${password}\n\nBest Regards,\nYour Company`,
      message: `<p>Hello,</p><p>Your account has been created.</p><p><strong>Username:</strong> ${username}</p><p><strong>Password:</strong> ${password}</p><p>Best Regards,<br>Your Company</p>`,
    };

    //sendEmail(mailOptions); // send email

    const employee = new Employee({
      name,
      salary,
      designation,
      password,
      account,
    });

    const companyObj = await Company.findOne({ companyName }).populate("emps");

    const hasEmployee = companyObj.emps.filter((emp) => emp.name === name);

    if (hasEmployee.length > 0) {
      return res.status(404).json({
        status: "failed",
        message: "Employee alreday exist",
      });
    }

    await employee.save();

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

const getAllEmployees = async (req, res) => {
  try {
    const companyName = req.user.companyName;

    const companyObj = await Company.findOne({ companyName }).populate("emps");
    res.status(200).json({
      status: "success",
      data: companyObj.emps,
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
    const { account, salary, payStartDate, payEndDate } = req.body;

    const companyName = req.user.companyName;

    const companyObj = await Company.findOne({ companyName });
    await web3Utils.updateEmployee(
      companyObj.deployAccount,
      account,
      salary,
      payStartDate,
      payEndDate
    );

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

const totalSalaryToBePaid = async (req, res) => {
  try {
    const companyName = req.user.companyName;
    const companyObj = await Company.findOne({ companyName });

    const totalSalary = await web3Utils.totalSalaryToBePaid(
      companyObj.deployAccount
    );
    res.status(200).json({
      status: "success",
      data: `${totalSalary.toString()} ether`,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

const payAllEmployees = async (req, res) => {
  try {
    const companyName = req.user.companyName;
    const companyObj = await Company.findOne({ companyName });
    const currentBalance = new BigNumber(
      await web3Utils.checkBalance(companyObj.deployAccount)
    );
    const totalSalaryToBePaid = new BigNumber(
      await web3Utils.totalSalaryToBePaid(companyObj.deployAccount)
    );

    if (currentBalance.isLessThan(totalSalaryToBePaid)) {
      return res.status(404).json({
        status: "failed",
        message: "Insufficient funds to pay all employees",
      });
    }

    await web3Utils.payAllEmployees(companyObj.deployAccount);

    res.status(200).json({
      status: "success",
      message: "Salary successfully paid",
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
  payAllEmployees,
  totalSalaryToBePaid,
  getAllEmployees
};
