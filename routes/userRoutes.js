const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");
const { signUp } = require("../controllers/authController");

const Router = express.Router();

Router.route("/signup").post(signUp);

Router.route("/").post(createUser).get(getAllUsers);
Router.route("/:id")
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = Router;
