const Company = require("../models/companySchema");
const web3Utils = require("../solidity/web3");

const depositFunds = async (req, res) => {
  try {
    const companyName = req.user.companyName;
    const amounntInEther = req.body.amount;

    const companyObj = await Company.findOne({ companyName });

    await web3Utils.depositFunds(companyObj.deployAccount, amounntInEther);

    res.status(200).json({
      status: "success",
      message: `${amounntInEther} ether deposit to ${companyObj.deployAccount}`,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

const checkBalance = async (req, res) => {
  const companyName = req.user.companyName;
  const companyObj = await Company.findOne({ companyName });

  const balance = await web3Utils.checkBalance(companyObj.deployAccount);

  res.status(200).json({
    status: "success",
    data: `${balance} ether`,
  });
};

module.exports = {
  depositFunds,
  checkBalance,
};
