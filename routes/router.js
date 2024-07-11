const express = require("express");
const router = express.Router();

router
  .route("/admin")
  .get((req, res) => {
        console.log("api hit admin");
        res.send("hiii admin");
  })

router
  .route("/employee")
  .get((req, res) => {
        console.log("api hit ");
        res.send("hiii ");
  })

module.exports = router;