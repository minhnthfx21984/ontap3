const User = require("../models/user");

exports.getUser = async (req, res, next) => {
  const users = await User.find();
  res.render("users/listUser", { users: users });
};

exports.createCookie = (req, res, next) => {
  req.session.username = "hienminhhhhh";
  res.send("sesison đã thiết lập");
};

exports.checkUser = async (req, res, next) => {
  const auth = req.session.username;
  console.log(auth);

  if (auth) {
    next();
  } else {
    next(new Error("Not Permission"));
  }
};

exports.uploadFile = async (req, res, next) => {
  console.log(req.file.path);
  res.send("ok");
};
