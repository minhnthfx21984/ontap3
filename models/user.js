const mongoose = require("mongoose");

// Tạo model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile" },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
