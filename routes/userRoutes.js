const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const Router = express.Router();

Router.post("/", createUser).get("/", getAllUsers);
Router.get("/:id", getUserById)
  .patch("/:id", updateUserById)
  .delete("/:id", deleteUserById);

module.exports = Router;
