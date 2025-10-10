const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required !!!!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    validate: [validator.isEmail, "Please provide a valid email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
  },
  confirmPassword: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    validate: function (cPass) {
      return cPass === this.password;
    },
    message: "Passwords are not the same !!!",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  lastModifiedPasswordDate: {
    type: Date,
    default: Date.now(),
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
