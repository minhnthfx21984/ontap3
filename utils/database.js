// Kết nối với mongodb
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://minhnthfx21984:hienminh@ontap.ggxmznz.mongodb.net/ontap",
  { useNewUrlParser: true, useUnifiedTopology: true },
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Lỗi kết nối"));
db.once("open", () => {
  console.log("Kết nối thành công");
});

module.exports = mongoose;
