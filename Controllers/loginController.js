const bcrypt = require("bcryptjs");
const Company = require("../models/companySchema");
const { generateToken } = require("../utils/jwt");

const login = async (req, res) => {
  try {
    const { companyName, username, password, isHR } = req.body;

    const companyObject = await Company.findOne({ companyName }).populate("emps");

    if (!companyObject)
      return res.status(200).json({
        message: "Company not found",
      });

    let isMatch;
    let account;

    if (isHR) {
      if (companyObject.admin.username !== username)
        return res.status(200).json({
          message: "User not found",
        });

      isMatch = await bcrypt.compare(password, companyObject.admin.password);
    } else {
      const emp = companyObject.emps.find((emp) => emp.name === username);

      if (!emp)
        return res.status(200).json({
          message: "User not found",
        });
      account = emp.account;
      isMatch = await bcrypt.compare(password, emp.password);
    }

    if (!isMatch)
      return res.status(200).json({
        message: "Password incorrect",
      });

    const token = generateToken({ companyName, account });

    return res.status(200).json({
      status: "success",
      message: "Login successfull",
      token,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

module.exports = {
  login,
};
