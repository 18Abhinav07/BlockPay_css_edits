const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const employeeSchema = require("./employeeSchema");

// Define the admin schema
const adminSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Hash the password before saving the admin
adminSchema.pre("save", function (next) {
  const admin = this;
  if (!admin.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) return next(err);
      admin.password = hash;
      next();
    });
  });
});

// Define the company schema
const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true, unique: true },
  admin: adminSchema,
  emps: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  deployAccount: { type: String, required: true },
});

// Create the company model
const Company = mongoose.model("Company", companySchema);

module.exports = Company;
