require("dotenv").config();

// mongodb connection
const mongoose = require("mongoose");
const uri = process.env.IS_PROD === 'true' ? process.env.DB_URI : process.env.DB_URI_DEV;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

// server connetion
require("./app");
