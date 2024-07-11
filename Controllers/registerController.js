const Company = require("../models/companySchema");
const { deploy } = require("../solidity/web3");

const register = async (req, res) => {
  try {
    const newCompany = new Company({
      companyName: req.body.companyName,
      admin: {
        username: req.body.username,
        password: req.body.password,
      },
      emps: [],
      deployAccount: "",
    });

    newCompany.deployAccount = await deploy();

    await newCompany.save();

    res.status(200).json({
      status: "success",
      message: "Company registered",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  register,
};
