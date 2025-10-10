const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
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
const port = 1234;

app.listen(port, () => {
  console.log("The serer is running !!!");
});
