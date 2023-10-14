const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  transports: ["websocket"],
});

app.use(cors());
app.get("/", (req, res, next) => {
  res.send("hello");
});

io.on("connection", (socket) => {
  console.log("Người dùng đã kết nối");

  // Thay vì sử dụng io.on, bạn nên sử dụng socket.on để bắt các sự kiện từ mỗi kết nối riêng
  socket.on("browserMessage", (message) => {
    console.log(message);
    // Gửi lại tin nhắn từ máy chủ đến trình duyệt
    io.emit("serverMessage", "Xin chào từ máy chủ Socket.IO!");
  });

  // Thay vì sử dụng io.on, bạn nên sử dụng socket.on để bắt sự kiện ngắt kết nối
  socket.on("disconnect", () => {
    console.log("Người dùng đã ngắt kết nối");
  });
});

server.listen(8000, () => {
  console.log("Máy chủ đang chạy trên cổng 8000");
});
