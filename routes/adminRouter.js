const express = require("express");
const router = express.Router();
const adminController = require("../Controllers/adminController");

// Route to add a new employee
router.post("/add-employee", adminController.addEmployee);
router.delete("/remove-employee/:account", adminController.removeEmployee);
router.put("/update-employee/:account", adminController.updateEmployee)

// // Route to update an employee by ID
// router.put("/admin/employee/:id", (req, res) => {
//   const { id } = req.params;
//   const updatedEmployee = req.body;
//   let employeeFound = false;
//   employees = employees.map((emp) => {
//     if (emp.id === id) {
//       employeeFound = true;
//       return { ...emp, ...updatedEmployee };
//     }
//     return emp;
//   });
//   if (employeeFound) {
//     console.log(`Employee with ID ${id} updated`);
//     res.send(`Employee with ID ${id} updated`);
//   } else {
//     res.status(404).send(`Employee with ID ${id} not found`);
//   }
// });

module.exports = router;
