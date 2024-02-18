const catchAsync = require("../utils/catchAsync");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const UserModel = require("../models/user-model");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  });

  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const { email, name, password, passwordConfirm, phoneNumber } = req.body;
  if (!email || !name || !password || !passwordConfirm || !phoneNumber) {
    return next(
      new AppError(
        "Invalid fields, please make sure all fields are filled correctly",
        401
      )
    );
  }
  const newUser = await UserModel.create({
    name,
    email,
    phoneNumber,
    password,
    passwordConfirm,
  });

  createSendToken(newUser, 201, req, res);
});

exports.login = catchAsync(async (req, res, next) => {
  console.log(req.protocol);
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("The passwords does not match", 400));
  }

  const user = await UserModel.findOne({ email }).select("+password");

  if (!user || !(await user.checkPassWords(password, user.password))) {
    return next(new AppError("invalid password or email", 401));
  }

  createSendToken(user, 200, req, res);
});
