const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//TODO
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
  designation: { type: String, required: true },
  password: { type: String, required: true },
  account: {type: String, required: true}
  // Add other fields as necessary
});

// Hash the password before saving the admin
employeeSchema.pre("save", function (next) {
  const employee = this;
  if (!employee.isModified("password")) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(employee.password, salt, (err, hash) => {
      if (err) return next(err);
      employee.password = hash;
      next();
    });
  });
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
