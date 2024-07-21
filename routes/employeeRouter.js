const express = require("express");
const router = express.Router();
const employeeController = require("../Controllers/employeeController");

// Route to add a new employee
router.get("/", employeeController.getEmployeeDetails);
router.get("/history", employeeController.getEmployeeSalaryHistory);
router.post("/btc-to-wbtc", employeeController.swapBtcToWbtc);
router.post("/wbtc-to-btc", employeeController.swapWbtcTobtc);

module.exports = router;
