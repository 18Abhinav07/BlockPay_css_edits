const express = require("express");
const router = express.Router();
const financeController = require("../Controllers/financeController");

router.get("/", financeController.checkBalance);
router.post("/", financeController.depositFunds);

module.exports = router;
