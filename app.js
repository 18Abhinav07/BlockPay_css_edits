const cors = require("cors");
const express = require("express");
const app = express();

const port = 5000;
const prefix = "/api/v1";

app.use(cors());
app.use(express.json());

// const router = require("./routes/router");
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const adminRouter = require("./routes/adminRouter");
const authRouter = require("./Controllers/authController");
const employeeRouter = require("./routes/employeeRouter");
const financeRouter = require("./routes/financeRouter");

app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/admin", authRouter.isLoggedIn, authRouter.checkForHR, adminRouter);
app.use(
  "/employee",
  authRouter.isLoggedIn,
  authRouter.checkForEmployee,
  employeeRouter
);
app.use("/finance", authRouter.isLoggedIn, authRouter.checkForHR, financeRouter);

//  404 handler middleware
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
