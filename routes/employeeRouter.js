const express = require("express");
const router = express.Router();
const employeeController = require("../Controllers/employeeController");

// Route to add a new employee
router.get("/", employeeController.getEmployeeDetails);

module.exports = router;
