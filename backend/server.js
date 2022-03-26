const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

let count = 0;

app.get("/", (req, res) => {
  return res.json({
    message: "App run successful",
    count,
  });
});

io.on("connection", (socket) => {
  console.log(`Socket user ID: ${socket.id} connect`);
  count++;
  socket.on("disconnect", () => {
    console.log(`Socket user ID: ${socket.id} disconnect`);
    count--;
  });
});

server.listen(3001, () => {
  console.log("listening on port 3001");
});
