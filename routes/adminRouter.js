const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

router.get("/total-salary", adminController.totalSalaryToBePaid);
router.get("/get-all-employees", adminController.getAllEmployees);
router.post("/add-employee", adminController.addEmployee);
router.delete("/remove-employee/:account", adminController.removeEmployee);
router.put("/update-employee", adminController.updateEmployee);
router.post("/pay-salary", adminController.payAllEmployees);

module.exports = router;
