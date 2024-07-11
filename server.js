// mongodb connection
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://sahil:mongomongo@cluster0.wtlgbek.mongodb.net/blockpay?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));


// server connetion  
require("./app");
