const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");
dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to database !!!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.use("/users", userRouter);
const port = 1234;

app.listen(port, () => {
  console.log("The serer is running !!!");
});
