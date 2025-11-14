const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { signUp, login } = require("../controllers/authController");

const Router = express.Router();

Router.route("/signup").post(signUp);
Router.route("/login").post(login);

Router.route("/").post(createUser).get(getAllUsers);
Router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = Router;
