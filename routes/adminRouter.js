const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

// Route to add a new employee
router.post("/add-employee", adminController.addEmployee);
router.delete("/remove-employee/:account", adminController.removeEmployee);
router.put("/update-employee/:account", adminController.updateEmployee);
router.post("/pay-salary", adminController.payAllEmployees);

module.exports = router;
