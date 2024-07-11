const express = require("express");
const app = express();

const port = 3000;
const prefix = "/api/v1";

app.use(express.json());

// const router = require("./routes/router");
const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const adminRouter = require("./routes/adminRouter");

app.use('/login', loginRouter);
app.use(`/register`, registerRouter);
app.use(`${prefix}/:companyName/admin`, adminRouter);

// app.use(`${prefix}/:name`, router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
