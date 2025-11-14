const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (id, name, email, role) => {
  return jwt.sign({ id, name, email, role }, process.env.SECRET_KEY, {
    expiresIn: "60d",
  });
};

exports.signUp = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      confirmPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "fail",
        message: "Email and Password are required !!!",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        status: "fail",
        message: "User not found !!!",
      });
    }
    if (!(await user.checkPassword(password, user.password))) {
      res.status(400).json({
        status: "fail",
        message: "Pass incorrect !!!",
      });
    }
    const token = createToken(user._id, user.name, user.email, user.role);
    res.status(200).json({
      status: "success",
      message: "Logged In !",
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
